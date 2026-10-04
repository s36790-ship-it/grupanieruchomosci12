/**
 * Worker Cloudflare dla grupa-nieruchomosci.pl
 *
 * - Strona jest w pełni statyczna (Astro → dist/) i serwowana jako „static assets” — bez zużycia CPU Workera.
 * - Worker obsługuje tylko POST /api/zapytanie: waliduje zgłoszenie z formularza i wysyła je e-mailem przez Resend.
 *
 * Konfiguracja (Cloudflare → Workers → grupa-nieruchomosci → Settings → Variables and Secrets):
 *   RESEND_API_KEY      (Secret)  klucz z resend.com → API Keys, uprawnienie „Sending access”
 *   FORMULARZ_ODBIORCA  (Text)    dokąd trafiają zgłoszenia, np. kontakt@grupa-nieruchomosci.pl
 *   FORMULARZ_NADAWCA   (Text)    nadawca z ZWERYFIKOWANEJ w Resend domeny, np. "Grupa Nieruchomości <formularz@grupa-nieruchomosci.pl>"
 *   DOZWOLONE_ORIGINY   (Text)    adresy stron, z których wolno wysyłać formularz, rozdzielone przecinkami
 */

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
  FORMULARZ_ODBIORCA?: string;
  FORMULARZ_NADAWCA?: string;
  DOZWOLONE_ORIGINY?: string;
}

type Zgloszenie = Record<string, unknown>;

const LIMITY: Record<string, number> = {
  typ: 20, usluga: 200, sciezka: 300, temat: 120, imie: 120, kontakt: 200, termin: 40, forma: 120, wiadomosc: 4000,
};

const tekst = (d: Zgloszenie, pole: string) => String(d[pole] ?? '').trim().slice(0, LIMITY[pole] ?? 200);
const wygladaJakEmail = (t: string) => /^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(t);
const wygladaJakTelefon = (t: string) => (t.match(/\d/g) ?? []).length >= 9 && /^[+\d\s()./-]+$/.test(t);
const html = (t: string) =>
  t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const json = (dane: unknown, status = 200) =>
  new Response(JSON.stringify(dane), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

function dozwolonyOrigin(req: Request, env: Env): boolean {
  const origin = req.headers.get('Origin');
  if (!origin) return false;
  const wlasny = new URL(req.url).origin;
  const lista = (env.DOZWOLONE_ORIGINY ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return origin === wlasny || lista.includes(origin);
}

async function obsluzZapytanie(req: Request, env: Env): Promise<Response> {
  if (req.method !== 'POST') return json({ ok: false, blad: 'Metoda niedozwolona.' }, 405);
  if (!dozwolonyOrigin(req, env)) return json({ ok: false, blad: 'Niedozwolone źródło zgłoszenia.' }, 403);
  if (Number(req.headers.get('Content-Length') ?? 0) > 20_000) return json({ ok: false, blad: 'Zgłoszenie jest za długie.' }, 413);

  let dane: Zgloszenie;
  try {
    const typ = req.headers.get('Content-Type') ?? '';
    dane = typ.includes('application/json')
      ? ((await req.json()) as Zgloszenie)
      : Object.fromEntries((await req.formData()).entries());
  } catch {
    return json({ ok: false, blad: 'Nieprawidłowe dane formularza.' }, 400);
  }

  // Pułapka na boty: pole niewidoczne dla ludzi. Udajemy sukces, nic nie wysyłamy.
  if (tekst(dane, 'firma_www')) return json({ ok: true });

  const kontakt = tekst(dane, 'kontakt');
  if (!wygladaJakEmail(kontakt) && !wygladaJakTelefon(kontakt)) {
    return json({ ok: false, blad: 'Podaj poprawny numer telefonu albo adres e-mail.' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.FORMULARZ_ODBIORCA || !env.FORMULARZ_NADAWCA) {
    console.error('[formularz] Brak konfiguracji: RESEND_API_KEY / FORMULARZ_ODBIORCA / FORMULARZ_NADAWCA');
    return json({ ok: false, blad: 'Nie udało się wysłać zgłoszenia. Zadzwoń albo napisz na kontakt@grupa-nieruchomosci.pl.' }, 503);
  }

  const spotkanie = tekst(dane, 'typ') === 'spotkanie';
  const usluga = tekst(dane, 'temat') || tekst(dane, 'usluga') || 'formularz';
  const wiersze: [string, string][] = [
    ['Rodzaj', spotkanie ? 'Umówienie spotkania' : 'Pytanie'],
    ['Czego dotyczy', tekst(dane, 'temat') || '—'],
    ['Wysłano ze strony', `${tekst(dane, 'usluga') || '—'} (${tekst(dane, 'sciezka') || '/'})`],
    ['Imię', tekst(dane, 'imie') || '—'],
    ['Kontakt', kontakt],
    ...(spotkanie
      ? ([
          ['Preferowany termin', tekst(dane, 'termin') || '—'],
          ['Forma spotkania', tekst(dane, 'forma') || '—'],
        ] as [string, string][])
      : []),
  ];
  const wiadomosc = tekst(dane, 'wiadomosc') || '(brak wiadomości)';

  const trescTekst = [...wiersze.map(([k, v]) => `${k}: ${v}`), '', wiadomosc].join('\n');
  const trescHtml = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#202B36;line-height:1.5">
<h2 style="font-family:Georgia,serif;color:#162D43;font-weight:500">Nowe zgłoszenie ze strony</h2>
<table cellpadding="6" style="border-collapse:collapse">${wiersze
    .map(([k, v]) => `<tr><td style="color:#4A5663;vertical-align:top">${html(k)}</td><td><strong>${html(v)}</strong></td></tr>`)
    .join('')}</table>
<p style="border-left:2px solid #B89A61;padding-left:12px;white-space:pre-wrap">${html(wiadomosc)}</p>
${wygladaJakEmail(kontakt) ? '<p style="color:#4A5663;font-size:13px">Odpowiedz na tę wiadomość — trafi bezpośrednio do zgłaszającego.</p>' : '<p style="color:#4A5663;font-size:13px">Zgłaszający podał numer telefonu — oddzwoń.</p>'}
</body></html>`;

  try {
    const odp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.FORMULARZ_NADAWCA,
        to: env.FORMULARZ_ODBIORCA.split(',').map((s) => s.trim()).filter(Boolean),
        subject: `${spotkanie ? 'Prośba o spotkanie' : 'Nowe zapytanie'}: ${usluga}`,
        text: trescTekst,
        html: trescHtml,
        ...(wygladaJakEmail(kontakt) ? { reply_to: kontakt } : {}),
      }),
    });
    if (!odp.ok) {
      console.error('[formularz] Resend odpowiedział', odp.status, await odp.text());
      return json({ ok: false, blad: 'Nie udało się wysłać zgłoszenia. Zadzwoń albo napisz na kontakt@grupa-nieruchomosci.pl.' }, 502);
    }
  } catch (e) {
    console.error('[formularz] Błąd połączenia z Resend', e);
    return json({ ok: false, blad: 'Nie udało się wysłać zgłoszenia. Zadzwoń albo napisz na kontakt@grupa-nieruchomosci.pl.' }, 502);
  }

  return json({ ok: true, wyslanoEmail: true });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(req.url);
    if (pathname === '/api/zapytanie') return obsluzZapytanie(req, env);
    if (pathname.startsWith('/api/')) return json({ ok: false, blad: 'Nie znaleziono.' }, 404);
    return env.ASSETS.fetch(req);
  },
};

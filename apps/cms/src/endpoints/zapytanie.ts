import type { Endpoint } from 'payload'

const ODBIORCA = process.env.FORMULARZ_ODBIORCA || 'kontakt@grupa-nieruchomosci.pl'
const NADAWCA = process.env.FORMULARZ_NADAWCA || 'Formularz <formularz@grupa-nieruchomosci.pl>'

const wygladaJakEmail = (t: string) => /^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(t.trim())

/** Wysyłka przez Resend. Bez klucza API zwracamy false — nie udajemy, że mail poszedł. */
async function wyslijMail(tresc: { temat: string; tekst: string; odpowiedzDo?: string }) {
  const klucz = process.env.RESEND_API_KEY
  if (!klucz) return false
  try {
    const odp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${klucz}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: NADAWCA,
        to: [ODBIORCA],
        subject: tresc.temat,
        text: tresc.tekst,
        ...(tresc.odpowiedzDo ? { reply_to: tresc.odpowiedzDo } : {}),
      }),
    })
    return odp.ok
  } catch {
    return false
  }
}

export const zapytanieEndpoint: Endpoint = {
  path: '/zapytanie',
  method: 'post',
  handler: async (req) => {
    const dane = (await req.json?.()) ?? {}

    // Pułapka na boty — pole niewidoczne dla ludzi.
    if (dane.firma_www) return Response.json({ ok: true })

    const kontakt = String(dane.kontakt ?? '').trim()
    if (kontakt.length < 6) {
      return Response.json({ ok: false, blad: 'Podaj telefon lub adres e-mail.' }, { status: 400 })
    }

    const zapisane = await req.payload.create({
      collection: 'zapytania',
      overrideAccess: true,
      data: {
        typ: dane.typ === 'spotkanie' ? 'spotkanie' : 'pytanie',
        usluga: String(dane.usluga ?? '').slice(0, 200),
        sciezka: String(dane.sciezka ?? '').slice(0, 300),
        imie: String(dane.imie ?? '').slice(0, 120),
        kontakt: kontakt.slice(0, 200),
        termin: dane.termin || undefined,
        forma: String(dane.forma ?? '').slice(0, 120),
        wiadomosc: String(dane.wiadomosc ?? '').slice(0, 4000),
        statusObslugi: 'nowe',
      },
    })

    const wyslano = await wyslijMail({
      temat: `Nowe zgłoszenie ze strony: ${dane.usluga || 'formularz'}`,
      tekst: [
        `Rodzaj: ${dane.typ === 'spotkanie' ? 'umówienie spotkania' : 'pytanie'}`,
        `Usługa: ${dane.usluga ?? '-'}`,
        `Podstrona: ${dane.sciezka ?? '-'}`,
        `Imię: ${dane.imie || '-'}`,
        `Kontakt: ${kontakt}`,
        `Preferowany termin: ${dane.termin || '-'}`,
        `Forma spotkania: ${dane.forma || '-'}`,
        '',
        String(dane.wiadomosc || '(brak wiadomości)'),
      ].join('\n'),
      odpowiedzDo: wygladaJakEmail(kontakt) ? kontakt : undefined,
    })

    return Response.json({ ok: true, id: zapisane.id, wyslanoEmail: wyslano })
  },
}

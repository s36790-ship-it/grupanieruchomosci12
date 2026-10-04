/**
 * Pobieranie treści z Payloada. Wywoływane wyłącznie po stronie serwera (build).
 * Gdy CMS jest niedostępny, wracamy do treści z src/data — build nigdy się nie wywraca.
 */
import { firma as firmaLokalna, uslugi as uslugiLokalne, sciezki, dzialania, decyzja, model } from '../data/site';
import { tresci, przedPoLokalne } from '../data/tresci';

const ADRES = import.meta.env.PAYLOAD_URL ?? process.env.PAYLOAD_URL ?? 'http://localhost:3000';

const pamiec = new Map<string, Promise<unknown>>();

function zCms<T>(sciezka: string): Promise<T | null> {
  if (!pamiec.has(sciezka)) pamiec.set(sciezka, pobierz<T>(sciezka));
  return pamiec.get(sciezka) as Promise<T | null>;
}

async function pobierz<T>(sciezka: string): Promise<T | null> {
  try {
    const odp = await fetch(`${ADRES}/api/${sciezka}`, {
      headers: { Accept: 'application/json' },
      // Uśpiony lub niedostępny panel nie może zawiesić buildu w Cloudflare.
      signal: AbortSignal.timeout(Number(process.env.CMS_TIMEOUT_MS ?? 8000)),
    });
    if (!odp.ok) throw new Error(`HTTP ${odp.status}`);
    return (await odp.json()) as T;
  } catch (e) {
    console.warn(`[cms] ${sciezka}: ${(e as Error).message} — używam treści lokalnych.`);
    return null;
  }
}

export type UslugaZTrescia = {
  slug: string;
  nazwa: string;
  tytul: string;
  lead: string;
  obraz: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
  wstep: string[];
  proces: { nazwa: string; opis: string }[];
  zakres: string[];
  uwaga?: string;
  faq: { pytanie: string; odpowiedz: string }[];
  ctaTytul: string;
  ctaOpis: string;
  przedPo?: { przed: { url: string; alt: string }; po: { url: string; alt: string }; opis?: string; pogladowe: boolean };
  powiazania: { etykieta: string; href: string; opis: string }[];
  zrodlo: 'cms' | 'lokalne';
};

const lokalnaUsluga = (slug: string): UslugaZTrescia => {
  const u = uslugiLokalne.find((x) => x.slug === slug)!;
  const t = tresci[slug];
  return { ...u, ...t, przedPo: przedPoLokalne[slug], zrodlo: 'lokalne' };
};

export async function pobierzUslugi(): Promise<UslugaZTrescia[]> {
  const odp = await zCms<{ docs: any[] }>('uslugi?limit=50&depth=1');
  if (!odp?.docs?.length) return uslugiLokalne.map((u) => lokalnaUsluga(u.slug));

  return odp.docs.map((d) => {
    const zapas = uslugiLokalne.find((u) => u.slug === d.adres);
    const zapasTresc = tresci[d.adres];
    return {
      slug: d.adres,
      nazwa: d.nazwa,
      tytul: d.naglowek,
      lead: d.lead,
      obraz: d.zdjecie?.url ?? zapas?.obraz ?? '/images/og-default.jpg',
      alt: d.zdjecie?.alt ?? zapas?.alt ?? '',
      metaTitle: d.seo?.metaTitle || zapas?.metaTitle || d.nazwa,
      metaDescription: d.seo?.metaDescription || zapas?.metaDescription || d.lead,
      wstep: (d.wstep ?? []).map((a: any) => a.tresc),
      proces: (d.proces ?? []).map((k: any) => ({ nazwa: k.nazwa, opis: k.opis })),
      zakres: (d.zakres ?? []).map((z: any) => z.tresc),
      uwaga: d.uwaga || undefined,
      faq: (d.faq ?? []).map((p: any) => ({ pytanie: p.pytanie, odpowiedz: p.odpowiedz })),
      przedPo:
        d.przedPo?.przed?.url && d.przedPo?.po?.url
          ? {
              przed: { url: d.przedPo.przed.url, alt: d.przedPo.przed.alt ?? 'Stan przed pracami' },
              po: { url: d.przedPo.po.url, alt: d.przedPo.po.alt ?? 'Stan po pracach' },
              opis: d.przedPo.opis || undefined,
              pogladowe: Boolean(d.przedPo.pogladowe),
            }
          : przedPoLokalne[d.adres],
      ctaTytul: d.cta?.tytul || 'Porozmawiajmy',
      ctaOpis: d.cta?.opis || '',
      powiazania: zapasTresc?.powiazania ?? [],
      zrodlo: 'cms',
    };
  });
}

export type Blok =
  | { typ: 'lista'; tytul: string; wstep?: string; punkty: string[] }
  | { typ: 'porownanie'; tytul: string; kolumnaA: string; kolumnaB: string; wiersze: { cecha: string; a: string; b: string }[]; podsumowanie?: string }
  | { typ: 'uwaga'; tytul: string; tresc: string };

export type Lokalizacja = {
  slug: string;
  tytul: string;
  miejscowosc: string;
  uslugaSlug: string;
  uslugaNazwa: string;
  tresc: string[];
  proces: { nazwa: string; opis: string }[];
  bloki: Blok[];
  faq: { pytanie: string; odpowiedz: string }[];
  metaTitle: string;
  metaDescription: string;
};

const doBloku = (b: any): Blok | null => {
  if (b.blockType === 'lista') return { typ: 'lista', tytul: b.tytul, wstep: b.wstep || undefined, punkty: (b.punkty ?? []).map((p: any) => p.tresc) };
  if (b.blockType === 'porownanie') return { typ: 'porownanie', tytul: b.tytul, kolumnaA: b.kolumnaA, kolumnaB: b.kolumnaB, wiersze: b.wiersze ?? [], podsumowanie: b.podsumowanie || undefined };
  if (b.blockType === 'uwaga') return { typ: 'uwaga', tytul: b.tytul, tresc: b.tresc };
  return null;
};

/** Publiczne API zwraca wyłącznie opublikowane rekordy — szkice nie trafią na stronę. */
export async function pobierzLokalizacje(): Promise<Lokalizacja[]> {
  const odp = await zCms<{ docs: any[] }>('lokalizacje?limit=100&depth=1');
  if (!odp?.docs?.length) return [];

  return odp.docs
    .filter((d) => d.adres && d.tytul && (d.tresc ?? []).length)
    .map((d) => ({
      slug: d.adres,
      tytul: d.tytul,
      miejscowosc: d.miejscowosc,
      uslugaSlug: d.usluga?.adres ?? '',
      uslugaNazwa: d.usluga?.nazwa ?? '',
      tresc: (d.tresc ?? []).map((a: any) => a.tresc),
      proces: (d.proces ?? []).map((k: any) => ({ nazwa: k.nazwa, opis: k.opis })),
      bloki: (d.bloki ?? []).map(doBloku).filter(Boolean) as Blok[],
      faq: (d.faq ?? []).map((p: any) => ({ pytanie: p.pytanie, odpowiedz: p.odpowiedz })),
      metaTitle: d.seo?.metaTitle || d.tytul,
      metaDescription: d.seo?.metaDescription || (d.tresc?.[0]?.tresc ?? '').slice(0, 175),
    }));
}

export type Poradnik = {
  slug: string;
  tytul: string;
  lead: string;
  sekcje: { naglowek: string; akapity: string[]; punkty: string[] }[];
  faq: { pytanie: string; odpowiedz: string }[];
  uslugi: string[];
  data: string | null;
  zaktualizowano: string;
  metaTitle: string;
  metaDescription: string;
};

/** Tylko opublikowane — szkice nie trafiają na stronę. */
export async function pobierzPoradniki(): Promise<Poradnik[]> {
  const odp = await zCms<{ docs: any[] }>('poradniki?limit=100&depth=1&sort=-dataPublikacji');
  if (!odp?.docs?.length) return [];
  return odp.docs
    .filter((d) => d.adres && (d.sekcje ?? []).length)
    .map((d) => ({
      slug: d.adres,
      tytul: d.tytul,
      lead: d.lead,
      sekcje: (d.sekcje ?? []).map((s: any) => ({
        naglowek: s.naglowek,
        akapity: (s.akapity ?? []).map((a: any) => a.tresc),
        punkty: (s.punkty ?? []).map((a: any) => a.tresc),
      })),
      faq: (d.faq ?? []).map((p: any) => ({ pytanie: p.pytanie, odpowiedz: p.odpowiedz })),
      uslugi: (d.powiazaneUslugi ?? []).map((u: any) => u?.adres).filter(Boolean),
      data: d.dataPublikacji ?? null,
      zaktualizowano: d.updatedAt,
      metaTitle: d.seo?.metaTitle || d.tytul,
      metaDescription: d.seo?.metaDescription || d.lead,
    }));
}

export async function pobierzStroneGlowna() {
  const d = await zCms<any>('globals/strona-glowna?depth=1');
  if (!d?.haslo) {
    return {
      zrodlo: 'lokalne' as const,
      haslo: 'Tworzymy przestrzenie do życia',
      lead: 'Pomagamy sprzedać, kupić i przygotować nieruchomość w Białymstoku i w całym województwie podlaskim. Zakres współpracy dobieramy do Twojego celu — od jednej usługi po poprowadzenie całego procesu.',
      ctaGlowne: 'Porozmawiajmy o Twojej nieruchomości',
      sciezkiTytul: 'Z czym przychodzisz?',
      sciezki,
      wartoscTytul: 'Jak zwiększamy wartość',
      wartoscLead: 'Remont nie zawsze się opłaca. Zaczynamy od Twojego celu i sprawdzamy, które działania mają sens przy danym budżecie i terminie.',
      dzialania,
      decyzjaTytul: 'Zanim zaproponujemy jakiekolwiek prace',
      decyzjaLead: 'Przechodzimy sześć kroków. Przewijaj, żeby zobaczyć, jak wygląda każdy z nich.',
      decyzja,
      modelTytul: 'Jak wygląda współpraca',
      modelLead: 'Etapy są te same, ale ich treść zależy od usługi. Wybierz swoją.',
      model,
      modelNota: 'Zakres zawsze ustalamy indywidualnie — nie każda współpraca obejmuje wszystkie etapy.',
      pracujemyTytul: 'Jak pracujemy',
      zasady: [
        { tytul: 'Jeden plan dla całego procesu', opis: 'Sprzedaż, przygotowanie lokalu i prace wykończeniowe planujemy razem, żeby decyzje się nie wykluczały.' },
        { tytul: 'Koszty przed decyzją', opis: 'Zanim zaproponujemy prace, pokazujemy warianty i ich orientacyjny koszt. Decyzja należy do Ciebie.' },
        { tytul: 'Pośrednictwo w partnerstwie', opis: `Pośrednictwo prowadzimy jako ${firmaLokalna.partner} — partner odpowiada za obsługę transakcji po stronie formalnej.` },
      ],
      wycenaHaslo: 'Napisz! A my wycenimy!',
      wycenaOpis: 'Wycena Twojej nieruchomości jest bezpłatna i nie zobowiązuje do współpracy. Wystarczy krótka wiadomość albo telefon.',
      kontaktTytul: 'Porozmawiajmy o Twojej nieruchomości',
      kontaktOpis: 'Opisz krótko sytuację albo od razu zaproponuj termin spotkania. Oddzwonimy lub odpiszemy — tak, jak wolisz.',
      kontaktSzybka: 'Zależy Ci na czasie? Sprawdź możliwe scenariusze szybkiej sprzedaży',
    };
  }

  return {
    zrodlo: 'cms' as const,
    ...d,
    sciezki: (d.sciezki ?? []).map((s: any) => ({ tytul: s.tytul, opis: s.opis, link: s.etykietaLinku, href: s.adres })),
    dzialania: (d.dzialania ?? []).map((x: any) => ({ nazwa: x.nazwa, opis: x.opis })),
    decyzja: (d.decyzja ?? []).map((x: any) => ({ nazwa: x.nazwa, opis: x.opis })),
    model: (d.model ?? []).map((m: any, i: number) => ({
      id: `usluga-${i}`,
      etykieta: m.etykieta,
      etapy: (m.etapy ?? []).map((e: any) => [e.nazwa, e.opis] as [string, string]),
    })),
    zasady: (d.zasady ?? []).map((z: any) => ({ tytul: z.tytul, opis: z.opis })),
  };
}

export async function pobierzUstawienia() {
  const d = await zCms<any>('globals/ustawienia?depth=1');
  if (!d?.telefon) return { ...firmaLokalna, zrodlo: 'lokalne' as const };
  const [uliBiuro = '', restBiuro = ''] = (d.adresBiura ?? '').split('\n');
  const [uliSiedziba = '', restSiedziba = ''] = (d.adresSiedziby ?? '').split('\n');
  const [kodB = '', ...miastoB] = restBiuro.split(' ');
  const [kodS = '', ...miastoS] = restSiedziba.split(' ');
  return {
    zrodlo: 'cms' as const,
    nazwa: d.nazwa ?? firmaLokalna.nazwa,
    nazwaPrawna: d.nazwaPrawna ?? firmaLokalna.nazwaPrawna,
    telefon: d.telefon,
    telefonHref: `tel:${String(d.telefon).replace(/\s/g, '')}`,
    email: d.email,
    biuro: { ulica: uliBiuro, kod: kodB, miasto: miastoB.join(' ') },
    siedziba: { ulica: uliSiedziba, kod: kodS, miasto: miastoS.join(' ') },
    nip: d.nip ?? firmaLokalna.nip,
    krs: d.krs ?? firmaLokalna.krs,
    regon: firmaLokalna.regon,
    partner: d.partnerNazwa ?? firmaLokalna.partner,
    obszar: firmaLokalna.obszar,
  };
}

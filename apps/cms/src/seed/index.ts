/**
 * Wypełnia CMS treściami, które dotąd leżały w kodzie strony.
 * Uruchomienie:  npm run seed
 * Skrypt jest idempotentny — istniejące rekordy aktualizuje zamiast tworzyć duplikaty.
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getPayload } from 'payload'
import config from '@payload-config'
import { tresci } from './tresci'
import { firma, uslugi as zrodloUslug, sciezki, dzialania, decyzja, model } from './site'
import { lokalizacje } from './lokalizacje'
import { poradniki } from './poradniki'

const katalog = path.dirname(fileURLToPath(import.meta.url))
const payload = await getPayload({ config })

const akapity = (lista: string[]) => lista.map((tresc) => ({ tresc }))

let dodane = 0
let zaktualizowane = 0

for (const u of zrodloUslug) {
  const t = tresci[u.slug]
  if (!t) continue

  const dane = {
    nazwa: u.nazwa,
    adres: u.slug,
    naglowek: u.tytul,
    lead: u.lead,
    wstep: akapity(t.wstep),
    proces: t.proces.map((k) => ({ nazwa: k.nazwa, opis: k.opis })),
    zakres: t.zakres.map((tresc) => ({ tresc })),
    uwaga: t.uwaga ?? '',
    faq: t.faq.map((p) => ({ pytanie: p.pytanie, odpowiedz: p.odpowiedz })),
    cta: { tytul: t.ctaTytul, opis: t.ctaOpis, etykieta: 'Porozmawiajmy', adres: '/kontakt' },
    seo: { metaTitle: u.metaTitle, metaDescription: u.metaDescription, niePokazujWGoogle: false },
    _status: 'published' as const,
  }

  const istnieje = await payload.find({
    collection: 'uslugi',
    where: { adres: { equals: u.slug } },
    limit: 1,
    depth: 0,
  })

  if (istnieje.docs.length) {
    await payload.update({ collection: 'uslugi', id: istnieje.docs[0].id, data: dane })
    zaktualizowane++
  } else {
    await payload.create({ collection: 'uslugi', data: dane })
    dodane++
  }
}

// Podstrony lokalizacyjne — zawsze jako wersje robocze.
let lokDodane = 0
let lokZaktualizowane = 0

for (const l of lokalizacje) {
  const usluga = await payload.find({
    collection: 'uslugi',
    where: { adres: { equals: l.usluga } },
    limit: 1,
    depth: 0,
  })
  if (!usluga.docs.length) continue

  const gotowa = 'wstep' in l
  const tresc = gotowa
    ? [...(l as any).wstep]
    : [
        `[DO NAPISANIA] ${l.fraza}. Intencja: ${l.intencja}.`,
        `Wyróżnik treści ustalony w mapie SEO: ${l.wyroznik}`,
        'Tej strony nie publikujemy, dopóki nie ma własnej, merytorycznej treści.',
      ]

  const dane = {
    tytul: (l as any).tytul ?? l.fraza.charAt(0).toUpperCase() + l.fraza.slice(1),
    adres: l.adres,
    miejscowosc: l.miejscowosc,
    usluga: usluga.docs[0].id,
    intencja: l.intencja,
    glownaFraza: l.fraza,
    tresc: tresc.map((akapit: string) => ({ tresc: akapit })),
    proces: (l as any).proces ?? [],
    bloki: (l as any).bloki ?? [],
    faq: (l as any).faq ?? [],
    stanWeryfikacji: 'propozycja' as const,
    seo: {
      metaTitle: `${(l as any).tytul ?? l.fraza} — Grupa Nieruchomości`.slice(0, 70),
      metaDescription: gotowa ? (l as any).wstep[0].slice(0, 175) : '',
    },
    _status: 'draft' as const,
  }

  const istnieje = await payload.find({
    collection: 'lokalizacje',
    where: { adres: { equals: l.adres } },
    limit: 1,
    depth: 0,
  })

  if (istnieje.docs.length) {
    await payload.update({ collection: 'lokalizacje', id: istnieje.docs[0].id, data: dane, draft: true })
    lokZaktualizowane++
  } else {
    await payload.create({ collection: 'lokalizacje', data: dane, draft: true })
    lokDodane++
  }
}

// Poradniki — wersje robocze.
let porDodane = 0
let porZaktualizowane = 0
for (const p of poradniki) {
  const uslugiId = (
    await payload.find({ collection: 'uslugi', where: { adres: { in: p.uslugi } }, limit: 20, depth: 0 })
  ).docs.map((d) => d.id)

  const dane = {
    tytul: p.tytul,
    adres: p.adres,
    lead: p.lead,
    kategorie: p.kategorie as any,
    sekcje: p.sekcje.map((s) => ({
      naglowek: s.naglowek,
      akapity: s.akapity.map((tresc) => ({ tresc })),
      punkty: (s.punkty ?? []).map((tresc) => ({ tresc })),
    })),
    faq: p.faq,
    powiazaneUslugi: uslugiId,
    seo: { metaTitle: p.tytul.slice(0, 70), metaDescription: p.metaDescription },
    _status: 'draft' as const,
  }
  const istnieje = await payload.find({ collection: 'poradniki', where: { adres: { equals: p.adres } }, limit: 1, depth: 0 })
  if (istnieje.docs.length) {
    await payload.update({ collection: 'poradniki', id: istnieje.docs[0].id, data: dane, draft: true })
    porZaktualizowane++
  } else {
    await payload.create({ collection: 'poradniki', data: dane, draft: true })
    porDodane++
  }
}

// Para zdjęć przed/po dla usługi „Mieszkanie pod klucz” — zdjęcia poglądowe.
const wgrajZdjecie = async (plik: string, alt: string) => {
  const istnieje = await payload.find({ collection: 'media', where: { alt: { equals: alt } }, limit: 1, depth: 0 })
  if (istnieje.docs.length) return istnieje.docs[0].id
  const doc = await payload.create({
    collection: 'media',
    filePath: path.resolve(katalog, '../../web/public/images', plik),
    data: { alt, pochodzenie: 'generowane', prawa: 'Grafika generowana — materiał ilustracyjny' },
  })
  return doc.id
}

try {
  const przed = await wgrajZdjecie(
    'przedpo-pod-klucz-przed.jpg',
    'Mieszkanie w stanie deweloperskim: szare ściany, wylewka i wyprowadzone instalacje',
  )
  const po = await wgrajZdjecie(
    'przedpo-pod-klucz-po.jpg',
    'To samo wnętrze po wykończeniu: salon z aneksem kuchennym, jadalnią i drewnianą podłogą',
  )
  const podKlucz = await payload.find({
    collection: 'uslugi',
    where: { adres: { equals: 'mieszkanie-pod-klucz' } },
    limit: 1,
    depth: 0,
  })
  if (podKlucz.docs.length) {
    await payload.update({
      collection: 'uslugi',
      id: podKlucz.docs[0].id,
      data: {
        przedPo: {
          przed,
          po,
          opis: 'Ten sam salon z aneksem kuchennym: stan deweloperski i stan po wykończeniu pod klucz.',
          pogladowe: true,
        },
      },
    })
    console.log('Para przed/po podpięta do usługi „Mieszkanie pod klucz”.')
  }
} catch (e) {
  console.warn('Nie udało się wgrać pary przed/po:', (e as Error).message)
}

await payload.updateGlobal({
  slug: 'ustawienia',
  data: {
    nazwa: firma.nazwa,
    nazwaPrawna: firma.nazwaPrawna,
    nip: firma.nip,
    krs: firma.krs,
    adresSiedziby: `${firma.siedziba.ulica}\n${firma.siedziba.kod} ${firma.siedziba.miasto}`,
    adresBiura: `${firma.biuro.ulica}\n${firma.biuro.kod} ${firma.biuro.miasto}`,
    telefon: firma.telefon,
    email: firma.email,
    partnerNazwa: firma.partner,
    partnerOpis: 'w zakresie pośrednictwa w obrocie nieruchomościami',
    banerZgod: true,
  },
})

await payload.updateGlobal({
  slug: 'strona-glowna',
  data: {
    haslo: 'Tworzymy przestrzenie do życia',
    lead:
      'Pomagamy sprzedać, kupić i przygotować nieruchomość w Białymstoku i w całym województwie podlaskim. ' +
      'Zakres współpracy dobieramy do Twojego celu — od jednej usługi po poprowadzenie całego procesu.',
    ctaGlowne: 'Porozmawiajmy o Twojej nieruchomości',
    sciezkiTytul: 'Z czym przychodzisz?',
    sciezki: sciezki.map((s) => ({
      tytul: s.tytul,
      opis: s.opis,
      etykietaLinku: s.link,
      adres: s.href,
    })),
    wartoscTytul: 'Jak zwiększamy wartość',
    wartoscLead:
      'Remont nie zawsze się opłaca. Zaczynamy od Twojego celu i sprawdzamy, które działania mają sens przy danym budżecie i terminie.',
    dzialania: dzialania.map((d) => ({ nazwa: d.nazwa, opis: d.opis })),
    decyzjaTytul: 'Zanim zaproponujemy jakiekolwiek prace',
    decyzjaLead: 'Przechodzimy sześć kroków. Przewijaj, żeby zobaczyć, jak wygląda każdy z nich.',
    decyzja: decyzja.map((k) => ({ nazwa: k.nazwa, opis: k.opis })),
    modelTytul: 'Jak wygląda współpraca',
    modelLead: 'Etapy są te same, ale ich treść zależy od usługi. Wybierz swoją.',
    model: model.map((m) => ({
      etykieta: m.etykieta,
      etapy: m.etapy.map(([nazwa, opis]) => ({ nazwa, opis })),
    })),
    modelNota: 'Zakres zawsze ustalamy indywidualnie — nie każda współpraca obejmuje wszystkie etapy.',
    pracujemyTytul: 'Jak pracujemy',
    zasady: [
      {
        tytul: 'Jeden plan dla całego procesu',
        opis: 'Sprzedaż, przygotowanie lokalu i prace wykończeniowe planujemy razem, żeby decyzje się nie wykluczały.',
      },
      {
        tytul: 'Koszty przed decyzją',
        opis: 'Zanim zaproponujemy prace, pokazujemy warianty i ich orientacyjny koszt. Decyzja należy do Ciebie.',
      },
      {
        tytul: 'Pośrednictwo w partnerstwie',
        opis: `Pośrednictwo prowadzimy jako ${firma.partner} — partner odpowiada za obsługę transakcji po stronie formalnej.`,
      },
    ],
    wycenaHaslo: 'Napisz! A my wycenimy!',
    wycenaOpis:
      'Wycena Twojej nieruchomości jest bezpłatna i nie zobowiązuje do współpracy. Wystarczy krótka wiadomość albo telefon.',
    kontaktTytul: 'Porozmawiajmy o Twojej nieruchomości',
    kontaktOpis:
      'Opisz krótko sytuację albo od razu zaproponuj termin spotkania. Oddzwonimy lub odpiszemy — tak, jak wolisz.',
    kontaktSzybka: 'Zależy Ci na czasie? Sprawdź możliwe scenariusze szybkiej sprzedaży',
  },
})

console.log(`Usługi: dodane ${dodane}, zaktualizowane ${zaktualizowane}.`)
console.log(`Podstrony lokalizacyjne: dodane ${lokDodane}, zaktualizowane ${lokZaktualizowane} — wszystkie jako wersje robocze.`)
console.log(`Poradniki: dodane ${porDodane}, zaktualizowane ${porZaktualizowane} — jako wersje robocze.`)
console.log('Ustawienia strony i Strona główna zapisane.')
process.exit(0)

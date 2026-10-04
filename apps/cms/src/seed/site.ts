export const firma = {
  nazwa: 'Grupa Nieruchomości',
  nazwaPrawna: 'Grupa Nieruchomości sp. z o.o.',
  telefon: '+48 608 642 999',
  telefonHref: 'tel:+48608642999',
  email: 'kontakt@grupa-nieruchomosci.pl',
  biuro: { ulica: 'ul. Piękna 5, lok. 12P', kod: '15-282', miasto: 'Białystok' },
  siedziba: { ulica: 'ul. Nowogrodzka 64/43', kod: '02-014', miasto: 'Warszawa' },
  nip: '5223200075',
  krs: '0000891641',
  regon: '388580956',
  partner: 'Autoryzowany Partner Zboralscy Group',
  obszar: 'Białystok i województwo podlaskie',
};

export type Usluga = {
  slug: string;
  nazwa: string;
  tytul: string;
  lead: string;
  obraz: string;
  alt: string;
  metaTitle: string;
  metaDescription: string;
};

export const uslugi: Usluga[] = [
  {
    slug: 'sprzedaz-nieruchomosci',
    nazwa: 'Sprzedaż nieruchomości',
    tytul: 'Sprzedaż nieruchomości',
    lead: 'Prowadzimy sprzedaż od bezpłatnej wyceny, przez przygotowanie nieruchomości i promocję, po negocjacje i finalizację.',
    obraz: '/images/sprzedaz-hero.jpg',
    alt: 'Salon przygotowany do prezentacji, z sofą i wyjściem na balkon',
    metaTitle: 'Sprzedaż nieruchomości Białystok — Grupa Nieruchomości',
    metaDescription: 'Pomagamy sprzedać mieszkanie lub dom w Białymstoku i województwie podlaskim. Bezpłatna wycena, przygotowanie nieruchomości, negocjacje i finalizacja.',
  },
  {
    slug: 'kupno-nieruchomosci',
    nazwa: 'Kupno nieruchomości',
    tytul: 'Kupno nieruchomości',
    lead: 'Reprezentujemy kupującego: selekcja ofert, analiza, wsparcie w weryfikacji i negocjacje po Twojej stronie.',
    obraz: '/images/kupno-hero.jpg',
    alt: 'Puste mieszkanie z kluczami na parapecie i otwartymi drzwiami do pokoju',
    metaTitle: 'Kupno nieruchomości Białystok — pomoc dla kupującego',
    metaDescription: 'Szukamy i weryfikujemy nieruchomości dla kupujących w Białymstoku i podlaskim. Selekcja ofert, prezentacje, negocjacje i wsparcie aż do zakupu.',
  },
  {
    slug: 'mieszkanie-pod-klucz',
    nazwa: 'Mieszkanie pod klucz',
    tytul: 'Znajdziemy. Zaprojektujemy. Wykończymy.',
    lead: 'Jeden proces od wyszukania lokalu do przekazania kluczy — na rynku wtórnym i pierwotnym.',
    obraz: '/images/pod-klucz-hero.jpg',
    alt: 'Wykończony salon z aneksem kuchennym i stołem przy oknie',
    metaTitle: 'Mieszkanie pod klucz Białystok — wyszukanie, projekt, wykończenie',
    metaDescription: 'Znajdujemy mieszkanie, projektujemy i wykańczamy je pod klucz w Białymstoku. Rynek wtórny i pierwotny, jeden zespół od zakupu do przekazania kluczy.',
  },
  {
    slug: 'inwestycje',
    nazwa: 'Inwestycje',
    tytul: 'Inwestycje w nieruchomości',
    lead: 'Dobieramy nieruchomość do kapitału, celu i horyzontu, a potem przygotowujemy ją do sprzedaży lub wynajmu.',
    obraz: '/images/inwestycje-hero.jpg',
    alt: 'Kamienica i nowy budynek mieszkalny przy tej samej ulicy',
    metaTitle: 'Inwestycje w nieruchomości Białystok — prowadzenie projektu',
    metaDescription: 'Analiza, wyszukanie i przygotowanie nieruchomości inwestycyjnej w Białymstoku i podlaskim. Zakres prac dobierany do celu i horyzontu inwestora.',
  },
  {
    slug: 'zwiekszamy-wartosc',
    nazwa: 'Jak zwiększamy wartość',
    tytul: 'Jak zwiększamy wartość',
    lead: 'Remont nie zawsze się opłaca. Zaczynamy od celu i sprawdzamy, które działania mają sens przy Twoim budżecie i terminie.',
    obraz: '/images/wartosc-hero.jpg',
    alt: 'Pokój w trakcie odświeżania, ze złożoną folią malarską przy ścianie',
    metaTitle: 'Jak zwiększamy wartość nieruchomości — home staging i remont',
    metaDescription: 'Home staging, odświeżenie, remont lub zmiana układu. Dobieramy zakres prac do celu i pokazujemy koszty, zanim podejmiesz decyzję.',
  },
  {
    slug: 'szybka-sprzedaz',
    nazwa: 'Szybka sprzedaż',
    tytul: 'Szybka sprzedaż',
    lead: 'Gdy liczy się czas, przechodzimy przez możliwe scenariusze i ich konsekwencje. Spokojnie, bez presji i bez obietnic bez pokrycia.',
    obraz: '/images/szybka-sprzedaz-hero.jpg',
    alt: 'Puste mieszkanie z oknem i przejściem do drugiego pokoju',
    metaTitle: 'Szybka sprzedaż nieruchomości Białystok — możliwe scenariusze',
    metaDescription: 'Sprzedaż nieruchomości w krótszym terminie w Białymstoku. Omawiamy realne scenariusze zależne od czasu, ceny i sytuacji właściciela.',
  },
];

export const sciezki = [
  {
    tytul: 'Sprzedaję',
    opis: 'Zaczynamy od bezpłatnej wyceny. Potem strategia i cena ofertowa, przygotowanie nieruchomości i sprzedaż aż do finalizacji.',
    href: '/sprzedaz-nieruchomosci',
    link: 'Sprzedaż nieruchomości',
  },
  {
    tytul: 'Kupuję',
    opis: 'Reprezentujemy Ciebie, nie sprzedającego: selekcja ofert, analiza, wsparcie w weryfikacji i negocjacje.',
    href: '/kupno-nieruchomosci',
    link: 'Kupno nieruchomości',
  },
  {
    tytul: 'Inwestuję',
    opis: 'Szukamy nieruchomości dopasowanej do Twojego kapitału, celu i horyzontu, a potem przygotowujemy ją do sprzedaży lub wynajmu.',
    href: '/inwestycje',
    link: 'Inwestycje',
  },
  {
    tytul: 'Chcę mieszkanie pod klucz',
    opis: 'Znajdziemy. Zaprojektujemy. Wykończymy. Jeden proces od wyszukania lokalu do przekazania kluczy.',
    href: '/mieszkanie-pod-klucz',
    link: 'Mieszkanie pod klucz',
  },
];

export const dzialania = [
  { nazwa: 'Home staging', opis: 'Aranżacja, która pomaga kupującym zobaczyć, jak można tu mieszkać.' },
  { nazwa: 'Odświeżenie', opis: 'Drobne prace, które poprawiają pierwsze wrażenie niewielkim kosztem.' },
  { nazwa: 'Remont i wykończenie', opis: 'Pełny zakres prac, gdy stan lokalu blokuje sprzedaż lub zamieszkanie.' },
  { nazwa: 'Zmiana układu lub funkcji', opis: 'Gdy pozwalają na to warunki techniczne, formalne i ekonomiczne.' },
  { nazwa: 'Przygotowanie projektu inwestycyjnego', opis: 'Plan działań dla nieruchomości kupowanej pod sprzedaż lub wynajem.' },
];

export const decyzja = [
  { nazwa: 'Cel', opis: 'Sprzedaż, zamieszkanie czy wynajem — i w jakim terminie.' },
  { nazwa: 'Diagnoza', opis: 'Stan techniczny, układ, dokumenty, otoczenie.' },
  { nazwa: 'Warianty', opis: 'Od braku prac po pełny remont.' },
  { nazwa: 'Koszt', opis: 'Orientacyjny budżet i czas każdego wariantu.' },
  { nazwa: 'Potencjalny efekt', opis: 'Co realnie może się zmienić — bez obietnic.' },
  { nazwa: 'Decyzja', opis: 'Wybierasz Ty, znając koszty i możliwe skutki.' },
];

export const model = [
  {
    id: 'sprzedaz',
    etykieta: 'Sprzedaż',
    etapy: [
      ['Analiza', 'Sytuacja właściciela, stan prawny i techniczny, oczekiwania co do ceny i terminu.'],
      ['Strategia', 'Cena ofertowa, zakres przygotowania nieruchomości i plan promocji.'],
      ['Realizacja', 'Przygotowanie, zdjęcia i opis, promocja, prezentacje i negocjacje.'],
      ['Rezultat', 'Wsparcie formalne, finalizacja transakcji i przekazanie nieruchomości.'],
    ],
  },
  {
    id: 'kupno',
    etykieta: 'Kupno',
    etapy: [
      ['Analiza', 'Twoje potrzeby, budżet, preferowane lokalizacje i termin.'],
      ['Strategia', 'Kryteria wyboru i plan poszukiwań.'],
      ['Realizacja', 'Selekcja ofert, prezentacje, analiza, wsparcie w weryfikacji, negocjacje.'],
      ['Rezultat', 'Zakup i odbiór nieruchomości.'],
    ],
  },
  {
    id: 'inwestycja',
    etykieta: 'Inwestycja',
    etapy: [
      ['Analiza', 'Kapitał, cel, horyzont, model finansowania i Twoje zaangażowanie.'],
      ['Strategia', 'Rodzaj nieruchomości i warianty działań — tylko te, które mają uzasadnienie.'],
      ['Realizacja', 'Wyszukanie, zakup i przygotowanie nieruchomości.'],
      ['Rezultat', 'Nieruchomość przygotowana do sprzedaży lub wynajmu.'],
    ],
  },
  {
    id: 'pod-klucz',
    etykieta: 'Pod klucz',
    etapy: [
      ['Analiza', 'Potrzeby, budżet, metraż i termin; rynek wtórny czy pierwotny.'],
      ['Strategia', 'Ocena potencjału lokali i plan prac jeszcze przed zakupem.'],
      ['Realizacja', 'Negocjacje, zakup, projekt, remont lub wykończenie.'],
      ['Rezultat', 'Przekazanie mieszkania gotowego do zamieszkania.'],
    ],
  },
];

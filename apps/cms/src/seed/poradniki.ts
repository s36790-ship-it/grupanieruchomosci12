// Poradniki — treści informacyjne wspierające strony usług i strony lokalne.
// Trafiają do CMS jako WERSJE ROBOCZE. Nie zawierają porad prawnych ani podatkowych.

type Sekcja = { naglowek: string; akapity: string[]; punkty?: string[] }
type Poradnik = {
  adres: string
  tytul: string
  lead: string
  kategorie: string[]
  uslugi: string[]
  sekcje: Sekcja[]
  faq: { pytanie: string; odpowiedz: string }[]
  metaDescription: string
}

export const poradniki: Poradnik[] = [
  {
    adres: 'dokumenty-do-sprzedazy-mieszkania',
    tytul: 'Jakie dokumenty są potrzebne do sprzedaży mieszkania',
    lead:
      'Brak jednego zaświadczenia potrafi przesunąć akt notarialny o kilka tygodni. Oto dokumenty, o które zwykle pytają kupujący, bank i notariusz — i kiedy warto je zamówić.',
    kategorie: ['sprzedaz', 'formalnosci'],
    uslugi: ['sprzedaz-nieruchomosci', 'szybka-sprzedaz'],
    metaDescription:
      'Lista dokumentów do sprzedaży mieszkania: księga wieczysta, zaświadczenia ze spółdzielni lub wspólnoty, świadectwo energetyczne. Co zamówić przed wystawieniem oferty.',
    sekcje: [
      {
        naglowek: 'Dlaczego warto zebrać dokumenty przed wystawieniem oferty',
        akapity: [
          'Kupujący z kredytem musi przedstawić bankowi komplet dokumentów nieruchomości, a bank analizuje je, zanim wyda decyzję. Jeśli czegoś brakuje, cały harmonogram się przesuwa — a razem z nim termin, w którym dostaniesz pieniądze.',
          'Część zaświadczeń ma ograniczony termin ważności, więc zamawiamy je w momencie, gdy pojawia się poważny kupujący. Wcześniej warto natomiast sprawdzić, czy w ogóle da się je uzyskać bez przeszkód.',
        ],
      },
      {
        naglowek: 'Dokumenty, o które pytają najczęściej',
        akapity: ['Dokładny zestaw zależy od rodzaju prawa do lokalu i od wymagań notariusza, ale zwykle obejmuje:'],
        punkty: [
          'dokument, na podstawie którego nabyłeś mieszkanie (akt notarialny, postanowienie sądu, akt poświadczenia dziedziczenia),',
          'numer księgi wieczystej, jeśli została założona,',
          'zaświadczenie ze wspólnoty lub zarządcy o braku zaległości w opłatach,',
          'przy spółdzielczym własnościowym prawie — zaświadczenie ze spółdzielni o przysługującym prawie,',
          'świadectwo charakterystyki energetycznej lokalu,',
          'zaświadczenie o braku osób zameldowanych — często wymagane przez kupującego lub bank.',
        ],
      },
      {
        naglowek: 'Co może się skomplikować',
        akapity: [
          'Najczęstsze kłopoty to niezałożona księga wieczysta, rozbieżności w danych między dokumentami, niezakończone sprawy spadkowe i zaległości wobec spółdzielni. Każdą z tych rzeczy da się zwykle rozwiązać, ale wymaga czasu — dlatego sprawdzamy je na samym początku.',
          'Ostateczną listę dokumentów potwierdza notariusz, który przygotowuje akt. W nietypowych sytuacjach warto skontaktować się z nim jeszcze przed podpisaniem umowy przedwstępnej.',
        ],
      },
    ],
    faq: [
      { pytanie: 'Czy świadectwo energetyczne jest obowiązkowe przy sprzedaży?', odpowiedz: 'Tak, przy sprzedaży mieszkania trzeba je przekazać kupującemu. Sporządza je uprawniona osoba.' },
      { pytanie: 'Czy mogę sprzedać mieszkanie bez księgi wieczystej?', odpowiedz: 'W przypadku spółdzielczego prawa bywa to możliwe, ale wpływa na proces i na kredyt kupującego. Omawiamy to indywidualnie, a szczegóły potwierdza notariusz.' },
      { pytanie: 'Kiedy zamówić zaświadczenia?', odpowiedz: 'Te z terminem ważności — gdy pojawia się poważny kupujący. Wcześniej wystarczy upewnić się, że da się je uzyskać bez przeszkód.' },
    ],
  },
  {
    adres: 'jak-przygotowac-mieszkanie-do-zdjec',
    tytul: 'Jak przygotować mieszkanie do zdjęć przed sprzedażą',
    lead:
      'Zdjęcia decydują, czy ktoś w ogóle zadzwoni. Większość przygotowań da się zrobić samemu w jeden dzień i bez wydawania pieniędzy.',
    kategorie: ['sprzedaz'],
    uslugi: ['sprzedaz-nieruchomosci', 'zwiekszamy-wartosc'],
    metaDescription:
      'Jak przygotować mieszkanie do zdjęć: porządek, światło, ustawienie mebli. Lista rzeczy do zrobienia w jeden dzień przed sesją zdjęciową.',
    sekcje: [
      {
        naglowek: 'Zacznij od odjęcia, nie od dodawania',
        akapity: [
          'Najwięcej zmienia usunięcie rzeczy, a nie kupowanie nowych. Na zdjęciu każdy przedmiot na blacie, parapecie czy lodówce odciąga uwagę od samego mieszkania i sprawia, że wydaje się ono mniejsze.',
        ],
        punkty: [
          'puste blaty w kuchni i łazience, zostaw najwyżej jedną rzecz,',
          'zdjęte magnesy i kartki z lodówki,',
          'schowane kosmetyki, ręczniki i szczoteczki,',
          'uprzątnięte parapety i szafki nocne,',
          'schowane kable, ładowarki i piloty.',
        ],
      },
      {
        naglowek: 'Światło robi połowę pracy',
        akapity: [
          'Odsłoń zasłony i rolety, podnieś żaluzje do końca. Zdjęcia najlepiej robić w dzień, przy rozproszonym świetle, bez ostrego słońca wpadającego prosto w obiektyw.',
          'Wymień przepalone żarówki i sprawdź, czy wszystkie mają podobną barwę. Mieszanka ciepłego i zimnego światła wygląda na zdjęciach nieprzyjemnie.',
        ],
      },
      {
        naglowek: 'Pokaż metraż i funkcję pomieszczeń',
        akapity: [
          'Przesuń meble tak, żeby było widać podłogę i przejścia. Każde pomieszczenie powinno mieć jasną funkcję — pokój zapełniony rzeczami „na później” kupujący zapamięta jako graciarnię, a nie jako dodatkowy pokój.',
        ],
      },
      {
        naglowek: 'Czego nie robić',
        akapity: [
          'Nie remontuj w pośpiechu tuż przed zdjęciami i nie maluj ścian na mocne kolory. Nie ukrywaj też wad, które i tak wyjdą na prezentacji — uczciwe zdjęcia oszczędzają czas Tobie i kupującym.',
        ],
      },
    ],
    faq: [
      { pytanie: 'Czy muszę opróżnić mieszkanie przed zdjęciami?', odpowiedz: 'Nie. Mieszkanie umeblowane, ale uporządkowane, zwykle wygląda lepiej niż puste.' },
      { pytanie: 'Czy warto zatrudnić fotografa?', odpowiedz: 'Dobre zdjęcia mają duży wpływ na liczbę zapytań. Przy sprzedaży z nami zdjęcia są częścią przygotowania oferty.' },
      { pytanie: 'Co zrobić ze zwierzętami?', odpowiedz: 'Na czas zdjęć najlepiej je wyprowadzić, a legowiska i miski schować.' },
    ],
  },
  {
    adres: 'mieszkanie-spoldzielcze-a-odrebna-wlasnosc',
    tytul: 'Mieszkanie spółdzielcze a odrębna własność — co to zmienia przy sprzedaży',
    lead:
      'Rodzaj prawa do mieszkania wpływa na dokumenty, na kredyt kupującego i na to, jak długo trwa transakcja. Wyjaśniamy różnice bez prawniczego żargonu.',
    kategorie: ['sprzedaz', 'kupno', 'formalnosci'],
    uslugi: ['sprzedaz-nieruchomosci', 'kupno-nieruchomosci'],
    metaDescription:
      'Czym różni się spółdzielcze własnościowe prawo do lokalu od odrębnej własności i co to oznacza przy sprzedaży i zakupie mieszkania.',
    sekcje: [
      {
        naglowek: 'Dwa najczęstsze rodzaje prawa do mieszkania',
        akapity: [
          'Odrębna własność oznacza, że jesteś właścicielem lokalu i udziału w nieruchomości wspólnej, a mieszkanie ma własną księgę wieczystą. Spółdzielcze własnościowe prawo do lokalu to ograniczone prawo rzeczowe — właścicielem budynku pozostaje spółdzielnia.',
          'Oba rodzaje prawa można sprzedać, odziedziczyć i obciążyć hipoteką. Różnią się głównie dokumentami i tym, kto jest drugą stroną w sprawach budynku.',
        ],
      },
      {
        naglowek: 'Co to oznacza dla sprzedającego',
        akapity: [
          'Przy spółdzielczym prawie potrzebne jest zaświadczenie ze spółdzielni, a jeśli lokal nie ma księgi wieczystej, bank kupującego może postawić dodatkowe wymagania. Przy odrębnej własności kluczowa jest księga wieczysta i zaświadczenie od wspólnoty lub zarządcy.',
        ],
      },
      {
        naglowek: 'Co to oznacza dla kupującego',
        akapity: [
          'Kupujący powinien wiedzieć, jaki rodzaj prawa nabywa, jakie są opłaty na rzecz spółdzielni lub wspólnoty i czy nie planuje się kosztownych remontów budynku. Przy kredycie bank sprawdzi, czy lokal ma księgę wieczystą i czy nie ma w niej obciążeń.',
          'Szczegóły konkretnej sytuacji zawsze potwierdza notariusz — ten tekst nie zastępuje porady prawnej.',
        ],
      },
    ],
    faq: [
      { pytanie: 'Czy mieszkanie spółdzielcze jest trudniej sprzedać?', odpowiedz: 'Niekoniecznie, ale proces wymaga innych dokumentów. Przy braku księgi wieczystej może się wydłużyć.' },
      { pytanie: 'Czy można przekształcić prawo spółdzielcze w odrębną własność?', odpowiedz: 'W wielu przypadkach tak. Zasady i koszty zależą od spółdzielni i sytuacji lokalu — warto je sprawdzić w spółdzielni.' },
    ],
  },
  {
    adres: 'odbior-mieszkania-od-dewelopera',
    tytul: 'Odbiór mieszkania od dewelopera — na co zwrócić uwagę',
    lead:
      'Usterki wpisane do protokołu odbioru deweloper powinien usunąć. Te przeoczone trzeba później zgłaszać osobno. Oto, co sprawdzić, zanim podpiszesz protokół.',
    kategorie: ['remont', 'kupno'],
    uslugi: ['mieszkanie-pod-klucz'],
    metaDescription:
      'Odbiór techniczny mieszkania od dewelopera: co sprawdzić w ścianach, oknach, instalacjach i podłogach, jak spisać usterki w protokole.',
    sekcje: [
      {
        naglowek: 'Przygotuj się przed wizytą',
        akapity: [
          'Weź ze sobą rzut mieszkania i umowę, żeby porównać metraż, układ i standard z tym, co zostało obiecane. Przyda się latarka, poziomica, miarka i telefon do robienia zdjęć każdej usterki.',
        ],
      },
      {
        naglowek: 'Co sprawdzić w mieszkaniu',
        akapity: ['Najczęściej wychodzą usterki w tych miejscach:'],
        punkty: [
          'ściany i sufity — pęknięcia, nierówności, zabrudzenia tynku,',
          'okna i drzwi balkonowe — domykanie, uszczelki, rysy na szybach i ramach,',
          'podłogi i wylewki — poziom, ubytki,',
          'instalacja elektryczna — działanie gniazdek i włączników, opis bezpieczników,',
          'instalacja wodna i grzewcza — szczelność, działanie grzejników,',
          'balkon lub taras — spadek, obróbki, balustrady,',
          'zgodność metrażu i układu z rzutem.',
        ],
      },
      {
        naglowek: 'Jak spisać usterki',
        akapity: [
          'Każdą usterkę opisz w protokole konkretnie: gdzie jest, na czym polega, i zrób zdjęcie. Ogólne sformułowania w rodzaju „nierówne ściany” trudno potem wyegzekwować.',
          'Jeśli nie czujesz się pewnie, rozważ odbiór z osobą, która zna się na wykończeniach. Przy mieszkaniu pod klucz pomagamy w odbiorze w ramach współpracy.',
        ],
      },
    ],
    faq: [
      { pytanie: 'Czy mogę odmówić podpisania protokołu?', odpowiedz: 'Zasady odbioru i skutki poszczególnych decyzji wynikają z umowy i przepisów. W razie poważnych wad warto skonsultować się z prawnikiem przed podpisem.' },
      { pytanie: 'Czy warto zlecić odbiór fachowcowi?', odpowiedz: 'Przy pierwszym mieszkaniu często tak — fachowiec wychwyci rzeczy, które łatwo przeoczyć.' },
    ],
  },
]

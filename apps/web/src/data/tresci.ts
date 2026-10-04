// Treści podstron usługowych. Autorski copywriting — każda usługa ma własny tekst.
// Twierdzenia wymagające potwierdzenia przez klienta: docs/COPY_DO_POTWIERDZENIA.md

export type Krok = { nazwa: string; opis: string };
export type Pytanie = { pytanie: string; odpowiedz: string };
export type Powiazanie = { etykieta: string; href: string; opis: string };

export type Tresc = {
  wstep: string[];
  procesTytul: string;
  proces: Krok[];
  blokTytul?: string;
  blok?: { nazwa: string; opis: string }[];
  zakresTytul: string;
  zakres: string[];
  uwaga?: string;
  faqTytul: string;
  faq: Pytanie[];
  powiazania: Powiazanie[];
  ctaTytul: string;
  ctaOpis: string;
};

export const tresci: Record<string, Tresc> = {
  'sprzedaz-nieruchomosci': {
    wstep: [
      'Sprzedaż nieruchomości rzadko rozbija się o samo ogłoszenie. Decyduje cena wyjściowa, stan lokalu w dniu pierwszej prezentacji i to, czy ktoś panuje nad terminami, dokumentami i rozmowami z kupującymi.',
      'Bierzemy na siebie całość albo tylko ten fragment, w którym potrzebujesz wsparcia. Zaczynamy od bezpłatnej wyceny, bo bez realnego punktu odniesienia każda kolejna decyzja jest zgadywaniem.',
    ],
    procesTytul: 'Jak prowadzimy sprzedaż',
    proces: [
      { nazwa: 'Bezpłatna wycena i rozmowa', opis: 'Oglądamy nieruchomość, sprawdzamy stan prawny i techniczny, pytamy o Twój termin i oczekiwania co do ceny. Wynik dostajesz na piśmie lub w rozmowie — bez zobowiązania do dalszej współpracy.' },
      { nazwa: 'Strategia i cena ofertowa', opis: 'Ustalamy, czy gramy ceną wyższą z zapasem na negocjacje, czy niższą dla szybszej sprzedaży. Pokazujemy konsekwencje obu wariantów, zanim wystawimy ofertę.' },
      { nazwa: 'Przygotowanie nieruchomości', opis: 'Proponujemy tylko te prace, które mają szansę się zwrócić: uporządkowanie, drobne naprawy, home staging albo nic, jeśli lokal broni się sam.' },
      { nazwa: 'Zdjęcia, opis i dokumenty', opis: 'Robimy zdjęcia po przygotowaniu lokalu, piszemy opis bez lania wody i kompletujemy dokumenty potrzebne kupującemu i notariuszowi.' },
      { nazwa: 'Promocja', opis: 'Publikujemy ofertę w portalach i kierujemy ją do kupujących, których już znamy. Umawiamy prezentacje tak, żeby nie dezorganizowały Ci dnia.' },
      { nazwa: 'Prezentacje i negocjacje', opis: 'Prowadzimy pokazy i zbieramy realne informacje zwrotne. Negocjujemy nie tylko cenę, ale też termin wydania, zadatek i zakres, w jakim zostawiasz wyposażenie.' },
      { nazwa: 'Umowa i finalizacja', opis: 'Pilnujemy terminów, umowy przedwstępnej, warunków bankowych kupującego, aktu notarialnego i protokołu zdawczo-odbiorczego.' },
    ],
    zakresTytul: 'Co jest po naszej stronie',
    zakres: [
      'Bezpłatna wycena i rekomendacja ceny ofertowej',
      'Koordynacja przygotowania nieruchomości i home stagingu',
      'Zdjęcia, opis oferty i publikacja',
      'Prezentacje, odbieranie telefonów i filtrowanie zapytań',
      'Negocjacje warunków, nie tylko kwoty',
      'Kompletowanie dokumentów i obecność przy finalizacji',
    ],
    uwaga: 'Pośrednictwo prowadzimy jako Autoryzowany Partner Zboralscy Group. Zasady wynagrodzenia ustalamy przed rozpoczęciem współpracy, na piśmie.',
    faqTytul: 'Pytania, które słyszymy najczęściej',
    faq: [
      { pytanie: 'Ile kosztuje wycena?', odpowiedz: 'Nic. Wycena jest bezpłatna i nie zobowiązuje Cię do podpisania umowy ani do skorzystania z naszych usług.' },
      { pytanie: 'Czy muszę wyremontować mieszkanie przed sprzedażą?', odpowiedz: 'Nie zawsze. Część lokali sprzedaje się lepiej w obecnym stanie, bo kupujący i tak planuje własny remont. Zanim cokolwiek zaproponujemy, pokazujemy koszt prac i to, co realnie mogą zmienić.' },
      { pytanie: 'Jak długo trwa sprzedaż?', odpowiedz: 'Zależy od ceny, typu nieruchomości i sytuacji na rynku, więc nie podajemy sztywnych terminów. Na starcie mówimy, co przyspiesza sprzedaż, a co ją spowalnia, i wracamy do tego przy pierwszych informacjach zwrotnych z prezentacji.' },
      { pytanie: 'Czy muszę być obecny przy prezentacjach?', odpowiedz: 'Nie. Większość właścicieli woli nie być, bo kupujący swobodniej rozmawiają. Potrzebujemy tylko dostępu do lokalu i ustalonych zasad kontaktu.' },
      { pytanie: 'Mieszkam poza Białymstokiem. Da się to poprowadzić zdalnie?', odpowiedz: 'Tak, dużą część spraw da się załatwić bez Twojej obecności. Ustalamy wtedy jasno, które kroki wymagają Twojego podpisu albo osobistego udziału.' },
    ],
    powiazania: [
      { etykieta: 'Jak zwiększamy wartość', href: '/zwiekszamy-wartosc', opis: 'Gdy zastanawiasz się, czy przed sprzedażą cokolwiek robić.' },
      { etykieta: 'Szybka sprzedaż', href: '/szybka-sprzedaz', opis: 'Gdy termin jest ważniejszy niż maksymalna cena.' },
      { etykieta: 'Kupno nieruchomości', href: '/kupno-nieruchomosci', opis: 'Gdy sprzedajesz, żeby kupić coś innego.' },
    ],
    ctaTytul: 'Zacznijmy od wyceny',
    ctaOpis: 'Napisz, co sprzedajesz i w jakim terminie. Wycena jest bezpłatna i nie zobowiązuje do współpracy.',
  },

  'kupno-nieruchomosci': {
    wstep: [
      'Kupujący zwykle zostaje z rynkiem sam. Ogłoszenia obiecują więcej, niż pokazują, część ofert powtarza się w kilku miejscach, a na prezentacji trudno w pół godziny ocenić, czy cena jest sensowna.',
      'Pracujemy po Twojej stronie: szukamy, selekcjonujemy, sprawdzamy i negocjujemy. Nie reprezentujemy przy tej samej transakcji sprzedającego.',
    ],
    procesTytul: 'Jak szukamy',
    proces: [
      { nazwa: 'Rozmowa o potrzebach', opis: 'Ustalamy, jak chcesz mieszkać, a nie tylko ile metrów potrzebujesz. Budżet, dzielnice, piętro, dojazdy, hałas, plany na kolejne lata.' },
      { nazwa: 'Kryteria i plan poszukiwań', opis: 'Dzielimy wymagania na konieczne i mile widziane. To skraca listę i pozwala szybciej odrzucać oferty, które i tak by odpadły.' },
      { nazwa: 'Selekcja ofert', opis: 'Przeglądamy rynek, w tym oferty, które nie trafiają do wyszukiwarek. Odsiewamy duplikaty i lokale z wadami dyskwalifikującymi.' },
      { nazwa: 'Prezentacje', opis: 'Jedziemy z Tobą i patrzymy na to, co łatwo przeoczyć przy pierwszym wrażeniu: układ, wilgoć, instalacje, stan części wspólnych, sąsiedztwo.' },
      { nazwa: 'Analiza i weryfikacja', opis: 'Sprawdzamy dokumenty, stan prawny i to, co wynika z uchwał wspólnoty lub spółdzielni. Szacujemy koszt niezbędnych prac, żeby cena zakupu nie była jedyną liczbą w rachunku.' },
      { nazwa: 'Negocjacje', opis: 'Rozmawiamy o cenie, terminie wydania, zadatku i tym, co zostaje w mieszkaniu. Argumentujemy stanem lokalu i realnym kosztem prac.' },
      { nazwa: 'Zakup i odbiór', opis: 'Prowadzimy Cię przez umowę przedwstępną, formalności kredytowe, akt notarialny i protokół odbioru.' },
    ],
    zakresTytul: 'Na co patrzymy, zanim powiemy „warto”',
    zakres: [
      'Zgodność stanu faktycznego z ogłoszeniem i dokumentacją',
      'Stan techniczny lokalu oraz budynku i części wspólnych',
      'Stan prawny, obciążenia i sytuacja wspólnoty lub spółdzielni',
      'Koszty utrzymania i planowane remonty budynku',
      'Realny koszt doprowadzenia lokalu do stanu, jakiego oczekujesz',
      'Otoczenie: dojazd, hałas, plan zagospodarowania sąsiednich działek',
    ],
    uwaga: 'Jeśli szukasz mieszkania, które ma być gotowe do zamieszkania bez Twojego udziału w remoncie, właściwą ścieżką jest mieszkanie pod klucz — tam poza wyszukaniem bierzemy też projekt i wykończenie.',
    faqTytul: 'Pytania kupujących',
    faq: [
      { pytanie: 'Czym to się różni od mieszkania pod klucz?', odpowiedz: 'Tutaj kończymy na zakupie i odbiorze lokalu. W mieszkaniu pod klucz idziemy dalej: projekt, remont lub wykończenie i przekazanie gotowego mieszkania.' },
      { pytanie: 'Szukacie tylko wśród ofert biur?', odpowiedz: 'Nie. Przeglądamy też ogłoszenia prywatne i docieramy do właścicieli, którzy dopiero rozważają sprzedaż.' },
      { pytanie: 'Czy pomagacie przy kredycie?', odpowiedz: 'Nie doradzamy w sprawach finansowych i nie oferujemy produktów bankowych. Porządkujemy harmonogram transakcji tak, aby zgrał się z procesem kredytowym, a kwestie finansowe zostawiamy Twojemu doradcy lub bankowi.' },
      { pytanie: 'Co, jeśli po analizie okaże się, że nie warto?', odpowiedz: 'Mówimy to wprost i szukamy dalej. Lepiej stracić jedną prezentację niż kupić lokal z wadą, której nie da się naprawić.' },
    ],
    powiazania: [
      { etykieta: 'Mieszkanie pod klucz', href: '/mieszkanie-pod-klucz', opis: 'Gdy chcesz wprowadzić się do gotowego lokalu.' },
      { etykieta: 'Inwestycje', href: '/inwestycje', opis: 'Gdy kupujesz pod wynajem lub odsprzedaż.' },
      { etykieta: 'Sprzedaż nieruchomości', href: '/sprzedaz-nieruchomosci', opis: 'Gdy najpierw trzeba sprzedać obecne mieszkanie.' },
    ],
    ctaTytul: 'Powiedz, czego szukasz',
    ctaOpis: 'Napisz, w jakich lokalizacjach i w jakim budżecie się poruszasz. Pierwsza rozmowa nic nie kosztuje.',
  },

  'mieszkanie-pod-klucz': {
    wstep: [
      'Kupno mieszkania i jego wykończenie to zwykle dwa osobne projekty prowadzone przez dwie różne ekipy, a właściciel biega pomiędzy nimi. Efekt bywa taki, że lokal kupiony „bo tani” okazuje się najdroższy w remoncie.',
      'Łączymy oba etapy w jeden proces. Potencjał wykończenia oceniamy jeszcze przed zakupem, więc decyzję o cenie podejmujesz, znając koszt doprowadzenia lokalu do stanu, jakiego oczekujesz.',
    ],
    procesTytul: 'Od pierwszej rozmowy do kluczy',
    proces: [
      { nazwa: 'Potrzeby i budżet całkowity', opis: 'Ustalamy jedną kwotę na zakup i wykończenie razem. To ona wyznacza, jakich lokali w ogóle szukamy.' },
      { nazwa: 'Wyszukanie', opis: 'Szukamy na rynku wtórnym i pierwotnym, w zależności od tego, co lepiej odpowiada Twojemu terminowi i oczekiwaniom.' },
      { nazwa: 'Ocena potencjału', opis: 'Sprawdzamy układ, instalacje, możliwości zmian i szacujemy koszt prac jeszcze przed złożeniem oferty.' },
      { nazwa: 'Negocjacje i zakup', opis: 'Negocjujemy cenę z argumentami wynikającymi ze stanu lokalu, a potem prowadzimy Cię przez formalności.' },
      { nazwa: 'Projekt', opis: 'Projektujemy układ i wnętrze, dobieramy materiały i przygotowujemy kosztorys. Widzisz ceny, zanim cokolwiek ruszy.' },
      { nazwa: 'Remont lub wykończenie', opis: 'Koordynujemy prace i pilnujemy harmonogramu. Zmiany w trakcie zawsze wyceniamy przed wykonaniem.' },
      { nazwa: 'Wyposażenie w ustalonym zakresie', opis: 'Meble, oświetlenie i dodatki obejmujemy w takim zakresie, jaki wspólnie ustalimy na etapie projektu.' },
      { nazwa: 'Przekazanie', opis: 'Oddajemy mieszkanie posprzątane i gotowe do wprowadzenia, z dokumentacją i gwarancjami od wykonawców.' },
    ],
    blokTytul: 'Rynek wtórny czy pierwotny',
    blok: [
      { nazwa: 'Rynek wtórny', opis: 'Zwykle lepsza lokalizacja i niższa cena metra, ale wyższy i mniej przewidywalny koszt prac. Trzeba liczyć się z wymianą instalacji, wyrównaniem ścian i niespodziankami po skuciu tynków. Za to lokal można obejrzeć takim, jaki jest.' },
      { nazwa: 'Rynek pierwotny', opis: 'Stan deweloperski oznacza przewidywalny zakres prac i mniej ryzyka technicznego, ale też oczekiwanie na odbiór i zwykle wyższą cenę wyjściową. Przy odbiorze sprawdzamy jakość wykonania i zgłaszamy usterki do dewelopera.' },
    ],
    zakresTytul: 'Co obejmuje współpraca',
    zakres: [
      'Wyszukanie lokalu i ocena jego potencjału przed zakupem',
      'Negocjacje i wsparcie przy transakcji',
      'Projekt układu i wnętrza wraz z kosztorysem',
      'Dobór i zakup materiałów',
      'Koordynacja ekip i nadzór nad pracami',
      'Wyposażenie w ustalonym zakresie i przekazanie mieszkania',
    ],
    uwaga: 'Możesz wejść w dowolnym momencie tej ścieżki. Jeśli mieszkanie już masz, zaczynamy od projektu.',
    faqTytul: 'Pytania przed startem',
    faq: [
      { pytanie: 'Czy mogę zlecić tylko wykończenie, bez szukania mieszkania?', odpowiedz: 'Tak. Wtedy zaczynamy od oględzin lokalu, projektu i kosztorysu.' },
      { pytanie: 'Kiedy poznam koszt prac?', odpowiedz: 'Po projekcie, w formie kosztorysu z podziałem na pozycje. Każda późniejsza zmiana zakresu jest wyceniana, zanim ją wykonamy.' },
      { pytanie: 'Ile trwa wykończenie?', odpowiedz: 'Harmonogram ustalamy po projekcie, bo różnica między odświeżeniem a przebudową z przenoszeniem instalacji to wiele tygodni. Nie podajemy terminów przed poznaniem zakresu.' },
      { pytanie: 'Czy muszę być na miejscu w trakcie prac?', odpowiedz: 'Nie. Nadzór i kontakt z ekipami są po naszej stronie, a Ty dostajesz informacje o postępach i decydujesz w kluczowych punktach.' },
      { pytanie: 'Czy kupujecie materiały na własną rękę?', odpowiedz: 'Dobieramy je w projekcie i przedstawiamy do akceptacji. Możesz też wskazać własne rozwiązania — uwzględniamy je w kosztorysie.' },
    ],
    powiazania: [
      { etykieta: 'Kupno nieruchomości', href: '/kupno-nieruchomosci', opis: 'Gdy potrzebujesz tylko pomocy w znalezieniu i zakupie.' },
      { etykieta: 'Jak zwiększamy wartość', href: '/zwiekszamy-wartosc', opis: 'Gdy mieszkanie już masz i zastanawiasz się nad zakresem prac.' },
      { etykieta: 'Inwestycje', href: '/inwestycje', opis: 'Gdy lokal ma zarabiać, a nie służyć do zamieszkania.' },
    ],
    ctaTytul: 'Opowiedz, jak chcesz mieszkać',
    ctaOpis: 'Napisz, w jakim budżecie się poruszasz i na kiedy potrzebujesz mieszkania. Wstępna rozmowa jest bezpłatna.',
  },

  inwestycje: {
    wstep: [
      'Inwestycja w nieruchomość zaczyna się od pytania, na które łatwo odpowiedzieć zbyt szybko: co ma się wydarzyć z tym kapitałem i w jakim czasie. Dopiero z tego wynika, czego szukać.',
      'Prowadzimy projekt od analizy po przygotowanie lokalu do sprzedaży lub wynajmu. Nie obiecujemy stopy zwrotu ani terminu wyjścia z inwestycji, bo zależą od rynku, na który nikt z nas nie ma wpływu.',
    ],
    procesTytul: 'Jak prowadzimy projekt',
    proces: [
      { nazwa: 'Kapitał, cel i horyzont', opis: 'Ustalamy, ile środków angażujesz, czy korzystasz z finansowania i jak długo możesz czekać na efekt. Pytamy też, ile chcesz mieć wspólnego z prowadzeniem projektu.' },
      { nazwa: 'Analiza możliwości', opis: 'Porównujemy warianty: lokal pod wynajem, lokal do odświeżenia i odsprzedaży, zmiana funkcji lub podział. Odrzucamy te, które nie mają uzasadnienia technicznego, formalnego albo ekonomicznego.' },
      { nazwa: 'Wyszukanie nieruchomości', opis: 'Szukamy pod przyjęte kryteria i liczymy koszty prac dla każdego kandydata, zanim zaproponujemy ofertę do rozważenia.' },
      { nazwa: 'Zakup', opis: 'Negocjacje, weryfikacja dokumentów i przeprowadzenie transakcji.' },
      { nazwa: 'Przygotowanie', opis: 'Remont, zmiana układu lub samo odświeżenie — w zakresie, który wynika z przyjętego celu, a nie z przyzwyczajenia.' },
      { nazwa: 'Wyjście', opis: 'Przygotowanie do sprzedaży albo do wynajmu: zdjęcia, opis, wyposażenie w potrzebnym zakresie.' },
    ],
    zakresTytul: 'Czego nie robimy',
    zakres: [
      'Nie obiecujemy rentowności ani czasu zwrotu',
      'Nie doradzamy w zakresie inwestycji finansowych ani produktów bankowych',
      'Nie rekomendujemy przebudowy, jeśli nie ma podstaw technicznych lub formalnych',
      'Nie przedstawiamy szacunków jako gwarancji — pokazujemy założenia, na których są oparte',
    ],
    uwaga: 'Zakres naszego udziału po zakupie ustalamy indywidualnie: od samego przygotowania lokalu po prowadzenie całego projektu.',
    faqTytul: 'Pytania inwestorów',
    faq: [
      { pytanie: 'Jaki kapitał jest potrzebny na start?', odpowiedz: 'Nie ma jednej kwoty — inne możliwości daje kawalerka do odświeżenia, inne lokal wymagający przebudowy. Podczas pierwszej rozmowy mówimy, co jest realne przy Twoim budżecie.' },
      { pytanie: 'Czy policzycie mi rentowność?', odpowiedz: 'Przygotujemy kalkulację z jawnymi założeniami: cena zakupu, koszt prac, koszty transakcyjne i utrzymania. To nadal założenia, a nie obietnica wyniku.' },
      { pytanie: 'Czy zajmujecie się obsługą najmu?', odpowiedz: 'Zakres po zakupie ustalamy indywidualnie. Powiedz, czego potrzebujesz, a odpowiemy wprost, co możemy wziąć na siebie, a czego nie.' },
      { pytanie: 'Czy podział lokalu jest zawsze możliwy?', odpowiedz: 'Nie. Decydują warunki techniczne, przepisy i stanowisko wspólnoty lub spółdzielni. Sprawdzamy to przed zakupem, a nie po.' },
    ],
    powiazania: [
      { etykieta: 'Jak zwiększamy wartość', href: '/zwiekszamy-wartosc', opis: 'Zakres prac dobierany do celu, nie do przyzwyczajeń.' },
      { etykieta: 'Mieszkanie pod klucz', href: '/mieszkanie-pod-klucz', opis: 'Gdy lokal ma być gotowy do zamieszkania lub wynajmu.' },
      { etykieta: 'Sprzedaż nieruchomości', href: '/sprzedaz-nieruchomosci', opis: 'Gdy przygotowujesz nieruchomość do wyjścia z inwestycji.' },
    ],
    ctaTytul: 'Porozmawiajmy o założeniach',
    ctaOpis: 'Napisz, jakim kapitałem dysponujesz i jaki masz horyzont. Pierwsza analiza możliwości jest bezpłatna.',
  },

  'zwiekszamy-wartosc': {
    wstep: [
      'Najczęstsze pytanie właścicieli brzmi: czy przed sprzedażą coś robić. Odpowiedź „zrób remont” jest wygodna dla wykonawcy, ale nie zawsze dla Ciebie. Bywa, że koszt prac nie wraca w cenie, a bywa, że jedno popołudnie porządkowania zmienia odbiór mieszkania.',
      'Dlatego nie zaczynamy od zakresu prac, tylko od celu. Potem pokazujemy warianty i ich koszt, a decyzję podejmujesz Ty.',
    ],
    procesTytul: 'Jak podejmujemy decyzję',
    proces: [
      { nazwa: 'Cel', opis: 'Sprzedaż, wynajem czy własne zamieszkanie — i w jakim terminie. Ten sam lokal przygotowuje się inaczej do każdego z tych celów.' },
      { nazwa: 'Diagnoza', opis: 'Stan techniczny, układ, oświetlenie, dokumenty, otoczenie. Szukamy tego, co odstrasza oglądających w pierwszych sekundach.' },
      { nazwa: 'Warianty', opis: 'Od braku prac, przez uporządkowanie i home staging, po odświeżenie lub pełny remont.' },
      { nazwa: 'Koszt', opis: 'Orientacyjny budżet i czas dla każdego wariantu, oparty na realnych cenach prac, a nie na szacunku z sufitu.' },
      { nazwa: 'Potencjalny efekt', opis: 'Co może się zmienić w odbiorze oferty i w rozmowach o cenie. Mówimy też, kiedy naszym zdaniem efekt będzie znikomy.' },
      { nazwa: 'Decyzja', opis: 'Wybierasz wariant, znając koszty i możliwe skutki. Realizujemy dokładnie to, co ustaliliśmy.' },
    ],
    blokTytul: 'Zakres działań',
    blok: [
      { nazwa: 'Home staging', opis: 'Uporządkowanie, usunięcie nadmiaru rzeczy, poprawienie światła i aranżacja kluczowych pomieszczeń. Najtańszy wariant, zwykle kilka dni pracy.' },
      { nazwa: 'Odświeżenie', opis: 'Malowanie, drobne naprawy, wymiana zużytych elementów: gniazdek, listew, oświetlenia, uszczelnień.' },
      { nazwa: 'Remont i wykończenie', opis: 'Pełny zakres prac, gdy stan lokalu realnie blokuje sprzedaż albo zamieszkanie.' },
      { nazwa: 'Zmiana układu lub funkcji', opis: 'Rozważana tylko wtedy, gdy pozwalają na to warunki techniczne, formalne i rachunek ekonomiczny.' },
    ],
    zakresTytul: 'Kiedy odradzamy prace',
    zakres: [
      'Gdy koszt przekracza realny wpływ na cenę lub czas sprzedaży',
      'Gdy kupujący dla tego typu lokalu i tak planuje własny remont',
      'Gdy termin jest na tyle krótki, że prace opóźnią sprzedaż bardziej, niż pomogą',
      'Gdy zakres wymaga zgód, których nie da się uzyskać w rozsądnym czasie',
    ],
    faqTytul: 'Częste wątpliwości',
    faq: [
      { pytanie: 'Czy home staging podnosi cenę?', odpowiedz: 'Wpływa przede wszystkim na to, jak oferta wygląda na zdjęciach i jak lokal odbierają oglądający. Nie traktujemy go jako gwarancji wyższej ceny i nie obiecujemy konkretnych kwot.' },
      { pytanie: 'Czy wykonujecie prace, czy tylko doradzacie?', odpowiedz: 'Możemy poprowadzić prace i koordynować ekipy albo ograniczyć się do rekomendacji, jeśli wolisz zrobić je we własnym zakresie.' },
      { pytanie: 'Czy dostanę kosztorys przed decyzją?', odpowiedz: 'Tak. Pokazujemy koszt każdego wariantu, zanim cokolwiek zaczniemy.' },
      { pytanie: 'A jeśli okaże się, że nie warto nic robić?', odpowiedz: 'Powiemy to wprost. Taka rekomendacja też jest wynikiem naszej pracy.' },
    ],
    powiazania: [
      { etykieta: 'Sprzedaż nieruchomości', href: '/sprzedaz-nieruchomosci', opis: 'Przygotowanie jest częścią strategii sprzedaży.' },
      { etykieta: 'Mieszkanie pod klucz', href: '/mieszkanie-pod-klucz', opis: 'Gdy lokal ma być gotowy do zamieszkania.' },
      { etykieta: 'Szybka sprzedaż', href: '/szybka-sprzedaz', opis: 'Gdy czas nie pozwala na prace.' },
    ],
    ctaTytul: 'Sprawdźmy, co ma sens',
    ctaOpis: 'Napisz, co planujesz zrobić z nieruchomością. Oględziny i rekomendacja wariantów są bezpłatne.',
  },

  'szybka-sprzedaz': {
    wstep: [
      'Czasem termin jest ważniejszy niż ostatnie kilka procent ceny: przeprowadzka, sprawy rodzinne, kredyt, zakup innej nieruchomości z konkretną datą. To normalna sytuacja i nie wymaga tłumaczenia się.',
      'Ta ścieżka jest dyskretna i prowadzimy ją spokojnie. Nie obiecujemy gotówki w 24 godziny ani konkretnej kwoty, bo takich rzeczy nikt uczciwie nie obieca przed obejrzeniem nieruchomości.',
    ],
    procesTytul: 'Jak wygląda rozmowa',
    proces: [
      { nazwa: 'Twoja sytuacja', opis: 'Pytamy o realną datę, do której chcesz mieć sprawę zamkniętą, i o to, co jest nieprzekraczalne: kwota, termin wydania czy jedno i drugie.' },
      { nazwa: 'Punkt wyjścia', opis: 'Oglądamy nieruchomość i sprawdzamy stan prawny. Dokumenty potrafią wydłużyć transakcję bardziej niż stan mieszkania.' },
      { nazwa: 'Scenariusze', opis: 'Pokazujemy możliwe drogi wraz z ich konsekwencjami dla ceny i terminu. Każdy scenariusz ma swoją cenę — dosłownie.' },
      { nazwa: 'Decyzja i prowadzenie', opis: 'Wybierasz wariant, a my prowadzimy sprawę i pilnujemy terminów aż do aktu notarialnego.' },
    ],
    blokTytul: 'Możliwe scenariusze',
    blok: [
      { nazwa: 'Cena ustawiona pod termin', opis: 'Świadome obniżenie ceny ofertowej i szersza promocja. Najczęściej wybierana droga, gdy zależy na czasie, a nieruchomość jest w dobrym stanie.' },
      { nazwa: 'Sprzedaż w stanie obecnym', opis: 'Rezygnujemy z przygotowań i prac, a lokal kierujemy do kupujących, którzy i tak planują remont.' },
      { nazwa: 'Minimalne przygotowanie', opis: 'Tylko te działania, które da się zrobić w kilka dni i które realnie poprawiają pierwsze wrażenie.' },
      { nazwa: 'Elastyczny termin wydania', opis: 'Czasem to nie cena, lecz możliwość późniejszego wydania lokalu przesądza o wyborze kupującego.' },
    ],
    zakresTytul: 'Czego nie usłyszysz od nas',
    zakres: [
      'Obietnicy konkretnej kwoty przed obejrzeniem nieruchomości',
      'Gwarancji sprzedaży w określonej liczbie dni',
      'Presji, żebyś zdecydował się „dziś, bo jutro oferta przepada”',
      'Zapewnień o gotówce natychmiast po pierwszej rozmowie',
    ],
    uwaga: 'Rozmowa jest niezobowiązująca i traktujemy ją poufnie. Jeśli po przedstawieniu scenariuszy uznasz, że wolisz poczekać i sprzedawać spokojnie, to też jest dobra decyzja.',
    faqTytul: 'Pytania, gdy zależy na czasie',
    faq: [
      { pytanie: 'O ile niższa będzie cena?', odpowiedz: 'To zależy od nieruchomości i od tego, jak krótki jest termin. Podajemy widełki dopiero po oględzinach i zawsze z wyjaśnieniem, z czego wynikają.' },
      { pytanie: 'Czy skupujecie nieruchomości?', odpowiedz: 'Przy pierwszej rozmowie mówimy wprost, które scenariusze są dostępne w Twojej sytuacji, łącznie z tym, czy w grę wchodzą kupujący gotówkowi.' },
      { pytanie: 'Czy sąsiedzi i znajomi się dowiedzą?', odpowiedz: 'Nie musimy oznaczać oferty jako pilnej ani wystawiać banerów. Zakres działań promocyjnych ustalamy razem z Tobą.' },
      { pytanie: 'Mieszkanie jest w kiepskim stanie. To problem?', odpowiedz: 'Nie. Dla części kupujących to nawet zaleta, bo planują własny remont. Ważne jest wtedy rzetelne pokazanie stanu w ofercie.' },
    ],
    powiazania: [
      { etykieta: 'Sprzedaż nieruchomości', href: '/sprzedaz-nieruchomosci', opis: 'Gdy jednak jest czas na standardowy proces.' },
      { etykieta: 'Jak zwiększamy wartość', href: '/zwiekszamy-wartosc', opis: 'Gdy kilka dni prac może zmienić odbiór oferty.' },
    ],
    ctaTytul: 'Napisz, ile masz czasu',
    ctaOpis: 'Opisz krótko sytuację i termin. Odezwiemy się i przedstawimy możliwe scenariusze — bez zobowiązań.',
  },
};

/** Para zdjęć przed/po dla usługi „Mieszkanie pod klucz”. Zdjęcia poglądowe, nie konkretna realizacja. */
export const przedPoLokalne: Record<
  string,
  { przed: { url: string; alt: string }; po: { url: string; alt: string }; opis: string; pogladowe: boolean }
> = {
  'mieszkanie-pod-klucz': {
    przed: {
      url: '/images/przedpo-pod-klucz-przed.jpg',
      alt: 'Mieszkanie w stanie deweloperskim: szare ściany, wylewka i wyprowadzone instalacje',
    },
    po: {
      url: '/images/przedpo-pod-klucz-po.jpg',
      alt: 'To samo wnętrze po wykończeniu: salon z aneksem kuchennym, jadalnią i drewnianą podłogą',
    },
    opis: 'Ten sam salon z aneksem kuchennym: stan deweloperski i stan po wykończeniu pod klucz.',
    pogladowe: true,
  },
};

// Propozycje 40 podstron lokalizacyjnych (docs/SEO_MAP.csv).
// Wszystkie trafiają do CMS jako WERSJE ROBOCZE — publikujemy dopiero po akceptacji klienta.
export const lokalizacje = [
  {
    "adres": "sprzedaz-mieszkania-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – właściciel mieszkania",
    "fraza": "sprzedaż mieszkania Białystok",
    "wyroznik": "Specyfika mieszkań: dokumenty spółdzielcze/KW, wspólnota, przygotowanie do zdjęć, prezentacje w zamieszkanym lokalu",
    "tytul": "Sprzedaż mieszkania w Białymstoku",
    "wstep": [
      "Mieszkanie sprzedaje się inaczej niż dom. Więcej zależy od dokumentów i od wspólnoty albo spółdzielni, a mniej od działki i stanu dachu. Do tego prezentacje odbywają się zwykle w lokalu, w którym ktoś nadal mieszka.",
      "Prowadzimy sprzedaż mieszkań w całym Białymstoku, od bloków z wielkiej płyty po nowe inwestycje. Zaczynamy od bezpłatnej wyceny, żeby cena ofertowa opierała się na czymś więcej niż na cenach z ogłoszeń sąsiadów."
    ],
    "proces": [
      {
        "nazwa": "Sprawdzenie dokumentów",
        "opis": "Odrębna własność czy spółdzielcze prawo, księga wieczysta, zaświadczenia ze spółdzielni lub wspólnoty, zaległości w opłatach. To zwykle wydłuża sprzedaż bardziej niż stan mieszkania."
      },
      {
        "nazwa": "Cena ofertowa",
        "opis": "Porównujemy lokale o podobnym metrażu, piętrze, układzie i standardzie w tej samej okolicy, a nie średnie ceny dla całego miasta."
      },
      {
        "nazwa": "Przygotowanie zamieszkanego lokalu",
        "opis": "Podpowiadamy, co schować, co poprawić i jak ustawić meble przed zdjęciami. Zwykle wystarczy kilka godzin pracy."
      },
      {
        "nazwa": "Zdjęcia i opis",
        "opis": "Robimy zdjęcia po uporządkowaniu, w świetle dziennym, i piszemy opis, który odpowiada na pytania kupujących, zamiast je mnożyć."
      },
      {
        "nazwa": "Prezentacje",
        "opis": "Umawiamy je tak, żeby nie dezorganizowały Ci dnia, i prowadzimy je pod Twoją nieobecność."
      },
      {
        "nazwa": "Negocjacje i finalizacja",
        "opis": "Rozmawiamy o cenie, terminie wydania i wyposażeniu, potem pilnujemy umowy przedwstępnej, kredytu kupującego i aktu notarialnego."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy muszę się wyprowadzić na czas sprzedaży?",
        "odpowiedz": "Nie. Większość mieszkań sprzedaje się w stanie zamieszkanym. Wystarczy uporządkować przestrzeń przed zdjęciami i prezentacjami."
      },
      {
        "pytanie": "Mieszkanie jest spółdzielcze — czy to problem?",
        "odpowiedz": "Nie, ale wymaga innych dokumentów niż odrębna własność. Sprawdzamy to na początku, żeby nie okazało się to przeszkodą tuż przed aktem notarialnym."
      },
      {
        "pytanie": "Czy warto malować przed sprzedażą?",
        "odpowiedz": "Czasem tak, czasem to strata pieniędzy. Zależy od stanu ścian i od tego, kto jest kupującym dla tego mieszkania. Mówimy wprost, kiedy się nie opłaca."
      },
      {
        "pytanie": "Jak ustalacie cenę ofertową?",
        "odpowiedz": "Na podstawie porównywalnych lokali w tej samej okolicy i realnych reakcji rynku w pierwszych tygodniach. Cenę korygujemy, jeśli sygnały z prezentacji są jednoznaczne."
      }
    ],
    "gotowa": true,
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Dokumenty, o które zapyta kupujący",
        "wstep": "Im wcześniej je zbierzesz, tym mniej nerwów przy umowie przedwstępnej.",
        "punkty": [
          {
            "tresc": "Dokument potwierdzający nabycie mieszkania (akt notarialny, umowa, postanowienie o spadku)"
          },
          {
            "tresc": "Numer księgi wieczystej albo informacja o spółdzielczym prawie bez księgi"
          },
          {
            "tresc": "Zaświadczenie ze spółdzielni lub wspólnoty o braku zaległości w opłatach"
          },
          {
            "tresc": "Świadectwo charakterystyki energetycznej"
          },
          {
            "tresc": "Informacja o osobach zameldowanych w lokalu"
          }
        ]
      },
      {
        "blockType": "uwaga",
        "tytul": "Mieszkanie w bloku z wielkiej płyty",
        "tresc": "Kupujący takich mieszkań pytają przede wszystkim o stan instalacji, ocieplenie budynku i planowane remonty części wspólnych. Warto mieć te informacje od zarządcy, zanim padną na prezentacji."
      }
    ]
  },
  {
    "adres": "sprzedaz-domu-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – właściciel domu",
    "fraza": "sprzedaż domu Białystok",
    "wyroznik": "Dom: działka, media, stan techniczny, sezonowość prezentacji ogrodu, dłuższy proces",
    "gotowa": true,
    "tytul": "Sprzedaż domu w Białymstoku",
    "wstep": [
      "Dom w granicach miasta sprzedaje się inaczej niż mieszkanie. Kupujący oglądają nie tylko wnętrza, ale też działkę, dach, instalacje i koszty ogrzewania, a decyzja zapada wolniej, bo w grę wchodzą wyższe kwoty.",
      "Pomagamy przygotować dom i dokumenty tak, żeby na prezentacji rozmawiać o tym, jak się w nim mieszka, a nie o brakującym zaświadczeniu. Zaczynamy od bezpłatnej wyceny."
    ],
    "proces": [
      {
        "nazwa": "Dokumenty nieruchomości",
        "opis": "Księga wieczysta, wypis z rejestru gruntów, pozwolenie na budowę i odbiór, ewentualne zmiany w projekcie. Braki wychodzą zwykle przy banku kupującego — lepiej wcześniej."
      },
      {
        "nazwa": "Stan techniczny i koszty utrzymania",
        "opis": "Zbieramy informacje o dachu, instalacjach, izolacji i ogrzewaniu. Kupujący pytają o rachunki, więc przygotowujemy je od razu."
      },
      {
        "nazwa": "Przygotowanie domu i posesji",
        "opis": "Porządek na działce, uporządkowany garaż, drobne naprawy. Pierwsze wrażenie powstaje jeszcze przed wejściem do środka."
      },
      {
        "nazwa": "Oferta i prezentacje",
        "opis": "Zdjęcia wnętrz i otoczenia, rzuty kondygnacji i opis, który nie pomija kosztów. Pokazy prowadzimy pod Twoją nieobecność, jeśli wolisz."
      },
      {
        "nazwa": "Negocjacje i finalizacja",
        "opis": "Rozmowa o cenie, terminie wydania i tym, co zostaje w domu. Potem umowa przedwstępna, kredyt kupującego i akt notarialny."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy potrzebne jest świadectwo charakterystyki energetycznej?",
        "odpowiedz": "Tak, przy sprzedaży domu trzeba je przekazać kupującemu. Pomożemy je zamówić, zanim pojawi się pierwszy poważny zainteresowany."
      },
      {
        "pytanie": "Dom nie ma odbioru końcowego — czy da się go sprzedać?",
        "odpowiedz": "Zwykle tak, ale wpływa to na krąg kupujących i warunki kredytu. Sprawdzamy sytuację na początku i mówimy, jakie są możliwości."
      },
      {
        "pytanie": "Jak długo trwa sprzedaż domu?",
        "odpowiedz": "Dłużej niż mieszkania, bo kupujących jest mniej. Nie podajemy terminów z góry — zależą od ceny, stanu i sytuacji na rynku."
      },
      {
        "pytanie": "Czy warto remontować przed sprzedażą?",
        "odpowiedz": "Tylko wtedy, gdy koszt ma szansę się zwrócić. Częściej opłaca się uporządkowanie i drobne naprawy niż pełny remont."
      }
    ],
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Dokumenty domu do przygotowania przed sprzedażą",
        "wstep": null,
        "punkty": [
          {
            "tresc": "Odpis z księgi wieczystej"
          },
          {
            "tresc": "Wypis z rejestru gruntów i mapka działki"
          },
          {
            "tresc": "Pozwolenie na budowę i zawiadomienie o zakończeniu budowy lub pozwolenie na użytkowanie"
          },
          {
            "tresc": "Świadectwo charakterystyki energetycznej"
          },
          {
            "tresc": "Rachunki za media i ogrzewanie z ostatnich miesięcy"
          }
        ]
      },
      {
        "blockType": "uwaga",
        "tytul": "Dom z lat 70. i 80.",
        "tresc": "Starsze domy w Białymstoku często mają przerabiane instalacje i nieudokumentowane rozbudowy. Nie trzeba tego ukrywać — trzeba to wiedzieć przed kupującym i uwzględnić w cenie."
      }
    ]
  },
  {
    "adres": "sprzedaz-dzialki-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – właściciel działki",
    "fraza": "sprzedaż działki Białystok",
    "wyroznik": "Działka: przeznaczenie w planie/WZ, dostęp do drogi, media – jakie dokumenty przygotować",
    "gotowa": false
  },
  {
    "adres": "home-staging-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "zwiekszamy-wartosc",
    "intencja": "usługowa",
    "fraza": "home staging Białystok",
    "wyroznik": "Home staging jako część strategii sprzedaży: kiedy wystarczy aranżacja, kiedy nie; zdjęcia i prezentacje",
    "tytul": "Home staging w Białymstoku",
    "wstep": [
      "Home staging to nie remont i nie dekorowanie dla samego efektu. To przygotowanie mieszkania pod zdjęcia i prezentacje, żeby kupujący zobaczył przestrzeń, a nie cudze życie.",
      "Traktujemy go jako element strategii sprzedaży, nie osobną usługę dekoratorską. Proponujemy go wtedy, gdy ma szansę skrócić czas sprzedaży albo poprawić odbiór oferty — a odradzamy, gdy koszt nie ma jak się zwrócić."
    ],
    "proces": [
      {
        "nazwa": "Ocena lokalu",
        "opis": "Patrzymy na to, co odstrasza w pierwszych sekundach: ciemny przedpokój, zastawione blaty, meble zasłaniające okna."
      },
      {
        "nazwa": "Zakres i koszt",
        "opis": "Dostajesz listę działań z kosztem. Część z nich możesz wykonać sam, część bierzemy na siebie."
      },
      {
        "nazwa": "Uporządkowanie i aranżacja",
        "opis": "Usuwamy nadmiar rzeczy, poprawiamy światło, ustawiamy meble tak, żeby pokazać metraż i funkcję pomieszczeń."
      },
      {
        "nazwa": "Zdjęcia",
        "opis": "Fotografujemy po pracach, przy świetle dziennym. To zdjęcia decydują, czy ktoś w ogóle zadzwoni."
      }
    ],
    "faq": [
      {
        "pytanie": "Ile kosztuje home staging mieszkania?",
        "odpowiedz": "Zależy od metrażu i zakresu. Po obejrzeniu lokalu podajemy koszt wariantów, zanim cokolwiek zaczniemy."
      },
      {
        "pytanie": "Czy home staging podniesie cenę?",
        "odpowiedz": "Wpływa przede wszystkim na liczbę zapytań i odbiór mieszkania na zdjęciach. Nie obiecujemy konkretnych kwot, bo o cenie decyduje rynek."
      },
      {
        "pytanie": "Czy wynajmujecie meble?",
        "odpowiedz": "Zakres ustalamy indywidualnie — czasem wystarczy przestawienie tego, co jest, czasem potrzebne są dodatki."
      },
      {
        "pytanie": "Mieszkanie jest puste. Czy to gorzej?",
        "odpowiedz": "Puste wnętrza wyglądają na zdjęciach mniejsze i trudniej w nich wyobrazić sobie życie. Wtedy home staging ma szczególny sens."
      }
    ],
    "gotowa": true,
    "bloki": [
      {
        "blockType": "porownanie",
        "tytul": "Home staging a remont",
        "kolumnaA": "Home staging",
        "kolumnaB": "Remont",
        "wiersze": [
          {
            "cecha": "Cel",
            "a": "lepszy odbiór oferty na zdjęciach i prezentacjach",
            "b": "zmiana stanu technicznego lokalu"
          },
          {
            "cecha": "Czas",
            "a": "zwykle kilka dni",
            "b": "zwykle kilka tygodni"
          },
          {
            "cecha": "Koszt",
            "a": "niższy, często w dużej części Twoja praca",
            "b": "wyższy, wymaga ekipy i materiałów"
          },
          {
            "cecha": "Kiedy ma sens",
            "a": "lokal w przyzwoitym stanie, ale źle pokazany",
            "b": "zniszczone elementy, które odstraszają kupujących"
          }
        ],
        "podsumowanie": "W wielu mieszkaniach wystarcza pierwsze. Drugie proponujemy tylko wtedy, gdy stan lokalu realnie blokuje sprzedaż."
      }
    ]
  },
  {
    "adres": "remont-przed-sprzedaza-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "zwiekszamy-wartosc",
    "intencja": "informacyjno-usługowa",
    "fraza": "remont mieszkania przed sprzedażą",
    "wyroznik": "Model decyzji: cel → diagnoza → warianty → koszt → potencjalny efekt; kiedy remont się nie opłaca",
    "gotowa": true,
    "tytul": "Remont przed sprzedażą mieszkania w Białymstoku — kiedy się opłaca",
    "wstep": [
      "To jedno z najczęstszych pytań właścicieli: czy przed sprzedażą coś remontować. Odpowiedź „tak, zawsze” jest wygodna dla wykonawcy, ale nie dla Ciebie. Część prac zwraca się w cenie albo w krótszym czasie sprzedaży, a część to pieniądze wydane na gust kogoś, kto i tak wszystko zmieni.",
      "Pomagamy podjąć tę decyzję na liczbach, a nie na przeczuciu. Najpierw oceniamy mieszkanie i to, kto będzie jego kupującym, potem pokazujemy warianty z kosztami."
    ],
    "proces": [
      {
        "nazwa": "Kto kupi to mieszkanie",
        "opis": "Inaczej przygotowuje się kawalerkę dla studenta czy inwestora, a inaczej trzy pokoje dla rodziny. Od tego zależy, co ma sens."
      },
      {
        "nazwa": "Diagnoza",
        "opis": "Szukamy tego, co odstrasza w pierwszych sekundach: zniszczone podłogi, ciemne kolory, zużyta łazienka, zapach."
      },
      {
        "nazwa": "Warianty z kosztami",
        "opis": "Od braku prac, przez odświeżenie, po remont wybranych pomieszczeń. Przy każdym wariancie orientacyjny koszt i czas."
      },
      {
        "nazwa": "Decyzja i realizacja",
        "opis": "Wybierasz wariant. Jeśli chcesz, koordynujemy prace, żeby mieszkanie było gotowe do zdjęć w ustalonym terminie."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy remont łazienki podnosi cenę?",
        "odpowiedz": "Czasem tak, czasem nie. Zniszczona łazienka odstrasza, ale kosztowny remont nie zawsze wraca w cenie. Oceniamy to dla konkretnego mieszkania."
      },
      {
        "pytanie": "Co zwykle się opłaca?",
        "odpowiedz": "Najczęściej tanie działania: malowanie na jasne kolory, drobne naprawy, wymiana zużytych elementów, porządek i dobre zdjęcia."
      },
      {
        "pytanie": "A jeśli nie mam czasu na prace?",
        "odpowiedz": "Wtedy rozważamy sprzedaż w obecnym stanie, skierowaną do kupujących, którzy i tak planują remont."
      },
      {
        "pytanie": "Czy dostanę kosztorys przed decyzją?",
        "odpowiedz": "Tak. Nie zaczynamy żadnych prac, dopóki nie znasz kosztu i nie wybierzesz wariantu."
      }
    ],
    "bloki": [
      {
        "blockType": "porownanie",
        "tytul": "Co się zwykle opłaca, a co nie",
        "kolumnaA": "Zwykle się opłaca",
        "kolumnaB": "Zwykle się nie opłaca",
        "wiersze": [
          {
            "cecha": "Ściany",
            "a": "malowanie na jasne, neutralne kolory",
            "b": "drogie tapety i dekoracje"
          },
          {
            "cecha": "Łazienka",
            "a": "nowa armatura, fugi, silikony",
            "b": "pełna wymiana płytek pod swój gust"
          },
          {
            "cecha": "Kuchnia",
            "a": "nowe fronty lub uchwyty, porządek",
            "b": "nowa zabudowa kuchenna od zera"
          },
          {
            "cecha": "Podłogi",
            "a": "naprawa uszkodzeń, cyklinowanie",
            "b": "wymiana na droższy materiał"
          },
          {
            "cecha": "Całość",
            "a": "porządek, światło, dobre zdjęcia",
            "b": "remont „pod siebie” przed wyprowadzką"
          }
        ],
        "podsumowanie": "To reguły ogólne. Dla konkretnego mieszkania decyzję podejmujemy po obejrzeniu lokalu i oszacowaniu kosztów."
      }
    ]
  },
  {
    "adres": "sprzedaz-mieszkania-do-remontu-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – lokal w złym stanie",
    "fraza": "sprzedaż mieszkania do remontu Białystok",
    "wyroznik": "Scenariusze: sprzedaż w obecnym stanie z pokazaniem potencjału (wizualizacja/projekt) vs. odświeżenie",
    "gotowa": true,
    "tytul": "Sprzedaż mieszkania do remontu w Białymstoku",
    "wstep": [
      "Mieszkanie w złym stanie to nie jest wyrok. Jest spora grupa kupujących, którzy szukają właśnie takich lokali, bo chcą urządzić je po swojemu albo kupić taniej i wyremontować na wynajem.",
      "Klucz to uczciwe pokazanie stanu i potencjału. Oferta, która udaje, że mieszkanie jest gotowe do zamieszkania, kończy się rozczarowaniem na prezentacji i stratą czasu obu stron."
    ],
    "proces": [
      {
        "nazwa": "Ocena stanu",
        "opis": "Sprawdzamy instalacje, okna, podłogi i łazienkę, żeby wiedzieć, jaki zakres remontu czeka kupującego."
      },
      {
        "nazwa": "Dwie drogi",
        "opis": "Sprzedaż w obecnym stanie albo tanie odświeżenie, które poprawi pierwsze wrażenie. Porównujemy koszty i możliwy efekt."
      },
      {
        "nazwa": "Pokazanie potencjału",
        "opis": "Rzut z możliwym nowym układem albo prosta wizualizacja pomagają kupującemu zobaczyć, co da się z tego zrobić."
      },
      {
        "nazwa": "Właściwi kupujący",
        "opis": "Kierujemy ofertę do osób, które szukają mieszkań do remontu, zamiast czekać, aż trafi się ktoś przypadkowy."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy muszę remontować przed sprzedażą?",
        "odpowiedz": "Nie. Często bardziej opłaca się sprzedaż w obecnym stanie, z ceną uwzględniającą koszt remontu."
      },
      {
        "pytanie": "Czy stan mieszkania mocno obniży cenę?",
        "odpowiedz": "Cena uwzględnia koszt doprowadzenia lokalu do dobrego stanu. Uczciwy opis pozwala uniknąć twardych negocjacji po prezentacji."
      },
      {
        "pytanie": "Czy pokazujecie, co można zrobić z mieszkaniem?",
        "odpowiedz": "Tak, w zakresie ustalonym z Tobą: rzut, propozycja układu albo prosta wizualizacja."
      },
      {
        "pytanie": "Mieszkanie jest pełne rzeczy — co z tym?",
        "odpowiedz": "Pomagamy zaplanować opróżnienie lokalu. Puste mieszkanie łatwiej ocenić i sfotografować."
      }
    ],
    "bloki": [
      {
        "blockType": "uwaga",
        "tytul": "Uczciwy opis stanu to przewaga, nie słabość",
        "tresc": "Oferta, która nazywa rzeczy po imieniu — stare instalacje, łazienka do wymiany, okna z lat 90. — przyciąga kupujących szukających właśnie takich mieszkań i odsiewa tych, którzy i tak by zrezygnowali. Mniej prezentacji, ale trafniejszych."
      },
      {
        "blockType": "lista",
        "tytul": "Kto kupuje mieszkania do remontu",
        "wstep": null,
        "punkty": [
          {
            "tresc": "Osoby, które chcą urządzić mieszkanie od zera po swojemu"
          },
          {
            "tresc": "Inwestorzy kupujący pod remont i wynajem"
          },
          {
            "tresc": "Kupujący z ograniczonym budżetem, gotowi na prace etapami"
          }
        ]
      }
    ]
  },
  {
    "adres": "sprzedaz-mieszkania-po-spadku-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – spadkobiercy",
    "fraza": "sprzedaż mieszkania po spadku Białystok",
    "wyroznik": "Kolejność kroków i koordynacja współwłaścicieli; opróżnienie i przygotowanie lokalu; odesłanie kwestii prawnych/podatkowych do specjalistów",
    "gotowa": true,
    "tytul": "Sprzedaż mieszkania po spadku w Białymstoku",
    "wstep": [
      "Sprzedaż odziedziczonego mieszkania łączy formalności, emocje i często kilku współwłaścicieli, którzy mieszkają w różnych miastach. Najwięcej czasu zabiera zwykle nie samo szukanie kupującego, tylko uporządkowanie spraw przed sprzedażą.",
      "Pomagamy ułożyć kolejność kroków i koordynujemy sprzedaż tak, żeby spadkobiercy nie musieli spotykać się przy każdej decyzji. Sprawy prawne i podatkowe zostawiamy notariuszowi i doradcy — mówimy wprost, kiedy trzeba się do nich zwrócić."
    ],
    "proces": [
      {
        "nazwa": "Potwierdzenie dziedziczenia",
        "opis": "Do sprzedaży potrzebne jest stwierdzenie nabycia spadku przez sąd albo akt poświadczenia dziedziczenia u notariusza oraz ujawnienie spadkobierców w księdze wieczystej."
      },
      {
        "nazwa": "Ustalenia między współwłaścicielami",
        "opis": "Przy kilku spadkobiercach na sprzedaż muszą zgodzić się wszyscy. Pomagamy uzgodnić cenę minimalną i sposób podejmowania decyzji."
      },
      {
        "nazwa": "Opróżnienie i przygotowanie lokalu",
        "opis": "Planujemy uporządkowanie mieszkania, często pełnego rzeczy poprzednich lokatorów, i przygotowujemy je do zdjęć."
      },
      {
        "nazwa": "Sprzedaż na odległość",
        "opis": "Część spadkobierców może działać przez pełnomocnika. Ustalamy, które kroki wymagają ich osobistej obecności."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy mogę sprzedać mieszkanie przed formalnym zakończeniem spraw spadkowych?",
        "odpowiedz": "Do przeniesienia własności potrzebne jest potwierdzenie dziedziczenia. Szczegóły Twojej sytuacji warto omówić z notariuszem."
      },
      {
        "pytanie": "Czy od sprzedaży zapłacę podatek?",
        "odpowiedz": "To zależy między innymi od terminu nabycia nieruchomości. Nie udzielamy porad podatkowych — rekomendujemy konsultację z doradcą podatkowym lub notariuszem przed sprzedażą."
      },
      {
        "pytanie": "Jeden ze spadkobierców nie chce sprzedawać. Co wtedy?",
        "odpowiedz": "Bez zgody wszystkich współwłaścicieli nie da się sprzedać całego mieszkania. To kwestia do rozwiązania z prawnikiem, zanim zaczniemy szukać kupującego."
      },
      {
        "pytanie": "Mieszkamy poza Białymstokiem. Czy da się to prowadzić zdalnie?",
        "odpowiedz": "Tak, w dużej części. Prezentacje, kontakt z kupującymi i przygotowanie lokalu bierzemy na siebie."
      }
    ],
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Kolejność kroków przed wystawieniem oferty",
        "wstep": null,
        "punkty": [
          {
            "tresc": "Stwierdzenie nabycia spadku przez sąd albo akt poświadczenia dziedziczenia u notariusza"
          },
          {
            "tresc": "Wpis spadkobierców do księgi wieczystej"
          },
          {
            "tresc": "Uzgodnienie między współwłaścicielami ceny minimalnej i sposobu podejmowania decyzji"
          },
          {
            "tresc": "Ewentualne pełnomocnictwa dla osób, które nie mogą być obecne"
          },
          {
            "tresc": "Opróżnienie i przygotowanie mieszkania do zdjęć"
          }
        ]
      },
      {
        "blockType": "uwaga",
        "tytul": "Podatki omów z doradcą przed sprzedażą",
        "tresc": "Od terminu nabycia nieruchomości może zależeć, czy sprzedaż wiąże się z podatkiem. Nie udzielamy porad podatkowych — warto to sprawdzić u doradcy podatkowego lub notariusza, zanim podpiszesz umowę przedwstępną."
      }
    ]
  },
  {
    "adres": "zamiana-mieszkania-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna – zmiana mieszkania",
    "fraza": "zamiana mieszkania na większe Białystok",
    "wyroznik": "Zsynchronizowanie sprzedaży i zakupu: terminy, finansowanie, ryzyka; łączenie dwóch usług",
    "gotowa": true,
    "tytul": "Zamiana mieszkania na większe w Białymstoku",
    "wstep": [
      "Zamiana mieszkania to dwie transakcje, które muszą się ze sobą zgrać: sprzedaż obecnego lokalu i zakup nowego. Najtrudniejsze jest nie znalezienie kupującego, tylko ułożenie terminów tak, żeby nie zostać bez dachu nad głową albo z dwoma kredytami naraz.",
      "Prowadzimy obie strony jednocześnie. Dzięki temu terminy wydania, zadatki i finansowanie planujemy razem, a nie w dwóch osobnych procesach, które o sobie nie wiedzą."
    ],
    "proces": [
      {
        "nazwa": "Plan finansowania",
        "opis": "Ustalamy, ile przyniesie sprzedaż obecnego mieszkania i czego potrzebujesz od banku. Kwestie kredytowe zostawiamy Twojemu doradcy lub bankowi."
      },
      {
        "nazwa": "Kolejność kroków",
        "opis": "Decydujemy, czy najpierw szukać nowego mieszkania, czy najpierw sprzedawać, i jak zabezpieczyć się na wypadek opóźnień."
      },
      {
        "nazwa": "Sprzedaż obecnego lokalu",
        "opis": "Przygotowanie, oferta, prezentacje i negocjacje, z terminem wydania dopasowanym do zakupu."
      },
      {
        "nazwa": "Zakup nowego mieszkania",
        "opis": "Wyszukanie, weryfikacja i negocjacje po Twojej stronie."
      },
      {
        "nazwa": "Zsynchronizowana finalizacja",
        "opis": "Łączymy terminy aktów notarialnych i wydania lokali tak, żeby przeprowadzka przebiegła bez przerwy."
      }
    ],
    "faq": [
      {
        "pytanie": "Co najpierw — sprzedaż czy zakup?",
        "odpowiedz": "Zależy od Twojej sytuacji finansowej i od rynku. Omawiamy oba scenariusze i ich ryzyka przed rozpoczęciem."
      },
      {
        "pytanie": "Czy mogę mieszkać w starym mieszkaniu do czasu przeprowadzki?",
        "odpowiedz": "Często tak — negocjujemy z kupującym odpowiednio późniejszy termin wydania."
      },
      {
        "pytanie": "Czy pomagacie przy kredycie?",
        "odpowiedz": "Nie doradzamy w sprawach finansowych. Układamy harmonogram tak, żeby zgrał się z procesem kredytowym."
      },
      {
        "pytanie": "Czy to wychodzi drożej niż dwie osobne usługi?",
        "odpowiedz": "Zasady wynagrodzenia ustalamy przed rozpoczęciem współpracy, na piśmie."
      }
    ],
    "bloki": [
      {
        "blockType": "porownanie",
        "tytul": "Najpierw sprzedaż czy najpierw zakup",
        "kolumnaA": "Najpierw sprzedaż",
        "kolumnaB": "Najpierw zakup",
        "wiersze": [
          {
            "cecha": "Finansowanie",
            "a": "wiesz dokładnie, ile masz na zakup",
            "b": "potrzebujesz środków lub kredytu przed sprzedażą"
          },
          {
            "cecha": "Ryzyko",
            "a": "możesz na chwilę zostać bez mieszkania",
            "b": "możesz przez jakiś czas mieć dwa mieszkania"
          },
          {
            "cecha": "Negocjacje przy zakupie",
            "a": "silniejsza pozycja jako kupujący z gotówką",
            "b": "większa swoboda wyboru bez presji czasu"
          },
          {
            "cecha": "Termin wydania",
            "a": "warto wynegocjować późniejszy",
            "b": "mniej istotny"
          }
        ],
        "podsumowanie": "Często da się połączyć zalety obu wariantów, odpowiednio układając terminy aktów i wydania lokali."
      }
    ]
  },
  {
    "adres": "kupno-domu-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna – kupujący dom",
    "fraza": "kupno domu Białystok",
    "wyroznik": "Reprezentowanie kupującego domu: kryteria, weryfikacja stanu i dokumentów, negocjacje",
    "gotowa": true,
    "tytul": "Kupno domu w Białymstoku z pomocą przy wyborze",
    "wstep": [
      "Kupno domu to zakup, przy którym łatwo przeoczyć rzeczy, które wyjdą dopiero po pierwszej zimie: zawilgocone ściany, drogie ogrzewanie, problem z dojazdem albo plan zagospodarowania, który zmieni sąsiedztwo.",
      "Działamy po Twojej stronie. Pomagamy wyszukać domy spełniające Twoje kryteria, sprawdzić je przed decyzją i wynegocjować warunki, które uwzględniają realny stan budynku."
    ],
    "proces": [
      {
        "nazwa": "Kryteria",
        "opis": "Budżet łącznie z ewentualnym remontem, lokalizacja, dojazd do pracy i szkół, wielkość działki i to, co jest nie do przyjęcia."
      },
      {
        "nazwa": "Selekcja ofert",
        "opis": "Przeglądamy dostępne domy i odrzucamy te, które odpadłyby na pierwszym oglądaniu."
      },
      {
        "nazwa": "Oględziny",
        "opis": "Na miejscu patrzymy na dach, elewację, instalacje, ogrzewanie, wilgoć i otoczenie. Przy wątpliwościach rekomendujemy przegląd przez specjalistę budowlanego."
      },
      {
        "nazwa": "Weryfikacja dokumentów",
        "opis": "Księga wieczysta, dostęp do drogi, plan miejscowy, pozwolenia i odbiory."
      },
      {
        "nazwa": "Negocjacje i zakup",
        "opis": "Argumentujemy stanem technicznym i kosztem niezbędnych prac, potem prowadzimy przez umowę i akt notarialny."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy sprawdzacie stan techniczny domu?",
        "odpowiedz": "Oceniamy to, co widać przy oględzinach. Przy poważniejszych wątpliwościach rekomendujemy przegląd przez uprawnionego specjalistę."
      },
      {
        "pytanie": "Czy szukacie też domów poza granicami miasta?",
        "odpowiedz": "Tak, w okolicach Białegostoku i w województwie podlaskim, zgodnie z Twoimi kryteriami."
      },
      {
        "pytanie": "Na co najczęściej nie zwraca się uwagi?",
        "odpowiedz": "Koszty ogrzewania, plan zagospodarowania sąsiednich działek i dojazd w godzinach szczytu."
      },
      {
        "pytanie": "Czym to się różni od mieszkania pod klucz?",
        "odpowiedz": "Tu kończymy na zakupie. W mieszkaniu pod klucz prowadzimy dalej projekt i wykończenie."
      }
    ],
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Na co uważać przy oglądaniu domu",
        "wstep": "Przy poważniejszych wątpliwościach rekomendujemy przegląd przez uprawnionego specjalistę budowlanego przed zakupem.",
        "punkty": [
          {
            "tresc": "Zawilgocenia w piwnicy i przy fundamentach"
          },
          {
            "tresc": "Stan dachu i rynien — najlepiej obejrzeć po deszczu"
          },
          {
            "tresc": "Wiek i rodzaj pieca oraz rzeczywiste koszty ogrzewania"
          },
          {
            "tresc": "Pęknięcia ścian i nadproży"
          },
          {
            "tresc": "Zgodność budynku z dokumentacją i ewentualne samowolne rozbudowy"
          },
          {
            "tresc": "Plan miejscowy dla sąsiednich działek"
          }
        ]
      }
    ]
  },
  {
    "adres": "mieszkanie-z-rynku-wtornego-pod-klucz-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "mieszkanie-pod-klucz",
    "intencja": "transakcyjna",
    "fraza": "mieszkanie z rynku wtórnego z remontem Białystok",
    "wyroznik": "Rynek wtórny: ocena potencjału przed zakupem, negocjacje z uwzględnieniem kosztów remontu, projekt i wykonanie",
    "gotowa": true,
    "tytul": "Mieszkanie z rynku wtórnego pod klucz w Białymstoku",
    "wstep": [
      "Mieszkanie z rynku wtórnego często ma lepszą lokalizację i niższą cenę za metr niż nowe budownictwo, ale wymaga remontu, którego koszt trudno oszacować laikowi. Łatwo wtedy kupić tanio, a potem wydać na prace więcej, niż wynosiła różnica w cenie.",
      "Dlatego koszt remontu oceniamy przed zakupem, a nie po nim. Znajdujemy mieszkanie, sprawdzamy jego potencjał, negocjujemy cenę z uwzględnieniem prac i prowadzimy remont aż do przekazania kluczy."
    ],
    "proces": [
      {
        "nazwa": "Budżet całkowity",
        "opis": "Jedna kwota na zakup i remont. To ona wyznacza, jakich mieszkań szukamy."
      },
      {
        "nazwa": "Wyszukanie i ocena potencjału",
        "opis": "Oglądamy mieszkania pod kątem układu, instalacji i możliwych zmian. Dla każdego szacujemy koszt prac."
      },
      {
        "nazwa": "Negocjacje z argumentami",
        "opis": "Koszt niezbędnego remontu to konkretny argument w rozmowie o cenie."
      },
      {
        "nazwa": "Projekt i kosztorys",
        "opis": "Po zakupie projektujemy wnętrze i przygotowujemy kosztorys. Widzisz ceny, zanim ruszą prace."
      },
      {
        "nazwa": "Remont i przekazanie",
        "opis": "Koordynujemy prace i odbieramy je, a potem oddajemy mieszkanie gotowe do zamieszkania."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy remont w bloku z wielkiej płyty ma ograniczenia?",
        "odpowiedz": "Tak, na przykład przy ścianach konstrukcyjnych. Sprawdzamy to przed zakupem, jeśli planujesz zmianę układu."
      },
      {
        "pytanie": "Czy wymiana instalacji jest konieczna?",
        "odpowiedz": "Zależy od ich stanu. W starszych mieszkaniach często się opłaca, bo robi się ją raz, przed wykończeniem."
      },
      {
        "pytanie": "Kiedy poznam koszt remontu?",
        "odpowiedz": "Szacunek przy wyborze mieszkania, szczegółowy kosztorys po projekcie."
      },
      {
        "pytanie": "Czy mogę mieć własnego wykonawcę?",
        "odpowiedz": "Możemy się tak umówić — zakres naszej pracy ustalamy indywidualnie."
      }
    ],
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Co sprawdzamy, zanim zarekomendujemy zakup",
        "wstep": null,
        "punkty": [
          {
            "tresc": "Stan instalacji elektrycznej i wodno-kanalizacyjnej"
          },
          {
            "tresc": "Które ściany są konstrukcyjne i czy planowany układ jest możliwy"
          },
          {
            "tresc": "Stan okien, pionów i wentylacji"
          },
          {
            "tresc": "Planowane remonty budynku i fundusz remontowy"
          },
          {
            "tresc": "Realny koszt prac w porównaniu z różnicą w cenie"
          }
        ]
      }
    ]
  },
  {
    "adres": "wykonczenie-mieszkania-od-dewelopera-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "mieszkanie-pod-klucz",
    "intencja": "usługowa",
    "fraza": "wykończenie mieszkania od dewelopera Białystok",
    "wyroznik": "Rynek pierwotny: odbiór, projekt, materiały, nadzór, wyposażenie w uzgodnionym zakresie",
    "gotowa": true,
    "tytul": "Wykończenie mieszkania od dewelopera w Białymstoku",
    "wstep": [
      "Mieszkanie w stanie deweloperskim to przewidywalny zakres prac, ale nadal sporo decyzji: układ kuchni, materiały, oświetlenie, zabudowy. Do tego dochodzi odbiór techniczny, przy którym łatwo przegapić usterki, a później trudno je wyegzekwować.",
      "Pomagamy od odbioru mieszkania, przez projekt i wybór materiałów, po wykonanie i przekazanie gotowego lokalu."
    ],
    "proces": [
      {
        "nazwa": "Odbiór od dewelopera",
        "opis": "Sprawdzamy jakość wykonania i pomagamy spisać usterki w protokole odbioru, żeby deweloper je usunął."
      },
      {
        "nazwa": "Projekt",
        "opis": "Układ, materiały, oświetlenie i zabudowy dopasowane do tego, jak chcesz mieszkać, z kosztorysem."
      },
      {
        "nazwa": "Wybór materiałów",
        "opis": "Dobieramy je w projekcie i przedstawiamy do akceptacji. Możesz wskazać własne rozwiązania."
      },
      {
        "nazwa": "Wykonanie i nadzór",
        "opis": "Koordynujemy ekipy i pilnujemy harmonogramu. Każda zmiana w trakcie jest wyceniana przed wykonaniem."
      },
      {
        "nazwa": "Przekazanie",
        "opis": "Oddajemy mieszkanie sprzątnięte i gotowe do wprowadzenia."
      }
    ],
    "faq": [
      {
        "pytanie": "Kiedy zacząć projekt?",
        "odpowiedz": "Najlepiej przed odbiorem mieszkania, żeby prace mogły ruszyć od razu po przekazaniu kluczy."
      },
      {
        "pytanie": "Czy pomagacie przy odbiorze technicznym?",
        "odpowiedz": "Tak, sprawdzamy lokal i pomagamy spisać usterki w protokole."
      },
      {
        "pytanie": "Ile trwa wykończenie?",
        "odpowiedz": "Harmonogram ustalamy po projekcie. Zależy od zakresu i dostępności materiałów."
      },
      {
        "pytanie": "Czy muszę wybierać każdy detal?",
        "odpowiedz": "Nie. Przygotowujemy spójną propozycję, a Ty decydujesz tylko tam, gdzie chcesz."
      }
    ],
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Co sprawdzić przy odbiorze od dewelopera",
        "wstep": "Usterki wpisane do protokołu deweloper powinien usunąć. Te przeoczone trudniej potem wyegzekwować.",
        "punkty": [
          {
            "tresc": "Równość ścian, posadzek i kąty w narożnikach"
          },
          {
            "tresc": "Szczelność i regulację okien oraz drzwi balkonowych"
          },
          {
            "tresc": "Rozmieszczenie gniazd i punktów świetlnych zgodne z projektem"
          },
          {
            "tresc": "Metraż zgodny z umową"
          },
          {
            "tresc": "Działanie instalacji i wentylacji"
          }
        ]
      },
      {
        "blockType": "uwaga",
        "tytul": "Projekt przed kluczami",
        "tresc": "Najwięcej czasu oszczędza projekt przygotowany jeszcze przed odbiorem. Wtedy prace mogą ruszyć zaraz po przekazaniu mieszkania, a materiały są zamówione z wyprzedzeniem."
      }
    ]
  },
  {
    "adres": "mieszkanie-inwestycyjne-bialystok",
    "miejscowosc": "Białystok",
    "usluga": "inwestycje",
    "intencja": "transakcyjna – inwestor",
    "fraza": "mieszkanie pod wynajem Białystok",
    "wyroznik": "Kryteria wyboru lokalu pod wynajem, przygotowanie do najmu; bez obietnic rentowności",
    "gotowa": true,
    "tytul": "Mieszkanie inwestycyjne pod wynajem w Białymstoku",
    "wstep": [
      "Mieszkanie pod wynajem wybiera się inaczej niż mieszkanie dla siebie. Liczą się inne rzeczy: kto będzie najemcą, jak szybko lokal znajdzie lokatora, ile kosztuje jego utrzymanie i jak wytrzymałe są materiały.",
      "Pomagamy znaleźć i przygotować mieszkanie pod wynajem. Nie obiecujemy rentowności ani czasu zwrotu, bo zależą od rynku — pokazujemy za to założenia, na których opierasz decyzję."
    ],
    "proces": [
      {
        "nazwa": "Cel i budżet",
        "opis": "Ustalamy, czy celem jest stały dochód z najmu, czy późniejsza odsprzedaż, oraz ile kapitału angażujesz."
      },
      {
        "nazwa": "Profil najemcy",
        "opis": "Studenci, osoby pracujące, rodziny — każda grupa szuka czegoś innego. Od tego zależy lokalizacja i układ."
      },
      {
        "nazwa": "Wyszukanie i kalkulacja",
        "opis": "Dla wybranych mieszkań przygotowujemy kalkulację z jawnymi założeniami: cena, koszt prac, koszty utrzymania."
      },
      {
        "nazwa": "Przygotowanie do najmu",
        "opis": "Funkcjonalny układ i trwałe materiały, bez rozwiązań, które szybko się zniszczą."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy gwarantujecie zysk z najmu?",
        "odpowiedz": "Nie. Pokazujemy założenia kalkulacji, ale wynik zależy od rynku najmu, na który nikt nie ma wpływu."
      },
      {
        "pytanie": "Jakie mieszkanie najlepiej się wynajmuje?",
        "odpowiedz": "To zależy od grupy najemców. Omawiamy to przed wyszukiwaniem, żeby nie kupić lokalu dla nikogo."
      },
      {
        "pytanie": "Czy zajmujecie się obsługą najmu?",
        "odpowiedz": "Zakres po zakupie ustalamy indywidualnie. Powiemy wprost, co możemy wziąć na siebie."
      },
      {
        "pytanie": "Nowe czy z rynku wtórnego?",
        "odpowiedz": "Oba mają sens w innych sytuacjach. Porównujemy je dla Twojego budżetu i celu."
      }
    ],
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Założenia, które warto policzyć przed zakupem",
        "wstep": "Pokazujemy te założenia jawnie. To podstawa decyzji, a nie obietnica wyniku.",
        "punkty": [
          {
            "tresc": "Cena zakupu wraz z kosztami transakcji"
          },
          {
            "tresc": "Koszt przygotowania do najmu i wyposażenia"
          },
          {
            "tresc": "Opłaty stałe: czynsz administracyjny, media w okresach bez najemcy"
          },
          {
            "tresc": "Realny czynsz najmu dla tego typu lokalu"
          },
          {
            "tresc": "Okresy bez najemcy i koszty napraw"
          }
        ]
      }
    ]
  },
  {
    "adres": "sprzedaz-domu-wasilkow",
    "miejscowosc": "Wasilków",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – właściciel domu",
    "fraza": "sprzedaż domu Wasilków",
    "wyroznik": "Dom pod Białymstokiem: do kogo kierować ofertę (osoby z miasta szukające domu), prezentacja dojazdu i otoczenia – bez niepotwierdzonych danych",
    "tytul": "Sprzedaż domu w Wasilkowie",
    "wstep": [
      "Domy pod Białymstokiem kupują najczęściej osoby, które przeprowadzają się z miasta. Patrzą na dojazd, otoczenie i koszty utrzymania, a te rzeczy trzeba pokazać w ofercie wprost, bo inaczej pojawiają się na pierwszej prezentacji jako wątpliwości.",
      "Prowadzimy sprzedaż domów w Wasilkowie i okolicznych miejscowościach — od przygotowania dokumentów działki po negocjacje i finalizację."
    ],
    "proces": [
      {
        "nazwa": "Dokumenty działki i budynku",
        "opis": "Księga wieczysta, granice, dostęp do drogi, media, pozwolenia i odbiory. Braki w papierach potrafią zatrzymać transakcję na tygodnie."
      },
      {
        "nazwa": "Ocena stanu technicznego",
        "opis": "Dach, elewacja, instalacje, ogrzewanie i koszty utrzymania. Kupujący pytają o rachunki, więc przygotowujemy je zawczasu."
      },
      {
        "nazwa": "Przygotowanie posesji",
        "opis": "Porządek na działce i wokół domu, uprzątnięcie garażu, drobne naprawy. Wrażenie z podjazdu decyduje o reszcie wizyty."
      },
      {
        "nazwa": "Zdjęcia i sezon",
        "opis": "Dom z ogrodem prezentuje się różnie zależnie od pory roku. Planujemy zdjęcia tak, żeby pokazać posesję w możliwie dobrym świetle."
      },
      {
        "nazwa": "Prezentacje i negocjacje",
        "opis": "Prowadzimy pokazy, zbieramy uwagi i negocjujemy warunki, w tym termin wydania."
      }
    ],
    "faq": [
      {
        "pytanie": "Czy sprzedaż domu trwa dłużej niż mieszkania?",
        "odpowiedz": "Zwykle tak, bo kupujących jest mniej i decyzja jest droższa. Dlatego tym bardziej liczy się cena wyjściowa i kompletne dokumenty."
      },
      {
        "pytanie": "Czy trzeba mieć świadectwo energetyczne?",
        "odpowiedz": "Przy sprzedaży jest wymagane. Podpowiemy, jak je uzyskać, zanim pojawi się pierwszy kupujący z kredytem."
      },
      {
        "pytanie": "Co z niedokończonymi pracami?",
        "odpowiedz": "Opisujemy stan uczciwie. Część kupujących szuka domów do wykończenia, bo chce zrobić je po swojemu."
      },
      {
        "pytanie": "Czy pokazujecie dom pod moją nieobecność?",
        "odpowiedz": "Tak, po ustaleniu zasad dostępu i zabezpieczenia posesji."
      }
    ],
    "gotowa": true,
    "bloki": [
      {
        "blockType": "lista",
        "tytul": "Na co patrzą kupujący z miasta",
        "wstep": "Te pytania padają niemal zawsze — lepiej odpowiedzieć na nie w ofercie niż na pierwszej prezentacji.",
        "punkty": [
          {
            "tresc": "Czas dojazdu do Białegostoku w godzinach szczytu"
          },
          {
            "tresc": "Dostęp do mediów i sposób ogrzewania"
          },
          {
            "tresc": "Rachunki za ogrzewanie z ostatniego sezonu"
          },
          {
            "tresc": "Utwardzony dojazd i odśnieżanie zimą"
          },
          {
            "tresc": "Szkoły, przedszkola i sklepy w okolicy"
          }
        ]
      }
    ]
  },
  {
    "adres": "kupno-domu-wasilkow",
    "miejscowosc": "Wasilków",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna – kupujący dom",
    "fraza": "dom Wasilków kupno",
    "wyroznik": "Kupujący przenoszący się z miasta: co sprawdzić (dojazd, media, plan miejscowy) i jak wygląda wsparcie",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-choroszcz",
    "miejscowosc": "Choroszcz",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu Choroszcz",
    "wyroznik": "Przygotowanie domu do sprzedaży: porządek na działce, drobne naprawy, dokumentacja techniczna",
    "gotowa": false
  },
  {
    "adres": "kupno-mieszkania-choroszcz",
    "miejscowosc": "Choroszcz",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "mieszkanie Choroszcz kupno",
    "wyroznik": "Mieszkanie poza miastem: porównanie z ofertami w Białymstoku, weryfikacja, negocjacje",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-suprasl",
    "miejscowosc": "Supraśl",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu Supraśl",
    "wyroznik": "Dom o charakterze rekreacyjnym lub całorocznym – jak to jasno opisać w ofercie; zdjęcia i sezon",
    "gotowa": false
  },
  {
    "adres": "kupno-mieszkania-zabludow",
    "miejscowosc": "Zabłudów",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "mieszkanie Zabłudów",
    "wyroznik": "Kupno mieszkania w mniejszej miejscowości: selekcja ofert, stan techniczny budynku, negocjacje",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-lapy",
    "miejscowosc": "Łapy",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Łapy",
    "wyroznik": "Sprzedaż mieszkania w starszym bloku: co poprawić tanio, jak pokazać lokal na zdjęciach",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-juchnowiec-koscielny",
    "miejscowosc": "gm. Juchnowiec Kościelny",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu gmina Juchnowiec Kościelny",
    "wyroznik": "Dom w nowszej zabudowie podmiejskiej: stan deweloperski vs. wykończony – przygotowanie oferty",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-dobrzyniewo-duze",
    "miejscowosc": "gm. Dobrzyniewo Duże",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu Dobrzyniewo Duże",
    "wyroznik": "Dom wymagający odświeżenia: warianty prac vs. sprzedaż w obecnym stanie",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-czarna-bialostocka",
    "miejscowosc": "Czarna Białostocka",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Czarna Białostocka",
    "wyroznik": "Dotarcie do kupujących z Białegostoku, promocja i prezentacje, negocjacje",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-suwalki",
    "miejscowosc": "Suwałki",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Suwałki",
    "wyroznik": "Sprzedaż prowadzona z Białegostoku: organizacja prezentacji i kontakt – opisać dopiero po potwierdzeniu modelu obsługi",
    "gotowa": false
  },
  {
    "adres": "kupno-mieszkania-suwalki",
    "miejscowosc": "Suwałki",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "pośrednik kupno mieszkania Suwałki",
    "wyroznik": "Kupujący spoza miasta: selekcja ofert na odległość, wstępne oględziny, weryfikacja",
    "gotowa": false
  },
  {
    "adres": "mieszkanie-pod-klucz-suwalki",
    "miejscowosc": "Suwałki",
    "usluga": "mieszkanie-pod-klucz",
    "intencja": "transakcyjna",
    "fraza": "mieszkanie pod klucz Suwałki",
    "wyroznik": "Koordynacja projektu i wykończenia poza Białymstokiem – tylko jeśli firma realnie to realizuje",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-lomza",
    "miejscowosc": "Łomża",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Łomża",
    "wyroznik": "Strategia ceny ofertowej i przygotowanie; zasięg promocji poza miastem",
    "gotowa": false
  },
  {
    "adres": "kupno-mieszkania-lomza",
    "miejscowosc": "Łomża",
    "usluga": "kupno-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "kupno mieszkania Łomża",
    "wyroznik": "Reprezentowanie kupującego: potrzeby i budżet, selekcja, negocjacje",
    "gotowa": false
  },
  {
    "adres": "mieszkanie-pod-klucz-lomza",
    "miejscowosc": "Łomża",
    "usluga": "mieszkanie-pod-klucz",
    "intencja": "transakcyjna",
    "fraza": "mieszkanie pod klucz Łomża",
    "wyroznik": "Rynek wtórny vs. pierwotny w mniejszym mieście – proces i zakres",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-augustow",
    "miejscowosc": "Augustów",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Augustów",
    "wyroznik": "Lokal kupowany na własne potrzeby lub pod wynajem – dwa profile kupujących w opisie oferty",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-augustow",
    "miejscowosc": "Augustów",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu Augustów",
    "wyroznik": "Dom: sezon prezentacji, zdjęcia otoczenia, dokumenty działki",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-bielsk-podlaski",
    "miejscowosc": "Bielsk Podlaski",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Bielsk Podlaski",
    "wyroznik": "Właściciel mieszkający poza miastem: co można załatwić na odległość",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-hajnowka",
    "miejscowosc": "Hajnówka",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu Hajnówka",
    "wyroznik": "Dom wymagający modernizacji: rzetelny opis stanu i warianty",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-sokolka",
    "miejscowosc": "Sokółka",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Sokółka",
    "wyroznik": "Mieszkanie w starszym budynku: przygotowanie, zdjęcia, opis",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-zambrow",
    "miejscowosc": "Zambrów",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Zambrów",
    "wyroznik": "Przeprowadzka do Białegostoku: sprzedaż połączona z zakupem",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-grajewo",
    "miejscowosc": "Grajewo",
    "usluga": "zwiekszamy-wartosc",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Grajewo",
    "wyroznik": "Mieszkanie do odświeżenia: decyzja o zakresie prac przed sprzedażą",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-siemiatycze",
    "miejscowosc": "Siemiatycze",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Siemiatycze",
    "wyroznik": "Ustalanie ceny ofertowej przy niewielkiej liczbie porównywalnych ofert – metoda, bez danych rynkowych",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-domu-monki",
    "miejscowosc": "Mońki",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż domu Mońki",
    "wyroznik": "Dom z działką: dokumenty, stan techniczny, prezentacje",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-wysokie-mazowieckie",
    "miejscowosc": "Wysokie Mazowieckie",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Wysokie Mazowieckie",
    "wyroznik": "Pierwsza sprzedaż: przebieg krok po kroku i potrzebne dokumenty",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-mieszkania-kolno",
    "miejscowosc": "Kolno",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna",
    "fraza": "sprzedaż mieszkania Kolno",
    "wyroznik": "Przygotowanie oferty do prezentacji online: zdjęcia, opis, rzut",
    "gotowa": false
  },
  {
    "adres": "sprzedaz-nieruchomosci-podlaskie",
    "miejscowosc": "woj. podlaskie",
    "usluga": "sprzedaz-nieruchomosci",
    "intencja": "transakcyjna – region",
    "fraza": "sprzedaż nieruchomości podlaskie",
    "wyroznik": "Jak wygląda obsługa poza Białymstokiem; linki do opublikowanych stron lokalnych",
    "gotowa": false
  }
] as const;

# Techniczne SEO — checklista wdrożeniowa

Data: 2026-09-18. Punkt odniesienia: dokumentacja Google Search Central. Lista jest do odhaczania w trakcie wdrożenia i przy odbiorze (`QA.md`).

## 1. Indeksowanie i dostęp robota
- [ ] Jedna wersja kanoniczna: `https://grupa-nieruchomosci.pl` (bez `www`), przekierowania 301 z pozostałych wariantów, w tym z drugiej domeny, jeśli firma ją posiada.
- [ ] Spójne URL: małe litery, myślniki, bez polskich znaków, bez końcowego ukośnika (jedna konwencja, druga przekierowywana).
- [ ] `robots.txt` bez blokad dla CSS, JS i obrazów — Google musi móc wyrenderować stronę tak jak użytkownik.
- [ ] Podgląd i środowisko testowe: `noindex` + zabezpieczenie hasłem. `robots.txt` nie jest zabezpieczeniem danych.
- [ ] `sitemap.xml` wyłącznie z opublikowanymi, indeksowalnymi adresami (bez szkiców, bez `noindex`, bez przekierowań); zgłoszona w Search Console.
- [ ] Poprawne statusy HTTP: 200 dla treści, 301 dla przeniesień, 404 dla nieistniejących, **nigdy „miękkiego 404”** (strona z komunikatem zwracająca 200).
- [ ] Paginacja i filtry (realizacje, poradniki) bez generowania nieskończonej liczby adresów; parametry porządkujące z `noindex` albo niedostępne dla robota.

## 2. Renderowanie
- [ ] Cała treść, nawigacja, metadane i linki są w **surowym HTML**, bez potrzeby uruchomienia JavaScriptu. Przy statycznym buildzie to spełnione z definicji — weryfikujemy `curl` i podglądem „wyświetl źródło”.
- [ ] Linki jako `<a href="…">` z prawdziwym adresem. Żadnych `onClick` na `div` czy `span` — robot ich nie przejdzie, a klawiatura pomija.
- [ ] Zero zależności treści od ciasteczek, zgód czy interakcji.

## 3. Metadane i struktura strony
- [ ] Unikalny `title` (ok. 50–60 znaków) i `description` (ok. 140–160) dla **każdej** z 50 stron; pola redagowalne w CMS z podglądem długości.
- [ ] Dokładnie jeden `h1` na stronę, dalej `h2`/`h3` bez przeskakiwania poziomów.
- [ ] `canonical` na każdej stronie wskazujący sam siebie; strony lokalne **nie** kanonizują się do stron usług (inaczej wypadną z indeksu).
- [ ] `lang="pl"`, `og:title`, `og:description`, `og:image` (1200×630), `twitter:card`.
- [ ] Breadcrumbs w HTML + `BreadcrumbList` w danych strukturalnych.

## 4. Dane strukturalne
- [ ] `RealEstateAgent` (podtyp `LocalBusiness`) z **potwierdzonymi** danymi: nazwa, adres biura, telefon, e-mail, `areaServed` (Białystok + podlaskie), godziny pracy, `sameAs` do wizytówki i profili.
- [ ] `FAQPage` tylko tam, gdzie FAQ faktycznie jest widoczne dla użytkownika. Nie obiecujemy rozszerzonych wyników — Google mocno ograniczył ich wyświetlanie.
- [ ] `Article` na poradnikach, `BreadcrumbList` wszędzie.
- [ ] **Bez** `AggregateRating` i opinii, dopóki nie ma prawdziwych, zbieranych zgodnie z wytycznymi. Wymyślone oceny to prosta droga do ręcznego działania.
- [ ] Walidacja testem wyników z elementami rozszerzonymi przed publikacją.

## 5. Obrazy
- [ ] `width` i `height` (albo `aspect-ratio`) na każdym obrazie — bez tego skacze układ i rośnie CLS.
- [ ] Zdjęcie główne ładowane priorytetowo (`fetchpriority="high"`, bez `lazy`), reszta `loading="lazy"`.
- [ ] AVIF/WebP z `srcset` i `sizes`; nazwy plików opisowe; `alt` opisujący zawartość, bez upychania fraz.

## 6. Core Web Vitals
Progi z dokumentacji Google: **LCP ≤ 2,5 s**, **INP < 200 ms**, **CLS < 0,1**. Liczy się 75. percentyl danych od realnych użytkowników Chrome (CrUX), nie jednorazowy wynik z Lighthouse — ten służy do debugowania.
- [ ] Minimum JS na stronach publicznych; brak bibliotek ładowanych „na zapas”.
- [ ] Fonty lokalnie, `font-display: swap`, ograniczona liczba odmian, `preload` dla kroju z pierwszego ekranu.
- [x] Baner zgód wdrożony bez zewnętrznego CMP: ok. 950 bajtów JavaScriptu razem z przełącznikiem zakładek, brak żądań sieciowych, brak skoku układu (baner jest pozycjonowany `fixed` nad treścią).
- [ ] Skrypty analityczne uruchamiane dopiero po zdarzeniu `zgoda-statystyki` wysyłanym przez baner — do podpięcia, gdy będą identyfikatory GA4/GTM.
- [ ] Zarezerwowane miejsce na wszystko, co dochodzi później (baner zgód, obrazy, mapy).
- [ ] Po starcie: raport Core Web Vitals w Search Console jako źródło prawdy.

**Uwaga o oczekiwaniach.** Dokumentacja Google mówi wprost, że dobre wyniki w raportach nie gwarantują wysokich pozycji, a poza Core Web Vitals pozostałe aspekty page experience nie podnoszą bezpośrednio pozycji — poprawiają doświadczenie, które systemy rankingowe nagradzają pośrednio. Technika ustawia nas w grze; o wyniku decyduje trafność i jakość treści. Krążą też publikacje o zaostrzeniu progu LCP do 2,0 s przy aktualizacji z marca 2026 — w dokumentacji Google nadal figuruje 2,5 s, więc traktujemy to jako niepotwierdzone i celujemy poniżej 2,0 s z zapasem.

## 6a. Stan podstron lokalizacyjnych (2026-09-20)
- Szablon i routing **wdrożone**: `/[slug]` obsługuje zarówno usługi, jak i podstrony lokalizacyjne, z okruchami, FAQ (również w danych strukturalnych), linkiem do usługi i formularzem z nazwą lokalizacji w zgłoszeniu.
- **40 propozycji siedzi w CMS jako wersje robocze.** Publiczne API ich nie zwraca, więc nie ma ich w buildzie ani w sitemapie — sprawdzone: po opublikowaniu jednej strona pojawia się w buildzie i w sitemapie, po cofnięciu do szkicu znika.
- **Treść napisana dla 3 stron** (sprzedaż mieszkania Białystok, home staging Białystok, sprzedaż domu Wasilków). Pozostałe 37 mają w CMS wpisane: frazę, intencję i ustalony wyróżnik treści, plus wyraźne `[DO NAPISANIA]`.
- Każda podstrona ma własny `title`, `description`, jeden `h1` i własne FAQ. Kanoniczny adres wskazuje sam siebie — nie kanonizujemy ich do stron usługowych, bo to wyrzuciłoby je z indeksu.

## 7. Treść i architektura (to, co waży najwięcej)
- [ ] Każda z 40 stron lokalnych ma własną, merytoryczną treść i odpowiada na inną intencję. Strony bliźniacze różniące się nazwą miejscowości są kandydatem do zignorowania przez Google.
- [ ] Brak konkurowania dwóch adresów o tę samą frazę (pilnowane w `SEO_MAP.csv`).
- [ ] Linkowanie wewnętrzne: usługa → strona lokalna → realizacja → kontakt, z opisowymi anchorami.
- [ ] Publikujemy stronę lokalną dopiero po akceptacji treści przez klienta. Szkice nie trafiają do sitemapy.

## 8. Poza kodem (największy realny wpływ na Białystok)
- [ ] Wizytówka Google z prawdziwym adresem, kategorią, godzinami i zdjęciami.
- [ ] Spójne NAP (nazwa, adres, telefon) na stronie, w wizytówce i w katalogach.
- [ ] Prawdziwe realizacje ze zdjęciami przed/po.
- [ ] Zbieranie opinii zgodnie z wytycznymi Google.

## 9. Monitoring po starcie
- [ ] Search Console: pokrycie indeksu, skuteczność, Core Web Vitals, elementy rozszerzone.
- [ ] Kontrola po pierwszym tygodniu: ile z 50 stron zostało zaindeksowanych i czy nie ma „Strona wykryta, obecnie niezindeksowana”.
- [ ] Przegląd zapytań po miesiącu → korekta treści stron lokalnych i pomysły na poradniki.

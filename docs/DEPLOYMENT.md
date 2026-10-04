# Wdrożenie i infrastruktura

Stan na 2026-09-18 (po decyzjach z tego dnia). Zapisuje decyzje Dawida oraz to, co sprawdziłem w źródłach. **Nie zakładam kont i nie kupuję usług.**

## Decyzje klienta/wykonawcy (przyjęte)

| Element | Decyzja |
|---|---|
| Domena | `grupa-nieruchomosci.pl` |
| Repozytorium | GitHub |
| Hosting publicznej strony | Cloudflare |
| Panel administracyjny | Payload (własny panel, polskie etykiety) |
| Poczta wychodząca z formularzy | Resend |
| Uruchomienie Payloada | **Render (plan darmowy)** + baza **Neon Postgres (plan darmowy)** + media w **R2** — decyzja: bez płatnych planów |
| Kalkulator wyceny | **poza zakresem — nie implementujemy** |
| Bezpłatna wycena | tak, komunikujemy na stronie |
| Umówienie spotkania | przez formularz: preferowany termin i forma, potwierdzenie telefoniczne. Kalendarz ze slotami — dopiero w kolejnym etapie |

## Dane firmy (źródło: KRS/rejestry, 2026-09-18 — do potwierdzenia przez klienta)

- Nazwa: **Grupa Nieruchomości sp. z o.o.**
- Siedziba: ul. Nowogrodzka 64/43, 02-014 Warszawa
- NIP 5223200075 · REGON 388580956 · KRS 0000891641
- PKD wiodące: pośrednictwo w obrocie nieruchomościami
- Kontakt: kontakt@grupa-nieruchomosci.pl, +48 608 642 999
- Biuro w Białymstoku: ul. Piękna 5, lok. 12P, 15-282 Białystok (adres wizytówki Zboralscy Group — do potwierdzenia, czy podajemy go jako biuro Grupy Nieruchomości)

**Uwaga do SEO i danych strukturalnych:** siedziba jest w Warszawie, a obszar obsługi to Białystok i podlaskie. Bez potwierdzonego adresu w Białymstoku używamy schema `RealEstateAgent`/`Organization` z adresem rejestrowym i `areaServed` = Białystok + województwo podlaskie. Po podaniu adresu w Białymstoku możemy użyć `RealEstateAgent` z tym adresem jako miejscem obsługi oraz adresem rejestrowym spółki jako danymi podmiotu. Jeśli adres należy do partnera i nie jest naszym biurem — nie publikujemy go jako własnego. Wizytówka Google wymaga adresu lub obszaru obsługi — do ustalenia osobno.

## Cloudflare — co się da, a co nie

Sprawdzone w dokumentacji i materiałach Payload/Cloudflare:

- **Publiczna strona (Astro)** działa na Cloudflare bez przeszkód — statycznie i w trybie na żądanie (adapter Cloudflare).
- **Payload nie jest stroną statyczną.** To aplikacja Next.js. Oficjalna ścieżka na Cloudflare to **Workers + D1 (SQLite) + R2 (pliki)** przez adapter OpenNext, a nie Pages. Szablon `with-cloudflare-d1` wymaga **płatnego planu Workers** (limit rozmiaru bundla), GraphQL w tym środowisku nie jest w pełni wspierany (REST wystarczy do naszych potrzeb).
- **To odstępstwo od briefu**, który zakładał PostgreSQL. D1 to SQLite. Dla serwisu treściowego tej wielkości jest wystarczające, ale trzeba to świadomie zaakceptować (mniej dojrzały adapter niż Postgres, inne narzędzia do kopii).

### Warianty (wybrany: **A**, decyzja z 2026-09-18)

**A. Wszystko na Cloudflare — WYBRANY** — Astro na Cloudflare + Payload jako osobny Worker (`admin.grupa-nieruchomosci.pl` lub `cms.…`) + D1 + R2.
- Plusy: jeden dostawca, jeden rachunek, DNS/CDN/WAF w tym samym miejscu, najniższy stały koszt.
- Minusy: D1 zamiast Postgresa, płatny plan Workers, kopie bazy przez eksport D1 (do zautomatyzowania).

**B. (odrzucony) Astro na Cloudflare + Payload na Postgresie** (Neon/Supabase lub VPS, media w R2/S3).
- Plusy: zgodne z pierwotnym planem, dojrzały adapter Postgres, prostsze kopie.
- Minusy: drugi dostawca, wyższy koszt i więcej administracji.

**C. (odrzucony) Wszystko na VPS w Dockerze** (Astro + Payload + Postgres), Cloudflare tylko DNS/CDN.
- Plusy: pełna kontrola, brak limitów runtime.
- Minusy: najwięcej administracji po stronie utrzymania.

### Cache i publikacja treści
Strony z treścią CMS renderowane na żądanie z krótkim cache na brzegu; hook `afterChange` w Payload wywołuje endpoint czyszczący cache (sekret po stronie serwera). Efekt: zmiana w CMS jest widoczna od razu po publikacji.

## Plan Workers — stan po zmianie limitów (sprawdzone 2026-09-18)

Cloudflare **zniósł limity rozmiaru skompresowanego bundla** (dotąd 3 MB free / 10 MB paid). Obowiązuje jeden limit 64 MiB nieskompresowanego kodu na wszystkich planach (zmiana z 4 września 2026). Rozmiar Payloada **nie jest już blokadą** na planie darmowym.

Blokadą pozostaje jednak **limit czasu CPU: 10 ms na żądanie na planie darmowym** (plan płatny: do 5 minut, domyślnie 30 s). Renderowanie panelu Payloada i stron Next.js regularnie przekracza 10 ms CPU, więc panel na darmowym planie będzie się wywracał. Czekanie na zapytania sieciowe i bazę nie liczy się do CPU, więc lekkie endpointy (np. wysyłka formularza przez Resend) mieszczą się w limicie. Limit 100 000 żądań dziennie nie jest problemem.

### Wnioski przy założeniu „bez płatnego planu Workers”
- **Publiczna strona (Astro):** budujemy ją **w całości statycznie** i serwujemy jako pliki statyczne z Cloudflare — nie zużywa czasu CPU Workera. Publikacja w CMS uruchamia webhookiem przebudowę (deploy hook), więc zmiana treści jest widoczna po przebudowie. To dopuszczalne odstępstwo od SSR, z działającym mechanizmem aktualizacji — trzeba je zapisać jako świadomą decyzję.
- **Formularze:** lekka funkcja (Worker/Pages Function) — mieści się w darmowych limitach.
- **Payload:** musi stać poza darmowym Workerem. Warianty poniżej.

## Wybrany stos — wszystko na darmowych progach (2026-09-18)

| Warstwa | Rozwiązanie | Plan | Co trzeba wiedzieć |
|---|---|---|---|
| Strona publiczna | Astro, build **statyczny**, hosting Cloudflare | darmowy | Pliki statyczne nie zużywają czasu CPU Workera, więc limit 10 ms nie dotyczy stron |
| Formularze | funkcja/Worker (walidacja + zapis + Resend) | darmowy | 100 000 żądań/dobę; czekanie na sieć i bazę nie liczy się do 10 ms CPU |
| Poczta | Resend | darmowy | 3 000 e-maili/mies., **limit 100/dobę** |
| Panel + API (Payload) | Render, usługa webowa | darmowy | 512 MB RAM, 0,1 CPU; **usypia po 15 min bezczynności, wybudzenie 30–60 s**; system plików ulotny |
| Baza | Neon Postgres | darmowy | 0,5 GB danych i 100 CU-godzin na projekt miesięcznie (≈400 h przy 0,25 CU); usypianie po 5 min, wybudzenie ~0,5–2 s; plan bezterminowy |
| Media | Cloudflare R2 (adapter `@payloadcms/storage-r2`) | darmowy próg | Konieczne, bo dysk Rendera na planie darmowym jest ulotny — pliki wgrane lokalnie znikają przy każdym restarcie |
| Repozytorium i CI | GitHub + Cloudflare Builds | darmowy | Limity minut buildów do pilnowania przy częstych publikacjach |

**Dlaczego nie darmowy Postgres w Renderze:** darmowa baza Rendera **wygasa 30 dni po utworzeniu** (potem krótki okres karencji i usunięcie danych). Neon na planie darmowym nie ma daty wygaśnięcia, dlatego baza idzie do Neona.

**Dlaczego nie Payload na darmowych Workers:** limit rozmiaru Workera zniknął (jeden limit 64 MiB nieskompresowanego kodu na wszystkich planach od 4 września 2026), ale plan darmowy daje **10 ms czasu CPU na żądanie** wobec 5 minut na płatnym. Renderowanie panelu Payloada tego nie zmieści.

### Publikacja treści
Payload `afterChange` → deploy hook Cloudflare → przebudowa strony statycznej. Zmiana w CMS jest widoczna po zakończeniu buildu (rząd wielkości: minuty). To udokumentowany mechanizm aktualizacji zamiast SSR — świadome odstępstwo od briefu, wymuszone rezygnacją z planów płatnych.

### Ryzyka do zaakceptowania przez klienta
1. **Pierwsze wejście do panelu po przerwie trwa 30–60 s** (wybudzenie Rendera) plus sekundy na wybudzenie bazy. Dla redakcji kilka razy w tygodniu to znośne, ale trzeba o tym uprzedzić.
2. **0,5 GB danych w bazie** — dla treści i relacji wystarczy z dużym zapasem, bo zdjęcia idą do R2. Przy zbliżaniu się do limitu zapisy zaczynają odmawiać.
3. **100 CU-godzin miesięcznie** — wystarczy, dopóki nikt nie pinguje bazy 24/7. Żadnych „keep-alive” pingów.
4. **Limit 100 e-maili na dobę** w Resend. Przy kampanii reklamowej można go dotknąć; wtedy Pro za 20 USD.
5. **Darmowe progi bywają zmieniane lub wycofywane** — to nie jest środowisko z SLA. Trzymamy kod, migracje i kopie tak, żeby przeniesienie zajmowało godziny, nie dni.
6. **Kopie zapasowe robimy sami** — sposób opisany niżej („Kopie zapasowe na Google Drive”). Bez tego „bezpłatnie” oznacza też „bez gwarancji odzysku”.

### Kopie zapasowe (propozycja)

**Silnik kopii: GitHub Actions** — zaplanowany workflow (cron) robi `pg_dump` z Neona, pakuje i **szyfruje GPG**. To darmowe i nie wymaga żadnego serwera. Otwarte pozostaje tylko, **gdzie trafia gotowy plik**.

#### Gdzie składować (porównanie)

| Miejsce | Zalety | Wady |
|---|---|---|
| **Artefakty GitHub Actions** | zero konfiguracji, pobranie jednym kliknięciem | **maks. 90 dni retencji**, darmowy próg **500 MB** na artefakty; po jego wyczerpaniu wgrywanie potrafi cicho zawodzić; nie nadaje się na kopie długoterminowe |
| **Release assets w prywatnym repo** | duże pliki, trwałe do czasu skasowania, można rotować skryptem | kopia leży u tego samego dostawcy co kod; trzeba pilnować porządku |
| **Commit plików kopii do repo** | proste | **odradzam** — historia Gita jest trwała, a usunięcie danych osobowych wymaga przepisywania historii; repo puchnie od binariów |
| **Google Drive (Workspace)** | poza GitHubem, umowa powierzenia, łatwy dostęp dla klienta | konto usługowe Google nie ma własnej przestrzeni — potrzebny dysk współdzielony lub token zwykłego konta |

**Rekomendacja:** codzienna kopia jako **artefakt z retencją 7–14 dni** (szybkie odtworzenie po wpadce) **plus** kopia tygodniowa i miesięczna wypychana **poza GitHuba** — na Google Drive firmy albo inny magazyn. Trzymanie kodu i wszystkich kopii u jednego dostawcy oznacza, że problem z kontem zabiera jedno i drugie.

**Wysyłka poza GitHuba (Google Drive):** rclone z tokenem konta firmowego. Osobno, rzadziej, synchronizacja plików z R2 na Drive. Rotacja: 7 dziennych, 4 tygodniowe, 6 miesięcznych. Odtworzenie opisane krok po kroku w `HANDOVER.md`.

**Haczyk, który trzeba obejść:** konta usługowe Google **nie mają własnej przestrzeni dyskowej** (0 GB) — próba wgrania pliku kończy się błędem „storage quota exceeded”, nawet gdy folder jest im udostępniony przez zwykłego użytkownika. Działające ścieżki to: dysk współdzielony (Shared Drive) w Google Workspace z kontem usługowym jako członkiem, delegacja domenowa albo token odświeżania zwykłego konta użytkownika. Dla nas najprościej: **dysk współdzielony w Workspace klienta** albo token OAuth firmowego konta.

**Dlaczego konto firmowe, nie prywatne:** zrzuty bazy zawierają dane osobowe ze zgłoszeń (imię, telefon, e-mail, treść wiadomości). Powinny leżeć na koncie firmowym, objętym umową powierzenia przetwarzania z dostawcą, a nie na prywatnym Gmailu wykonawcy czy pracownika. Dodatkowo szyfrujemy zrzuty, a klucz trzymamy poza Drive.

**Praktyczne uwagi:**
- Darmowa przestrzeń zwykłego konta Google jest wspólna dla Gmaila, Drive i Zdjęć, a jej limity Google zmieniał w 2026 roku — przed wdrożeniem sprawdzamy, ile miejsca faktycznie jest na wskazanym koncie.
- Zrzut bazy tego serwisu to rząd megabajtów; kopie mediów rosną wraz z galeriami realizacji — to one zajmą miejsce.
- Zaplanowane workflow w GitHub Actions bywają wyłączane po dłuższym braku aktywności w repozytorium — dodajemy monitoring, że kopia faktycznie powstała (powiadomienie o niepowodzeniu na e-mail).
- Sekrety (token Google, connection string Neona, klucz szyfrowania) tylko w sekretach repozytorium, nigdy w kodzie.
- **Wygodne połączenie:** skoro i tak potrzebna jest skrzynka dla `kontakt@grupa-nieruchomosci.pl`, Google Workspace załatwia jednocześnie pocztę, dysk współdzielony na kopie i umowę powierzenia. To płatne, ale poza stosem aplikacji.

### Ścieżka wyjścia, gdy usypianie zacznie przeszkadzać
Render Starter (~7 USD/mies.) usuwa usypianie, albo powrót na Workers + D1 (~5 USD/mies.). Kod i dane przenoszą się bez przepisywania, bo trzymamy się standardowego Postgresa i S3-owego magazynu.

## Konsekwencje wariantu Cloudflare Workers + D1 (jeśli wrócimy do A3) — do zaplanowania we wdrożeniu

- Baza: **D1 (SQLite)**, adapter `@payloadcms/db-d1-sqlite`; migracje przez Wrangler. Zamiast zrzutów `pg_dump` — regularny eksport D1 (skrypt + harmonogram, kopie poza Cloudflare).
- Media: **R2**, adapter `@payloadcms/storage-r2`. Pliki opublikowanych treści dostępne publicznie, pozostałe za kontrolą dostępu Payloada.
- Uruchomienie: `@opennextjs/cloudflare` + Wrangler; panel na subdomenie (`admin.grupa-nieruchomosci.pl`), dodatkowo do rozważenia Cloudflare Access przed `/admin`.
- Wymagany **płatny plan Workers** — do potwierdzenia przed pierwszym wdrożeniem produkcyjnym.
- Publiczna strona w Astro: osobny projekt na Cloudflare, dane z Payloada pobierane po stronie serwera.

## Panel CMS — stan wdrożenia (2026-09-18)

Panel **istnieje i działa lokalnie**: `apps/cms`, Payload 3.90 na Next.js 16, baza PostgreSQL.

Zweryfikowane na miejscu:
- `npm run dev` startuje, panel odpowiada pod adresem **`/panel`** (200), a `/` przekierowuje do panelu,
- Payload sam utworzył schemat bazy (tabele wszystkich kolekcji wraz z tabelami wersji roboczych),
- rejestracja pierwszego administratora przez API kończy się sukcesem i zwraca token,
- interfejs panelu jest **po polsku** (`i18n.supportedLanguages = { pl }`), łącznie z etykietami systemowymi.

Kolekcje: Usługi, Podstrony lokalizacyjne, Realizacje, Poradniki, Oferty, Media, Zapytania, Użytkownicy oraz globalne Ustawienia strony. Wszystkie etykiety i podpowiedzi po polsku. Role: administrator i redaktor. Zapytania nie mają odczytu publicznego.

Do zrobienia przy wdrożeniu: podpięcie magazynu R2, migracje w repozytorium, integracja Astro → Payload (pobieranie treści po stronie serwera) i endpoint formularza.

## Formularz — jak działa (wdrożone 2026-09-20)

Zgłoszenie z formularza leci do Payloada (`POST /api/zapytanie`), zapisuje się w kolekcji **Zapytania** i dopiero potem wychodzi e-mailem przez Resend na adres z `FORMULARZ_ODBIORCA` (domyślnie `kontakt@grupa-nieruchomosci.pl`). Jeśli nadawca podał adres e-mail, trafia on w `reply_to`, więc odpowiada się jednym kliknięciem.

Zweryfikowane lokalnie: poprawne zgłoszenie zapisuje się w bazie i zwraca `ok: true`, pole-pułapka odsiewa boty bez zapisu, brak kontaktu kończy się kodem 400. Bez `RESEND_API_KEY` odpowiedź zawiera `wyslanoEmail: false`, a formularz mówi wprost, że powiadomienie nie jest skonfigurowane — nie udajemy dostarczenia.

**Do uzupełnienia przed startem:** `RESEND_API_KEY`, weryfikacja domeny w Resend (SPF/DKIM) oraz `PUBLIC_API_URL` w `apps/web/.env` wskazujący adres panelu w produkcji. Adres `kontakt@grupa-nieruchomosci.pl` ma być przekierowaniem na Gmaila — wtedy warto też dodać rekord DMARC, żeby poczta nie wpadała do spamu.

## Poczta

- **Wysyłka z formularzy: Resend.** Plan darmowy: 3 000 e-maili miesięcznie i **limit 100 dziennie**; po przekroczeniu wysyłka się zatrzymuje. Pro od 20 USD/mies. (50 000 e-maili). Dla formularzy kontaktowych darmowy plan wystarcza z zapasem, ale limit dzienny trzeba monitorować (alert przy błędach wysyłki).
- Weryfikacja domeny w Resend wymaga rekordów DNS (SPF/DKIM, zalecany DMARC) na `grupa-nieruchomosci.pl` — rekordy przygotuję, **zmian w DNS nie wprowadzam bez polecenia**.
- **Resend to wysyłka, nie skrzynka.** Odbieranie poczty na `kontakt@…` wymaga osobnego dostawcy skrzynki (np. Google Workspace, Microsoft 365, Migadu) — to dodatkowy stały koszt do potwierdzenia.
- Adres nadawcy: `formularz@grupa-nieruchomosci.pl` (lub `no-reply@`), `Reply-To` na `kontakt@grupa-nieruchomosci.pl`.
- Zgłoszenie ze spotkaniem: e-mail do firmy z tematem, preferowanym terminem i formą spotkania + automatyczne potwierdzenie do zgłaszającego („odezwiemy się, żeby potwierdzić termin” — bez obietnicy konkretnej godziny).

## Konta i dostępy (do przekazania przez klienta)
Cloudflare (domena, Workers, D1, R2), GitHub (repozytorium w organizacji klienta), Resend (klucz API tylko po stronie serwera), dostawca skrzynki pocztowej, GA4 + GTM + Search Console, rejestrator domeny.

## Koszty stałe — do zatwierdzenia przed uruchomieniem
Plan Workers (płatny), D1 i R2 powyżej limitów darmowych, skrzynka pocztowa, odnowienie domeny, ewentualnie Resend Pro przy większym ruchu. Kwot utrzymania nie publikujemy na stronie.

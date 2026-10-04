# Grupa Nieruchomości — koncepcja (PROPOZYCJA do wspólnego przeglądu)

> Status: propozycja wykonawcy, **niezatwierdzona przez klienta**. Aktualizacja: 2026-09-18.
> Ustalenia klienta z 2026-09-18 (domena, dane firmy, kontakt, Cloudflare + GitHub, Resend, brak kalkulatora, bezpłatna wycena, umawianie spotkań) są uwzględnione — szczegóły w `DEPLOYMENT.md`.
> Stan rzeczywisty: istnieje koncepcja, mapa SEO i makieta strony głównej. **Kod aplikacji (Astro, Payload, baza) nie został jeszcze utworzony** — to kolejny etap, wykonywany w repozytorium (Claude Code).

## 1. Mapa strony

```
/                                   Strona główna
├── /sprzedaz-nieruchomosci          Usługa: sprzedaż
│   └── /szybka-sprzedaz             Dyskretna ścieżka (poza głównym menu)
├── /kupno-nieruchomosci             Usługa: reprezentowanie kupującego
├── /mieszkanie-pod-klucz            Usługa: wyszukanie → zakup → projekt → wykończenie
├── /inwestycje                      Usługa: projekt inwestycyjny
├── /zwiekszamy-wartosc              Jak zwiększamy wartość
├── /realizacje                      Lista z filtrem kategorii — NIEAKTYWNA do czasu materiałów (404, poza sitemapą)
│   └── /realizacje/[slug]
├── /poradniki                       Lista poradników
│   └── /poradniki/[slug]
├── /oferty                          PROPOZYCJA — miejsce modułu do ustalenia
│   └── /oferty/[slug]
├── /o-nas                           Firma, sposób działania, kompetencje, partnerstwo (bez profili osób)
├── /kontakt                         Formularz z wyborem tematu
├── /obszar-dzialania                Hub: Białystok + podlaskie, linki do opublikowanych stron lokalnych
├── /[slug-lokalny]                  40 podstron lokalizacyjnych (docs/SEO_MAP.csv)
├── /polityka-prywatnosci, /cookies  Treści prawne — do weryfikacji
├── /sitemap.xml, /robots.txt
```

**Adresy stron lokalnych:** płaskie, w formacie `/{temat}-{miejscowosc}` (np. `/sprzedaz-domu-wasilkow`). Obsługuje je jedna trasa `[slug].astro`, która renderuje wyłącznie opublikowane rekordy kolekcji „Podstrony lokalizacyjne”; stałe trasy mają pierwszeństwo, a lista zarezerwowanych slugów jest walidowana w CMS. Strony pomocnicze (`/obszar-dzialania`) nie są wliczane do 40.

### Nawigacja (propozycja)
- Menu: **Usługi** (Sprzedaż / Kupno / Mieszkanie pod klucz / Inwestycje) · Jak zwiększamy wartość · O nas · Kontakt. Pozycja „Realizacje” dochodzi automatycznie po pierwszej opublikowanej realizacji.
- Przycisk w nagłówku: „Porozmawiajmy”
- Grupowanie usług pod „Usługi” jest propozycją — klient wymienił je jako osobne pozycje. Na telefonie cztery usługi są widoczne od razu po otwarciu menu (bez dodatkowego rozwijania).
- Szybka sprzedaż: link ze strony sprzedaży, dyskretna linia w sekcji kontaktu na stronie głównej, stopka, adres bezpośredni. Nie w głównym menu.
- Stopka: dane firmy, kontakt, usługi, mapa serwisu, „Obszar działania” (jeden link zamiast 40), dokumenty prawne, oznaczenie partnerstwa.

## 2. Strona główna — układ (każda sekcja odpowiada na inne pytanie)

| # | Sekcja | Pytanie użytkownika |
|---|--------|---------------------|
| 1 | Pierwszy ekran: „Tworzymy przestrzenie do życia”, zdjęcie, opis usług i obszaru, CTA, partnerstwo | Kim jesteście i czy to dla mnie? |
| 2 | Cztery ścieżki: Sprzedaję / Kupuję / Inwestuję / Chcę mieszkanie pod klucz | Gdzie jest moja sprawa? |
| 3 | ~~Wybrane realizacje~~ — **sekcja wyłączona do czasu materiałów klienta**; włącza się automatycznie po pierwszej opublikowanej realizacji | Czy to działa w praktyce? |
| 4 | Jak zwiększamy wartość — zakres działań | Czy muszę remontować? |
| 4a | „Zanim zaproponujemy jakiekolwiek prace” — scrollytelling: przypięty panel + sześć kroków decyzji | Skąd wiecie, co mi zaproponować? |
| 5 | Model współpracy z przełącznikiem usługi (analiza → strategia → realizacja → rezultat) | Jak to przebiega w moim przypadku? |
| 6 | Jak pracujemy (sposób działania, odpowiedzialność, rola partnera) | Czy mogę wam zaufać? |
| 7 | Pasek „Napisz! A my wycenimy!” z bezpłatną wyceną | Ile jest warta moja nieruchomość? |
| 8 | Kontakt: formularz (zapytanie lub umówienie spotkania), telefon, adres biura, dyskretny link do szybkiej sprzedaży | Co mam zrobić teraz? |

Makieta: artefakt „Grupa Nieruchomości – strona główna (propozycja)” (desktop 1440 px + telefon 390 px).

## 3. Kierunek wizualny

**Idea: „spokojny dom maklerski”** — jasne powierzchnie, duże zdjęcia, typografia jak w dobrze złożonym wydawnictwie, granat jako kotwica marki, złoto tylko jako cienka linia lub akcent na granacie.

- **Kolory (paleta robocza z briefu, sprawdzona pod kontrast):**
  - granat `#162D43` — tło sekcji, przyciski; biały tekst na granacie ≈ 13:1 ✔
  - tekst `#202B36` na bieli ≈ 14:1 ✔
  - jasna szarość `#F4F5F6` — tło sekcji
  - złoto `#B89A61` — na bieli ≈ 2,7:1 ✘ **nie do tekstu na jasnym tle**; na granacie ≈ 5,3:1 ✔ (można użyć do tekstu na granacie). Na jasnym tle tylko linie, ikony dekoracyjne, podkreślenia.
  - tekst drugorzędny `#4A5663` na bieli ≈ 7,5:1 ✔
  - Wartości kontrastu są obliczone szacunkowo — do potwierdzenia narzędziem przy wdrożeniu.
- **Typografia:** nagłówki **Literata** (szeryfowy, dobrze składa polskie znaki, spokojny charakter), tekst **Figtree** (czytelny bezszeryfowy). Dwie rodziny, maks. 4 odcinki, hostowane lokalnie w produkcji (WOFF2, subset latin-ext, `font-display: swap`).
- **Charakterystyczny element:** cztery ścieżki jako duży typograficzny spis („Sprzedaję”, „Kupuję”…) z liniami podziału zamiast siatki identycznych kart.
- **Bez:** sliderów, wideo w tle, przechwytywania przewijania i bibliotek animacyjnych. Jedyna interakcja wymagająca JavaScriptu: przełącznik usługi w modelu współpracy.
- **Animacje sterowane przewijaniem (propozycja, 2026-09-18):** zdjęcie na pierwszym ekranie i pas w sekcji „Jak pracujemy” panoramują się wraz z przewijaniem, odsłaniając szerszy kadr; nagłówki sekcji pojawiają się delikatnym przesunięciem. Wykonane w czystym CSS (`animation-timeline: view()`), bez JavaScriptu i bez przechwytywania scrolla — strona przewija się normalnie, a animacja jedynie podąża za pozycją.
  - Wsparcie: Chrome/Edge 115+, Safari 26+; Firefox stabilny nadal za flagą (ok. 82–84% globalnie). Całość jest w `@supports (animation-timeline: view())` i w `@media (prefers-reduced-motion: no-preference)` — bez wsparcia lub przy włączonej preferencji ograniczenia ruchu zdjęcia są statyczne, a układ identyczny.
  - Animujemy wyłącznie `translate` i `opacity`, czyli właściwości obsługiwane przez kompozytor. Zero wpływu na wagę strony.
  - **Wyłączenie:** usunięcie klas `panorama--hero`, `panorama--pas` i `odsloniecie` albo całego bloku `@supports` w `global.css`.
- **Scrollytelling (sekcja „Zanim zaproponujemy jakiekolwiek prace”):** lewy panel przypięty `position: sticky`, prawa kolumna to sześć kroków; aktywny krok wykrywa `IntersectionObserver` i aktualizuje numer, tytuł, opis oraz pasek postępu. Bez bibliotek, bez przechwytywania scrolla, bez animacji uzależnionych od JS-a — przy wyłączonym JavaScripcie widać po prostu sześć kroków jeden pod drugim. Na telefonie panel znika, a kroki są w pełni czytelne.
- **Pasek postępu czytania:** złota linia u góry, w CSS przez `animation-timeline: scroll(root)`, z zapasem w JS dla Firefoksa.
- **Budżet JavaScriptu:** strona główna ma łącznie ok. 3,1 kB kodu inline (zakładki, cookies, scrollytelling, zapas panoramowania). Zero bibliotek zewnętrznych, zero plików `.js` w buildzie.
- **Przed/po:** domyślnie dwa zdjęcia obok siebie (na telefonie jedno pod drugim) z podpisami. Suwak — opcjonalnie później, z zachowaniem dostępu do obu zdjęć.

**Uzasadnienie:** odbiorca to właściciel lub kupujący podejmujący drogą decyzję. Spokój, czytelność i konkret budują zaufanie lepiej niż „luksusowa” estetyka; granat i złoto odróżniają markę od typowych portali ogłoszeniowych, a dominacja zdjęć pokazuje kompetencje projektowe bez wyglądu firmy remontowej.

## 4. Plan techniczny (sprawdzone w dokumentacji 2026-09-17)

- **apps/web — Astro + TypeScript**, adapter `@astrojs/node`. Astro domyślnie prerenderuje strony; renderowanie na żądanie wymaga adaptera i `prerender = false` lub `output: 'server'` (docs.astro.build/en/guides/on-demand-rendering). Przy hostingu bez płatnych Workers: **strona w całości prerenderowana**, a publikacja w CMS uruchamia przebudowę przez deploy hook (dokumentowany mechanizm aktualizacji). Dynamiczny pozostaje wyłącznie endpoint formularza. Jeśli wrócimy do środowiska z pełnym SSR, przechodzimy na renderowanie na żądanie z krótkim cache i endpointem czyszczącym.
- **apps/cms — Payload 3 (Next.js)**. Uruchamiany na Renderze (plan darmowy), baza **Neon Postgres** (`@payloadcms/db-postgres`), media w **R2** (`@payloadcms/storage-r2`) — szczegóły i ryzyka w `DEPLOYMENT.md`. Wymagania wg dokumentacji: Node ≥ 20.9.0, pnpm (preferowany), określone zakresy wersji Next.js (15.2.9+, 15.3.9+, 15.4.11+ w swoich liniach lub 16.2.6+). Payload potrzebuje działającego serwera Node — nie działa na hostingu statycznym.
- **Integracja:** Astro pobiera dane z lokalnego API Payload po stronie serwera (REST z kluczem API tylko w zmiennych serwera; nigdy w przeglądarce). Zapytania zawsze z filtrem `_status = published` i bez `draft`.
- **Media:** R2, obrazy responsywne, `alt` wymagany w CMS.
- **Formularze:** endpoint Astro → walidacja (wspólny schemat zod) → zapis w kolekcji „Zapytania” (tylko odczyt dla zalogowanych) → wysyłka przez **Resend** (klucz API wyłącznie po stronie serwera). Honeypot + limit żądań + opcjonalnie Turnstile. Brak konfiguracji poczty = uczciwy komunikat w podglądzie.
- **Repo:** `apps/web`, `apps/cms`, `packages/shared` (typy i schematy formularzy — realna potrzeba współdzielenia), `docker-compose.yml` (Postgres lokalnie), `.env.example` bez sekretów, migracje Payload w repo, skrypt seed (w tym 40 szkiców stron lokalnych i rekordy demo oznaczone statusem).
- **Hosting:** Cloudflare + GitHub (decyzja klienta). Payload nie działa na hostingu statycznym — panel uruchamiamy jako osobny Worker na subdomenie. Warianty i konsekwencje: `DEPLOYMENT.md`.

## 5. Model CMS (skrót)

| Kolekcja / global | Najważniejsze pola | Dostęp publiczny |
|---|---|---|
| Strony / Usługi | sekcje z bloków kontrolowanych, CTA, FAQ, SEO | tylko opublikowane |
| Realizacje | tytuł, slug, kategoria, ogólna lokalizacja, metraż?, sytuacja, cel, zakres, przebieg, rezultat, galeria, pary przed/po, usługi, CTA, status (szkic/opublikowana/archiwum), **demo: tak/nie** | tylko opublikowane i nie-demo w produkcji |
| Media | plik, alt (wymagany), podpis, pochodzenie/prawa, **ilustracyjne: tak/nie** | pliki opublikowanych treści |
| Oferty | dane podstawowe, opis, lokalizacja, cena?, zdjęcia, parametry, status | tylko aktywne |
| Poradniki | tytuł, slug, lead, treść, autor (tylko potwierdzony), daty, zdjęcie, kategorie, SEO | tylko opublikowane |
| Podstrony lokalizacyjne | lokalizacja, usługa, intencja, treść, FAQ, powiązania, meta, **stan weryfikacji** (propozycja / do poprawy / zaakceptowana) | tylko opublikowane i zaakceptowane |
| Zapytania | usługa, ścieżka źródłowa, pola formularza, UTM (lista dozwolonych), status | **brak** |
| Ustawienia (global) | dane firmy, kontakt, nawigacja, stopka, partnerstwo, SEO, ID analityki | wybrane pola; sekrety tylko w env |

Role: **Administrator** (konta, konfiguracja), **Redaktor** (treści). Pole „Wymaga potwierdzenia przez klienta” przy tekstach z twierdzeniami o firmie.

## 5a. Techniczne SEO

Pełna checklista wdrożeniowa i odbiorowa: `SEO_TECH.md` (indeksowanie, renderowanie, metadane, dane strukturalne, obrazy, Core Web Vitals, linkowanie wewnętrzne, monitoring).

## 6. Analityka (plan zdarzeń)

`generate_lead` (po potwierdzeniu przyjęcia przez backend, parametry: `service`, `source_path`, `form_type` = zapytanie/spotkanie), `click_phone`, `click_email`, `cta_click` (`cta_id`), `view_case_study`, `case_to_service`, `quick_sale_lead`. Potwierdzenie przyjęcia przez Resend nie jest dowodem doręczenia do skrzynki. Bez danych osobowych i adresów nieruchomości. GA4/GTM ładowane dopiero po zgodzie; bez ID — wyłączone.

## 7. Sygnały kosztowe (bez publikacji kwot na stronie)

Payload wymaga działającego środowiska serwerowego — na Cloudflare oznacza to płatny plan Workers plus D1 i R2. Do tego dochodzi skrzynka pocztowa dla `kontakt@…` (Resend tylko wysyła), odnowienie domeny oraz ewentualnie Resend Pro przy większym wolumenie. Poza zakresem: kalkulator wyceny i CRM.

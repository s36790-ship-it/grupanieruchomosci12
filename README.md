# Grupa Nieruchomości — strona firmowa

Strona dla Grupa Nieruchomości sp. z o.o. (Białystok i województwo podlaskie).
**Status: propozycja wykonawcy do wspólnego przeglądu, niezatwierdzona przez klienta.**

## Treści są w CMS-ie
Teksty stron usługowych i całej strony głównej siedzą w Payloadzie (kolekcja **Usługi** oraz globalne **Strona główna** i **Ustawienia strony**). Strona pobiera je przy budowaniu; gdy CMS nie działa, wraca do kopii w `apps/web/src/data` i build się nie wywraca — w konsoli pojawia się wtedy ostrzeżenie `[cms]`.

## Lokalne SEO — jak jest zbudowane
- **40 podstron lokalizacyjnych** (`/[slug]`, kolekcja *Podstrony lokalizacyjne*). 12 ma pełną treść z blokami: lista kontrolna, tabela porównawcza, wyróżniona uwaga. Wszystkie są szkicami do akceptacji klienta.
- **Poradniki** (`/poradniki`, `/poradniki/[slug]`) — treści informacyjne. 4 napisane, jako szkice. Spis poradników i link w stopce pojawiają się automatycznie po publikacji pierwszego.
- **Linkowanie wewnętrzne** działa w trzech kierunkach: usługa → jej strony lokalne i poradniki („W Twojej okolicy”, „Warto przeczytać”), strona lokalna → inne strony tej samej miejscowości lub usługi i poradniki, poradnik → usługi i strony lokalne.
- **Dane strukturalne**: `RealEstateAgent` na każdej stronie, `Service` z `areaServed` na stronach lokalnych, `Article` na poradnikach, `BreadcrumbList` i `FAQPage` tam, gdzie są okruchy i widoczne FAQ.
- **`/obszar-dzialania`** — spis opublikowanych stron lokalnych pogrupowany według miejscowości.
- Nic nieopublikowanego nie trafia do buildu ani do sitemapy.

## Co działa (zweryfikowane lokalnym buildem 2026-09-19)
- `apps/web` — Astro 5 + TypeScript, build statyczny, 9 stron.
- Strona główna w pełnej treści: pierwszy ekran, cztery ścieżki, „Jak zwiększamy wartość”, model współpracy z przełącznikiem usług, „Jak pracujemy”, pas bezpłatnej wyceny, kontakt z formularzem.
- Sześć podstron usługowych (docelowe adresy, metadane, zdjęcie, okruchy, formularz — treść merytoryczna w kolejnym etapie), `/kontakt`, strona 404.
- SEO w surowym HTML: `title`, `description`, `canonical`, Open Graph, dane strukturalne `RealEstateAgent`, `sitemap-index.xml` (bez 404), `robots.txt`.
- Dostępność: „Przejdź do treści”, widoczny fokus, etykiety pól, menu działa bez JavaScriptu, `prefers-reduced-motion`.
- JavaScript na stronie głównej: ok. 300 bajtów (przełącznik zakładek). Reszta stron: zero.

## Czego jeszcze nie ma
- Payload CMS (`apps/cms`) — do postawienia zgodnie z `docs/DEPLOYMENT.md` (Render + Neon + R2).
- Wysyłki formularza przez Resend — formularz jest kompletny, ale nie wysyła; w podglądzie informuje o tym wprost.
- Treści podstron usługowych, poradników i 40 podstron lokalizacyjnych (`docs/SEO_MAP.csv`).
- Sekcji realizacji — celowo wyłączona do czasu materiałów klienta (`docs/REALIZACJE_PLAN.md`).

## Uruchomienie lokalne

Wymagany Node.js 20.3+ (testowane na 22.22).

```bash
cd apps/web
npm install
npm run dev        # http://localhost:4321
```

Build i podgląd wersji produkcyjnej:

```bash
npm run build      # wynik w apps/web/dist
npm run preview
```

## Struktura

```
apps/web/
├── public/images/          zdjęcia ilustracyjne (patrz docs/IMAGE_ALT.md)
├── public/robots.txt
├── src/components/         Header, Footer, Formularz
├── src/data/site.ts        dane firmy i treści sekcji — docelowo z CMS
├── src/layouts/Base.astro  metadane, Open Graph, dane strukturalne
├── src/pages/              index, [usluga], kontakt, 404
└── src/styles/global.css   kolory, typografia, elementy wspólne
assets/                     komplet zdjęć: wariant A i wariant-b/
docs/                       koncepcja, wdrożenie, SEO, zdjęcia, kwestie otwarte
```

## Dokumentacja
`docs/CONCEPT.md` · `docs/DEPLOYMENT.md` · `docs/SEO_TECH.md` · `docs/SEO_MAP.csv` · `docs/SEO_RESEARCH.md` ·
`docs/IMAGE_BRIEF.md` · `docs/IMAGE_ALT.md` · `docs/IMAGE_SELECTION.md` · `docs/REALIZACJE_PLAN.md` ·
`docs/OPEN_QUESTIONS.md`

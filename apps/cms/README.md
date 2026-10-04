# Panel administracyjny — Payload CMS

Panel do zarządzania treścią strony Grupy Nieruchomości. Interfejs w całości po polsku.

## Uruchomienie lokalne

Wymagany Node.js 20.9+ i baza PostgreSQL.

```bash
# 1. baza danych (z katalogu głównego repozytorium)
docker compose up -d

# 2. panel
cd apps/cms
cp .env.example .env        # uzupełnij PAYLOAD_SECRET dowolnym długim ciągiem
npm install
npm run dev                 # http://localhost:3000/panel
```

Przy pierwszym wejściu panel poprosi o założenie konta administratora.
Wejście na `http://localhost:3000` przekierowuje do `/panel`.

### Bez Dockera (macOS)
Baza lokalnie przez Homebrew:

```bash
brew install postgresql@16
brew services start postgresql@16
createdb gn
```

W `.env`: `DATABASE_URL=postgresql://localhost:5432/gn`.

Albo baza w chmurze: darmowy projekt w Neon i skopiowany stamtąd connection string.

`PAYLOAD_SECRET` generujesz sam: `openssl rand -base64 32`.

## Co jest w panelu

| Sekcja | Zawartość |
|---|---|
| Usługi | Podstrony usługowe: nagłówek, wstęp, kroki procesu, listy, FAQ, powiązania, SEO |
| Podstrony lokalizacyjne | 40 stron pod lokalne wyszukiwania, ze stanem weryfikacji treści |
| Realizacje | Sytuacja, cel, zakres, przebieg, rezultat, pary zdjęć przed/po, zgoda właściciela, przełącznik „rekord demonstracyjny” |
| Poradniki | Wpisy blogowe z kategoriami i datą publikacji |
| Oferty | Podstawowe dane nieruchomości i status oferty |
| Media | Pliki z wymaganym opisem alternatywnym i informacją o pochodzeniu |
| Zapytania | Zgłoszenia z formularzy, ze statusem obsługi. Brak odczytu publicznego |
| Użytkownicy | Konta i role: administrator, redaktor |
| Ustawienia strony | Dane firmy, kontakt, partnerstwo, identyfikatory analityki |

## Role
- **Administrator** — konta użytkowników, ustawienia, identyfikatory analityki, usuwanie zapytań.
- **Redaktor** — wszystkie treści, bez zarządzania kontami.

## Wersje robocze
Usługi, lokalizacje, realizacje, poradniki i oferty mają szkice. Publiczne API zwraca wyłącznie opublikowane rekordy — szkice widzą tylko zalogowani.

## Produkcja
Panel uruchamiamy na Renderze (plan darmowy), bazę w Neon, pliki w Cloudflare R2. Szczegóły i ryzyka: `docs/DEPLOYMENT.md`.

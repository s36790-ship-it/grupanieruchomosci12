# Uruchomienie produkcyjne: GitHub → Cloudflare + Resend

Stan na 2026-10-04. Strona publiczna (Astro) jest budowana **statycznie** i serwowana z **Cloudflare Workers (static assets)**.
Jedyny kod wykonywany na serwerze to mały Worker `apps/web/worker/index.ts`, który obsługuje formularz
(`POST /api/zapytanie`) i wysyła zgłoszenie e-mailem przez **Resend**. Każdy push na gałąź `main` w GitHubie
automatycznie buduje i publikuje stronę.

```
GitHub (main) ──push──▶ Cloudflare Workers Builds ──npm run build──▶ dist/ (pliki statyczne)
                                                   └─wrangler deploy──▶ Worker „grupa-nieruchomosci”
Przeglądarka ──▶ grupa-nieruchomosci.pl ──▶ pliki statyczne (bez zużycia CPU)
                                       └─▶ /api/zapytanie ──▶ Worker ──▶ Resend ──▶ kontakt@grupa-nieruchomosci.pl
```

Pliki konfiguracji: `apps/web/wrangler.jsonc`, `apps/web/worker/index.ts`, `apps/web/.dev.vars.example`.

---

## 1. GitHub — repozytorium

1. Na github.com: **New repository** → nazwa `grupa-nieruchomosci` → **Private** → bez README, .gitignore i licencji (repo ma być puste).
2. W Terminalu na Macu (repozytorium lokalne jest już założone, z pierwszym commitem):

   ```bash
   cd ~/Desktop/STRONY/GRUPA-NIERUCHOMOSCI/grupa-nieruchomosci-19
   git remote add origin https://github.com/TWOJ-LOGIN/grupa-nieruchomosci.git
   git push -u origin main
   ```

   Alternatywa bez terminala: GitHub Desktop → *File → Add local repository* → wskaż ten folder → *Publish repository* (zaznacz „Keep this code private”).

W repozytorium **nie ma** sekretów: `.env`, `.dev.vars`, `node_modules`, `dist`, `.next` są w `.gitignore`.

## 2. Resend — wysyłka z formularza

1. Załóż konto na resend.com (najlepiej na firmowy adres).
2. **Domains → Add Domain** → `grupa-nieruchomosci.pl`, region **eu-west-1 (Ireland)** — dane zostają w UE.
3. Resend pokaże rekordy DNS (MX i TXT dla subdomeny `send`, TXT `resend._domainkey` dla DKIM).
   Jeśli domena jest już w Cloudflare, użyj przycisku **Auto configure** (Resend doda rekordy sam) albo przepisz je ręcznie
   w Cloudflare → *DNS → Records*. Rekordy pocztowe zostaw jako **DNS only** (szara chmurka).
4. Dodaj DMARC (zalecane, zmniejsza ryzyko trafienia do spamu):
   `TXT  _dmarc  "v=DMARC1; p=none; rua=mailto:kontakt@grupa-nieruchomosci.pl"`
5. Poczekaj na status **Verified** przy domenie.
6. **API Keys → Create API Key** → nazwa „Cloudflare – formularz”, uprawnienie **Sending access**, domena `grupa-nieruchomosci.pl`.
   Skopiuj klucz (`re_…`) — pokazuje się tylko raz. Wkleisz go w kroku 3.5. **Nie wklejaj go do żadnego pliku w repozytorium.**

Limity planu darmowego: 3 000 e-maili/mies., 100/dobę.
Resend tylko **wysyła**. Żeby **odbierać** pocztę na `kontakt@grupa-nieruchomosci.pl`, potrzebna jest skrzynka
(Google Workspace, Microsoft 365, Zoho…) albo **Cloudflare Email Routing** (darmowe przekierowanie na prywatnego Gmaila).

## 3. Cloudflare — hosting i serwer

1. **Domena w Cloudflare:** *Add a domain* → `grupa-nieruchomosci.pl` → plan Free → u rejestratora domeny zmień serwery
   nazw (NS) na te podane przez Cloudflare. Status domeny zmieni się na *Active* (zwykle do kilku godzin).
2. **Workers & Pages → Create → Import a repository** → połącz konto GitHub (zainstaluj aplikację Cloudflare
   tylko dla repozytorium `grupa-nieruchomosci`) → wybierz repozytorium.
3. Ustawienia projektu:

   | Pole | Wartość |
   |---|---|
   | Project name | `grupa-nieruchomosci` (musi być takie samo jak `name` w `wrangler.jsonc`) |
   | Production branch | `main` |
   | Root directory (Advanced → Path) | `apps/web` |
   | Build command | `npm run build` |
   | Deploy command | `npx wrangler deploy` |
   | Non-production branch deploy command | `npx wrangler versions upload` (podglądy gałęzi) |
   | Build variables | `NODE_VERSION` = `22` |

4. **Deploy.** Pierwszy build trwa 1–3 minuty. Strona będzie dostępna pod `grupa-nieruchomosci.<konto>.workers.dev`.
5. **Settings → Variables and Secrets → Add** → typ **Secret** → `RESEND_API_KEY` = klucz z kroku 2.6 → *Deploy*.
   Pozostałe zmienne (`FORMULARZ_ODBIORCA`, `FORMULARZ_NADAWCA`, `DOZWOLONE_ORIGINY`) są w `wrangler.jsonc`
   i zmienia się je w repozytorium — wartości wpisane w panelu zostałyby nadpisane przy następnym deployu.
6. **Settings → Domains & Routes → Add → Custom domain** → `grupa-nieruchomosci.pl`, potem drugi raz `www.grupa-nieruchomosci.pl`.
   Przekierowanie www → bez www: *Rules → Redirect Rules → Create* → szablon „Redirect from WWW to root”.

## 4. Sprawdzenie po uruchomieniu

- Otwórz `https://grupa-nieruchomosci.pl/kontakt`, wyślij formularz z własnym adresem e-mail.
  Po kilku sekundach na `kontakt@grupa-nieruchomosci.pl` przychodzi wiadomość; *Odpowiedz* trafia do zgłaszającego.
- Gdyby e-mail nie doszedł: Cloudflare → Worker → **Logs** (wpisy `[formularz]`) oraz Resend → **Emails**.
- `https://grupa-nieruchomosci.pl/sitemap-index.xml` i `/robots.txt` odpowiadają.
- Google Search Console: dodaj domenę i zgłoś sitemapę.

## 5. Praca na co dzień

- Zmiana w kodzie lub treści w `apps/web/src/data` → commit → push na `main` → po ~2 min zmiana jest na stronie.
- Push na inną gałąź → Cloudflare publikuje wersję podglądową pod osobnym adresem, bez ruszania produkcji.
- Lokalny test formularza z prawdziwą wysyłką: skopiuj `apps/web/.dev.vars.example` do `apps/web/.dev.vars`,
  wpisz klucz i uruchom `npm run cf:dev` w `apps/web` (strona + Worker pod http://localhost:8787).

## Ważne: treści z panelu (Payload)

Build w Cloudflare pobiera treści z Payloada spod `PAYLOAD_URL`. Dopóki panel nie jest wdrożony (Render + Neon, opis w
`DEPLOYMENT.md`), build w Cloudflare **nie widzi lokalnego panelu z Twojego komputera** i używa treści z plików
`apps/web/src/data/*` (w logu buildu pojawi się ostrzeżenie `[cms] … używam treści lokalnych`). Zmiany wprowadzone tylko
w lokalnym panelu nie trafią więc na produkcję — trzeba je przenieść do `src/data` albo najpierw wdrożyć panel i dodać
w Cloudflare zmienną buildu `PAYLOAD_URL` = adres panelu.

Zgłoszenia z formularza w tej konfiguracji idą wyłącznie e-mailem (nie zapisują się w kolekcji *Zapytania* w panelu).

## Ochrona formularza

Pole-pułapka na boty, sprawdzanie nagłówka `Origin` (wysyłka tylko z naszej domeny), walidacja telefonu lub e-maila,
limit długości pól. Jeśli pojawi się spam, kolejny krok to **Cloudflare Turnstile** (darmowa, niewidoczna weryfikacja).

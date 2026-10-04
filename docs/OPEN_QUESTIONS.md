# Kwestie otwarte (nie są ustaleniami)

Aktualizacja: 2026-09-18. Rozstrzygnięte pozycje przeniesione do sekcji „Ustalone”.

## Ustalone (2026-09-18)
- Domena: `grupa-nieruchomosci.pl`
- Dane firmy: Grupa Nieruchomości sp. z o.o., ul. Nowogrodzka 64/43, 02-014 Warszawa, NIP 5223200075, REGON 388580956, KRS 0000891641 (do potwierdzenia przez klienta, czy publikujemy pełny komplet)
- Kontakt: **kontakt@grupa-nieruchomosci.pl** (z myślnikiem, zgodnie z domeną), +48 608 642 999
- Panel administracyjny: Payload
- Poczta wychodząca: Resend
- Hosting: **stos w całości na planach darmowych** — strona statyczna na Cloudflare, Payload na Renderze, baza Neon Postgres, media R2, poczta Resend (szczegóły i ryzyka w `DEPLOYMENT.md`)
- Kalkulator wyceny: **poza zakresem**
- Biuro w Białymstoku: ul. Piękna 5, lok. 12P, 15-282 Białystok
- Hasło sekcji wyceny: „Napisz! A my wycenimy!”
- Bezpłatna wycena: komunikujemy na stronie
- Umówienie spotkania: formularz z preferowanym terminem i formą spotkania, potwierdzenie telefoniczne; kalendarz ze slotami odłożony na później

## Blokujące — czekam na odpowiedź
1. **Status adresu przy ul. Pięknej 5.** To adres wizytówki Zboralscy Group w Białymstoku. Czy Grupa Nieruchomości urzęduje pod nim i możemy podawać go jako własne biuro (strona, dane strukturalne, wizytówka Google)? Dwie firmy pod jednym adresem w wizytówkach Google bywają weryfikowane — warto to przemyśleć z partnerem.
2. **Zakres bezpłatnej wyceny.** Co obejmuje: rozmowa i analiza porównawcza ofert? wizyta na miejscu? pisemna opinia? Czy jest warunek (np. tylko przy umowie pośrednictwa)? Uwaga: „wycena nieruchomości” w rozumieniu operatu szacunkowego jest zastrzeżona dla rzeczoznawcy majątkowego — jeśli firma nie ma takich uprawnień, na stronie użyjemy sformułowania „bezpłatna wycena ofertowa” lub „bezpłatna analiza wartości rynkowej”.
3. **Czy publikujemy pełne dane rejestrowe** (KRS, kapitał zakładowy) w stopce — na razie: nazwa, adres, NIP, KRS.
4. **Skrzynka pocztowa** dla `kontakt@grupa-nieruchomosci.pl` — u jakiego dostawcy (Resend tylko wysyła). To osobny stały koszt.
5. **Akceptacja dwóch konsekwencji darmowego stosu:** (a) wejście do panelu po przerwie trwa 30–60 s, (b) strona jest statyczna i odświeża się po przebudowie, a nie natychmiast. Jeśli któraś jest nie do przyjęcia, wracamy do wariantu za ok. 5–7 USD miesięcznie.
6. **Gdzie trafiają kopie długoterminowe.** Codzienne robi GitHub Actions i trzyma jako artefakty (retencja do 90 dni, darmowy próg 500 MB). Kopie tygodniowe i miesięczne powinny wyjść poza GitHuba — propozycja: Google Drive firmy. **Konto Google do kopii zapasowych** — kopie idą na Google Drive (schemat w `DEPLOYMENT.md`). Potrzebne: konto **firmowe**, najlepiej Workspace z dyskiem współdzielonym (konto usługowe Google nie ma własnej przestrzeni), oraz decyzja, kto jest właścicielem folderu i klucza szyfrowania. Prywatny Gmail odpada — w zrzutach są dane osobowe ze zgłoszeń.

## Materiały
6. **Logo Grupy Nieruchomości** — w makiecie znak tekstowy.
7. **Zdjęcia** — jakie materiały własne i z jakimi prawami. Bez nich zostają oznaczone zastępniki.
8. **Znak partnera.** W makiecie i w kodzie użyłem znaku graficznego przekazanego przez Dawida (złoty pinezka z zabudową), umieszczonego obok napisu „Autoryzowany Partner Zboralscy Group”. **Do potwierdzenia:** czy to zatwierdzony znak Zboralscy Group, czy mamy pisemną zgodę na jego użycie i czy obowiązują zasady dotyczące odstępów, minimalnego rozmiaru lub wersji kolorystycznych. Znaku partnera nie tworzymy samodzielnie — jeśli ten plik nie jest właściwy, potrzebujemy oryginału od partnera (najlepiej SVG).
9. **Realizacje** — klient nie ma zdjęć. Warianty, rekomendacja i protokół zdjęciowy: `REALIZACJE_PLAN.md`. Do decyzji: czy ukrywamy sekcję do czasu materiałów oraz czy robimy studia przypadku bez zdjęć. **Poradniki i oferty** — ile na start i kto dostarcza treści.

## Zakres i treści
11a. **Interaktywny wybór osiedli na `/o-nas`** — mechanizm gotowy, dane do uzupełnienia. Do decyzji: czy zaczynamy od pięciu osiedli priorytetowych, kto potwierdza dane o mieście i czy prace wchodzą w obecną wycenę (`MAPA_DZIELNIC.md`).
11. **Lista 40 podstron lokalnych** (`SEO_MAP.csv`) do akceptacji; w szczególności: czy obsługujemy Suwałki, Łomżę, Augustów i mniejsze miasta oraz czy obsługujemy działki.
12. **Miejsce modułu ofert** — propozycja `/oferty`.
13. **Szybka sprzedaż** — jakie scenariusze firma faktycznie realizuje, a czego nie oferuje.
14. **Twierdzenia o firmie** w sekcji „Jak pracujemy” i na `/o-nas` — do potwierdzenia.
15. **CRM** — brak wybranego systemu; zapytania trafiają do CMS i na e-mail.

## Analityka i kwestie prawne
16. **GA4, GTM, Search Console** — identyfikatory; konta na koncie klienta.
17. **Zgody i polityki.** Baner zgód, `/cookies` i `/polityka-prywatnosci` są **wdrożone jako dokumenty robocze** z widoczną adnotacją, że wymagają weryfikacji prawnej. Do uzupełnienia przez firmę: okresy przechowywania zapytań, lista podmiotów przetwarzających (hosting, baza, poczta, analityka), nazwy i czasy życia plików cookies po wyborze narzędzia analitycznego. Adnotację o szkicu usuwamy dopiero po akceptacji treści.
18. **Dane strukturalne** — potwierdzić zakres publikowanych danych rejestrowych (KRS, kapitał).

## Pomysł rozwojowy (tylko propozycja)
19. Narzędzie odpowiadające na realne zapytania użytkowników (np. lista kontrolna przygotowania mieszkania do sprzedaży) — do rozważenia po starcie, na podstawie danych z Search Console. Bez modelu cenowego.

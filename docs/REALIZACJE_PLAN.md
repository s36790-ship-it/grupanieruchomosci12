# Realizacje bez zdjęć — co robimy

Data: 2026-09-18. Klient nie ma obecnie zdjęć wykonanych realizacji. Poniżej warianty, rekomendacja i protokół, który sprawi, że kolejne realizacje już nie przepadną.

## Czego nie robimy
- **Nie wstawiamy zdjęć generowanych jako realizacji.** To byłoby przedstawianie wygenerowanych wnętrz jako wykonanych prac — nieprawdziwe wobec klienta końcowego i ryzykowne wizerunkowo.
- **Nie bierzemy zdjęć z cudzych ogłoszeń ani portali.** Prawa do nich zwykle należą do fotografa lub biura, nie do sprzedającego.
- Nie publikujemy przykładowych rekordów demonstracyjnych. W podglądzie są widoczne i oznaczone, w produkcji ukryte.

## Warianty

**A. Strona i link ukryte do czasu materiałów (rekomendacja na start).**
Kolekcja Realizacje, szablon `/realizacje/[slug]`, filtry kategorii i moduł przed/po powstają w całości i są gotowe. Adres `/realizacje` zwraca 404 i nie ma go w sitemapie, dopóki nie zostanie opublikowana pierwsza realizacja. Link w menu i sekcja na stronie głównej pojawiają się **automatycznie**, gdy w CMS jest co najmniej jedna opublikowana pozycja. Zero pracy przy późniejszym włączeniu.
*Plus:* strona nie wygląda na niedokończoną, nic nie kłamie. *Minus:* brak dowodu kompetencji na starcie.

**B. Studia przypadku bez zdjęć (do zrobienia od razu).**
Opis prawdziwej współpracy w układzie sytuacja → działania → rezultat, bez zdjęć i bez adresu, za zgodą klienta i bez danych, których nie potwierdzi. Zamiast fotografii: typografia, rzut lub prosty schemat zakresu prac. Trzy takie opisy dają więcej niż dziesięć ładnych zdjęć z banku.
*Plus:* wiarygodność i treść pod SEO. *Minus:* wymaga godziny rozmowy z klientem na każdą historię.

**C. Zdjęcia, które klient już ma.**
Warto zapytać wprost: telefon, zdjęcia z prezentacji, zdjęcia „przed” robione przy wycenie, zdjęcia z ekipy remontowej. Niedoskonałe zdjęcie z telefonu z prawdziwego mieszkania jest lepsze niż idealny render. Warunek: prawa po stronie klienta i zgoda właściciela nieruchomości.

**D. Sesja u lokalnego fotografa.**
Dwie lub trzy nieruchomości, jeden dzień zdjęciowy. To realny koszt po stronie klienta, poza naszą wyceną — do decyzji z nim.

**E. Zdjęcia poglądowe w sekcji „Jak zwiększamy wartość”.**
Zdjęcia generowane wolno pokazywać tam, gdzie ilustrują usługę, a nie wynik konkretnej pracy — pod warunkiem czytelnego podpisu „zdjęcie poglądowe”. Tam ich używamy i tylko tam.

## Decyzja (2026-09-18)
**Wariant A.** Sekcja realizacji jest wyłączona do czasu materiałów klienta; moduł w CMS powstaje w pełni. Studia przypadku (wariant B) na razie odłożone — Dawid pyta klienta o zdjęcia i o zgodę na opisanie współpracy.

### Co to oznacza w kodzie
- `/realizacje` i `/realizacje/[slug]` zwracają 404, dopóki nie ma opublikowanej pozycji; brak ich w sitemapie i brak linków wewnętrznych.
- Pozycja w menu głównym, link w stopce i sekcja na stronie głównej renderują się **warunkowo**, na podstawie liczby opublikowanych realizacji. Zero zmian w kodzie przy włączeniu.
- Makieta strony głównej pokazuje stan bez realizacji: po ścieżkach idzie od razu „Jak zwiększamy wartość”.
- Drugi przycisk w pierwszym ekranie prowadzi teraz do „Jak zwiększamy wartość” zamiast do realizacji.
- Test odbiorowy: po dodaniu i opublikowaniu jednej realizacji sekcja, menu, stopka i sitemapa aktualizują się bez ingerencji w kod.

## Rekomendacja pierwotna
**A + B teraz, C równolegle, D gdy klient zdecyduje.** Budujemy pełny moduł, ukrywamy sekcję do czasu treści, a stronę główną na starcie opieramy na sekcji „Jak zwiększamy wartość” i modelu współpracy. Równocześnie pytamy klienta o istniejące zdjęcia i zbieramy pierwsze studium przypadku.

## Protokół zdjęć przed/po (do przekazania klientowi)
Telefon w zupełności wystarczy. Zasady, bez których zdjęcia „po” nie dadzą się zestawić z „przed”:
1. **Ten sam kadr.** Zdjęcie „po” robimy z tego samego miejsca, na tej samej wysokości i w tym samym kierunku co „przed”. Najprościej: zapisać, z którego rogu i z jakiej wysokości.
2. **Po 2–4 kadry na pomieszczenie**: całość z rogu, drugi róg, jeden detal.
3. **Światło dzienne**, zasłony odsłonięte, górne światło zgaszone. Unikać południa z ostrym słońcem w oknie.
4. **Telefon poziomo**, obiektyw standardowy (nie szeroki „0,5”), aparat trzymany prosto, żeby linie pionowe zostały pionowe.
5. **Porządek przed zdjęciem „po”**: puste blaty, zwinięte kable, zasunięte szuflady, zdjęte magnesy z lodówki.
6. **Bez ludzi, bez zwierząt, bez rzeczy osobistych** — zdjęć, dokumentów, leków.
7. **Nie kasować zdjęć „przed”.** To one budują kontrast, choćby były brzydkie. Brzydkie „przed” jest zaletą.
8. **Zgoda właściciela na publikację** zbierana przy umowie, najlepiej pisemnie, z zaznaczeniem, że nie podajemy adresu.
9. Zdjęcia zrzucane do jednego folderu na realizację, nazwanego datą i ogólną lokalizacją (np. `2026-10_bialystok_2pok`).

## Co przygotowujemy po stronie CMS niezależnie od wyboru
Pola: tytuł, slug, kategoria, ogólna lokalizacja (dzielnica lub miasto, bez adresu), opcjonalny metraż, sytuacja wyjściowa, cel, zakres, przebieg, rezultat, galeria, pary przed/po z opisami, powiązane usługi, CTA, status publikacji. Plus przełącznik „rekord demonstracyjny”, który ukrywa pozycję w produkcji.

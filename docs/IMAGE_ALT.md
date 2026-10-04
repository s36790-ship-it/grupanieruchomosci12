# Zdjęcia — opisy alternatywne i status (wariant A)

Data: 2026-09-18. Dostarczone dwa komplety (A i B). Wybór ujęcie po ujęciu: `IMAGE_SELECTION.md`. Proporcje zgodne z briefem we wszystkich plikach. Rozdzielczość jest niższa niż zamawiana (1536×1024 zamiast 2000×1333, pas 2048×768 zamiast 2400×900) — wystarczy dla ekranów standardowych i dla telefonów, na dużych monitorach z wysokim DPI zdjęcie pełnoekranowe może być lekko miękkie. Do rozważenia ponowne wygenerowanie ujęć 1, 2 i 20 w większym rozmiarze.

Wszystkie pliki mają w CMS pole **pochodzenie = „grafika generowana – ilustracja”** i nie mogą być wiązane z kolekcją Realizacje.

| Plik | Opis alternatywny (do CMS) | Uwagi |
|---|---|---|
| hero-glowna.jpg | Jasny salon z dużym oknem, drewnianą podłogą i widokiem na miasto | Wstawione na stronie głównej |
| glowna-szeroki.jpg | Przedpokój z lustrem i komodą, w głębi salon z jadalnią i wyjściem na balkon | Wariant B, wstawione na stronie głównej |
| sprzedaz-hero.jpg | Salon przygotowany do prezentacji, z sofą i stolikiem przy oknie | |
| sprzedaz-detal.jpg | Drewniany stolik kawowy z wazonem i gałązką oliwną | |
| kupno-hero.jpg | Puste mieszkanie z kluczami na parapecie i otwartymi drzwiami do pokoju | |
| kupno-detal.jpg | Dłonie mierzące odległość miarką na rzucie mieszkania | Bez twarzy — zgodnie z zasadami |
| pod-klucz-hero.jpg | Wykończony salon z aneksem kuchennym i stołem przy oknie | |
| pod-klucz-proces.jpg | Próbki fornirów, płytek i farb na jasnym blacie | |
| pod-klucz-sypialnia.jpg | Sypialnia z lnianą pościelą i lampkami po obu stronach łóżka | |
| inwestycje-hero.jpg | Kamienica i nowy budynek mieszkalny przy tej samej ulicy | |
| inwestycje-wnetrze.jpg | Kompaktowe mieszkanie z aneksem kuchennym i stolikiem dla dwóch osób | |
| wartosc-hero.jpg | Pokój w trakcie odświeżania, ze złożoną folią malarską przy ścianie | |
| wartosc-detal.jpg | Gniazdko elektryczne i biała listwa przypodłogowa przy drewnianej podłodze | |
| szybka-sprzedaz-hero.jpg | Puste mieszkanie z balkonem i przejściem do sypialni | Ton spokojny, zgodnie z briefem |
| o-nas-hero.jpg | Biurko z rzutami mieszkań, próbkami materiałów i kubkiem kawy | |
| kontakt.jpg | Okrągły stół z krzesłami przy oknie, obok komoda i rośliny | Wariant B — na ścianie kadry ze zdjęciami domów, bez widoków miasta |
| lokalizacje-miasto.jpg | Osiedle bloków z zielenią i chodnikiem o zachodzie słońca | |
| lokalizacje-podmiejskie.jpg | Dom jednorodzinny z garażem i ogrodem za ogrodzeniem | |
| poradniki-domyslne.jpg | Otwarty notatnik i miarka na drewnianym stole, ujęcie z góry | |
| og-default.jpg | Salon z sofą przy oknie i dużą pustą ścianą po lewej stronie | Miejsce na tekst nakładany w kodzie, nie w grafice |

## Para przed/po (dodana 2026-09-29)

| Plik | Opis alternatywny | Uwagi |
|---|---|---|
| przedpo-pod-klucz-przed.jpg | Mieszkanie w stanie deweloperskim: szare ściany, wylewka i wyprowadzone instalacje | Zdjęcie poglądowe |
| przedpo-pod-klucz-po.jpg | To samo wnętrze po wykończeniu: salon z aneksem kuchennym, jadalnią i drewnianą podłogą | Zdjęcie poglądowe |

Para pokazuje **to samo wnętrze** z tego samego punktu: zgadza się położenie drzwi wejściowych, belka pod sufitem i proporcje pomieszczenia. Używana na `/mieszkanie-pod-klucz` w sekcji „Przed i po”, z widoczną adnotacją, że to zdjęcia poglądowe, a nie konkretna realizacja.

## Do zrobienia przy wdrożeniu
- Konwersja do AVIF/WebP + warianty responsywne w buildzie; oryginały trzymamy w repozytorium mediów.
- Zdjęcie na pierwszym ekranie: `fetchpriority="high"`, bez `loading="lazy"`; pozostałe leniwie.
- Punkt centrowania kadru (object-position) ustawiony osobno dla telefonu tam, gdzie kadr jest szeroki.

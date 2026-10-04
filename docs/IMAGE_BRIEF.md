# Brief na zdjęcia generowane (do modelu obrazów)

Status: **komplet 20 plików dostarczony (wariant A), proporcje zgodne**. Opisy alternatywne i uwagi: `IMAGE_ALT.md`.

Data: 2026-09-18. Dokument opisuje, jakich zdjęć potrzebuje serwis, jak mają wyglądać i jak je oznaczamy.

## 1. Zasady, których nie wolno złamać

1. **Zdjęcia generowane są materiałem ilustracyjnym.** Nie wolno ich używać jako realizacji firmy ani w parach „przed / po”. Te sekcje czekają na prawdziwe materiały klienta i do czasu ich otrzymania pozostają w CMS jako szkice.
2. W CMS każdy taki plik dostaje w polu **„pochodzenie”** wartość `grafika generowana – ilustracja` i nie może być powiązany z kolekcją Realizacje.
3. **Bez rozpoznawalnych twarzy i portretów.** Brief zabrania prezentacji pracowników, a wizerunek wygenerowanej osoby nie ma źródła, do którego moglibyśmy się odwołać. Ludzie tylko jako tło: sylwetka z oddali, dłonie, postać tyłem lub nieostra.
4. **Bez logotypów, szyldów, tablic, napisów i dokumentów z tekstem** — modele generują nieczytelne znaki, a my nie chcemy przypadkowych marek w kadrze.
5. **Bez rozpoznawalnych budynków i punktów charakterystycznych Białegostoku.** Nie udajemy konkretnych adresów. Architektura ma być typowa dla polskiego miasta średniej wielkości i polskiej wsi/podmiejskiej zabudowy.
6. Bez znaków wodnych, ramek, kolaży, tekstu na obrazie i efektu HDR.

## 2. Wspólny styl (wkleić do każdego promptu)

> Photorealistic architectural and interior photography, natural daylight, soft diffused light, calm and understated mood, Polish/Central European context, realistic materials (oak, matte white walls, light grey textiles, black steel details), muted palette of off-white, warm grey and deep navy with a single subtle warm brass accent, 35mm or 50mm lens look, f/4, sharp, tidy and uncluttered, no people's faces, no text, no logos, no watermark, editorial real-estate photography, shot on full-frame camera.

**Negative prompt:** text, letters, signage, logo, watermark, brand names, faces, portraits, crowds, fisheye, HDR, oversaturated colors, neon, gold kitsch, luxury cliché, marble everywhere, cluttered props, plastic look, CGI render, 3D render look, distorted furniture, warped perspective lines, extra limbs.

**Ważne technicznie:** pionowe linie muszą być pionowe (perspektywa jak z korekcją tilt-shift), wnętrza sprzątnięte, bez rzeczy osobistych, ale nie sterylne — jedna roślina, książka, koc.

## 3. Lista ujęć

Format zapisu: **`plik` — przeznaczenie — proporcje i minimalny rozmiar — treść kadru.**

| # | Plik | Gdzie | Proporcje / min. rozmiar | Treść kadru |
|---|---|---|---|---|
| 1 | `hero-glowna.jpg` | Strona główna, pierwszy ekran | 3:2, 2400×1600 | Jasny salon z dużym oknem, widok na miasto rozmyty w tle, poranne światło. Spokojnie, bez przepychu. Kadr z miejscem po lewej na tekst |
| 2 | `glowna-szeroki.jpg` | Strona główna, pas przed „Jak pracujemy” | 8:3, 2400×900 | Fragment mieszkania po odświeżeniu: korytarz i wejście do salonu, światło z boku |
| 3 | `sprzedaz-hero.jpg` | /sprzedaz-nieruchomosci | 3:2, 2000×1333 | Uporządkowany salon przygotowany do prezentacji: przewietrzony, neutralne dodatki, zasłony odsłonięte |
| 4 | `sprzedaz-detal.jpg` | /sprzedaz-nieruchomosci, sekcja przygotowania | 4:3, 1600×1200 | Detal: stolik, wazon z gałązką, złożony pled — home staging bez przesady |
| 5 | `kupno-hero.jpg` | /kupno-nieruchomosci | 3:2, 2000×1333 | Puste, jasne mieszkanie w trakcie oglądania: otwarte drzwi, światło z okna, klucze na parapecie |
| 6 | `kupno-detal.jpg` | /kupno-nieruchomosci, sekcja weryfikacji | 4:3, 1600×1200 | Dłonie nad rzutem mieszkania i miarką na stole (bez czytelnego tekstu na papierze) |
| 7 | `pod-klucz-hero.jpg` | /mieszkanie-pod-klucz | 3:2, 2000×1333 | Wykończony salon z aneksem: dąb, biel, czerń, dobrze zaprojektowane oświetlenie |
| 8 | `pod-klucz-proces.jpg` | /mieszkanie-pod-klucz, sekcja procesu | 4:3, 1600×1200 | Próbki materiałów: fornir dębowy, płytki, próbniki farb, ołówek na blacie |
| 9 | `pod-klucz-sypialnia.jpg` | /mieszkanie-pod-klucz, galeria | 3:2, 2000×1333 | Sypialnia w stanie gotowym do zamieszkania, pościel lniana, lampka nocna |
| 10 | `inwestycje-hero.jpg` | /inwestycje | 3:2, 2000×1333 | Kamienica i nowy budynek obok siebie w polskim mieście, późne popołudnie, ulica bez ludzi |
| 11 | `inwestycje-wnetrze.jpg` | /inwestycje, sekcja przygotowania pod wynajem | 4:3, 1600×1200 | Kompaktowe mieszkanie pod wynajem: funkcjonalne, trwałe materiały, nic ekstrawaganckiego |
| 12 | `wartosc-hero.jpg` | /zwiekszamy-wartosc | 3:2, 2000×1333 | Wnętrze w trakcie odświeżania: świeżo pomalowana ściana, folia malarska złożona w rogu, brak bałaganu |
| 13 | `wartosc-detal.jpg` | /zwiekszamy-wartosc | 4:3, 1600×1200 | Detal po pracach: nowe gniazdko i listwa przypodłogowa przy jasnej podłodze |
| 14 | `szybka-sprzedaz-hero.jpg` | /szybka-sprzedaz | 3:2, 2000×1333 | Spokojne, puste mieszkanie w pochmurny dzień. Ton wyciszony, bez dramatyzmu i bez pustki „po eksmisji” |
| 15 | `o-nas-hero.jpg` | /o-nas | 3:2, 2000×1333 | Biurko przy oknie: rzuty mieszkań, próbniki, kubek. Bez ludzi i bez twarzy |
| 16 | `kontakt.jpg` | /kontakt | 4:3, 1600×1200 | Wnętrze biura: stół, krzesła, rośliny, światło dzienne. Kameralnie, nie korporacyjnie |
| 17 | `lokalizacje-miasto.jpg` | Podstrony lokalizacyjne — miasto | 3:2, 2000×1333 | Osiedle bloków z lat 70.–90. z zielenią, typowe dla polskiego miasta, wczesny wieczór |
| 18 | `lokalizacje-podmiejskie.jpg` | Podstrony lokalizacyjne — gminy | 3:2, 2000×1333 | Dom jednorodzinny z ogrodem na obrzeżach, spokojna ulica, bez numerów i tablic |
| 19 | `poradniki-domyslne.jpg` | Poradniki bez własnego zdjęcia | 16:9, 1920×1080 | Jasne wnętrze z notatnikiem i miarką na stole, ujęcie z góry |
| 20 | `og-default.jpg` | Obraz do udostępnień (Open Graph) | 1,91:1, 1200×630 | Spokojne wnętrze, dużo jednolitej przestrzeni po lewej — na tej płaszczyźnie nałożymy tekst w kodzie, nie w grafice |

Wariant zapasowy: po 2–3 warianty każdego ujęcia, wybierzemy najlepszy.

## 4. Wymagania techniczne pod wydajność i SEO

- Dostarczyć **JPEG lub PNG w pełnej rozdzielczości**, bez kompresji „pod internet” — konwersję do AVIF/WebP i warianty responsywne robimy sami w buildzie.
- Proporcje muszą się zgadzać co do piksela z tabelą, żeby układ nie skakał (mamy zadeklarowane wymiary w HTML).
- Kadr z zapasem na krawędziach: na telefonie przycinamy do węższego kadru.
- Nazwy plików dokładnie jak w tabeli: małe litery, myślniki, bez polskich znaków.
- Bez tekstu w grafice — teksty na obrazie nie są indeksowane i psują wersje językowe.
- Każdy plik dostaje w CMS **opis alternatywny pisany po polsku, opisujący to, co widać** (np. „Jasny salon z dużym oknem i drewnianą podłogą”). Nie upychamy w nim fraz kluczowych — to szkodzi i jest niezgodne z funkcją tego pola.

## 4a. Para „przed / po” — jak ją wygenerować

Wśród dostarczonych 40 zdjęć **nie ma pary pokazującej to samo wnętrze**. Każde ujęcie powstawało osobno, więc zestawienie dwóch różnych pokojów jako „przed i po” byłoby wprowadzaniem w błąd.

Para do suwaka musi spełniać trzy warunki: **to samo pomieszczenie, ten sam punkt ustawienia aparatu, ta sama ogniskowa i kadr**. Zmienia się tylko stan wnętrza.

**Sposób pierwszy (zalecany):** prawdziwe zdjęcia klienta, zgodnie z protokołem w `REALIZACJE_PLAN.md`.

**Sposób drugi:** wygenerowana para poglądowa, oznaczona na stronie adnotacją „zdjęcia poglądowe”. Wygeneruj najpierw wariant „po”, a potem — korzystając z funkcji edycji tego samego obrazu — wariant „przed”, zmieniając wyłącznie stan wnętrza.

> **Po:** Photorealistic interior photo of a renovated Polish apartment living room, freshly painted white walls, new light oak flooring, white skirting boards, grey sofa, small round wooden coffee table, one plant, large window on the left with daylight, doorway on the right, camera at eye level 1.5 m, 35 mm lens, f/4, vertical lines straight, no people, no text, no logos. Aspect ratio 3:2.
>
> **Przed (ta sama scena):** the exact same room, same camera position, same framing and same lighting, but before renovation: yellowed and stained walls, worn scratched floor, old skirting boards, dated radiator, room empty except a folded painter's foil in the corner. Keep window, doorway and proportions identical.

Nazwy plików: `przedpo-salon-przed.jpg`, `przedpo-salon-po.jpg`. Ten sam rozmiar i te same proporcje.

**Gdzie to trafia:** w panelu, w usłudze „Jak zwiększamy wartość”, sekcja *Porównanie przed / po*. Przy zdjęciach generowanych zaznacz pole „Zdjęcia poglądowe” — na stronie pojawi się wtedy wyraźna adnotacja.

## 5. Gotowy prompt (przykład dla ujęcia 1)

> Photorealistic interior photography of a bright Polish apartment living room in the morning, large window with soft daylight, blurred view of a mid-size European city outside, oak floor, matte white walls, light grey sofa, one plant, tidy and uncluttered, calm understated mood, muted off-white and warm grey palette with a subtle deep navy accent, composition with generous empty space on the left side of the frame, 35mm lens, f/4, vertical lines perfectly straight, editorial real-estate photography, no people, no text, no logos, no watermark. Aspect ratio 3:2, high resolution.
>
> Negative: text, letters, signage, logo, watermark, faces, portraits, fisheye, HDR, oversaturated, neon, luxury cliché, cluttered props, CGI render, warped perspective.

Pozostałe prompty budujemy tak samo: opis z kolumny „treść kadru” + wspólny styl z sekcji 2 + proporcje z tabeli.

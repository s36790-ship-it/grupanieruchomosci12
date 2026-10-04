# Obserwacje z wyników wyszukiwania

Data: 2026-09-17. Narzędzie: wyszukiwarka dostępna w sesji Claude (nie Google z lokalizacją Białystok — wyniki orientacyjne). **Brak danych o wolumenach i trudności fraz** — nie były dostępne i nie zostały oszacowane.

| Zapytanie | Zaobserwowane typy wyników | Wniosek |
|---|---|---|
| mieszkanie pod klucz Białystok | głównie portale ogłoszeniowe (nieruchomosci-online, Otodom, OLX, szybko.pl, kazo), deweloper z pakietami wykończeniowymi, firmy wykończeniowe | Intencja przeważnie „kupię gotowe mieszkanie” lub „wykończenie”. Strona usługi musi od pierwszego zdania wyjaśniać model „znajdziemy + zaprojektujemy + wykończymy”. Warto celować też w warianty (rynek wtórny + remont, wykończenie od dewelopera). |
| home staging Białystok | katalogi wykonawców (Muratordom, Oferteo), projektantki wnętrz, pojedyncze biuro nieruchomości, strona szkoły | Fraza usługowa z lokalnymi konkurentami-projektantami. Przewaga do pokazania: home staging jako element strategii sprzedaży, nie osobna dekoracja. |
| sprzedaż mieszkania Białystok pośrednik | portale z ogłoszeniami, strony biur nieruchomości (m.in. Area, DrBroker, Arka) | Mieszana intencja (kupujący vs. sprzedający). Strona sprzedaży powinna jasno adresować właściciela. |
| szybka sprzedaż mieszkania Białystok | portale, rynek pierwotny, serwis skupu z komunikacją „gotówka szybko” | Nisza zdominowana przez skupy. Spokojna, uczciwa komunikacja scenariuszy jest wyróżnikiem — zgodnie z briefem bez obietnic terminu i ceny. |

Wnioski dla architektury:
- Strony usługowe celują w ogólne frazy „[usługa] Białystok”; strony lokalne w Białymstoku — w **węższe intencje** (typ nieruchomości, sytuacja właściciela), żeby nie konkurowały ze stronami usług.
- Plan w `SEO_MAP.csv` to **hipoteza** do weryfikacji w narzędziu z danymi (np. Planer słów kluczowych / Search Console po starcie).

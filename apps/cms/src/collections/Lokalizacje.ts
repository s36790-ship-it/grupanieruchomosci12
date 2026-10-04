import type { CollectionConfig } from 'payload'
import { poleFaq, poleSeo, poleWeryfikacji, opublikowaneLubZalogowany, zalogowany } from '../pola/wspolne'

export const Lokalizacje: CollectionConfig = {
  slug: 'lokalizacje',
  labels: { singular: 'Podstrona lokalizacyjna', plural: 'Podstrony lokalizacyjne' },
  admin: {
    useAsTitle: 'tytul',
    group: 'Treści',
    defaultColumns: ['tytul', 'miejscowosc', 'usluga', 'stanWeryfikacji', '_status'],
    description: '40 podstron pod lokalne wyszukiwania. Publikujemy wyłącznie treści zaakceptowane przez klienta.',
  },
  versions: { drafts: true },
  access: { read: opublikowaneLubZalogowany, create: zalogowany, update: zalogowany, delete: zalogowany },
  fields: [
    { name: 'tytul', type: 'text', label: 'Nagłówek (H1)', required: true },
    { name: 'adres', type: 'text', label: 'Adres strony (slug)', required: true, unique: true },
    { name: 'miejscowosc', type: 'text', label: 'Miejscowość lub osiedle', required: true },
    { name: 'usluga', type: 'relationship', relationTo: 'uslugi', label: 'Której usługi dotyczy', required: true },
    {
      name: 'intencja',
      type: 'text',
      label: 'Intencja użytkownika',
      admin: { description: 'Np. właściciel mieszkania chcący sprzedać. Pomaga pisać pod konkretną potrzebę.' },
    },
    { name: 'glownaFraza', type: 'text', label: 'Główna fraza', admin: { position: 'sidebar' } },
    {
      name: 'tresc',
      type: 'array',
      label: 'Treść strony — akapity',
      labels: { singular: 'Akapit', plural: 'Akapity' },
      minRows: 1,
      fields: [{ name: 'tresc', type: 'textarea', label: 'Treść akapitu', required: true }],
    },
    {
      name: 'proces',
      type: 'array',
      label: 'Przebieg — kroki',
      labels: { singular: 'Krok', plural: 'Kroki' },
      fields: [
        { name: 'nazwa', type: 'text', label: 'Nazwa kroku', required: true },
        { name: 'opis', type: 'textarea', label: 'Opis', required: true },
      ],
    },
    {
      name: 'bloki',
      type: 'blocks',
      label: 'Dodatkowe sekcje',
      admin: {
        description:
          'Wybierz sekcje, które pasują do tej strony. Różne strony powinny mieć różny układ — to lepiej służy czytelnikowi i wyszukiwarce niż identyczny szablon.',
      },
      blocks: [
        {
          slug: 'lista',
          labels: { singular: 'Lista kontrolna', plural: 'Listy kontrolne' },
          fields: [
            { name: 'tytul', type: 'text', label: 'Nagłówek', required: true },
            { name: 'wstep', type: 'textarea', label: 'Zdanie wprowadzające' },
            {
              name: 'punkty',
              type: 'array',
              label: 'Punkty',
              minRows: 2,
              fields: [{ name: 'tresc', type: 'text', label: 'Punkt', required: true }],
            },
          ],
        },
        {
          slug: 'porownanie',
          labels: { singular: 'Porównanie', plural: 'Porównania' },
          fields: [
            { name: 'tytul', type: 'text', label: 'Nagłówek', required: true },
            { name: 'kolumnaA', type: 'text', label: 'Nazwa pierwszej kolumny', required: true },
            { name: 'kolumnaB', type: 'text', label: 'Nazwa drugiej kolumny', required: true },
            {
              name: 'wiersze',
              type: 'array',
              label: 'Wiersze',
              minRows: 2,
              fields: [
                { name: 'cecha', type: 'text', label: 'Czego dotyczy', required: true },
                { name: 'a', type: 'text', label: 'Pierwsza kolumna', required: true },
                { name: 'b', type: 'text', label: 'Druga kolumna', required: true },
              ],
            },
            { name: 'podsumowanie', type: 'textarea', label: 'Wniosek pod tabelą' },
          ],
        },
        {
          slug: 'uwaga',
          labels: { singular: 'Wyróżniona uwaga', plural: 'Wyróżnione uwagi' },
          fields: [
            { name: 'tytul', type: 'text', label: 'Nagłówek', required: true },
            { name: 'tresc', type: 'textarea', label: 'Treść', required: true },
          ],
        },
      ],
    },
    poleFaq,
    { name: 'powiazaneUslugi', type: 'relationship', relationTo: 'uslugi', hasMany: true, label: 'Powiązane usługi' },
    poleWeryfikacji,
    poleSeo,
  ],
}

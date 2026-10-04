import type { CollectionConfig } from 'payload'
import { poleSeo, opublikowaneLubZalogowany, zalogowany } from '../pola/wspolne'

export const Realizacje: CollectionConfig = {
  slug: 'realizacje',
  labels: { singular: 'Realizacja', plural: 'Realizacje' },
  admin: {
    useAsTitle: 'tytul',
    defaultColumns: ['tytul', 'kategoria', 'demonstracyjna', '_status'],
    group: 'Treści',
    description:
      'Wykonane prace. Sekcja i strona realizacji włączają się automatycznie po opublikowaniu pierwszej pozycji.',
  },
  versions: { drafts: true },
  access: { read: opublikowaneLubZalogowany, create: zalogowany, update: zalogowany, delete: zalogowany },
  fields: [
    { name: 'tytul', type: 'text', label: 'Tytuł', required: true },
    { name: 'adres', type: 'text', label: 'Adres strony (slug)', required: true, unique: true },
    {
      name: 'kategoria',
      type: 'select',
      label: 'Kategoria',
      required: true,
      options: [
        { label: 'Sprzedaż', value: 'sprzedaz' },
        { label: 'Mieszkanie pod klucz', value: 'pod-klucz' },
        { label: 'Inwestycja', value: 'inwestycja' },
        { label: 'Home staging', value: 'home-staging' },
        { label: 'Remont i wykończenie', value: 'remont' },
      ],
    },
    {
      name: 'lokalizacja',
      type: 'text',
      label: 'Ogólna lokalizacja',
      admin: { description: 'Dzielnica lub miasto. Nie podajemy dokładnego adresu nieruchomości.' },
    },
    { name: 'metraz', type: 'number', label: 'Metraż (m²)' },
    { name: 'sytuacja', type: 'textarea', label: 'Sytuacja wyjściowa', required: true },
    { name: 'cel', type: 'textarea', label: 'Cel klienta' },
    { name: 'zakres', type: 'textarea', label: 'Zakres prac' },
    { name: 'przebieg', type: 'richText', label: 'Przebieg' },
    { name: 'rezultat', type: 'textarea', label: 'Rezultat', required: true },
    {
      name: 'przedPo',
      type: 'array',
      label: 'Pary zdjęć przed / po',
      labels: { singular: 'Para zdjęć', plural: 'Pary zdjęć' },
      fields: [
        { name: 'przed', type: 'upload', relationTo: 'media', label: 'Przed', required: true },
        { name: 'po', type: 'upload', relationTo: 'media', label: 'Po', required: true },
        { name: 'opis', type: 'text', label: 'Co pokazuje ta para' },
      ],
    },
    { name: 'galeria', type: 'upload', relationTo: 'media', hasMany: true, label: 'Galeria' },
    { name: 'powiazaneUslugi', type: 'relationship', relationTo: 'uslugi', hasMany: true, label: 'Powiązane usługi' },
    {
      name: 'demonstracyjna',
      type: 'checkbox',
      label: 'Rekord demonstracyjny (ukryty w produkcji)',
      defaultValue: false,
      admin: { position: 'sidebar', description: 'Zaznacz, jeśli to przykład pokazowy, a nie prawdziwa realizacja.' },
    },
    {
      name: 'zgodaWlasciciela',
      type: 'checkbox',
      label: 'Mamy zgodę właściciela na publikację',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    poleSeo,
  ],
}

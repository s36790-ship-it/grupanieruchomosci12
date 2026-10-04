import type { CollectionConfig } from 'payload'
import { poleSeo, opublikowaneLubZalogowany, zalogowany } from '../pola/wspolne'

export const Oferty: CollectionConfig = {
  slug: 'oferty',
  labels: { singular: 'Oferta', plural: 'Oferty' },
  admin: {
    useAsTitle: 'tytul',
    group: 'Treści',
    defaultColumns: ['tytul', 'rodzaj', 'cena', 'statusOferty', '_status'],
    description: 'Podstawowa prezentacja nieruchomości. To nie jest portal ogłoszeniowy.',
  },
  versions: { drafts: true },
  access: { read: opublikowaneLubZalogowany, create: zalogowany, update: zalogowany, delete: zalogowany },
  fields: [
    { name: 'tytul', type: 'text', label: 'Tytuł oferty', required: true },
    { name: 'adres', type: 'text', label: 'Adres strony (slug)', required: true, unique: true },
    {
      name: 'rodzaj',
      type: 'select',
      label: 'Rodzaj nieruchomości',
      required: true,
      options: [
        { label: 'Mieszkanie', value: 'mieszkanie' },
        { label: 'Dom', value: 'dom' },
        { label: 'Działka', value: 'dzialka' },
        { label: 'Lokal użytkowy', value: 'lokal' },
      ],
    },
    { name: 'lokalizacja', type: 'text', label: 'Lokalizacja (dzielnica / miejscowość)', required: true },
    { name: 'metraz', type: 'number', label: 'Metraż (m²)' },
    { name: 'pokoje', type: 'number', label: 'Liczba pokoi' },
    { name: 'pietro', type: 'text', label: 'Piętro' },
    { name: 'cena', type: 'number', label: 'Cena (zł)', admin: { description: 'Zostaw puste, jeśli cena nie jest podawana.' } },
    { name: 'opis', type: 'richText', label: 'Opis' },
    { name: 'zdjecia', type: 'upload', relationTo: 'media', hasMany: true, label: 'Zdjęcia' },
    {
      name: 'statusOferty',
      type: 'select',
      label: 'Status oferty',
      defaultValue: 'aktywna',
      options: [
        { label: 'Aktywna', value: 'aktywna' },
        { label: 'Rezerwacja', value: 'rezerwacja' },
        { label: 'Sprzedana', value: 'sprzedana' },
        { label: 'Wycofana', value: 'wycofana' },
      ],
      admin: { position: 'sidebar' },
    },
    poleSeo,
  ],
}

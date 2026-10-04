import type { CollectionConfig } from 'payload'
import { poleFaq, poleSeo, opublikowaneLubZalogowany, zalogowany } from '../pola/wspolne'

export const Poradniki: CollectionConfig = {
  slug: 'poradniki',
  labels: { singular: 'Poradnik', plural: 'Poradniki' },
  admin: { useAsTitle: 'tytul', group: 'Treści', defaultColumns: ['tytul', 'dataPublikacji', '_status'] },
  versions: { drafts: true },
  access: { read: opublikowaneLubZalogowany, create: zalogowany, update: zalogowany, delete: zalogowany },
  fields: [
    { name: 'tytul', type: 'text', label: 'Tytuł', required: true },
    { name: 'adres', type: 'text', label: 'Adres strony (slug)', required: true, unique: true },
    { name: 'lead', type: 'textarea', label: 'Zajawka', required: true },
    { name: 'zdjecie', type: 'upload', relationTo: 'media', label: 'Zdjęcie' },
    {
      name: 'sekcje',
      type: 'array',
      label: 'Treść — sekcje',
      labels: { singular: 'Sekcja', plural: 'Sekcje' },
      minRows: 1,
      admin: { description: 'Każda sekcja ma nagłówek (H2) i akapity. Tak tekst dobrze się czyta i indeksuje.' },
      fields: [
        { name: 'naglowek', type: 'text', label: 'Nagłówek sekcji', required: true },
        {
          name: 'akapity',
          type: 'array',
          label: 'Akapity',
          minRows: 1,
          fields: [{ name: 'tresc', type: 'textarea', label: 'Treść akapitu', required: true }],
        },
        {
          name: 'punkty',
          type: 'array',
          label: 'Lista (opcjonalnie)',
          fields: [{ name: 'tresc', type: 'text', label: 'Punkt', required: true }],
        },
      ],
    },
    poleFaq,
    {
      name: 'powiazaneUslugi',
      type: 'relationship',
      relationTo: 'uslugi',
      hasMany: true,
      label: 'Powiązane usługi',
      admin: { description: 'Poradnik pojawi się jako lektura na stronach tych usług i ich stronach lokalnych.' },
    },
    {
      name: 'autor',
      type: 'text',
      label: 'Autor',
      admin: { description: 'Uzupełnij tylko wtedy, gdy autor potwierdził podpisanie się pod tekstem.' },
    },
    { name: 'dataPublikacji', type: 'date', label: 'Data publikacji' },
    {
      name: 'kategorie',
      type: 'select',
      hasMany: true,
      label: 'Kategorie',
      options: [
        { label: 'Sprzedaż', value: 'sprzedaz' },
        { label: 'Kupno', value: 'kupno' },
        { label: 'Wykończenie i remont', value: 'remont' },
        { label: 'Inwestowanie', value: 'inwestowanie' },
        { label: 'Formalności', value: 'formalnosci' },
      ],
    },
    poleSeo,
  ],
}

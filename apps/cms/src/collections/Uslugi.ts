import type { CollectionConfig } from 'payload'
import { poleCta, poleFaq, poleSeo, opublikowaneLubZalogowany, zalogowany } from '../pola/wspolne'

export const Uslugi: CollectionConfig = {
  slug: 'uslugi',
  labels: { singular: 'Usługa', plural: 'Usługi' },
  admin: {
    useAsTitle: 'nazwa',
    defaultColumns: ['nazwa', 'adres', '_status', 'updatedAt'],
    group: 'Treści',
    description: 'Podstrony usługowe: sprzedaż, kupno, mieszkanie pod klucz, inwestycje i pozostałe.',
  },
  versions: { drafts: true },
  access: { read: opublikowaneLubZalogowany, create: zalogowany, update: zalogowany, delete: zalogowany },
  fields: [
    { name: 'nazwa', type: 'text', label: 'Nazwa usługi', required: true },
    {
      name: 'adres',
      type: 'text',
      label: 'Adres strony (slug)',
      required: true,
      unique: true,
      admin: { description: 'Np. sprzedaz-nieruchomosci. Bez polskich znaków i spacji. Zmiana adresu wymaga przekierowania.' },
    },
    { name: 'naglowek', type: 'text', label: 'Nagłówek na stronie (H1)', required: true },
    { name: 'lead', type: 'textarea', label: 'Zdanie wprowadzające', required: true },
    { name: 'zdjecie', type: 'upload', relationTo: 'media', label: 'Zdjęcie główne' },
    {
      name: 'wstep',
      type: 'array',
      label: 'Wstęp — akapity',
      labels: { singular: 'Akapit', plural: 'Akapity' },
      fields: [{ name: 'tresc', type: 'textarea', label: 'Treść akapitu', required: true }],
    },
    {
      name: 'proces',
      type: 'array',
      label: 'Przebieg usługi — kroki',
      labels: { singular: 'Krok', plural: 'Kroki' },
      fields: [
        { name: 'nazwa', type: 'text', label: 'Nazwa kroku', required: true },
        { name: 'opis', type: 'textarea', label: 'Opis', required: true },
      ],
    },
    {
      name: 'zakres',
      type: 'array',
      label: 'Lista wypunktowana (zakres, zasady, czego nie robimy)',
      labels: { singular: 'Punkt', plural: 'Punkty' },
      fields: [{ name: 'tresc', type: 'text', label: 'Treść', required: true }],
    },
    { name: 'uwaga', type: 'textarea', label: 'Wyróżniona uwaga' },
    {
      name: 'przedPo',
      type: 'group',
      label: 'Porównanie przed / po',
      admin: { description: 'Dwa zdjęcia TEGO SAMEGO wnętrza, z tego samego miejsca. Bez pary zostaw puste.' },
      fields: [
        { name: 'przed', type: 'upload', relationTo: 'media', label: 'Zdjęcie „przed”' },
        { name: 'po', type: 'upload', relationTo: 'media', label: 'Zdjęcie „po”' },
        { name: 'opis', type: 'text', label: 'Podpis pod porównaniem' },
        {
          name: 'pogladowe',
          type: 'checkbox',
          label: 'Zdjęcia poglądowe (nie konkretna realizacja)',
          defaultValue: false,
          admin: { description: 'Zaznacz przy zdjęciach ilustracyjnych — na stronie pojawi się wyraźna adnotacja.' },
        },
      ],
    },
    poleFaq,
    {
      name: 'powiazaneUslugi',
      type: 'relationship',
      relationTo: 'uslugi',
      hasMany: true,
      label: 'Powiązane usługi („Co dalej”)',
    },
    poleCta,
    poleSeo,
  ],
}

import type { CollectionConfig } from 'payload'
import { zalogowany } from '../pola/wspolne'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Plik', plural: 'Media' },
  admin: { group: 'Treści', description: 'Zdjęcia i pliki używane na stronie.' },
  access: { read: () => true, create: zalogowany, update: zalogowany, delete: zalogowany },
  upload: {
    mimeTypes: ['image/*', 'application/pdf'],
    imageSizes: [
      { name: 'male', width: 640, height: undefined, position: 'centre' },
      { name: 'srednie', width: 1280, height: undefined, position: 'centre' },
      { name: 'duze', width: 2000, height: undefined, position: 'centre' },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Opis alternatywny',
      required: true,
      admin: { description: 'Opisz, co widać na zdjęciu. Potrzebne osobom niewidomym i wyszukiwarce.' },
    },
    { name: 'podpis', type: 'text', label: 'Podpis pod zdjęciem' },
    {
      name: 'pochodzenie',
      type: 'select',
      label: 'Pochodzenie pliku',
      defaultValue: 'klient',
      options: [
        { label: 'Materiał klienta', value: 'klient' },
        { label: 'Zdjęcie ilustracyjne', value: 'ilustracja' },
        { label: 'Grafika generowana — ilustracja', value: 'generowane' },
        { label: 'Licencja zewnętrzna', value: 'licencja' },
      ],
      admin: { description: 'Zdjęć ilustracyjnych i generowanych nie wolno używać jako realizacji.' },
    },
    { name: 'prawa', type: 'text', label: 'Informacja o prawach / autor' },
  ],
}

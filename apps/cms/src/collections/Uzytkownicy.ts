import type { CollectionConfig } from 'payload'
import { administrator } from '../pola/wspolne'

export const Uzytkownicy: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Użytkownik', plural: 'Użytkownicy' },
  admin: { useAsTitle: 'email', group: 'Ustawienia', description: 'Konta dostępu do panelu.' },
  auth: true,
  access: {
    create: administrator,
    delete: administrator,
    update: ({ req, id }) => administrator({ req }) || req.user?.id === id,
  },
  fields: [
    { name: 'imie', type: 'text', label: 'Imię i nazwisko' },
    {
      name: 'rola',
      type: 'select',
      label: 'Rola',
      required: true,
      defaultValue: 'redaktor',
      access: { update: administrator },
      options: [
        { label: 'Administrator — konta i ustawienia', value: 'administrator' },
        { label: 'Redaktor — treści', value: 'redaktor' },
      ],
    },
  ],
}

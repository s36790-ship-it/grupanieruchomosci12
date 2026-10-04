import type { GlobalConfig } from 'payload'
import { administrator, zalogowany } from '../pola/wspolne'

export const Ustawienia: GlobalConfig = {
  slug: 'ustawienia',
  label: 'Ustawienia strony',
  admin: { group: 'Ustawienia', description: 'Dane firmy, kontakt i stopka — widoczne na każdej podstronie.' },
  access: { read: () => true, update: zalogowany },
  fields: [
    {
      type: 'collapsible',
      label: 'Dane firmy',
      fields: [
        { name: 'nazwa', type: 'text', label: 'Nazwa marki', defaultValue: 'Grupa Nieruchomości' },
        { name: 'nazwaPrawna', type: 'text', label: 'Nazwa prawna' },
        { name: 'nip', type: 'text', label: 'NIP' },
        { name: 'krs', type: 'text', label: 'KRS' },
        { name: 'adresSiedziby', type: 'textarea', label: 'Adres siedziby' },
        { name: 'adresBiura', type: 'textarea', label: 'Adres biura' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Kontakt',
      fields: [
        { name: 'telefon', type: 'text', label: 'Telefon' },
        { name: 'email', type: 'email', label: 'E-mail' },
        { name: 'godziny', type: 'text', label: 'Godziny pracy' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Partnerstwo',
      fields: [
        { name: 'partnerNazwa', type: 'text', label: 'Oznaczenie partnerstwa', defaultValue: 'Autoryzowany Partner Zboralscy Group' },
        { name: 'partnerOpis', type: 'text', label: 'Dopisek pod oznaczeniem' },
        { name: 'partnerZnak', type: 'upload', relationTo: 'media', label: 'Znak partnera' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Analityka i zgody',
      fields: [
        { name: 'ga4', type: 'text', label: 'Identyfikator GA4', admin: { description: 'Puste = analityka wyłączona.' } },
        { name: 'gtm', type: 'text', label: 'Identyfikator GTM' },
        { name: 'banerZgod', type: 'checkbox', label: 'Pokazuj baner zgód', defaultValue: true },
      ],
      access: { update: administrator },
    },
  ],
}

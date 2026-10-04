import type { CollectionConfig } from 'payload'
import { zalogowany, administrator } from '../pola/wspolne'

/**
 * Zgłoszenia z formularzy. Brak odczytu publicznego — dane osobowe.
 * Zapis wyłącznie przez serwerowy endpoint strony (klucz API po stronie serwera).
 */
export const Zapytania: CollectionConfig = {
  slug: 'zapytania',
  labels: { singular: 'Zapytanie', plural: 'Zapytania' },
  admin: {
    useAsTitle: 'kontakt',
    group: 'Zgłoszenia',
    defaultColumns: ['kontakt', 'usluga', 'statusObslugi', 'createdAt'],
    description: 'Zgłoszenia z formularzy. Zawierają dane osobowe — nie eksportuj ich poza uzgodnione cele.',
  },
  access: { read: zalogowany, create: zalogowany, update: zalogowany, delete: administrator },
  fields: [
    { name: 'typ', type: 'select', label: 'Rodzaj zgłoszenia', options: [
      { label: 'Pytanie', value: 'pytanie' },
      { label: 'Umówienie spotkania', value: 'spotkanie' },
    ] },
    { name: 'usluga', type: 'text', label: 'Usługa' },
    { name: 'sciezka', type: 'text', label: 'Podstrona źródłowa' },
    { name: 'imie', type: 'text', label: 'Imię' },
    { name: 'kontakt', type: 'text', label: 'Telefon lub e-mail', required: true },
    { name: 'termin', type: 'date', label: 'Preferowany termin' },
    { name: 'forma', type: 'text', label: 'Forma spotkania' },
    { name: 'wiadomosc', type: 'textarea', label: 'Wiadomość' },
    { name: 'kampania', type: 'text', label: 'Kampania (UTM)', admin: { readOnly: true } },
    {
      name: 'statusObslugi',
      type: 'select',
      label: 'Status obsługi',
      defaultValue: 'nowe',
      options: [
        { label: 'Nowe', value: 'nowe' },
        { label: 'W kontakcie', value: 'w-kontakcie' },
        { label: 'Umówione spotkanie', value: 'spotkanie' },
        { label: 'Zamknięte', value: 'zamkniete' },
      ],
      admin: { position: 'sidebar' },
    },
    { name: 'notatka', type: 'textarea', label: 'Notatka wewnętrzna' },
  ],
}

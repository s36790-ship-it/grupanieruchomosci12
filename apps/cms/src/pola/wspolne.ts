import type { Field } from 'payload'

/** Grupa pól SEO — te same na każdej stronie publicznej. */
export const poleSeo: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  admin: { description: 'Tytuł i opis widoczne w wynikach wyszukiwania.' },
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Tytuł w Google (title)',
      maxLength: 70,
      admin: { description: 'Najlepiej 50–60 znaków. Musi być inny na każdej podstronie.' },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Opis w Google (description)',
      maxLength: 180,
      admin: { description: 'Najlepiej 140–160 znaków. Zachęć do kliknięcia, nie powtarzaj tytułu.' },
    },
    {
      name: 'niePokazujWGoogle',
      type: 'checkbox',
      label: 'Nie pokazuj tej strony w Google (noindex)',
      defaultValue: false,
    },
  ],
}

/** Pole statusu weryfikacji — używane tam, gdzie treść wymaga potwierdzenia przez klienta. */
export const poleWeryfikacji: Field = {
  name: 'stanWeryfikacji',
  type: 'select',
  label: 'Stan weryfikacji treści',
  defaultValue: 'propozycja',
  options: [
    { label: 'Propozycja — do sprawdzenia', value: 'propozycja' },
    { label: 'Do poprawy', value: 'do-poprawy' },
    { label: 'Zaakceptowana', value: 'zaakceptowana' },
  ],
  admin: {
    position: 'sidebar',
    description: 'Publikujemy wyłącznie treści zaakceptowane.',
  },
}

/** Pole CTA — powtarzalny blok „przycisk + tekst”. */
export const poleCta: Field = {
  name: 'cta',
  type: 'group',
  label: 'Przycisk zachęty (CTA)',
  fields: [
    { name: 'tytul', type: 'text', label: 'Nagłówek nad przyciskiem' },
    { name: 'opis', type: 'textarea', label: 'Krótki tekst' },
    { name: 'etykieta', type: 'text', label: 'Napis na przycisku', defaultValue: 'Porozmawiajmy' },
    { name: 'adres', type: 'text', label: 'Dokąd prowadzi', defaultValue: '/kontakt' },
  ],
}

/** Sekcja pytań i odpowiedzi. */
export const poleFaq: Field = {
  name: 'faq',
  type: 'array',
  label: 'Pytania i odpowiedzi (FAQ)',
  labels: { singular: 'Pytanie', plural: 'Pytania' },
  admin: { description: 'Widoczne na stronie i przekazywane do Google jako dane strukturalne.' },
  fields: [
    { name: 'pytanie', type: 'text', label: 'Pytanie', required: true },
    { name: 'odpowiedz', type: 'textarea', label: 'Odpowiedź', required: true },
  ],
}

export const zalogowany = ({ req }: any) => Boolean(req.user)
export const administrator = ({ req }: any) => req.user?.rola === 'administrator'
export const opublikowaneLubZalogowany = ({ req }: any) => {
  if (req.user) return true
  return { _status: { equals: 'published' } }
}

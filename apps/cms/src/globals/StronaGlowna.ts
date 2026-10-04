import type { GlobalConfig } from 'payload'
import { zalogowany } from '../pola/wspolne'

export const StronaGlowna: GlobalConfig = {
  slug: 'strona-glowna',
  label: 'Strona główna',
  admin: { group: 'Treści', description: 'Wszystkie teksty ze strony głównej — sekcja po sekcji.' },
  access: { read: () => true, update: zalogowany },
  fields: [
    {
      type: 'collapsible',
      label: 'Pierwszy ekran',
      fields: [
        { name: 'haslo', type: 'text', label: 'Hasło (H1)', required: true },
        { name: 'lead', type: 'textarea', label: 'Tekst pod hasłem', required: true },
        { name: 'ctaGlowne', type: 'text', label: 'Napis na przycisku' },
        { name: 'zdjecie', type: 'upload', relationTo: 'media', label: 'Zdjęcie główne' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Cztery ścieżki',
      fields: [
        { name: 'sciezkiTytul', type: 'text', label: 'Nagłówek sekcji' },
        {
          name: 'sciezki',
          type: 'array',
          label: 'Ścieżki',
          labels: { singular: 'Ścieżka', plural: 'Ścieżki' },
          maxRows: 4,
          fields: [
            { name: 'tytul', type: 'text', label: 'Nagłówek', required: true },
            { name: 'opis', type: 'textarea', label: 'Krótka korzyść', required: true },
            { name: 'etykietaLinku', type: 'text', label: 'Napis linku', required: true },
            { name: 'adres', type: 'text', label: 'Dokąd prowadzi', required: true },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Jak zwiększamy wartość',
      fields: [
        { name: 'wartoscTytul', type: 'text', label: 'Nagłówek sekcji' },
        { name: 'wartoscLead', type: 'textarea', label: 'Tekst wprowadzający' },
        {
          name: 'dzialania',
          type: 'array',
          label: 'Działania',
          fields: [
            { name: 'nazwa', type: 'text', label: 'Nazwa', required: true },
            { name: 'opis', type: 'text', label: 'Opis', required: true },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Sekcja przewijana — kroki decyzji',
      fields: [
        { name: 'decyzjaTytul', type: 'text', label: 'Nagłówek sekcji' },
        { name: 'decyzjaLead', type: 'textarea', label: 'Tekst wprowadzający' },
        {
          name: 'decyzja',
          type: 'array',
          label: 'Kroki',
          fields: [
            { name: 'nazwa', type: 'text', label: 'Nazwa kroku', required: true },
            { name: 'opis', type: 'textarea', label: 'Opis', required: true },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Jak wygląda współpraca',
      fields: [
        { name: 'modelTytul', type: 'text', label: 'Nagłówek sekcji' },
        { name: 'modelLead', type: 'textarea', label: 'Tekst wprowadzający' },
        {
          name: 'model',
          type: 'array',
          label: 'Usługi w przełączniku',
          fields: [
            { name: 'etykieta', type: 'text', label: 'Nazwa na przycisku', required: true },
            {
              name: 'etapy',
              type: 'array',
              label: 'Etapy',
              maxRows: 4,
              fields: [
                { name: 'nazwa', type: 'text', label: 'Etap', required: true },
                { name: 'opis', type: 'textarea', label: 'Opis', required: true },
              ],
            },
          ],
        },
        { name: 'modelNota', type: 'text', label: 'Uwaga pod etapami' },
      ],
    },
    {
      type: 'collapsible',
      label: 'Jak pracujemy',
      fields: [
        { name: 'pracujemyTytul', type: 'text', label: 'Nagłówek sekcji' },
        { name: 'pracujemyZdjecie', type: 'upload', relationTo: 'media', label: 'Zdjęcie szerokie' },
        {
          name: 'zasady',
          type: 'array',
          label: 'Zasady',
          fields: [
            { name: 'tytul', type: 'text', label: 'Nagłówek', required: true },
            { name: 'opis', type: 'textarea', label: 'Opis', required: true },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Pas bezpłatnej wyceny i kontakt',
      fields: [
        { name: 'wycenaHaslo', type: 'text', label: 'Hasło', defaultValue: 'Napisz! A my wycenimy!' },
        { name: 'wycenaOpis', type: 'textarea', label: 'Tekst pod hasłem' },
        { name: 'kontaktTytul', type: 'text', label: 'Nagłówek sekcji kontaktu' },
        { name: 'kontaktOpis', type: 'textarea', label: 'Tekst przy formularzu' },
        { name: 'kontaktSzybka', type: 'text', label: 'Dyskretna linia o szybkiej sprzedaży' },
      ],
    },
  ],
}

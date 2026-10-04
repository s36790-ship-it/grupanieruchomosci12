import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { pl } from '@payloadcms/translations/languages/pl'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Uzytkownicy } from './collections/Uzytkownicy'
import { Media } from './collections/Media'
import { Uslugi } from './collections/Uslugi'
import { Realizacje } from './collections/Realizacje'
import { Poradniki } from './collections/Poradniki'
import { Oferty } from './collections/Oferty'
import { Lokalizacje } from './collections/Lokalizacje'
import { Zapytania } from './collections/Zapytania'
import { Ustawienia } from './globals/Ustawienia'
import { zapytanieEndpoint } from './endpoints/zapytanie'
import { StronaGlowna } from './globals/StronaGlowna'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  routes: { admin: '/panel' },
  admin: {
    user: Uzytkownicy.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: ' — Grupa Nieruchomości',
    },
  },
  // Panel po polsku — klient nie widzi angielskich etykiet.
  i18n: { fallbackLanguage: 'pl', supportedLanguages: { pl } },
  collections: [Uslugi, Lokalizacje, Realizacje, Poradniki, Oferty, Media, Zapytania, Uzytkownicy],
  globals: [StronaGlowna, Ustawienia],
  endpoints: [zapytanieEndpoint],
  // Formularz na stronie i podgląd lokalny muszą móc wysyłać zgłoszenia.
  cors: [
    'http://localhost:8080',
    'http://localhost:4321',
    'https://grupa-nieruchomosci.pl',
    'https://www.grupa-nieruchomosci.pl',
  ],
  csrf: ['http://localhost:8080', 'http://localhost:4321', 'https://grupa-nieruchomosci.pl'],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL || '' } }),
  sharp,
  plugins: [],
})

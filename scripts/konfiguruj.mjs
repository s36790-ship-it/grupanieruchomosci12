/**
 * Przygotowuje apps/cms/.env: kopiuje wzór i generuje PAYLOAD_SECRET.
 * Uruchomienie: npm run konfiguruj
 */
import { existsSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { randomBytes } from 'node:crypto';

const PLIK = 'apps/cms/.env';
const WZOR = 'apps/cms/.env.example';

if (!existsSync(PLIK)) {
  copyFileSync(WZOR, PLIK);
  console.log(`Utworzono ${PLIK} na podstawie wzoru.`);
}

let tresc = readFileSync(PLIK, 'utf8');
const wartosc = (klucz) => (tresc.match(new RegExp(`^${klucz}=(.*)$`, 'm'))?.[1] ?? '').trim();

if (!wartosc('PAYLOAD_SECRET')) {
  const sekret = randomBytes(32).toString('base64');
  tresc = tresc.replace(/^PAYLOAD_SECRET=.*$/m, `PAYLOAD_SECRET=${sekret}`);
  writeFileSync(PLIK, tresc);
  console.log('Wygenerowano PAYLOAD_SECRET.');
} else {
  console.log('PAYLOAD_SECRET już ustawiony — zostawiam bez zmian.');
}

console.log(`DATABASE_URL = ${wartosc('DATABASE_URL') || '(puste — uzupełnij ręcznie)'}`);
console.log('\nGotowe. Dalej: npm run seed, potem npm run dev\n');

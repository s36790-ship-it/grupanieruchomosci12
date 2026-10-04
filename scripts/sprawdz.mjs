/**
 * Diagnostyka środowiska lokalnego: node scripts/sprawdz.mjs (albo npm run sprawdz)
 * Mówi, co działa, a co nie, i co z tym zrobić.
 */
import { existsSync, readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const ok = (t) => console.log(`  \x1b[32m✓\x1b[0m ${t}`);
const zle = (t, rada) => console.log(`  \x1b[31m✗\x1b[0m ${t}\n      → ${rada}`);
const info = (t) => console.log(`  \x1b[33m•\x1b[0m ${t}`);

console.log('\nŚrodowisko\n');

const [major, minor] = process.versions.node.split('.').map(Number);
if (major > 22 || (major === 22 && minor >= 19)) ok(`Node.js ${process.versions.node}`);
else zle(`Node.js ${process.versions.node} — wymagane 22.19+`, 'brew install node@22 albo nvm install 22');

for (const [nazwa, sciezka] of [
  ['zależności panelu', 'apps/cms/node_modules'],
  ['zależności strony', 'apps/web/node_modules'],
  ['zależności mostka', 'node_modules/concurrently'],
]) {
  existsSync(sciezka) ? ok(nazwa) : zle(`brak: ${nazwa}`, 'uruchom: npm install && npm run setup (w katalogu głównym)');
}

console.log('\nKonfiguracja panelu\n');
if (!existsSync('apps/cms/.env')) {
  zle('brak apps/cms/.env', 'cp apps/cms/.env.example apps/cms/.env, potem uzupełnij dwie wartości');
} else {
  const env = readFileSync('apps/cms/.env', 'utf8');
  const wartosc = (k) => (env.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1] ?? '').trim();
  wartosc('DATABASE_URL') ? ok(`DATABASE_URL = ${wartosc('DATABASE_URL').replace(/:[^:@/]+@/, ':***@')}`)
    : zle('DATABASE_URL puste', 'np. postgresql://localhost:5432/gn');
  wartosc('PAYLOAD_SECRET') ? ok('PAYLOAD_SECRET ustawiony')
    : zle('PAYLOAD_SECRET puste', 'wygeneruj: openssl rand -base64 32');
}

try {
  execSync('pg_isready', { stdio: 'pipe' });
  ok('PostgreSQL odpowiada');

  if (existsSync('apps/cms/.env')) {
    const url = (readFileSync('apps/cms/.env', 'utf8').match(/^DATABASE_URL=(.*)$/m)?.[1] ?? '').trim();
    if (url.startsWith('postgresql://') && !url.includes('neon.tech')) {
      try {
        execSync(`psql "${url}" -c "select 1"`, { stdio: 'pipe' });
        ok('połączenie z bazą działa');
      } catch (e) {
        const tekst = String(e.stderr ?? '');
        if (tekst.includes('does not exist') && tekst.includes('role')) {
          const uzytkownik = tekst.match(/role "([^"]+)"/)?.[1] ?? 'gn';
          zle(
            `baza odrzuca połączenie: użytkownik "${uzytkownik}" nie istnieje`,
            `zmień DATABASE_URL na postgresql://localhost:5432/gn albo utwórz konto: psql postgres -c 'CREATE USER ${uzytkownik} WITH PASSWORD \'${uzytkownik}\' CREATEDB;'`,
          );
        } else if (tekst.includes('does not exist')) {
          zle('baza nie istnieje', 'createdb gn');
        } else {
          zle('nie mogę połączyć się z bazą', tekst.split('\n')[0] || 'sprawdź DATABASE_URL');
        }
      }
    } else if (url) {
      info('baza zdalna (Neon) — połączenie sprawdzi dopiero panel');
    }
  }
} catch {
  zle('PostgreSQL nie odpowiada', 'brew services start postgresql@16 (albo użyj bazy w Neonie)');
}

console.log('\nSerwery (uruchom wcześniej: npm run dev)\n');
const sprawdzAdres = async (adres, opis, rada) => {
  try {
    const odp = await fetch(adres, { signal: AbortSignal.timeout(4000), redirect: 'manual' });
    [200, 301, 302, 307].includes(odp.status) ? ok(`${opis} — ${adres} (${odp.status})`)
      : zle(`${opis} odpowiada kodem ${odp.status}`, rada);
  } catch {
    zle(`${opis} nie odpowiada — ${adres}`, rada);
  }
};

await sprawdzAdres('http://localhost:3000/panel', 'panel CMS', 'npm run dev:cms — sprawdź błędy w tym oknie');
await sprawdzAdres('http://localhost:4321/', 'strona', 'npm run dev:web');
await sprawdzAdres('http://localhost:8080/', 'mostek (jeden adres)', 'npm run mostek');
await sprawdzAdres('http://localhost:8080/panel', 'panel przez mostek', 'panel musi działać na :3000');

console.log('\nWszystko pod jednym adresem: http://localhost:8080  (panel: /panel)\n');

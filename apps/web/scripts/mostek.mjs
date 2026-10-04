/**
 * Mostek na czas pracy lokalnej: jeden adres dla strony i panelu.
 *
 *   http://localhost:8080          → strona (Astro, :4321)
 *   http://localhost:8080/panel    → panel Payloada (:3000)
 *   http://localhost:8080/api/...  → API Payloada (:3000)
 *
 * W produkcji nie jest używany: strona jest statyczna, a panel stoi na osobnej subdomenie.
 */
import http from 'node:http';

const PORT = Number(process.env.PORT ?? 8080);
const STRONA = new URL(process.env.WEB_URL ?? 'http://localhost:4321');
const PANEL = new URL(process.env.PAYLOAD_URL ?? 'http://localhost:3000');

const doPanelu = (sciezka) =>
  sciezka === '/panel' || sciezka.startsWith('/panel/') || sciezka.startsWith('/api/');

http
  .createServer((req, res) => {
    const cel = doPanelu(req.url ?? '/') ? PANEL : STRONA;
    const zadanie = http.request(
      {
        hostname: cel.hostname,
        port: cel.port,
        path: req.url,
        method: req.method,
        headers: { ...req.headers, host: cel.host },
      },
      (odp) => {
        res.writeHead(odp.statusCode ?? 502, odp.headers);
        odp.pipe(res, { end: true });
      },
    );
    zadanie.on('error', () => {
      res.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' });
      res.end(
        `Nie odpowiada: ${cel.origin}\n` +
          (cel === PANEL
            ? 'Uruchom panel: npm run dev:cms'
            : 'Uruchom stronę: npm run dev:web'),
      );
    });
    req.pipe(zadanie, { end: true });
  })
  .listen(PORT, () => {
    console.log(`\nWszystko pod jednym adresem: http://localhost:${PORT}`);
    console.log(`  strona → ${STRONA.origin}`);
    console.log(`  panel  → ${PANEL.origin}/panel\n`);
  });

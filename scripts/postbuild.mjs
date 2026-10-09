// Après `ng build` : génère une version statique de /mentions-legales avec <meta robots noindex>
// directement dans le HTML (sans dépendre du JavaScript), pour que la page ne soit jamais indexée.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const browserDir = join('dist', 'ges-africa', 'browser');
const indexPath = join(browserDir, 'index.html');
if (!existsSync(indexPath)) {
  console.error(`postbuild: ${indexPath} introuvable — lancez d'abord "ng build".`);
  process.exit(1);
}

const robots = '<meta name="robots" content="noindex, nofollow, noarchive">';
let html = readFileSync(indexPath, 'utf-8');
if (!html.includes('<head>')) {
  console.error('postbuild: balise <head> introuvable dans index.html');
  process.exit(1);
}
html = html.replace('<head>', `<head>\n  ${robots}`);

for (const route of ['mentions-legales']) {
  const dir = join(browserDir, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`postbuild: ${route}/index.html généré avec noindex`);
}

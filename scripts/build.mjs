// EverLight is a single self-contained static page, so "building" is just
// copying the entry files into dist/ — no bundling or fingerprinting needed.
import { mkdirSync, rmSync, copyFileSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
for (const f of ['index.html', 'everlight.html']) {
  copyFileSync(f, `dist/${f}`);
}
console.log('Built dist/ → index.html, everlight.html');

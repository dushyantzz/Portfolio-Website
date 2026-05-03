import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const pathsToRemove = [
  path.join(root, '.next'),
  path.join(root, 'node_modules', '.cache'),
];

console.info('\nCleaning Next.js caches …');
console.info(
  'Tip: stop `npm run dev` first — a running dev server locks `.next` on Windows (EPERM).\n',
);

const maxAttempts = 12;

async function rmWithRetries(targetPath, label) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await fs.rm(targetPath, { recursive: true, force: true });
      console.info(`Removed ${label}.`);
      return;
    } catch (err) {
      const code =
        err && typeof err === 'object' && 'code' in err ? err.code : '';
      const retryable =
        code === 'EPERM' || code === 'EBUSY' || code === 'ENOENT';

      if (retryable && attempt < maxAttempts) {
        const wait = Math.min(400 + attempt * 200, 2500);
        console.info(
          `  (${attempt}/${maxAttempts}) ${label}: ${code} — retry in ${wait}ms…`,
        );
        await sleep(wait);
        continue;
      }

      if (code === 'ENOENT') {
        return;
      }

      throw err;
    }
  }
}

try {
  for (const p of pathsToRemove) {
    const label = path.relative(root, p) || p;
    await rmWithRetries(p, label);
  }
  console.info('\nDone.\n');
} catch (err) {
  console.error(
    '\nCould not remove caches. Close every `npm run dev`, wait a few seconds, retry.',
  );
  console.error(err);
  process.exit(1);
}

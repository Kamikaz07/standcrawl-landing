import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Wrangler adds a hash to filenames (entry-server-XXXXX.js) and moves them
// to assets/. Find the file dynamically to work both locally and on CF Pages.
function findEntryServer() {
  const direct = path.join(__dirname, 'dist-server', 'entry-server.js');
  if (fs.existsSync(direct)) return direct;

  const assetsDir = path.join(__dirname, 'dist-server', 'assets');
  if (fs.existsSync(assetsDir)) {
    const match = fs.readdirSync(assetsDir).find(
      (f) => f.startsWith('entry-server') && f.endsWith('.js'),
    );
    if (match) return path.join(assetsDir, match);
  }
  throw new Error('Cannot find entry-server bundle in dist-server/');
}

const entryPath = pathToFileURL(findEntryServer()).href;
const { render, seoConfig } = await import(entryPath);

const template = fs.readFileSync(
  path.join(__dirname, 'dist', 'index.html'),
  'utf-8',
);

const routes = [
  '/',
  '/empresa',
  '/sobre',
  '/legal',
  '/termos',
  '/privacidade',
  '/cookies',
];

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildHeadTags(meta) {
  const tags = [];
  tags.push(`<title>${meta.title}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(meta.description)}" />`);
  tags.push(`<link rel="canonical" href="${meta.canonical}" />`);
  // Open Graph
  tags.push(`<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  tags.push(`<meta property="og:url" content="${meta.canonical}" />`);
  tags.push(`<meta property="og:type" content="website" />`);
  tags.push(`<meta property="og:site_name" content="StandCrawl" />`);
  tags.push(`<meta property="og:locale" content="pt_PT" />`);
  if (meta.ogImage) {
    tags.push(`<meta property="og:image" content="${meta.ogImage}" />`);
  }
  // Twitter
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
  return tags.join('\n    ');
}

for (const route of routes) {
  const { html: appHtml } = render(route);
  const meta = seoConfig[route] || seoConfig['/'];
  const headTags = buildHeadTags(meta);

  let page = template
    .replace('<!--app-html-->', appHtml)
    .replace('</head>', `    ${headTags}\n  </head>`);

  const dir =
    route === '/'
      ? path.join(__dirname, 'dist')
      : path.join(__dirname, 'dist', route.slice(1));

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page);
  console.log(`Pre-rendered: ${route}`);
}

console.log(`\nDone! Pre-rendered ${routes.length} routes.`);

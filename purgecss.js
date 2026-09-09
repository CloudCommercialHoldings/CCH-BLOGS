import { promises as fs } from 'fs';
import { PurgeCSS } from 'purgecss';

const DIST_PATH = '_sass/vendors';
const output = `${DIST_PATH}/_bootstrap.scss`;

const config = {
  content: [
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_javascript/**/*.js',
    '_tabs/**/*.md',
    '_tabs/**/*.html',
    '_posts/**/*.md',
    '_posts/**/*.html',
    '*.html',
    '*.md'
  ],
  css: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
  keyframes: true,
  variables: true,
  // The `safelist` should be changed appropriately for future development
  safelist: {
    standard: [
      /^collaps/,
      /^w-/,
      /^h-/,
      /^d-/,
      /^flex-/,
      /^justify-/,
      /^align-/,
      /^g-/,
      /^gap-/,
      /^p-/,
      /^px-/,
      /^py-/,
      /^m-/,
      /^mb-/,
      /^mt-/,
      /^me-/,
      /^ms-/,
      /^text-/,
      /^bg-/,
      /^border-/,
      /^rounded-/,
      /^shadow-/,
      /^btn/,
      /^badge/,
      /^alert/,
      /^modal/,
      /^col-/,
      'row',
      'shadow',
      'border',
      'kbd'
    ],
    greedy: [/^col-/, /tooltip/, /modal/, /btn/, /badge/, /alert/, /row/, /grid/]
  }
};

function main() {
  fs.rm(DIST_PATH, { recursive: true, force: true })
    .then(() => fs.mkdir(DIST_PATH))
    .then(() => new PurgeCSS().purge(config))
    .then((result) => {
      return fs.writeFile(output, result[0].css);
    })
    .catch((err) => {
      console.error('Error during PurgeCSS process:', err);
    });
}

main();

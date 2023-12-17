import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_97u9-lWC.mjs';

const _page0  = () => import('./chunks/generic_bLQ4V05P.mjs');
const _page1  = () => import('./chunks/index_zuI5eqY3.mjs');
const _page2  = () => import('./chunks/404_0MIbKU3B.mjs');
const _page3  = () => import('./chunks/_book__Y588M-Ab.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/404.astro", _page2],["src/pages/[book].astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

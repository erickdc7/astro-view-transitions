/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, g as renderComponent, m as maybeRenderHead } from '../astro_LKSCuFSn.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta name="view-transition" content="same-origin">${renderHead()}</head> <body> <div id="content"> ${renderSlot($$result, $$slots["default"])} </div> <footer class="text-center opacity-70 py-10 text-sm">
Basado en el trabajo de <a class="text-sky-700 hover:underline" href="https://twitter.com/addyosmani/status/1673755274853900289?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet%7Ctwtr%5Etrue">Addy Osmani</a> </footer>  </body></html>`;
}, "C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404, no lo he encontrado" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl m-auto min-h-screen grid place-content-center text-center"> <h1 class="text-4xl font-black mb-4">Oh, vaya. ¡Lo has roto!</h1> <img src="https://midu.dev/images/this-is-fine-404.gif"> </main> ` })}`;
}, "C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/404.astro", void 0);

const $$file = "C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };

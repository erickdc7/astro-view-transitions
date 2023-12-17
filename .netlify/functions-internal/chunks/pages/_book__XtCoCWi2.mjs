/* empty css                           */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_LKSCuFSn.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_KWTWOavP.mjs';

const books = [
     {
       id: 'clean-code',
       title: 'Clean Code: Manual de desarrollo ágil de software',
       img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg",
       opinion: 'El reconocido experto de software Robert C. Martin, junto con sus colegas de Object Mentor, nos presentan sus óptimas técnicas y metodologías ágiles para limpiar el código sobre la marcha y crearlo de forma correcta, de este modo mejorará como programador. Esta obra se divide en tres partes. La primera describe los principios, patrones y prácticas para escribir código limpio. La segunda presenta varios casos de estudio de complejidad creciente. Cada uno es un ejercicio de limpieza de código, y cada uno se analiza en detalle. La tercera parte es el resultado de varios años de trabajo, donde se comparten las mejores prácticas y técnicas de limpieza de código aplicadas a un proyecto real.',
       author: 'Robert C. Martin',
     },
     {
       id: 'the-clean-coder',
       title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
       img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347470803i/10284614.jpg",
       opinion: 'Este libro es una guía práctica y ética para los programadores profesionales. El autor, Robert C. Martin, comparte sus experiencias y consejos sobre cómo afrontar los desafíos y dilemas que surgen en el desarrollo de software, tales como estimar, codificar, probar, depurar, refactorizar, comunicar, colaborar, negociar, liderar, aprender y mejorar.',
       author: 'Robert C. Martin',
     },
     {
       id: 'javascript-the-good-parts',
       title: 'JavaScript: The Good Parts',
       img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
       opinion: 'Este libro es una guía práctica para aprender y usar las mejores partes de JavaScript, el lenguaje de programación más popular de la web. El autor, Douglas Crockford, es un reconocido experto en JavaScript que ha contribuido a su desarrollo y estandarización. En este libro, Crockford identifica y explica las características más elegantes, fiables y expresivas de JavaScript, como las funciones, los objetos, las expresiones regulares, el estilo y las convenciones.',
       author: 'Douglas Crockford',
     },
     {
       id: 'eloquent-javascript',
       title: 'Eloquent JavaScript: A Modern Introduction to Programming',
       img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1308260856i/8910666.jpg',
       opinion: 'Este libro es una introducción moderna y práctica a la programación con JavaScript, que te enseña a escribir código elegante, efectivo y expresivo. El autor, Marijn Haverbeke, es un reconocido experto en JavaScript que ha contribuido a su desarrollo y estandarización. En este libro, Haverbeke te guía a través de los conceptos esenciales del lenguaje, como los valores, las variables, las funciones, los objetos, las expresiones regulares, los módulos y la programación asíncrona.',
       author: 'Marijn Haverbeke',
     },
     {
       id: 'design-patterns',
       title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
       img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348027904i/85009.jpg",
       opinion: 'Este libro es una guía práctica para aprender y usar los patrones de diseño, que son soluciones simples y elegantes para problemas específicos del diseño de software orientado a objetos. Los autores, Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides, introducen los principios de los patrones de diseño y ofrecen un catálogo de 23 patrones, clasificados en tres categorías: creación, estructura y comportamiento.',
       author: 'Erich Gamma, Grady Booch, Richard Helm, Ralph Johnson, John Vlissides'
     },
     {
       id: 'the-pragmatic-programmer',
       title: 'The Pragmatic Programmer: From Journeyman to Master',
       img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1401432508i/4099.jpg",
       opinion: 'Este libro se centra en el proceso central de la programación: tomar un requisito y producir un código funcional y mantenible que deleite a sus usuarios. El libro cubre temas que van desde la responsabilidad personal y el desarrollo de la carrera hasta técnicas arquitectónicas para mantener tu código flexible y fácil de adaptar y reutilizar.',
       author: 'Andy Hunt, Dave Thomas'
     }
   ];

const $$Astro = createAstro();
const $$book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id === book);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Libro ${info.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-auto max-w-4xl"> <header class="relative"> <a href="/" type="button" class="fixed left-2 top-2 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800"> <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> <span class="sr-only">Icon description</span> </a> <h1 class="scale-50 font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
Libros de
<span class="block text-[36px] md:text-[58px]">programación</span> </h1> </header> <div class="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8"> <div class="flex flex-col mb-10"> <picture class="mb-8 w-full relative"> <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(info.img, "src")}${addAttribute(`Portada del libro ${info.title}`, "alt")}${addAttribute(`view-transition-name: book-${info.id}`, "style")}> </picture> <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center"> <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"> <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path> </svg>
Comprar ahora
</a> </div> <aside class="mt-10 md:mt-0"> <h1 class="text-5xl font-black mb-4">${info.title}</h1> <p class="text-lg mb-4">${info.opinion}</p> <p><strong>Autor:</strong> <span class="font-semibold text-gray-800">${info.author}</span></p> </aside> </div> </main> ` })}`;
}, "C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/[book].astro", void 0);

const $$file = "C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/[book].astro";
const $$url = "/[book]";

const _book_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$book,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _book_ as _, books as b };

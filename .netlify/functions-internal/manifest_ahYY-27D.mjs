import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_LKSCuFSn.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.startViewTransition&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/_book_.PANL8OTx.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.startViewTransition&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/_book_.PANL8OTx.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.startViewTransition&&window.navigation.addEventListener(\"navigate\",t=>{const n=new URL(t.destination.url);location.origin===n.origin&&t.intercept({async handler(){const e=await(await fetch(n.pathname)).text(),[,o]=e.match(/<body>([\\s\\S]*)<\\/body>/i);document.startViewTransition(()=>{document.body.innerHTML=o,document.documentElement.scrollTop=0})}})});\n"}],"styles":[{"type":"external","src":"/_astro/_book_.PANL8OTx.css"}],"routeData":{"route":"/[book]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"book","dynamic":true,"spread":false}]],"params":["book"],"component":"src/pages/[book].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/[book].astro",{"propagation":"none","containsHead":true}],["C:/Users/nagat/Downloads/ProyVariados/astro-view-transitions/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_sLe3SmHf.mjs","/src/pages/index.astro":"chunks/pages/index_AJss_WaE.mjs","\u0000@astrojs-manifest":"manifest_ahYY-27D.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_bLQ4V05P.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_zuI5eqY3.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_0MIbKU3B.mjs","\u0000@astro-page:src/pages/[book]@_@astro":"chunks/_book__Y588M-Ab.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.8BuLA0IP.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/_book_.PANL8OTx.css","/favicon.svg"]});

export { manifest };

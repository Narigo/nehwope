import{S as t,i as n,s as e,D as r,e as s,k as o,c as a,a as c,d as h,n as u,b as i,f as l,G as f,F as d,v as p,r as v,x as m,t as x,g as $,H as E}from"../../../chunks/vendor-92692932.js";function y(t){let n,e;return{c(){n=s("a"),e=x("Zum Index"),this.h()},l(t){n=a(t,"A",{href:!0});var r=c(n);e=$(r,"Zum Index"),r.forEach(h),this.h()},h(){i(n,"href","..")},m(t,r){l(t,n,r),f(n,e)},p:E,d(t){t&&h(n)}}}function A(t){let n,e,r;return{c(){n=s("a"),e=x("Zurück"),this.h()},l(t){n=a(t,"A",{href:!0});var r=c(n);e=$(r,"Zurück"),r.forEach(h),this.h()},h(){i(n,"href",r=t[0].previous)},m(t,r){l(t,n,r),f(n,e)},p(t,e){1&e&&r!==(r=t[0].previous)&&i(n,"href",r)},d(t){t&&h(n)}}}function I(t){let n,e;return{c(){n=s("a"),e=x("Zum Index"),this.h()},l(t){n=a(t,"A",{href:!0});var r=c(n);e=$(r,"Zum Index"),r.forEach(h),this.h()},h(){i(n,"href","..")},m(t,r){l(t,n,r),f(n,e)},p:E,d(t){t&&h(n)}}}function Z(t){let n,e,r;return{c(){n=s("a"),e=x("Weiter"),this.h()},l(t){n=a(t,"A",{href:!0});var r=c(n);e=$(r,"Weiter"),r.forEach(h),this.h()},h(){i(n,"href",r=t[0].next)},m(t,r){l(t,n,r),f(n,e)},p(t,e){1&e&&r!==(r=t[0].next)&&i(n,"href",r)},d(t){t&&h(n)}}}function k(t){let n,e,m,x,$,E;const k=t[2].default,w=r(k,t,t[1],null);function W(t,n){return t[0].previous?A:y}let j=W(t),g=j(t);function C(t,n){return t[0].next?Z:I}let D=C(t),V=D(t);return{c(){n=s("div"),e=s("article"),w&&w.c(),m=o(),x=s("nav"),g.c(),$=o(),V.c(),this.h()},l(t){n=a(t,"DIV",{class:!0});var r=c(n);e=a(r,"ARTICLE",{});var s=c(e);w&&w.l(s),s.forEach(h),m=u(r),x=a(r,"NAV",{class:!0});var o=c(x);g.l(o),$=u(o),V.l(o),o.forEach(h),r.forEach(h),this.h()},h(){i(x,"class","svelte-12urh7y"),i(n,"class","svelte-12urh7y")},m(t,r){l(t,n,r),f(n,e),w&&w.m(e,null),f(n,m),f(n,x),g.m(x,null),f(x,$),V.m(x,null),E=!0},p(t,[n]){w&&w.p&&(!E||2&n)&&d(w,k,t,t[1],n,null,null),j===(j=W(t))&&g?g.p(t,n):(g.d(1),g=j(t),g&&(g.c(),g.m(x,$))),D===(D=C(t))&&V?V.p(t,n):(V.d(1),V=D(t),V&&(V.c(),V.m(x,null)))},i(t){E||(p(w,t),E=!0)},o(t){v(w,t),E=!1},d(t){t&&h(n),w&&w.d(t),g.d(),V.d()}}}var w=function(t,n,e,r){return new(e||(e=Promise))((function(s,o){function a(t){try{h(r.next(t))}catch(n){o(n)}}function c(t){try{h(r.throw(t))}catch(n){o(n)}}function h(t){var n;t.done?s(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}h((r=r.apply(t,n||[])).next())}))};const W=({page:t,context:n,fetch:e})=>w(void 0,void 0,void 0,(function*(){const n="/notes.json",r=yield e(n);if(r.ok){return{props:{note:(yield r.json()).folders.find((n=>t.path.startsWith(`/notes/${n.name}`))).notes.find((n=>t.path.endsWith(n.file)))}}}return{status:r.status,error:new Error(`Could not load ${n}`)}}));function j(t,n,e){let{$$slots:r={},$$scope:s}=n,{note:o}=n;return m("note",o),t.$$set=t=>{"note"in t&&e(0,o=t.note),"$$scope"in t&&e(1,s=t.$$scope)},[o,s,r]}export default class extends t{constructor(t){super(),n(this,t,j,k,e,{note:0})}}export{W as load};

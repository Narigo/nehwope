import{S as t,i as e,s,D as n,e as r,k as o,c as a,a as c,d as l,n as u,b as h,f as i,G as f,F as p,v as $,r as d,x as m,t as v,g as x,H as g,j as E,m as j,o as A,w as I}from"../../../chunks/vendor-6ca961b7.js";const Z=async({page:t,fetch:e})=>{const s="/notes.json",n=await e(s);if(n.ok){return{props:{note:(await n.json()).folders.find((e=>t.path.startsWith(`/notes/${e.name}`))).notes.find((e=>t.path.endsWith(e.file)))}}}return{status:n.status,error:new Error(`Could not load ${s}`)}};function k(t){let e,s;return{c(){e=r("a"),s=v("Zum Index"),this.h()},l(t){e=a(t,"A",{href:!0});var n=c(e);s=x(n,"Zum Index"),n.forEach(l),this.h()},h(){h(e,"href","..")},m(t,n){i(t,e,n),f(e,s)},p:g,d(t){t&&l(e)}}}function w(t){let e,s,n;return{c(){e=r("a"),s=v("Zurück"),this.h()},l(t){e=a(t,"A",{href:!0});var n=c(e);s=x(n,"Zurück"),n.forEach(l),this.h()},h(){h(e,"href",n=t[0].previous)},m(t,n){i(t,e,n),f(e,s)},p(t,s){1&s&&n!==(n=t[0].previous)&&h(e,"href",n)},d(t){t&&l(e)}}}function W(t){let e,s;return{c(){e=r("a"),s=v("Zum Index"),this.h()},l(t){e=a(t,"A",{href:!0});var n=c(e);s=x(n,"Zum Index"),n.forEach(l),this.h()},h(){h(e,"href","..")},m(t,n){i(t,e,n),f(e,s)},p:g,d(t){t&&l(e)}}}function b(t){let e,s,n;return{c(){e=r("a"),s=v("Weiter"),this.h()},l(t){e=a(t,"A",{href:!0});var n=c(e);s=x(n,"Weiter"),n.forEach(l),this.h()},h(){h(e,"href",n=t[0].next)},m(t,n){i(t,e,n),f(e,s)},p(t,s){1&s&&n!==(n=t[0].next)&&h(e,"href",n)},d(t){t&&l(e)}}}function y(t){let e,s,m,v,x,g;const E=t[2].default,j=n(E,t,t[1],null);function A(t,e){return t[0].previous?w:k}let I=A(t),Z=I(t);function y(t,e){return t[0].next?b:W}let C=y(t),D=C(t);return{c(){e=r("div"),s=r("article"),j&&j.c(),m=o(),v=r("nav"),Z.c(),x=o(),D.c(),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=c(e);s=a(n,"ARTICLE",{class:!0});var r=c(s);j&&j.l(r),r.forEach(l),m=u(n),v=a(n,"NAV",{class:!0});var o=c(v);Z.l(o),x=u(o),D.l(o),o.forEach(l),n.forEach(l),this.h()},h(){h(s,"class","svelte-1pdgj6r"),h(v,"class","svelte-1pdgj6r"),h(e,"class","svelte-1pdgj6r")},m(t,n){i(t,e,n),f(e,s),j&&j.m(s,null),f(e,m),f(e,v),Z.m(v,null),f(v,x),D.m(v,null),g=!0},p(t,[e]){j&&j.p&&(!g||2&e)&&p(j,E,t,t[1],e,null,null),I===(I=A(t))&&Z?Z.p(t,e):(Z.d(1),Z=I(t),Z&&(Z.c(),Z.m(v,x))),C===(C=y(t))&&D?D.p(t,e):(D.d(1),D=C(t),D&&(D.c(),D.m(v,null)))},i(t){g||($(j,t),g=!0)},o(t){d(j,t),g=!1},d(t){t&&l(e),j&&j.d(t),Z.d(),D.d()}}}function C(t,e,s){let{$$slots:n={},$$scope:r}=e,{note:o}=e;return m("note",o),t.$$set=t=>{"note"in t&&s(0,o=t.note),"$$scope"in t&&s(1,r=t.$$scope)},[o,r,n]}class D extends t{constructor(t){super(),e(this,t,C,y,s,{note:0})}}function V(t){let e;const s=t[1].default,r=n(s,t,t[2],null);return{c(){r&&r.c()},l(t){r&&r.l(t)},m(t,s){r&&r.m(t,s),e=!0},p(t,n){r&&r.p&&(!e||4&n)&&p(r,s,t,t[2],n,null,null)},i(t){e||($(r,t),e=!0)},o(t){d(r,t),e=!1},d(t){r&&r.d(t)}}}function F(t){let e,s;return e=new D({props:{note:t[0],$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){E(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,n){A(e,t,n),s=!0},p(t,[s]){const n={};1&s&&(n.note=t[0]),4&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){d(e.$$.fragment,t),s=!1},d(t){I(e,t)}}}function G(t,e,s){let{$$slots:n={},$$scope:r}=e,{note:o}=e;return t.$$set=t=>{"note"in t&&s(0,o=t.note),"$$scope"in t&&s(2,r=t.$$scope)},[o,n,r]}export default class extends t{constructor(t){super(),e(this,t,G,F,s,{note:0})}}export{Z as load};

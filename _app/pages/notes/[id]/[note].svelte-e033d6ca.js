import{S as t,i as e,s,D as a,e as n,t as r,c as l,a as o,g as c,d as u,b as i,f,F as h,h as m,k as d,n as p,E as $,v,r as g,x as k,G as E,l as _,j as x,H as w,m as A,o as I,w as j,B as N,u as V}from"../../../chunks/vendor-45f19a83.js";import{_ as b}from"../../../chunks/preload-helper-9f12a5fd.js";import{a as D}from"../../../chunks/paths-d2152a5c.js";const P=async({page:t,fetch:e})=>{const s="/notes.json",a=await e(s);if(a.ok){return{props:{note:(await a.json()).folders.find((e=>t.params.id===e.name)).notes.find((e=>t.params.note===e.file)),component:(await function(t){switch(t){case"../routes/notes/_notes/der-anfang/auf-schatten-folgt-licht.svelte":return b((()=>import("../../../chunks/auf-schatten-folgt-licht-15394c93.js")),["/_app/chunks/auf-schatten-folgt-licht-15394c93.js","/_app/chunks/vendor-45f19a83.js"]);case"../routes/notes/_notes/der-anfang/aufbau-und-wachstum.svelte":return b((()=>import("../../../chunks/aufbau-und-wachstum-5263cb2d.js")),["/_app/chunks/aufbau-und-wachstum-5263cb2d.js","/_app/chunks/vendor-45f19a83.js"]);case"../routes/notes/_notes/der-anfang/erstkontakt.svelte":return b((()=>import("../../../chunks/erstkontakt-c40d39d5.js")),["/_app/chunks/erstkontakt-c40d39d5.js","/_app/assets/erstkontakt-a76d0a9e.css","/_app/chunks/vendor-45f19a83.js","/_app/chunks/paths-d2152a5c.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+t))}}(`../routes/notes/_notes/${t.params.id}/${t.params.note}.svelte`)).default}}}return{status:a.status,error:new Error(`Could not load ${s}`)}};function G(t){let e,s,a;return{c(){e=n("span"),s=n("img"),this.h()},l(t){e=l(t,"SPAN",{class:!0});var a=o(e);s=l(a,"IMG",{src:!0,alt:!0}),a.forEach(u),this.h()},h(){s.src!==(a=`${D}/images/previous.svg`)&&i(s,"src",a),i(s,"alt","Zurück (bereits am Anfang)"),i(e,"class","svelte-94k22l")},m(t,a){f(t,e,a),h(e,s)},p:E,d(t){t&&u(e)}}}function L(t){let e,s,a,r;return{c(){e=n("a"),s=n("img"),this.h()},l(t){e=l(t,"A",{href:!0,class:!0});var a=o(e);s=l(a,"IMG",{src:!0,alt:!0}),a.forEach(u),this.h()},h(){s.src!==(a=`${D}/images/previous.svg`)&&i(s,"src",a),i(s,"alt","Zurück"),i(e,"href",r=t[0].previous),i(e,"class","svelte-94k22l")},m(t,a){f(t,e,a),h(e,s)},p(t,s){1&s&&r!==(r=t[0].previous)&&i(e,"href",r)},d(t){t&&u(e)}}}function M(t){let e,s,a,d=t[0].author+"";return{c(){e=n("div"),s=r("⊣ "),a=r(d),this.h()},l(t){e=l(t,"DIV",{class:!0});var n=o(e);s=c(n,"⊣ "),a=c(n,d),n.forEach(u),this.h()},h(){i(e,"class","author svelte-94k22l")},m(t,n){f(t,e,n),h(e,s),h(e,a)},p(t,e){1&e&&d!==(d=t[0].author+"")&&m(a,d)},d(t){t&&u(e)}}}function R(t){let e,s,a;return{c(){e=n("span"),s=n("img"),this.h()},l(t){e=l(t,"SPAN",{class:!0});var a=o(e);s=l(a,"IMG",{src:!0,alt:!0}),a.forEach(u),this.h()},h(){s.src!==(a=`${D}/images/next.svg`)&&i(s,"src",a),i(s,"alt","Weiter (bereits am Ende)"),i(e,"class","svelte-94k22l")},m(t,a){f(t,e,a),h(e,s)},p:E,d(t){t&&u(e)}}}function T(t){let e,s,a,r;return{c(){e=n("a"),s=n("img"),this.h()},l(t){e=l(t,"A",{href:!0,class:!0});var a=o(e);s=l(a,"IMG",{src:!0,alt:!0}),a.forEach(u),this.h()},h(){s.src!==(a=`${D}/images/next.svg`)&&i(s,"src",a),i(s,"alt","Weiter"),i(e,"href",r=t[0].next),i(e,"class","svelte-94k22l")},m(t,a){f(t,e,a),h(e,s)},p(t,s){1&s&&r!==(r=t[0].next)&&i(e,"href",r)},d(t){t&&u(e)}}}function Z(t){let e,s,m,k,E,_,x,w,A,I,j,N;function V(t,e){return t[0].previous?L:G}let b=V(t),D=b(t);const P=t[2].default,Z=a(P,t,t[1],null);let y=t[0].author&&M(t);function O(t,e){return t[0].next?T:R}let S=O(t),C=S(t);return{c(){e=n("div"),s=n("nav"),D.c(),m=d(),k=n("article"),Z&&Z.c(),E=d(),y&&y.c(),_=d(),x=n("nav"),C.c(),w=d(),A=n("nav"),I=n("a"),j=r("Zum Index"),this.h()},l(t){e=l(t,"DIV",{class:!0});var a=o(e);s=l(a,"NAV",{class:!0});var n=o(s);D.l(n),n.forEach(u),m=p(a),k=l(a,"ARTICLE",{class:!0});var r=o(k);Z&&Z.l(r),E=p(r),y&&y.l(r),r.forEach(u),_=p(a),x=l(a,"NAV",{class:!0});var i=o(x);C.l(i),i.forEach(u),w=p(a),A=l(a,"NAV",{class:!0});var f=o(A);I=l(f,"A",{href:!0,class:!0});var h=o(I);j=c(h,"Zum Index"),h.forEach(u),f.forEach(u),a.forEach(u),this.h()},h(){i(s,"class","previous svelte-94k22l"),i(k,"class","svelte-94k22l"),i(x,"class","next svelte-94k22l"),i(I,"href",".."),i(I,"class","svelte-94k22l"),i(A,"class","index svelte-94k22l"),i(e,"class","svelte-94k22l")},m(t,a){f(t,e,a),h(e,s),D.m(s,null),h(e,m),h(e,k),Z&&Z.m(k,null),h(k,E),y&&y.m(k,null),h(e,_),h(e,x),C.m(x,null),h(e,w),h(e,A),h(A,I),h(I,j),N=!0},p(t,[e]){b===(b=V(t))&&D?D.p(t,e):(D.d(1),D=b(t),D&&(D.c(),D.m(s,null))),Z&&Z.p&&(!N||2&e)&&$(Z,P,t,t[1],N?e:-1,null,null),t[0].author?y?y.p(t,e):(y=M(t),y.c(),y.m(k,null)):y&&(y.d(1),y=null),S===(S=O(t))&&C?C.p(t,e):(C.d(1),C=S(t),C&&(C.c(),C.m(x,null)))},i(t){N||(v(Z,t),N=!0)},o(t){g(Z,t),N=!1},d(t){t&&u(e),D.d(),Z&&Z.d(t),y&&y.d(),C.d()}}}function y(t,e,s){let{$$slots:a={},$$scope:n}=e,{note:r}=e;return k("note",r),t.$$set=t=>{"note"in t&&s(0,r=t.note),"$$scope"in t&&s(1,n=t.$$scope)},[r,n,a]}class O extends t{constructor(t){super(),e(this,t,y,Z,s,{note:0})}}function S(t){return document.title=t[0].title+" - Notes of NewHope",{c:E,l:E,m:E,d:E}}function C(t){let e,s,a;var n=t[1];return n&&(e=new n({})),{c(){e&&x(e.$$.fragment),s=_()},l(t){e&&A(e.$$.fragment,t),s=_()},m(t,n){e&&I(e,t,n),f(t,s,n),a=!0},p(t,a){if(n!==(n=t[1])){if(e){N();const t=e;g(t.$$.fragment,1,0,(()=>{j(t,1)})),V()}n?(e=new n({}),x(e.$$.fragment),v(e.$$.fragment,1),I(e,s.parentNode,s)):e=null}},i(t){a||(e&&v(e.$$.fragment,t),a=!0)},o(t){e&&g(e.$$.fragment,t),a=!1},d(t){t&&u(s),e&&j(e,t)}}}function H(t){let e,s,a=t[1]&&C(t);return{c(){a&&a.c(),e=_()},l(t){a&&a.l(t),e=_()},m(t,n){a&&a.m(t,n),f(t,e,n),s=!0},p(t,s){t[1]?a?(a.p(t,s),2&s&&v(a,1)):(a=C(t),a.c(),v(a,1),a.m(e.parentNode,e)):a&&(N(),g(a,1,1,(()=>{a=null})),V())},i(t){s||(v(a),s=!0)},o(t){g(a),s=!1},d(t){a&&a.d(t),t&&u(e)}}}function W(t){let e,s,a,n,r=t[0].title&&S(t);return a=new O({props:{note:t[0],$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){r&&r.c(),e=_(),s=d(),x(a.$$.fragment)},l(t){const n=w('[data-svelte="svelte-2elx5a"]',document.head);r&&r.l(n),e=_(),n.forEach(u),s=p(t),A(a.$$.fragment,t)},m(t,l){r&&r.m(document.head,null),h(document.head,e),f(t,s,l),I(a,t,l),n=!0},p(t,[s]){t[0].title?r||(r=S(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null);const n={};1&s&&(n.note=t[0]),6&s&&(n.$$scope={dirty:s,ctx:t}),a.$set(n)},i(t){n||(v(a.$$.fragment,t),n=!0)},o(t){g(a.$$.fragment,t),n=!1},d(t){r&&r.d(t),u(e),t&&u(s),j(a,t)}}}function B(t,e,s){let{note:a}=e,{component:n}=e;return t.$$set=t=>{"note"in t&&s(0,a=t.note),"component"in t&&s(1,n=t.component)},[a,n]}export default class extends t{constructor(t){super(),e(this,t,B,W,s,{note:0,component:1})}}export{P as load};

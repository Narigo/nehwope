import{K as e,S as s,i as t,s as r,e as a,t as n,c as l,a as o,g as i,d as c,f as h,F as u,h as f,k as d,n as g,b,G as p,I as v}from"./vendor-45f19a83.js";const m={subscribe:s=>(()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}})().page.subscribe(s)};function $(e,s,t){const r=e.slice();return r[2]=s[t],r}function E(e){let s,t,r,d=e[1].author+"";return{c(){s=a("p"),t=n("Von "),r=n(d)},l(e){s=l(e,"P",{});var a=o(s);t=i(a,"Von "),r=i(a,d),a.forEach(c)},m(e,a){h(e,s,a),u(s,t),u(s,r)},p(e,s){2&s&&d!==(d=e[1].author+"")&&f(r,d)},d(e){e&&c(s)}}}function P(e){let s,t,r=e[1].teaser+"";return{c(){s=a("p"),t=n(r)},l(e){s=l(e,"P",{});var a=o(s);t=i(a,r),a.forEach(c)},m(e,r){h(e,s,r),u(s,t)},p(e,s){2&s&&r!==(r=e[1].teaser+"")&&f(t,r)},d(e){e&&c(s)}}}function _(e){let s,t,r,p,v,m,$,E=e[2].title+"",P=e[2].teaser?` - ${e[2].teaser}`:"";return{c(){s=a("li"),t=a("a"),r=n(E),v=d(),m=n(P),$=d(),this.h()},l(e){s=l(e,"LI",{class:!0});var a=o(s);t=l(a,"A",{href:!0});var n=o(t);r=i(n,E),n.forEach(c),v=g(a),m=i(a,P),$=g(a),a.forEach(c),this.h()},h(){b(t,"href",p=`${e[0]}/${e[2].file}`),b(s,"class","svelte-146o7d9")},m(e,a){h(e,s,a),u(s,t),u(t,r),u(s,v),u(s,m),u(s,$)},p(e,s){2&s&&E!==(E=e[2].title+"")&&f(r,E),3&s&&p!==(p=`${e[0]}/${e[2].file}`)&&b(t,"href",p),2&s&&P!==(P=e[2].teaser?` - ${e[2].teaser}`:"")&&f(m,P)},d(e){e&&c(s)}}}function x(e){let s,t,r,b,m,x,F=e[1].title+"",I=e[1].author&&E(e),L=e[1].teaser&&P(e),N=e[1].notes,V=[];for(let a=0;a<N.length;a+=1)V[a]=_($(e,N,a));return{c(){s=a("h2"),t=n(F),r=d(),I&&I.c(),b=d(),L&&L.c(),m=d(),x=a("ol");for(let e=0;e<V.length;e+=1)V[e].c()},l(e){s=l(e,"H2",{});var a=o(s);t=i(a,F),a.forEach(c),r=g(e),I&&I.l(e),b=g(e),L&&L.l(e),m=g(e),x=l(e,"OL",{});var n=o(x);for(let s=0;s<V.length;s+=1)V[s].l(n);n.forEach(c)},m(e,a){h(e,s,a),u(s,t),h(e,r,a),I&&I.m(e,a),h(e,b,a),L&&L.m(e,a),h(e,m,a),h(e,x,a);for(let s=0;s<V.length;s+=1)V[s].m(x,null)},p(e,[s]){if(2&s&&F!==(F=e[1].title+"")&&f(t,F),e[1].author?I?I.p(e,s):(I=E(e),I.c(),I.m(b.parentNode,b)):I&&(I.d(1),I=null),e[1].teaser?L?L.p(e,s):(L=P(e),L.c(),L.m(m.parentNode,m)):L&&(L.d(1),L=null),3&s){let t;for(N=e[1].notes,t=0;t<N.length;t+=1){const r=$(e,N,t);V[t]?V[t].p(r,s):(V[t]=_(r),V[t].c(),V[t].m(x,null))}for(;t<V.length;t+=1)V[t].d(1);V.length=N.length}},i:p,o:p,d(e){e&&c(s),e&&c(r),I&&I.d(e),e&&c(b),L&&L.d(e),e&&c(m),e&&c(x),v(V,e)}}}function F(e,s,t){let{basePath:r}=s,{folder:a}=s;return e.$$set=e=>{"basePath"in e&&t(0,r=e.basePath),"folder"in e&&t(1,a=e.folder)},[r,a]}class I extends s{constructor(e){super(),t(this,e,F,x,r,{basePath:0,folder:1})}}export{I as F,m as p};
import{n as b,s as h}from"./scheduler.7a274a43.js";const e=[];function k(i,a=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(n=a(r,f)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var l;const p=((l=globalThis.__sveltekit_kinhrt)==null?void 0:l.base)??"/slick-portfolio-svelte";var u;const d=((u=globalThis.__sveltekit_kinhrt)==null?void 0:u.assets)??p;export{d as a,p as b,k as w};

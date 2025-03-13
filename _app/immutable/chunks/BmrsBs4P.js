import"./z3wCJe_Y.js";import{a2 as X,ax as w,y as H}from"./D81wtFtZ.js";let P;const D="en",k=["en","pl"];let L=()=>D;const Q=t=>{typeof t=="function"?L=C(t):L=C(()=>t),P!==void 0&&P(L())};function C(t){return()=>{const n=t();if(!A(n))throw new Error("languageTag() didn't return a valid language tag. Check your setLanguageTag call");return n}}const Y=t=>{P=t};function A(t){return k.includes(t)}const q=Object.freeze(Object.defineProperty({__proto__:null,availableLanguageTags:k,isAvailableLanguageTag:A,get languageTag(){return L},onSetLanguageTag:Y,setLanguageTag:Q,sourceLanguageTag:D},Symbol.toStringTag,{value:"Module"})),G=()=>{const t=X;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},J={subscribe(t){return G().page.subscribe(t)}};function Z(t,n){if(t==="")return"";const e=new URL(t,n).pathname;return e.endsWith("/")?e.slice(0,-1):e}function b(t,n){const e=et(t),a=V(e,n),[i,o]=tt(a);return[i,o]}const B=(t,n,e)=>[n,t,e??""].filter(a=>a!=="/").join("")||"/";function V(t,n){const e=t.replace(n,"");return e.startsWith("/")?e:`/${e}`}function tt(t){const e=["/.html__data.json","/__data.json"].find(a=>t.endsWith(a));return e?[t.slice(0,-e.length)||"/",e]:[t,void 0]}function et(t){try{return decodeURI(t)}catch{return t}}const nt=t=>({url:n})=>{try{const[e,a]=b(n.pathname,w),i=t.getLanguageFromLocalisedPath(e);if(!i)return n.pathname;const o=t.getCanonicalPath(e,i);return B(o,w,a)}catch{return n.pathname}};function rt(t){return`/${t.split("/").filter(Boolean).join("/")}`}function at(t){const n=t.map(e=>typeof e=="string"?a=>a===e:a=>e.test(a));return e=>n.some(a=>a(rt(e)))}const T="rtl",I="ltr";function ot(t){try{const n=new Intl.Locale(t);return"textInfo"in n?n.textInfo.direction===T?T:I:n.getTextInfo().direction===T?T:I}catch{return I}}function st(t){const n=t.map(e=>[e,ot(e)]);return Object.fromEntries(n)}const it=0,F=1,S=2,ct=4,p=0,v=1,R=2;function ut(t){const n=lt(ft);return t.sort((e,a)=>{var i,o,s,c,r,u;const f=z(e).map(n),l=z(a).map(n);for(let g=0;g<Math.max(f.length,l.length);g+=1){const m=f[g],x=l[g];if(!m)return-1;if(!x)return 1;for(let _=0;_<Math.max(m.length,x.length);_+=1){const h=m[_],d=x[_];if((h==null?void 0:h[p])||(d==null?void 0:d[p])){if(!h)return-1;if(!d)return 1;const $=((i=m[_+1])==null?void 0:i[v])||((s=(o=f[g+1])==null?void 0:o[0])==null?void 0:s[v]),y=((c=x[_+1])==null?void 0:c[v])||((u=(r=l[g+1])==null?void 0:r[0])==null?void 0:u[v]),K=$&&y,O=$&&!y,W=!$&&y;if((h[p]&&d[p])===S){if(K)continue;if(O)return-1;if(W)return 1}if(h[p]===S)return O?-1:1;if(d[p]===S)return W?1:-1;if(h[R]!==d[R])return(-1)**+h[R];if(h[p]!==d[p])return(-1)**+(h[p]>d[p])}else if((h==null?void 0:h[v])!==(d==null?void 0:d[v]))return gt(h[v],d[v])}}return e<a?1:-1})}function lt(t){const n=new Map;return e=>(n.has(e)||n.set(e,t(e)),n.get(e))}function ft(t){const n=[];let e=0;for(;e<=t.length;){const a=t.indexOf("[",e),i=a===-1;if(n.push([it,t.slice(e,i?void 0:a),!1]),i)break;const o=t[a+1]==="["?F:t[a+1]==="."?S:ct,s=o===F?"]]":"]",c=t.indexOf(s,a);if(c===-1)throw new Error(`Invalid route definition ${t}`);const r=t.slice(a,e=c+s.length);n.push([o,r,r.includes("=")])}return n}const z=t=>t.replace(/\[\[[^\]]+\]\](?!$)/g,"").split("/").filter(Boolean);function gt(t,n){if(t===n)return 0;let e=0;for(;t[e]===n[e];)e++;return t[e]?n[e]?t[e]<n[e]?-1:1:-1:1}const ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function dt(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${U(t).map(a=>{const i=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(i)return n.push({name:i[1],matcher:i[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((r,u)=>{if(u%2){if(r.startsWith("x+"))return j(String.fromCharCode(parseInt(r.slice(2),16)));if(r.startsWith("u+"))return j(String.fromCharCode(...r.slice(2).split("-").map(_=>parseInt(_,16))));const f=ht.exec(r);if(!f)throw new Error(`Invalid param: ${r}`);const[,l,g,m,x]=f;return n.push({name:m,matcher:x,optional:!!l,rest:!!g,chained:g?u===1&&s[0]==="":!1}),g?"(.*?)":l?"([^/]*)?":"([^/]+?)"}return j(r)}).join("")}).join("")}/?$`),params:n}}function pt(t,n,e){const a={},i=t.slice(1),o=i.filter(c=>c!==void 0);let s=0;for(const[c,r]of n.entries()){let u=i[c-s];if(r.chained&&r.rest&&s&&(u=i.slice(c-s,c+1).filter(l=>l).join("/"),s=0),u===void 0){r.rest&&(a[r.name]="");continue}if(r.matcher&&!e[r.matcher])return;if((e[r.matcher]??(()=>!0))(u)){a[r.name]=u;const l=n[c+1],g=i[c+1];l&&!l.rest&&l.optional&&g&&r.chained&&(s=0),!l&&!g&&Object.keys(a).length===o.length&&(s=0);continue}if(r.optional&&r.chained){s++;continue}return}if(!s)return a}function j(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}const mt=/\[(\[)?(\.\.\.)?(\w+?)(?:=(\w+))?\]\]?/g;function M(t,n){return"/"+U(t).map(e=>e.replace(mt,(a,i,o,s)=>{const c=n[s];if(!c){if(i||o&&c!==void 0)return"";throw new Error(`Missing parameter '${s}' in route ${t}`)}if(c[0]=="/"||c.endsWith("/"))throw new Error(`Parameter '${s}' in route ${t} cannot start or end with a slash`);return c})).filter(Boolean).join("/")}function N(t,n,e){const a=ut(n);for(const i of a){const o=dt(i),s=o.pattern.exec(_t(t));if(!s)continue;const c=pt(s,o.params,e);if(c)return{params:c,id:i}}}const _t=t=>t.endsWith("/")?t.slice(0,-1):t,U=t=>t.slice(1).split("/");function vt(t,n,e,a,i){function o(r){const f=r.split("/")[1];if(t.includes(f)&&(i==="always"||f!==n))return f;if(i==="never")return n}function s(r,u){const f=r.endsWith("/")&&r!=="/";r=f?r.slice(0,-1):r;let l=wt(r,u,e,a);return f&&(l+="/"),(i==="always"||u!==n)&&(l=`/${u}${l}`),l}function c(r,u){const f=r.endsWith("/")&&r!=="/";(i==="always"||u!==n)&&(r=r.replace(`/${u}`,"")||"/");const l=f;r=l?r.slice(0,-1):r;let g=xt(r,u,e,a);return l&&(g+="/"),g}return{getLanguageFromLocalisedPath:o,getLocalisedPath:s,getCanonicalPath:c}}function xt(t,n,e,a){for(const[i,o]of Object.entries(e)){if(!(n in o))continue;const s=o[n];if(!s)continue;const c=N(t,[s],a);if(c)return M(i,c.params)}return t}function wt(t,n,e,a){const i=N(t,Object.keys(e),a);if(!i)return t;const o=e[i.id];if(!o)return t;const s=o[n];return s?M(s,i.params):t}function Tt(t,n){const e={},a=[],i=t.sourceLanguageTag,o={defaultLanguageTag:i,runtime:t,translations:e,matchers:{},exclude:at(a),prefixDefaultLanguage:"never",textDirection:st(t.availableLanguageTags),seo:{noAlternateLinks:!1}},s=vt(t.availableLanguageTags,i,o.translations,o.matchers,o.prefixDefaultLanguage);return Object.freeze(e),Object.freeze(o),{config:o,strategy:s,reroute:()=>nt(s),handle:()=>{throw new Error("")},getLanguageFromUrl(c){const r=E(w),[u]=b(c.pathname,r);return o.exclude(u)?o.defaultLanguageTag:s.getLanguageFromLocalisedPath(u)||o.defaultLanguageTag},resolveRoute(c,r=void 0){if(o.exclude(c))return c;const u=E(w),[f,l]=b(c,u);if(r=r??t.languageTag(),!c.startsWith(u))return c;const g=s.getLocalisedPath(f,r);return B(g,u,l)},route(c){const r=E(w),[u,f]=b(c,r),g=s.getLanguageFromLocalisedPath(u)||o.defaultLanguageTag,m=s.getCanonicalPath(u,g);return B(m,r,f)}}}function E(t){return t===""?"":t.startsWith("/")?t:Z(t,new URL(H(J).url))}const $t=Tt(q);export{b as a,$t as i,L as l,Z as n,J as p,B as s};

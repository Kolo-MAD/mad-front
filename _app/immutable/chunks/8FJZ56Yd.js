import{c as ee,b as ae,s as S,h as C,g as re,a as ne,d as z,e as fe,H as ie,r as F,f as b,i as N,j as le,k as K,l as P,p as se,I as k,m as Q,n as U,o as X,q as ue,t as G,E as M,u as te,v as ve,w as de,x as _e,y,z as oe,A as ce,B as he,C as W,D as Ee,F as pe}from"./BmxqI107.js";function me(l,e){return e}function Ae(l,e,a,u){for(var v=[],_=e.length,t=0;t<_;t++)te(e[t].e,v,!0);var o=_>0&&v.length===0&&a!==null;if(o){var A=a.parentNode;ve(A),A.append(a),u.clear(),m(l,e[0].prev,e[_-1].next)}de(v,()=>{for(var h=0;h<_;h++){var d=e[h];o||(u.delete(d.k),m(l,d.prev,d.next)),_e(d.e,!o)}})}function Ce(l,e,a,u,v,_=null){var t=l,o={flags:e,items:new Map,first:null},A=(e&W)!==0;if(A){var h=l;t=C?S(re(h)):h.appendChild(ee())}C&&ne();var d=null,w=!1,f=fe(()=>{var s=a();return he(s)?s:s==null?[]:Q(s)});ae(()=>{var s=z(f),r=s.length;if(w&&r===0)return;w=r===0;let T=!1;if(C){var E=t.data===ie;E!==(r===0)&&(t=F(),S(t),b(!1),T=!0)}if(C){for(var p=null,I,c=0;c<r;c++){if(N.nodeType===8&&N.data===le){t=N,T=!0,b(!1);break}var n=s[c],i=u(n,c);I=Z(N,o,p,null,n,i,c,v,e,a),o.items.set(i,I),p=I}r>0&&S(F())}C||Ie(s,o,t,v,e,u,a),_!==null&&(r===0?d?K(d):d=P(()=>_(t)):d!==null&&se(d,()=>{d=null})),T&&b(!0),z(f)}),C&&(t=N)}function Ie(l,e,a,u,v,_,t){var O,q,B,V;var o=(v&pe)!==0,A=(v&(y|M))!==0,h=l.length,d=e.items,w=e.first,f=w,s,r=null,T,E=[],p=[],I,c,n,i;if(o)for(i=0;i<h;i+=1)I=l[i],c=_(I,i),n=d.get(c),n!==void 0&&((O=n.a)==null||O.measure(),(T??(T=new Set)).add(n));for(i=0;i<h;i+=1){if(I=l[i],c=_(I,i),n=d.get(c),n===void 0){var $=f?f.e.nodes_start:a;r=Z($,e,r,r===null?e.first:r.next,I,c,i,u,v,t),d.set(c,r),E=[],p=[],f=r.next;continue}if(A&&Te(n,I,i,v),(n.e.f&k)!==0&&(K(n.e),o&&((q=n.a)==null||q.unfix(),(T??(T=new Set)).delete(n))),n!==f){if(s!==void 0&&s.has(n)){if(E.length<p.length){var g=p[0],x;r=g.prev;var L=E[0],D=E[E.length-1];for(x=0;x<E.length;x+=1)J(E[x],g,a);for(x=0;x<p.length;x+=1)s.delete(p[x]);m(e,L.prev,D.next),m(e,r,L),m(e,D,g),f=g,r=D,i-=1,E=[],p=[]}else s.delete(n),J(n,f,a),m(e,n.prev,n.next),m(e,n,r===null?e.first:r.next),m(e,r,n),r=n;continue}for(E=[],p=[];f!==null&&f.k!==c;)(f.e.f&k)===0&&(s??(s=new Set)).add(f),p.push(f),f=f.next;if(f===null)continue;n=f}E.push(n),r=n,f=n.next}if(f!==null||s!==void 0){for(var H=s===void 0?[]:Q(s);f!==null;)(f.e.f&k)===0&&H.push(f),f=f.next;var R=H.length;if(R>0){var j=(v&W)!==0&&h===0?a:null;if(o){for(i=0;i<R;i+=1)(B=H[i].a)==null||B.measure();for(i=0;i<R;i+=1)(V=H[i].a)==null||V.fix()}Ae(e,H,j,d)}}o&&Ee(()=>{var Y;if(T!==void 0)for(n of T)(Y=n.a)==null||Y.apply()}),U.first=e.first&&e.first.e,U.last=r&&r.e}function Te(l,e,a,u){(u&y)!==0&&X(l.v,e),(u&M)!==0?X(l.i,a):l.i=a}function Z(l,e,a,u,v,_,t,o,A,h){var d=(A&y)!==0,w=(A&oe)===0,f=d?w?ue(v):G(v):v,s=(A&M)===0?t:G(t),r={i:s,v:f,k:_,a:null,e:null,prev:a,next:u};try{return r.e=P(()=>o(l,f,s,h),C),r.e.prev=a&&a.e,r.e.next=u&&u.e,a===null?e.first=r:(a.next=r,a.e.next=r.e),u!==null&&(u.prev=r,u.e.prev=r.e),r}finally{}}function J(l,e,a){for(var u=l.next?l.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=l.e.nodes_start;_!==u;){var t=ce(_);v.before(_),_=t}}function m(l,e,a){e===null?l.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{Ce as e,me as i};

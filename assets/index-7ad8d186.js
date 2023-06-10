(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function ga(n,t){const e=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)e[i[r]]=!0;return t?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const Jt={},Wi=[],Qe=()=>{},kh=()=>!1,Wh=/^on[^a-z]/,Fs=n=>Wh.test(n),_a=n=>n.startsWith("onUpdate:"),de=Object.assign,xa=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Xh=Object.prototype.hasOwnProperty,Yt=(n,t)=>Xh.call(n,t),Ht=Array.isArray,vr=n=>Bs(n)==="[object Map]",qh=n=>Bs(n)==="[object Set]",kt=n=>typeof n=="function",me=n=>typeof n=="string",va=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",ru=n=>ae(n)&&kt(n.then)&&kt(n.catch),Yh=Object.prototype.toString,Bs=n=>Yh.call(n),jh=n=>Bs(n).slice(8,-1),$h=n=>Bs(n)==="[object Object]",Ma=n=>me(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ys=ga(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Kh=/-(\w)/g,Ki=zs(n=>n.replace(Kh,(t,e)=>e?e.toUpperCase():"")),Zh=/\B([A-Z])/g,rr=zs(n=>n.replace(Zh,"-$1").toLowerCase()),su=zs(n=>n.charAt(0).toUpperCase()+n.slice(1)),eo=zs(n=>n?`on${su(n)}`:""),Ar=(n,t)=>!Object.is(n,t),no=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},ws=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Jh=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Qa;const qo=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hs(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=me(i)?nf(i):Hs(i);if(r)for(const s in r)t[s]=r[s]}return t}else{if(me(n))return n;if(ae(n))return n}}const Qh=/;(?![^(]*\))/g,tf=/:([^]+)/,ef=/\/\*[^]*?\*\//g;function nf(n){const t={};return n.replace(ef,"").split(Qh).forEach(e=>{if(e){const i=e.split(tf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ya(n){let t="";if(me(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=ya(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const rf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sf=ga(rf);function ou(n){return!!n||n===""}let Ye;class of{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Ye;try{return Ye=this,t()}finally{Ye=e}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function af(n,t=Ye){t&&t.active&&t.effects.push(n)}function lf(){return Ye}const Sa=n=>{const t=new Set(n);return t.w=0,t.n=0,t},au=n=>(n.w&kn)>0,lu=n=>(n.n&kn)>0,cf=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=kn},uf=n=>{const{deps:t}=n;if(t.length){let e=0;for(let i=0;i<t.length;i++){const r=t[i];au(r)&&!lu(r)?r.delete(n):t[e++]=r,r.w&=~kn,r.n&=~kn}t.length=e}},Yo=new WeakMap;let mr=0,kn=1;const jo=30;let $e;const li=Symbol(""),$o=Symbol("");class Ea{constructor(t,e=null,i){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,af(this,i)}run(){if(!this.active)return this.fn();let t=$e,e=Bn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=$e,$e=this,Bn=!0,kn=1<<++mr,mr<=jo?cf(this):tl(this),this.fn()}finally{mr<=jo&&uf(this),kn=1<<--mr,$e=this.parent,Bn=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(tl(this),this.onStop&&this.onStop(),this.active=!1)}}function tl(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let Bn=!0;const cu=[];function sr(){cu.push(Bn),Bn=!1}function or(){const n=cu.pop();Bn=n===void 0?!0:n}function Ue(n,t,e){if(Bn&&$e){let i=Yo.get(n);i||Yo.set(n,i=new Map);let r=i.get(e);r||i.set(e,r=Sa()),uu(r)}}function uu(n,t){let e=!1;mr<=jo?lu(n)||(n.n|=kn,e=!au(n)):e=!n.has($e),e&&(n.add($e),$e.deps.push(n))}function wn(n,t,e,i,r,s){const a=Yo.get(n);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(e==="length"&&Ht(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(e!==void 0&&o.push(a.get(e)),t){case"add":Ht(n)?Ma(e)&&o.push(a.get("length")):(o.push(a.get(li)),vr(n)&&o.push(a.get($o)));break;case"delete":Ht(n)||(o.push(a.get(li)),vr(n)&&o.push(a.get($o)));break;case"set":vr(n)&&o.push(a.get(li));break}if(o.length===1)o[0]&&Ko(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ko(Sa(l))}}function Ko(n,t){const e=Ht(n)?n:[...n];for(const i of e)i.computed&&el(i);for(const i of e)i.computed||el(i)}function el(n,t){(n!==$e||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const hf=ga("__proto__,__v_isRef,__isVue"),hu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(va)),ff=Ta(),df=Ta(!1,!0),pf=Ta(!0),nl=mf();function mf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const i=$t(this);for(let s=0,a=this.length;s<a;s++)Ue(i,"get",s+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map($t)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){sr();const i=$t(this)[t].apply(this,e);return or(),i}}),n}function gf(n){const t=$t(this);return Ue(t,"has",n),t.hasOwnProperty(n)}function Ta(n=!1,t=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&s===(n?t?Uf:gu:t?mu:pu).get(i))return i;const a=Ht(i);if(!n){if(a&&Yt(nl,r))return Reflect.get(nl,r,s);if(r==="hasOwnProperty")return gf}const o=Reflect.get(i,r,s);return(va(r)?hu.has(r):hf(r))||(n||Ue(i,"get",r),t)?o:ye(o)?a&&Ma(r)?o:o.value:ae(o)?n?_u(o):wa(o):o}}const _f=fu(),xf=fu(!0);function fu(n=!1){return function(e,i,r,s){let a=e[i];if(Zi(a)&&ye(a)&&!ye(r))return!1;if(!n&&(!Rs(r)&&!Zi(r)&&(a=$t(a),r=$t(r)),!Ht(e)&&ye(a)&&!ye(r)))return a.value=r,!0;const o=Ht(e)&&Ma(i)?Number(i)<e.length:Yt(e,i),l=Reflect.set(e,i,r,s);return e===$t(s)&&(o?Ar(r,a)&&wn(e,"set",i,r):wn(e,"add",i,r)),l}}function vf(n,t){const e=Yt(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&e&&wn(n,"delete",t,void 0),i}function Mf(n,t){const e=Reflect.has(n,t);return(!va(t)||!hu.has(t))&&Ue(n,"has",t),e}function yf(n){return Ue(n,"iterate",Ht(n)?"length":li),Reflect.ownKeys(n)}const du={get:ff,set:_f,deleteProperty:vf,has:Mf,ownKeys:yf},Sf={get:pf,set(n,t){return!0},deleteProperty(n,t){return!0}},Ef=de({},du,{get:df,set:xf}),ba=n=>n,Gs=n=>Reflect.getPrototypeOf(n);function Wr(n,t,e=!1,i=!1){n=n.__v_raw;const r=$t(n),s=$t(t);e||(t!==s&&Ue(r,"get",t),Ue(r,"get",s));const{has:a}=Gs(r),o=i?ba:e?Ca:wr;if(a.call(r,t))return o(n.get(t));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(t)}function Xr(n,t=!1){const e=this.__v_raw,i=$t(e),r=$t(n);return t||(n!==r&&Ue(i,"has",n),Ue(i,"has",r)),n===r?e.has(n):e.has(n)||e.has(r)}function qr(n,t=!1){return n=n.__v_raw,!t&&Ue($t(n),"iterate",li),Reflect.get(n,"size",n)}function il(n){n=$t(n);const t=$t(this);return Gs(t).has.call(t,n)||(t.add(n),wn(t,"add",n,n)),this}function rl(n,t){t=$t(t);const e=$t(this),{has:i,get:r}=Gs(e);let s=i.call(e,n);s||(n=$t(n),s=i.call(e,n));const a=r.call(e,n);return e.set(n,t),s?Ar(t,a)&&wn(e,"set",n,t):wn(e,"add",n,t),this}function sl(n){const t=$t(this),{has:e,get:i}=Gs(t);let r=e.call(t,n);r||(n=$t(n),r=e.call(t,n)),i&&i.call(t,n);const s=t.delete(n);return r&&wn(t,"delete",n,void 0),s}function ol(){const n=$t(this),t=n.size!==0,e=n.clear();return t&&wn(n,"clear",void 0,void 0),e}function Yr(n,t){return function(i,r){const s=this,a=s.__v_raw,o=$t(a),l=t?ba:n?Ca:wr;return!n&&Ue(o,"iterate",li),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function jr(n,t,e){return function(...i){const r=this.__v_raw,s=$t(r),a=vr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=e?ba:t?Ca:wr;return!t&&Ue(s,"iterate",l?$o:li),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Pn(n){return function(...t){return n==="delete"?!1:this}}function Tf(){const n={get(s){return Wr(this,s)},get size(){return qr(this)},has:Xr,add:il,set:rl,delete:sl,clear:ol,forEach:Yr(!1,!1)},t={get(s){return Wr(this,s,!1,!0)},get size(){return qr(this)},has:Xr,add:il,set:rl,delete:sl,clear:ol,forEach:Yr(!1,!0)},e={get(s){return Wr(this,s,!0)},get size(){return qr(this,!0)},has(s){return Xr.call(this,s,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Yr(!0,!1)},i={get(s){return Wr(this,s,!0,!0)},get size(){return qr(this,!0)},has(s){return Xr.call(this,s,!0)},add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear"),forEach:Yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jr(s,!1,!1),e[s]=jr(s,!0,!1),t[s]=jr(s,!1,!0),i[s]=jr(s,!0,!0)}),[n,e,t,i]}const[bf,Af,wf,Rf]=Tf();function Aa(n,t){const e=t?n?Rf:wf:n?Af:bf;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Yt(e,r)&&r in i?e:i,r,s)}const Cf={get:Aa(!1,!1)},Pf={get:Aa(!1,!0)},Lf={get:Aa(!0,!1)},pu=new WeakMap,mu=new WeakMap,gu=new WeakMap,Uf=new WeakMap;function If(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Df(n){return n.__v_skip||!Object.isExtensible(n)?0:If(jh(n))}function wa(n){return Zi(n)?n:Ra(n,!1,du,Cf,pu)}function Nf(n){return Ra(n,!1,Ef,Pf,mu)}function _u(n){return Ra(n,!0,Sf,Lf,gu)}function Ra(n,t,e,i,r){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Df(n);if(a===0)return n;const o=new Proxy(n,a===2?i:e);return r.set(n,o),o}function Xi(n){return Zi(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Zi(n){return!!(n&&n.__v_isReadonly)}function Rs(n){return!!(n&&n.__v_isShallow)}function xu(n){return Xi(n)||Zi(n)}function $t(n){const t=n&&n.__v_raw;return t?$t(t):n}function vu(n){return ws(n,"__v_skip",!0),n}const wr=n=>ae(n)?wa(n):n,Ca=n=>ae(n)?_u(n):n;function Mu(n){Bn&&$e&&(n=$t(n),uu(n.dep||(n.dep=Sa())))}function yu(n,t){n=$t(n);const e=n.dep;e&&Ko(e)}function ye(n){return!!(n&&n.__v_isRef===!0)}function al(n){return Of(n,!0)}function Of(n,t){return ye(n)?n:new Ff(n,t)}class Ff{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:$t(t),this._value=e?t:wr(t)}get value(){return Mu(this),this._value}set value(t){const e=this.__v_isShallow||Rs(t)||Zi(t);t=e?t:$t(t),Ar(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:wr(t),yu(this))}}function Bf(n){return ye(n)?n.value:n}const zf={get:(n,t,e)=>Bf(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return ye(r)&&!ye(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function Su(n){return Xi(n)?n:new Proxy(n,zf)}class Hf{constructor(t,e,i,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ea(t,()=>{this._dirty||(this._dirty=!0,yu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=$t(this);return Mu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gf(n,t,e=!1){let i,r;const s=kt(n);return s?(i=n,r=Qe):(i=n.get,r=n.set),new Hf(i,r,s||!r,e)}function zn(n,t,e,i){let r;try{r=i?n(...i):n()}catch(s){Vs(s,t,e)}return r}function tn(n,t,e,i){if(kt(n)){const s=zn(n,t,e,i);return s&&ru(s)&&s.catch(a=>{Vs(a,t,e)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(tn(n[s],t,e,i));return r}function Vs(n,t,e,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=e;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){zn(l,null,10,[n,a,o]);return}}Vf(n,e,r,i)}function Vf(n,t,e,i=!0){console.error(n)}let Rr=!1,Zo=!1;const ve=[];let an=0;const qi=[];let yn=null,si=0;const Eu=Promise.resolve();let Pa=null;function kf(n){const t=Pa||Eu;return n?t.then(this?n.bind(this):n):t}function Wf(n){let t=an+1,e=ve.length;for(;t<e;){const i=t+e>>>1;Cr(ve[i])<n?t=i+1:e=i}return t}function La(n){(!ve.length||!ve.includes(n,Rr&&n.allowRecurse?an+1:an))&&(n.id==null?ve.push(n):ve.splice(Wf(n.id),0,n),Tu())}function Tu(){!Rr&&!Zo&&(Zo=!0,Pa=Eu.then(Au))}function Xf(n){const t=ve.indexOf(n);t>an&&ve.splice(t,1)}function qf(n){Ht(n)?qi.push(...n):(!yn||!yn.includes(n,n.allowRecurse?si+1:si))&&qi.push(n),Tu()}function ll(n,t=Rr?an+1:0){for(;t<ve.length;t++){const e=ve[t];e&&e.pre&&(ve.splice(t,1),t--,e())}}function bu(n){if(qi.length){const t=[...new Set(qi)];if(qi.length=0,yn){yn.push(...t);return}for(yn=t,yn.sort((e,i)=>Cr(e)-Cr(i)),si=0;si<yn.length;si++)yn[si]();yn=null,si=0}}const Cr=n=>n.id==null?1/0:n.id,Yf=(n,t)=>{const e=Cr(n)-Cr(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function Au(n){Zo=!1,Rr=!0,ve.sort(Yf);const t=Qe;try{for(an=0;an<ve.length;an++){const e=ve[an];e&&e.active!==!1&&zn(e,null,14)}}finally{an=0,ve.length=0,bu(),Rr=!1,Pa=null,(ve.length||qi.length)&&Au()}}function jf(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Jt;let r=e;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Jt;h&&(r=e.map(m=>me(m)?m.trim():m)),f&&(r=e.map(Jh))}let o,l=i[o=eo(t)]||i[o=eo(Ki(t))];!l&&s&&(l=i[o=eo(rr(t))]),l&&tn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,tn(c,n,6,r)}}function wu(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!kt(n)){const l=c=>{const u=wu(c,t,!0);u&&(o=!0,de(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(ae(n)&&i.set(n,null),null):(Ht(s)?s.forEach(l=>a[l]=null):de(a,s),ae(n)&&i.set(n,a),a)}function ks(n,t){return!n||!Fs(t)?!1:(t=t.slice(2).replace(/Once$/,""),Yt(n,t[0].toLowerCase()+t.slice(1))||Yt(n,rr(t))||Yt(n,t))}let ln=null,Ru=null;function Cs(n){const t=ln;return ln=n,Ru=n&&n.type.__scopeId||null,t}function $f(n,t=ln,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&xl(-1);const s=Cs(t);let a;try{a=n(...r)}finally{Cs(s),i._d&&xl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function io(n){const{type:t,vnode:e,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:x,inheritAttrs:_}=n;let p,d;const P=Cs(n);try{if(e.shapeFlag&4){const M=r||i;p=sn(u.call(M,M,f,s,m,h,x)),d=l}else{const M=t;p=sn(M.length>1?M(s,{attrs:l,slots:o,emit:c}):M(s,null)),d=t.props?l:Kf(l)}}catch(M){yr.length=0,Vs(M,n,1),p=Hn(Pr)}let v=p;if(d&&_!==!1){const M=Object.keys(d),{shapeFlag:R}=v;M.length&&R&7&&(a&&M.some(_a)&&(d=Zf(d,a)),v=Ji(v,d))}return e.dirs&&(v=Ji(v),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&(v.transition=e.transition),p=v,Cs(P),p}const Kf=n=>{let t;for(const e in n)(e==="class"||e==="style"||Fs(e))&&((t||(t={}))[e]=n[e]);return t},Zf=(n,t)=>{const e={};for(const i in n)(!_a(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Jf(n,t,e){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?cl(i,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ks(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?cl(i,a,c):!0:!!a;return!1}function cl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!ks(e,s))return!0}return!1}function Qf({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const td=n=>n.__isSuspense;function ed(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):qf(n)}const $r={};function ro(n,t,e){return Cu(n,t,e)}function Cu(n,t,{immediate:e,deep:i,flush:r,onTrack:s,onTrigger:a}=Jt){var o;const l=lf()===((o=Me)==null?void 0:o.scope)?Me:null;let c,u=!1,f=!1;if(ye(n)?(c=()=>n.value,u=Rs(n)):Xi(n)?(c=()=>n,i=!0):Ht(n)?(f=!0,u=n.some(M=>Xi(M)||Rs(M)),c=()=>n.map(M=>{if(ye(M))return M.value;if(Xi(M))return Hi(M);if(kt(M))return zn(M,l,2)})):kt(n)?t?c=()=>zn(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),tn(n,l,3,[m])}:c=Qe,t&&i){const M=c;c=()=>Hi(M())}let h,m=M=>{h=P.onStop=()=>{zn(M,l,4)}},x;if(Ur)if(m=Qe,t?e&&tn(t,l,3,[c(),f?[]:void 0,m]):c(),r==="sync"){const M=Zd();x=M.__watcherHandles||(M.__watcherHandles=[])}else return Qe;let _=f?new Array(n.length).fill($r):$r;const p=()=>{if(P.active)if(t){const M=P.run();(i||u||(f?M.some((R,F)=>Ar(R,_[F])):Ar(M,_)))&&(h&&h(),tn(t,l,3,[M,_===$r?void 0:f&&_[0]===$r?[]:_,m]),_=M)}else P.run()};p.allowRecurse=!!t;let d;r==="sync"?d=p:r==="post"?d=()=>Pe(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),d=()=>La(p));const P=new Ea(c,d);t?e?p():_=P.run():r==="post"?Pe(P.run.bind(P),l&&l.suspense):P.run();const v=()=>{P.stop(),l&&l.scope&&xa(l.scope.effects,P)};return x&&x.push(v),v}function nd(n,t,e){const i=this.proxy,r=me(n)?n.includes(".")?Pu(i,n):()=>i[n]:n.bind(i,i);let s;kt(t)?s=t:(s=t.handler,e=t);const a=Me;Qi(this);const o=Cu(r,s.bind(i),e);return a?Qi(a):ci(),o}function Pu(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Hi(n,t){if(!ae(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),ye(n))Hi(n.value,t);else if(Ht(n))for(let e=0;e<n.length;e++)Hi(n[e],t);else if(qh(n)||vr(n))n.forEach(e=>{Hi(e,t)});else if($h(n))for(const e in n)Hi(n[e],t);return n}function jn(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(sr(),tn(l,e,8,[n.el,o,n,t]),or())}}function Lu(n,t){return kt(n)?(()=>de({name:n.name},t,{setup:n}))():n}const Ss=n=>!!n.type.__asyncLoader,Uu=n=>n.type.__isKeepAlive;function id(n,t){Iu(n,"a",t)}function rd(n,t){Iu(n,"da",t)}function Iu(n,t,e=Me){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ws(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Uu(r.parent.vnode)&&sd(i,t,e,r),r=r.parent}}function sd(n,t,e,i){const r=Ws(t,n,i,!0);Nu(()=>{xa(i[t],r)},e)}function Ws(n,t,e=Me,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;sr(),Qi(e);const o=tn(t,e,n,a);return ci(),or(),o});return i?r.unshift(s):r.push(s),s}}const Rn=n=>(t,e=Me)=>(!Ur||n==="sp")&&Ws(n,(...i)=>t(...i),e),od=Rn("bm"),Du=Rn("m"),ad=Rn("bu"),ld=Rn("u"),cd=Rn("bum"),Nu=Rn("um"),ud=Rn("sp"),hd=Rn("rtg"),fd=Rn("rtc");function dd(n,t=Me){Ws("ec",n,t)}const pd=Symbol.for("v-ndc"),Jo=n=>n?ju(n)?Oa(n)||n.proxy:Jo(n.parent):null,Mr=de(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Jo(n.parent),$root:n=>Jo(n.root),$emit:n=>n.emit,$options:n=>Ua(n),$forceUpdate:n=>n.f||(n.f=()=>La(n.update)),$nextTick:n=>n.n||(n.n=kf.bind(n.proxy)),$watch:n=>nd.bind(n)}),so=(n,t)=>n!==Jt&&!n.__isScriptSetup&&Yt(n,t),md={get({_:n},t){const{ctx:e,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(so(i,t))return a[t]=1,i[t];if(r!==Jt&&Yt(r,t))return a[t]=2,r[t];if((c=n.propsOptions[0])&&Yt(c,t))return a[t]=3,s[t];if(e!==Jt&&Yt(e,t))return a[t]=4,e[t];Qo&&(a[t]=0)}}const u=Mr[t];let f,h;if(u)return t==="$attrs"&&Ue(n,"get",t),u(n);if((f=o.__cssModules)&&(f=f[t]))return f;if(e!==Jt&&Yt(e,t))return a[t]=4,e[t];if(h=l.config.globalProperties,Yt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return so(r,t)?(r[t]=e,!0):i!==Jt&&Yt(i,t)?(i[t]=e,!0):Yt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!e[a]||n!==Jt&&Yt(n,a)||so(t,a)||(o=s[0])&&Yt(o,a)||Yt(i,a)||Yt(Mr,a)||Yt(r.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Yt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ul(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Qo=!0;function gd(n){const t=Ua(n),e=n.proxy,i=n.ctx;Qo=!1,t.beforeCreate&&hl(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:x,activated:_,deactivated:p,beforeDestroy:d,beforeUnmount:P,destroyed:v,unmounted:M,render:R,renderTracked:F,renderTriggered:z,errorCaptured:k,serverPrefetch:E,expose:U,inheritAttrs:nt,components:Q,directives:V,filters:W}=t;if(c&&_d(c,i,null),a)for(const q in a){const G=a[q];kt(G)&&(i[q]=G.bind(e))}if(r){const q=r.call(e,e);ae(q)&&(n.data=wa(q))}if(Qo=!0,s)for(const q in s){const G=s[q],pt=kt(G)?G.bind(e,e):kt(G.get)?G.get.bind(e,e):Qe,ct=!kt(G)&&kt(G.set)?G.set.bind(e):Qe,St=$d({get:pt,set:ct});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>St.value,set:Z=>St.value=Z})}if(o)for(const q in o)Ou(o[q],i,e,q);if(l){const q=kt(l)?l.call(e):l;Reflect.ownKeys(q).forEach(G=>{Ed(G,q[G])})}u&&hl(u,n,"c");function at(q,G){Ht(G)?G.forEach(pt=>q(pt.bind(e))):G&&q(G.bind(e))}if(at(od,f),at(Du,h),at(ad,m),at(ld,x),at(id,_),at(rd,p),at(dd,k),at(fd,F),at(hd,z),at(cd,P),at(Nu,M),at(ud,E),Ht(U))if(U.length){const q=n.exposed||(n.exposed={});U.forEach(G=>{Object.defineProperty(q,G,{get:()=>e[G],set:pt=>e[G]=pt})})}else n.exposed||(n.exposed={});R&&n.render===Qe&&(n.render=R),nt!=null&&(n.inheritAttrs=nt),Q&&(n.components=Q),V&&(n.directives=V)}function _d(n,t,e=Qe){Ht(n)&&(n=ta(n));for(const i in n){const r=n[i];let s;ae(r)?"default"in r?s=Es(r.from||i,r.default,!0):s=Es(r.from||i):s=Es(r),ye(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[i]=s}}function hl(n,t,e){tn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Ou(n,t,e,i){const r=i.includes(".")?Pu(e,i):()=>e[i];if(me(n)){const s=t[n];kt(s)&&ro(r,s)}else if(kt(n))ro(r,n.bind(e));else if(ae(n))if(Ht(n))n.forEach(s=>Ou(s,t,e,i));else{const s=kt(n.handler)?n.handler.bind(e):t[n.handler];kt(s)&&ro(r,s,n)}}function Ua(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(t);let l;return o?l=o:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Ps(l,c,a,!0)),Ps(l,t,a)),ae(t)&&s.set(t,l),l}function Ps(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Ps(n,s,e,!0),r&&r.forEach(a=>Ps(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=xd[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const xd={data:fl,props:dl,emits:dl,methods:gr,computed:gr,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:gr,directives:gr,watch:Md,provide:fl,inject:vd};function fl(n,t){return t?n?function(){return de(kt(n)?n.call(this,this):n,kt(t)?t.call(this,this):t)}:t:n}function vd(n,t){return gr(ta(n),ta(t))}function ta(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function be(n,t){return n?[...new Set([].concat(n,t))]:t}function gr(n,t){return n?de(Object.create(null),n,t):t}function dl(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:de(Object.create(null),ul(n),ul(t??{})):t}function Md(n,t){if(!n)return t;if(!t)return n;const e=de(Object.create(null),n);for(const i in t)e[i]=be(n[i],t[i]);return e}function Fu(){return{app:null,config:{isNativeTag:kh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yd=0;function Sd(n,t){return function(i,r=null){kt(i)||(i=de({},i)),r!=null&&!ae(r)&&(r=null);const s=Fu(),a=new Set;let o=!1;const l=s.app={_uid:yd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Jd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&kt(c.install)?(a.add(c),c.install(l,...u)):kt(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Hn(i,r);return h.appContext=s,u&&t?t(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Oa(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){Ls=l;try{return c()}finally{Ls=null}}};return l}}let Ls=null;function Ed(n,t){if(Me){let e=Me.provides;const i=Me.parent&&Me.parent.provides;i===e&&(e=Me.provides=Object.create(i)),e[n]=t}}function Es(n,t,e=!1){const i=Me||ln;if(i||Ls){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Ls._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return e&&kt(t)?t.call(i&&i.proxy):t}}function Td(n,t,e,i=!1){const r={},s={};ws(s,qs,1),n.propsDefaults=Object.create(null),Bu(n,t,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);e?n.props=i?r:Nf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bd(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$t(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ks(n.emitsOptions,h))continue;const m=t[h];if(l)if(Yt(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const x=Ki(h);r[x]=ea(l,o,x,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Bu(n,t,r,s)&&(c=!0);let u;for(const f in o)(!t||!Yt(t,f)&&((u=rr(f))===f||!Yt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=ea(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!t||!Yt(t,f))&&(delete s[f],c=!0)}c&&wn(n,"set","$attrs")}function Bu(n,t,e,i){const[r,s]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(ys(l))continue;const c=t[l];let u;r&&Yt(r,u=Ki(l))?!s||!s.includes(u)?e[u]=c:(o||(o={}))[u]=c:ks(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$t(e),c=o||Jt;for(let u=0;u<s.length;u++){const f=s[u];e[f]=ea(r,l,f,c[f],n,!Yt(c,f))}}return a}function ea(n,t,e,i,r,s){const a=n[e];if(a!=null){const o=Yt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&kt(l)){const{propsDefaults:c}=r;e in c?i=c[e]:(Qi(r),i=c[e]=l.call(null,t),ci())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===rr(e))&&(i=!0))}return i}function zu(n,t,e=!1){const i=t.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!kt(n)){const u=f=>{l=!0;const[h,m]=zu(f,t,!0);de(a,h),m&&o.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ae(n)&&i.set(n,Wi),Wi;if(Ht(s))for(let u=0;u<s.length;u++){const f=Ki(s[u]);pl(f)&&(a[f]=Jt)}else if(s)for(const u in s){const f=Ki(u);if(pl(f)){const h=s[u],m=a[f]=Ht(h)||kt(h)?{type:h}:de({},h);if(m){const x=_l(Boolean,m.type),_=_l(String,m.type);m[0]=x>-1,m[1]=_<0||x<_,(x>-1||Yt(m,"default"))&&o.push(f)}}}const c=[a,o];return ae(n)&&i.set(n,c),c}function pl(n){return n[0]!=="$"}function ml(n){const t=n&&n.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:n===null?"null":""}function gl(n,t){return ml(n)===ml(t)}function _l(n,t){return Ht(t)?t.findIndex(e=>gl(e,n)):kt(t)&&gl(t,n)?0:-1}const Hu=n=>n[0]==="_"||n==="$stable",Ia=n=>Ht(n)?n.map(sn):[sn(n)],Ad=(n,t,e)=>{if(t._n)return t;const i=$f((...r)=>Ia(t(...r)),e);return i._c=!1,i},Gu=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Hu(r))continue;const s=n[r];if(kt(s))t[r]=Ad(r,s,i);else if(s!=null){const a=Ia(s);t[r]=()=>a}}},Vu=(n,t)=>{const e=Ia(t);n.slots.default=()=>e},wd=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=$t(t),ws(t,"_",e)):Gu(t,n.slots={})}else n.slots={},t&&Vu(n,t);ws(n.slots,qs,1)},Rd=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,a=Jt;if(i.shapeFlag&32){const o=t._;o?e&&o===1?s=!1:(de(r,t),!e&&o===1&&delete r._):(s=!t.$stable,Gu(t,r)),a=t}else t&&(Vu(n,t),a={default:1});if(s)for(const o in r)!Hu(o)&&!(o in a)&&delete r[o]};function na(n,t,e,i,r=!1){if(Ht(n)){n.forEach((h,m)=>na(h,t&&(Ht(t)?t[m]:t),e,i,r));return}if(Ss(i)&&!r)return;const s=i.shapeFlag&4?Oa(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=t&&t.r,u=o.refs===Jt?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(me(c)?(u[c]=null,Yt(f,c)&&(f[c]=null)):ye(c)&&(c.value=null)),kt(l))zn(l,o,12,[a,u]);else{const h=me(l),m=ye(l);if(h||m){const x=()=>{if(n.f){const _=h?Yt(f,l)?f[l]:u[l]:l.value;r?Ht(_)&&xa(_,s):Ht(_)?_.includes(s)||_.push(s):h?(u[l]=[s],Yt(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,Yt(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(x.id=-1,Pe(x,e)):x()}}}const Pe=ed;function Cd(n){return Pd(n)}function Pd(n,t){const e=qo();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Qe,insertStaticContent:x}=n,_=(g,b,T,D=null,N=null,X=null,L=!1,S=null,j=!!b.dynamicChildren)=>{if(g===b)return;g&&!ur(g,b)&&(D=w(g),Z(g,N,X,!0),g=null),b.patchFlag===-2&&(j=!1,b.dynamicChildren=null);const{type:J,ref:yt,shapeFlag:A}=b;switch(J){case Xs:p(g,b,T,D);break;case Pr:d(g,b,T,D);break;case oo:g==null&&P(b,T,D,L);break;case Sn:Q(g,b,T,D,N,X,L,S,j);break;default:A&1?R(g,b,T,D,N,X,L,S,j):A&6?V(g,b,T,D,N,X,L,S,j):(A&64||A&128)&&J.process(g,b,T,D,N,X,L,S,j,ut)}yt!=null&&N&&na(yt,g&&g.ref,X,b||g,!b)},p=(g,b,T,D)=>{if(g==null)i(b.el=o(b.children),T,D);else{const N=b.el=g.el;b.children!==g.children&&c(N,b.children)}},d=(g,b,T,D)=>{g==null?i(b.el=l(b.children||""),T,D):b.el=g.el},P=(g,b,T,D)=>{[g.el,g.anchor]=x(g.children,b,T,D,g.el,g.anchor)},v=({el:g,anchor:b},T,D)=>{let N;for(;g&&g!==b;)N=h(g),i(g,T,D),g=N;i(b,T,D)},M=({el:g,anchor:b})=>{let T;for(;g&&g!==b;)T=h(g),r(g),g=T;r(b)},R=(g,b,T,D,N,X,L,S,j)=>{L=L||b.type==="svg",g==null?F(b,T,D,N,X,L,S,j):E(g,b,N,X,L,S,j)},F=(g,b,T,D,N,X,L,S)=>{let j,J;const{type:yt,props:A,shapeFlag:y,transition:$,dirs:ht}=g;if(j=g.el=a(g.type,X,A&&A.is,A),y&8?u(j,g.children):y&16&&k(g.children,j,null,D,N,X&&yt!=="foreignObject",L,S),ht&&jn(g,null,D,"created"),z(j,g,g.scopeId,L,D),A){for(const O in A)O!=="value"&&!ys(O)&&s(j,O,null,A[O],X,g.children,D,N,C);"value"in A&&s(j,"value",null,A.value),(J=A.onVnodeBeforeMount)&&nn(J,D,g)}ht&&jn(g,null,D,"beforeMount");const gt=(!N||N&&!N.pendingBranch)&&$&&!$.persisted;gt&&$.beforeEnter(j),i(j,b,T),((J=A&&A.onVnodeMounted)||gt||ht)&&Pe(()=>{J&&nn(J,D,g),gt&&$.enter(j),ht&&jn(g,null,D,"mounted")},N)},z=(g,b,T,D,N)=>{if(T&&m(g,T),D)for(let X=0;X<D.length;X++)m(g,D[X]);if(N){let X=N.subTree;if(b===X){const L=N.vnode;z(g,L,L.scopeId,L.slotScopeIds,N.parent)}}},k=(g,b,T,D,N,X,L,S,j=0)=>{for(let J=j;J<g.length;J++){const yt=g[J]=S?Nn(g[J]):sn(g[J]);_(null,yt,b,T,D,N,X,L,S)}},E=(g,b,T,D,N,X,L)=>{const S=b.el=g.el;let{patchFlag:j,dynamicChildren:J,dirs:yt}=b;j|=g.patchFlag&16;const A=g.props||Jt,y=b.props||Jt;let $;T&&$n(T,!1),($=y.onVnodeBeforeUpdate)&&nn($,T,b,g),yt&&jn(b,g,T,"beforeUpdate"),T&&$n(T,!0);const ht=N&&b.type!=="foreignObject";if(J?U(g.dynamicChildren,J,S,T,D,ht,X):L||G(g,b,S,null,T,D,ht,X,!1),j>0){if(j&16)nt(S,b,A,y,T,D,N);else if(j&2&&A.class!==y.class&&s(S,"class",null,y.class,N),j&4&&s(S,"style",A.style,y.style,N),j&8){const gt=b.dynamicProps;for(let O=0;O<gt.length;O++){const ft=gt[O],vt=A[ft],ot=y[ft];(ot!==vt||ft==="value")&&s(S,ft,vt,ot,N,g.children,T,D,C)}}j&1&&g.children!==b.children&&u(S,b.children)}else!L&&J==null&&nt(S,b,A,y,T,D,N);(($=y.onVnodeUpdated)||yt)&&Pe(()=>{$&&nn($,T,b,g),yt&&jn(b,g,T,"updated")},D)},U=(g,b,T,D,N,X,L)=>{for(let S=0;S<b.length;S++){const j=g[S],J=b[S],yt=j.el&&(j.type===Sn||!ur(j,J)||j.shapeFlag&70)?f(j.el):T;_(j,J,yt,null,D,N,X,L,!0)}},nt=(g,b,T,D,N,X,L)=>{if(T!==D){if(T!==Jt)for(const S in T)!ys(S)&&!(S in D)&&s(g,S,T[S],null,L,b.children,N,X,C);for(const S in D){if(ys(S))continue;const j=D[S],J=T[S];j!==J&&S!=="value"&&s(g,S,J,j,L,b.children,N,X,C)}"value"in D&&s(g,"value",T.value,D.value)}},Q=(g,b,T,D,N,X,L,S,j)=>{const J=b.el=g?g.el:o(""),yt=b.anchor=g?g.anchor:o("");let{patchFlag:A,dynamicChildren:y,slotScopeIds:$}=b;$&&(S=S?S.concat($):$),g==null?(i(J,T,D),i(yt,T,D),k(b.children,T,yt,N,X,L,S,j)):A>0&&A&64&&y&&g.dynamicChildren?(U(g.dynamicChildren,y,T,N,X,L,S),(b.key!=null||N&&b===N.subTree)&&ku(g,b,!0)):G(g,b,T,yt,N,X,L,S,j)},V=(g,b,T,D,N,X,L,S,j)=>{b.slotScopeIds=S,g==null?b.shapeFlag&512?N.ctx.activate(b,T,D,L,j):W(b,T,D,N,X,L,j):et(g,b,j)},W=(g,b,T,D,N,X,L)=>{const S=g.component=kd(g,D,N);if(Uu(g)&&(S.ctx.renderer=ut),Wd(S),S.asyncDep){if(N&&N.registerDep(S,at),!g.el){const j=S.subTree=Hn(Pr);d(null,j,b,T)}return}at(S,g,b,T,N,X,L)},et=(g,b,T)=>{const D=b.component=g.component;if(Jf(g,b,T))if(D.asyncDep&&!D.asyncResolved){q(D,b,T);return}else D.next=b,Xf(D.update),D.update();else b.el=g.el,D.vnode=b},at=(g,b,T,D,N,X,L)=>{const S=()=>{if(g.isMounted){let{next:yt,bu:A,u:y,parent:$,vnode:ht}=g,gt=yt,O;$n(g,!1),yt?(yt.el=ht.el,q(g,yt,L)):yt=ht,A&&no(A),(O=yt.props&&yt.props.onVnodeBeforeUpdate)&&nn(O,$,yt,ht),$n(g,!0);const ft=io(g),vt=g.subTree;g.subTree=ft,_(vt,ft,f(vt.el),w(vt),g,N,X),yt.el=ft.el,gt===null&&Qf(g,ft.el),y&&Pe(y,N),(O=yt.props&&yt.props.onVnodeUpdated)&&Pe(()=>nn(O,$,yt,ht),N)}else{let yt;const{el:A,props:y}=b,{bm:$,m:ht,parent:gt}=g,O=Ss(b);if($n(g,!1),$&&no($),!O&&(yt=y&&y.onVnodeBeforeMount)&&nn(yt,gt,b),$n(g,!0),A&&dt){const ft=()=>{g.subTree=io(g),dt(A,g.subTree,g,N,null)};O?b.type.__asyncLoader().then(()=>!g.isUnmounted&&ft()):ft()}else{const ft=g.subTree=io(g);_(null,ft,T,D,g,N,X),b.el=ft.el}if(ht&&Pe(ht,N),!O&&(yt=y&&y.onVnodeMounted)){const ft=b;Pe(()=>nn(yt,gt,ft),N)}(b.shapeFlag&256||gt&&Ss(gt.vnode)&&gt.vnode.shapeFlag&256)&&g.a&&Pe(g.a,N),g.isMounted=!0,b=T=D=null}},j=g.effect=new Ea(S,()=>La(J),g.scope),J=g.update=()=>j.run();J.id=g.uid,$n(g,!0),J()},q=(g,b,T)=>{b.component=g;const D=g.vnode.props;g.vnode=b,g.next=null,bd(g,b.props,D,T),Rd(g,b.children,T),sr(),ll(),or()},G=(g,b,T,D,N,X,L,S,j=!1)=>{const J=g&&g.children,yt=g?g.shapeFlag:0,A=b.children,{patchFlag:y,shapeFlag:$}=b;if(y>0){if(y&128){ct(J,A,T,D,N,X,L,S,j);return}else if(y&256){pt(J,A,T,D,N,X,L,S,j);return}}$&8?(yt&16&&C(J,N,X),A!==J&&u(T,A)):yt&16?$&16?ct(J,A,T,D,N,X,L,S,j):C(J,N,X,!0):(yt&8&&u(T,""),$&16&&k(A,T,D,N,X,L,S,j))},pt=(g,b,T,D,N,X,L,S,j)=>{g=g||Wi,b=b||Wi;const J=g.length,yt=b.length,A=Math.min(J,yt);let y;for(y=0;y<A;y++){const $=b[y]=j?Nn(b[y]):sn(b[y]);_(g[y],$,T,null,N,X,L,S,j)}J>yt?C(g,N,X,!0,!1,A):k(b,T,D,N,X,L,S,j,A)},ct=(g,b,T,D,N,X,L,S,j)=>{let J=0;const yt=b.length;let A=g.length-1,y=yt-1;for(;J<=A&&J<=y;){const $=g[J],ht=b[J]=j?Nn(b[J]):sn(b[J]);if(ur($,ht))_($,ht,T,null,N,X,L,S,j);else break;J++}for(;J<=A&&J<=y;){const $=g[A],ht=b[y]=j?Nn(b[y]):sn(b[y]);if(ur($,ht))_($,ht,T,null,N,X,L,S,j);else break;A--,y--}if(J>A){if(J<=y){const $=y+1,ht=$<yt?b[$].el:D;for(;J<=y;)_(null,b[J]=j?Nn(b[J]):sn(b[J]),T,ht,N,X,L,S,j),J++}}else if(J>y)for(;J<=A;)Z(g[J],N,X,!0),J++;else{const $=J,ht=J,gt=new Map;for(J=ht;J<=y;J++){const bt=b[J]=j?Nn(b[J]):sn(b[J]);bt.key!=null&&gt.set(bt.key,J)}let O,ft=0;const vt=y-ht+1;let ot=!1,Ct=0;const Pt=new Array(vt);for(J=0;J<vt;J++)Pt[J]=0;for(J=$;J<=A;J++){const bt=g[J];if(ft>=vt){Z(bt,N,X,!0);continue}let At;if(bt.key!=null)At=gt.get(bt.key);else for(O=ht;O<=y;O++)if(Pt[O-ht]===0&&ur(bt,b[O])){At=O;break}At===void 0?Z(bt,N,X,!0):(Pt[At-ht]=J+1,At>=Ct?Ct=At:ot=!0,_(bt,b[At],T,null,N,X,L,S,j),ft++)}const Lt=ot?Ld(Pt):Wi;for(O=Lt.length-1,J=vt-1;J>=0;J--){const bt=ht+J,At=b[bt],It=bt+1<yt?b[bt+1].el:D;Pt[J]===0?_(null,At,T,It,N,X,L,S,j):ot&&(O<0||J!==Lt[O]?St(At,T,It,2):O--)}}},St=(g,b,T,D,N=null)=>{const{el:X,type:L,transition:S,children:j,shapeFlag:J}=g;if(J&6){St(g.component.subTree,b,T,D);return}if(J&128){g.suspense.move(b,T,D);return}if(J&64){L.move(g,b,T,ut);return}if(L===Sn){i(X,b,T);for(let A=0;A<j.length;A++)St(j[A],b,T,D);i(g.anchor,b,T);return}if(L===oo){v(g,b,T);return}if(D!==2&&J&1&&S)if(D===0)S.beforeEnter(X),i(X,b,T),Pe(()=>S.enter(X),N);else{const{leave:A,delayLeave:y,afterLeave:$}=S,ht=()=>i(X,b,T),gt=()=>{A(X,()=>{ht(),$&&$()})};y?y(X,ht,gt):gt()}else i(X,b,T)},Z=(g,b,T,D=!1,N=!1)=>{const{type:X,props:L,ref:S,children:j,dynamicChildren:J,shapeFlag:yt,patchFlag:A,dirs:y}=g;if(S!=null&&na(S,null,T,g,!0),yt&256){b.ctx.deactivate(g);return}const $=yt&1&&y,ht=!Ss(g);let gt;if(ht&&(gt=L&&L.onVnodeBeforeUnmount)&&nn(gt,b,g),yt&6)B(g.component,T,D);else{if(yt&128){g.suspense.unmount(T,D);return}$&&jn(g,null,b,"beforeUnmount"),yt&64?g.type.remove(g,b,T,N,ut,D):J&&(X!==Sn||A>0&&A&64)?C(J,b,T,!1,!0):(X===Sn&&A&384||!N&&yt&16)&&C(j,b,T),D&&Mt(g)}(ht&&(gt=L&&L.onVnodeUnmounted)||$)&&Pe(()=>{gt&&nn(gt,b,g),$&&jn(g,null,b,"unmounted")},T)},Mt=g=>{const{type:b,el:T,anchor:D,transition:N}=g;if(b===Sn){H(T,D);return}if(b===oo){M(g);return}const X=()=>{r(T),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:L,delayLeave:S}=N,j=()=>L(T,X);S?S(g.el,X,j):j()}else X()},H=(g,b)=>{let T;for(;g!==b;)T=h(g),r(g),g=T;r(b)},B=(g,b,T)=>{const{bum:D,scope:N,update:X,subTree:L,um:S}=g;D&&no(D),N.stop(),X&&(X.active=!1,Z(L,g,b,T)),S&&Pe(S,b),Pe(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},C=(g,b,T,D=!1,N=!1,X=0)=>{for(let L=X;L<g.length;L++)Z(g[L],b,T,D,N)},w=g=>g.shapeFlag&6?w(g.component.subTree):g.shapeFlag&128?g.suspense.next():h(g.anchor||g.el),rt=(g,b,T)=>{g==null?b._vnode&&Z(b._vnode,null,null,!0):_(b._vnode||null,g,b,null,null,null,T),ll(),bu(),b._vnode=g},ut={p:_,um:Z,m:St,r:Mt,mt:W,mc:k,pc:G,pbc:U,n:w,o:n};let it,dt;return t&&([it,dt]=t(ut)),{render:rt,hydrate:it,createApp:Sd(rt,it)}}function $n({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function ku(n,t,e=!1){const i=n.children,r=t.children;if(Ht(i)&&Ht(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Nn(r[s]),o.el=a.el),e||ku(a,o)),o.type===Xs&&(o.el=a.el)}}function Ld(n){const t=n.slice(),e=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,a=e.length-1;s<a;)o=s+a>>1,n[e[o]]<c?s=o+1:a=o;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,a=e[s-1];s-- >0;)e[s]=a,a=t[a];return e}const Ud=n=>n.__isTeleport,Sn=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),Pr=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),yr=[];let Je=null;function Wu(n=!1){yr.push(Je=n?null:[])}function Id(){yr.pop(),Je=yr[yr.length-1]||null}let Lr=1;function xl(n){Lr+=n}function Xu(n){return n.dynamicChildren=Lr>0?Je||Wi:null,Id(),Lr>0&&Je&&Je.push(n),n}function Dd(n,t,e,i,r,s){return Xu(Yu(n,t,e,i,r,s,!0))}function Nd(n,t,e,i,r){return Xu(Hn(n,t,e,i,r,!0))}function Od(n){return n?n.__v_isVNode===!0:!1}function ur(n,t){return n.type===t.type&&n.key===t.key}const qs="__vInternal",qu=({key:n})=>n??null,Ts=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?me(n)||ye(n)||kt(n)?{i:ln,r:n,k:t,f:!!e}:n:null);function Yu(n,t=null,e=null,i=0,r=null,s=n===Sn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&qu(t),ref:t&&Ts(t),scopeId:Ru,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return o?(Da(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=me(e)?8:16),Lr>0&&!a&&Je&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Je.push(l),l}const Hn=Fd;function Fd(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===pd)&&(n=Pr),Od(n)){const o=Ji(n,t,!0);return e&&Da(o,e),Lr>0&&!s&&Je&&(o.shapeFlag&6?Je[Je.indexOf(n)]=o:Je.push(o)),o.patchFlag|=-2,o}if(jd(n)&&(n=n.__vccOpts),t){t=Bd(t);let{class:o,style:l}=t;o&&!me(o)&&(t.class=ya(o)),ae(l)&&(xu(l)&&!Ht(l)&&(l=de({},l)),t.style=Hs(l))}const a=me(n)?1:td(n)?128:Ud(n)?64:ae(n)?4:kt(n)?2:0;return Yu(n,t,e,i,r,a,s,!0)}function Bd(n){return n?xu(n)||qs in n?de({},n):n:null}function Ji(n,t,e=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=t?Hd(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&qu(o),ref:t&&t.ref?e&&r?Ht(r)?r.concat(Ts(t)):[r,Ts(t)]:Ts(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Sn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ji(n.ssContent),ssFallback:n.ssFallback&&Ji(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function zd(n=" ",t=0){return Hn(Xs,null,n,t)}function sn(n){return n==null||typeof n=="boolean"?Hn(Pr):Ht(n)?Hn(Sn,null,n.slice()):typeof n=="object"?Nn(n):Hn(Xs,null,String(n))}function Nn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ji(n)}function Da(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Da(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(qs in t)?t._ctx=ln:r===3&&ln&&(ln.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else kt(t)?(t={default:t,_ctx:ln},e=32):(t=String(t),i&64?(e=16,t=[zd(t)]):e=8);n.children=t,n.shapeFlag|=e}function Hd(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=ya([t.class,i.class]));else if(r==="style")t.style=Hs([t.style,i.style]);else if(Fs(r)){const s=t[r],a=i[r];a&&s!==a&&!(Ht(s)&&s.includes(a))&&(t[r]=s?[].concat(s,a):a)}else r!==""&&(t[r]=i[r])}return t}function nn(n,t,e,i=null){tn(n,t,7,[e,i])}const Gd=Fu();let Vd=0;function kd(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Gd,s={uid:Vd++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new of(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zu(i,r),emitsOptions:wu(i,r),emit:null,emitted:null,propsDefaults:Jt,inheritAttrs:i.inheritAttrs,ctx:Jt,data:Jt,props:Jt,attrs:Jt,slots:Jt,refs:Jt,setupState:Jt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=jf.bind(null,s),n.ce&&n.ce(s),s}let Me=null,Na,Mi,vl="__VUE_INSTANCE_SETTERS__";(Mi=qo()[vl])||(Mi=qo()[vl]=[]),Mi.push(n=>Me=n),Na=n=>{Mi.length>1?Mi.forEach(t=>t(n)):Mi[0](n)};const Qi=n=>{Na(n),n.scope.on()},ci=()=>{Me&&Me.scope.off(),Na(null)};function ju(n){return n.vnode.shapeFlag&4}let Ur=!1;function Wd(n,t=!1){Ur=t;const{props:e,children:i}=n.vnode,r=ju(n);Td(n,e,r,t),wd(n,i);const s=r?Xd(n,t):void 0;return Ur=!1,s}function Xd(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=vu(new Proxy(n.ctx,md));const{setup:i}=e;if(i){const r=n.setupContext=i.length>1?Yd(n):null;Qi(n),sr();const s=zn(i,n,0,[n.props,r]);if(or(),ci(),ru(s)){if(s.then(ci,ci),t)return s.then(a=>{Ml(n,a,t)}).catch(a=>{Vs(a,n,0)});n.asyncDep=s}else Ml(n,s,t)}else $u(n,t)}function Ml(n,t,e){kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=Su(t)),$u(n,e)}let yl;function $u(n,t,e){const i=n.type;if(!n.render){if(!t&&yl&&!i.render){const r=i.template||Ua(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=de(de({isCustomElement:s,delimiters:o},a),l);i.render=yl(r,c)}}n.render=i.render||Qe}Qi(n),sr(),gd(n),or(),ci()}function qd(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(t,e){return Ue(n,"get","$attrs"),t[e]}}))}function Yd(n){const t=e=>{n.exposed=e||{}};return{get attrs(){return qd(n)},slots:n.slots,emit:n.emit,expose:t}}function Oa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Su(vu(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Mr)return Mr[e](n)},has(t,e){return e in t||e in Mr}}))}function jd(n){return kt(n)&&"__vccOpts"in n}const $d=(n,t)=>Gf(n,t,Ur),Kd=Symbol.for("v-scx"),Zd=()=>Es(Kd),Jd="3.3.4",Qd="http://www.w3.org/2000/svg",oi=typeof document<"u"?document:null,Sl=oi&&oi.createElement("template"),tp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t?oi.createElementNS(Qd,n):oi.createElement(n,e?{is:e}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>oi.createTextNode(n),createComment:n=>oi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>oi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const a=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Sl.innerHTML=i?`<svg>${n}</svg>`:n;const o=Sl.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function ep(n,t,e){const i=n._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function np(n,t,e){const i=n.style,r=me(e);if(e&&!r){if(t&&!me(t))for(const s in t)e[s]==null&&ia(i,s,"");for(const s in e)ia(i,s,e[s])}else{const s=i.display;r?t!==e&&(i.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const El=/\s*!important$/;function ia(n,t,e){if(Ht(e))e.forEach(i=>ia(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=ip(n,t);El.test(e)?n.setProperty(rr(i),e.replace(El,""),"important"):n[i]=e}}const Tl=["Webkit","Moz","ms"],ao={};function ip(n,t){const e=ao[t];if(e)return e;let i=Ki(t);if(i!=="filter"&&i in n)return ao[t]=i;i=su(i);for(let r=0;r<Tl.length;r++){const s=Tl[r]+i;if(s in n)return ao[t]=s}return t}const bl="http://www.w3.org/1999/xlink";function rp(n,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(bl,t.slice(6,t.length)):n.setAttributeNS(bl,t,e);else{const s=sf(t);e==null||s&&!ou(e)?n.removeAttribute(t):n.setAttribute(t,s?"":e)}}function sp(n,t,e,i,r,s,a){if(t==="innerHTML"||t==="textContent"){i&&a(i,r,s),n[t]=e??"";return}const o=n.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){n._value=e;const c=o==="OPTION"?n.getAttribute("value"):n.value,u=e??"";c!==u&&(n.value=u),e==null&&n.removeAttribute(t);return}let l=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=ou(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{n[t]=e}catch{}l&&n.removeAttribute(t)}function op(n,t,e,i){n.addEventListener(t,e,i)}function ap(n,t,e,i){n.removeEventListener(t,e,i)}function lp(n,t,e,i,r=null){const s=n._vei||(n._vei={}),a=s[t];if(i&&a)a.value=i;else{const[o,l]=cp(t);if(i){const c=s[t]=fp(i,r);op(n,o,c,l)}else a&&(ap(n,o,a,l),s[t]=void 0)}}const Al=/(?:Once|Passive|Capture)$/;function cp(n){let t;if(Al.test(n)){t={};let i;for(;i=n.match(Al);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):rr(n.slice(2)),t]}let lo=0;const up=Promise.resolve(),hp=()=>lo||(up.then(()=>lo=0),lo=Date.now());function fp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;tn(dp(i,e.value),t,5,[i])};return e.value=n,e.attached=hp(),e}function dp(n,t){if(Ht(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const wl=/^on[a-z]/,pp=(n,t,e,i,r=!1,s,a,o,l)=>{t==="class"?ep(n,i,r):t==="style"?np(n,e,i):Fs(t)?_a(t)||lp(n,t,e,i,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mp(n,t,i,r))?sp(n,t,i,s,a,o,l):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),rp(n,t,i,r))};function mp(n,t,e,i){return i?!!(t==="innerHTML"||t==="textContent"||t in n&&wl.test(t)&&kt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||wl.test(t)&&me(e)?!1:t in n}const gp=de({patchProp:pp},tp);let Rl;function _p(){return Rl||(Rl=Cd(gp))}const xp=(...n)=>{const t=_p().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=vp(i);if(!r)return;const s=t._component;!kt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function vp(n){return me(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fa="153",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mp=0,Cl=1,yp=2,Ku=1,Sp=2,Mn=3,Wn=0,Le=1,En=2,Gn=0,Yi=1,Pl=2,Ll=3,Ul=4,Ep=5,zi=100,Tp=101,bp=102,Il=103,Dl=104,Ap=200,wp=201,Rp=202,Cp=203,Zu=204,Ju=205,Pp=206,Lp=207,Up=208,Ip=209,Dp=210,Np=0,Op=1,Fp=2,ra=3,Bp=4,zp=5,Hp=6,Gp=7,Qu=0,Vp=1,kp=2,An=0,Wp=1,Xp=2,qp=3,Yp=4,jp=5,th=300,tr=301,er=302,sa=303,oa=304,Ys=306,aa=1e3,Ke=1001,la=1002,Re=1003,Nl=1004,co=1005,He=1006,$p=1007,Ir=1008,Vn=1009,Kp=1010,Zp=1011,Ba=1012,eh=1013,On=1014,Fn=1015,Dr=1016,nh=1017,ih=1018,ui=1020,Jp=1021,Ze=1023,Qp=1024,tm=1025,hi=1026,nr=1027,em=1028,rh=1029,nm=1030,sh=1031,oh=1033,uo=33776,ho=33777,fo=33778,po=33779,Ol=35840,Fl=35841,Bl=35842,zl=35843,im=36196,Hl=37492,Gl=37496,Vl=37808,kl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,jl=37814,$l=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,tc=37820,ec=37821,mo=36492,rm=36283,nc=36284,ic=36285,rc=36286,ah=3e3,fi=3001,sm=3200,om=3201,lh=0,am=1,di="",zt="srgb",un="srgb-linear",ch="display-p3",go=7680,lm=519,cm=512,um=513,hm=514,fm=515,dm=516,pm=517,mm=518,gm=519,sc=35044,oc="300 es",ca=1035,Tn=2e3,Us=2001;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_o=Math.PI/180,Is=180/Math.PI;function ar(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[i&255]+ge[i>>8&255]+ge[i>>16&255]+ge[i>>24&255]).toLowerCase()}function pe(n,t,e){return Math.max(t,Math.min(e,n))}function _m(n,t){return(n%t+t)%t}function xo(n,t,e){return(1-e)*n+e*t}function ac(n){return(n&n-1)===0&&n!==0}function ua(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,i,r,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],x=i[8],_=r[0],p=r[3],d=r[6],P=r[1],v=r[4],M=r[7],R=r[2],F=r[5],z=r[8];return s[0]=a*_+o*P+l*R,s[3]=a*p+o*v+l*F,s[6]=a*d+o*M+l*z,s[1]=c*_+u*P+f*R,s[4]=c*p+u*v+f*F,s[7]=c*d+u*M+f*z,s[2]=h*_+m*P+x*R,s[5]=h*p+m*v+x*F,s[8]=h*d+m*M+x*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,x=e*f+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(o*i-r*a)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new Ft;function uh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ds(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const lc={};function Sr(n){n in lc||(lc[n]=!0,console.warn(n))}function ji(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const xm=new Ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vm=new Ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Mm(n){return n.convertSRGBToLinear().applyMatrix3(vm)}function ym(n){return n.applyMatrix3(xm).convertLinearToSRGB()}const Sm={[un]:n=>n,[zt]:n=>n.convertSRGBToLinear(),[ch]:Mm},Em={[un]:n=>n,[zt]:n=>n.convertLinearToSRGB(),[ch]:ym},ke={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return un},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Sm[t],r=Em[e];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let Ei;class hh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Ds("canvas")),Ei.width=t.width,Ei.height=t.height;const i=Ei.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ji(e[i]/255)*255):e[i]=ji(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Tm=0;class fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ar(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(yo(r[a].image)):s.push(yo(r[a]))}else s=yo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bm=0;class Be extends vi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Ke,r=Ke,s=He,a=Ir,o=Ze,l=Vn,c=Be.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=ar(),this.name="",this.source=new fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fi?zt:di),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case aa:t.x=t.x-Math.floor(t.x);break;case Ke:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case aa:t.y=t.y-Math.floor(t.y);break;case Ke:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?fi:ah}set encoding(t){Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===fi?zt:di}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=th;Be.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],x=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(m+1)/2,R=(d+1)/2,F=(u+h)/4,z=(f+_)/4,k=(x+p)/4;return v>M&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=F/i,s=z/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=F/r,s=k/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=z/s,r=k/s),this.set(i,r,s,e),this}let P=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(P)<.001&&(P=1),this.x=(p-x)/P,this.y=(f-_)/P,this.z=(h-u)/P,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends vi{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fi?zt:di),this.texture=new Be(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:He,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dh extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Am extends Be{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=Ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],x=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=x,t[e+3]=_;return}if(f!==_||l!==h||c!==m||u!==x){let p=1-o;const d=l*h+c*m+u*x+f*_,P=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const R=Math.sqrt(v),F=Math.atan2(R,d*P);p=Math.sin(p*F)/R,o=Math.sin(o*F)/R}const M=o*P;if(l=l*p+h*M,c=c*p+m*M,u=u*p+x*M,f=f*p+_*M,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],x=s[a+3];return t[e]=o*x+u*f+l*m-c*h,t[e+1]=l*x+u*h+c*f-o*m,t[e+2]=c*x+u*m+o*h-l*f,t[e+3]=u*x-o*f-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"YXZ":this._x=h*u*f+c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"ZXY":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f-h*m*x;break;case"ZYX":this._x=h*u*f-c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f+h*m*x;break;case"YZX":this._x=h*u*f+c*m*x,this._y=c*m*f+h*u*x,this._z=c*u*x-h*m*f,this._w=c*u*f-h*m*x;break;case"XZY":this._x=h*u*f-c*m*x,this._y=c*m*f-h*u*x,this._z=c*u*x+h*m*f,this._w=c*u*f+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,i=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*r-o*i,u=l*i+o*e-s*r,f=l*r+s*i-a*e,h=-s*e-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new K,cc=new gi;class zr{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Ti.copy(t.boundingBox),Ti.applyMatrix4(t.matrixWorld),this.union(Ti);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)pn.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(pn)}else r.boundingBox===null&&r.computeBoundingBox(),Ti.copy(r.boundingBox),Ti.applyMatrix4(t.matrixWorld),this.union(Ti)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Zr.subVectors(this.max,hr),bi.subVectors(t.a,hr),Ai.subVectors(t.b,hr),wi.subVectors(t.c,hr),Ln.subVectors(Ai,bi),Un.subVectors(wi,Ai),Kn.subVectors(bi,wi);let e=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!Eo(e,bi,Ai,wi,Zr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,bi,Ai,wi,Zr))?!1:(Jr.crossVectors(Ln,Un),e=[Jr.x,Jr.y,Jr.z],Eo(e,bi,Ai,wi,Zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new K,new K,new K,new K,new K,new K,new K,new K],pn=new K,Ti=new zr,bi=new K,Ai=new K,wi=new K,Ln=new K,Un=new K,Kn=new K,hr=new K,Zr=new K,Jr=new K,Zn=new K;function Eo(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const wm=new zr,fr=new K,To=new K;class za{constructor(t=new K,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):wm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(fr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(To)),this.expandByPoint(fr.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new K,bo=new K,Qr=new K,In=new K,Ao=new K,ts=new K,wo=new K;class Rm{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){bo.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),In.copy(this.origin).sub(bo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Qr),o=In.dot(this.direction),l=-In.dot(Qr),c=In.lengthSq(),u=Math.abs(1-a*a);let f,h,m,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const _=1/u;f*=_,h*=_,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(bo).addScaledVector(Qr,h),m}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const i=mn.dot(this.direction),r=mn.dot(mn)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,r,s){Ao.subVectors(e,t),ts.subVectors(i,t),wo.crossVectors(Ao,ts);let a=this.direction.dot(wo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,t);const l=o*this.direction.dot(ts.crossVectors(In,ts));if(l<0)return null;const c=o*this.direction.dot(Ao.cross(In));if(c<0||l+c>a)return null;const u=-o*In.dot(wo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,i,r,s,a,o,l,c,u,f,h,m,x,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,h,m,x,_,p)}set(t,e,i,r,s,a,o,l,c,u,f,h,m,x,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=x,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ri.setFromMatrixColumn(t,0).length(),s=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*f,x=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=m+x*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=x+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*f,x=c*u,_=c*f;e[0]=h+_*o,e[4]=x*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-x,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*f,x=c*u,_=c*f;e[0]=h-_*o,e[4]=-a*f,e[8]=x+m*o,e[1]=m+x*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*f,x=o*u,_=o*f;e[0]=l*u,e[4]=x*c-m,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=m*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,x=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=x*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*f+x,e[10]=h-_*f}else if(t.order==="XZY"){const h=a*l,m=a*c,x=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=a*u,e[9]=m*f-x,e[2]=x*f-m,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cm,t,Pm)}lookAt(t,e,i){const r=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Dn.crossVectors(i,Ne),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Dn.crossVectors(i,Ne)),Dn.normalize(),es.crossVectors(Ne,Dn),r[0]=Dn.x,r[4]=es.x,r[8]=Ne.x,r[1]=Dn.y,r[5]=es.y,r[9]=Ne.y,r[2]=Dn.z,r[6]=es.z,r[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],x=i[2],_=i[6],p=i[10],d=i[14],P=i[3],v=i[7],M=i[11],R=i[15],F=r[0],z=r[4],k=r[8],E=r[12],U=r[1],nt=r[5],Q=r[9],V=r[13],W=r[2],et=r[6],at=r[10],q=r[14],G=r[3],pt=r[7],ct=r[11],St=r[15];return s[0]=a*F+o*U+l*W+c*G,s[4]=a*z+o*nt+l*et+c*pt,s[8]=a*k+o*Q+l*at+c*ct,s[12]=a*E+o*V+l*q+c*St,s[1]=u*F+f*U+h*W+m*G,s[5]=u*z+f*nt+h*et+m*pt,s[9]=u*k+f*Q+h*at+m*ct,s[13]=u*E+f*V+h*q+m*St,s[2]=x*F+_*U+p*W+d*G,s[6]=x*z+_*nt+p*et+d*pt,s[10]=x*k+_*Q+p*at+d*ct,s[14]=x*E+_*V+p*q+d*St,s[3]=P*F+v*U+M*W+R*G,s[7]=P*z+v*nt+M*et+R*pt,s[11]=P*k+v*Q+M*at+R*ct,s[15]=P*E+v*V+M*q+R*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],m=t[14],x=t[3],_=t[7],p=t[11],d=t[15];return x*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+_*(+e*l*m-e*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+e*c*f-e*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-e*l*f+e*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],m=t[11],x=t[12],_=t[13],p=t[14],d=t[15],P=f*p*c-_*h*c+_*l*m-o*p*m-f*l*d+o*h*d,v=x*h*c-u*p*c-x*l*m+a*p*m+u*l*d-a*h*d,M=u*_*c-x*f*c+x*o*m-a*_*m-u*o*d+a*f*d,R=x*f*l-u*_*l-x*o*h+a*_*h+u*o*p-a*f*p,F=e*P+i*v+r*M+s*R;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=P*z,t[1]=(_*h*s-f*p*s-_*r*m+i*p*m+f*r*d-i*h*d)*z,t[2]=(o*p*s-_*l*s+_*r*c-i*p*c-o*r*d+i*l*d)*z,t[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*z,t[4]=v*z,t[5]=(u*p*s-x*h*s+x*r*m-e*p*m-u*r*d+e*h*d)*z,t[6]=(x*l*s-a*p*s-x*r*c+e*p*c+a*r*d-e*l*d)*z,t[7]=(a*h*s-u*l*s+u*r*c-e*h*c-a*r*m+e*l*m)*z,t[8]=M*z,t[9]=(x*f*s-u*_*s-x*i*m+e*_*m+u*i*d-e*f*d)*z,t[10]=(a*_*s-x*o*s+x*i*c-e*_*c-a*i*d+e*o*d)*z,t[11]=(u*o*s-a*f*s-u*i*c+e*f*c+a*i*m-e*o*m)*z,t[12]=R*z,t[13]=(u*_*r-x*f*r+x*i*h-e*_*h-u*i*p+e*f*p)*z,t[14]=(x*o*r-a*_*r-x*i*l+e*_*l+a*i*p-e*o*p)*z,t[15]=(a*f*r-u*o*r+u*i*l-e*f*l-a*i*h+e*o*h)*z,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,x=s*f,_=a*u,p=a*f,d=o*f,P=l*c,v=l*u,M=l*f,R=i.x,F=i.y,z=i.z;return r[0]=(1-(_+d))*R,r[1]=(m+M)*R,r[2]=(x-v)*R,r[3]=0,r[4]=(m-M)*F,r[5]=(1-(h+d))*F,r[6]=(p+P)*F,r[7]=0,r[8]=(x+v)*z,r[9]=(p-P)*z,r[10]=(1-(h+_))*z,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ri.set(r[0],r[1],r[2]).length();const a=Ri.set(r[4],r[5],r[6]).length(),o=Ri.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],We.copy(this);const c=1/s,u=1/a,f=1/o;return We.elements[0]*=c,We.elements[1]*=c,We.elements[2]*=c,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=f,We.elements[9]*=f,We.elements[10]*=f,e.setFromRotationMatrix(We),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Tn){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let m,x;if(o===Tn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Us)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Tn){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(a-s),h=(e+t)*c,m=(i+r)*u;let x,_;if(o===Tn)x=(a+s)*f,_=-2*f;else if(o===Us)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ri=new K,We=new oe,Cm=new K(0,0,0),Pm=new K(1,1,1),Dn=new K,es=new K,Ne=new K,uc=new oe,hc=new gi;class js{constructor(t=0,e=0,i=0,r=js.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hc.setFromEuler(this),this.setFromQuaternion(hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}js.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Lm=0;const fc=new K,Ci=new gi,gn=new oe,ns=new K,dr=new K,Um=new K,Im=new gi,dc=new K(1,0,0),pc=new K(0,1,0),mc=new K(0,0,1),Dm={type:"added"},gc={type:"removed"};class Se extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new K,e=new js,i=new gi,r=new K(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ft}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ns.copy(t):ns.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(dr,ns,this.up):gn.lookAt(ns,dr,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),Ci.setFromRotationMatrix(gn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(gc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Um),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),m=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Se.DEFAULT_UP=new K(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new K,_n=new K,Ro=new K,xn=new K,Pi=new K,Li=new K,_c=new K,Co=new K,Po=new K,Lo=new K;let is=!1;class je{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Xe.subVectors(t,e),r.cross(Xe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Xe.subVectors(r,e),_n.subVectors(i,e),Ro.subVectors(t,e);const a=Xe.dot(Xe),o=Xe.dot(_n),l=Xe.dot(Ro),c=_n.dot(_n),u=_n.dot(Ro),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-m-x,x,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,xn),xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,i,r,s,a,o,l){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),this.getInterpolation(t,e,i,r,s,a,o,l)}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,xn),l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l}static isFrontFacing(t,e,i,r){return Xe.subVectors(i,e),_n.subVectors(t,e),Xe.cross(_n).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Xe.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),je.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return je.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,i),Li.subVectors(s,i),Co.subVectors(t,i);const l=Pi.dot(Co),c=Li.dot(Co);if(l<=0&&c<=0)return e.copy(i);Po.subVectors(t,r);const u=Pi.dot(Po),f=Li.dot(Po);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Pi,a);Lo.subVectors(t,s);const m=Pi.dot(Lo),x=Li.dot(Lo);if(x>=0&&m<=x)return e.copy(s);const _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(Li,o);const p=u*x-m*f;if(p<=0&&f-u>=0&&m-x>=0)return _c.subVectors(s,r),o=(f-u)/(f-u+(m-x)),e.copy(r).addScaledVector(_c,o);const d=1/(p+_+h);return a=_*d,o=h*d,e.copy(i).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Nm=0;class Hr extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Yi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zu,this.blendDst=Ju,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Wn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={h:0,s:0,l:0},rs={h:0,s:0,l:0};function Uo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ke.workingColorSpace){return this.r=t,this.g=e,this.b=i,ke.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ke.workingColorSpace){if(t=_m(t,1),e=pe(e,0,1),i=pe(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Uo(a,s,t+1/3),this.g=Uo(a,s,t),this.b=Uo(a,s,t-1/3)}return ke.toWorkingColorSpace(this,r),this}setStyle(t,e=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){const i=mh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return ke.fromWorkingColorSpace(_e.copy(this),t),Math.round(pe(_e.r*255,0,255))*65536+Math.round(pe(_e.g*255,0,255))*256+Math.round(pe(_e.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ke.workingColorSpace){ke.fromWorkingColorSpace(_e.copy(this),e);const i=_e.r,r=_e.g,s=_e.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ke.workingColorSpace){return ke.fromWorkingColorSpace(_e.copy(this),e),t.r=_e.r,t.g=_e.g,t.b=_e.b,t}getStyle(t=zt){ke.fromWorkingColorSpace(_e.copy(this),t);const e=_e.r,i=_e.g,r=_e.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(qe),qe.h+=t,qe.s+=e,qe.l+=i,this.setHSL(qe.h,qe.s,qe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qe),t.getHSL(rs);const i=xo(qe.h,rs.h,e),r=xo(qe.s,rs.s,e),s=xo(qe.l,rs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _e=new Kt;Kt.NAMES=mh;class gh extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new K,ss=new xt;class cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sc,this.updateRange={offset:0,count:-1},this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),r=De(r,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class _h extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class xh extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ge extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Om=0;const ze=new oe,Io=new Se,Ui=new K,Oe=new zr,pr=new zr,he=new K;class Cn extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?xh:_h)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,i){return ze.makeTranslation(t,e,i),this.applyMatrix4(ze),this}scale(t,e,i){return ze.makeScale(t,e,i),this.applyMatrix4(ze),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Oe.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(he.addVectors(Oe.min,pr.min),Oe.expandByPoint(he),he.addVectors(Oe.max,pr.max),Oe.expandByPoint(he)):(Oe.expandByPoint(pr.min),Oe.expandByPoint(pr.max))}Oe.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)he.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(he));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)he.fromBufferAttribute(o,c),l&&(Ui.fromBufferAttribute(t,c),he.add(Ui)),r=Math.max(r,i.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let U=0;U<o;U++)c[U]=new K,u[U]=new K;const f=new K,h=new K,m=new K,x=new xt,_=new xt,p=new xt,d=new K,P=new K;function v(U,nt,Q){f.fromArray(r,U*3),h.fromArray(r,nt*3),m.fromArray(r,Q*3),x.fromArray(a,U*2),_.fromArray(a,nt*2),p.fromArray(a,Q*2),h.sub(f),m.sub(f),_.sub(x),p.sub(x);const V=1/(_.x*p.y-p.x*_.y);isFinite(V)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(V),P.copy(m).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(V),c[U].add(d),c[nt].add(d),c[Q].add(d),u[U].add(P),u[nt].add(P),u[Q].add(P))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let U=0,nt=M.length;U<nt;++U){const Q=M[U],V=Q.start,W=Q.count;for(let et=V,at=V+W;et<at;et+=3)v(i[et+0],i[et+1],i[et+2])}const R=new K,F=new K,z=new K,k=new K;function E(U){z.fromArray(s,U*3),k.copy(z);const nt=c[U];R.copy(nt),R.sub(z.multiplyScalar(z.dot(nt))).normalize(),F.crossVectors(k,nt);const V=F.dot(u[U])<0?-1:1;l[U*4]=R.x,l[U*4+1]=R.y,l[U*4+2]=R.z,l[U*4+3]=V}for(let U=0,nt=M.length;U<nt;++U){const Q=M[U],V=Q.start,W=Q.count;for(let et=V,at=V+W;et<at;et+=3)E(i[et+0]),E(i[et+1]),E(i[et+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(t)for(let h=0,m=t.count;h<m;h+=3){const x=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,x=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)h[x++]=c[m++]}return new cn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=t(h,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new oe,Jn=new Rm,os=new za,vc=new K,Ii=new K,Di=new K,Ni=new K,Do=new K,as=new K,ls=new xt,cs=new xt,us=new xt,Mc=new K,yc=new K,Sc=new K,hs=new K,fs=new K;class bn extends Se{constructor(t=new Cn,e=new gh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){as.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Do.fromBufferAttribute(f,t),a?as.addScaledVector(Do,u):as.addScaledVector(Do.sub(e),u))}e.add(as)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(s),Jn.copy(t.ray).recast(t.near),!(os.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(os,vc)===null||Jn.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(xc.copy(s).invert(),Jn.copy(t.ray).applyMatrix4(xc),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const p=h[x],d=a[p.materialIndex],P=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=P,R=v;M<R;M+=3){const F=o.getX(M),z=o.getX(M+1),k=o.getX(M+2);r=ds(this,d,t,i,c,u,f,F,z,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){const P=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);r=ds(this,a,t,i,c,u,f,P,v,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,_=h.length;x<_;x++){const p=h[x],d=a[p.materialIndex],P=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=P,R=v;M<R;M+=3){const F=M,z=M+1,k=M+2;r=ds(this,d,t,i,c,u,f,F,z,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){const P=p,v=p+1,M=p+2;r=ds(this,a,t,i,c,u,f,P,v,M),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Fm(n,t,e,i,r,s,a,o){let l;if(t.side===Le?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Wn,o),l===null)return null;fs.copy(o),fs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(fs);return c<e.near||c>e.far?null:{distance:c,point:fs.clone(),object:n}}function ds(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ii),n.getVertexPosition(l,Di),n.getVertexPosition(c,Ni);const u=Fm(n,t,e,i,Ii,Di,Ni,hs);if(u){r&&(ls.fromBufferAttribute(r,o),cs.fromBufferAttribute(r,l),us.fromBufferAttribute(r,c),u.uv=je.getInterpolation(hs,Ii,Di,Ni,ls,cs,us,new xt)),s&&(ls.fromBufferAttribute(s,o),cs.fromBufferAttribute(s,l),us.fromBufferAttribute(s,c),u.uv1=je.getInterpolation(hs,Ii,Di,Ni,ls,cs,us,new xt),u.uv2=u.uv1),a&&(Mc.fromBufferAttribute(a,o),yc.fromBufferAttribute(a,l),Sc.fromBufferAttribute(a,c),u.normal=je.getInterpolation(hs,Ii,Di,Ni,Mc,yc,Sc,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};je.getNormal(Ii,Di,Ni,f.normal),u.face=f}return u}class Gr extends Cn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;x("z","y","x",-1,-1,i,e,t,a,s,0),x("z","y","x",1,-1,i,e,-t,a,s,1),x("x","z","y",1,1,t,i,e,r,a,2),x("x","z","y",1,-1,t,i,-e,r,a,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(f,2));function x(_,p,d,P,v,M,R,F,z,k,E){const U=M/z,nt=R/k,Q=M/2,V=R/2,W=F/2,et=z+1,at=k+1;let q=0,G=0;const pt=new K;for(let ct=0;ct<at;ct++){const St=ct*nt-V;for(let Z=0;Z<et;Z++){const Mt=Z*U-Q;pt[_]=Mt*P,pt[p]=St*v,pt[d]=W,c.push(pt.x,pt.y,pt.z),pt[_]=0,pt[p]=0,pt[d]=F>0?1:-1,u.push(pt.x,pt.y,pt.z),f.push(Z/z),f.push(1-ct/k),q+=1}}for(let ct=0;ct<k;ct++)for(let St=0;St<z;St++){const Z=h+St+et*ct,Mt=h+St+et*(ct+1),H=h+(St+1)+et*(ct+1),B=h+(St+1)+et*ct;l.push(Z,Mt,B),l.push(Mt,H,B),G+=6}o.addGroup(m,G,E),m+=G,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ae(n){const t={};for(let e=0;e<n.length;e++){const i=ir(n[e]);for(const r in i)t[r]=i[r]}return t}function Bm(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vh(n){return n.getRenderTarget()===null?n.outputColorSpace:un}const zm={clone:ir,merge:Ae};var Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Bm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mh extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Mh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_o*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Fi=1;class Vm extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new Fe(Oi,Fi,t,e);r.layers=this.layers,this.add(r);const s=new Fe(Oi,Fi,t,e);s.layers=this.layers,this.add(s);const a=new Fe(Oi,Fi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(Oi,Fi,t,e);o.layers=this.layers,this.add(o);const l=new Fe(Oi,Fi,t,e);l.layers=this.layers,this.add(l);const c=new Fe(Oi,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=An,t.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,r),t.setRenderTarget(i,1),t.render(e,s),t.setRenderTarget(i,2),t.render(e,a),t.setRenderTarget(i,3),t.render(e,o),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=m,t.setRenderTarget(i,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class yh extends Be{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class km extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===fi?zt:di),this.texture=new yh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gr(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:Gn});s.uniforms.tEquirect.value=e;const a=new bn(r,s),o=e.minFilter;return e.minFilter===Ir&&(e.minFilter=He),new Vm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const No=new K,Wm=new K,Xm=new Ft;class ni{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=No.subVectors(i,e).cross(Wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(No),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xm.getNormalMatrix(t),r=this.coplanarPoint(No).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new za,ps=new K;class Ha{constructor(t=new ni,e=new ni,i=new ni,r=new ni,s=new ni,a=new ni){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],x=r[9],_=r[10],p=r[11],d=r[12],P=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-m,M-d).normalize(),i[1].setComponents(l+s,h+c,p+m,M+d).normalize(),i[2].setComponents(l+a,h+u,p+x,M+P).normalize(),i[3].setComponents(l-a,h-u,p-x,M-P).normalize(),i[4].setComponents(l-o,h-f,p-_,M-v).normalize(),e===Tn)i[5].setComponents(l+o,h+f,p+_,M+v).normalize();else if(e===Us)i[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ps.x=r.normal.x>0?t.max.x:t.min.x,ps.y=r.normal.y>0?t.max.y:t.min.y,ps.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function qm(n,t){const e=t.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=n.SHORT;else if(f instanceof Uint32Array)x=n.UNSIGNED_INT;else if(f instanceof Int32Array)x=n.INT;else if(f instanceof Int8Array)x=n.BYTE;else if(f instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(e?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ga extends Cn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,h=e/l,m=[],x=[],_=[],p=[];for(let d=0;d<u;d++){const P=d*h-a;for(let v=0;v<c;v++){const M=v*f-s;x.push(M,-P,0),_.push(0,0,1),p.push(v/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let P=0;P<o;P++){const v=P+c*d,M=P+c*(d+1),R=P+1+c*(d+1),F=P+1+c*d;m.push(v,M,F),m.push(M,R,F)}this.setIndex(m),this.setAttribute("position",new Ge(x,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qm="vec3 transformed = vec3( position );",tg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ig=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kg=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,r_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,o_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,a_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,G_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n0=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,u0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,M0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Vt={alphamap_fragment:Ym,alphamap_pars_fragment:jm,alphatest_fragment:$m,alphatest_pars_fragment:Km,aomap_fragment:Zm,aomap_pars_fragment:Jm,begin_vertex:Qm,beginnormal_vertex:tg,bsdfs:eg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:rg,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:og,clipping_planes_vertex:ag,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:ug,color_vertex:hg,common:fg,cube_uv_reflection_fragment:dg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,encodings_fragment:vg,encodings_pars_fragment:Mg,envmap_fragment:yg,envmap_common_pars_fragment:Sg,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Og,envmap_vertex:bg,fog_vertex:Ag,fog_pars_vertex:wg,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_fragment:Lg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ig,lights_lambert_pars_fragment:Dg,lights_pars_begin:Ng,lights_toon_fragment:Fg,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:Hg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Vg,lights_fragment_begin:kg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:$g,map_fragment:Kg,map_pars_fragment:Zg,map_particle_fragment:Jg,map_particle_pars_fragment:Qg,metalnessmap_fragment:t_,metalnessmap_pars_fragment:e_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:r_,morphtarget_vertex:s_,normal_fragment_begin:o_,normal_fragment_maps:a_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:u_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:f_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,output_fragment:g_,packing:__,premultiplied_alpha_fragment:x_,project_vertex:v_,dithering_fragment:M_,dithering_pars_fragment:y_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:b_,shadowmap_vertex:A_,shadowmask_pars_fragment:w_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:U_,specularmap_pars_fragment:I_,tonemapping_fragment:D_,tonemapping_pars_fragment:N_,transmission_fragment:O_,transmission_pars_fragment:F_,uv_pars_fragment:B_,uv_pars_vertex:z_,uv_vertex:H_,worldpos_vertex:G_,background_vert:V_,background_frag:k_,backgroundCube_vert:W_,backgroundCube_frag:X_,cube_vert:q_,cube_frag:Y_,depth_vert:j_,depth_frag:$_,distanceRGBA_vert:K_,distanceRGBA_frag:Z_,equirect_vert:J_,equirect_frag:Q_,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:r0,meshlambert_frag:s0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:u0,meshphong_frag:h0,meshphysical_vert:f0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:_0,shadow_vert:x0,shadow_frag:v0,sprite_vert:M0,sprite_frag:y0},Tt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},on={basic:{uniforms:Ae([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ae([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ae([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ae([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ae([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ae([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ae([Tt.points,Tt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ae([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ae([Tt.common,Tt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ae([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ae([Tt.sprite,Tt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ae([Tt.common,Tt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ae([Tt.lights,Tt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};on.physical={uniforms:Ae([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ms={r:0,b:0,g:0};function S0(n,t,e,i,r,s,a){const o=new Kt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function x(p,d){let P=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),P=!0),n.xr.getEnvironmentBlendMode()){case"opaque":P=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,a),P=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,a),P=!0;break}(n.autoClear||P)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ys)?(u===void 0&&(u=new bn(new Gr(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ir(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==zt,(f!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new bn(new Ga(2,2),new _i({name:"BackgroundMaterial",uniforms:ir(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(ms,vh(n)),i.buffers.color.setClear(ms.r,ms.g,ms.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:x}}function E0(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(W,et,at,q,G){let pt=!1;if(a){const ct=_(q,at,et);c!==ct&&(c=ct,m(c.object)),pt=d(W,q,at,G),pt&&P(W,q,at,G)}else{const ct=et.wireframe===!0;(c.geometry!==q.id||c.program!==at.id||c.wireframe!==ct)&&(c.geometry=q.id,c.program=at.id,c.wireframe=ct,pt=!0)}G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(pt||u)&&(u=!1,k(W,et,at,q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(W){return i.isWebGL2?n.bindVertexArray(W):s.bindVertexArrayOES(W)}function x(W){return i.isWebGL2?n.deleteVertexArray(W):s.deleteVertexArrayOES(W)}function _(W,et,at){const q=at.wireframe===!0;let G=o[W.id];G===void 0&&(G={},o[W.id]=G);let pt=G[et.id];pt===void 0&&(pt={},G[et.id]=pt);let ct=pt[q];return ct===void 0&&(ct=p(h()),pt[q]=ct),ct}function p(W){const et=[],at=[],q=[];for(let G=0;G<r;G++)et[G]=0,at[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:at,attributeDivisors:q,object:W,attributes:{},index:null}}function d(W,et,at,q){const G=c.attributes,pt=et.attributes;let ct=0;const St=at.getAttributes();for(const Z in St)if(St[Z].location>=0){const H=G[Z];let B=pt[Z];if(B===void 0&&(Z==="instanceMatrix"&&W.instanceMatrix&&(B=W.instanceMatrix),Z==="instanceColor"&&W.instanceColor&&(B=W.instanceColor)),H===void 0||H.attribute!==B||B&&H.data!==B.data)return!0;ct++}return c.attributesNum!==ct||c.index!==q}function P(W,et,at,q){const G={},pt=et.attributes;let ct=0;const St=at.getAttributes();for(const Z in St)if(St[Z].location>=0){let H=pt[Z];H===void 0&&(Z==="instanceMatrix"&&W.instanceMatrix&&(H=W.instanceMatrix),Z==="instanceColor"&&W.instanceColor&&(H=W.instanceColor));const B={};B.attribute=H,H&&H.data&&(B.data=H.data),G[Z]=B,ct++}c.attributes=G,c.attributesNum=ct,c.index=q}function v(){const W=c.newAttributes;for(let et=0,at=W.length;et<at;et++)W[et]=0}function M(W){R(W,0)}function R(W,et){const at=c.newAttributes,q=c.enabledAttributes,G=c.attributeDivisors;at[W]=1,q[W]===0&&(n.enableVertexAttribArray(W),q[W]=1),G[W]!==et&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,et),G[W]=et)}function F(){const W=c.newAttributes,et=c.enabledAttributes;for(let at=0,q=et.length;at<q;at++)et[at]!==W[at]&&(n.disableVertexAttribArray(at),et[at]=0)}function z(W,et,at,q,G,pt,ct){ct===!0?n.vertexAttribIPointer(W,et,at,G,pt):n.vertexAttribPointer(W,et,at,q,G,pt)}function k(W,et,at,q){if(i.isWebGL2===!1&&(W.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const G=q.attributes,pt=at.getAttributes(),ct=et.defaultAttributeValues;for(const St in pt){const Z=pt[St];if(Z.location>=0){let Mt=G[St];if(Mt===void 0&&(St==="instanceMatrix"&&W.instanceMatrix&&(Mt=W.instanceMatrix),St==="instanceColor"&&W.instanceColor&&(Mt=W.instanceColor)),Mt!==void 0){const H=Mt.normalized,B=Mt.itemSize,C=e.get(Mt);if(C===void 0)continue;const w=C.buffer,rt=C.type,ut=C.bytesPerElement,it=i.isWebGL2===!0&&(rt===n.INT||rt===n.UNSIGNED_INT||Mt.gpuType===eh);if(Mt.isInterleavedBufferAttribute){const dt=Mt.data,g=dt.stride,b=Mt.offset;if(dt.isInstancedInterleavedBuffer){for(let T=0;T<Z.locationSize;T++)R(Z.location+T,dt.meshPerAttribute);W.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let T=0;T<Z.locationSize;T++)M(Z.location+T);n.bindBuffer(n.ARRAY_BUFFER,w);for(let T=0;T<Z.locationSize;T++)z(Z.location+T,B/Z.locationSize,rt,H,g*ut,(b+B/Z.locationSize*T)*ut,it)}else{if(Mt.isInstancedBufferAttribute){for(let dt=0;dt<Z.locationSize;dt++)R(Z.location+dt,Mt.meshPerAttribute);W.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let dt=0;dt<Z.locationSize;dt++)M(Z.location+dt);n.bindBuffer(n.ARRAY_BUFFER,w);for(let dt=0;dt<Z.locationSize;dt++)z(Z.location+dt,B/Z.locationSize,rt,H,B*ut,B/Z.locationSize*dt*ut,it)}}else if(ct!==void 0){const H=ct[St];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(Z.location,H);break;case 3:n.vertexAttrib3fv(Z.location,H);break;case 4:n.vertexAttrib4fv(Z.location,H);break;default:n.vertexAttrib1fv(Z.location,H)}}}}F()}function E(){Q();for(const W in o){const et=o[W];for(const at in et){const q=et[at];for(const G in q)x(q[G].object),delete q[G];delete et[at]}delete o[W]}}function U(W){if(o[W.id]===void 0)return;const et=o[W.id];for(const at in et){const q=et[at];for(const G in q)x(q[G].object),delete q[G];delete et[at]}delete o[W.id]}function nt(W){for(const et in o){const at=o[et];if(at[W.id]===void 0)continue;const q=at[W.id];for(const G in q)x(q[G].object),delete q[G];delete at[W.id]}}function Q(){V(),u=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:V,dispose:E,releaseStatesOfGeometry:U,releaseStatesOfProgram:nt,initAttributes:v,enableAttribute:M,disableUnusedAttributes:F}}function T0(n,t,e,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),e.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function b0(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(z){if(z==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=a||t.has("OES_texture_float"),R=v&&M,F=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:P,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:F}}function A0(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new ni,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,m){const x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!p)s?u(null):c();else{const P=s?0:i,v=P*4;let M=d.clippingState||null;l.value=M,M=u(x,h,v,m);for(let R=0;R!==v;++R)M[R]=e[R];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,m,x){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,x!==!0||p===null){const d=m+_*4,P=h.matrixWorldInverse;o.getNormalMatrix(P),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,M=m;v!==_;++v,M+=4)a.copy(f[v]).applyMatrix4(P,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function w0(n){let t=new WeakMap;function e(a,o){return o===sa?a.mapping=tr:o===oa&&(a.mapping=er),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===sa||o===oa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new km(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class R0 extends Mh{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Ec=[.125,.215,.35,.446,.526,.582],ai=20,Oo=new R0,Tc=new Kt;let Fo=null;const ii=(1+Math.sqrt(5))/2,Bi=1/ii,bc=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ii,Bi),new K(0,ii,-Bi),new K(Bi,0,ii),new K(-Bi,0,ii),new K(ii,Bi,0),new K(-ii,Bi,0)];class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Fo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo),t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:Dr,format:Ze,colorSpace:un,depthBuffer:!1},r=wc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(s)),this._blurMaterial=P0(s,t,e)}return r}_compileMaterial(t){const e=new bn(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,r){const o=new Fe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tc),u.toneMapping=An,u.autoClear=!1;const m=new gh({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),x=new bn(new Gr,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Tc),_=!0);for(let d=0;d<6;d++){const P=d%3;P===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):P===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;gs(r,P*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(x,o),u.render(t,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===tr||t.mapping===er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new bn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;gs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Oo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bc[(r-1)%bc.length];this._blur(t,r-1,r,s,a)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ai-1),_=s/x,p=isFinite(s)?1+Math.floor(u*_):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const d=[];let P=0;for(let z=0;z<ai;++z){const k=z/_,E=Math.exp(-k*k/2);d.push(E),z===0?P+=E:z<p&&(P+=2*E)}for(let z=0;z<d.length;z++)d[z]=d[z]/P;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const M=this._sizeLods[r],R=3*M*(r>v-Gi?r-v+Gi:0),F=4*(this._cubeSize-M);gs(e,R,F,3*M,2*M),l.setRenderTarget(e),l.render(f,Oo)}}function C0(n){const t=[],e=[],i=[];let r=n;const s=n-Gi+1+Ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Gi?l=Ec[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,x=6,_=3,p=2,d=1,P=new Float32Array(_*x*m),v=new Float32Array(p*x*m),M=new Float32Array(d*x*m);for(let F=0;F<m;F++){const z=F%3*2/3-1,k=F>2?0:-1,E=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];P.set(E,_*x*F),v.set(h,p*x*F);const U=[F,F,F,F,F,F];M.set(U,d*x*F)}const R=new Cn;R.setAttribute("position",new cn(P,_)),R.setAttribute("uv",new cn(v,p)),R.setAttribute("faceIndex",new cn(M,d)),t.push(R),r>Gi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function wc(n,t,e){const i=new mi(n,t,e);return i.texture.mapping=Ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function P0(n,t,e){const i=new Float32Array(ai),r=new K(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===sa||l===oa,u=l===tr||l===er;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Ac(n)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new Ac(n));const h=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function U0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function I0(n,t,e,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)t.update(h[x],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const x in m){const _=m[x];for(let p=0,d=_.length;p<d;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,x=f.attributes.position;let _=0;if(m!==null){const P=m.array;_=m.version;for(let v=0,M=P.length;v<M;v+=3){const R=P[v+0],F=P[v+1],z=P[v+2];h.push(R,F,F,z,z,R)}}else{const P=x.array;_=x.version;for(let v=0,M=P.length/3-1;v<M;v+=3){const R=v+0,F=v+1,z=v+2;h.push(R,F,F,z,z,R)}}const p=new(uh(h)?xh:_h)(h,1);p.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function D0(n,t,e,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),e.update(m,s,1)}function f(h,m,x){if(x===0)return;let _,p;if(r)_=n,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,h*l,x),e.update(m,s,x)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function N0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function O0(n,t){return n[0]-t[0]}function F0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function B0(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,a=new fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=x!==void 0?x.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let et=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",et)};var m=et;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,F=u.morphAttributes.position||[],z=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let E=0;v===!0&&(E=1),M===!0&&(E=2),R===!0&&(E=3);let U=u.attributes.position.count*E,nt=1;U>t.maxTextureSize&&(nt=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const Q=new Float32Array(U*nt*4*_),V=new dh(Q,U,nt,_);V.type=Fn,V.needsUpdate=!0;const W=E*4;for(let at=0;at<_;at++){const q=F[at],G=z[at],pt=k[at],ct=U*nt*4*at;for(let St=0;St<q.count;St++){const Z=St*W;v===!0&&(a.fromBufferAttribute(q,St),Q[ct+Z+0]=a.x,Q[ct+Z+1]=a.y,Q[ct+Z+2]=a.z,Q[ct+Z+3]=0),M===!0&&(a.fromBufferAttribute(G,St),Q[ct+Z+4]=a.x,Q[ct+Z+5]=a.y,Q[ct+Z+6]=a.z,Q[ct+Z+7]=0),R===!0&&(a.fromBufferAttribute(pt,St),Q[ct+Z+8]=a.x,Q[ct+Z+9]=a.y,Q[ct+Z+10]=a.z,Q[ct+Z+11]=pt.itemSize===4?a.w:1)}}p={count:_,texture:V,size:new xt(U,nt)},s.set(u,p),u.addEventListener("dispose",et)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const P=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",P),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==x){_=[];for(let M=0;M<x;M++)_[M]=[M,0];i[u.id]=_}for(let M=0;M<x;M++){const R=_[M];R[0]=M,R[1]=h[M]}_.sort(F0);for(let M=0;M<8;M++)M<x&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(O0);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let P=0;for(let M=0;M<8;M++){const R=o[M],F=R[0],z=R[1];F!==Number.MAX_SAFE_INTEGER&&z?(p&&u.getAttribute("morphTarget"+M)!==p[F]&&u.setAttribute("morphTarget"+M,p[F]),d&&u.getAttribute("morphNormal"+M)!==d[F]&&u.setAttribute("morphNormal"+M,d[F]),r[M]=z,P+=z):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const v=u.morphTargetsRelative?1:1-P;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function z0(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);return r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Eh=new Be,Th=new dh,bh=new Am,Ah=new yh,Pc=[],Lc=[],Uc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function lr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Pc[r];if(s===void 0&&(s=new Float32Array(r),Pc[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $s(n,t){let e=Lc[t];e===void 0&&(e=new Int32Array(t),Lc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function H0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2fv(this.addr,t),ce(e,t)}}function V0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;n.uniform3fv(this.addr,t),ce(e,t)}}function k0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4fv(this.addr,t),ce(e,t)}}function W0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;Dc.set(i),n.uniformMatrix2fv(this.addr,!1,Dc),ce(e,i)}}function X0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;Ic.set(i),n.uniformMatrix3fv(this.addr,!1,Ic),ce(e,i)}}function q0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,i))return;Uc.set(i),n.uniformMatrix4fv(this.addr,!1,Uc),ce(e,i)}}function Y0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function j0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2iv(this.addr,t),ce(e,t)}}function $0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3iv(this.addr,t),ce(e,t)}}function K0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4iv(this.addr,t),ce(e,t)}}function Z0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function J0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2uiv(this.addr,t),ce(e,t)}}function Q0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3uiv(this.addr,t),ce(e,t)}}function tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4uiv(this.addr,t),ce(e,t)}}function ex(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Eh,r)}function nx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||bh,r)}function ix(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ah,r)}function rx(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Th,r)}function sx(n){switch(n){case 5126:return H0;case 35664:return G0;case 35665:return V0;case 35666:return k0;case 35674:return W0;case 35675:return X0;case 35676:return q0;case 5124:case 35670:return Y0;case 35667:case 35671:return j0;case 35668:case 35672:return $0;case 35669:case 35673:return K0;case 5125:return Z0;case 36294:return J0;case 36295:return Q0;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return rx}}function ox(n,t){n.uniform1fv(this.addr,t)}function ax(n,t){const e=lr(t,this.size,2);n.uniform2fv(this.addr,e)}function lx(n,t){const e=lr(t,this.size,3);n.uniform3fv(this.addr,e)}function cx(n,t){const e=lr(t,this.size,4);n.uniform4fv(this.addr,e)}function ux(n,t){const e=lr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function hx(n,t){const e=lr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function fx(n,t){const e=lr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dx(n,t){n.uniform1iv(this.addr,t)}function px(n,t){n.uniform2iv(this.addr,t)}function mx(n,t){n.uniform3iv(this.addr,t)}function gx(n,t){n.uniform4iv(this.addr,t)}function _x(n,t){n.uniform1uiv(this.addr,t)}function xx(n,t){n.uniform2uiv(this.addr,t)}function vx(n,t){n.uniform3uiv(this.addr,t)}function Mx(n,t){n.uniform4uiv(this.addr,t)}function yx(n,t,e){const i=this.cache,r=t.length,s=$s(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Eh,s[a])}function Sx(n,t,e){const i=this.cache,r=t.length,s=$s(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||bh,s[a])}function Ex(n,t,e){const i=this.cache,r=t.length,s=$s(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ah,s[a])}function Tx(n,t,e){const i=this.cache,r=t.length,s=$s(e,r);le(i,s)||(n.uniform1iv(this.addr,s),ce(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Th,s[a])}function bx(n){switch(n){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return ux;case 35675:return hx;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return _x;case 36294:return xx;case 36295:return vx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}class Ax{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=sx(e.type)}}class wx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=bx(e.type)}}class Rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Nc(n,t){n.seq.push(t),n.map[t.id]=t}function Cx(n,t,e){const i=n.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),a=Bo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Nc(e,c===void 0?new Ax(o,n,t):new wx(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Rx(o),Nc(e,f)),e=f}}}class bs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Cx(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Oc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let Px=0;function Lx(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Ux(n){switch(n){case un:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function Fc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Lx(n.getShaderSource(t),a)}else return r}function Ix(n,t){const e=Ux(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Dx(n,t){let e;switch(t){case Wp:e="Linear";break;case Xp:e="Reinhard";break;case qp:e="OptimizedCineon";break;case Yp:e="ACESFilmic";break;case jp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Nx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Ox(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Fx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function _r(n){return n!==""}function Bc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(n){return n.replace(Bx,zx)}function zx(n,t){const e=Vt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return ha(e)}const Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(n){return n.replace(Hx,Gx)}function Gx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function kx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function Xx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qu:t="ENVMAP_BLENDING_MULTIPLY";break;case Vp:t="ENVMAP_BLENDING_MIX";break;case kp:t="ENVMAP_BLENDING_ADD";break}return t}function qx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Yx(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Vx(e),c=kx(e),u=Wx(e),f=Xx(e),h=qx(e),m=e.isWebGL2?"":Nx(e),x=Ox(s),_=r.createProgram();let p,d,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_r).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(p=[Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[m,Gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Vt.tonemapping_pars_fragment:"",e.toneMapping!==An?Dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.encodings_pars_fragment,Ix("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=ha(a),a=Bc(a,e),a=zc(a,e),o=ha(o),o=Bc(o,e),o=zc(o,e),a=Hc(a),o=Hc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=P+p+a,M=P+d+o,R=Oc(r,r.VERTEX_SHADER,v),F=Oc(r,r.FRAGMENT_SHADER,M);if(r.attachShader(_,R),r.attachShader(_,F),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),n.debug.checkShaderErrors){const E=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(R).trim(),nt=r.getShaderInfoLog(F).trim();let Q=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,F);else{const W=Fc(r,R,"vertex"),et=Fc(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+W+`
`+et)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(U===""||nt==="")&&(V=!1);V&&(this.diagnostics={runnable:Q,programLog:E,vertexShader:{log:U,prefix:p},fragmentShader:{log:nt,prefix:d}})}r.deleteShader(R),r.deleteShader(F);let z;this.getUniforms=function(){return z===void 0&&(z=new bs(r,_)),z};let k;return this.getAttributes=function(){return k===void 0&&(k=Fx(r,_)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=F,this}let jx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Kx(t),e.set(t,i)),i}}class Kx{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}}function Zx(n,t,e,i,r,s,a){const o=new ph,l=new $x,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return E===0?"uv":`uv${E}`}function p(E,U,nt,Q,V){const W=Q.fog,et=V.geometry,at=E.isMeshStandardMaterial?Q.environment:null,q=(E.isMeshStandardMaterial?e:t).get(E.envMap||at),G=q&&q.mapping===Ys?q.image.height:null,pt=x[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ct=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,St=ct!==void 0?ct.length:0;let Z=0;et.morphAttributes.position!==void 0&&(Z=1),et.morphAttributes.normal!==void 0&&(Z=2),et.morphAttributes.color!==void 0&&(Z=3);let Mt,H,B,C;if(pt){const ie=on[pt];Mt=ie.vertexShader,H=ie.fragmentShader}else Mt=E.vertexShader,H=E.fragmentShader,l.update(E),B=l.getVertexShaderID(E),C=l.getFragmentShaderID(E);const w=n.getRenderTarget(),rt=V.isInstancedMesh===!0,ut=!!E.map,it=!!E.matcap,dt=!!q,g=!!E.aoMap,b=!!E.lightMap,T=!!E.bumpMap,D=!!E.normalMap,N=!!E.displacementMap,X=!!E.emissiveMap,L=!!E.metalnessMap,S=!!E.roughnessMap,j=E.anisotropy>0,J=E.clearcoat>0,yt=E.iridescence>0,A=E.sheen>0,y=E.transmission>0,$=j&&!!E.anisotropyMap,ht=J&&!!E.clearcoatMap,gt=J&&!!E.clearcoatNormalMap,O=J&&!!E.clearcoatRoughnessMap,ft=yt&&!!E.iridescenceMap,vt=yt&&!!E.iridescenceThicknessMap,ot=A&&!!E.sheenColorMap,Ct=A&&!!E.sheenRoughnessMap,Pt=!!E.specularMap,Lt=!!E.specularColorMap,bt=!!E.specularIntensityMap,At=y&&!!E.transmissionMap,It=y&&!!E.thicknessMap,Xt=!!E.gradientMap,Y=!!E.alphaMap,wt=E.alphaTest>0,lt=!!E.extensions,Et=!!et.attributes.uv1,Rt=!!et.attributes.uv2,jt=!!et.attributes.uv3;return{isWebGL2:u,shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:Mt,fragmentShader:H,defines:E.defines,customVertexShaderID:B,customFragmentShaderID:C,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,instancing:rt,instancingColor:rt&&V.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:w===null?n.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:un,map:ut,matcap:it,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:G,aoMap:g,lightMap:b,bumpMap:T,normalMap:D,displacementMap:h&&N,emissiveMap:X,normalMapObjectSpace:D&&E.normalMapType===am,normalMapTangentSpace:D&&E.normalMapType===lh,metalnessMap:L,roughnessMap:S,anisotropy:j,anisotropyMap:$,clearcoat:J,clearcoatMap:ht,clearcoatNormalMap:gt,clearcoatRoughnessMap:O,iridescence:yt,iridescenceMap:ft,iridescenceThicknessMap:vt,sheen:A,sheenColorMap:ot,sheenRoughnessMap:Ct,specularMap:Pt,specularColorMap:Lt,specularIntensityMap:bt,transmission:y,transmissionMap:At,thicknessMap:It,gradientMap:Xt,opaque:E.transparent===!1&&E.blending===Yi,alphaMap:Y,alphaTest:wt,combine:E.combine,mapUv:ut&&_(E.map.channel),aoMapUv:g&&_(E.aoMap.channel),lightMapUv:b&&_(E.lightMap.channel),bumpMapUv:T&&_(E.bumpMap.channel),normalMapUv:D&&_(E.normalMap.channel),displacementMapUv:N&&_(E.displacementMap.channel),emissiveMapUv:X&&_(E.emissiveMap.channel),metalnessMapUv:L&&_(E.metalnessMap.channel),roughnessMapUv:S&&_(E.roughnessMap.channel),anisotropyMapUv:$&&_(E.anisotropyMap.channel),clearcoatMapUv:ht&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(E.sheenRoughnessMap.channel),specularMapUv:Pt&&_(E.specularMap.channel),specularColorMapUv:Lt&&_(E.specularColorMap.channel),specularIntensityMapUv:bt&&_(E.specularIntensityMap.channel),transmissionMapUv:At&&_(E.transmissionMap.channel),thicknessMapUv:It&&_(E.thicknessMap.channel),alphaMapUv:Y&&_(E.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(D||j),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:Rt,vertexUv3s:jt,pointsUvs:V.isPoints===!0&&!!et.attributes.uv&&(ut||Y),fog:!!W,useFog:E.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Z,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&nt.length>0,shadowMapType:n.shadowMap.type,toneMapping:E.toneMapped?n.toneMapping:An,useLegacyLights:n.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===Le,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:lt&&E.extensions.derivatives===!0,extensionFragDepth:lt&&E.extensions.fragDepth===!0,extensionDrawBuffers:lt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const nt in E.defines)U.push(nt),U.push(E.defines[nt]);return E.isRawShaderMaterial===!1&&(P(U,E),v(U,E),U.push(n.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function P(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function v(E,U){o.disableAll(),U.isWebGL2&&o.enable(0),U.supportsVertexTextures&&o.enable(1),U.instancing&&o.enable(2),U.instancingColor&&o.enable(3),U.matcap&&o.enable(4),U.envMap&&o.enable(5),U.normalMapObjectSpace&&o.enable(6),U.normalMapTangentSpace&&o.enable(7),U.clearcoat&&o.enable(8),U.iridescence&&o.enable(9),U.alphaTest&&o.enable(10),U.vertexColors&&o.enable(11),U.vertexAlphas&&o.enable(12),U.vertexUv1s&&o.enable(13),U.vertexUv2s&&o.enable(14),U.vertexUv3s&&o.enable(15),U.vertexTangents&&o.enable(16),U.anisotropy&&o.enable(17),E.push(o.mask),o.disableAll(),U.fog&&o.enable(0),U.useFog&&o.enable(1),U.flatShading&&o.enable(2),U.logarithmicDepthBuffer&&o.enable(3),U.skinning&&o.enable(4),U.morphTargets&&o.enable(5),U.morphNormals&&o.enable(6),U.morphColors&&o.enable(7),U.premultipliedAlpha&&o.enable(8),U.shadowMapEnabled&&o.enable(9),U.useLegacyLights&&o.enable(10),U.doubleSided&&o.enable(11),U.flipSided&&o.enable(12),U.useDepthPacking&&o.enable(13),U.dithering&&o.enable(14),U.transmission&&o.enable(15),U.sheen&&o.enable(16),U.opaque&&o.enable(17),U.pointsUvs&&o.enable(18),E.push(o.mask)}function M(E){const U=x[E.type];let nt;if(U){const Q=on[U];nt=zm.clone(Q.uniforms)}else nt=E.uniforms;return nt}function R(E,U){let nt;for(let Q=0,V=c.length;Q<V;Q++){const W=c[Q];if(W.cacheKey===U){nt=W,++nt.usedTimes;break}}return nt===void 0&&(nt=new Yx(n,U,E,s),c.push(nt)),nt}function F(E){if(--E.usedTimes===0){const U=c.indexOf(E);c[U]=c[c.length-1],c.pop(),E.destroy()}}function z(E){l.remove(E)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:R,releaseProgram:F,releaseShaderCache:z,programs:c,dispose:k}}function Jx(){let n=new WeakMap;function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function e(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function Qx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Vc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kc(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(f,h,m,x,_,p){let d=n[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},n[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=_,d.group=p),t++,d}function o(f,h,m,x,_,p){const d=a(f,h,m,x,_,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):e.push(d)}function l(f,h,m,x,_,p){const d=a(f,h,m,x,_,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||Qx),i.length>1&&i.sort(h||Vc),r.length>1&&r.sort(h||Vc)}function u(){for(let f=t,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function tv(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new kc,n.set(i,[a])):r>=s.length?(a=new kc,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function ev(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new Kt};break;case"SpotLight":e={position:new K,direction:new K,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function nv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let iv=0;function rv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function sv(n,t){const e=new ev,i=nv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new K);const s=new K,a=new oe,o=new oe;function l(u,f){let h=0,m=0,x=0;for(let nt=0;nt<9;nt++)r.probe[nt].set(0,0,0);let _=0,p=0,d=0,P=0,v=0,M=0,R=0,F=0,z=0,k=0;u.sort(rv);const E=f===!0?Math.PI:1;for(let nt=0,Q=u.length;nt<Q;nt++){const V=u[nt],W=V.color,et=V.intensity,at=V.distance,q=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=W.r*et*E,m+=W.g*et*E,x+=W.b*et*E;else if(V.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(V.sh.coefficients[G],et);else if(V.isDirectionalLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity*E),V.castShadow){const pt=V.shadow,ct=i.get(V);ct.shadowBias=pt.bias,ct.shadowNormalBias=pt.normalBias,ct.shadowRadius=pt.radius,ct.shadowMapSize=pt.mapSize,r.directionalShadow[_]=ct,r.directionalShadowMap[_]=q,r.directionalShadowMatrix[_]=V.shadow.matrix,M++}r.directional[_]=G,_++}else if(V.isSpotLight){const G=e.get(V);G.position.setFromMatrixPosition(V.matrixWorld),G.color.copy(W).multiplyScalar(et*E),G.distance=at,G.coneCos=Math.cos(V.angle),G.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),G.decay=V.decay,r.spot[d]=G;const pt=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,pt.updateMatrices(V),V.castShadow&&k++),r.spotLightMatrix[d]=pt.matrix,V.castShadow){const ct=i.get(V);ct.shadowBias=pt.bias,ct.shadowNormalBias=pt.normalBias,ct.shadowRadius=pt.radius,ct.shadowMapSize=pt.mapSize,r.spotShadow[d]=ct,r.spotShadowMap[d]=q,F++}d++}else if(V.isRectAreaLight){const G=e.get(V);G.color.copy(W).multiplyScalar(et),G.halfWidth.set(V.width*.5,0,0),G.halfHeight.set(0,V.height*.5,0),r.rectArea[P]=G,P++}else if(V.isPointLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity*E),G.distance=V.distance,G.decay=V.decay,V.castShadow){const pt=V.shadow,ct=i.get(V);ct.shadowBias=pt.bias,ct.shadowNormalBias=pt.normalBias,ct.shadowRadius=pt.radius,ct.shadowMapSize=pt.mapSize,ct.shadowCameraNear=pt.camera.near,ct.shadowCameraFar=pt.camera.far,r.pointShadow[p]=ct,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=V.shadow.matrix,R++}r.point[p]=G,p++}else if(V.isHemisphereLight){const G=e.get(V);G.skyColor.copy(V.color).multiplyScalar(et*E),G.groundColor.copy(V.groundColor).multiplyScalar(et*E),r.hemi[v]=G,v++}}P>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Tt.LTC_FLOAT_1,r.rectAreaLTC2=Tt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Tt.LTC_HALF_1,r.rectAreaLTC2=Tt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const U=r.hash;(U.directionalLength!==_||U.pointLength!==p||U.spotLength!==d||U.rectAreaLength!==P||U.hemiLength!==v||U.numDirectionalShadows!==M||U.numPointShadows!==R||U.numSpotShadows!==F||U.numSpotMaps!==z)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=P,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=F+z-k,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=k,U.directionalLength=_,U.pointLength=p,U.spotLength=d,U.rectAreaLength=P,U.hemiLength=v,U.numDirectionalShadows=M,U.numPointShadows=R,U.numSpotShadows=F,U.numSpotMaps=z,r.version=iv++)}function c(u,f){let h=0,m=0,x=0,_=0,p=0;const d=f.matrixWorldInverse;for(let P=0,v=u.length;P<v;P++){const M=u[P];if(M.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),h++}else if(M.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),x++}else if(M.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Wc(n,t){const e=new sv(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){e.setup(i,f)}function c(f){e.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ov(n,t){let e=new WeakMap;function i(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Wc(n,t),e.set(s,[l])):a>=o.length?(l=new Wc(n,t),o.push(l)):l=o[a],l}function r(){e=new WeakMap}return{get:i,dispose:r}}class av extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lv extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hv(n,t,e){let i=new Ha;const r=new xt,s=new xt,a=new fe,o=new av({depthPacking:om}),l=new lv,c={},u=e.maxTextureSize,f={[Wn]:Le,[Le]:Wn,[En]:En},h=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:cv,fragmentShader:uv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new Cn;x.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let d=this.type;this.render=function(R,F,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const k=n.getRenderTarget(),E=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),nt=n.state;nt.setBlending(Gn),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const Q=d!==Mn&&this.type===Mn,V=d===Mn&&this.type!==Mn;for(let W=0,et=R.length;W<et;W++){const at=R[W],q=at.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const G=q.getFrameExtents();if(r.multiply(G),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,q.mapSize.y=s.y)),q.map===null||Q===!0||V===!0){const ct=this.type!==Mn?{minFilter:Re,magFilter:Re}:{};q.map!==null&&q.map.dispose(),q.map=new mi(r.x,r.y,ct),q.map.texture.name=at.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const pt=q.getViewportCount();for(let ct=0;ct<pt;ct++){const St=q.getViewport(ct);a.set(s.x*St.x,s.y*St.y,s.x*St.z,s.y*St.w),nt.viewport(a),q.updateMatrices(at,ct),i=q.getFrustum(),M(F,z,q.camera,at,this.type)}q.isPointLightShadow!==!0&&this.type===Mn&&P(q,z),q.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(k,E,U)};function P(R,F){const z=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(F,null,z,h,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(F,null,z,m,_,null)}function v(R,F,z,k){let E=null;const U=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)E=U;else if(E=z.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const nt=E.uuid,Q=F.uuid;let V=c[nt];V===void 0&&(V={},c[nt]=V);let W=V[Q];W===void 0&&(W=E.clone(),V[Q]=W),E=W}if(E.visible=F.visible,E.wireframe=F.wireframe,k===Mn?E.side=F.shadowSide!==null?F.shadowSide:F.side:E.side=F.shadowSide!==null?F.shadowSide:f[F.side],E.alphaMap=F.alphaMap,E.alphaTest=F.alphaTest,E.map=F.map,E.clipShadows=F.clipShadows,E.clippingPlanes=F.clippingPlanes,E.clipIntersection=F.clipIntersection,E.displacementMap=F.displacementMap,E.displacementScale=F.displacementScale,E.displacementBias=F.displacementBias,E.wireframeLinewidth=F.wireframeLinewidth,E.linewidth=F.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const nt=n.properties.get(E);nt.light=z}return E}function M(R,F,z,k,E){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Mn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const Q=t.update(R),V=R.material;if(Array.isArray(V)){const W=Q.groups;for(let et=0,at=W.length;et<at;et++){const q=W[et],G=V[q.materialIndex];if(G&&G.visible){const pt=v(R,G,k,E);n.renderBufferDirect(z,null,Q,pt,R,q)}}}else if(V.visible){const W=v(R,V,k,E);n.renderBufferDirect(z,null,Q,W,R,null)}}const nt=R.children;for(let Q=0,V=nt.length;Q<V;Q++)M(nt[Q],F,z,k,E)}}function fv(n,t,e){const i=e.isWebGL2;function r(){let Y=!1;const wt=new fe;let lt=null;const Et=new fe(0,0,0,0);return{setMask:function(Rt){lt!==Rt&&!Y&&(n.colorMask(Rt,Rt,Rt,Rt),lt=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,jt,te,ie,Xn){Xn===!0&&(Rt*=ie,jt*=ie,te*=ie),wt.set(Rt,jt,te,ie),Et.equals(wt)===!1&&(n.clearColor(Rt,jt,te,ie),Et.copy(wt))},reset:function(){Y=!1,lt=null,Et.set(-1,0,0,0)}}}function s(){let Y=!1,wt=null,lt=null,Et=null;return{setTest:function(Rt){Rt?w(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(Rt){wt!==Rt&&!Y&&(n.depthMask(Rt),wt=Rt)},setFunc:function(Rt){if(lt!==Rt){switch(Rt){case Np:n.depthFunc(n.NEVER);break;case Op:n.depthFunc(n.ALWAYS);break;case Fp:n.depthFunc(n.LESS);break;case ra:n.depthFunc(n.LEQUAL);break;case Bp:n.depthFunc(n.EQUAL);break;case zp:n.depthFunc(n.GEQUAL);break;case Hp:n.depthFunc(n.GREATER);break;case Gp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=Rt}},setLocked:function(Rt){Y=Rt},setClear:function(Rt){Et!==Rt&&(n.clearDepth(Rt),Et=Rt)},reset:function(){Y=!1,wt=null,lt=null,Et=null}}}function a(){let Y=!1,wt=null,lt=null,Et=null,Rt=null,jt=null,te=null,ie=null,Xn=null;return{setTest:function(ee){Y||(ee?w(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(ee){wt!==ee&&!Y&&(n.stencilMask(ee),wt=ee)},setFunc:function(ee,en,Ee){(lt!==ee||Et!==en||Rt!==Ee)&&(n.stencilFunc(ee,en,Ee),lt=ee,Et=en,Rt=Ee)},setOp:function(ee,en,Ee){(jt!==ee||te!==en||ie!==Ee)&&(n.stencilOp(ee,en,Ee),jt=ee,te=en,ie=Ee)},setLocked:function(ee){Y=ee},setClear:function(ee){Xn!==ee&&(n.clearStencil(ee),Xn=ee)},reset:function(){Y=!1,wt=null,lt=null,Et=null,Rt=null,jt=null,te=null,ie=null,Xn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},x=new WeakMap,_=[],p=null,d=!1,P=null,v=null,M=null,R=null,F=null,z=null,k=null,E=!1,U=null,nt=null,Q=null,V=null,W=null;const et=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let at=!1,q=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),at=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),at=q>=2);let pt=null,ct={};const St=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),Mt=new fe().fromArray(St),H=new fe().fromArray(Z);function B(Y,wt,lt,Et){const Rt=new Uint8Array(4),jt=n.createTexture();n.bindTexture(Y,jt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<lt;te++)i&&(Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY)?n.texImage3D(wt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(wt+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return jt}const C={};C[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),C[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(C[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),C[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),w(n.DEPTH_TEST),l.setFunc(ra),N(!1),X(Cl),w(n.CULL_FACE),T(Gn);function w(Y){h[Y]!==!0&&(n.enable(Y),h[Y]=!0)}function rt(Y){h[Y]!==!1&&(n.disable(Y),h[Y]=!1)}function ut(Y,wt){return m[Y]!==wt?(n.bindFramebuffer(Y,wt),m[Y]=wt,i&&(Y===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=wt),Y===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=wt)),!0):!1}function it(Y,wt){let lt=_,Et=!1;if(Y)if(lt=x.get(wt),lt===void 0&&(lt=[],x.set(wt,lt)),Y.isWebGLMultipleRenderTargets){const Rt=Y.texture;if(lt.length!==Rt.length||lt[0]!==n.COLOR_ATTACHMENT0){for(let jt=0,te=Rt.length;jt<te;jt++)lt[jt]=n.COLOR_ATTACHMENT0+jt;lt.length=Rt.length,Et=!0}}else lt[0]!==n.COLOR_ATTACHMENT0&&(lt[0]=n.COLOR_ATTACHMENT0,Et=!0);else lt[0]!==n.BACK&&(lt[0]=n.BACK,Et=!0);Et&&(e.isWebGL2?n.drawBuffers(lt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(lt))}function dt(Y){return p!==Y?(n.useProgram(Y),p=Y,!0):!1}const g={[zi]:n.FUNC_ADD,[Tp]:n.FUNC_SUBTRACT,[bp]:n.FUNC_REVERSE_SUBTRACT};if(i)g[Il]=n.MIN,g[Dl]=n.MAX;else{const Y=t.get("EXT_blend_minmax");Y!==null&&(g[Il]=Y.MIN_EXT,g[Dl]=Y.MAX_EXT)}const b={[Ap]:n.ZERO,[wp]:n.ONE,[Rp]:n.SRC_COLOR,[Zu]:n.SRC_ALPHA,[Dp]:n.SRC_ALPHA_SATURATE,[Up]:n.DST_COLOR,[Pp]:n.DST_ALPHA,[Cp]:n.ONE_MINUS_SRC_COLOR,[Ju]:n.ONE_MINUS_SRC_ALPHA,[Ip]:n.ONE_MINUS_DST_COLOR,[Lp]:n.ONE_MINUS_DST_ALPHA};function T(Y,wt,lt,Et,Rt,jt,te,ie){if(Y===Gn){d===!0&&(rt(n.BLEND),d=!1);return}if(d===!1&&(w(n.BLEND),d=!0),Y!==Ep){if(Y!==P||ie!==E){if((v!==zi||F!==zi)&&(n.blendEquation(n.FUNC_ADD),v=zi,F=zi),ie)switch(Y){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.ONE,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ll:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ul:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}M=null,R=null,z=null,k=null,P=Y,E=ie}return}Rt=Rt||wt,jt=jt||lt,te=te||Et,(wt!==v||Rt!==F)&&(n.blendEquationSeparate(g[wt],g[Rt]),v=wt,F=Rt),(lt!==M||Et!==R||jt!==z||te!==k)&&(n.blendFuncSeparate(b[lt],b[Et],b[jt],b[te]),M=lt,R=Et,z=jt,k=te),P=Y,E=!1}function D(Y,wt){Y.side===En?rt(n.CULL_FACE):w(n.CULL_FACE);let lt=Y.side===Le;wt&&(lt=!lt),N(lt),Y.blending===Yi&&Y.transparent===!1?T(Gn):T(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const Et=Y.stencilWrite;c.setTest(Et),Et&&(c.setMask(Y.stencilWriteMask),c.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),c.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),S(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?w(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function N(Y){U!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),U=Y)}function X(Y){Y!==Mp?(w(n.CULL_FACE),Y!==nt&&(Y===Cl?n.cullFace(n.BACK):Y===yp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),nt=Y}function L(Y){Y!==Q&&(at&&n.lineWidth(Y),Q=Y)}function S(Y,wt,lt){Y?(w(n.POLYGON_OFFSET_FILL),(V!==wt||W!==lt)&&(n.polygonOffset(wt,lt),V=wt,W=lt)):rt(n.POLYGON_OFFSET_FILL)}function j(Y){Y?w(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function J(Y){Y===void 0&&(Y=n.TEXTURE0+et-1),pt!==Y&&(n.activeTexture(Y),pt=Y)}function yt(Y,wt,lt){lt===void 0&&(pt===null?lt=n.TEXTURE0+et-1:lt=pt);let Et=ct[lt];Et===void 0&&(Et={type:void 0,texture:void 0},ct[lt]=Et),(Et.type!==Y||Et.texture!==wt)&&(pt!==lt&&(n.activeTexture(lt),pt=lt),n.bindTexture(Y,wt||C[Y]),Et.type=Y,Et.texture=wt)}function A(){const Y=ct[pt];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ht(){try{n.texSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function O(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{n.texStorage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{n.texImage2D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Pt(){try{n.texImage3D.apply(n,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Lt(Y){Mt.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Mt.copy(Y))}function bt(Y){H.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),H.copy(Y))}function At(Y,wt){let lt=f.get(wt);lt===void 0&&(lt=new WeakMap,f.set(wt,lt));let Et=lt.get(Y);Et===void 0&&(Et=n.getUniformBlockIndex(wt,Y.name),lt.set(Y,Et))}function It(Y,wt){const Et=f.get(wt).get(Y);u.get(wt)!==Et&&(n.uniformBlockBinding(wt,Et,Y.__bindingPointIndex),u.set(wt,Et))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pt=null,ct={},m={},x=new WeakMap,_=[],p=null,d=!1,P=null,v=null,M=null,R=null,F=null,z=null,k=null,E=!1,U=null,nt=null,Q=null,V=null,W=null,Mt.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:w,disable:rt,bindFramebuffer:ut,drawBuffers:it,useProgram:dt,setBlending:T,setMaterial:D,setFlipSided:N,setCullFace:X,setLineWidth:L,setPolygonOffset:S,setScissorTest:j,activeTexture:J,bindTexture:yt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:$,texImage2D:Ct,texImage3D:Pt,updateUBOMapping:At,uniformBlockBinding:It,texStorage2D:vt,texStorage3D:ot,texSubImage2D:ht,texSubImage3D:gt,compressedTexSubImage2D:O,compressedTexSubImage3D:ft,scissor:Lt,viewport:bt,reset:Xt}}function dv(n,t,e,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let _;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(A,y){return d?new OffscreenCanvas(A,y):Ds("canvas")}function v(A,y,$,ht){let gt=1;if((A.width>ht||A.height>ht)&&(gt=ht/Math.max(A.width,A.height)),gt<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const O=y?ua:Math.floor,ft=O(gt*A.width),vt=O(gt*A.height);_===void 0&&(_=P(ft,vt));const ot=$?P(ft,vt):_;return ot.width=ft,ot.height=vt,ot.getContext("2d").drawImage(A,0,0,ft,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ft+"x"+vt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function M(A){return ac(A.width)&&ac(A.height)}function R(A){return o?!1:A.wrapS!==Ke||A.wrapT!==Ke||A.minFilter!==Re&&A.minFilter!==He}function F(A,y){return A.generateMipmaps&&y&&A.minFilter!==Re&&A.minFilter!==He}function z(A){n.generateMipmap(A)}function k(A,y,$,ht,gt=!1){if(o===!1)return y;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let O=y;return y===n.RED&&($===n.FLOAT&&(O=n.R32F),$===n.HALF_FLOAT&&(O=n.R16F),$===n.UNSIGNED_BYTE&&(O=n.R8)),y===n.RG&&($===n.FLOAT&&(O=n.RG32F),$===n.HALF_FLOAT&&(O=n.RG16F),$===n.UNSIGNED_BYTE&&(O=n.RG8)),y===n.RGBA&&($===n.FLOAT&&(O=n.RGBA32F),$===n.HALF_FLOAT&&(O=n.RGBA16F),$===n.UNSIGNED_BYTE&&(O=ht===zt&&gt===!1?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)),(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function E(A,y,$){return F(A,$)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==He?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function U(A){return A===Re||A===Nl||A===co?n.NEAREST:n.LINEAR}function nt(A){const y=A.target;y.removeEventListener("dispose",nt),V(y),y.isVideoTexture&&x.delete(y)}function Q(A){const y=A.target;y.removeEventListener("dispose",Q),et(y)}function V(A){const y=i.get(A);if(y.__webglInit===void 0)return;const $=A.source,ht=p.get($);if(ht){const gt=ht[y.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&W(A),Object.keys(ht).length===0&&p.delete($)}i.remove(A)}function W(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const $=A.source,ht=p.get($);delete ht[y.__cacheKey],a.memory.textures--}function et(A){const y=A.texture,$=i.get(A),ht=i.get(y);if(ht.__webglTexture!==void 0&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)n.deleteFramebuffer($.__webglFramebuffer[gt]),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[gt]);else{if(n.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let gt=0;gt<$.__webglColorRenderbuffer.length;gt++)$.__webglColorRenderbuffer[gt]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[gt]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let gt=0,O=y.length;gt<O;gt++){const ft=i.get(y[gt]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(y[gt])}i.remove(y),i.remove(A)}let at=0;function q(){at=0}function G(){const A=at;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),at+=1,A}function pt(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function ct(A,y){const $=i.get(A);if(A.isVideoTexture&&J(A),A.isRenderTargetTexture===!1&&A.version>0&&$.__version!==A.version){const ht=A.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut($,A,y);return}}e.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+y)}function St(A,y){const $=i.get(A);if(A.version>0&&$.__version!==A.version){ut($,A,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+y)}function Z(A,y){const $=i.get(A);if(A.version>0&&$.__version!==A.version){ut($,A,y);return}e.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+y)}function Mt(A,y){const $=i.get(A);if(A.version>0&&$.__version!==A.version){it($,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+y)}const H={[aa]:n.REPEAT,[Ke]:n.CLAMP_TO_EDGE,[la]:n.MIRRORED_REPEAT},B={[Re]:n.NEAREST,[Nl]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[He]:n.LINEAR,[$p]:n.LINEAR_MIPMAP_NEAREST,[Ir]:n.LINEAR_MIPMAP_LINEAR},C={[cm]:n.NEVER,[gm]:n.ALWAYS,[um]:n.LESS,[fm]:n.LEQUAL,[hm]:n.EQUAL,[mm]:n.GEQUAL,[dm]:n.GREATER,[pm]:n.NOTEQUAL};function w(A,y,$){if($?(n.texParameteri(A,n.TEXTURE_WRAP_S,H[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,H[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,H[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,B[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,B[y.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==Ke||y.wrapT!==Ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,U(y.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,U(y.minFilter)),y.minFilter!==Re&&y.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,C[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Re||y.minFilter!==co&&y.minFilter!==Ir||y.type===Fn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Dr&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(A,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function rt(A,y){let $=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",nt));const ht=y.source;let gt=p.get(ht);gt===void 0&&(gt={},p.set(ht,gt));const O=pt(y);if(O!==A.__cacheKey){gt[O]===void 0&&(gt[O]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,$=!0),gt[O].usedTimes++;const ft=gt[A.__cacheKey];ft!==void 0&&(gt[A.__cacheKey].usedTimes--,ft.usedTimes===0&&W(y)),A.__cacheKey=O,A.__webglTexture=gt[O].texture}return $}function ut(A,y,$){let ht=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ht=n.TEXTURE_3D);const gt=rt(A,y),O=y.source;e.bindTexture(ht,A.__webglTexture,n.TEXTURE0+$);const ft=i.get(O);if(O.version!==ft.__version||gt===!0){e.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const vt=R(y)&&M(y.image)===!1;let ot=v(y.image,vt,!1,u);ot=yt(y,ot);const Ct=M(ot)||o,Pt=s.convert(y.format,y.colorSpace);let Lt=s.convert(y.type),bt=k(y.internalFormat,Pt,Lt,y.colorSpace);w(ht,y,Ct);let At;const It=y.mipmaps,Xt=o&&y.isVideoTexture!==!0,Y=ft.__version===void 0||gt===!0,wt=E(y,ot,Ct);if(y.isDepthTexture)bt=n.DEPTH_COMPONENT,o?y.type===Fn?bt=n.DEPTH_COMPONENT32F:y.type===On?bt=n.DEPTH_COMPONENT24:y.type===ui?bt=n.DEPTH24_STENCIL8:bt=n.DEPTH_COMPONENT16:y.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===hi&&bt===n.DEPTH_COMPONENT&&y.type!==Ba&&y.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=On,Lt=s.convert(y.type)),y.format===nr&&bt===n.DEPTH_COMPONENT&&(bt=n.DEPTH_STENCIL,y.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ui,Lt=s.convert(y.type))),Y&&(Xt?e.texStorage2D(n.TEXTURE_2D,1,bt,ot.width,ot.height):e.texImage2D(n.TEXTURE_2D,0,bt,ot.width,ot.height,0,Pt,Lt,null));else if(y.isDataTexture)if(It.length>0&&Ct){Xt&&Y&&e.texStorage2D(n.TEXTURE_2D,wt,bt,It[0].width,It[0].height);for(let lt=0,Et=It.length;lt<Et;lt++)At=It[lt],Xt?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,At.width,At.height,Pt,Lt,At.data):e.texImage2D(n.TEXTURE_2D,lt,bt,At.width,At.height,0,Pt,Lt,At.data);y.generateMipmaps=!1}else Xt?(Y&&e.texStorage2D(n.TEXTURE_2D,wt,bt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot.width,ot.height,Pt,Lt,ot.data)):e.texImage2D(n.TEXTURE_2D,0,bt,ot.width,ot.height,0,Pt,Lt,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Xt&&Y&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,bt,It[0].width,It[0].height,ot.depth);for(let lt=0,Et=It.length;lt<Et;lt++)At=It[lt],y.format!==Ze?Pt!==null?Xt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,At.width,At.height,ot.depth,Pt,At.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,bt,At.width,At.height,ot.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,At.width,At.height,ot.depth,Pt,Lt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,bt,At.width,At.height,ot.depth,0,Pt,Lt,At.data)}else{Xt&&Y&&e.texStorage2D(n.TEXTURE_2D,wt,bt,It[0].width,It[0].height);for(let lt=0,Et=It.length;lt<Et;lt++)At=It[lt],y.format!==Ze?Pt!==null?Xt?e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,At.width,At.height,Pt,At.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,bt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,At.width,At.height,Pt,Lt,At.data):e.texImage2D(n.TEXTURE_2D,lt,bt,At.width,At.height,0,Pt,Lt,At.data)}else if(y.isDataArrayTexture)Xt?(Y&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,bt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Pt,Lt,ot.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,ot.width,ot.height,ot.depth,0,Pt,Lt,ot.data);else if(y.isData3DTexture)Xt?(Y&&e.texStorage3D(n.TEXTURE_3D,wt,bt,ot.width,ot.height,ot.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Pt,Lt,ot.data)):e.texImage3D(n.TEXTURE_3D,0,bt,ot.width,ot.height,ot.depth,0,Pt,Lt,ot.data);else if(y.isFramebufferTexture){if(Y)if(Xt)e.texStorage2D(n.TEXTURE_2D,wt,bt,ot.width,ot.height);else{let lt=ot.width,Et=ot.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,bt,lt,Et,0,Pt,Lt,null),lt>>=1,Et>>=1}}else if(It.length>0&&Ct){Xt&&Y&&e.texStorage2D(n.TEXTURE_2D,wt,bt,It[0].width,It[0].height);for(let lt=0,Et=It.length;lt<Et;lt++)At=It[lt],Xt?e.texSubImage2D(n.TEXTURE_2D,lt,0,0,Pt,Lt,At):e.texImage2D(n.TEXTURE_2D,lt,bt,Pt,Lt,At);y.generateMipmaps=!1}else Xt?(Y&&e.texStorage2D(n.TEXTURE_2D,wt,bt,ot.width,ot.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Pt,Lt,ot)):e.texImage2D(n.TEXTURE_2D,0,bt,Pt,Lt,ot);F(y,Ct)&&z(ht),ft.__version=O.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function it(A,y,$){if(y.image.length!==6)return;const ht=rt(A,y),gt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+$);const O=i.get(gt);if(gt.version!==O.__version||ht===!0){e.activeTexture(n.TEXTURE0+$),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ft=y.isCompressedTexture||y.image[0].isCompressedTexture,vt=y.image[0]&&y.image[0].isDataTexture,ot=[];for(let lt=0;lt<6;lt++)!ft&&!vt?ot[lt]=v(y.image[lt],!1,!0,c):ot[lt]=vt?y.image[lt].image:y.image[lt],ot[lt]=yt(y,ot[lt]);const Ct=ot[0],Pt=M(Ct)||o,Lt=s.convert(y.format,y.colorSpace),bt=s.convert(y.type),At=k(y.internalFormat,Lt,bt,y.colorSpace),It=o&&y.isVideoTexture!==!0,Xt=O.__version===void 0||ht===!0;let Y=E(y,Ct,Pt);w(n.TEXTURE_CUBE_MAP,y,Pt);let wt;if(ft){It&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Y,At,Ct.width,Ct.height);for(let lt=0;lt<6;lt++){wt=ot[lt].mipmaps;for(let Et=0;Et<wt.length;Et++){const Rt=wt[Et];y.format!==Ze?Lt!==null?It?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,At,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,Rt.width,Rt.height,Lt,bt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,At,Rt.width,Rt.height,0,Lt,bt,Rt.data)}}}else{wt=y.mipmaps,It&&Xt&&(wt.length>0&&Y++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Y,At,ot[0].width,ot[0].height));for(let lt=0;lt<6;lt++)if(vt){It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ot[lt].width,ot[lt].height,Lt,bt,ot[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,At,ot[lt].width,ot[lt].height,0,Lt,bt,ot[lt].data);for(let Et=0;Et<wt.length;Et++){const jt=wt[Et].image[lt].image;It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,jt.width,jt.height,Lt,bt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,At,jt.width,jt.height,0,Lt,bt,jt.data)}}else{It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Lt,bt,ot[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,At,Lt,bt,ot[lt]);for(let Et=0;Et<wt.length;Et++){const Rt=wt[Et];It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,Lt,bt,Rt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,At,Lt,bt,Rt.image[lt])}}}F(y,Pt)&&z(n.TEXTURE_CUBE_MAP),O.__version=gt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function dt(A,y,$,ht,gt){const O=s.convert($.format,$.colorSpace),ft=s.convert($.type),vt=k($.internalFormat,O,ft,$.colorSpace);i.get(y).__hasExternalTextures||(gt===n.TEXTURE_3D||gt===n.TEXTURE_2D_ARRAY?e.texImage3D(gt,0,vt,y.width,y.height,y.depth,0,O,ft,null):e.texImage2D(gt,0,vt,y.width,y.height,0,O,ft,null)),e.bindFramebuffer(n.FRAMEBUFFER,A),j(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,gt,i.get($).__webglTexture,0,S(y)):(gt===n.TEXTURE_2D||gt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,gt,i.get($).__webglTexture,0),e.bindFramebuffer(n.FRAMEBUFFER,null)}function g(A,y,$){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let ht=n.DEPTH_COMPONENT16;if($||j(y)){const gt=y.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Fn?ht=n.DEPTH_COMPONENT32F:gt.type===On&&(ht=n.DEPTH_COMPONENT24));const O=S(y);j(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,ht,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,O,ht,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){const ht=S(y);$&&j(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,n.DEPTH24_STENCIL8,y.width,y.height):j(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const ht=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let gt=0;gt<ht.length;gt++){const O=ht[gt],ft=s.convert(O.format,O.colorSpace),vt=s.convert(O.type),ot=k(O.internalFormat,ft,vt,O.colorSpace),Ct=S(y);$&&j(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,ot,y.width,y.height):j(y)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,ot,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ot,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function b(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ct(y.depthTexture,0);const ht=i.get(y.depthTexture).__webglTexture,gt=S(y);if(y.depthTexture.format===hi)j(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(y.depthTexture.format===nr)j(y)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,gt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function T(A){const y=i.get(A),$=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");b(y.__webglFramebuffer,A)}else if($){y.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ht]),y.__webglDepthbuffer[ht]=n.createRenderbuffer(),g(y.__webglDepthbuffer[ht],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),g(y.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function D(A,y,$){const ht=i.get(A);y!==void 0&&dt(ht.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),$!==void 0&&T(A)}function N(A){const y=A.texture,$=i.get(A),ht=i.get(y);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=y.version,a.memory.textures++);const gt=A.isWebGLCubeRenderTarget===!0,O=A.isWebGLMultipleRenderTargets===!0,ft=M(A)||o;if(gt){$.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)$.__webglFramebuffer[vt]=n.createFramebuffer()}else{if($.__webglFramebuffer=n.createFramebuffer(),O)if(r.drawBuffers){const vt=A.texture;for(let ot=0,Ct=vt.length;ot<Ct;ot++){const Pt=i.get(vt[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&j(A)===!1){const vt=O?y:[y];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ot=0;ot<vt.length;ot++){const Ct=vt[ot];$.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ot]);const Pt=s.convert(Ct.format,Ct.colorSpace),Lt=s.convert(Ct.type),bt=k(Ct.internalFormat,Pt,Lt,Ct.colorSpace,A.isXRRenderTarget===!0),At=S(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,bt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,$.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),g($.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(gt){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),w(n.TEXTURE_CUBE_MAP,y,ft);for(let vt=0;vt<6;vt++)dt($.__webglFramebuffer[vt],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt);F(y,ft)&&z(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(O){const vt=A.texture;for(let ot=0,Ct=vt.length;ot<Ct;ot++){const Pt=vt[ot],Lt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,Lt.__webglTexture),w(n.TEXTURE_2D,Pt,ft),dt($.__webglFramebuffer,A,Pt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D),F(Pt,ft)&&z(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?vt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),w(vt,y,ft),dt($.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,vt),F(y,ft)&&z(vt),e.unbindTexture()}A.depthBuffer&&T(A)}function X(A){const y=M(A)||o,$=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ht=0,gt=$.length;ht<gt;ht++){const O=$[ht];if(F(O,y)){const ft=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(O).__webglTexture;e.bindTexture(ft,vt),z(ft),e.unbindTexture()}}}function L(A){if(o&&A.samples>0&&j(A)===!1){const y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],$=A.width,ht=A.height;let gt=n.COLOR_BUFFER_BIT;const O=[],ft=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(A),ot=A.isWebGLMultipleRenderTargets===!0;if(ot)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){O.push(n.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&O.push(ft);const Pt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Pt===!1&&(A.depthBuffer&&(gt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(gt|=n.STENCIL_BUFFER_BIT)),ot&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Ct]),Pt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ft]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ft])),ot){const Lt=i.get(y[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,$,ht,0,0,$,ht,gt,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,O)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Ct]);const Pt=i.get(y[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function S(A){return Math.min(f,A.samples)}function j(A){const y=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function J(A){const y=a.render.frame;x.get(A)!==y&&(x.set(A,y),A.update())}function yt(A,y){const $=A.colorSpace,ht=A.format,gt=A.type;return A.isCompressedTexture===!0||A.format===ca||$!==un&&$!==di&&($===zt?o===!1?t.has("EXT_sRGB")===!0&&ht===Ze?(A.format=ca,A.minFilter=He,A.generateMipmaps=!1):y=hh.sRGBToLinear(y):(ht!==Ze||gt!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),y}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=ct,this.setTexture2DArray=St,this.setTexture3D=Z,this.setTextureCube=Mt,this.rebindTextures=D,this.setupRenderTarget=N,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=j}function pv(n,t,e){const i=e.isWebGL2;function r(s,a=di){let o;if(s===Vn)return n.UNSIGNED_BYTE;if(s===nh)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ih)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Kp)return n.BYTE;if(s===Zp)return n.SHORT;if(s===Ba)return n.UNSIGNED_SHORT;if(s===eh)return n.INT;if(s===On)return n.UNSIGNED_INT;if(s===Fn)return n.FLOAT;if(s===Dr)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Jp)return n.ALPHA;if(s===Ze)return n.RGBA;if(s===Qp)return n.LUMINANCE;if(s===tm)return n.LUMINANCE_ALPHA;if(s===hi)return n.DEPTH_COMPONENT;if(s===nr)return n.DEPTH_STENCIL;if(s===ca)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===em)return n.RED;if(s===rh)return n.RED_INTEGER;if(s===nm)return n.RG;if(s===sh)return n.RG_INTEGER;if(s===oh)return n.RGBA_INTEGER;if(s===uo||s===ho||s===fo||s===po)if(a===zt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ol||s===Fl||s===Bl||s===zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===im)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hl||s===Gl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Hl)return a===zt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Gl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vl||s===kl||s===Wl||s===Xl||s===ql||s===Yl||s===jl||s===$l||s===Kl||s===Zl||s===Jl||s===Ql||s===tc||s===ec)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Vl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ql)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===jl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$l)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jl)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ql)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tc)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ec)return a===zt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===mo)return a===zt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===rm||s===nc||s===ic||s===rc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===nc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ic)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class mv extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xr extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gv={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&h>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class _v extends Be{constructor(t,e,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===hi&&(i=On),i===void 0&&u===nr&&(i=ui),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xv extends vi{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,x=null;const _=e.getContextAttributes();let p=null,d=null;const P=[],v=[];let M=null;const R=new Fe;R.layers.enable(1),R.viewport=new fe;const F=new Fe;F.layers.enable(2),F.viewport=new fe;const z=[R,F],k=new mv;k.layers.enable(1),k.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(Z){M=Z},this.getController=function(Z){let Mt=P[Z];return Mt===void 0&&(Mt=new zo,P[Z]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let Mt=P[Z];return Mt===void 0&&(Mt=new zo,P[Z]=Mt),Mt.getGripSpace()},this.getHand=function(Z){let Mt=P[Z];return Mt===void 0&&(Mt=new zo,P[Z]=Mt),Mt.getHandSpace()};function nt(Z){const Mt=v.indexOf(Z.inputSource);if(Mt===-1)return;const H=P[Mt];H!==void 0&&(H.update(Z.inputSource,Z.frame,c||a),H.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){r.removeEventListener("select",nt),r.removeEventListener("selectstart",nt),r.removeEventListener("selectend",nt),r.removeEventListener("squeeze",nt),r.removeEventListener("squeezestart",nt),r.removeEventListener("squeezeend",nt),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",V);for(let Z=0;Z<P.length;Z++){const Mt=v[Z];Mt!==null&&(v[Z]=null,P[Z].disconnect(Mt))}E=null,U=null,t.setRenderTarget(p),m=null,h=null,f=null,r=null,d=null,St.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",nt),r.addEventListener("selectstart",nt),r.addEventListener("selectend",nt),r.addEventListener("squeeze",nt),r.addEventListener("squeezestart",nt),r.addEventListener("squeezeend",nt),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Mt={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,Mt),r.updateRenderState({baseLayer:m}),d=new mi(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Mt=null,H=null,B=null;_.depth&&(B=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=_.stencil?nr:hi,H=_.stencil?ui:On);const C={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(C),r.updateRenderState({layers:[h]}),d=new mi(h.textureWidth,h.textureHeight,{format:Ze,type:Vn,depthTexture:new _v(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const w=t.properties.get(d);w.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),St.setContext(r),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(Z){for(let Mt=0;Mt<Z.removed.length;Mt++){const H=Z.removed[Mt],B=v.indexOf(H);B>=0&&(v[B]=null,P[B].disconnect(H))}for(let Mt=0;Mt<Z.added.length;Mt++){const H=Z.added[Mt];let B=v.indexOf(H);if(B===-1){for(let w=0;w<P.length;w++)if(w>=v.length){v.push(H),B=w;break}else if(v[w]===null){v[w]=H,B=w;break}if(B===-1)break}const C=P[B];C&&C.connect(H)}}const W=new K,et=new K;function at(Z,Mt,H){W.setFromMatrixPosition(Mt.matrixWorld),et.setFromMatrixPosition(H.matrixWorld);const B=W.distanceTo(et),C=Mt.projectionMatrix.elements,w=H.projectionMatrix.elements,rt=C[14]/(C[10]-1),ut=C[14]/(C[10]+1),it=(C[9]+1)/C[5],dt=(C[9]-1)/C[5],g=(C[8]-1)/C[0],b=(w[8]+1)/w[0],T=rt*g,D=rt*b,N=B/(-g+b),X=N*-g;Mt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(X),Z.translateZ(N),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const L=rt+N,S=ut+N,j=T-X,J=D+(B-X),yt=it*ut/S*L,A=dt*ut/S*L;Z.projectionMatrix.makePerspective(j,J,yt,A,L,S),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function q(Z,Mt){Mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCameraXR=function(Z){if(r===null)return Z;M&&(Z=M),k.near=F.near=R.near=Z.near,k.far=F.far=R.far=Z.far,(E!==k.near||U!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),E=k.near,U=k.far);const Mt=Z.parent,H=k.cameras;q(k,Mt);for(let B=0;B<H.length;B++)q(H[B],Mt);return H.length===2?at(k,R,F):k.projectionMatrix.copy(R.projectionMatrix),M&&G(k,Mt),k};function G(Z,Mt){const H=M;Mt===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(Mt.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const B=H.children;for(let C=0,w=B.length;C<w;C++)B[C].updateMatrixWorld(!0);H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Is*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)};let pt=null;function ct(Z,Mt){if(u=Mt.getViewerPose(c||a),x=Mt,u!==null){const H=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let B=!1;H.length!==k.cameras.length&&(k.cameras.length=0,B=!0);for(let C=0;C<H.length;C++){const w=H[C];let rt=null;if(m!==null)rt=m.getViewport(w);else{const it=f.getViewSubImage(h,w);rt=it.viewport,C===0&&(t.setRenderTargetTextures(d,it.colorTexture,h.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(d))}let ut=z[C];ut===void 0&&(ut=new Fe,ut.layers.enable(C),ut.viewport=new fe,z[C]=ut),ut.matrix.fromArray(w.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(w.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(rt.x,rt.y,rt.width,rt.height),C===0&&(k.matrix.copy(ut.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),B===!0&&k.cameras.push(ut)}}for(let H=0;H<P.length;H++){const B=v[H],C=P[H];B!==null&&C!==void 0&&C.update(B,Mt,c||a)}pt&&pt(Z,Mt),Mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Mt}),x=null}const St=new Sh;St.setAnimationLoop(ct),this.setAnimationLoop=function(Z){pt=Z},this.dispose=function(){}}}function vv(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,vh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,P,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),x(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,P,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Le&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Le&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const P=t.get(d).envMap;if(P&&(p.envMap.value=P,p.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,P,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*P,p.scale.value=v*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,P){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const P=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Mv(n,t,e,i){let r={},s={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(P,v){const M=v.program;i.uniformBlockBinding(P,M)}function c(P,v){let M=r[P.id];M===void 0&&(x(P),M=u(P),r[P.id]=M,P.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(P,R);const F=t.render.frame;s[P.id]!==F&&(h(P),s[P.id]=F)}function u(P){const v=f();P.__bindingPointIndex=v;const M=n.createBuffer(),R=P.__size,F=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,M),M}function f(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(P){const v=r[P.id],M=P.uniforms,R=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let F=0,z=M.length;F<z;F++){const k=M[F];if(m(k,F,R)===!0){const E=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let nt=0;for(let Q=0;Q<U.length;Q++){const V=U[Q],W=_(V);typeof V=="number"?(k.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,E+nt,k.__data)):V.isMatrix3?(k.__data[0]=V.elements[0],k.__data[1]=V.elements[1],k.__data[2]=V.elements[2],k.__data[3]=V.elements[0],k.__data[4]=V.elements[3],k.__data[5]=V.elements[4],k.__data[6]=V.elements[5],k.__data[7]=V.elements[0],k.__data[8]=V.elements[6],k.__data[9]=V.elements[7],k.__data[10]=V.elements[8],k.__data[11]=V.elements[0]):(V.toArray(k.__data,nt),nt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,E,k.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(P,v,M){const R=P.value;if(M[v]===void 0){if(typeof R=="number")M[v]=R;else{const F=Array.isArray(R)?R:[R],z=[];for(let k=0;k<F.length;k++)z.push(F[k].clone());M[v]=z}return!0}else if(typeof R=="number"){if(M[v]!==R)return M[v]=R,!0}else{const F=Array.isArray(M[v])?M[v]:[M[v]],z=Array.isArray(R)?R:[R];for(let k=0;k<F.length;k++){const E=F[k];if(E.equals(z[k])===!1)return E.copy(z[k]),!0}}return!1}function x(P){const v=P.uniforms;let M=0;const R=16;let F=0;for(let z=0,k=v.length;z<k;z++){const E=v[z],U={boundary:0,storage:0},nt=Array.isArray(E.value)?E.value:[E.value];for(let Q=0,V=nt.length;Q<V;Q++){const W=nt[Q],et=_(W);U.boundary+=et.boundary,U.storage+=et.storage}if(E.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=M,z>0){F=M%R;const Q=R-F;F!==0&&Q-U.boundary<0&&(M+=R-F,E.__offset=M)}M+=U.storage}return F=M%R,F>0&&(M+=R-F),P.__size=M,P.__cache={},this}function _(P){const v={boundary:0,storage:0};return typeof P=="number"?(v.boundary=4,v.storage=4):P.isVector2?(v.boundary=8,v.storage=8):P.isVector3||P.isColor?(v.boundary=16,v.storage=12):P.isVector4?(v.boundary=16,v.storage=16):P.isMatrix3?(v.boundary=48,v.storage=48):P.isMatrix4?(v.boundary=64,v.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),v}function p(P){const v=P.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const P in r)n.deleteBuffer(r[P]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}function yv(){const n=Ds("canvas");return n.style.display="block",n}class wh{constructor(t={}){const{canvas:e=yv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),x=new Int32Array(4);let _=null,p=null;const d=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=zt,this.useLegacyLights=!0,this.toneMapping=An,this.toneMappingExposure=1;const v=this;let M=!1,R=0,F=0,z=null,k=-1,E=null;const U=new fe,nt=new fe;let Q=null;const V=new Kt(0);let W=0,et=e.width,at=e.height,q=1,G=null,pt=null;const ct=new fe(0,0,et,at),St=new fe(0,0,et,at);let Z=!1;const Mt=new Ha;let H=!1,B=!1,C=null;const w=new oe,rt=new xt,ut=new K,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function dt(){return z===null?q:1}let g=i;function b(I,st){for(let mt=0;mt<I.length;mt++){const tt=I[mt],_t=e.getContext(tt,st);if(_t!==null)return _t}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fa}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),g===null){const st=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&st.shift(),g=b(st,I),g===null)throw b(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let T,D,N,X,L,S,j,J,yt,A,y,$,ht,gt,O,ft,vt,ot,Ct,Pt,Lt,bt,At,It;function Xt(){T=new U0(g),D=new b0(g,T,t),T.init(D),bt=new pv(g,T,D),N=new fv(g,T,D),X=new N0(g),L=new Jx,S=new dv(g,T,N,L,D,bt,X),j=new w0(v),J=new L0(v),yt=new qm(g,D),At=new E0(g,T,yt,D),A=new I0(g,yt,X,At),y=new z0(g,A,yt,X),Ct=new B0(g,D,S),ft=new A0(L),$=new Zx(v,j,J,T,D,At,ft),ht=new vv(v,L),gt=new tv,O=new ov(T,D),ot=new S0(v,j,J,N,y,h,l),vt=new hv(v,y,D),It=new Mv(g,X,D,N),Pt=new T0(g,T,X,D),Lt=new D0(g,T,X,D),X.programs=$.programs,v.capabilities=D,v.extensions=T,v.properties=L,v.renderLists=gt,v.shadowMap=vt,v.state=N,v.info=X}Xt();const Y=new xv(v,g);this.xr=Y,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const I=T.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=T.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(I){I!==void 0&&(q=I,this.setSize(et,at,!1))},this.getSize=function(I){return I.set(et,at)},this.setSize=function(I,st,mt=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=I,at=st,e.width=Math.floor(I*q),e.height=Math.floor(st*q),mt===!0&&(e.style.width=I+"px",e.style.height=st+"px"),this.setViewport(0,0,I,st)},this.getDrawingBufferSize=function(I){return I.set(et*q,at*q).floor()},this.setDrawingBufferSize=function(I,st,mt){et=I,at=st,q=mt,e.width=Math.floor(I*mt),e.height=Math.floor(st*mt),this.setViewport(0,0,I,st)},this.getCurrentViewport=function(I){return I.copy(U)},this.getViewport=function(I){return I.copy(ct)},this.setViewport=function(I,st,mt,tt){I.isVector4?ct.set(I.x,I.y,I.z,I.w):ct.set(I,st,mt,tt),N.viewport(U.copy(ct).multiplyScalar(q).floor())},this.getScissor=function(I){return I.copy(St)},this.setScissor=function(I,st,mt,tt){I.isVector4?St.set(I.x,I.y,I.z,I.w):St.set(I,st,mt,tt),N.scissor(nt.copy(St).multiplyScalar(q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(I){N.setScissorTest(Z=I)},this.setOpaqueSort=function(I){G=I},this.setTransparentSort=function(I){pt=I},this.getClearColor=function(I){return I.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(I=!0,st=!0,mt=!0){let tt=0;if(I){let _t=!1;if(z!==null){const Ut=z.texture.format;_t=Ut===oh||Ut===sh||Ut===rh}if(_t){const Ut=z.texture.type,Dt=Ut===Vn||Ut===On||Ut===Ba||Ut===ui||Ut===nh||Ut===ih,Nt=ot.getClearColor(),Ot=ot.getClearAlpha(),Wt=Nt.r,Bt=Nt.g,Gt=Nt.b,Zt=L.get(z).__webglFramebuffer;Dt?(m[0]=Wt,m[1]=Bt,m[2]=Gt,m[3]=Ot,g.clearBufferuiv(g.COLOR,Zt,m)):(x[0]=Wt,x[1]=Bt,x[2]=Gt,x[3]=Ot,g.clearBufferiv(g.COLOR,Zt,x))}else tt|=g.COLOR_BUFFER_BIT}st&&(tt|=g.DEPTH_BUFFER_BIT),mt&&(tt|=g.STENCIL_BUFFER_BIT),g.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),gt.dispose(),O.dispose(),L.dispose(),j.dispose(),J.dispose(),y.dispose(),At.dispose(),It.dispose(),$.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",ee),Y.removeEventListener("sessionend",en),C&&(C.dispose(),C=null),Ee.stop()};function wt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const I=X.autoReset,st=vt.enabled,mt=vt.autoUpdate,tt=vt.needsUpdate,_t=vt.type;Xt(),X.autoReset=I,vt.enabled=st,vt.autoUpdate=mt,vt.needsUpdate=tt,vt.type=_t}function Et(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Rt(I){const st=I.target;st.removeEventListener("dispose",Rt),jt(st)}function jt(I){te(I),L.remove(I)}function te(I){const st=L.get(I).programs;st!==void 0&&(st.forEach(function(mt){$.releaseProgram(mt)}),I.isShaderMaterial&&$.releaseShaderCache(I))}this.renderBufferDirect=function(I,st,mt,tt,_t,Ut){st===null&&(st=it);const Dt=_t.isMesh&&_t.matrixWorld.determinant()<0,Nt=zh(I,st,mt,tt,_t);N.setMaterial(tt,Dt);let Ot=mt.index,Wt=1;tt.wireframe===!0&&(Ot=A.getWireframeAttribute(mt),Wt=2);const Bt=mt.drawRange,Gt=mt.attributes.position;let Zt=Bt.start*Wt,ne=(Bt.start+Bt.count)*Wt;Ut!==null&&(Zt=Math.max(Zt,Ut.start*Wt),ne=Math.min(ne,(Ut.start+Ut.count)*Wt)),Ot!==null?(Zt=Math.max(Zt,0),ne=Math.min(ne,Ot.count)):Gt!=null&&(Zt=Math.max(Zt,0),ne=Math.min(ne,Gt.count));const Ve=ne-Zt;if(Ve<0||Ve===1/0)return;At.setup(_t,tt,Nt,mt,Ot);let fn,re=Pt;if(Ot!==null&&(fn=yt.get(Ot),re=Lt,re.setIndex(fn)),_t.isMesh)tt.wireframe===!0?(N.setLineWidth(tt.wireframeLinewidth*dt()),re.setMode(g.LINES)):re.setMode(g.TRIANGLES);else if(_t.isLine){let qt=tt.linewidth;qt===void 0&&(qt=1),N.setLineWidth(qt*dt()),_t.isLineSegments?re.setMode(g.LINES):_t.isLineLoop?re.setMode(g.LINE_LOOP):re.setMode(g.LINE_STRIP)}else _t.isPoints?re.setMode(g.POINTS):_t.isSprite&&re.setMode(g.TRIANGLES);if(_t.isInstancedMesh)re.renderInstances(Zt,Ve,_t.count);else if(mt.isInstancedBufferGeometry){const qt=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Zs=Math.min(mt.instanceCount,qt);re.renderInstances(Zt,Ve,Zs)}else re.render(Zt,Ve)},this.compile=function(I,st){function mt(tt,_t,Ut){tt.transparent===!0&&tt.side===En&&tt.forceSinglePass===!1?(tt.side=Le,tt.needsUpdate=!0,kr(tt,_t,Ut),tt.side=Wn,tt.needsUpdate=!0,kr(tt,_t,Ut),tt.side=En):kr(tt,_t,Ut)}p=O.get(I),p.init(),P.push(p),I.traverseVisible(function(tt){tt.isLight&&tt.layers.test(st.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),p.setupLights(v.useLegacyLights),I.traverse(function(tt){const _t=tt.material;if(_t)if(Array.isArray(_t))for(let Ut=0;Ut<_t.length;Ut++){const Dt=_t[Ut];mt(Dt,I,tt)}else mt(_t,I,tt)}),P.pop(),p=null};let ie=null;function Xn(I){ie&&ie(I)}function ee(){Ee.stop()}function en(){Ee.start()}const Ee=new Sh;Ee.setAnimationLoop(Xn),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(I){ie=I,Y.setAnimationLoop(I),I===null?Ee.stop():Ee.start()},Y.addEventListener("sessionstart",ee),Y.addEventListener("sessionend",en),this.render=function(I,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(st=Y.updateCameraXR(st)),I.isScene===!0&&I.onBeforeRender(v,I,st,z),p=O.get(I,P.length),p.init(),P.push(p),w.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),Mt.setFromProjectionMatrix(w),B=this.localClippingEnabled,H=ft.init(this.clippingPlanes,B),_=gt.get(I,d.length),_.init(),d.push(_),Ya(I,st,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,pt),H===!0&&ft.beginShadows();const mt=p.state.shadowsArray;if(vt.render(mt,I,st),H===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,ot.render(_,I),p.setupLights(v.useLegacyLights),st.isArrayCamera){const tt=st.cameras;for(let _t=0,Ut=tt.length;_t<Ut;_t++){const Dt=tt[_t];ja(_,I,Dt,Dt.viewport)}}else ja(_,I,st);z!==null&&(S.updateMultisampleRenderTarget(z),S.updateRenderTargetMipmap(z)),I.isScene===!0&&I.onAfterRender(v,I,st),At.resetDefaultState(),k=-1,E=null,P.pop(),P.length>0?p=P[P.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ya(I,st,mt,tt){if(I.visible===!1)return;if(I.layers.test(st.layers)){if(I.isGroup)mt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(st);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Mt.intersectsSprite(I)){tt&&ut.setFromMatrixPosition(I.matrixWorld).applyMatrix4(w);const Dt=y.update(I),Nt=I.material;Nt.visible&&_.push(I,Dt,Nt,mt,ut.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Mt.intersectsObject(I))){I.isSkinnedMesh&&I.skeleton.frame!==X.render.frame&&(I.skeleton.update(),I.skeleton.frame=X.render.frame);const Dt=y.update(I),Nt=I.material;if(tt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ut.copy(I.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),ut.copy(Dt.boundingSphere.center)),ut.applyMatrix4(I.matrixWorld).applyMatrix4(w)),Array.isArray(Nt)){const Ot=Dt.groups;for(let Wt=0,Bt=Ot.length;Wt<Bt;Wt++){const Gt=Ot[Wt],Zt=Nt[Gt.materialIndex];Zt&&Zt.visible&&_.push(I,Dt,Zt,mt,ut.z,Gt)}}else Nt.visible&&_.push(I,Dt,Nt,mt,ut.z,null)}}const Ut=I.children;for(let Dt=0,Nt=Ut.length;Dt<Nt;Dt++)Ya(Ut[Dt],st,mt,tt)}function ja(I,st,mt,tt){const _t=I.opaque,Ut=I.transmissive,Dt=I.transparent;p.setupLightsView(mt),H===!0&&ft.setGlobalState(v.clippingPlanes,mt),Ut.length>0&&Bh(_t,Ut,st,mt),tt&&N.viewport(U.copy(tt)),_t.length>0&&Vr(_t,st,mt),Ut.length>0&&Vr(Ut,st,mt),Dt.length>0&&Vr(Dt,st,mt),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Bh(I,st,mt,tt){const _t=D.isWebGL2;C===null&&(C=new mi(1,1,{generateMipmaps:!0,type:T.has("EXT_color_buffer_half_float")?Dr:Vn,minFilter:Ir,samples:_t&&o===!0?4:0})),v.getDrawingBufferSize(rt),_t?C.setSize(rt.x,rt.y):C.setSize(ua(rt.x),ua(rt.y));const Ut=v.getRenderTarget();v.setRenderTarget(C),v.getClearColor(V),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear();const Dt=v.toneMapping;v.toneMapping=An,Vr(I,mt,tt),S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C);let Nt=!1;for(let Ot=0,Wt=st.length;Ot<Wt;Ot++){const Bt=st[Ot],Gt=Bt.object,Zt=Bt.geometry,ne=Bt.material,Ve=Bt.group;if(ne.side===En&&Gt.layers.test(tt.layers)){const fn=ne.side;ne.side=Le,ne.needsUpdate=!0,$a(Gt,mt,tt,Zt,ne,Ve),ne.side=fn,ne.needsUpdate=!0,Nt=!0}}Nt===!0&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),v.setRenderTarget(Ut),v.setClearColor(V,W),v.toneMapping=Dt}function Vr(I,st,mt){const tt=st.isScene===!0?st.overrideMaterial:null;for(let _t=0,Ut=I.length;_t<Ut;_t++){const Dt=I[_t],Nt=Dt.object,Ot=Dt.geometry,Wt=tt===null?Dt.material:tt,Bt=Dt.group;Nt.layers.test(mt.layers)&&$a(Nt,st,mt,Ot,Wt,Bt)}}function $a(I,st,mt,tt,_t,Ut){I.onBeforeRender(v,st,mt,tt,_t,Ut),I.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),_t.onBeforeRender(v,st,mt,tt,I,Ut),_t.transparent===!0&&_t.side===En&&_t.forceSinglePass===!1?(_t.side=Le,_t.needsUpdate=!0,v.renderBufferDirect(mt,st,tt,_t,I,Ut),_t.side=Wn,_t.needsUpdate=!0,v.renderBufferDirect(mt,st,tt,_t,I,Ut),_t.side=En):v.renderBufferDirect(mt,st,tt,_t,I,Ut),I.onAfterRender(v,st,mt,tt,_t,Ut)}function kr(I,st,mt){st.isScene!==!0&&(st=it);const tt=L.get(I),_t=p.state.lights,Ut=p.state.shadowsArray,Dt=_t.state.version,Nt=$.getParameters(I,_t.state,Ut,st,mt),Ot=$.getProgramCacheKey(Nt);let Wt=tt.programs;tt.environment=I.isMeshStandardMaterial?st.environment:null,tt.fog=st.fog,tt.envMap=(I.isMeshStandardMaterial?J:j).get(I.envMap||tt.environment),Wt===void 0&&(I.addEventListener("dispose",Rt),Wt=new Map,tt.programs=Wt);let Bt=Wt.get(Ot);if(Bt!==void 0){if(tt.currentProgram===Bt&&tt.lightsStateVersion===Dt)return Ka(I,Nt),Bt}else Nt.uniforms=$.getUniforms(I),I.onBuild(mt,Nt,v),I.onBeforeCompile(Nt,v),Bt=$.acquireProgram(Nt,Ot),Wt.set(Ot,Bt),tt.uniforms=Nt.uniforms;const Gt=tt.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Gt.clippingPlanes=ft.uniform),Ka(I,Nt),tt.needsLights=Gh(I),tt.lightsStateVersion=Dt,tt.needsLights&&(Gt.ambientLightColor.value=_t.state.ambient,Gt.lightProbe.value=_t.state.probe,Gt.directionalLights.value=_t.state.directional,Gt.directionalLightShadows.value=_t.state.directionalShadow,Gt.spotLights.value=_t.state.spot,Gt.spotLightShadows.value=_t.state.spotShadow,Gt.rectAreaLights.value=_t.state.rectArea,Gt.ltc_1.value=_t.state.rectAreaLTC1,Gt.ltc_2.value=_t.state.rectAreaLTC2,Gt.pointLights.value=_t.state.point,Gt.pointLightShadows.value=_t.state.pointShadow,Gt.hemisphereLights.value=_t.state.hemi,Gt.directionalShadowMap.value=_t.state.directionalShadowMap,Gt.directionalShadowMatrix.value=_t.state.directionalShadowMatrix,Gt.spotShadowMap.value=_t.state.spotShadowMap,Gt.spotLightMatrix.value=_t.state.spotLightMatrix,Gt.spotLightMap.value=_t.state.spotLightMap,Gt.pointShadowMap.value=_t.state.pointShadowMap,Gt.pointShadowMatrix.value=_t.state.pointShadowMatrix);const Zt=Bt.getUniforms(),ne=bs.seqWithValue(Zt.seq,Gt);return tt.currentProgram=Bt,tt.uniformsList=ne,Bt}function Ka(I,st){const mt=L.get(I);mt.outputColorSpace=st.outputColorSpace,mt.instancing=st.instancing,mt.skinning=st.skinning,mt.morphTargets=st.morphTargets,mt.morphNormals=st.morphNormals,mt.morphColors=st.morphColors,mt.morphTargetsCount=st.morphTargetsCount,mt.numClippingPlanes=st.numClippingPlanes,mt.numIntersection=st.numClipIntersection,mt.vertexAlphas=st.vertexAlphas,mt.vertexTangents=st.vertexTangents,mt.toneMapping=st.toneMapping}function zh(I,st,mt,tt,_t){st.isScene!==!0&&(st=it),S.resetTextureUnits();const Ut=st.fog,Dt=tt.isMeshStandardMaterial?st.environment:null,Nt=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:un,Ot=(tt.isMeshStandardMaterial?J:j).get(tt.envMap||Dt),Wt=tt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,Bt=!!mt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Gt=!!mt.morphAttributes.position,Zt=!!mt.morphAttributes.normal,ne=!!mt.morphAttributes.color,Ve=tt.toneMapped?v.toneMapping:An,fn=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,re=fn!==void 0?fn.length:0,qt=L.get(tt),Zs=p.state.lights;if(H===!0&&(B===!0||I!==E)){const Ie=I===E&&tt.id===k;ft.setState(tt,I,Ie)}let ue=!1;tt.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Zs.state.version||qt.outputColorSpace!==Nt||_t.isInstancedMesh&&qt.instancing===!1||!_t.isInstancedMesh&&qt.instancing===!0||_t.isSkinnedMesh&&qt.skinning===!1||!_t.isSkinnedMesh&&qt.skinning===!0||qt.envMap!==Ot||tt.fog===!0&&qt.fog!==Ut||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==ft.numPlanes||qt.numIntersection!==ft.numIntersection)||qt.vertexAlphas!==Wt||qt.vertexTangents!==Bt||qt.morphTargets!==Gt||qt.morphNormals!==Zt||qt.morphColors!==ne||qt.toneMapping!==Ve||D.isWebGL2===!0&&qt.morphTargetsCount!==re)&&(ue=!0):(ue=!0,qt.__version=tt.version);let qn=qt.currentProgram;ue===!0&&(qn=kr(tt,st,_t));let Za=!1,cr=!1,Js=!1;const Te=qn.getUniforms(),Yn=qt.uniforms;if(N.useProgram(qn.program)&&(Za=!0,cr=!0,Js=!0),tt.id!==k&&(k=tt.id,cr=!0),Za||E!==I){if(Te.setValue(g,"projectionMatrix",I.projectionMatrix),D.logarithmicDepthBuffer&&Te.setValue(g,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),E!==I&&(E=I,cr=!0,Js=!0),tt.isShaderMaterial||tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshStandardMaterial||tt.envMap){const Ie=Te.map.cameraPosition;Ie!==void 0&&Ie.setValue(g,ut.setFromMatrixPosition(I.matrixWorld))}(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Te.setValue(g,"isOrthographic",I.isOrthographicCamera===!0),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial||tt.isShadowMaterial||_t.isSkinnedMesh)&&Te.setValue(g,"viewMatrix",I.matrixWorldInverse)}if(_t.isSkinnedMesh){Te.setOptional(g,_t,"bindMatrix"),Te.setOptional(g,_t,"bindMatrixInverse");const Ie=_t.skeleton;Ie&&(D.floatVertexTextures?(Ie.boneTexture===null&&Ie.computeBoneTexture(),Te.setValue(g,"boneTexture",Ie.boneTexture,S),Te.setValue(g,"boneTextureSize",Ie.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Qs=mt.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0&&D.isWebGL2===!0)&&Ct.update(_t,mt,qn),(cr||qt.receiveShadow!==_t.receiveShadow)&&(qt.receiveShadow=_t.receiveShadow,Te.setValue(g,"receiveShadow",_t.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Yn.envMap.value=Ot,Yn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),cr&&(Te.setValue(g,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&Hh(Yn,Js),Ut&&tt.fog===!0&&ht.refreshFogUniforms(Yn,Ut),ht.refreshMaterialUniforms(Yn,tt,q,at,C),bs.upload(g,qt.uniformsList,Yn,S)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(bs.upload(g,qt.uniformsList,Yn,S),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Te.setValue(g,"center",_t.center),Te.setValue(g,"modelViewMatrix",_t.modelViewMatrix),Te.setValue(g,"normalMatrix",_t.normalMatrix),Te.setValue(g,"modelMatrix",_t.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const Ie=tt.uniformsGroups;for(let to=0,Vh=Ie.length;to<Vh;to++)if(D.isWebGL2){const Ja=Ie[to];It.update(Ja,qn),It.bind(Ja,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Hh(I,st){I.ambientLightColor.needsUpdate=st,I.lightProbe.needsUpdate=st,I.directionalLights.needsUpdate=st,I.directionalLightShadows.needsUpdate=st,I.pointLights.needsUpdate=st,I.pointLightShadows.needsUpdate=st,I.spotLights.needsUpdate=st,I.spotLightShadows.needsUpdate=st,I.rectAreaLights.needsUpdate=st,I.hemisphereLights.needsUpdate=st}function Gh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,st,mt){L.get(I.texture).__webglTexture=st,L.get(I.depthTexture).__webglTexture=mt;const tt=L.get(I);tt.__hasExternalTextures=!0,tt.__hasExternalTextures&&(tt.__autoAllocateDepthBuffer=mt===void 0,tt.__autoAllocateDepthBuffer||T.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,st){const mt=L.get(I);mt.__webglFramebuffer=st,mt.__useDefaultFramebuffer=st===void 0},this.setRenderTarget=function(I,st=0,mt=0){z=I,R=st,F=mt;let tt=!0,_t=null,Ut=!1,Dt=!1;if(I){const Ot=L.get(I);Ot.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(g.FRAMEBUFFER,null),tt=!1):Ot.__webglFramebuffer===void 0?S.setupRenderTarget(I):Ot.__hasExternalTextures&&S.rebindTextures(I,L.get(I.texture).__webglTexture,L.get(I.depthTexture).__webglTexture);const Wt=I.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const Bt=L.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(_t=Bt[st],Ut=!0):D.isWebGL2&&I.samples>0&&S.useMultisampledRTT(I)===!1?_t=L.get(I).__webglMultisampledFramebuffer:_t=Bt,U.copy(I.viewport),nt.copy(I.scissor),Q=I.scissorTest}else U.copy(ct).multiplyScalar(q).floor(),nt.copy(St).multiplyScalar(q).floor(),Q=Z;if(N.bindFramebuffer(g.FRAMEBUFFER,_t)&&D.drawBuffers&&tt&&N.drawBuffers(I,_t),N.viewport(U),N.scissor(nt),N.setScissorTest(Q),Ut){const Ot=L.get(I.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ot.__webglTexture,mt)}else if(Dt){const Ot=L.get(I.texture),Wt=st||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ot.__webglTexture,mt||0,Wt)}k=-1},this.readRenderTargetPixels=function(I,st,mt,tt,_t,Ut,Dt){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=L.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){N.bindFramebuffer(g.FRAMEBUFFER,Nt);try{const Ot=I.texture,Wt=Ot.format,Bt=Ot.type;if(Wt!==Ze&&bt.convert(Wt)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Bt===Dr&&(T.has("EXT_color_buffer_half_float")||D.isWebGL2&&T.has("EXT_color_buffer_float"));if(Bt!==Vn&&bt.convert(Bt)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Bt===Fn&&(D.isWebGL2||T.has("OES_texture_float")||T.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=I.width-tt&&mt>=0&&mt<=I.height-_t&&g.readPixels(st,mt,tt,_t,bt.convert(Wt),bt.convert(Bt),Ut)}finally{const Ot=z!==null?L.get(z).__webglFramebuffer:null;N.bindFramebuffer(g.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(I,st,mt=0){const tt=Math.pow(2,-mt),_t=Math.floor(st.image.width*tt),Ut=Math.floor(st.image.height*tt);S.setTexture2D(st,0),g.copyTexSubImage2D(g.TEXTURE_2D,mt,0,0,I.x,I.y,_t,Ut),N.unbindTexture()},this.copyTextureToTexture=function(I,st,mt,tt=0){const _t=st.image.width,Ut=st.image.height,Dt=bt.convert(mt.format),Nt=bt.convert(mt.type);S.setTexture2D(mt,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,mt.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,mt.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,mt.unpackAlignment),st.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,tt,I.x,I.y,_t,Ut,Dt,Nt,st.image.data):st.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,tt,I.x,I.y,st.mipmaps[0].width,st.mipmaps[0].height,Dt,st.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,tt,I.x,I.y,Dt,Nt,st.image),tt===0&&mt.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(I,st,mt,tt,_t=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ut=I.max.x-I.min.x+1,Dt=I.max.y-I.min.y+1,Nt=I.max.z-I.min.z+1,Ot=bt.convert(tt.format),Wt=bt.convert(tt.type);let Bt;if(tt.isData3DTexture)S.setTexture3D(tt,0),Bt=g.TEXTURE_3D;else if(tt.isDataArrayTexture)S.setTexture2DArray(tt,0),Bt=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,tt.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,tt.unpackAlignment);const Gt=g.getParameter(g.UNPACK_ROW_LENGTH),Zt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),ne=g.getParameter(g.UNPACK_SKIP_PIXELS),Ve=g.getParameter(g.UNPACK_SKIP_ROWS),fn=g.getParameter(g.UNPACK_SKIP_IMAGES),re=mt.isCompressedTexture?mt.mipmaps[0]:mt.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,re.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,re.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,I.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,I.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,I.min.z),mt.isDataTexture||mt.isData3DTexture?g.texSubImage3D(Bt,_t,st.x,st.y,st.z,Ut,Dt,Nt,Ot,Wt,re.data):mt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),g.compressedTexSubImage3D(Bt,_t,st.x,st.y,st.z,Ut,Dt,Nt,Ot,re.data)):g.texSubImage3D(Bt,_t,st.x,st.y,st.z,Ut,Dt,Nt,Ot,Wt,re),g.pixelStorei(g.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,Zt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,ne),g.pixelStorei(g.UNPACK_SKIP_ROWS,Ve),g.pixelStorei(g.UNPACK_SKIP_IMAGES,fn),_t===0&&tt.generateMipmaps&&g.generateMipmap(Bt),N.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?S.setTextureCube(I,0):I.isData3DTexture?S.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?S.setTexture2DArray(I,0):S.setTexture2D(I,0),N.unbindTexture()},this.resetState=function(){R=0,F=0,z=null,N.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?fi:ah}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===fi?zt:un}}class Sv extends wh{}Sv.prototype.isWebGL1Renderer=!0;class Ev extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,m=(a-u)/h;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new xt:new K);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new K,r=[],s=[],a=[],o=new K,l=new oe;for(let m=0;m<=t;m++){const x=m/t;r[m]=this.getTangentAt(x,new K)}s[0]=new K,a[0]=new K;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(pe(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,x))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(pe(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ka extends hn{constructor(t=0,e=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new xt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*f+this.aX,c=h*f+m*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tv extends ka{constructor(t,e,i,r,s,a){super(t,e,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wa(){let n=0,t=0,e=0,i=0;function r(s,a,o,l){n=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,m*=u,r(a,o,h,m)},calc:function(s){const a=s*s,o=a*s;return n+t*s+e*a+i*o}}}const _s=new K,Ho=new Wa,Go=new Wa,Vo=new Wa;class bv extends hn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new K){const i=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(_s.subVectors(r[0],r[1]).add(r[0]),c=_s);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(_s.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(u),m);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),Ho.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,x,_,p),Go.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,x,_,p),Vo.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,x,_,p)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Go.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Vo.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Ho.calc(l),Go.calc(l),Vo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new K().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xc(n,t,e,i,r){const s=(i-t)*.5,a=(r-e)*.5,o=n*n,l=n*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*n+e}function Av(n,t){const e=1-n;return e*e*t}function wv(n,t){return 2*(1-n)*n*t}function Rv(n,t){return n*n*t}function Er(n,t,e,i){return Av(n,t)+wv(n,e)+Rv(n,i)}function Cv(n,t){const e=1-n;return e*e*e*t}function Pv(n,t){const e=1-n;return 3*e*e*n*t}function Lv(n,t){return 3*(1-n)*n*n*t}function Uv(n,t){return n*n*n*t}function Tr(n,t,e,i,r){return Cv(n,t)+Pv(n,e)+Lv(n,i)+Uv(n,r)}class Rh extends hn{constructor(t=new xt,e=new xt,i=new xt,r=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new xt){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Tr(t,r.x,s.x,a.x,o.x),Tr(t,r.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iv extends hn{constructor(t=new K,e=new K,i=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new K){const i=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Tr(t,r.x,s.x,a.x,o.x),Tr(t,r.y,s.y,a.y,o.y),Tr(t,r.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xa extends hn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dv extends hn{constructor(t=new K,e=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new K){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends hn{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Er(t,r.x,s.x,a.x),Er(t,r.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends hn{constructor(t=new K,e=new K,i=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new K){const i=e,r=this.v0,s=this.v1,a=this.v2;return i.set(Er(t,r.x,s.x,a.x),Er(t,r.y,s.y,a.y),Er(t,r.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const i=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Xc(o,l.x,c.x,u.x,f.x),Xc(o,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new xt().fromArray(r))}return this}}var Lh=Object.freeze({__proto__:null,ArcCurve:Tv,CatmullRomCurve3:bv,CubicBezierCurve:Rh,CubicBezierCurve3:Iv,EllipseCurve:ka,LineCurve:Xa,LineCurve3:Dv,QuadraticBezierCurve:Ch,QuadraticBezierCurve3:Nv,SplineCurve:Ph});class Ov extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Xa(e,t))}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new Lh[r.type]().fromJSON(r))}return this}}let $i=class extends Ov{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Xa(this.currentPoint.clone(),new xt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){const s=new Ch(this.currentPoint.clone(),new xt(t,e),new xt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,a){const o=new Rh(this.currentPoint.clone(),new xt(t,e),new xt(i,r),new xt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Ph(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,r,s,a),this}absarc(t,e,i,r,s,a){return this.absellipse(t,e,i,i,r,s,a),this}ellipse(t,e,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,a,o,l),this}absellipse(t,e,i,r,s,a,o,l){const c=new ka(t,e,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};class br extends $i{constructor(t){super(t),this.uuid=ar(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const r=t.holes[e];this.holes.push(new $i().fromJSON(r))}return this}}const Fv={triangulate:function(n,t,e=2){const i=t&&t.length,r=i?t[0]*e:n.length;let s=Uh(n,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,f,h,m;if(i&&(s=Vv(n,t,s,e)),n.length>80*e){o=c=n[0],l=u=n[1];for(let x=e;x<r;x+=e)f=n[x],h=n[x+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Nr(s,a,e,o,l,m,0),a}};function Uh(n,t,e,i,r){let s,a;if(r===Qv(n,t,e,i)>0)for(s=t;s<e;s+=i)a=qc(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=qc(s,n[s],n[s+1],a);return a&&Ks(a,a.next)&&(Fr(a),a=a.next),a}function xi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ks(e,e.next)||Qt(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Nr(n,t,e,i,r,s,a){if(!n)return;!a&&s&&Yv(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?zv(n,i,r,s):Bv(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Fr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Hv(xi(n),t,e),Nr(n,t,e,i,r,s,2)):a===2&&Gv(n,t,e,i,r,s):Nr(xi(n),t,e,i,r,s,1);break}}}function Bv(n){const t=n.prev,e=n,i=n.next;if(Qt(t,e,i)>=0)return!1;const r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=r<s?r<a?r:a:s<a?s:a,f=o<l?o<c?o:c:l<c?l:c,h=r>s?r>a?r:a:s>a?s:a,m=o>l?o>c?o:c:l>c?l:c;let x=i.next;for(;x!==t;){if(x.x>=u&&x.x<=h&&x.y>=f&&x.y<=m&&Vi(r,o,s,l,a,c,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function zv(n,t,e,i){const r=n.prev,s=n,a=n.next;if(Qt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,m=o<l?o<c?o:c:l<c?l:c,x=u<f?u<h?u:h:f<h?f:h,_=o>l?o>c?o:c:l>c?l:c,p=u>f?u>h?u:h:f>h?f:h,d=fa(m,x,t,e,i),P=fa(_,p,t,e,i);let v=n.prevZ,M=n.nextZ;for(;v&&v.z>=d&&M&&M.z<=P;){if(v.x>=m&&v.x<=_&&v.y>=x&&v.y<=p&&v!==r&&v!==a&&Vi(o,u,l,f,c,h,v.x,v.y)&&Qt(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=m&&M.x<=_&&M.y>=x&&M.y<=p&&M!==r&&M!==a&&Vi(o,u,l,f,c,h,M.x,M.y)&&Qt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=_&&v.y>=x&&v.y<=p&&v!==r&&v!==a&&Vi(o,u,l,f,c,h,v.x,v.y)&&Qt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=P;){if(M.x>=m&&M.x<=_&&M.y>=x&&M.y<=p&&M!==r&&M!==a&&Vi(o,u,l,f,c,h,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Hv(n,t,e){let i=n;do{const r=i.prev,s=i.next.next;!Ks(r,s)&&Ih(r,i,i.next,s)&&Or(r,s)&&Or(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Fr(i),Fr(i.next),i=n=s),i=i.next}while(i!==n);return xi(i)}function Gv(n,t,e,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kv(a,o)){let l=Dh(a,o);a=xi(a,a.next),l=xi(l,l.next),Nr(a,t,e,i,r,s,0),Nr(l,t,e,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function Vv(n,t,e,i){const r=[];let s,a,o,l,c;for(s=0,a=t.length;s<a;s++)o=t[s]*i,l=s<a-1?t[s+1]*i:n.length,c=Uh(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push($v(c));for(r.sort(kv),s=0;s<r.length;s++)e=Wv(r[s],e);return e}function kv(n,t){return n.x-t.x}function Wv(n,t){const e=Xv(n,t);if(!e)return t;const i=Dh(e,n);return xi(i,i.next),xi(e,e.next)}function Xv(n,t){let e=t,i=-1/0,r;const s=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const h=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>i&&(i=h,r=e.x<e.next.x?e:e.next,h===s))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,f;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Vi(a<c?s:i,a,l,c,a<c?i:s,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(s-e.x),Or(e,n)&&(f<u||f===u&&(e.x>r.x||e.x===r.x&&qv(r,e)))&&(r=e,u=f)),e=e.next;while(e!==o);return r}function qv(n,t){return Qt(n.prev,n,t.prev)<0&&Qt(t.next,n,n.next)<0}function Yv(n,t,e,i){let r=n;do r.z===0&&(r.z=fa(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,jv(r)}function jv(n){let t,e,i,r,s,a,o,l,c=1;do{for(e=n,n=null,s=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(r=e,e=e.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;e=i}s.nextZ=null,c*=2}while(a>1);return n}function fa(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function $v(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Vi(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function Kv(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Zv(n,t)&&(Or(n,t)&&Or(t,n)&&Jv(n,t)&&(Qt(n.prev,n,t.prev)||Qt(n,t.prev,t))||Ks(n,t)&&Qt(n.prev,n,n.next)>0&&Qt(t.prev,t,t.next)>0)}function Qt(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ks(n,t){return n.x===t.x&&n.y===t.y}function Ih(n,t,e,i){const r=vs(Qt(n,t,e)),s=vs(Qt(n,t,i)),a=vs(Qt(e,i,n)),o=vs(Qt(e,i,t));return!!(r!==s&&a!==o||r===0&&xs(n,e,t)||s===0&&xs(n,i,t)||a===0&&xs(e,n,i)||o===0&&xs(e,t,i))}function xs(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function vs(n){return n>0?1:n<0?-1:0}function Zv(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Ih(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Or(n,t){return Qt(n.prev,n,n.next)<0?Qt(n,t,n.next)>=0&&Qt(n,n.prev,t)>=0:Qt(n,t,n.prev)<0||Qt(n,n.next,t)<0}function Jv(n,t){let e=n,i=!1;const r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Dh(n,t){const e=new da(n.i,n.x,n.y),i=new da(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function qc(n,t,e,i){const r=new da(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function da(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qv(n,t,e,i){let r=0;for(let s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class pi{static area(t){const e=t.length;let i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],r=[],s=[];Yc(t),jc(i,t);let a=t.length;e.forEach(Yc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,jc(i,e[l]);const o=Fv.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Yc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function jc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class qa extends Cn{constructor(t=new br([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Ge(r,3)),this.setAttribute("uv",new Ge(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:m-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,P=e.UVGenerator!==void 0?e.UVGenerator:tM;let v,M=!1,R,F,z,k;d&&(v=d.getSpacedPoints(u),M=!0,h=!1,R=d.computeFrenetFrames(u,!1),F=new K,z=new K,k=new K),h||(p=0,m=0,x=0,_=0);const E=o.extractPoints(c);let U=E.shape;const nt=E.holes;if(!pi.isClockWise(U)){U=U.reverse();for(let g=0,b=nt.length;g<b;g++){const T=nt[g];pi.isClockWise(T)&&(nt[g]=T.reverse())}}const V=pi.triangulateShape(U,nt),W=U;for(let g=0,b=nt.length;g<b;g++){const T=nt[g];U=U.concat(T)}function et(g,b,T){return b||console.error("THREE.ExtrudeGeometry: vec does not exist"),g.clone().addScaledVector(b,T)}const at=U.length,q=V.length;function G(g,b,T){let D,N,X;const L=g.x-b.x,S=g.y-b.y,j=T.x-g.x,J=T.y-g.y,yt=L*L+S*S,A=L*J-S*j;if(Math.abs(A)>Number.EPSILON){const y=Math.sqrt(yt),$=Math.sqrt(j*j+J*J),ht=b.x-S/y,gt=b.y+L/y,O=T.x-J/$,ft=T.y+j/$,vt=((O-ht)*J-(ft-gt)*j)/(L*J-S*j);D=ht+L*vt-g.x,N=gt+S*vt-g.y;const ot=D*D+N*N;if(ot<=2)return new xt(D,N);X=Math.sqrt(ot/2)}else{let y=!1;L>Number.EPSILON?j>Number.EPSILON&&(y=!0):L<-Number.EPSILON?j<-Number.EPSILON&&(y=!0):Math.sign(S)===Math.sign(J)&&(y=!0),y?(D=-S,N=L,X=Math.sqrt(yt)):(D=L,N=S,X=Math.sqrt(yt/2))}return new xt(D/X,N/X)}const pt=[];for(let g=0,b=W.length,T=b-1,D=g+1;g<b;g++,T++,D++)T===b&&(T=0),D===b&&(D=0),pt[g]=G(W[g],W[T],W[D]);const ct=[];let St,Z=pt.concat();for(let g=0,b=nt.length;g<b;g++){const T=nt[g];St=[];for(let D=0,N=T.length,X=N-1,L=D+1;D<N;D++,X++,L++)X===N&&(X=0),L===N&&(L=0),St[D]=G(T[D],T[X],T[L]);ct.push(St),Z=Z.concat(St)}for(let g=0;g<p;g++){const b=g/p,T=m*Math.cos(b*Math.PI/2),D=x*Math.sin(b*Math.PI/2)+_;for(let N=0,X=W.length;N<X;N++){const L=et(W[N],pt[N],D);w(L.x,L.y,-T)}for(let N=0,X=nt.length;N<X;N++){const L=nt[N];St=ct[N];for(let S=0,j=L.length;S<j;S++){const J=et(L[S],St[S],D);w(J.x,J.y,-T)}}}const Mt=x+_;for(let g=0;g<at;g++){const b=h?et(U[g],Z[g],Mt):U[g];M?(z.copy(R.normals[0]).multiplyScalar(b.x),F.copy(R.binormals[0]).multiplyScalar(b.y),k.copy(v[0]).add(z).add(F),w(k.x,k.y,k.z)):w(b.x,b.y,0)}for(let g=1;g<=u;g++)for(let b=0;b<at;b++){const T=h?et(U[b],Z[b],Mt):U[b];M?(z.copy(R.normals[g]).multiplyScalar(T.x),F.copy(R.binormals[g]).multiplyScalar(T.y),k.copy(v[g]).add(z).add(F),w(k.x,k.y,k.z)):w(T.x,T.y,f/u*g)}for(let g=p-1;g>=0;g--){const b=g/p,T=m*Math.cos(b*Math.PI/2),D=x*Math.sin(b*Math.PI/2)+_;for(let N=0,X=W.length;N<X;N++){const L=et(W[N],pt[N],D);w(L.x,L.y,f+T)}for(let N=0,X=nt.length;N<X;N++){const L=nt[N];St=ct[N];for(let S=0,j=L.length;S<j;S++){const J=et(L[S],St[S],D);M?w(J.x,J.y+v[u-1].y,v[u-1].x+T):w(J.x,J.y,f+T)}}}H(),B();function H(){const g=r.length/3;if(h){let b=0,T=at*b;for(let D=0;D<q;D++){const N=V[D];rt(N[2]+T,N[1]+T,N[0]+T)}b=u+p*2,T=at*b;for(let D=0;D<q;D++){const N=V[D];rt(N[0]+T,N[1]+T,N[2]+T)}}else{for(let b=0;b<q;b++){const T=V[b];rt(T[2],T[1],T[0])}for(let b=0;b<q;b++){const T=V[b];rt(T[0]+at*u,T[1]+at*u,T[2]+at*u)}}i.addGroup(g,r.length/3-g,0)}function B(){const g=r.length/3;let b=0;C(W,b),b+=W.length;for(let T=0,D=nt.length;T<D;T++){const N=nt[T];C(N,b),b+=N.length}i.addGroup(g,r.length/3-g,1)}function C(g,b){let T=g.length;for(;--T>=0;){const D=T;let N=T-1;N<0&&(N=g.length-1);for(let X=0,L=u+p*2;X<L;X++){const S=at*X,j=at*(X+1),J=b+D+S,yt=b+N+S,A=b+N+j,y=b+D+j;ut(J,yt,A,y)}}}function w(g,b,T){l.push(g),l.push(b),l.push(T)}function rt(g,b,T){it(g),it(b),it(T);const D=r.length/3,N=P.generateTopUV(i,r,D-3,D-2,D-1);dt(N[0]),dt(N[1]),dt(N[2])}function ut(g,b,T,D){it(g),it(b),it(D),it(b),it(T),it(D);const N=r.length/3,X=P.generateSideWallUV(i,r,N-6,N-3,N-2,N-1);dt(X[0]),dt(X[1]),dt(X[3]),dt(X[1]),dt(X[2]),dt(X[3])}function it(g){r.push(l[g*3+0]),r.push(l[g*3+1]),r.push(l[g*3+2])}function dt(g){s.push(g.x),s.push(g.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return eM(e,i,t)}static fromJSON(t,e){const i=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];i.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Lh[r.type]().fromJSON(r)),new qa(i,t.options)}}const tM={generateTopUV:function(n,t,e,i,r){const s=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[r*3],u=t[r*3+1];return[new xt(s,a),new xt(o,l),new xt(c,u)]},generateSideWallUV:function(n,t,e,i,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[r*3],m=t[r*3+1],x=t[r*3+2],_=t[s*3],p=t[s*3+1],d=t[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new xt(a,1-l),new xt(c,1-f),new xt(h,1-x),new xt(_,1-d)]:[new xt(o,1-l),new xt(u,1-f),new xt(m,1-x),new xt(p,1-d)]}};function eM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class nM extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const $c={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class iM{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return x}return null}}}const rM=new iM;class Nh{constructor(t){this.manager=t!==void 0?t:rM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const vn={};class sM extends Error{constructor(t,e){super(t),this.response=e}}class oM extends Nh{constructor(t){super(t)}load(t,e,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=$c.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(vn[t]!==void 0){vn[t].push({onLoad:e,onProgress:i,onError:r});return}vn[t]=[],vn[t].push({onLoad:e,onProgress:i,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=vn[t],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,x=m!==0;let _=0;const p=new ReadableStream({start(d){P();function P(){f.read().then(({done:v,value:M})=>{if(v)d.close();else{_+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let F=0,z=u.length;F<z;F++){const k=u[F];k.onProgress&&k.onProgress(R)}d.enqueue(M),P()}})}}});return new Response(p)}else throw new sM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(x=>m.decode(x))}}}).then(c=>{$c.add(t,c);const u=vn[t];delete vn[t];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=vn[t];if(u===void 0)throw this.manager.itemError(t),c;delete vn[t];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Oh extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ko=new oe,Kc=new K,Zc=new K;class aM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kc),Zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zc),e.updateMatrixWorld(),ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lM extends aM{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,i=Is*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class cM extends Oh{constructor(t,e,i=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new lM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uM extends Oh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qc=new xt;class hM{constructor(t=new xt(1/0,1/0),e=new xt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class ti{constructor(){this.type="ShapePath",this.color=new Kt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new $i,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,r){return this.currentPath.quadraticCurveTo(t,e,i,r),this}bezierCurveTo(t,e,i,r,s,a){return this.currentPath.bezierCurveTo(t,e,i,r,s,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const P=[];for(let v=0,M=d.length;v<M;v++){const R=d[v],F=new br;F.curves=R.curves,P.push(F)}return P}function i(d,P){const v=P.length;let M=!1;for(let R=v-1,F=0;F<v;R=F++){let z=P[R],k=P[F],E=k.x-z.x,U=k.y-z.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(z=P[F],E=-E,k=P[R],U=-U),d.y<z.y||d.y>k.y)continue;if(d.y===z.y){if(d.x===z.x)return!0}else{const nt=U*(d.x-z.x)-E*(d.y-z.y);if(nt===0)return!0;if(nt<0)continue;M=!M}}else{if(d.y!==z.y)continue;if(k.x<=d.x&&d.x<=z.x||z.x<=d.x&&d.x<=k.x)return!0}}return M}const r=pi.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new br,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=t?!u:u;const f=[],h=[];let m=[],x=0,_;h[x]=void 0,m[x]=[];for(let d=0,P=s.length;d<P;d++)o=s[d],_=o.getPoints(),a=r(_),a=t?!a:a,a?(!u&&h[x]&&x++,h[x]={s:new br,p:_},h[x].s.curves=o.curves,u&&x++,m[x]=[]):m[x].push({h:o,p:_[0]});if(!h[0])return e(s);if(h.length>1){let d=!1,P=0;for(let v=0,M=h.length;v<M;v++)f[v]=[];for(let v=0,M=h.length;v<M;v++){const R=m[v];for(let F=0;F<R.length;F++){const z=R[F];let k=!0;for(let E=0;E<h.length;E++)i(z.p,h[E].p)&&(v!==E&&P++,k?(k=!1,f[E].push(z)):d=!0);k&&f[v].push(z)}}P>0&&d===!1&&(m=f)}let p;for(let d=0,P=h.length;d<P;d++){l=h[d].s,c.push(l),p=m[d];for(let v=0,M=p.length;v<M;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fa);const tu={type:"change"},Wo={type:"start"},eu={type:"end"};class fM extends vi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",j),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",j),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(tu),i.update(),s=r.NONE},this.update=function(){const O=new K,ft=new gi().setFromUnitVectors(t.up,new K(0,1,0)),vt=ft.clone().invert(),ot=new K,Ct=new gi,Pt=new K,Lt=2*Math.PI;return function(){const At=i.object.position;O.copy(At).sub(i.target),O.applyQuaternion(ft),o.setFromVector3(O),i.autoRotate&&s===r.NONE&&E(z()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let It=i.minAzimuthAngle,Xt=i.maxAzimuthAngle;return isFinite(It)&&isFinite(Xt)&&(It<-Math.PI?It+=Lt:It>Math.PI&&(It-=Lt),Xt<-Math.PI?Xt+=Lt:Xt>Math.PI&&(Xt-=Lt),It<=Xt?o.theta=Math.max(It,Math.min(Xt,o.theta)):o.theta=o.theta>(It+Xt)/2?Math.max(It,o.theta):Math.min(Xt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),O.setFromSpherical(o),O.applyQuaternion(vt),At.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ot.distanceToSquared(i.object.position)>a||8*(1-Ct.dot(i.object.quaternion))>a||Pt.distanceToSquared(i.target)>0?(i.dispatchEvent(tu),ot.copy(i.object.position),Ct.copy(i.object.quaternion),Pt.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",A),i.domElement.removeEventListener("pointerdown",T),i.domElement.removeEventListener("pointercancel",N),i.domElement.removeEventListener("wheel",S),i.domElement.removeEventListener("pointermove",D),i.domElement.removeEventListener("pointerup",N),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",j),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Jc,l=new Jc;let c=1;const u=new K;let f=!1;const h=new xt,m=new xt,x=new xt,_=new xt,p=new xt,d=new xt,P=new xt,v=new xt,M=new xt,R=[],F={};function z(){return 2*Math.PI/60/60*i.autoRotateSpeed}function k(){return Math.pow(.95,i.zoomSpeed)}function E(O){l.theta-=O}function U(O){l.phi-=O}const nt=function(){const O=new K;return function(vt,ot){O.setFromMatrixColumn(ot,0),O.multiplyScalar(-vt),u.add(O)}}(),Q=function(){const O=new K;return function(vt,ot){i.screenSpacePanning===!0?O.setFromMatrixColumn(ot,1):(O.setFromMatrixColumn(ot,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(vt),u.add(O)}}(),V=function(){const O=new K;return function(vt,ot){const Ct=i.domElement;if(i.object.isPerspectiveCamera){const Pt=i.object.position;O.copy(Pt).sub(i.target);let Lt=O.length();Lt*=Math.tan(i.object.fov/2*Math.PI/180),nt(2*vt*Lt/Ct.clientHeight,i.object.matrix),Q(2*ot*Lt/Ct.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(nt(vt*(i.object.right-i.object.left)/i.object.zoom/Ct.clientWidth,i.object.matrix),Q(ot*(i.object.top-i.object.bottom)/i.object.zoom/Ct.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(O){i.object.isPerspectiveCamera?c/=O:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*O)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function et(O){i.object.isPerspectiveCamera?c*=O:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/O)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function at(O){h.set(O.clientX,O.clientY)}function q(O){P.set(O.clientX,O.clientY)}function G(O){_.set(O.clientX,O.clientY)}function pt(O){m.set(O.clientX,O.clientY),x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const ft=i.domElement;E(2*Math.PI*x.x/ft.clientHeight),U(2*Math.PI*x.y/ft.clientHeight),h.copy(m),i.update()}function ct(O){v.set(O.clientX,O.clientY),M.subVectors(v,P),M.y>0?W(k()):M.y<0&&et(k()),P.copy(v),i.update()}function St(O){p.set(O.clientX,O.clientY),d.subVectors(p,_).multiplyScalar(i.panSpeed),V(d.x,d.y),_.copy(p),i.update()}function Z(O){O.deltaY<0?et(k()):O.deltaY>0&&W(k()),i.update()}function Mt(O){let ft=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?U(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),ft=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?U(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),ft=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?E(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),ft=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?E(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),ft=!0;break}ft&&(O.preventDefault(),i.update())}function H(){if(R.length===1)h.set(R[0].pageX,R[0].pageY);else{const O=.5*(R[0].pageX+R[1].pageX),ft=.5*(R[0].pageY+R[1].pageY);h.set(O,ft)}}function B(){if(R.length===1)_.set(R[0].pageX,R[0].pageY);else{const O=.5*(R[0].pageX+R[1].pageX),ft=.5*(R[0].pageY+R[1].pageY);_.set(O,ft)}}function C(){const O=R[0].pageX-R[1].pageX,ft=R[0].pageY-R[1].pageY,vt=Math.sqrt(O*O+ft*ft);P.set(0,vt)}function w(){i.enableZoom&&C(),i.enablePan&&B()}function rt(){i.enableZoom&&C(),i.enableRotate&&H()}function ut(O){if(R.length==1)m.set(O.pageX,O.pageY);else{const vt=gt(O),ot=.5*(O.pageX+vt.x),Ct=.5*(O.pageY+vt.y);m.set(ot,Ct)}x.subVectors(m,h).multiplyScalar(i.rotateSpeed);const ft=i.domElement;E(2*Math.PI*x.x/ft.clientHeight),U(2*Math.PI*x.y/ft.clientHeight),h.copy(m)}function it(O){if(R.length===1)p.set(O.pageX,O.pageY);else{const ft=gt(O),vt=.5*(O.pageX+ft.x),ot=.5*(O.pageY+ft.y);p.set(vt,ot)}d.subVectors(p,_).multiplyScalar(i.panSpeed),V(d.x,d.y),_.copy(p)}function dt(O){const ft=gt(O),vt=O.pageX-ft.x,ot=O.pageY-ft.y,Ct=Math.sqrt(vt*vt+ot*ot);v.set(0,Ct),M.set(0,Math.pow(v.y/P.y,i.zoomSpeed)),W(M.y),P.copy(v)}function g(O){i.enableZoom&&dt(O),i.enablePan&&it(O)}function b(O){i.enableZoom&&dt(O),i.enableRotate&&ut(O)}function T(O){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",D),i.domElement.addEventListener("pointerup",N)),y(O),O.pointerType==="touch"?J(O):X(O))}function D(O){i.enabled!==!1&&(O.pointerType==="touch"?yt(O):L(O))}function N(O){$(O),R.length===0&&(i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",D),i.domElement.removeEventListener("pointerup",N)),i.dispatchEvent(eu),s=r.NONE}function X(O){let ft;switch(O.button){case 0:ft=i.mouseButtons.LEFT;break;case 1:ft=i.mouseButtons.MIDDLE;break;case 2:ft=i.mouseButtons.RIGHT;break;default:ft=-1}switch(ft){case yi.DOLLY:if(i.enableZoom===!1)return;q(O),s=r.DOLLY;break;case yi.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;G(O),s=r.PAN}else{if(i.enableRotate===!1)return;at(O),s=r.ROTATE}break;case yi.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;at(O),s=r.ROTATE}else{if(i.enablePan===!1)return;G(O),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wo)}function L(O){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;pt(O);break;case r.DOLLY:if(i.enableZoom===!1)return;ct(O);break;case r.PAN:if(i.enablePan===!1)return;St(O);break}}function S(O){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(O.preventDefault(),i.dispatchEvent(Wo),Z(O),i.dispatchEvent(eu))}function j(O){i.enabled===!1||i.enablePan===!1||Mt(O)}function J(O){switch(ht(O),R.length){case 1:switch(i.touches.ONE){case Si.ROTATE:if(i.enableRotate===!1)return;H(),s=r.TOUCH_ROTATE;break;case Si.PAN:if(i.enablePan===!1)return;B(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Si.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;w(),s=r.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;rt(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wo)}function yt(O){switch(ht(O),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ut(O),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;it(O),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;g(O),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;b(O),i.update();break;default:s=r.NONE}}function A(O){i.enabled!==!1&&O.preventDefault()}function y(O){R.push(O)}function $(O){delete F[O.pointerId];for(let ft=0;ft<R.length;ft++)if(R[ft].pointerId==O.pointerId){R.splice(ft,1);return}}function ht(O){let ft=F[O.pointerId];ft===void 0&&(ft=new xt,F[O.pointerId]=ft),ft.set(O.pageX,O.pageY)}function gt(O){const ft=O.pointerId===R[0].pointerId?R[1]:R[0];return F[ft.pointerId]}i.domElement.addEventListener("contextmenu",A),i.domElement.addEventListener("pointerdown",T),i.domElement.addEventListener("pointercancel",N),i.domElement.addEventListener("wheel",S,{passive:!1}),this.update()}}const dM=zt;class Ns extends Nh{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,i,r){const s=this,a=new oM(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(t,function(o){try{e(s.parse(o))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},i,r)}parse(t){const e=this;function i(H,B){if(H.nodeType!==1)return;const C=M(H);let w=!1,rt=null;switch(H.nodeName){case"svg":B=x(H,B);break;case"style":s(H);break;case"g":B=x(H,B);break;case"path":B=x(H,B),H.hasAttribute("d")&&(rt=r(H));break;case"rect":B=x(H,B),rt=l(H);break;case"polygon":B=x(H,B),rt=c(H);break;case"polyline":B=x(H,B),rt=u(H);break;case"circle":B=x(H,B),rt=f(H);break;case"ellipse":B=x(H,B),rt=h(H);break;case"line":B=x(H,B),rt=m(H);break;case"defs":w=!0;break;case"use":B=x(H,B);const dt=(H.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),g=H.viewportElement.getElementById(dt);g?i(g,B):console.warn("SVGLoader: 'use node' references non-existent node id: "+dt);break}rt&&(B.fill!==void 0&&B.fill!=="none"&&rt.color.setStyle(B.fill,dM),F(rt,St),Q.push(rt),rt.userData={node:H,style:B});const ut=H.childNodes;for(let it=0;it<ut.length;it++){const dt=ut[it];w&&dt.nodeName!=="style"&&dt.nodeName!=="defs"||i(dt,B)}C&&(W.pop(),W.length>0?St.copy(W[W.length-1]):St.identity())}function r(H){const B=new ti,C=new xt,w=new xt,rt=new xt;let ut=!0,it=!1;const dt=H.getAttribute("d");if(dt===""||dt==="none")return null;const g=dt.match(/[a-df-z][^a-df-z]*/ig);for(let b=0,T=g.length;b<T;b++){const D=g[b],N=D.charAt(0),X=D.slice(1).trim();ut===!0&&(it=!0,ut=!1);let L;switch(N){case"M":L=p(X);for(let S=0,j=L.length;S<j;S+=2)C.x=L[S+0],C.y=L[S+1],w.x=C.x,w.y=C.y,S===0?B.moveTo(C.x,C.y):B.lineTo(C.x,C.y),S===0&&rt.copy(C);break;case"H":L=p(X);for(let S=0,j=L.length;S<j;S++)C.x=L[S],w.x=C.x,w.y=C.y,B.lineTo(C.x,C.y),S===0&&it===!0&&rt.copy(C);break;case"V":L=p(X);for(let S=0,j=L.length;S<j;S++)C.y=L[S],w.x=C.x,w.y=C.y,B.lineTo(C.x,C.y),S===0&&it===!0&&rt.copy(C);break;case"L":L=p(X);for(let S=0,j=L.length;S<j;S+=2)C.x=L[S+0],C.y=L[S+1],w.x=C.x,w.y=C.y,B.lineTo(C.x,C.y),S===0&&it===!0&&rt.copy(C);break;case"C":L=p(X);for(let S=0,j=L.length;S<j;S+=6)B.bezierCurveTo(L[S+0],L[S+1],L[S+2],L[S+3],L[S+4],L[S+5]),w.x=L[S+2],w.y=L[S+3],C.x=L[S+4],C.y=L[S+5],S===0&&it===!0&&rt.copy(C);break;case"S":L=p(X);for(let S=0,j=L.length;S<j;S+=4)B.bezierCurveTo(_(C.x,w.x),_(C.y,w.y),L[S+0],L[S+1],L[S+2],L[S+3]),w.x=L[S+0],w.y=L[S+1],C.x=L[S+2],C.y=L[S+3],S===0&&it===!0&&rt.copy(C);break;case"Q":L=p(X);for(let S=0,j=L.length;S<j;S+=4)B.quadraticCurveTo(L[S+0],L[S+1],L[S+2],L[S+3]),w.x=L[S+0],w.y=L[S+1],C.x=L[S+2],C.y=L[S+3],S===0&&it===!0&&rt.copy(C);break;case"T":L=p(X);for(let S=0,j=L.length;S<j;S+=2){const J=_(C.x,w.x),yt=_(C.y,w.y);B.quadraticCurveTo(J,yt,L[S+0],L[S+1]),w.x=J,w.y=yt,C.x=L[S+0],C.y=L[S+1],S===0&&it===!0&&rt.copy(C)}break;case"A":L=p(X,[3,4],7);for(let S=0,j=L.length;S<j;S+=7){if(L[S+5]==C.x&&L[S+6]==C.y)continue;const J=C.clone();C.x=L[S+5],C.y=L[S+6],w.x=C.x,w.y=C.y,a(B,L[S],L[S+1],L[S+2],L[S+3],L[S+4],J,C),S===0&&it===!0&&rt.copy(C)}break;case"m":L=p(X);for(let S=0,j=L.length;S<j;S+=2)C.x+=L[S+0],C.y+=L[S+1],w.x=C.x,w.y=C.y,S===0?B.moveTo(C.x,C.y):B.lineTo(C.x,C.y),S===0&&rt.copy(C);break;case"h":L=p(X);for(let S=0,j=L.length;S<j;S++)C.x+=L[S],w.x=C.x,w.y=C.y,B.lineTo(C.x,C.y),S===0&&it===!0&&rt.copy(C);break;case"v":L=p(X);for(let S=0,j=L.length;S<j;S++)C.y+=L[S],w.x=C.x,w.y=C.y,B.lineTo(C.x,C.y),S===0&&it===!0&&rt.copy(C);break;case"l":L=p(X);for(let S=0,j=L.length;S<j;S+=2)C.x+=L[S+0],C.y+=L[S+1],w.x=C.x,w.y=C.y,B.lineTo(C.x,C.y),S===0&&it===!0&&rt.copy(C);break;case"c":L=p(X);for(let S=0,j=L.length;S<j;S+=6)B.bezierCurveTo(C.x+L[S+0],C.y+L[S+1],C.x+L[S+2],C.y+L[S+3],C.x+L[S+4],C.y+L[S+5]),w.x=C.x+L[S+2],w.y=C.y+L[S+3],C.x+=L[S+4],C.y+=L[S+5],S===0&&it===!0&&rt.copy(C);break;case"s":L=p(X);for(let S=0,j=L.length;S<j;S+=4)B.bezierCurveTo(_(C.x,w.x),_(C.y,w.y),C.x+L[S+0],C.y+L[S+1],C.x+L[S+2],C.y+L[S+3]),w.x=C.x+L[S+0],w.y=C.y+L[S+1],C.x+=L[S+2],C.y+=L[S+3],S===0&&it===!0&&rt.copy(C);break;case"q":L=p(X);for(let S=0,j=L.length;S<j;S+=4)B.quadraticCurveTo(C.x+L[S+0],C.y+L[S+1],C.x+L[S+2],C.y+L[S+3]),w.x=C.x+L[S+0],w.y=C.y+L[S+1],C.x+=L[S+2],C.y+=L[S+3],S===0&&it===!0&&rt.copy(C);break;case"t":L=p(X);for(let S=0,j=L.length;S<j;S+=2){const J=_(C.x,w.x),yt=_(C.y,w.y);B.quadraticCurveTo(J,yt,C.x+L[S+0],C.y+L[S+1]),w.x=J,w.y=yt,C.x=C.x+L[S+0],C.y=C.y+L[S+1],S===0&&it===!0&&rt.copy(C)}break;case"a":L=p(X,[3,4],7);for(let S=0,j=L.length;S<j;S+=7){if(L[S+5]==0&&L[S+6]==0)continue;const J=C.clone();C.x+=L[S+5],C.y+=L[S+6],w.x=C.x,w.y=C.y,a(B,L[S],L[S+1],L[S+2],L[S+3],L[S+4],J,C),S===0&&it===!0&&rt.copy(C)}break;case"Z":case"z":B.currentPath.autoClose=!0,B.currentPath.curves.length>0&&(C.copy(rt),B.currentPath.currentPoint.copy(C),ut=!0);break;default:console.warn(D)}it=!1}return B}function s(H){if(!(!H.sheet||!H.sheet.cssRules||!H.sheet.cssRules.length))for(let B=0;B<H.sheet.cssRules.length;B++){const C=H.sheet.cssRules[B];if(C.type!==1)continue;const w=C.selectorText.split(/,/gm).filter(Boolean).map(rt=>rt.trim());for(let rt=0;rt<w.length;rt++){const ut=Object.fromEntries(Object.entries(C.style).filter(([,it])=>it!==""));V[w[rt]]=Object.assign(V[w[rt]]||{},ut)}}}function a(H,B,C,w,rt,ut,it,dt){if(B==0||C==0){H.lineTo(dt.x,dt.y);return}w=w*Math.PI/180,B=Math.abs(B),C=Math.abs(C);const g=(it.x-dt.x)/2,b=(it.y-dt.y)/2,T=Math.cos(w)*g+Math.sin(w)*b,D=-Math.sin(w)*g+Math.cos(w)*b;let N=B*B,X=C*C;const L=T*T,S=D*D,j=L/N+S/X;if(j>1){const vt=Math.sqrt(j);B=vt*B,C=vt*C,N=B*B,X=C*C}const J=N*S+X*L,yt=(N*X-J)/J;let A=Math.sqrt(Math.max(0,yt));rt===ut&&(A=-A);const y=A*B*D/C,$=-A*C*T/B,ht=Math.cos(w)*y-Math.sin(w)*$+(it.x+dt.x)/2,gt=Math.sin(w)*y+Math.cos(w)*$+(it.y+dt.y)/2,O=o(1,0,(T-y)/B,(D-$)/C),ft=o((T-y)/B,(D-$)/C,(-T-y)/B,(-D-$)/C)%(Math.PI*2);H.currentPath.absellipse(ht,gt,B,C,O,O+ft,ut===0,w)}function o(H,B,C,w){const rt=H*C+B*w,ut=Math.sqrt(H*H+B*B)*Math.sqrt(C*C+w*w);let it=Math.acos(Math.max(-1,Math.min(1,rt/ut)));return H*w-B*C<0&&(it=-it),it}function l(H){const B=v(H.getAttribute("x")||0),C=v(H.getAttribute("y")||0),w=v(H.getAttribute("rx")||H.getAttribute("ry")||0),rt=v(H.getAttribute("ry")||H.getAttribute("rx")||0),ut=v(H.getAttribute("width")),it=v(H.getAttribute("height")),dt=1-.551915024494,g=new ti;return g.moveTo(B+w,C),g.lineTo(B+ut-w,C),(w!==0||rt!==0)&&g.bezierCurveTo(B+ut-w*dt,C,B+ut,C+rt*dt,B+ut,C+rt),g.lineTo(B+ut,C+it-rt),(w!==0||rt!==0)&&g.bezierCurveTo(B+ut,C+it-rt*dt,B+ut-w*dt,C+it,B+ut-w,C+it),g.lineTo(B+w,C+it),(w!==0||rt!==0)&&g.bezierCurveTo(B+w*dt,C+it,B,C+it-rt*dt,B,C+it-rt),g.lineTo(B,C+rt),(w!==0||rt!==0)&&g.bezierCurveTo(B,C+rt*dt,B+w*dt,C,B+w,C),g}function c(H){function B(ut,it,dt){const g=v(it),b=v(dt);rt===0?w.moveTo(g,b):w.lineTo(g,b),rt++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new ti;let rt=0;return H.getAttribute("points").replace(C,B),w.currentPath.autoClose=!0,w}function u(H){function B(ut,it,dt){const g=v(it),b=v(dt);rt===0?w.moveTo(g,b):w.lineTo(g,b),rt++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new ti;let rt=0;return H.getAttribute("points").replace(C,B),w.currentPath.autoClose=!1,w}function f(H){const B=v(H.getAttribute("cx")||0),C=v(H.getAttribute("cy")||0),w=v(H.getAttribute("r")||0),rt=new $i;rt.absarc(B,C,w,0,Math.PI*2);const ut=new ti;return ut.subPaths.push(rt),ut}function h(H){const B=v(H.getAttribute("cx")||0),C=v(H.getAttribute("cy")||0),w=v(H.getAttribute("rx")||0),rt=v(H.getAttribute("ry")||0),ut=new $i;ut.absellipse(B,C,w,rt,0,Math.PI*2);const it=new ti;return it.subPaths.push(ut),it}function m(H){const B=v(H.getAttribute("x1")||0),C=v(H.getAttribute("y1")||0),w=v(H.getAttribute("x2")||0),rt=v(H.getAttribute("y2")||0),ut=new ti;return ut.moveTo(B,C),ut.lineTo(w,rt),ut.currentPath.autoClose=!1,ut}function x(H,B){B=Object.assign({},B);let C={};if(H.hasAttribute("class")){const it=H.getAttribute("class").split(/\s/).filter(Boolean).map(dt=>dt.trim());for(let dt=0;dt<it.length;dt++)C=Object.assign(C,V["."+it[dt]])}H.hasAttribute("id")&&(C=Object.assign(C,V["#"+H.getAttribute("id")]));function w(it,dt,g){g===void 0&&(g=function(T){return T.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),T}),H.hasAttribute(it)&&(B[dt]=g(H.getAttribute(it))),C[it]&&(B[dt]=g(C[it])),H.style&&H.style[it]!==""&&(B[dt]=g(H.style[it]))}function rt(it){return Math.max(0,Math.min(1,v(it)))}function ut(it){return Math.max(0,v(it))}return w("fill","fill"),w("fill-opacity","fillOpacity",rt),w("fill-rule","fillRule"),w("opacity","opacity",rt),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",rt),w("stroke-width","strokeWidth",ut),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ut),w("visibility","visibility"),B}function _(H,B){return H-(B-H)}function p(H,B,C){if(typeof H!="string")throw new TypeError("Invalid input: "+typeof H);const w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},rt=0,ut=1,it=2,dt=3;let g=rt,b=!0,T="",D="";const N=[];function X(J,yt,A){const y=new SyntaxError('Unexpected character "'+J+'" at index '+yt+".");throw y.partial=A,y}function L(){T!==""&&(D===""?N.push(Number(T)):N.push(Number(T)*Math.pow(10,Number(D)))),T="",D=""}let S;const j=H.length;for(let J=0;J<j;J++){if(S=H[J],Array.isArray(B)&&B.includes(N.length%C)&&w.FLAGS.test(S)){g=ut,T=S,L();continue}if(g===rt){if(w.WHITESPACE.test(S))continue;if(w.DIGIT.test(S)||w.SIGN.test(S)){g=ut,T=S;continue}if(w.POINT.test(S)){g=it,T=S;continue}w.COMMA.test(S)&&(b&&X(S,J,N),b=!0)}if(g===ut){if(w.DIGIT.test(S)){T+=S;continue}if(w.POINT.test(S)){T+=S,g=it;continue}if(w.EXP.test(S)){g=dt;continue}w.SIGN.test(S)&&T.length===1&&w.SIGN.test(T[0])&&X(S,J,N)}if(g===it){if(w.DIGIT.test(S)){T+=S;continue}if(w.EXP.test(S)){g=dt;continue}w.POINT.test(S)&&T[T.length-1]==="."&&X(S,J,N)}if(g===dt){if(w.DIGIT.test(S)){D+=S;continue}if(w.SIGN.test(S)){if(D===""){D+=S;continue}D.length===1&&w.SIGN.test(D)&&X(S,J,N)}}w.WHITESPACE.test(S)?(L(),g=rt,b=!1):w.COMMA.test(S)?(L(),g=rt,b=!0):w.SIGN.test(S)?(L(),g=ut,T=S):w.POINT.test(S)?(L(),g=it,T=S):X(S,J,N)}return L(),N}const d=["mm","cm","in","pt","pc","px"],P={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(H){let B="px";if(typeof H=="string"||H instanceof String)for(let w=0,rt=d.length;w<rt;w++){const ut=d[w];if(H.endsWith(ut)){B=ut,H=H.substring(0,H.length-ut.length);break}}let C;return B==="px"&&e.defaultUnit!=="px"?C=P.in[e.defaultUnit]/e.defaultDPI:(C=P[B][e.defaultUnit],C<0&&(C=P[B].in*e.defaultDPI)),C*parseFloat(H)}function M(H){if(!(H.hasAttribute("transform")||H.nodeName==="use"&&(H.hasAttribute("x")||H.hasAttribute("y"))))return null;const B=R(H);return W.length>0&&B.premultiply(W[W.length-1]),St.copy(B),W.push(B),B}function R(H){const B=new Ft,C=et;if(H.nodeName==="use"&&(H.hasAttribute("x")||H.hasAttribute("y"))){const w=v(H.getAttribute("x")),rt=v(H.getAttribute("y"));B.translate(w,rt)}if(H.hasAttribute("transform")){const w=H.getAttribute("transform").split(")");for(let rt=w.length-1;rt>=0;rt--){const ut=w[rt].trim();if(ut==="")continue;const it=ut.indexOf("("),dt=ut.length;if(it>0&&it<dt){const g=ut.slice(0,it),b=p(ut.slice(it+1));switch(C.identity(),g){case"translate":if(b.length>=1){const T=b[0];let D=0;b.length>=2&&(D=b[1]),C.translate(T,D)}break;case"rotate":if(b.length>=1){let T=0,D=0,N=0;T=b[0]*Math.PI/180,b.length>=3&&(D=b[1],N=b[2]),at.makeTranslation(-D,-N),q.makeRotation(T),G.multiplyMatrices(q,at),at.makeTranslation(D,N),C.multiplyMatrices(at,G)}break;case"scale":if(b.length>=1){const T=b[0];let D=T;b.length>=2&&(D=b[1]),C.scale(T,D)}break;case"skewX":b.length===1&&C.set(1,Math.tan(b[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":b.length===1&&C.set(1,0,0,Math.tan(b[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":b.length===6&&C.set(b[0],b[2],b[4],b[1],b[3],b[5],0,0,1);break}}B.premultiply(C)}}return B}function F(H,B){function C(it){ct.set(it.x,it.y,1).applyMatrix3(B),it.set(ct.x,ct.y)}function w(it){const dt=it.xRadius,g=it.yRadius,b=Math.cos(it.aRotation),T=Math.sin(it.aRotation),D=new K(dt*b,dt*T,0),N=new K(-g*T,g*b,0),X=D.applyMatrix3(B),L=N.applyMatrix3(B),S=et.set(X.x,L.x,0,X.y,L.y,0,0,0,1),j=at.copy(S).invert(),A=q.copy(j).transpose().multiply(j).elements,y=nt(A[0],A[1],A[4]),$=Math.sqrt(y.rt1),ht=Math.sqrt(y.rt2);if(it.xRadius=1/$,it.yRadius=1/ht,it.aRotation=Math.atan2(y.sn,y.cs),!((it.aEndAngle-it.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const O=at.set($,0,0,0,ht,0,0,0,1),ft=q.set(y.cs,y.sn,0,-y.sn,y.cs,0,0,0,1),vt=O.multiply(ft).multiply(S),ot=Ct=>{const{x:Pt,y:Lt}=new K(Math.cos(Ct),Math.sin(Ct),0).applyMatrix3(vt);return Math.atan2(Lt,Pt)};it.aStartAngle=ot(it.aStartAngle),it.aEndAngle=ot(it.aEndAngle),z(B)&&(it.aClockwise=!it.aClockwise)}}function rt(it){const dt=E(B),g=U(B);it.xRadius*=dt,it.yRadius*=g;const b=dt>Number.EPSILON?Math.atan2(B.elements[1],B.elements[0]):Math.atan2(-B.elements[3],B.elements[4]);it.aRotation+=b,z(B)&&(it.aStartAngle*=-1,it.aEndAngle*=-1,it.aClockwise=!it.aClockwise)}const ut=H.subPaths;for(let it=0,dt=ut.length;it<dt;it++){const b=ut[it].curves;for(let T=0;T<b.length;T++){const D=b[T];D.isLineCurve?(C(D.v1),C(D.v2)):D.isCubicBezierCurve?(C(D.v0),C(D.v1),C(D.v2),C(D.v3)):D.isQuadraticBezierCurve?(C(D.v0),C(D.v1),C(D.v2)):D.isEllipseCurve&&(pt.set(D.aX,D.aY),C(pt),D.aX=pt.x,D.aY=pt.y,k(B)?w(D):rt(D))}}}function z(H){const B=H.elements;return B[0]*B[4]-B[1]*B[3]<0}function k(H){const B=H.elements,C=B[0]*B[3]+B[1]*B[4];if(C===0)return!1;const w=E(H),rt=U(H);return Math.abs(C/(w*rt))>Number.EPSILON}function E(H){const B=H.elements;return Math.sqrt(B[0]*B[0]+B[1]*B[1])}function U(H){const B=H.elements;return Math.sqrt(B[3]*B[3]+B[4]*B[4])}function nt(H,B,C){let w,rt,ut,it,dt;const g=H+C,b=H-C,T=Math.sqrt(b*b+4*B*B);return g>0?(w=.5*(g+T),dt=1/w,rt=H*dt*C-B*dt*B):g<0?rt=.5*(g-T):(w=.5*T,rt=-.5*T),b>0?ut=b+T:ut=b-T,Math.abs(ut)>2*Math.abs(B)?(dt=-2*B/ut,it=1/Math.sqrt(1+dt*dt),ut=dt*it):Math.abs(B)===0?(ut=1,it=0):(dt=-.5*ut/B,ut=1/Math.sqrt(1+dt*dt),it=dt*ut),b>0&&(dt=ut,ut=-it,it=dt),{rt1:w,rt2:rt,cs:ut,sn:it}}const Q=[],V={},W=[],et=new Ft,at=new Ft,q=new Ft,G=new Ft,pt=new xt,ct=new K,St=new Ft,Z=new DOMParser().parseFromString(t,"image/svg+xml");return i(Z.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:Q,xml:Z.documentElement}}static createShapes(t){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(_,p,d,P){const v=_.x,M=p.x,R=d.x,F=P.x,z=_.y,k=p.y,E=d.y,U=P.y,nt=(F-R)*(z-E)-(U-E)*(v-R),Q=(M-v)*(z-E)-(k-z)*(v-R),V=(U-E)*(M-v)-(F-R)*(k-z),W=nt/V,et=Q/V;if(V===0&&nt!==0||W<=0||W>=1||et<0||et>1)return null;if(nt===0&&V===0){for(let at=0;at<2;at++)if(a(at===0?d:P,_,p),r.loc==i.ORIGIN){const q=at===0?d:P;return{x:q.x,y:q.y,t:r.t}}else if(r.loc==i.BETWEEN){const q=+(v+r.t*(M-v)).toPrecision(10),G=+(z+r.t*(k-z)).toPrecision(10);return{x:q,y:G,t:r.t}}return null}else{for(let G=0;G<2;G++)if(a(G===0?d:P,_,p),r.loc==i.ORIGIN){const pt=G===0?d:P;return{x:pt.x,y:pt.y,t:r.t}}const at=+(v+W*(M-v)).toPrecision(10),q=+(z+W*(k-z)).toPrecision(10);return{x:at,y:q,t:W}}}function a(_,p,d){const P=d.x-p.x,v=d.y-p.y,M=_.x-p.x,R=_.y-p.y,F=P*R-M*v;if(_.x===p.x&&_.y===p.y){r.loc=i.ORIGIN,r.t=0;return}if(_.x===d.x&&_.y===d.y){r.loc=i.DESTINATION,r.t=1;return}if(F<-Number.EPSILON){r.loc=i.LEFT;return}if(F>Number.EPSILON){r.loc=i.RIGHT;return}if(P*M<0||v*R<0){r.loc=i.BEHIND;return}if(Math.sqrt(P*P+v*v)<Math.sqrt(M*M+R*R)){r.loc=i.BEYOND;return}let z;P!==0?z=M/P:z=R/v,r.loc=i.BETWEEN,r.t=z}function o(_,p){const d=[],P=[];for(let v=1;v<_.length;v++){const M=_[v-1],R=_[v];for(let F=1;F<p.length;F++){const z=p[F-1],k=p[F],E=s(M,R,z,k);E!==null&&d.find(U=>U.t<=E.t+Number.EPSILON&&U.t>=E.t-Number.EPSILON)===void 0&&(d.push(E),P.push(new xt(E.x,E.y)))}}return P}function l(_,p,d){const P=new xt;p.getCenter(P);const v=[];return d.forEach(M=>{M.boundingBox.containsPoint(P)&&o(_,M.points).forEach(F=>{v.push({identifier:M.identifier,isCW:M.isCW,point:F})})}),v.sort((M,R)=>M.point.x-R.point.x),v}function c(_,p,d,P,v){(v==null||v==="")&&(v="nonzero");const M=new xt;_.boundingBox.getCenter(M);const R=[new xt(d,M.y),new xt(P,M.y)],F=l(R,_.boundingBox,p);F.sort((Q,V)=>Q.point.x-V.point.x);const z=[],k=[];F.forEach(Q=>{Q.identifier===_.identifier?z.push(Q):k.push(Q)});const E=z[0].point.x,U=[];let nt=0;for(;nt<k.length&&k[nt].point.x<E;)U.length>0&&U[U.length-1]===k[nt].identifier?U.pop():U.push(k[nt].identifier),nt++;if(U.push(_.identifier),v==="evenodd"){const Q=U.length%2===0,V=U[U.length-2];return{identifier:_.identifier,isHole:Q,for:V}}else if(v==="nonzero"){let Q=!0,V=null,W=null;for(let et=0;et<U.length;et++){const at=U[et];Q?(W=p[at].isCW,Q=!1,V=at):W!==p[at].isCW&&(W=p[at].isCW,Q=!0)}return{identifier:_.identifier,isHole:Q,for:V}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,f=-999999999,h=t.subPaths.map(_=>{const p=_.getPoints();let d=-999999999,P=999999999,v=-999999999,M=999999999;for(let R=0;R<p.length;R++){const F=p[R];F.y>d&&(d=F.y),F.y<P&&(P=F.y),F.x>v&&(v=F.x),F.x<M&&(M=F.x)}return f<=v&&(f=v+1),u>=M&&(u=M-1),{curves:_.curves,points:p,isCW:pi.isClockWise(p),identifier:-1,boundingBox:new hM(new xt(M,P),new xt(v,d))}});h=h.filter(_=>_.points.length>1);for(let _=0;_<h.length;_++)h[_].identifier=_;const m=h.map(_=>c(_,h,u,f,t.userData?t.userData.style.fillRule:void 0)),x=[];return h.forEach(_=>{if(!m[_.identifier].isHole){const d=new br;d.curves=_.curves,m.filter(v=>v.isHole&&v.for===_.identifier).forEach(v=>{const M=h[v.identifier],R=new $i;R.curves=M.curves,d.holes.push(R)}),x.push(d)}}),x}static getStrokeStyle(t,e,i,r,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(t,e,i,r){const s=[],a=[],o=[];if(Ns.pointsToStrokeWithBuffers(t,e,i,r,s,a,o)===0)return null;const l=new Cn;return l.setAttribute("position",new Ge(s,3)),l.setAttribute("normal",new Ge(a,3)),l.setAttribute("uv",new Ge(o,2)),l}static pointsToStrokeWithBuffers(t,e,i,r,s,a,o,l){const c=new xt,u=new xt,f=new xt,h=new xt,m=new xt,x=new xt,_=new xt,p=new xt,d=new xt,P=new xt,v=new xt,M=new xt,R=new xt,F=new xt,z=new xt,k=new xt,E=new xt;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,t=b(t);const U=t.length;if(U<2)return 0;const nt=t[0].equals(t[U-1]);let Q,V=t[0],W;const et=e.strokeWidth/2,at=1/(U-1);let q=0,G,pt,ct,St,Z=!1,Mt=0,H=l*3,B=l*2;C(t[0],t[1],c).multiplyScalar(et),p.copy(t[0]).sub(c),d.copy(t[0]).add(c),P.copy(p),v.copy(d);for(let T=1;T<U;T++){Q=t[T],T===U-1?nt?W=t[1]:W=void 0:W=t[T+1];const D=c;if(C(V,Q,D),f.copy(D).multiplyScalar(et),M.copy(Q).sub(f),R.copy(Q).add(f),G=q+at,pt=!1,W!==void 0){C(Q,W,u),f.copy(u).multiplyScalar(et),F.copy(Q).sub(f),z.copy(Q).add(f),ct=!0,f.subVectors(W,V),D.dot(f)<0&&(ct=!1),T===1&&(Z=ct),f.subVectors(W,Q),f.normalize();const N=Math.abs(D.dot(f));if(N>Number.EPSILON){const X=et/N;f.multiplyScalar(-X),h.subVectors(Q,V),m.copy(h).setLength(X).add(f),k.copy(m).negate();const L=m.length(),S=h.length();h.divideScalar(S),x.subVectors(W,Q);const j=x.length();switch(x.divideScalar(j),h.dot(k)<S&&x.dot(k)<j&&(pt=!0),E.copy(m).add(Q),k.add(Q),St=!1,pt?ct?(z.copy(k),R.copy(k)):(F.copy(k),M.copy(k)):ut(),e.strokeLineJoin){case"bevel":it(ct,pt,G);break;case"round":dt(ct,pt),ct?rt(Q,M,F,G,0):rt(Q,z,R,G,1);break;case"miter":case"miter-clip":default:const J=et*e.strokeMiterLimit/L;if(J<1)if(e.strokeLineJoin!=="miter-clip"){it(ct,pt,G);break}else dt(ct,pt),ct?(x.subVectors(E,M).multiplyScalar(J).add(M),_.subVectors(E,F).multiplyScalar(J).add(F),w(M,G,0),w(x,G,0),w(Q,G,.5),w(Q,G,.5),w(x,G,0),w(_,G,0),w(Q,G,.5),w(_,G,0),w(F,G,0)):(x.subVectors(E,R).multiplyScalar(J).add(R),_.subVectors(E,z).multiplyScalar(J).add(z),w(R,G,1),w(x,G,1),w(Q,G,.5),w(Q,G,.5),w(x,G,1),w(_,G,1),w(Q,G,.5),w(_,G,1),w(z,G,1));else pt?(ct?(w(d,q,1),w(p,q,0),w(E,G,0),w(d,q,1),w(E,G,0),w(k,G,1)):(w(d,q,1),w(p,q,0),w(E,G,1),w(p,q,0),w(k,G,0),w(E,G,1)),ct?F.copy(E):z.copy(E)):ct?(w(M,G,0),w(E,G,0),w(Q,G,.5),w(Q,G,.5),w(E,G,0),w(F,G,0)):(w(R,G,1),w(E,G,1),w(Q,G,.5),w(Q,G,.5),w(E,G,1),w(z,G,1)),St=!0;break}}else ut()}else ut();!nt&&T===U-1&&g(t[0],P,v,ct,!0,q),q=G,V=Q,p.copy(F),d.copy(z)}if(!nt)g(Q,M,R,ct,!1,G);else if(pt&&s){let T=E,D=k;Z!==ct&&(T=k,D=E),ct?(St||Z)&&(D.toArray(s,0*3),D.toArray(s,3*3),St&&T.toArray(s,1*3)):(St||!Z)&&(D.toArray(s,1*3),D.toArray(s,3*3),St&&T.toArray(s,0*3))}return Mt;function C(T,D,N){return N.subVectors(D,T),N.set(-N.y,N.x).normalize()}function w(T,D,N){s&&(s[H]=T.x,s[H+1]=T.y,s[H+2]=0,a&&(a[H]=0,a[H+1]=0,a[H+2]=1),H+=3,o&&(o[B]=D,o[B+1]=N,B+=2)),Mt+=3}function rt(T,D,N,X,L){c.copy(D).sub(T).normalize(),u.copy(N).sub(T).normalize();let S=Math.PI;const j=c.dot(u);Math.abs(j)<1&&(S=Math.abs(Math.acos(j))),S/=i,f.copy(D);for(let J=0,yt=i-1;J<yt;J++)h.copy(f).rotateAround(T,S),w(f,X,L),w(h,X,L),w(T,X,.5),f.copy(h);w(h,X,L),w(N,X,L),w(T,X,.5)}function ut(){w(d,q,1),w(p,q,0),w(M,G,0),w(d,q,1),w(M,G,1),w(R,G,0)}function it(T,D,N){D?T?(w(d,q,1),w(p,q,0),w(M,G,0),w(d,q,1),w(M,G,0),w(k,G,1),w(M,N,0),w(F,N,0),w(k,N,.5)):(w(d,q,1),w(p,q,0),w(R,G,1),w(p,q,0),w(k,G,0),w(R,G,1),w(R,N,1),w(z,N,0),w(k,N,.5)):T?(w(M,N,0),w(F,N,0),w(Q,N,.5)):(w(R,N,1),w(z,N,0),w(Q,N,.5))}function dt(T,D){D&&(T?(w(d,q,1),w(p,q,0),w(M,G,0),w(d,q,1),w(M,G,0),w(k,G,1),w(M,q,0),w(Q,G,.5),w(k,G,1),w(Q,G,.5),w(F,q,0),w(k,G,1)):(w(d,q,1),w(p,q,0),w(R,G,1),w(p,q,0),w(k,G,0),w(R,G,1),w(R,q,1),w(k,G,0),w(Q,G,.5),w(Q,G,.5),w(k,G,0),w(z,q,1)))}function g(T,D,N,X,L,S){switch(e.strokeLineCap){case"round":L?rt(T,N,D,S,.5):rt(T,D,N,S,.5);break;case"square":if(L)c.subVectors(D,T),u.set(c.y,-c.x),f.addVectors(c,u).add(T),h.subVectors(u,c).add(T),X?(f.toArray(s,1*3),h.toArray(s,0*3),h.toArray(s,3*3)):(f.toArray(s,1*3),f.toArray(s,3*3),h.toArray(s,0*3));else{c.subVectors(N,T),u.set(c.y,-c.x),f.addVectors(c,u).add(T),h.subVectors(u,c).add(T);const j=s.length;X?(f.toArray(s,j-1*3),h.toArray(s,j-2*3),h.toArray(s,j-4*3)):(f.toArray(s,j-2*3),h.toArray(s,j-1*3),h.toArray(s,j-4*3))}break}}function b(T){let D=!1;for(let X=1,L=T.length-1;X<L;X++)if(T[X].distanceTo(T[X+1])<r){D=!0;break}if(!D)return T;const N=[];N.push(T[0]);for(let X=1,L=T.length-1;X<L;X++)T[X].distanceTo(T[X+1])>=r&&N.push(T[X]);return N.push(T[T.length-1]),N}}}const pM=["#3b82f6","#f43f5e","#f97316","#22c55e","#eab308","#06b6d4","#d946ef","#8b5cf6","#84cc16","#6366f1"];function we(n){return function(){return n}}const nu=Math.abs,xe=Math.atan2,ei=Math.cos,mM=Math.max,Xo=Math.min,rn=Math.sin,ki=Math.sqrt,Ce=1e-12,Br=Math.PI,Os=Br/2,As=2*Br;function gM(n){return n>1?0:n<-1?Br:Math.acos(n)}function iu(n){return n>=1?Os:n<=-1?-Os:Math.asin(n)}const pa=Math.PI,ma=2*pa,ri=1e-6,_M=ma-ri;function Fh(n){this._+=n[0];for(let t=1,e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function xM(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return Fh;const e=10**t;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+i[r]}}class vM{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Fh:xM(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,i,r){this._append`Q${+t},${+e},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(t,e,i,r,s,a){this._append`C${+t},${+e},${+i},${+r},${this._x1=+s},${this._y1=+a}`}arcTo(t,e,i,r,s){if(t=+t,e=+e,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,o=this._y1,l=i-t,c=r-e,u=a-t,f=o-e,h=u*u+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(h>ri)if(!(Math.abs(f*l-c*u)>ri)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let m=i-a,x=r-o,_=l*l+c*c,p=m*m+x*x,d=Math.sqrt(_),P=Math.sqrt(h),v=s*Math.tan((pa-Math.acos((_+h-p)/(2*d*P)))/2),M=v/P,R=v/d;Math.abs(M-1)>ri&&this._append`L${t+M*u},${e+M*f}`,this._append`A${s},${s},0,0,${+(f*m>u*x)},${this._x1=t+R*l},${this._y1=e+R*c}`}}arc(t,e,i,r,s,a){if(t=+t,e=+e,i=+i,a=!!a,i<0)throw new Error(`negative radius: ${i}`);let o=i*Math.cos(r),l=i*Math.sin(r),c=t+o,u=e+l,f=1^a,h=a?r-s:s-r;this._x1===null?this._append`M${c},${u}`:(Math.abs(this._x1-c)>ri||Math.abs(this._y1-u)>ri)&&this._append`L${c},${u}`,i&&(h<0&&(h=h%ma+ma),h>_M?this._append`A${i},${i},0,1,${f},${t-o},${e-l}A${i},${i},0,1,${f},${this._x1=c},${this._y1=u}`:h>ri&&this._append`A${i},${i},0,${+(h>=pa)},${f},${this._x1=t+i*Math.cos(s)},${this._y1=e+i*Math.sin(s)}`)}rect(t,e,i,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}function MM(n){let t=3;return n.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{const i=Math.floor(e);if(!(i>=0))throw new RangeError(`invalid digits: ${e}`);t=i}return n},()=>new vM(t)}function yM(n){return n.innerRadius}function SM(n){return n.outerRadius}function EM(n){return n.startAngle}function TM(n){return n.endAngle}function bM(n){return n&&n.padAngle}function AM(n,t,e,i,r,s,a,o){var l=e-n,c=i-t,u=a-r,f=o-s,h=f*l-u*c;if(!(h*h<Ce))return h=(u*(t-s)-f*(n-r))/h,[n+h*l,t+h*c]}function Ms(n,t,e,i,r,s,a){var o=n-e,l=t-i,c=(a?s:-s)/ki(o*o+l*l),u=c*l,f=-c*o,h=n+u,m=t+f,x=e+u,_=i+f,p=(h+x)/2,d=(m+_)/2,P=x-h,v=_-m,M=P*P+v*v,R=r-s,F=h*_-x*m,z=(v<0?-1:1)*ki(mM(0,R*R*M-F*F)),k=(F*v-P*z)/M,E=(-F*P-v*z)/M,U=(F*v+P*z)/M,nt=(-F*P+v*z)/M,Q=k-p,V=E-d,W=U-p,et=nt-d;return Q*Q+V*V>W*W+et*et&&(k=U,E=nt),{cx:k,cy:E,x01:-u,y01:-f,x11:k*(r/R-1),y11:E*(r/R-1)}}function wM(){var n=yM,t=SM,e=we(0),i=null,r=EM,s=TM,a=bM,o=null,l=MM(c);function c(){var u,f,h=+n.apply(this,arguments),m=+t.apply(this,arguments),x=r.apply(this,arguments)-Os,_=s.apply(this,arguments)-Os,p=nu(_-x),d=_>x;if(o||(o=u=l()),m<h&&(f=m,m=h,h=f),!(m>Ce))o.moveTo(0,0);else if(p>As-Ce)o.moveTo(m*ei(x),m*rn(x)),o.arc(0,0,m,x,_,!d),h>Ce&&(o.moveTo(h*ei(_),h*rn(_)),o.arc(0,0,h,_,x,d));else{var P=x,v=_,M=x,R=_,F=p,z=p,k=a.apply(this,arguments)/2,E=k>Ce&&(i?+i.apply(this,arguments):ki(h*h+m*m)),U=Xo(nu(m-h)/2,+e.apply(this,arguments)),nt=U,Q=U,V,W;if(E>Ce){var et=iu(E/h*rn(k)),at=iu(E/m*rn(k));(F-=et*2)>Ce?(et*=d?1:-1,M+=et,R-=et):(F=0,M=R=(x+_)/2),(z-=at*2)>Ce?(at*=d?1:-1,P+=at,v-=at):(z=0,P=v=(x+_)/2)}var q=m*ei(P),G=m*rn(P),pt=h*ei(R),ct=h*rn(R);if(U>Ce){var St=m*ei(v),Z=m*rn(v),Mt=h*ei(M),H=h*rn(M),B;if(p<Br)if(B=AM(q,G,Mt,H,St,Z,pt,ct)){var C=q-B[0],w=G-B[1],rt=St-B[0],ut=Z-B[1],it=1/rn(gM((C*rt+w*ut)/(ki(C*C+w*w)*ki(rt*rt+ut*ut)))/2),dt=ki(B[0]*B[0]+B[1]*B[1]);nt=Xo(U,(h-dt)/(it-1)),Q=Xo(U,(m-dt)/(it+1))}else nt=Q=0}z>Ce?Q>Ce?(V=Ms(Mt,H,q,G,m,Q,d),W=Ms(St,Z,pt,ct,m,Q,d),o.moveTo(V.cx+V.x01,V.cy+V.y01),Q<U?o.arc(V.cx,V.cy,Q,xe(V.y01,V.x01),xe(W.y01,W.x01),!d):(o.arc(V.cx,V.cy,Q,xe(V.y01,V.x01),xe(V.y11,V.x11),!d),o.arc(0,0,m,xe(V.cy+V.y11,V.cx+V.x11),xe(W.cy+W.y11,W.cx+W.x11),!d),o.arc(W.cx,W.cy,Q,xe(W.y11,W.x11),xe(W.y01,W.x01),!d))):(o.moveTo(q,G),o.arc(0,0,m,P,v,!d)):o.moveTo(q,G),!(h>Ce)||!(F>Ce)?o.lineTo(pt,ct):nt>Ce?(V=Ms(pt,ct,St,Z,h,-nt,d),W=Ms(q,G,Mt,H,h,-nt,d),o.lineTo(V.cx+V.x01,V.cy+V.y01),nt<U?o.arc(V.cx,V.cy,nt,xe(V.y01,V.x01),xe(W.y01,W.x01),!d):(o.arc(V.cx,V.cy,nt,xe(V.y01,V.x01),xe(V.y11,V.x11),!d),o.arc(0,0,h,xe(V.cy+V.y11,V.cx+V.x11),xe(W.cy+W.y11,W.cx+W.x11),d),o.arc(W.cx,W.cy,nt,xe(W.y11,W.x11),xe(W.y01,W.x01),!d))):o.arc(0,0,h,R,M,d)}if(o.closePath(),u)return o=null,u+""||null}return c.centroid=function(){var u=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,f=(+r.apply(this,arguments)+ +s.apply(this,arguments))/2-Br/2;return[ei(f)*u,rn(f)*u]},c.innerRadius=function(u){return arguments.length?(n=typeof u=="function"?u:we(+u),c):n},c.outerRadius=function(u){return arguments.length?(t=typeof u=="function"?u:we(+u),c):t},c.cornerRadius=function(u){return arguments.length?(e=typeof u=="function"?u:we(+u),c):e},c.padRadius=function(u){return arguments.length?(i=u==null?null:typeof u=="function"?u:we(+u),c):i},c.startAngle=function(u){return arguments.length?(r=typeof u=="function"?u:we(+u),c):r},c.endAngle=function(u){return arguments.length?(s=typeof u=="function"?u:we(+u),c):s},c.padAngle=function(u){return arguments.length?(a=typeof u=="function"?u:we(+u),c):a},c.context=function(u){return arguments.length?(o=u??null,c):o},c}function RM(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function CM(n,t){return t<n?-1:t>n?1:t>=n?0:NaN}function PM(n){return n}function LM(){var n=PM,t=CM,e=null,i=we(0),r=we(As),s=we(0);function a(o){var l,c=(o=RM(o)).length,u,f,h=0,m=new Array(c),x=new Array(c),_=+i.apply(this,arguments),p=Math.min(As,Math.max(-As,r.apply(this,arguments)-_)),d,P=Math.min(Math.abs(p)/c,s.apply(this,arguments)),v=P*(p<0?-1:1),M;for(l=0;l<c;++l)(M=x[m[l]=l]=+n(o[l],l,o))>0&&(h+=M);for(t!=null?m.sort(function(R,F){return t(x[R],x[F])}):e!=null&&m.sort(function(R,F){return e(o[R],o[F])}),l=0,f=h?(p-c*v)/h:0;l<c;++l,_=d)u=m[l],M=x[u],d=_+(M>0?M*f:0)+v,x[u]={data:o[u],index:l,value:M,startAngle:_,endAngle:d,padAngle:P};return x}return a.value=function(o){return arguments.length?(n=typeof o=="function"?o:we(+o),a):n},a.sortValues=function(o){return arguments.length?(t=o,e=null,a):t},a.sort=function(o){return arguments.length?(e=o,t=null,a):e},a.startAngle=function(o){return arguments.length?(i=typeof o=="function"?o:we(+o),a):i},a.endAngle=function(o){return arguments.length?(r=typeof o=="function"?o:we(+o),a):r},a.padAngle=function(o){return arguments.length?(s=typeof o=="function"?o:we(+o),a):s},a}function UM(n,t,e,i,r){const s=LM().value(l=>l.value)(n),a=wM().innerRadius(t).outerRadius(e).cornerRadius(i).padAngle(r);return{pieSvgDataUri:`data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(0.01)">
      ${s.map(l=>`<path d="${a(l)}" />`)}
      </g>
    </svg>
  `)}`,arcs:s,arcGenerator:a}}const IM=(n,t,e,i,r)=>{const{pieSvgDataUri:s}=UM(n,t,e,i,r);return{pieSvgDataUri:s}},DM=Lu({__name:"Vue3dPie",props:{antialias:{type:Boolean,default:!1},backgroundColor:{default:"#1f2937"},orbitControlsEnabled:{type:Boolean,default:!0},palette:{default:()=>pM},pieData:{}},setup(n){const t=n,e=al(),i=al();function r(){const{orbitControlsEnabled:s,antialias:a}=t,o=new Ev;i.value=o;const l=new uM(16777215,.2);o.add(l);const c=new cM(16777215,.75,0,.1,1);c.position.set(10,15,10),c.castShadow=!0,o.add(c);const u=e.value.clientWidth,f=e.value.clientHeight,h=new Fe(50,u/f,.1,1e3);h.position.set(3,3,4),h.lookAt(0,0,0);const m=new wh({antialias:a,alpha:!0});m.setSize(u,f),m.setPixelRatio(window.devicePixelRatio);const x=new fM(h,m.domElement);x.enableDamping=!0,x.enablePan=!1,x.maxPolarAngle=Math.PI/2;function _(){requestAnimationFrame(_),x.update(),m.render(o,h)}s?_():m.render(o,h),e.value.appendChild(m.domElement)}return Du(()=>{r();const{pieSvgDataUri:s}=IM(t.pieData,0,200,0,0);new Ns().load(s,o=>{const l=new xr;o.paths.forEach((c,u)=>{const f=new nM({color:t.palette[u]});Ns.createShapes(c).forEach(m=>{const x=new qa(m,{curveSegments:256,steps:2,depth:t.pieData[u].height,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelOffset:0,bevelSegments:1}),_=new bn(x,f);_.rotateX(-Math.PI/2),l.add(_)})}),i.value.add(l)})}),(s,a)=>(Wu(),Dd("div",{ref_key:"ctnRef",ref:e,class:"container",style:Hs({backgroundColor:s.backgroundColor})},null,4))}});const NM=(n,t)=>{const e=n.__vccOpts||n;for(const[i,r]of t)e[i]=r;return e},OM=NM(DM,[["__scopeId","data-v-b51beb3a"]]),FM=Lu({__name:"App",setup(n){const t=[{value:1.5,color:"#3b82f6",label:"",explode:!1,height:.5,offset:0},{value:.78,color:"#f43f5e",label:"",explode:!1,height:.5,offset:0},{value:.62,color:"#f97316",label:"",explode:!1,height:.5,offset:0},{value:.48,color:"#22c55e",label:"",explode:!1,height:.5,offset:0}];return(e,i)=>(Wu(),Nd(OM,{"pie-data":t}))}});xp(FM).mount("#app");

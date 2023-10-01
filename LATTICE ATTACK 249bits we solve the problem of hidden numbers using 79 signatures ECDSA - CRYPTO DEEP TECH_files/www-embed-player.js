(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function ia(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ka(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function la(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var na="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)la(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||na});
var oa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=oa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function w(a,b){a.prototype=oa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function wa(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.D=this.j=null}
function xa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
wa.prototype.la=function(a){this.i=a};
function ya(a,b){a.j={exception:b,pd:!0};a.h=a.l||a.G}
wa.prototype.return=function(a){this.j={return:a};this.h=this.G};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.v=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.D.splice(0)[0];(b=a.j=a.j||b)?b.pd?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,ya(a.h,g),Ga(a)}a.h.m=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.pd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m.next,b,a.h.la):(a.h.la(b),b=Ga(a));return b};
this.throw=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m["throw"],b,a.h.la):(ya(a.h,b),b=Ga(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.la(2,g)};
b.prototype.G=function(g){this.la(1,g)};
b.prototype.la=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.D=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Zb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:p}
var l,n,r=new b(function(t,p){l=t;n=p});
this.Zb(k(g,l),k(h,n));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Zb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Zb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function r(x){return function(y){t[x]=y;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).Zb(r(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!la(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!la(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&la(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&la(k,g)&&la(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ea(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&la(h[0],l))for(h=0;h<n.length;h++){var r=n[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:h,entry:r}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)la(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||da});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a){for(var b in a)return!1;return!0}
function ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=sb(a[c]);return b}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){if(void 0===vb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}vb=a}else vb=a}return vb}
;function xb(){}
function yb(a){return new xb(zb,a)}
var zb={};yb("");var Ab={};function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h.toString()};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=wb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;var Gb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Hb(a){this.h=a}
Hb.prototype.toString=function(){return this.h.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb,Lb=E("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Kb=null!=Mb?Mb:!1;function Nb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=C.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Kb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Kb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:F("Opera")}
function Tb(){return Rb()?!1:F("Trident")||F("MSIE")}
function Ub(){return F("Firefox")||F("FxiOS")}
function Vb(){return Rb()?Qb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Rb()?0:F("Edge"))||F("Silk")}
;function Wb(a){this.h=a}
Wb.prototype.toString=function(){return this.h.toString()};function Xb(){a:{var a=C.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a))break a;a=""}return a}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function fc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ic(a,b){var c=[];for(b=b||0;b<a.length;b+=2)hc(a[b],a[b+1],c);return c.join("&")}
function jc(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function kc(a,b){var c=2==arguments.length?ic(arguments[1],0):ic(arguments,1);return fc(a,c)}
function lc(a,b){b=jc(b);return fc(a,b)}
function mc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return fc(a,b+c)}
function nc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var oc=/#|$/,pc=/[?&]($|#)/;function qc(a,b){for(var c=a.search(oc),d=0,e,f=[];0<=(e=nc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(pc,"$1")}
;function rc(a){this.dd=a}
;function sc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.qb=new Map}
m=sc.prototype;m.Pd=function(a){var b=B.apply(1,arguments),c=this.Ac(b);c?c.push(new rc(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.getKey(B.apply(1,arguments));this.qb.set(b,[new rc(a)])};
m.Ac=function(){var a=this.getKey(B.apply(0,arguments));return this.qb.has(a)?this.qb.get(a):void 0};
m.he=function(){var a=this.Ac(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.qb.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function tc(a,b){sc.call(this,a,3,b)}
w(tc,sc);tc.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.dd);this.Bd(c+a,b)};function uc(a,b){sc.call(this,a,2,b)}
w(uc,sc);uc.prototype.record=function(a){this.Pd(a,B.apply(1,arguments))};function vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?wc.apply(null,d):vc(d)}}
;function G(){this.la=this.la;this.G=this.G}
G.prototype.la=!1;G.prototype.Z=function(){return this.la};
G.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function xc(a,b){yc(a,Va(vc,b))}
function yc(a,b){a.la?b():(a.G||(a.G=[]),a.G.push(b))}
G.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function zc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
zc.prototype.stopPropagation=function(){this.j=!0};
zc.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ac(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Bc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Cc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Dc[c])c=Dc[c];else{c=String(c);if(!Dc[c]){var f=/function\s+([^\(]+)/m.exec(c);Dc[c]=f?f[1]:"[Anonymous]"}c=Dc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Cc(a,b){b||(b={});b[Ec(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ec(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Cc(a,b));return c}
function Ec(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Dc={};var Fc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Gc(){return Kb?!!Ob&&!!Ob.platform:!1}
function Hc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Ic(a){Ic[" "](a);return a}
Ic[" "]=function(){};var Jc=Sb(),Kc=Tb(),Lc=F("Edge"),Mc=F("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Nc=-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge");Nc&&F("Mobile");Gc()||F("Macintosh");Gc()||F("Windows");(Gc()?"Linux"===Ob.platform:F("Linux"))||Gc()||F("CrOS");var Oc=C.navigator||null;Oc&&(Oc.appVersion||"").indexOf("X11");var Pc=Gc()?"Android"===Ob.platform:F("Android");Hc();F("iPad");F("iPod");Hc()||F("iPad")||F("iPod");Nb().toLowerCase().indexOf("kaios");
function Qc(){var a=C.document;return a?a.documentMode:void 0}
var Rc;a:{var Sc="",Tc=function(){var a=Nb();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Tc&&(Sc=Tc?Tc[1]:"");if(Kc){var Uc=Qc();if(null!=Uc&&Uc>parseFloat(Sc)){Rc=String(Uc);break a}}Rc=Sc}var Vc=Rc,Wc;if(C.document&&Kc){var Xc=Qc();Wc=Xc?Xc:parseInt(Vc,10)||void 0}else Wc=void 0;var Yc=Wc;function Zc(a,b){zc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Zc,zc);var $c={2:"touch",3:"pen",4:"mouse"};
Zc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Mc){a:{try{Ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:$c[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Zc.Aa.preventDefault.call(this)};
Zc.prototype.stopPropagation=function(){Zc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Zc.prototype.preventDefault=function(){Zc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ad="closure_listenable_"+(1E6*Math.random()|0);var bd=0;function cd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ec=e;this.key=++bd;this.Tb=this.Yb=!1}
function dd(a){a.Tb=!0;a.listener=null;a.proxy=null;a.src=null;a.ec=null}
;function ed(a){this.src=a;this.listeners={};this.h=0}
ed.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=fd(a,b,d,e);-1<g?(b=a[g],c||(b.Yb=!1)):(b=new cd(b,this.src,f,!!d,e),b.Yb=c,a.push(b));return b};
ed.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=fd(e,b,c,d);return-1<b?(dd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function gd(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(dd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function fd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Tb&&f.listener==b&&f.capture==!!c&&f.ec==d)return e}return-1}
;var hd="closure_lm_"+(1E6*Math.random()|0),id={},jd=0;function kd(a,b,c,d,e){if(d&&d.once)ld(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)kd(a,b[f],c,d,e);else c=md(c),a&&a[ad]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):nd(a,b,c,!1,d,e)}
function nd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=od(a);h||(a[hd]=h=new ed(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Fc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jd++}}
function pd(){function a(c){return b.call(a.src,a.listener,c)}
var b=rd;return a}
function ld(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else c=md(c),a&&a[ad]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):nd(a,b,c,!0,d,e)}
function sd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sd(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=md(c),a&&a[ad])?a.h.remove(String(b),c,d,e):a&&(a=od(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=fd(b,c,d,e)),(c=-1<a?b[a]:null)&&td(c))}
function td(a){if("number"!==typeof a&&a&&!a.Tb){var b=a.src;if(b&&b[ad])gd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jd--;(c=od(b))?(gd(c,a),0==c.h&&(c.src=null,b[hd]=null)):dd(a)}}}
function qd(a){return a in id?id[a]:id[a]="on"+a}
function rd(a,b){if(a.Tb)a=!0;else{b=new Zc(b,this);var c=a.listener,d=a.ec||a.src;a.Yb&&td(a);a=c.call(d,b)}return a}
function od(a){a=a[hd];return a instanceof ed?a:null}
var ud="__closure_events_fn_"+(1E9*Math.random()>>>0);function md(a){if("function"===typeof a)return a;a[ud]||(a[ud]=function(b){return a.handleEvent(b)});
return a[ud]}
;function vd(){G.call(this);this.h=new ed(this);this.Ja=this;this.ea=null}
Xa(vd,G);vd.prototype[ad]=!0;m=vd.prototype;m.addEventListener=function(a,b,c,d){kd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){sd(this,a,b,c,d)};
function wd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ja;c=b.type||b;"string"===typeof b?b=new zc(b,a):b instanceof zc?b.target=b.target||a:(e=b,b=new zc(c,a),ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=xd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=xd(g,c,!0,b)&&e,b.j||(e=xd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=xd(g,c,!1,b)&&e}
m.M=function(){vd.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,dd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function xd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Tb&&g.capture==c){var h=g.listener,k=g.ec||g.src;g.Yb&&gd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function yd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
yd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function zd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Ad(a,b){return a+Math.random()*(b-a)}
;function Bd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Bd.prototype;m.clone=function(){return new Bd(this.x,this.y)};
m.equals=function(a){return a instanceof Bd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Cd(a,b){this.width=a;this.height=b}
m=Cd.prototype;m.clone=function(){return new Cd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Ob=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Dd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ed(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Fd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Gd;function Hd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Ed("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Id(a){C.setTimeout(function(){throw a;},0)}
;function Jd(){this.i=this.h=null}
Jd.prototype.add=function(a,b){var c=Kd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Jd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Kd=new yd(function(){return new Ld},function(a){return a.reset()});
function Ld(){this.next=this.scope=this.h=null}
Ld.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ld.prototype.reset=function(){this.next=this.scope=this.h=null};var Md,Nd=!1,Od=new Jd;function Pd(a,b){Md||Qd();Nd||(Md(),Nd=!0);Od.add(a,b)}
function Qd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Md=function(){a.then(Rd)}}else Md=function(){var b=Rd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Rb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Gd||(Gd=Hd()),Gd(b)):C.setImmediate(b)}}
function Rd(){for(var a;a=Od.remove();){try{a.h.call(a.scope)}catch(b){Id(b)}zd(Kd,a)}Nd=!1}
;function Sd(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Td(b,2,c)},function(c){Td(b,3,c)})}catch(c){Td(this,3,c)}}
function Ud(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Ud.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Vd=new yd(function(){return new Ud},function(a){a.reset()});
function Wd(a,b,c){var d=Vd.get();d.i=a;d.h=b;d.context=c;return d}
function Xd(a){return new Sd(function(b,c){c(a)})}
Sd.prototype.then=function(a,b,c){return Yd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Sd.prototype.$goog_Thenable=!0;m=Sd.prototype;m.sc=function(a,b){return Yd(this,null,a,b)};
m.catch=Sd.prototype.sc;m.cancel=function(a){if(0==this.h){var b=new Zd(a);Pd(function(){$d(this,b)},this)}};
function $d(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?$d(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ae(c),be(c,e,3,b)))}a.j=null}else Td(a,3,b)}
function ce(a,b){a.i||2!=a.h&&3!=a.h||de(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Yd(a,b,c,d){var e=Wd(null,null,null);e.child=new Sd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Zd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ce(a,e);return e.child}
m.df=function(a){this.h=0;Td(this,2,a)};
m.ef=function(a){this.h=0;Td(this,3,a)};
function Td(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.df,f=a.ef;if(d instanceof Sd){ce(d,Wd(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){ee(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,de(a),3!=b||c instanceof Zd||fe(a,c))}}
function ee(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function de(a){a.G||(a.G=!0,Pd(a.be,a))}
function ae(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.be=function(){for(var a;a=ae(this);)be(this,a,this.h,this.s);this.G=!1};
function be(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,ge(b,c,d);else try{b.j?b.i.call(b.context):ge(b,c,d)}catch(e){he.call(null,e)}zd(Vd,b)}
function ge(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function fe(a,b){a.m=!0;Pd(function(){a.m&&he.call(null,b)})}
var he=Id;function Zd(a){Za.call(this,a)}
Xa(Zd,Za);Zd.prototype.name="cancel";function ie(a,b){vd.call(this);this.j=a||1;this.i=b||C;this.l=Ua(this.bf,this);this.m=Wa()}
Xa(ie,vd);m=ie.prototype;m.enabled=!1;m.Fa=null;m.setInterval=function(a){this.j=a;this.Fa&&this.enabled?(this.stop(),this.start()):this.Fa&&this.stop()};
m.bf=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Fa=this.i.setTimeout(this.l,this.j-a):(this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null),wd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Fa||(this.Fa=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Fa&&(this.i.clearTimeout(this.Fa),this.Fa=null)};
m.M=function(){ie.Aa.M.call(this);this.stop();delete this.i};
function je(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function ke(a){G.call(this);this.D=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new ie(this.flushInterval);this.h.listen("tick",this.nb,!1,this);xc(this,this.h);this.m=!1}
w(ke,G);m=ke.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function le(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.nb()}
m.nb=function(){var a=this.i.values();a=[].concat(ka(a)).filter(function(b){return b.qb.size});
a.length&&this.D.flush(a,this.m);me(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Wc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new tc(a,b))};
m.Xc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new uc(a,b))};
function ne(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.uc=function(a){this.Nd.apply(this,[a,1].concat(ka(B.apply(1,arguments))))};
m.Nd=function(a,b){var c=B.apply(2,arguments),d=ne(this,a);d&&d instanceof tc&&(d.j(b,c),le(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=ne(this,a);d&&d instanceof uc&&(d.record(b,c),le(this))};
function me(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function oe(a){this.h=a;this.h.Wc("/client_streamz/bg/fiec",{tb:3,sb:"rk"},{tb:2,sb:"ec"},{tb:3,sb:"em"})}
function pe(a,b,c,d){a.h.uc("/client_streamz/bg/fiec",b,c,d)}
function qe(a){this.h=a;this.h.Xc("/client_streamz/bg/fil",{tb:3,sb:"rk"})}
qe.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function re(a){this.h=a;this.h.Wc("/client_streamz/bg/fsc",{tb:3,sb:"rk"})}
function se(a){this.h=a;this.h.Xc("/client_streamz/bg/fsl",{tb:3,sb:"rk"})}
se.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var te={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ue(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ve(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=we(a,h),d+=we(a,h+4),e+=we(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return te.toString(e)}
function ve(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function we(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Ub();var xe=Hc()||F("iPod"),ye=F("iPad");!F("Android")||Vb()||Ub()||Sb()||F("Silk");Vb();var ze=F("Safari")&&!(Vb()||(Rb()?0:F("Coast"))||Sb()||(Rb()?0:F("Edge"))||(Rb()?Qb("Microsoft Edge"):F("Edg/"))||(Rb()?Qb("Opera"):F("OPR"))||Ub()||F("Silk")||F("Android"))&&!(Hc()||F("iPad")||F("iPod"));var Ae={},Be=null;function Ce(a,b){Na(a);void 0===b&&(b=0);De();b=Ae[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ee(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Fe(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Fe(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Be[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
De();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function De(){if(!Be){Be={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ae[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Be[f]&&(Be[f]=e)}}}}
;var Ge="undefined"!==typeof Uint8Array,He=!Kc&&"function"===typeof btoa;function Ie(a){if(!He)return Ce(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Je=/[-_.]/g,Ke={"-":"+",_:"/",".":"="};function Le(a){return Ke[a]||""}
function Me(a){return Ge&&null!=a&&a instanceof Uint8Array}
var Ne={};var Oe;function Pe(a){if(a!==Ne)throw Error("illegal external caller");}
function Qe(a,b){Pe(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Qe.prototype.Ob=function(){return null==this.value_};
Qe.prototype.sizeBytes=function(){Pe(Ne);var a=this.value_;if(null!=a&&!Me(a))if("string"===typeof a)if(He){Je.test(a)&&(a=a.replace(Je,Le));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ee(a);else Ma(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Re(a){return Array.prototype.slice.call(a)}
;var Se="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ka(Object.values({Ff:1,Df:2,Cf:4,If:8,Hf:16,Gf:32,vf:64,Jf:128,Bf:256,Af:512,Ef:1024})));var Te=Se?function(a,b){a[Se]|=b}:function(a,b){void 0!==a.Da?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ue(a){var b=Ve(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Re(a)),We(a,b|1))}
var Xe=Se?function(a,b){a[Se]&=~b}:function(a,b){void 0!==a.Da&&(a.Da&=~b)},Ve=Se?function(a){return a[Se]|0}:function(a){return a.Da|0},Ye=Se?function(a){return a[Se]}:function(a){return a.Da},We=Se?function(a,b){a[Se]=b}:function(a,b){void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ze(a,b){Object.isFrozen(a)&&(a=Re(a));We(a,b);return a}
function $e(a){Te(a,1);return a}
function af(a,b){We(b,(a|0)&-255)}
function bf(a,b){We(b,(a|34)&-221)}
function cf(a){a=a>>11&1023;return 0===a?536870912:a}
;var df={};function ef(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ff;function gf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Qe(a,Ne):Oe||(Oe=new Qe(null,Ne));else if(a.constructor!==Qe)if(Me(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Qe(new Uint8Array(a),Ne):Oe||(Oe=new Qe(null,Ne));else throw Error();return a}
var hf,jf=[];We(jf,39);hf=Object.freeze(jf);function kf(a){if(a&2)throw Error();}
;function lf(){var a=Error();Ac(a,"incident");Id(a)}
function mf(){var a=Error();Ac(a,"warning");return a}
;function nf(a){return a.displayName||a.name||"unknown type name"}
function of(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);a=!!a}return a}
var pf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function qf(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function rf(a){if(null!=a){if("number"!==typeof a)throw mf();Number.isFinite(a)||lf()}return a}
function sf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function tf(a){if(null!=a){if(!qf(a))throw mf();var b=typeof a;("number"===b?Number.isFinite(a):"string"!==b?0:pf.test(a))||lf();a="string"===typeof a?uf(a):vf(a)}return a}
function vf(a){qf(a);return a}
function uf(a){qf(a);return a}
function wf(a){if("string"!==typeof a)throw Error();return a}
function xf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function yf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+nf(b)+" but got "+(a&&nf(a.constructor)));}
function zf(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Kc===df)return a;if(d){var e=d=Ve(a);0===e&&(e|=c&32);e|=c&2;e!==d&&We(a,e);return new b(a)}}
;var Af;function Bf(a,b){Ve(b);Af=b;a=new a(b);Af=void 0;return a}
function Cf(a,b,c){null==a&&(a=Af);Af=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=Ve(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(ef(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Df(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Df(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}We(a,d);return a}
function Df(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Ef(a,b){return Ff(b)}
function Ff(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Me(a))return Ie(a);if(a instanceof Qe){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Ie(b)}}}return a}
;function Gf(a,b,c){a=Re(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Hf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ve(a)&1?void 0:f&&Ve(a)&2?a:If(a,b,c,void 0!==d,e,f);else if(ef(a)){var g={},h;for(h in a)g[h]=Hf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function If(a,b,c,d,e,f){var g=d||c?Ve(a):0;d=d?!!(g&32):void 0;a=Re(a);for(var h=0;h<a.length;h++)a[h]=Hf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Jf(a){return a.Kc===df?a.toJSON():Ff(a)}
;function Kf(a,b,c){c=void 0===c?bf:c;if(null!=a){if(Ge&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ve(a);return d&2?a:!b||d&68||!(d&32||0===d)?If(a,Kf,d&4?bf:c,!0,!1,!0):(We(a,d|34),a)}a.Kc===df&&(b=a.A,c=Ye(b),a=c&2?a:Bf(a.constructor,Lf(b,c,!0)));return a}}
function Lf(a,b,c){var d=c||b&2?bf:af,e=!!(b&32);a=Gf(a,b,function(f){return Kf(f,e,d)});
Te(a,32|(c?2:0));return a}
function Mf(a){var b=a.A,c=Ye(b);return c&2?Bf(a.constructor,Lf(b,c,!1)):a}
;function Nf(a,b){a=a.A;return Of(a,Ye(a),b)}
function Of(a,b,c,d){if(-1===c)return null;if(c>=cf(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function J(a,b,c){var d=a.A,e=Ye(d);kf(e);Pf(d,e,b,c);return a}
function Pf(a,b,c,d,e){ef(d);var f=cf(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&We(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Qf(a){return void 0!==Rf(a,Sf,11,!1)}
function Tf(a,b,c,d){var e=a.A,f=Ye(e);kf(f);if(null==c)return Pf(e,f,b),a;if(!(Ve(c)&4)){Object.isFrozen(c)&&(c=Re(c));for(var g=0;g<c.length;g++)c[g]=d(c[g]);We(c,5)}Pf(e,f,b,c);return a}
function Uf(a,b,c,d){a=a.A;var e=Ye(a);kf(e);for(var f=0,g=0;g<c.length;g++){var h=c[g];null!=Of(a,e,h)&&(0!==f&&Pf(a,e,f),f=h)}(c=f)&&c!==b&&null!=d&&Pf(a,e,c);Pf(a,e,b,d)}
function Rf(a,b,c,d){a=a.A;var e=Ye(a),f=Of(a,e,c,d);b=zf(f,b,e);b!==f&&null!=b&&Pf(a,e,c,b,d);return b}
function Vf(a,b,c,d){d=void 0===d?!1:d;b=Rf(a,b,c,d);if(null==b)return b;a=a.A;var e=Ye(a);if(!(e&2)){var f=Mf(b);f!==b&&(b=f,Pf(a,e,c,b,d))}return b}
function Wf(a,b,c,d){null!=d?yf(d,b):d=void 0;return J(a,c,d)}
function Xf(a,b,c,d){var e=a.A,f=Ye(e);kf(f);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];yf(k,b);g=g&&!(Ve(k.A)&2)}b=Ve(d);h=b|1;h=(g?h|8:h&-9)|4;h!=b&&(d=Ze(d,h))}null==d&&(d=void 0);Pf(e,f,c,d);return a}
function Yf(a,b){a=Nf(a,b);var c;null==a?c=a:qf(a)?"number"===typeof a?c=vf(a):c=uf(a):c=void 0;return c}
function Zf(a){a=Nf(a,1);a=null==a?a:qf(a)?"string"===typeof a?uf(a):vf(a):void 0;return a}
function $f(a){return gf(a,!1)}
function ag(a,b,c){null!=c&&(Number.isFinite(c)||lf());return J(a,b,c)}
;function bg(a,b,c){this.A=Cf(a,b,c)}
m=bg.prototype;m.toJSON=function(){if(ff)var a=cg(this,this.A,!1);else a=If(this.A,Jf,void 0,void 0,!1,!1),a=cg(this,a,!0);return a};
m.serialize=function(){ff=!0;try{return JSON.stringify(this.toJSON(),Ef)}finally{ff=!1}};
m.clone=function(){var a=this.A,b=Ye(a);return Bf(this.constructor,Lf(a,b,!1))};
m.Kc=df;m.toString=function(){return cg(this,this.A,!1).toString()};
function cg(a,b,c){var d=a.constructor.Wa,e=Ye(c?a.A:b),f=cf(e);e=!1;if(d){if(!c){b=Re(b);var g;if(b.length&&ef(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Ye(a.A);a=cf(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?hf:$e([]):c&&n!==hf&&Ue(n)}else h||(n=void 0,g.length&&ef(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?hf:$e([]):c&&n!==hf&&Ue(n)}d=b.length;if(!d)return b;var r;
if(ef(h=b[d-1])){a:{var t=h;g={};c=!1;for(var p in t)a=t[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(r=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!r&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function dg(a){this.A=Cf(a)}
w(dg,bg);var eg=[1,2,3];function fg(a){this.A=Cf(a)}
w(fg,bg);var gg=[1,2,3];function hg(a){this.A=Cf(a)}
w(hg,bg);hg.Wa=[1];function ig(a){this.A=Cf(a)}
w(ig,bg);ig.Wa=[3,6,4];function jg(a){this.A=Cf(a)}
w(jg,bg);jg.Wa=[1];function kg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function lg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var t=g,p=0;64>p;p+=4)t[p/4]=r[p]<<24|r[p+1]<<16|r[p+2]<<8|r[p+3];for(p=16;80>p;p++)r=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(r<<1|r>>>31)&4294967295;r=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var I=z^x&(y^z);var M=1518500249}else I=x^y^z,M=1859775393;else 60>p?(I=x&y|z&(x|y),M=2400959708):(I=x^y^z,M=3395469782);I=((r<<5|r>>>27)&4294967295)+I+H+M+t[p]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=r;r=I}e[0]=e[0]+r&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(r,t){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var p=[],x=0,y=r.length;x<y;++x)p.push(r.charCodeAt(x));r=p}t||(t=r.length);p=0;if(0==l)for(;p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64;for(;p<t;)if(f[l++]=r[p++],n++,64==l)for(l=0,b(f);p+64<t;)b(r.slice(p,p+64)),p+=64,n+=64}
function d(){var r=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var x=24;0<=x;x-=8)r[t++]=e[p]>>x&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Xd:function(){for(var r=d(),t="",p=0;p<r.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(r[p]/16))+"0123456789ABCDEF".charAt(r[p]%16);return t}}}
;function mg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,ng(kg(d),a,c||null)].join(" "):null}
function ng(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),og(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=og(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function og(a){var b=lg();b.update(a);return b.Xd().toLowerCase()}
;var pg={};function qg(a){this.h=a||{cookie:""}}
m=qg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Ob())return!0;this.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ag;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ic}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Gb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ic:0,path:b,domain:c});return d};
m.Dc=function(){return rg(this).keys};
m.Ob=function(){return!this.h.cookie};
m.clear=function(){for(var a=rg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function rg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Gb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var sg=new qg("undefined"==typeof document?null:document);function tg(a){return!!pg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ug(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;tg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new qg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");tg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function vg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new qg(document)).get(b));return a?mg(a,c,d):null}
function wg(a,b){b=void 0===b?!1:b;var c=kg(String(C.location.href)),d=[];if(ug(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new qg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?mg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&tg(b)&&((b=vg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=vg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function xg(a){this.A=Cf(a)}
w(xg,bg);xg.Wa=[2];function yg(a){this.A=Cf(a)}
w(yg,bg);function zg(a){this.A=Cf(a)}
w(zg,bg);function Ag(a){this.h=this.i=this.j=a}
Ag.prototype.reset=function(){this.h=this.i=this.j};
Ag.prototype.getValue=function(){return this.i};function Bg(a){this.A=Cf(a)}
w(Bg,bg);function Cg(a){this.A=Cf(a)}
w(Cg,bg);Cg.Wa=[1];function Sf(a){this.A=Cf(a)}
w(Sf,bg);var Dg=["platform","platformVersion","architecture","model","uaFullVersion"];new Cg;function Eg(a){this.A=Cf(a)}
w(Eg,bg);function Fg(a){this.A=Cf(a)}
w(Fg,bg);function Gg(a){this.A=Cf(a,34)}
w(Gg,bg);Gg.Wa=[3,20,27];function Ig(a){this.A=Cf(a,19)}
w(Ig,bg);Ig.Wa=[3,5];function Jg(a){this.A=Cf(a,6)}
w(Jg,bg);var Kg=function(a){return function(b){if(null==b||""==b)b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Te(b,32);b=Bf(a,b)}return b}}(Jg);
Jg.Wa=[5];function Lg(a){this.A=Cf(a)}
w(Lg,bg);var Mg;Mg=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Vf;this.defaultValue=void 0}(175237375,{Sf:0},Lg);function Ng(a){G.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.ea=-1;this.ma=!1;this.D=this.experimentIds=null;this.Y=this.da=this.s=this.l=0;this.Ja=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.ub=a.ub||function(){};
this.j=new Og(a.logSource,a.yb);this.network=a.network;this.Fb=a.Fb||null;this.bufferSize=1E3;this.ob=Va(Ad,0,1);this.W=a.ff||null;this.sessionIndex=a.sessionIndex||null;this.Mb=a.Mb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.hd;this.yb=a.yb||!1;var c=ag(new Eg,1,1);Pg(this.j,c);this.m=new Ag(1E4);this.h=new ie(this.m.getValue());xc(this,this.h);a=Qg(this,a.Yc);kd(this.h,"tick",a,!1,this);this.S=new ie(6E5);xc(this,this.S);kd(this.S,"tick",a,!1,this);this.Mb||this.S.start();
this.yb||(kd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.yc()}),kd(document,"pagehide",this.yc,!1,this))}
w(Ng,G);function Qg(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=Ng.prototype;m.M=function(){this.yc();G.prototype.M.call(this)};
function Rg(a){a.W||(a.W=.01>a.ob()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function Sg(a,b){a.m=new Ag(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ja++;a=J(a,21,tf(b));this.componentId&&J(a,26,xf(this.componentId));if(!Zf(a)){b=a;var c=Date.now().toString();J(b,1,tf(c))}null==Yf(a,15)&&J(a,15,tf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),Wf(a,xg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Mb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)Tg(this.j,3),Ug(this);else{var d=Date.now();if(this.Ba>d&&this.ea<d)b&&b("throttled");else{Tg(this.j,1);var e=Vg(this.j,this.i,this.l,this.s,this.Fb,this.da,this.Y);d={};var f=this.ub();f&&(d.Authorization=f);var g=Rg(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=mc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=mc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.D&&this.D.isSupported(h.length)&&(k=this.D.compress(h));var l={url:g,body:h,Td:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(p){c.m.reset();c.h.setInterval(c.m.getValue());if(p){var x=null;try{var y=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));x=Kg(y)}catch(H){}if(x){p=Number;y="-1";y=void 0===y?"0":y;var z=Zf(x);p=p(null!=z?z:y);0<p&&(c.ea=Date.now(),
c.Ba=c.ea+p);x=Mg.ctor?Mg.i(x,Mg.ctor,Mg.h,!0):Mg.i(x,Mg.h,null,!0);if(p=null===x?void 0:x)x=-1,x=void 0===x?0:x,p=sf(Nf(p,1)),x=null!=p?p:x,-1!==x&&(c.ma||Sg(c,x))}}a&&a();c.s=0},r=function(p,x){var y=e.A,z=Ye(y),H=!!(z&2);
var I=H?1:2,M=!!(z&2);var N=z&2;var K=Of(y,z,3);Array.isArray(K)||(K=hf);var V=Ve(K);V&1||$e(K);N?V&2||Te(K,34):V&32&&!(V&2)&&Xe(K,32);N=K;if(N!==hf&&Ve(N)&4)3!==I&&(M?2===I&&(I=Ve(N),N=Re(N),We(N,I),Pf(y,z,3,N)):(M=Object.isFrozen(N),1===I?M||Object.freeze(N):(I=Ve(N),K=I&-35,M&&(N=Re(N),I=0,Pf(y,z,3,N)),I!==K&&We(N,K)))),y=N;else{K=N;N=!!(z&2);var Y=!!(Ve(K)&2);M=K;!N&&Y&&(K=Re(K));V=z|(Y?2:0);Y=Y||void 0;for(var fa=0,pa=0;fa<K.length;fa++){var ma=zf(K[fa],Gg,V);void 0!==ma&&(Y=Y||Ye(ma.A)&2,K[pa++]=
ma)}pa<fa&&(K.length=pa);Y=!Y;V=Ve(K);fa=V|5;Y=Y?fa|8:fa&-9;V!=Y&&(K=Ze(K,Y));M!==K&&Pf(y,z,3,K);(N&&2!==I||1===I)&&Object.freeze(K);y=K}if(!(H||Ve(y)&8)){for(H=0;H<y.length;H++)z=y[H],I=Mf(z),z!==I&&(y[H]=I);Te(y,8)}H=Yf(e,14);z=c.m;z.h=Math.min(3E5,2*z.h);z.i=Math.min(3E5,z.h+Math.round(.2*(Math.random()-.5)*z.h));c.h.setInterval(c.m.getValue());401===p&&f&&(c.na=f);H&&(c.l+=H);void 0===x&&(x=c.isRetryable(p));x&&(c.i=y.concat(c.i),c.Mb||c.h.enabled||c.h.start());b&&b("net-send-failed",p);++c.s},
t=function(){c.network&&c.network.send(l,n,r)};
k?k.then(function(p){l.Oc["Content-Encoding"]="gzip";l.Oc["Content-Type"]="application/binary";l.body=p;l.Td=2;t()},function(){t()}):t()}}}};
m.yc=function(){Wg(this.j,!0);this.flush();Wg(this.j,!1)};
function Ug(a){Xg(a,function(b,c){b=mc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function Xg(a,b){if(0!==a.i.length){var c=qc(Rg(a),"format");c=kc(c,"auth",a.ub(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=Vg(a.j,e,a.l,a.s,a.Fb,a.da,a.Y);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.da=0;a.Y=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Og(a,b){this.yb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Ig;Number.isInteger(a)&&ag(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Pg(this,new Eg)}
function Pg(a,b){Wf(a.h,Eg,1,b);Nf(b,1)||ag(b,1,1);if(!a.yb){b=Yg(a);var c=Nf(b,5);(null==c||"string"===typeof c)&&c||J(b,5,xf(a.locale))}a.uach&&(b=Yg(a),Vf(b,Cg,9)||Wf(b,Cg,9,a.uach))}
function Tg(a,b){Qf(Zg(a))&&(a=$g(a),ag(a,1,b))}
function Wg(a,b){Qf(Zg(a))&&(a=$g(a),J(a,2,of(b)))}
function Zg(a){return Vf(a.h,Eg,1)}
function ah(a,b){var c=void 0===c?Dg:c;b(window,c).then(function(d){a.uach=d;d=Yg(a);Wf(d,Cg,9,a.uach);return!0}).catch(function(){return!1})}
function Yg(a){a=Zg(a);var b=Vf(a,Sf,11);b||(b=new Sf,Wf(a,Sf,11,b));return b}
function $g(a){a=Yg(a);var b=Vf(a,Bg,10);b||(b=new Bg,J(b,2,of(!1)),Wf(a,Bg,10,b));return b}
function Vg(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Qf(Zg(a))){var h=$g(a);J(h,3,rf(d))}Qf(Zg(a))&&(d=$g(a),J(d,4,rf(f)));Qf(Zg(a))&&(f=$g(a),J(f,5,rf(g)));a=a.h.clone();g=Date.now().toString();a=J(a,4,tf(g));b=Xf(a,Gg,3,b);e&&(a=new yg,e=J(a,13,rf(e)),a=new zg,e=Wf(a,yg,2,e),a=new Fg,e=Wf(a,zg,1,e),e=ag(e,2,9),Wf(b,Fg,18,e));c&&J(b,14,tf(c));return b}
;function bh(){}
bh.prototype.serialize=function(a){var b=[];ch(this,a,b);return b.join("")};
function ch(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ch(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),dh(d,c),c.push(":"),ch(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":dh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var eh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},fh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function dh(a,b){b.push('"',a.replace(fh,function(c){var d=eh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),eh[c]=d);return d}),'"')}
;function gh(){}
gh.prototype.h=null;gh.prototype.getOptions=function(){var a;(a=this.h)||(a={},hh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var ih;function jh(){}
Xa(jh,gh);function kh(a){return(a=hh(a))?new ActiveXObject(a):new XMLHttpRequest}
function hh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
ih=new jh;function lh(a){vd.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.D=null;this.Ba="";this.ma=this.na=!1}
Xa(lh,vd);var mh=/^https?$/i,nh=["POST","PUT"],oh=[];function ph(a,b,c,d,e,f,g){var h=new lh;oh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Vd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=lh.prototype;m.Vd=function(){this.dispose();ib(oh,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?kh(this.S):kh(ih);this.R=this.S?this.S.getOptions():ih.getOptions();this.I.onreadystatechange=Ua(this.sd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();qh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=cb(nh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Ba&&(this.I.responseType=this.Ba);"withCredentials"in this.I&&this.I.withCredentials!==this.na&&(this.I.withCredentials=this.na);try{rh(this),0<this.m&&(this.ma=sh(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Ua(this.Gd,
this)):this.D=je(this.Gd,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),qh(this,g)}};
function sh(a){return Kc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof La&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),wd(this,"timeout"),this.abort(8))};
function qh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;th(a);uh(a)}
function th(a){a.W||(a.W=!0,wd(a,"complete"),wd(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,wd(this,"complete"),wd(this,"abort"),uh(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),uh(this,!0));lh.Aa.M.call(this)};
m.sd=function(){this.Z()||(this.Y||this.s||this.j?vh(this):this.Be())};
m.Be=function(){vh(this)};
function vh(a){if(a.i&&"undefined"!=typeof La)if(a.R[1]&&4==wh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==wh(a))je(a.sd,0,a);else if(wd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(xh(a))wd(a,"complete"),wd(a,"success");else{try{var b=2<wh(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";th(a)}}finally{uh(a)}}}
function uh(a,b){if(a.I){rh(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||wd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function rh(a){a.I&&a.ma&&(a.I.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==wh(this)};
function xh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=bc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!mh.test(a?a.toLowerCase():"");c=b}return c}
function wh(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<wh(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function yh(){}
yh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
ph(a.url,function(d){d=d.target;if(xh(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)};function zh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new yh}
w(zh,G);zh.prototype.hd=function(){this.W=!0;return this};function Ah(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;G.call(this);f?a=f:(a=new zh(a,"0"),a.componentId=b,xc(this,a),""!=c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new Ng({logSource:a.logSource,ub:a.ub?a.ub:wg,sessionIndex:a.sessionIndex,ff:a.i,yb:a.j,Mb:!1,hd:a.W,pageId:a.pageId,Yc:a.Yc,network:a.network?a.network:void 0}),xc(a,b),a.s&&Pg(b.j,a.s),a.h&&(c=a.h,d=Yg(b.j),J(d,7,xf(c))),a.m&&(b.D=a.m),a.componentId&&(b.componentId=a.componentId),
a.Fb&&(b.Fb=a.Fb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new xg),c=c.serialize(),J(b.experimentIds,4,xf(c))):b.experimentIds&&J(b.experimentIds,4)),a.R&&(c=a.R,b.experimentIds||(b.experimentIds=new xg),Tf(b.experimentIds,2,c,$f)),a.D&&(c=a.D,b.ma=!0,Sg(b,c)),a.S&&ah(b.j,a.S),a=b);this.h=a}
w(Ah,G);
Ah.prototype.flush=function(a){var b=a||[];if(b.length){a=new jg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e;var g=new ig;g=J(g,1,xf(f.i));for(var h=f,k=[],l=0;l<h.h.length;l++)k.push(h.h[l].sb);g=Tf(g,3,k,wf);h=[];k=[];l=v(f.qb.keys());for(var n=l.next();!n.done;n=l.next())k.push(n.value.split(","));for(l=0;l<k.length;l++){n=k[l];var r=f.l;for(var t=f.Ac(n)||[],p=[],x=0;x<t.length;x++){var y=t[x],z=y&&y.dd;y=new fg;switch(r){case 3:var H=Number(z);Number.isFinite(H)&&Uf(y,1,gg,tf(H));break;case 2:H=
y;z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);Uf(H,2,gg,z)}p.push(y)}r=p;for(t=0;t<r.length;t++){p=r[t];x=new hg;p=Wf(x,fg,2,p);x=n;y=[];H=f;z=[];for(var I=0;I<H.h.length;I++)z.push(H.h[I].tb);H=z;for(z=0;z<H.length;z++){var M=H[z],N=x[z];I=new dg;switch(M){case 3:Uf(I,1,eg,xf(String(N)));break;case 2:M=Number(N);Number.isFinite(M)&&Uf(I,2,eg,rf(M));break;case 1:Uf(I,3,eg,of("true"==N))}y.push(I)}Xf(p,dg,1,y);h.push(p)}}Xf(g,
hg,4,h);c.push(g);e.clear()}Xf(a,ig,1,c);b=this.h;a instanceof Gg?b.log(a):(c=new Gg,a=a.serialize(),a=J(c,8,xf(a)),b.log(a));this.h.flush()}};function Bh(a){this.s=Ch();this.m=new Ah(1828);this.h=new ke(this.m);this.G=new qe(this.h);this.j=new re(this.h);this.l=new se(this.h);this.i=new oe(this.h);this.Qa=ue(a)}
function Ch(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Dh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Eh(a){function b(p,x){Promise.resolve().then(function(){var y;null!=(y=c.va)&&y.G.record(Ch()-y.s,y.Qa);g.resolve({Rd:p,Xe:x})})}
var c=this;this.h=!1;var d=a.program;var e=a.ke;if(!1!==a.He){var f;this.va=null!=(f=a.va)?f:new Bh(e)}var g=new Dh;this.i=g.promise;if(!C[e]){var h;null!=(h=this.va)&&pe(h.i,h.Qa,1,"");var k;null!=(k=this.va)&&k.h.nb()}else if(!C[e].a){var l;null!=(l=this.va)&&pe(l.i,l.Qa,2,"");var n;null!=(n=this.va)&&n.h.nb()}try{this.j=v((0,C[e].a)(d,b,!0,a.ig)).next().value,this.We=g.promise.then(function(){})}catch(p){var r;
null!=(r=this.va)&&pe(r.i,r.Qa,4,p.message);var t;null!=(t=this.va)&&t.h.nb();throw p;}}
Eh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Ch(),d;null!=(d=this.va)&&d.j.h.uc("/client_streamz/bg/fsc",d.Qa);return this.i.then(function(e){var f=e.Rd;return new Promise(function(g){f(function(h){var k;null!=(k=b.va)&&k.l.record(Ch()-c,k.Qa);g(h)},[a.gd,
a.Ye,a.hf])})})};
Eh.prototype.Dd=function(a){if(this.h)throw Error("Already disposed");var b=Ch(),c;null!=(c=this.va)&&c.j.h.uc("/client_streamz/bg/fsc",c.Qa);a=this.j([a.gd,a.Ye,a.hf]);var d;null!=(d=this.va)&&d.l.record(Ch()-b,d.Qa);return a};
Eh.prototype.dispose=function(){var a;null!=(a=this.va)&&a.h.nb();this.h=!0;this.i.then(function(b){(b=b.Xe)&&b()})};
Eh.prototype.Z=function(){return this.h};var Fh=window;yb("csi.gstatic.com");yb("googleads.g.doubleclick.net");yb("partner.googleadservices.com");yb("pubads.g.doubleclick.net");yb("securepubads.g.doubleclick.net");yb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Gh="function"===typeof URL;function Hh(a){if(a instanceof Hb)a instanceof Hb&&a.constructor===Hb?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(Gh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Ih(a,b){b=Hh(b);void 0!==b&&(a.href=b)}
;var Jh={};function Kh(){}
function Lh(a){this.h=a}
w(Lh,Kh);Lh.prototype.toString=function(){return this.h};function Mh(a){var b="true".toString(),c=[new Lh(Nh[0].toLowerCase(),Jh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Lh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Oh(){throw Error("unknown trace type");}
;var Ph="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Qh(a,b){if(b instanceof Cb)a.href=Db(b).toString();else{if(-1===Ph.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Hh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Rh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Sh(a,b){a.src=Db(b);Rh(a)}
;var Th=ha([""]),Uh=ia(["\x00"],["\\0"]),Vh=ia(["\n"],["\\n"]),Wh=ia(["\x00"],["\\u0000"]);function Xh(a){return-1===a.toString().indexOf("`")}
Xh(function(a){return a(Th)})||Xh(function(a){return a(Uh)})||Xh(function(a){return a(Vh)})||Xh(function(a){return a(Wh)});function Yh(a){this.te=a}
function Zh(a){return new Yh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var $h=[Zh("data"),Zh("http"),Zh("https"),Zh("mailto"),Zh("ftp"),new Yh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ai(a){var b=bi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ci(){var a=[];ai(function(b){a.push(b)});
return a}
var bi={jf:"allow-forms",kf:"allow-modals",lf:"allow-orientation-lock",mf:"allow-pointer-lock",nf:"allow-popups",pf:"allow-popups-to-escape-sandbox",qf:"allow-presentation",rf:"allow-same-origin",sf:"allow-scripts",tf:"allow-top-navigation",uf:"allow-top-navigation-by-user-activation"},di=bb(function(){return ci()});
function ei(){var a=fi(),b={};db(di(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function fi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function gi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var hi=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var ii="undefined"!==typeof TextEncoder?new TextEncoder:null,ji=ii?function(a){return ii.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ki(a){vd.call(this);var b=this;this.s=this.j=0;this.Ea=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(li(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||mi(this)}
w(ki,vd);function ni(){var a=oi;ki.h||(ki.h=new ki(a));return ki.h}
ki.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Ea.qa(this.s);delete ki.h};
ki.prototype.wa=function(){return this.i};
function mi(a){a.s=a.Ea.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(li(a),3):c.yield(li(a),3);mi(a);c.h=0})},3E4)}
function li(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ea.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.D=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Ea.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?wd(a,"networkstatus-online"):wd(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.v(3)}})})}
;function pi(){this.data=[];this.h=-1}
pi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
pi.prototype.get=function(a){return!!this.data[a]};
function qi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function ri(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
ri.prototype[Symbol.iterator]=function(){return this};
ri.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function si(a,b){return new ri(a,b)}
;function ti(){this.blockSize=-1}
;function ui(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(ui,ti);ui.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function vi(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
ui.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)vi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vi(this,e);f=0;break}}this.i=f;this.l+=b}};
ui.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;vi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function wi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function xi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function yi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:wi(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function zi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):yi(a,"inverted-hdpi")&&xi(a,Array.prototype.filter.call(a.classList?a.classList:wi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ai(){}
Ai.prototype.next=function(){return Bi};
var Bi={done:!0,value:void 0};function Ci(a){return{value:a,done:!1}}
Ai.prototype.Ga=function(){return this};function Di(a){if(a instanceof Ei||a instanceof Fi||a instanceof Gi)return a;if("function"==typeof a.next)return new Ei(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ei(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ga)return new Ei(function(){return a.Ga()});
throw Error("Not an iterator or iterable.");}
function Ei(a){this.i=a}
Ei.prototype.Ga=function(){return new Fi(this.i())};
Ei.prototype[Symbol.iterator]=function(){return new Gi(this.i())};
Ei.prototype.h=function(){return new Gi(this.i())};
function Fi(a){this.i=a}
w(Fi,Ai);Fi.prototype.next=function(){return this.i.next()};
Fi.prototype[Symbol.iterator]=function(){return new Gi(this.i)};
Fi.prototype.h=function(){return new Gi(this.i)};
function Gi(a){Ei.call(this,function(){return a});
this.j=a}
w(Gi,Ei);Gi.prototype.next=function(){return this.j.next()};function Hi(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Hi)for(c=a.Dc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Hi.prototype;m.Dc=function(){Ii(this);return this.h.concat()};
m.has=function(a){return Ji(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ki;Ii(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ki(a,b){return a===b}
m.Ob=function(){return 0==this.size};
m.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Ji(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&Ii(this),!0):!1};
function Ii(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ji(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ji(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Ji(this.i,a)?this.i[a]:b};
m.set=function(a,b){Ji(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Dc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Hi(this)};
m.keys=function(){return Di(this.Ga(!0)).h()};
m.values=function(){return Di(this.Ga(!1)).h()};
m.entries=function(){var a=this;return si(this.keys(),function(b){return[b,a.get(b)]})};
m.Ga=function(a){Ii(this);var b=0,c=this.Ya,d=this,e=new Ai;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Bi;var f=d.h[b++];return Ci(a?f:d.i[f])};
return e};
function Ji(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function L(a){G.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Xa(L,G);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Hb(a)}return!1};
m.Hb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ab=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Li(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Hb(c)}}return 0!=e}return!1};
function Li(a,b,c){Pd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Hb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){L.Aa.M.call(this);this.clear();this.j.length=0};function Mi(a){this.h=a}
Mi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new bh).serialize(b))};
Mi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Mi.prototype.remove=function(a){this.h.remove(a)};function Ni(a){this.h=a}
Xa(Ni,Mi);function Oi(a){this.data=a}
function Pi(a){return void 0===a||a instanceof Oi?a:new Oi(a)}
Ni.prototype.set=function(a,b){Ni.Aa.set.call(this,a,Pi(b))};
Ni.prototype.i=function(a){a=Ni.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ni.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qi(a){this.h=a}
Xa(Qi,Ni);Qi.prototype.set=function(a,b,c){if(b=Pi(b)){if(c){if(c<Wa()){Qi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Qi.Aa.set.call(this,a,b)};
Qi.prototype.i=function(a){var b=Qi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Qi.prototype.remove.call(this,a);else return b}};function Ri(){}
;function Si(){}
Xa(Si,Ri);Si.prototype[Symbol.iterator]=function(){return Di(this.Ga(!0)).h()};
Si.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ti(a){this.h=a}
Xa(Ti,Si);m=Ti.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Ga=function(a){var b=0,c=this.h,d=new Ai;d.next=function(){if(b>=c.length)return Bi;var e=c.key(b++);if(a)return Ci(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ci(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ui(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(Ui,Ti);function Vi(a,b){this.i=a;this.h=null;var c;if(c=Kc)c=!(9<=Number(Yc));if(c){Wi||(Wi=new Hi);this.h=Wi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Wi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(Vi,Si);var Xi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Wi=null;function Yi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Xi[b]})}
m=Vi.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Yi(a),b);Zi(this)};
m.get=function(a){a=this.h.getAttribute(Yi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Yi(a));Zi(this)};
m.Ga=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ai;d.next=function(){if(b>=c.length)return Bi;var e=c[b++];if(a)return Ci(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ci(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Zi(this)};
function Zi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function $i(a,b){this.i=a;this.h=b+"::"}
Xa($i,Si);$i.prototype.set=function(a,b){this.i.set(this.h+a,b)};
$i.prototype.get=function(a){return this.i.get(this.h+a)};
$i.prototype.remove=function(a){this.i.remove(this.h+a)};
$i.prototype.Ga=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ai;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ci(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},aj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var bj={pb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},cj={pb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
kd:function(a){return[].concat.apply([],a)}};
O.Ve=function(){aj?(O.mb=Uint8Array,O.Ia=Uint16Array,O.Md=Int32Array,O.assign(O,bj)):(O.mb=Array,O.Ia=Array,O.Md=Array,O.assign(O,cj))};
O.Ve();var dj=!0;try{new Uint8Array(1)}catch(a){dj=!1}
function ej(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.mb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var fj={};fj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var gj={},hj,ij=[],jj=0;256>jj;jj++){hj=jj;for(var kj=0;8>kj;kj++)hj=hj&1?3988292384^hj>>>1:hj>>>1;ij[jj]=hj}gj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^ij[(a^b[d])&255];return a^-1};var lj={};lj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function mj(a){for(var b=a.length;0<=--b;)a[b]=0}
var nj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],pj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],qj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],rj=Array(576);mj(rj);var sj=Array(60);mj(sj);var tj=Array(512);mj(tj);var uj=Array(256);mj(uj);var vj=Array(29);mj(vj);var wj=Array(30);mj(wj);function xj(a,b,c,d,e){this.Ed=a;this.de=b;this.ce=c;this.Yd=d;this.ye=e;this.nd=a&&a.length}
var yj,zj,Aj;function Bj(a,b){this.jd=a;this.Cb=0;this.Xa=b}
function Cj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Dj(a,b,c){a.fa>16-c?(a.ka|=b<<a.fa&65535,Cj(a,a.ka),a.ka=b>>16-a.fa,a.fa+=c-16):(a.ka|=b<<a.fa&65535,a.fa+=c)}
function Ej(a,b,c){Dj(a,c[2*b],c[2*b+1])}
function Fj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Gj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Fj(d[e]++,e))}
function Hj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.cb[2*b]=0;for(b=0;19>b;b++)a.ga[2*b]=0;a.ra[512]=1;a.Pa=a.Gb=0;a.ya=a.matches=0}
function Ij(a){8<a.fa?Cj(a,a.ka):0<a.fa&&(a.V[a.pending++]=a.ka);a.ka=0;a.fa=0}
function Jj(a,b,c){Ij(a);Cj(a,c);Cj(a,~c);O.pb(a.V,a.window,b,c,a.pending);a.pending+=c}
function Kj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Lj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Na;){e<a.Na&&Kj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Kj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Mj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Lb+2*d]<<8|a.V[a.Lb+2*d+1];var f=a.V[a.Hc+d];d++;if(0===e)Ej(a,f,b);else{var g=uj[f];Ej(a,g+256+1,b);var h=nj[g];0!==h&&(f-=vj[g],Dj(a,f,h));e--;g=256>e?tj[e]:tj[256+(e>>>7)];Ej(a,g,c);h=oj[g];0!==h&&(e-=wj[g],Dj(a,e,h))}}while(d<a.ya)}Ej(a,256,b)}
function Nj(a,b){var c=b.jd,d=b.Xa.Ed,e=b.Xa.nd,f=b.Xa.Yd,g,h=-1;a.Na=0;a.wb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Na]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Na;){var k=a.X[++a.Na]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Pa--;e&&(a.Gb-=d[2*k+1])}b.Cb=h;for(g=a.Na>>1;1<=g;g--)Lj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Na--],Lj(a,c,1),d=a.X[1],a.X[--a.wb]=g,a.X[--a.wb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Lj(a,c,1);while(2<=a.Na);a.X[--a.wb]=
a.X[1];g=b.jd;k=b.Cb;d=b.Xa.Ed;e=b.Xa.nd;f=b.Xa.de;var l=b.Xa.ce,n=b.Xa.ye,r,t=0;for(r=0;15>=r;r++)a.Ka[r]=0;g[2*a.X[a.wb]+1]=0;for(b=a.wb+1;573>b;b++){var p=a.X[b];r=g[2*g[2*p+1]+1]+1;r>n&&(r=n,t++);g[2*p+1]=r;if(!(p>k)){a.Ka[r]++;var x=0;p>=l&&(x=f[p-l]);var y=g[2*p];a.Pa+=y*(r+x);e&&(a.Gb+=y*(d[2*p+1]+x))}}if(0!==t){do{for(r=n-1;0===a.Ka[r];)r--;a.Ka[r]--;a.Ka[r+1]+=2;a.Ka[n]--;t-=2}while(0<t);for(r=n;0!==r;r--)for(p=a.Ka[r];0!==p;)d=a.X[--b],d>k||(g[2*d+1]!==r&&(a.Pa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),p--)}Gj(c,h,a.Ka)}
function Oj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ga[2*l]+=g:0!==l?(l!==e&&a.ga[2*l]++,a.ga[32]++):10>=g?a.ga[34]++:a.ga[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Pj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Ej(a,l,a.ga);while(0!==--g)}else 0!==l?(l!==e&&(Ej(a,l,a.ga),g--),Ej(a,16,a.ga),Dj(a,g-3,2)):10>=g?(Ej(a,17,a.ga),Dj(a,g-3,3)):(Ej(a,18,a.ga),Dj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Qj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var Rj=!1;function Sj(a,b,c){a.V[a.Lb+2*a.ya]=b>>>8&255;a.V[a.Lb+2*a.ya+1]=b&255;a.V[a.Hc+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(uj[c]+256+1)]++,a.cb[2*(256>b?tj[b]:tj[256+(b>>>7)])]++);return a.ya===a.Pb-1}
;function Tj(a,b){a.msg=lj[b];return b}
function Uj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Vj(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(O.pb(a.output,b.V,b.Sb,c,a.Db),a.Db+=c,b.Sb+=c,a.Sc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Sb=0))}
function Wj(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.H.xc&&(a.H.xc=Qj(a));Nj(a,a.hc);Nj(a,a.cc);Oj(a,a.ra,a.hc.Cb);Oj(a,a.cb,a.cc.Cb);Nj(a,a.Zc);for(e=18;3<=e&&0===a.ga[2*qj[e]+1];e--);a.Pa+=3*(e+1)+14;var f=a.Pa+3+7>>>3;var g=a.Gb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Dj(a,b?1:0,3),Jj(a,c,d);else if(4===a.strategy||g===f)Dj(a,2+(b?1:0),3),Mj(a,rj,sj);else{Dj(a,4+(b?1:0),3);c=a.hc.Cb+1;d=a.cc.Cb+1;e+=1;Dj(a,c-257,5);Dj(a,d-1,5);Dj(a,e-4,4);for(f=0;f<e;f++)Dj(a,a.ga[2*
qj[f]+1],3);Pj(a,a.ra,c-1);Pj(a,a.cb,d-1);Mj(a,a.ra,a.cb)}Hj(a);b&&Ij(a);a.ta=a.o;Vj(a.H)}
function P(a,b){a.V[a.pending++]=b}
function Xj(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function Yj(a,b){var c=a.qd,d=a.o,e=a.xa,f=a.rd,g=a.o>a.ia-262?a.o-(a.ia-262):0,h=a.window,k=a.Za,l=a.Ha,n=a.o+258,r=h[d+e-1],t=h[d+e];a.xa>=a.md&&(c>>=2);f>a.u&&(f=a.u);do{var p=b;if(h[p+e]===t&&h[p+e-1]===r&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<n;);p=258-(n-d);d=n-258;if(p>e){a.Bb=b;e=p;if(p>=f)break;r=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function Zj(a){var b=a.ia,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){O.pb(a.window,a.window,b,b,0);a.Bb-=b;a.o-=b;a.ta-=b;var e=c=a.fc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ja)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,O.pb(c,e.input,e.ib,g,f),1===e.state.wrap?e.F=fj(e.F,c,g,f):2===e.state.wrap&&(e.F=gj(e.F,c,g,f)),e.ib+=g,e.lb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.J=a.window[d],
a.J=(a.J<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.J=(a.J<<a.Ma^a.window[d+3-1])&a.La,a.Ha[d&a.Za]=a.head[a.J],a.head[a.J]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.H.ja)}
function ak(a,b){for(var c;;){if(262>a.u){Zj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ia-262&&(a.P=Yj(a,c));if(3<=a.P)if(c=Sj(a,a.o-a.Bb,a.P-3),a.u-=a.P,a.P<=a.Ic&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.Ma^a.window[a.o+1])&a.La;else c=Sj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Wj(a,!1),0===a.H.K))return 1}a.sa=2>a.o?a.o:2;return 4===b?(Wj(a,!0),0===a.H.K?3:4):a.ya&&(Wj(a,!1),0===a.H.K)?1:2}
function bk(a,b){for(var c,d;;){if(262>a.u){Zj(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,c=a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.ud=a.Bb;a.P=2;0!==c&&a.xa<a.Ic&&a.o-c<=a.ia-262&&(a.P=Yj(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.Bb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Sj(a,a.o-1-a.ud,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.Ma^a.window[a.o+3-1])&a.La,a.Ha[a.o&a.Za]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.gb=0;a.P=2;a.o++;if(c&&(Wj(a,!1),0===a.H.K))return 1}else if(a.gb){if((c=Sj(a,0,a.window[a.o-1]))&&Wj(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.gb=1,a.o++,a.u--}a.gb&&(Sj(a,0,a.window[a.o-1]),a.gb=0);a.sa=2>a.o?a.o:2;return 4===b?(Wj(a,!0),0===a.H.K?3:4):a.ya&&(Wj(a,!1),0===a.H.K)?1:2}
function ck(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Zj(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Sj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Sj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Wj(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(Wj(a,!0),0===a.H.K?3:4):
a.ya&&(Wj(a,!1),0===a.H.K)?1:2}
function dk(a,b){for(var c;;){if(0===a.u&&(Zj(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Sj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Wj(a,!1),0===a.H.K))return 1}a.sa=0;return 4===b?(Wj(a,!0),0===a.H.K?3:4):a.ya&&(Wj(a,!1),0===a.H.K)?1:2}
function ek(a,b,c,d,e){this.le=a;this.xe=b;this.Ae=c;this.we=d;this.ge=e}
var fk;fk=[new ek(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){Zj(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Wj(a,!1),0===a.H.K)return 1;if(a.o-a.ta>=a.ia-262&&(Wj(a,!1),0===a.H.K))return 1}a.sa=0;if(4===b)return Wj(a,!0),0===a.H.K?3:4;a.o>a.ta&&Wj(a,!1);return 1}),
new ek(4,4,8,4,ak),new ek(4,5,16,8,ak),new ek(4,6,32,32,ak),new ek(4,4,16,16,bk),new ek(8,16,32,32,bk),new ek(8,16,128,128,bk),new ek(8,32,128,256,bk),new ek(32,128,258,1024,bk),new ek(32,258,258,4096,bk)];
function gk(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Sb=this.za=0;this.B=null;this.Ca=0;this.method=8;this.zb=-1;this.Za=this.Uc=this.ia=0;this.window=null;this.Kd=0;this.head=this.Ha=null;this.rd=this.md=this.strategy=this.level=this.Ic=this.qd=this.xa=this.u=this.Bb=this.o=this.gb=this.ud=this.P=this.ta=this.Ma=this.La=this.Ec=this.fc=this.J=0;this.ra=new O.Ia(1146);this.cb=new O.Ia(122);this.ga=new O.Ia(78);Uj(this.ra);Uj(this.cb);Uj(this.ga);this.Zc=this.cc=this.hc=
null;this.Ka=new O.Ia(16);this.X=new O.Ia(573);Uj(this.X);this.wb=this.Na=0;this.depth=new O.Ia(573);Uj(this.depth);this.fa=this.ka=this.sa=this.matches=this.Gb=this.Pa=this.Lb=this.ya=this.Pb=this.Hc=0}
function hk(a,b){if(!a||!a.state||5<b||0>b)return a?Tj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return Tj(a,0===a.K?-5:-2);c.H=a;var d=c.zb;c.zb=b;if(42===c.status)if(2===c.wrap)a.F=0,P(c,31),P(c,139),P(c,8),c.B?(P(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),P(c,c.B.time&255),P(c,c.B.time>>8&255),P(c,c.B.time>>16&255),P(c,c.B.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(P(c,c.B.Ta.length&255),P(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.F=gj(a.F,c.V,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Xj(c,e+(31-e%31));0!==c.o&&(Xj(c,a.F>>>16),Xj(c,a.F&65535));a.F=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.Ca<(c.B.Ta.length&65535)&&(c.pending!==c.za||(c.B.Ua&&
c.pending>e&&(a.F=gj(a.F,c.V,c.pending-e,e)),Vj(a),e=c.pending,c.pending!==c.za));)P(c,c.B.Ta[c.Ca]&255),c.Ca++;c.B.Ua&&c.pending>e&&(a.F=gj(a.F,c.V,c.pending-e,e));c.Ca===c.B.Ta.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.za&&(c.B.Ua&&c.pending>e&&(a.F=gj(a.F,c.V,c.pending-e,e)),Vj(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.B.name.length?c.B.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.F=gj(a.F,
c.V,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.za&&(c.B.Ua&&c.pending>e&&(a.F=gj(a.F,c.V,c.pending-e,e)),Vj(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.B.comment.length?c.B.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.F=gj(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.za&&Vj(a),c.pending+2<=c.za&&(P(c,a.F&255),P(c,a.F>>
8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(Vj(a),0===a.K)return c.zb=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Tj(a,-5);if(666===c.status&&0!==a.ja)return Tj(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?dk(c,b):3===c.strategy?ck(c,b):fk[c.level].ge(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.zb=-1),0;if(2===d&&(1===b?(Dj(c,2,3),Ej(c,256,rj),16===c.fa?(Cj(c,c.ka),c.ka=0,c.fa=0):8<=c.fa&&(c.V[c.pending++]=
c.ka&255,c.ka>>=8,c.fa-=8)):5!==b&&(Dj(c,0,3),Jj(c,0,0),3===b&&(Uj(c.head),0===c.u&&(c.o=0,c.ta=0,c.sa=0))),Vj(a),0===a.K))return c.zb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.F&255),P(c,a.F>>8&255),P(c,a.F>>16&255),P(c,a.F>>24&255),P(c,a.lb&255),P(c,a.lb>>8&255),P(c,a.lb>>16&255),P(c,a.lb>>24&255)):(Xj(c,a.F>>>16),Xj(c,a.F&65535));Vj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ik={};ik=function(){this.input=null;this.lb=this.ja=this.ib=0;this.output=null;this.Sc=this.K=this.Db=0;this.msg="";this.state=null;this.xc=2;this.F=0};var jk=Object.prototype.toString;
function kk(a){if(!(this instanceof kk))return new kk(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new ik;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Tj(b,-2);else{8===e&&(e=9);var k=new gk;b.state=k;k.H=b;k.wrap=h;k.B=null;k.Uc=e;k.ia=1<<k.Uc;k.Za=k.ia-1;k.Ec=f+7;k.fc=1<<k.Ec;k.La=k.fc-1;k.Ma=~~((k.Ec+3-1)/3);k.window=new O.mb(2*k.ia);k.head=new O.Ia(k.fc);k.Ha=new O.Ia(k.ia);k.Pb=1<<f+6;k.za=4*k.Pb;k.V=new O.mb(k.za);k.Lb=1*k.Pb;k.Hc=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.lb=b.Sc=0;b.xc=2;c=b.state;c.pending=0;c.Sb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.zb=0;if(!Rj){d=Array(16);for(f=g=0;28>f;f++)for(vj[f]=g,e=0;e<1<<nj[f];e++)uj[g++]=f;uj[g-1]=f;for(f=g=0;16>f;f++)for(wj[f]=g,e=0;e<1<<oj[f];e++)tj[g++]=f;for(g>>=7;30>f;f++)for(wj[f]=g<<7,e=0;e<1<<oj[f]-7;e++)tj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)rj[2*e+1]=8,e++,d[8]++;for(;255>=e;)rj[2*e+1]=9,e++,d[9]++;for(;279>=e;)rj[2*e+1]=7,e++,d[7]++;for(;287>=e;)rj[2*e+1]=8,e++,d[8]++;Gj(rj,287,d);for(e=0;30>e;e++)sj[2*e+1]=5,sj[2*e]=Fj(e,5);yj=new xj(rj,nj,257,286,15);zj=new xj(sj,
oj,0,30,15);Aj=new xj([],pj,0,19,7);Rj=!0}c.hc=new Bj(c.ra,yj);c.cc=new Bj(c.cb,zj);c.Zc=new Bj(c.ga,Aj);c.ka=0;c.fa=0;Hj(c);c=0}else c=Tj(b,-2);0===c&&(b=b.state,b.Kd=2*b.ia,Uj(b.head),b.Ic=fk[b.level].xe,b.md=fk[b.level].le,b.rd=fk[b.level].Ae,b.qd=fk[b.level].we,b.o=0,b.ta=0,b.u=0,b.sa=0,b.P=b.xa=2,b.gb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(lj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=ej(a.dictionary):
"[object ArrayBuffer]"===jk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=fj(a.F,f,g,0));l.wrap=0;g>=l.ia&&(0===b&&(Uj(l.head),l.o=0,l.ta=0,l.sa=0),c=new O.mb(l.ia),O.pb(c,f,g-l.ia,l.ia,0),f=c,g=l.ia);c=a.ja;d=a.ib;e=a.input;a.ja=g;a.ib=0;a.input=f;for(Zj(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Ma^l.window[f+3-1])&l.La,l.Ha[f&l.Za]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;Zj(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.P=l.xa=2;l.gb=0;a.ib=d;a.input=e;a.ja=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(lj[b]);this.Kf=!0}}
kk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=ej(a):"[object ArrayBuffer]"===jk.call(a)?c.input=new Uint8Array(a):c.input=a;c.ib=0;c.ja=c.input.length;do{0===c.K&&(c.output=new O.mb(d),c.Db=0,c.K=d);a=hk(c,e);if(1!==a&&0!==a)return lk(this,a),this.ended=!0,!1;if(0===c.K||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=O.Rc(c.output,c.Db);b=f;f=f.length;if(65537>f&&(b.subarray&&dj||!b.subarray))b=
String.fromCharCode.apply(null,O.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.Rc(c.output,c.Db),this.chunks.push(b)}while((0<c.ja||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Tj(c,-2):(c.state=null,a=113===d?Tj(c,-3):0)):a=-2,lk(this,a),this.ended=!0,0===a;2===e&&(lk(this,0),c.K=0);return!0};
function lk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):O.kd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function mk(a,b){b=b||{};b.gzip=!0;b=new kk(b);b.push(a,!0);if(b.err)throw b.msg||lj[b.err];return b.result}
;function nk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function ok(a){this.name=a}
;var pk=new ok("rawColdConfigGroup");var qk=new ok("rawHotConfigGroup");function rk(a){this.A=Cf(a)}
w(rk,bg);var sk=new ok("continuationCommand");var tk=new ok("webCommandMetadata");var uk=new ok("signalServiceEndpoint");var vk={zf:"EMBEDDED_PLAYER_MODE_UNKNOWN",wf:"EMBEDDED_PLAYER_MODE_DEFAULT",yf:"EMBEDDED_PLAYER_MODE_PFP",xf:"EMBEDDED_PLAYER_MODE_PFL"};var wk=new ok("feedbackEndpoint");function xk(a){this.A=Cf(a)}
w(xk,bg);var yk=new ok("webPlayerShareEntityServiceEndpoint");var zk=new ok("playlistEditEndpoint");var Ak=new ok("modifyChannelNotificationPreferenceEndpoint");var Bk=new ok("unsubscribeEndpoint");var Ck=new ok("subscribeEndpoint");function Dk(){var a=Ek;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Fk(a){D("yt.ads.biscotti.lastId_",a)}
;function Gk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Hk=C.window,Ik,Jk,Kk=(null==Hk?void 0:null==(Ik=Hk.yt)?void 0:Ik.config_)||(null==Hk?void 0:null==(Jk=Hk.ytcfg)?void 0:Jk.data_)||{};D("yt.config_",Kk);function Lk(){Gk(Kk,arguments)}
function R(a,b){return a in Kk?Kk[a]:b}
function Mk(a){var b=Kk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Nk=[];function Ok(a){Nk.forEach(function(b){return b(a)})}
function Pk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Qk(b)}}:a}
function Qk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Lk("ERRORS",b));Ok(a)}
function Rk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Lk("ERRORS",f))}
;var Sk=/^[\w.]*$/,Tk={q:!0,search_query:!0};function Uk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Vk(f[0]||""),h=Vk(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,l=f[0],n=String(Uk);k.args=[{key:l,value:f[1],query:a,method:Wk==n?"unchanged":n}];Tk.hasOwnProperty(l)||Rk(k)}}return c}
var Wk=String(Uk);function Xk(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yk(a){"?"==a.charAt(0)&&(a=a.substr(1));return Uk(a,"&")}
function Zk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Yk(1<a.length?a[1]:a[0])):{}}
function $k(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
function al(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function Vk(a){return a&&a.match(Sk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function bl(a){var b=cl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=hi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Fa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Fh:g;try{var h=g.history.length}catch(Fa){h=0}e.u_his=h;var k;e.u_h=null==(k=Fh.screen)?void 0:k.height;var l;e.u_w=null==(l=Fh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Fh.screen)?void 0:n.availHeight;var r;e.u_aw=
null==(r=Fh.screen)?void 0:r.availWidth;var t;e.u_cd=null==(t=Fh.screen)?void 0:t.colorDepth}catch(Fa){}h=b.h;try{var p=h.screenX;var x=h.screenY}catch(Fa){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Fa){}try{var H=h.innerWidth;var I=h.innerHeight}catch(Fa){}try{var M=h.screenLeft;var N=h.screenTop}catch(Fa){}try{H=h.innerWidth,I=h.innerHeight}catch(Fa){}try{var K=h.screen.availWidth;var V=h.screen.availTop}catch(Fa){}p=[M,N,p,x,K,V,y,z,H,I];try{var Y=(b.h.top||window).document,fa="CSS1Compat"==
Y.compatMode?Y.documentElement:Y.body;var pa=(new Cd(fa.clientWidth,fa.clientHeight)).round()}catch(Fa){pa=new Cd(-12245933,-12245933)}Y=pa;pa={};var ma=void 0===ma?C:ma;fa=new pi;"SVGElement"in ma&&"createElementNS"in ma.document&&fa.set(0);x=ei();x["allow-top-navigation-by-user-activation"]&&fa.set(1);x["allow-popups-to-escape-sandbox"]&&fa.set(2);ma.crypto&&ma.crypto.subtle&&fa.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&fa.set(4);ma=qi(fa);pa.bc=ma;pa.bih=Y.height;pa.biw=Y.width;pa.brdim=p.join();
b=b.i;b=(pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,pa.wgl=!!Fh.WebGLRenderingContext,pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var cl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Xk(bl(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function S(a){a=R("EXPERIMENT_FLAGS",{})[a];return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=R("EXPERIMENT_FLAGS",{})[a];return void 0===a&&void 0!==b?b:Number(a||0)}
function dl(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var el="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function fl(){if(!el)return null;var a=el();return"open"in a?a:null}
function gl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function hl(a,b){"function"===typeof a&&(a=Pk(a));return window.setTimeout(a,b)}
;var il="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ka(il),["client_dev_set_cookie"]);var jl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},kl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ka(il)),ll=!1;
function ml(a,b){b=void 0===b?{}:b;var c=al(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in jl){var f=R(jl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&R("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==R("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||
!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=Xk(bl()));return b}
function nl(a){var b=window.location.search,c=cc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&al(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yk(b),f={};db(kl,function(g){e[g]&&(f[g]=e[g])});
return $k(a,f||{},!1)}
function ol(a,b){var c=b.format||"JSON";a=pl(a,b);var d=ql(a,b),e=!1,f=rl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=gl(k),n=null,r=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||r||t)n=sl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};r=b.context||C;l?b.onSuccess&&b.onSuccess.call(r,k,n):b.onError&&b.onError.call(r,k,n);b.onFinish&&b.onFinish.call(r,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=hl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function pl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$k(a,b||{},!0);return a}
function ql(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Yk(e),ub(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):jc(e));f=e||f&&!nb(f);!ll&&f&&"POST"!=b.method&&(ll=!0,Qk(Error("AJAX request with postData should use POST")));return e}
function sl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Rk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?tl(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=ul(g)})}d&&vl(e);
return e}
function vl(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=wb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else vl(a[b])}}
function tl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ul(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wl(a,b){b.method="POST";b.postParams||(b.postParams={});return ol(a,b)}
function rl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Pk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=fl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=nl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ml(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var xl=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
mc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
mc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
mc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var zl={Va:[],Sa:[{callback:yl,weight:500}]};function yl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Al(){this.Sa=[];this.Va=[]}
var Bl;function Cl(){if(!Bl){var a=Bl=new Al;a.Va.length=0;a.Sa.length=0;zl.Va&&a.Va.push.apply(a.Va,zl.Va);zl.Sa&&a.Sa.push.apply(a.Sa,zl.Sa)}return Bl}
;var Dl=new L;function El(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Fl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Fl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Fl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Fl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Gl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Hl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=El(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Hl(e+".ve",f,g,h):0;d+=g;d+=Hl(e,a[e],b,c);if(500<d)break}}else c[b]=Il(a),d+=c[b].length;else c[b]=Il(a),d+=c[b].length;return d}
function Hl(a,b,c,d){c+="."+a;a=Il(b);d[c]=a;return c.length+a.length}
function Il(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Jl(){this.Ze=!0}
function Kl(){Jl.h||(Jl.h=new Jl);return Jl.h}
function Ll(a,b){a={};var c=wg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Kk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Kk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Ml={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Nl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Ol(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Pl(a,b,c,d,e){sg.set(""+a,b,{ic:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ql(a){return sg.get(""+a,void 0)}
function Rl(a,b,c){sg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Sl(){if(!sg.isEnabled())return!1;if(!sg.Ob())return!0;sg.set("TESTCOOKIESENABLED","1",{ic:60});if("1"!==sg.get("TESTCOOKIESENABLED"))return!1;sg.remove("TESTCOOKIESENABLED");return!0}
;var Tl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Tl);function Ul(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ql(this.h);a&&this.parse(a)}
var Vl;function Wl(){Vl||(Vl=new Ul);return Vl}
m=Ul.prototype;m.get=function(a,b){Xl(a);Yl(a);a=void 0!==Tl[a]?Tl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){Xl(a);Yl(a);if(null==b)throw Error("ExpectedNotNull");Tl[a]=b.toString()};
function Zl(a){return!!(($l("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){Xl(a);Yl(a);delete Tl[a]};
m.clear=function(){for(var a in Tl)delete Tl[a]};
function Yl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Xl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function $l(a){a=void 0!==Tl[a]?Tl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Tl[d]=c.toString())}};var am={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},bm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function cm(){var a=C.navigator;return a?a.connection:void 0}
function dm(){var a=cm();if(a){var b=am[a.type||"unknown"]||"CONN_UNKNOWN";a=am[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function em(){var a=cm();if(null!=a&&a.effectiveType)return bm.hasOwnProperty(a.effectiveType)?bm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function fm(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ka(b))}
w(fm,Error);function gm(){try{return hm(),!0}catch(a){return!1}}
function hm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new fm("Datasync ID not set",void 0===a?"unknown":a);}
;function im(){}
function jm(a,b){return oi.bb(a,0,b)}
im.prototype.oa=function(a,b){return this.bb(a,1,b)};
im.prototype.Ib=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var km=T("web_emulated_idle_callback_delay",300),lm=1E3/60-3,mm=[8,5,4,3,2,1,0];
function nm(a){a=void 0===a?{}:a;G.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(mm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.wc=a.timeout||1;this.D=lm;this.s=0;this.ma=this.Ce.bind(this);this.vc=this.cf.bind(this);this.Ba=this.Qd.bind(this);this.Ja=this.me.bind(this);this.ob=this.Fe.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(nm,G);m=nm.prototype;m.Ib=function(a){var b=Wa();om(this,a);a=Wa()-b;this.m||(this.D-=a)};
m.bb=function(a,b,c){++this.Y;if(10===b)return this.Ib(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&pm(this)!==this.s&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function qm(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function rm(a){return!a.isHidden()&&a.ea}
function pm(a){if(a.i[8].length){if(a.S)return 4;if(rm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?rm(a)?3:2:1;return 0}
m.Qb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function om(a,b){try{b()}catch(c){a.Qb(c)}}
function sm(a){for(var b=v(mm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.me=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;tm(this,b);this.da=!1};
m.cf=function(){tm(this)};
m.Qd=function(){um(this)};
m.Fe=function(a){this.S=!0;var b=pm(this);4===b&&b!==this.s&&(this.stop(),this.start());tm(this,void 0,a);this.S=!1};
m.Ce=function(){this.isHidden()||um(this);this.h&&(this.stop(),this.start())};
function um(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&om(a,e)}wm(a);a.m=!1;sm(a)&&a.start();b=Wa()-b;a.D-=b}
function wm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function tm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Qb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&om(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&om(a,c)}while(c&&Wa()<b)}a.m=!1;wm(a);a.D=lm;sm(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=pm(this),this.s){case 1:var a=this.Ja;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,km);break;case 2:this.h=window.setTimeout(this.vc,this.wc);break;case 3:this.h=window.requestAnimationFrame(this.ob);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){qm(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);G.prototype.M.call(this)};var xm=E("yt.scheduler.instance.timerIdMap_")||{},ym=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),zm=0,Am=0;function Bm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new nm(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Cm(){Dm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(vc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Dm(){qm(Bm());for(var a in xm)xm.hasOwnProperty(a)&&delete xm[Number(a)]}
function Em(a,b,c){if(!c)return c=void 0===c,-Bm().bb(a,b,c);var d=window.setTimeout(function(){var e=Bm().bb(a,b);xm[d]=e},c);
return d}
function Fm(a){Bm().Ib(a)}
function Gm(a){var b=Bm();if(0>a)b.qa(-a);else{var c=xm[a];c?(b.qa(c),delete xm[a]):window.clearTimeout(a)}}
function Hm(){Im()}
function Im(){window.clearTimeout(zm);Bm().start()}
function Jm(){Bm().pause();window.clearTimeout(zm);zm=window.setTimeout(Hm,ym)}
function Km(){window.clearTimeout(Am);Am=window.setTimeout(function(){Lm(0)},ym)}
function Lm(a){Km();var b=Bm();b.l=a;b.start()}
function Mm(a){Km();var b=Bm();b.l>a&&(b.l=a,b.start())}
function Nm(){window.clearTimeout(Am);var a=Bm();a.l=0;a.start()}
function Om(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Cm),D("yt.scheduler.instance.addJob",Em),D("yt.scheduler.instance.addImmediateJob",Fm),D("yt.scheduler.instance.cancelJob",Gm),D("yt.scheduler.instance.cancelAllJobs",Dm),D("yt.scheduler.instance.start",Im),D("yt.scheduler.instance.pause",Jm),D("yt.scheduler.instance.setPriorityThreshold",Lm),D("yt.scheduler.instance.enablePriorityThreshold",Mm),D("yt.scheduler.instance.clearPriorityThreshold",Nm),D("yt.scheduler.initialized",
!0))}
;function Pm(){im.apply(this,arguments)}
w(Pm,im);function Qm(){Pm.h||(Pm.h=new Pm);return Pm.h}
Pm.prototype.bb=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):hl(a,c||0)};
Pm.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Pm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Pm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var oi=Qm();S("web_scheduler_auto_init")&&Om();function Rm(a){var b=new Ui;(b=b.isAvailable()?a?new $i(b,a):b:null)||(a=new Vi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Qi(a):null;this.i=document.domain||window.location.hostname}
Rm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new bh).serialize(b))}catch(f){return}else e=escape(b);Pl(a,e,c,this.i)};
Rm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ql(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rm.prototype.remove=function(a){this.h&&this.h.remove(a);Rl(a,"/",this.i)};var Sm=function(){var a;return function(){a||(a=new Rm("ytidb"));return a}}();
function Tm(){var a;return null==(a=Sm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Um=[],Vm,Wm=!1;function Xm(){var a={};for(Vm=new Ym(void 0===a.handleError?Zm:a.handleError,void 0===a.logEvent?$m:a.logEvent);0<Um.length;)switch(a=Um.shift(),a.type){case "ERROR":Vm.Qb(a.payload);break;case "EVENT":Vm.logEvent(a.eventType,a.payload)}}
function an(a){Wm||(Vm?Vm.Qb(a):(Um.push({type:"ERROR",payload:a}),10<Um.length&&Um.shift()))}
function bn(a,b){Wm||(Vm?Vm.logEvent(a,b):(Um.push({type:"EVENT",eventType:a,payload:b}),10<Um.length&&Um.shift()))}
;function cn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function dn(a){return a.substr(0,a.indexOf(":"))||a}
;var en=xe||ye;function fn(a){var b=Nb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var gn={},hn=(gn.AUTH_INVALID="No user identifier specified.",gn.EXPLICIT_ABORT="Transaction was explicitly aborted.",gn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",gn.MISSING_INDEX="Index not created.",gn.MISSING_OBJECT_STORES="Object stores not created.",gn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",gn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",gn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
gn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",gn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",gn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",gn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",gn),jn={},kn=(jn.AUTH_INVALID="ERROR",jn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",jn.EXPLICIT_ABORT="IGNORED",jn.IDB_NOT_SUPPORTED="ERROR",jn.MISSING_INDEX=
"WARNING",jn.MISSING_OBJECT_STORES="ERROR",jn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",jn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",jn.QUOTA_EXCEEDED="WARNING",jn.QUOTA_MAYBE_EXCEEDED="WARNING",jn.UNKNOWN_ABORT="WARNING",jn.INCOMPATIBLE_DB_VERSION="WARNING",jn),ln={},mn=(ln.AUTH_INVALID=!1,ln.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ln.EXPLICIT_ABORT=!1,ln.IDB_NOT_SUPPORTED=!1,ln.MISSING_INDEX=!1,ln.MISSING_OBJECT_STORES=!1,ln.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ln.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ln.QUOTA_EXCEEDED=!1,ln.QUOTA_MAYBE_EXCEEDED=!0,ln.UNKNOWN_ABORT=!0,ln.INCOMPATIBLE_DB_VERSION=!1,ln);function nn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?hn[a]:c;d=void 0===d?kn[a]:d;e=void 0===e?mn[a]:e;fm.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,nn.prototype)}
w(nn,fm);function on(a,b){nn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},hn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,on.prototype)}
w(on,nn);function pn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,pn.prototype)}
w(pn,Error);var qn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function rn(a,b,c,d){b=dn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof nn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new nn("QUOTA_EXCEEDED",a);if(ze&&"UnknownError"===e.name)return new nn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof pn)return new nn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&qn.some(function(f){return e.message.includes(f)}))return new nn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new nn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function sn(a,b,c){var d=Tm();return new nn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function tn(a){if(!a)throw Error();throw a;}
function un(a){return a}
function vn(a){this.h=a}
function wn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
wn.all=function(a){return new wn(new vn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={xb:0};f.xb<a.length;f={xb:f.xb},++f.xb)wn.resolve(a[f.xb]).then(function(g){return function(h){d[g.xb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
wn.resolve=function(a){return new wn(new vn(function(b,c){a instanceof wn?a.then(b,c):b(a)}))};
wn.reject=function(a){return new wn(new vn(function(b,c){c(a)}))};
wn.prototype.then=function(a,b){var c=this,d=null!=a?a:un,e=null!=b?b:tn;return new wn(new vn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){xn(c,c,d,f,g)}),c.i.push(function(){yn(c,c,e,f,g)})):"FULFILLED"===c.state.status?xn(c,c,d,f,g):"REJECTED"===c.state.status&&yn(c,c,e,f,g)}))};
wn.prototype.catch=function(a){return this.then(void 0,a)};
function xn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof wn?zn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function yn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof wn?zn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function zn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof wn?zn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function An(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Bn(a){return new Promise(function(b,c){An(a,b,c)})}
function Cn(a){return new wn(new vn(function(b,c){An(a,b,c)}))}
;function Dn(a,b){return new wn(new vn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var En=window,U=En.ytcsi&&En.ytcsi.now?En.ytcsi.now:En.performance&&En.performance.timing&&En.performance.now&&En.performance.timing.navigationStart?function(){return En.performance.timing.navigationStart+En.performance.now()}:function(){return(new Date).getTime()};function Fn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
m=Fn.prototype;m.add=function(a,b,c){return Gn(this,[a],{mode:"readwrite",ha:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Gn(this,[a],{mode:"readwrite",ha:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Gn(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).count(b)})};
function Hn(a,b,c){a=a.h.createObjectStore(b,c);return new In(a)}
m.delete=function(a,b){return Gn(this,[a],{mode:"readwrite",ha:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Gn(this,[a],{mode:"readonly",ha:!0},function(c){return c.objectStore(a).get(b)})};
function Jn(a,b,c){return Gn(a,[b],{mode:"readwrite",ha:!0},function(d){d=d.objectStore(b);return Cn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Gn(a,b,c,d){var e,f,g,h,k,l,n,r,t,p,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ha:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ha?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var I=new Kn(l);I=Ln(I,d);return H.call(z,I,7);case 7:return n=z.i,r=Math.round(U()),Mn(a,k,r,g,void 0,b.join(),e),z.return(n);case 5:t=Aa(z);p=Math.round(U());x=rn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof nn&&!x.h)||g>=f)Mn(a,k,p,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function Mn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof nn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&bn("QUOTA_EXCEEDED",{dbName:dn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof nn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),bn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Nn(a,!1,d,f,b,g.tag),an(e)):Nn(a,!0,d,f,b,g.tag)}
function Nn(a,b,c,d,e,f){bn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function In(a){this.h=a}
m=In.prototype;m.add=function(a,b){return Cn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Cn(this.h.clear()).then(function(){})};
function On(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Cn(this.h.count(a))};
function Pn(a,b){return Qn(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Pn(this,a):Cn(this.h.delete(a))};
m.get=function(a){return Cn(this.h.get(a))};
m.index=function(a){try{return new Rn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new pn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Qn(a,b,c){a=a.h.openCursor(b.query,b.direction);return Sn(a).then(function(d){return Dn(d,c)})}
function Kn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=nn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ln(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Kn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new nn("EXPLICIT_ABORT");};
Kn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new In(a),this.i.set(a,b));return b};
function Rn(a){this.h=a}
m=Rn.prototype;m.count=function(a){return Cn(this.h.count(a))};
m.delete=function(a){return Tn(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Cn(this.h.get(a))};
m.getKey=function(a){return Cn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Tn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Sn(a).then(function(d){return Dn(d,c)})}
function Un(a,b){this.request=a;this.cursor=b}
function Sn(a){return Cn(a).then(function(b){return b?new Un(a,b):null})}
m=Un.prototype;m.advance=function(a){this.cursor.advance(a);return Sn(this.request)};
m.continue=function(a){this.cursor.continue(a);return Sn(this.request)};
m.delete=function(){return Cn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Cn(this.cursor.update(a))};function Vn(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Fn(g.result,{closed:r}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sd,k=c.blocking,l=c.af,n=c.upgrade,r=c.closed,t;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&bn("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:dn(a)});var x=f(),y=new Kn(g.transaction);
n&&n(x,function(z){return p.oldVersion<z&&p.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){bn("IDB_UNEXPECTEDLY_CLOSED",{dbName:dn(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Wn(a,b,c){c=void 0===c?{}:c;return Vn(a,b,c)}
function Xn(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sd)&&c.addEventListener("blocked",function(){e()}),g.yield(Bn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),rn(f,a,"",-1);})}
;function Yn(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Yn.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Wn(a,b,c)};
Yn.prototype.delete=function(a){a=void 0===a?{}:a;return Xn(this.name,a)};
function Zn(a,b){return new nn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function $n(a,b){if(!b)throw sn("openWithToken",dn(a.name));return a.open()}
Yn.prototype.open=function(){function a(){var f,g,h,k,l,n,r,t,p,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],I=v(Object.keys(z.Eb)),M=I.next();!M.done;M=I.next()){M=M.value;var N=z.Eb[M],K=void 0===N.Ie?Number.MAX_VALUE:N.Ie;!(h.h.version>=N.Jb)||h.h.version>=K||h.h.objectStoreNames.contains(M)||H.push(M)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Eb);n=h.objectStoreNames();
if(c.m<T("ytidb_reopen_db_retries",0))return c.m++,h.close(),an(new nn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<T("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return an(new nn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new on(n,l);case 5:return y.return(h);case 2:r=Aa(y);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;p=t.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw t.close(),c.j=!1,Zn(c,p);return y.return(t);case 8:throw b(),r instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),rn(r,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Zn(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,af:b,upgrade:this.options.upgrade};return this.h=d=a()};var ao=new Yn("YtIdbMeta",{Eb:{databases:{Jb:1}},upgrade:function(a,b){b(1)&&Hn(a,"databases",{keyPath:"actualName"})}});
function bo(a,b){var c;return A(function(d){if(1==d.h)return d.yield($n(ao,b),2);c=d.i;return d.return(Gn(c,["databases"],{ha:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Cn(f.h.put(a,void 0)).then(function(){})})}))})}
function co(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield($n(ao,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function eo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield($n(ao,b),2)):3!=e.h?(d=e.i,e.yield(Gn(d,["databases"],{ha:!0,mode:"readonly"},function(f){c.length=0;return Qn(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function fo(a){return eo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function go(a,b,c){return eo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function ho(a){var b,c;return A(function(d){if(1==d.h)return b=hm("YtIdbMeta hasAnyMeta other"),d.yield(eo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var io,jo=new function(){}(new function(){});
function ko(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Tm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=en)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(bo(d,jo),4);case 4:return e.yield(co("yt-idb-test-do-not-use",jo),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function lo(){if(void 0!==io)return io;Wm=!0;return io=ko().then(function(a){Wm=!1;var b;if(null!=(b=Sm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Tm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Sm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function mo(){return E("ytglobal.idbToken_")||void 0}
function no(){var a=mo();return a?Promise.resolve(a):lo().then(function(b){(b=b?jo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var oo=0;function po(a,b){oo||(oo=oi.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(no(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(go(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Xn(f.actualName),7);case 7:return h.yield(co(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),an(g),d=!1;case 4:oi.qa(oo),oo=0,d&&po(a,b),h.h=0}})}))}
function qo(){var a;return A(function(b){return 1==b.h?b.yield(no(),2):(a=b.i)?b.return(ho(a)):b.return(!1)})}
new Dh;function ro(a){if(!gm())throw a=new nn("AUTH_INVALID",{dbName:a}),an(a),a;var b=hm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function so(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(no(),2);case 2:g=n.i;if(!g)throw h=sn("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),an(h),h;cn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ro(a);za(n,3);return n.yield(bo(k,g),5);case 5:return n.yield(Wn(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(co(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function to(a,b,c){c=void 0===c?{}:c;return so(a,b,!1,c)}
function uo(a,b,c){c=void 0===c?{}:c;return so(a,b,!0,c)}
function vo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(no(),2);if(3!=e.h){c=e.i;if(!c)return e.return();cn(a);d=ro(a);return e.yield(Xn(d.actualName,b),3)}return e.yield(co(d.actualName,c),0)})}
function wo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(Xn(d.actualName,b),2):e.yield(co(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function xo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(no(),2);if(3!=d.h){b=d.i;if(!b)return d.return();cn("LogsDatabaseV2");return d.yield(fo(b),3)}c=d.i;return d.yield(wo(c,a,b),0)})}
function yo(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(no(),2);if(3!=d.h){c=d.i;if(!c)return d.return();cn(a);return d.yield(Xn(a,b),3)}return d.yield(co(a,c),0)})}
;function zo(a,b){Yn.call(this,a,b);this.options=b;cn(a)}
w(zo,Yn);function Ao(a,b){var c;return function(){c||(c=new zo(a,b));return c}}
zo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?uo:to)(a,b,Object.assign({},c))};
zo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?yo:vo)(this.name,a)};
function Bo(a,b){return Ao(a,b)}
;var Co={},Do=Bo("ytGcfConfig",{Eb:(Co.coldConfigStore={Jb:1},Co.hotConfigStore={Jb:1},Co),qc:!1,upgrade:function(a,b){b(1)&&(On(Hn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),On(Hn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Eo(a){return $n(Do(),a)}
function Fo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Eo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Jn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Go(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Eo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Jn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Ho(a){var b,c;return A(function(d){return 1==d.h?d.yield(Eo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Gn(b,["coldConfigStore"],{mode:"readwrite",ha:!0},function(e){return Tn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Io(a){var b,c;return A(function(d){return 1==d.h?d.yield(Eo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Gn(b,["hotConfigStore"],{mode:"readwrite",ha:!0},function(e){return Tn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Jo(){G.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ka(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Jo,G);Jo.prototype.M=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;G.prototype.M.call(this)};function Ko(){this.h=0;this.i=new Jo}
function Lo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:null}
function Mo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.v(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=mo();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(Io(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Fo(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function No(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!S("start_client_gcf"))return h.v(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=mo())?c?h.v(4):h.yield(Ho(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Go(c,b,g,d),0)})}
function Oo(){if(!Ko.h){var a=new Ko;Ko.h=a}a=Ko.h;var b=U()-a.h;if(!(0!==a.h&&b<T("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Ko.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Po(){return"INNERTUBE_API_KEY"in Kk&&"INNERTUBE_API_VERSION"in Kk}
function Qo(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ne:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),od:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Rf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),pe:R("INNERTUBE_CONTEXT_HL"),oe:R("INNERTUBE_CONTEXT_GL"),qe:R("INNERTUBE_HOST_OVERRIDE")||"",se:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),re:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ro(a){var b={client:{hl:a.pe,gl:a.oe,clientName:a.od,clientVersion:a.innertubeContextClientVersion,configInfo:a.ne}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=dl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.od;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Ol()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=dm())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&(a=em())&&
b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=Oo())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(Yk(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function So(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Lf:(a=Ll(Kl()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function To(a,b){this.version=a;this.args=b}
To.prototype.serialize=function(){return{version:this.version,args:this.args}};function Uo(a,b){this.topic=a;this.h=b}
Uo.prototype.toString=function(){return this.topic};var Vo=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Hb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",Vo);var Wo=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Wo);var Xo=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Xo);var Yo=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Yo);
D("ytPubsub2Pubsub2SkipSubKey",null);function Zo(a,b){var c=$o();c&&c.publish.call(c,a.toString(),a,b)}
function ap(a){var b=bp,c=$o();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Wo[d])try{if(f&&b instanceof Uo&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var l=new h;h.Ya=l.version}var n=h.Ya}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var r=n.construct;
var t=k.args,p=t.length;if(0<p){var x=Array(p);for(k=0;k<p;k++)x[k]=t[k];var y=x}else y=[];f=r.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Qk(z)}},Yo[b.toString()]?E("yt.scheduler.instance")?oi.oa(g):hl(g,0):g())});
Wo[d]=!0;Xo[b.toString()]||(Xo[b.toString()]=[]);Xo[b.toString()].push(d);return d}
function cp(){var a=dp,b=ap(function(c){a.apply(void 0,arguments);ep(b)});
return b}
function ep(a){var b=$o();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Wo[c]}))}
function $o(){return E("ytPubsub2Pubsub2Instance")}
;function fp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Zo("meta_logging_csi_event",{timerName:a,hg:b})}
;var gp=T("max_body_size_to_compress",5E5),hp=T("min_body_size_to_compress",500),ip=!0,jp=0,kp=0,lp=T("compression_performance_threshold_lr",250),mp=T("slow_compressions_before_abandon_count",4);
function np(a,b,c,d){var e=U(),f={startTime:e,ticks:{},infos:{}};if(ip)try{var g=op(b);if(null==g||!(g>gp||g<hp)){var h=mk(ji(b)),k=U();f.ticks.gelc=k;kp++;S("disable_compression_due_to_performance_degredation")&&k-e>=lp&&(jp++,S("abandon_compression_after_N_slow_zips")?kp===T("compression_disable_point")&&jp>mp&&(ip=!1):ip=!1);pp(f);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=h;c.postParams=void 0}d(a,c)}catch(l){Rk(l),d(a,c)}else d(a,c)}
function qp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(ip&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=op(g);if(null!=h&&(h>gp||h<hp))return a;f=mk(ji(g),b?{level:1}:void 0);var k=U();e.ticks.gelc=k;if(b){kp++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=lp)if(jp++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=jp/kp;var l=mp/T("compression_disable_point");0<kp&&0===kp%T("compression_disable_point")&&b>=l&&(ip=!1)}else ip=!1;pp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Rk(n),a}}else return a}
function op(a){try{return(new Blob(a.split(""))).size}catch(b){return Rk(b),null}}
function pp(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||fp("gel_compression",a,{sampleRate:.1})}
;function rp(a){a=Object.assign({},a);delete a.Authorization;var b=wg();if(b){var c=new ui;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Ce(c.digest(),3)}return a}
;var sp;function tp(){sp||(sp=new Rm("yt.innertube"));return sp}
function up(a,b,c,d){if(d)return null;d=tp().get("nextId",!0)||1;var e=tp().get("requests",!0)||{};e[d]={method:a,request:b,authState:rp(c),requestTime:Math.round(U())};tp().set("nextId",d+1,86400,!0);tp().set("requests",e,86400,!0);return d}
function vp(a){var b=tp().get("requests",!0)||{};delete b[a];tp().set("requests",b,86400,!0)}
function wp(a){var b=tp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=rp(So(!1));qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),xp(a,d.method,e,{}));delete b[c]}}tp().set("requests",b,86400,!0)}}
;function yp(a){this.Xb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.vb=function(){};
this.now=Date.now;this.Nb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.dc=!!a.dc;var h;this.ac=null!=(h=a.ac)?h:.1;var k;this.nc=null!=(k=a.nc)?k:10;a.handleError&&(this.handleError=a.handleError);a.vb&&(this.vb=a.vb);a.Nb&&(this.Nb=a.Nb);a.Xb&&(this.Xb=a.Xb);this.U=a.U;this.Ea=a.Ea;this.ba=a.ba;this.aa=a.aa;this.Ra=a.Ra;this.Mc=
a.Mc;this.Lc=a.Lc;zp(this)&&(!this.U||this.U("networkless_logging"))&&Ap(this)}
function Ap(a){zp(a)&&!a.Nb&&(a.h=!0,a.dc&&Math.random()<=a.ac&&a.ba.Ud(a.T),Bp(a),a.aa.wa()&&a.Vb(),a.aa.listen(a.Mc,a.Vb.bind(a)),a.aa.listen(a.Lc,a.bd.bind(a)))}
m=yp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(zp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&Cp(c,d)}).catch(function(e){Cp(c,d);
Dp(c,e)})}else this.Ra(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(zp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){Dp(d,l)}),2);
f(g,h);k.h=0})}}this.Ra(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.Ra(a,b,e.skipRetry);
Dp(d,g)})}else this.Ra(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(zp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.rb(d.id,c.T):e=!0;c.aa.hb&&c.U&&c.U("vss_network_hint")&&c.aa.hb(!0);f(g,h)};
this.Ra(d.url,d.options);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.rb(d.id,c.T)}).catch(function(g){Dp(c,g)})}else this.Ra(a,b)};
m.Vb=function(){var a=this;if(!zp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.ld("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(Cp(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Vb());c.h=0})},this.Fd))};
m.bd=function(){this.Ea.qa(this.i);this.i=0};
function Cp(a,b){var c;return A(function(d){switch(d.h){case 1:if(!zp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.ue(b.id,a.T),3);case 3:(c=d.i)||a.vb(Error("The request cannot be found in the database."));case 2:if(Ep(a,b,a.xd)){d.v(4);break}a.vb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.rb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=Fp(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.rb(b.id,a.T),8);case 8:a.Ra(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Fp(a,b){if(!zp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Gp(f);(h=Hp(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.nc)){n.v(2);break}if(!a.aa.pc){n.v(3);break}return n.yield(a.aa.pc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Pc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.nc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.zd?n.yield(a.ba.Pc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.rb(b.id,a.T),8);case 12:a.Ea.oa(function(){a.aa.wa()&&a.Vb()},a.yd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.rb(b.id,a.T),2);a.aa.hb&&a.U&&a.U("vss_network_hint")&&a.aa.hb(!0);d(e,f);h.h=0})};
return b}
function Ep(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Bp(a){if(!zp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.ld("QUEUED",a.T).then(function(b){b&&!Ep(a,b,a.vd)?a.Ea.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Pc(b.id,a.T),2);Bp(a);c.h=0})}):a.aa.wa()&&a.Vb()})}
function Dp(a,b){a.Ld&&!a.aa.wa()?a.Ld(b):a.handleError(b)}
function zp(a){return!!a.T||a.Xb}
function Gp(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Hp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Ip;
function Jp(){if(Ip)return Ip();var a={};Ip=Bo("LogsDatabaseV2",{Eb:(a.LogsRequestsStore={Jb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&Hn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),On(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Ip()}
;function Kp(a){return $n(Jp(),a)}
function Lp(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Kp(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Jn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();Mp(c);return g.return(f)})}
function Np(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(Kp(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Gn(d,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(n){return Tn(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===
a&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=U();Mp(c);return l.return(k)})}
function Op(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Kp(b),2);c=d.i;return d.return(Gn(c,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Cn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Pp(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(Kp(b),2);e=f.i;return f.return(Gn(e,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Cn(h.h.put(k,void 0)).then(function(){return k})):wn.resolve(void 0)})}))})}
function Qp(a,b){var c;return A(function(d){if(1==d.h)return d.yield(Kp(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Rp(a){var b,c;return A(function(d){if(1==d.h)return d.yield(Kp(a),2);b=d.i;c=U()-2592E6;return d.yield(Gn(b,["LogsRequestsStore"],{mode:"readwrite",ha:!0},function(e){return Qn(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Sp(){A(function(a){return a.yield(xo(),0)})}
function Mp(a){S("nwl_csi_killswitch")||fp("networkless_performance",a,{sampleRate:1})}
;var Tp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485};var Up={},Vp=Bo("ServiceWorkerLogsDatabase",{Eb:(Up.SWHealthLog={Jb:1},Up),qc:!0,upgrade:function(a,b){b(1)&&On(Hn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Wp(a){return $n(Vp(),a)}
function Xp(a){var b,c;A(function(d){if(1==d.h)return d.yield(Wp(a),2);b=d.i;c=U()-2592E6;return d.yield(Gn(b,["SWHealthLog"],{mode:"readwrite",ha:!0},function(e){return Qn(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Yp(a){var b;return A(function(c){if(1==c.h)return c.yield(Wp(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Zp={},$p=0;function aq(a){var b=new Image,c=""+$p++;Zp[c]=b;b.onload=b.onerror=function(){delete Zp[c]};
b.src=a}
;function bq(){this.h=new Map;this.i=!1}
function cq(){if(!bq.h){var a=E("yt.networkRequestMonitor.instance")||new bq;D("yt.networkRequestMonitor.instance",a);bq.h=a}return bq.h}
bq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
bq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
bq.prototype.removeParams=function(a){return a.split("?")[0]};
bq.prototype.removeParams=bq.prototype.removeParams;bq.prototype.isEndpointCFR=bq.prototype.isEndpointCFR;bq.prototype.requestComplete=bq.prototype.requestComplete;bq.getInstance=cq;var dq;function eq(){dq||(dq=new Rm("yt.offline"));return dq}
function fq(a){if(S("offline_error_handling")){var b=eq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);eq().set("errors",b,2592E3,!0)}}
;function gq(){vd.call(this);var a=this;this.j=!1;this.i=ni();this.i.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=eq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new fm(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Qk(d)}eq().set("errors",{},2592E3,!0)}}})}
w(gq,vd);function hq(){if(!gq.h){var a=E("yt.networkStatusManager.instance")||new gq;D("yt.networkStatusManager.instance",a);gq.h=a}return gq.h}
m=gq.prototype;m.wa=function(){return this.i.wa()};
m.hb=function(a){this.i.i=a};
m.je=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Zd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.pc=function(a){a=li(this.i,a);a.then(function(b){S("use_cfr_monitor")&&cq().requestComplete("generate_204",b)});
return a};
gq.prototype.sendNetworkCheckRequest=gq.prototype.pc;gq.prototype.listen=gq.prototype.listen;gq.prototype.enableErrorFlushing=gq.prototype.Zd;gq.prototype.getWindowStatus=gq.prototype.je;gq.prototype.networkStatusHint=gq.prototype.hb;gq.prototype.isNetworkAvailable=gq.prototype.wa;gq.getInstance=hq;function iq(a){a=void 0===a?{}:a;vd.call(this);var b=this;this.i=this.m=0;this.j=hq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){jq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){jq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){wd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){wd(b,"publicytnetworkstatus-offline")})))}
w(iq,vd);iq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
iq.prototype.hb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
iq.prototype.pc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&cq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.hb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function jq(a,b){a.rateLimit?a.i?(oi.qa(a.m),a.m=oi.oa(function(){a.l!==b&&(wd(a,b),a.l=b,a.i=U())},a.rateLimit-(U()-a.i))):(wd(a,b),a.l=b,a.i=U()):wd(a,b)}
;var kq;function lq(){var a=yp.call;kq||(kq=new iq({Wf:!0,Pf:!0}));a.call(yp,this,{ba:{Ud:Rp,rb:Qp,ld:Np,ue:Op,Pc:Pp,set:Lp},aa:kq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Rk(new fm(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Qk(b)},
vb:Rk,Ra:mq,now:U,Ld:fq,Ea:Qm(),Mc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",dc:!0,ac:.1,nc:T("potential_esf_error_limit",10),U:S,Nb:!(gm()&&nq())});this.j=new Dh;S("networkless_immediately_drop_all_requests")&&Sp();yo("LogsDatabaseV2")}
w(lq,yp);function oq(){var a=E("yt.networklessRequestController.instance");a||(a=new lq,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&no().then(function(b){a.T=b;Ap(a);a.j.resolve();a.dc&&Math.random()<=a.ac&&a.T&&Xp(a.T);S("networkless_immediately_drop_sw_health_store")&&pq(a)}));
return a}
lq.prototype.writeThenSend=function(a,b){b||(b={});gm()||(this.h=!1);yp.prototype.writeThenSend.call(this,a,b)};
lq.prototype.sendThenWrite=function(a,b,c){b||(b={});gm()||(this.h=!1);yp.prototype.sendThenWrite.call(this,a,b,c)};
lq.prototype.sendAndWrite=function(a,b){b||(b={});gm()||(this.h=!1);yp.prototype.sendAndWrite.call(this,a,b)};
lq.prototype.awaitInitialization=function(){return this.j.promise};
function pq(a){var b;A(function(c){if(!a.T)throw b=sn("clearSWHealthLogsDb"),b;return c.return(Yp(a.T).catch(function(d){a.handleError(d)}))})}
function mq(a,b,c){b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&qq(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)rl(a,void 0,"POST",e);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))rl(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new $a({url:a});if(h.j&&h.i||h.l){var k=ac(bc(5,a)),l;if(!(l=!k||!k.endsWith("/aclk"))){var n=a.search(oc),r=nc(a,0,"ri",n);if(0>r)var t=null;else{var p=a.indexOf("&",r);if(0>p||p>n)p=n;t=decodeURIComponent(a.slice(r+3,-1!==p?p:0).replace(/\+/g," "))}l="1"!==t}var x=!l;break b}}catch(z){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(z){}y=!1}c=y?!0:!1}else c=!1;c||aq(a)}}else b.compress?
b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),np(a,b.postBody,b,ol)):np(a,JSON.stringify(b.postParams),b,wl):ol(a,b)}
function qq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){cq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){cq().requestComplete(a,!0);d(e,f)}}
function nq(){return"www.youtube-nocookie.com"!==cc(document.location.toString())}
;var rq=!1,sq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:rq};D("ytNetworklessLoggingInitializationOptions",sq);function tq(){var a;A(function(b){if(1==b.h)return b.yield(no(),2);a=b.i;if(!a||!gm()&&!S("nwl_init_require_datasync_id_killswitch")||!nq())return b.v(0);rq=!0;sq.isNwlInitialized=rq;return b.yield(oq().awaitInitialization(),0)})}
;function uq(a){var b=this;this.config_=null;a?this.config_=a:Po()&&(this.config_=Qo());jm(function(){wp(b)},5E3)}
uq.prototype.isReady=function(){!this.config_&&Po()&&(this.config_=Qo());return!!this.config_};
function xp(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=up(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(M,N){vp(y);z(M,N)};
c.onFetchSuccess=function(M,N){vp(y);H(M,N)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?oq().writeThenSend(p,g):oq().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));np(p,I,g,ol)}else np(p,JSON.stringify(g.postParams),g,wl);else S("web_all_payloads_via_jspb")?ol(p,g):wl(p,g)}catch(M){if("InvalidAccessError"==M.name)y&&(vp(y),y=0),Rk(Error("An extension is blocking network request."));else throw M;}y&&jm(function(){wp(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Rk(new fm("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new fm("innertube xhrclient not ready",b,c,d);Qk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.qe)&&(h=f);var k=a.config_.se||!1,l=So(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},t=a.config_.re&&f;t=t&&f.startsWith("Bearer");t||(r.key=a.config_.innertubeApiKey);var p=$k(""+h+n,r||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
sq.isNwlInitialized:rq)?lo().then(function(x){e(x)}):e(!1)}
;var vq=0,wq=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++vq});var xq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function yq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in xq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function zq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
yq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
yq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
yq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",mb);var Aq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Aq);
function Bq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Cq=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Dq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Bq(a,b,c,d);if(e)return e;e=++Aq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new yq(h);if(!Fd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new yq(h);
h.currentTarget=a;return c.call(a,h)};
g=Pk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Cq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d];return e}
function Eq(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Cq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
;function Fq(a){this.D=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=Dq(window,"mousemove",Ua(this.W,this));a=Ua(this.R,this);"function"===typeof a&&(a=Pk(a));this.Y=window.setInterval(a,25)}
Xa(Fq,G);Fq.prototype.W=function(a){void 0===a.h&&zq(a);var b=a.h;void 0===a.i&&zq(a);this.h=new Bd(b,a.i)};
Fq.prototype.R=function(){if(this.h){var a=U();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
Fq.prototype.M=function(){window.clearInterval(this.Y);Eq(this.S)};var Gq=new Set([174,173,175]),Kq={};
function Lq(a){var b=void 0===a?{}:a;a=void 0===b.Ee?!1:b.Ee;b=void 0===b.ae?!0:b.ae;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&Mq();Dq(document,"keydown",Mq);Dq(document,"keyup",Mq);Dq(document,"mousedown",Mq);Dq(document,"mouseup",Mq);a?Dq(window,"touchmove",function(){Nq("touchmove",200)},{passive:!0}):(Dq(window,"resize",function(){Nq("resize",200)}),b&&Dq(window,"scroll",function(){Nq("scroll",
200)}));
new Fq(function(){Nq("mouse",100)});
Dq(document,"touchstart",Mq,{passive:!0});Dq(document,"touchend",Mq,{passive:!0})}}
function Nq(a,b){Kq[a]||(Kq[a]=!0,oi.oa(function(){Mq();Kq[a]=!1},b))}
function Mq(a){var b;if(null!=(b=E("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Gq.has(null==a?void 0:a.keyCode))null==E("_lact",window)&&Lq(),a=Date.now(),D("_lact",a,window),-1==E("_fact",window)&&D("_fact",a,window),(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Oq(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Pq=C.ytPubsubPubsubInstance||new L,Qq=C.ytPubsubPubsubSubscribedKeys||{},Rq=C.ytPubsubPubsubTopicToKeys||{},Sq=C.ytPubsubPubsubIsSynchronous||{};function Tq(a,b){var c=Uq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Qq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Sq[a]?f():hl(f,0)}catch(g){Qk(g)}},void 0);
Qq[d]=!0;Rq[a]||(Rq[a]=[]);Rq[a].push(d);return d}return 0}
function Vq(a){var b=Uq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Qq[c]}))}
function Wq(a,b){var c=Uq();c&&c.publish.apply(c,arguments)}
function Xq(a){var b=Uq();if(b)if(b.clear(a),a)Yq(a);else for(var c in Rq)Yq(c)}
function Uq(){return C.ytPubsubPubsubInstance}
function Yq(a){Rq[a]&&(a=Rq[a],db(a,function(b){Qq[b]&&delete Qq[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Hb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",Pq);D("ytPubsubPubsubTopicToKeys",Rq);D("ytPubsubPubsubIsSynchronous",Sq);D("ytPubsubPubsubSubscribedKeys",Qq);var Zq=Symbol("injectionDeps");function $q(a){this.name=a}
$q.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ar(a){this.key=a}
function br(){this.h=new Map;this.i=new Map}
br.prototype.resolve=function(a){return a instanceof ar?cr(this,a.key,[],!0):cr(this,a,[])};
function cr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.gf)e=d[Zq]?dr(a,d[Zq],c):[],e=d.gf.apply(d,ka(e));else if(d.Hd){e=d.Hd;var f=e[Zq]?dr(a,e[Zq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ka(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.fg||a.i.set(b,e);return e}
function dr(a,b,c){return b?b.map(function(d){return d instanceof ar?cr(a,d.key,c,!0):cr(a,d,c)}):[]}
;var er;function fr(){er||(er=new br);return er}
;var gr=window;function hr(){var a,b;return"h5vcc"in gr&&(null==(a=gr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=gr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in gr&&gr.performance.mark&&gr.performance.measure?2:0}
function ir(a){switch(hr()){case 1:gr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:gr.performance.mark(a+"-start");break;case 0:break;default:Oh()}}
function jr(a){switch(hr()){case 1:gr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";gr.performance.mark(c);gr.performance.measure(a,b,c);break;case 0:break;default:Oh()}}
;var kr=S("web_enable_lifecycle_monitoring")&&0!==hr(),lr=S("web_enable_lifecycle_monitoring");function mr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Qm():d;this.j=c;this.scheduler=d;this.i=new Dh;this.h=a;for(a={eb:0};a.eb<this.h.length;a={Rb:a.Rb,eb:a.eb},a.eb++)a.Rb=this.h[a.eb],c=function(e){return function(){e.Rb.Gc();b.h[e.eb].oc=!0;b.h.every(function(f){return!0===f.oc})&&b.i.resolve()}}(a),d=this.getPriority(a.Rb),d=this.scheduler.bb(c,d),this.h[a.eb]=Object.assign({},a.Rb,{Gc:c,
jobId:d})}
function nr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.oc||(a.scheduler.qa(c.jobId),a.scheduler.bb(c.Gc,10))}
mr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.oc||this.scheduler.qa(b.jobId),b.oc=!0;this.i.resolve()};
mr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function or(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};kr&&ir(this.state)}
m=or.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;kr&&jr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(nr(this.j),this.j=void 0);pr(this,a,b);this.state=a;kr&&ir(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(qr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function qr(a,b){var c=b.filter(function(e){return 10===rr(a,e)}),d=b.filter(function(e){return 10!==rr(a,e)});
return a.s.eg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Le.apply(a,[c].concat(ka(e))),2);a.Cd.apply(a,[d].concat(ka(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Me.apply(a,[c].concat(ka(e)));a.Cd.apply(a,[d].concat(ka(e)))}}
m.Me=function(a){for(var b=B.apply(1,arguments),c=Qm(),d=v(a),e=d.next(),f={};!e.done;f={Ab:f.Ab},e=d.next())f.Ab=e.value,c.Ib(function(g){return function(){sr(g.Ab.name);g.Ab.callback.apply(g.Ab,ka(b));tr(g.Ab.name)}}(f))};
m.Le=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=Qm(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.fb=e.value;f.Kb=void 0;g=function(k){return function(){sr(k.fb.name);var l=k.fb.callback.apply(k.fb,ka(b));"function"===typeof(null==l?void 0:l.then)?k.Kb=l.then(function(){tr(k.fb.name)}):tr(k.fb.name)}}(f);
c.Ib(g);return f.Kb?h.yield(f.Kb,3):h.v(3)}f={fb:f.fb,Kb:f.Kb};e=d.next();return h.v(2)})};
m.Cd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Gc:function(){sr(e.name);e.callback.apply(e,ka(b));tr(e.name)},
priority:rr(c,e)}});
d.length&&(this.j=new mr(d))};
function rr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function sr(a){kr&&a&&ir(a)}
function tr(a){kr&&a&&jr(a)}
function pr(a,b,c){lr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(or.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function ur(a){or.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var vr;w(ur,or);ur.prototype.i=function(a,b){var c=this;this.h=jm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
ur.prototype.m=function(a,b){this.h&&(oi.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function wr(){vr||(vr=new ur);return vr}
;function xr(){this.store={};this.h={}}
xr.prototype.storePayload=function(a,b){a=yr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
xr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=zr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ka(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ka(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ka(this.smartExtractMatchingEntries(a))));return c};
xr.prototype.extractMatchingEntries=function(a){a=zr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ka(this.store[a[c]])),delete this.store[a[c]]);return b};
xr.prototype.getSequenceCount=function(a){a=zr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function zr(a,b){var c=yr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&yr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ar(b.auth,g[0])){var h=b.isJspb;Ar(void 0===h?"undefined":h?"true":"false",g[1])&&Ar(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Ar(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ar(a,b){return void 0===a||"undefined"===a?!0:a===b}
xr.prototype.getSequenceCount=xr.prototype.getSequenceCount;xr.prototype.extractMatchingEntries=xr.prototype.extractMatchingEntries;xr.prototype.smartExtractMatchingEntries=xr.prototype.smartExtractMatchingEntries;xr.prototype.storePayload=xr.prototype.storePayload;function yr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Br(a,b){if(a)return a[b.name]}
;var Cr=T("initial_gel_batch_timeout",2E3),Dr=T("gel_queue_timeout_max_ms",6E4),Er=Math.pow(2,16)-1,Fr=T("gel_min_batch_size",5),Gr=void 0;function Hr(){this.l=this.h=this.i=0;this.j=!1}
var Ir=new Hr,Jr=new Hr,Kr=new Hr,Lr=new Hr,Mr,Nr=!0,Or=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Or);var Pr={};function Qr(){var a=E("yt.logging.ims");a||(a=new xr,D("yt.logging.ims",a));return a}
function Rr(a,b){if("log_event"===a.endpoint){var c=Sr(a),d=Tr(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Tp[d||""];var f,g,h,k=null==fr().resolve(new ar(Ko))?void 0:null==(f=Lo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;k=Ur(e.tier);if(400===k){Vr(a,b);return}}Pr[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Qr().storePayload(e,a.payload);Wr(b,c,e,"gelDebuggingEvent"===d)}}
function Wr(a,b,c,d){function e(){Xr({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Gr=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=U(),h=Yr(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=Qr().getSequenceCount(c));1E3<=d?e():d>=a?Mr||(Mr=Zr(function(){e();Mr=void 0},0)):10<=g-k&&($r(f,c.tier),h.l=g)}
function Vr(a,b){if("log_event"===a.endpoint){var c=Sr(a),d=new Map;d.set(c,[a.payload]);var e=Tr(a.payload)||"";b&&(Gr=new b);return new Sd(function(f,g){Gr&&Gr.isReady()?as(d,Gr,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function Sr(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Or[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Xr(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Sd(function(e,f){var g=Yr(c,d),h=g.j;g.j=!1;bs(g.i);bs(g.h);g.h=0;Gr&&Gr.isReady()?void 0===d&&S("enable_web_tiered_gel")?cs(e,f,a,b,c,300,h):cs(e,f,a,b,c,d,h):($r(c,d),e())})}
function cs(a,b,c,d,e,f,g){var h=Gr;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=S("enable_web_tiered_gel")?Qr().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Qr().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(Pr)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Qr().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Qr().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Pr[l];as(k,h,a,b,c,!1,g)}
function $r(a,b){function c(){Xr({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Yr(a,b),e=d===Lr||d===Kr?5E3:Dr;S("web_gel_timeout_cap")&&!d.h&&(e=Zr(function(){c()},e),d.h=e);
bs(d.i);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Nr&&(e=Cr);e=Zr(function(){0<T("gel_min_batch_size")?Qr().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Fr&&c():c()},e);
d.i=e}
function as(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(U()),k=a.size,l=(void 0===g?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={jc:g.jc,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,lc:g.lc,kc:g.kc},n=a.next()){var r=v(n.value);n=r.next().value;r=r.next().value;g.batchRequest=sb({context:Ro(b.config_||Qo())});if(!Na(r)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=
r;(r=Or[n])&&ds(g.batchRequest,n,r);delete Or[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;es(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.lc=function(t){S("start_client_gcf")&&oi.oa(function(){return A(function(p){return p.yield(gs(t),0)})});
k--;k||c()};
g.jc=0;g.kc=function(t){return function(){t.jc++;if(e.bypassNetworkless&&1===t.jc)try{xp(b,l,t.batchRequest,hs({writeThenSend:!0},t.dangerousLogToVisitorSession,t.lc,t.kc,f)),Nr=!1}catch(p){Qk(p),d()}k--;k||c()}}(g);
try{xp(b,l,g.batchRequest,hs(e,g.dangerousLogToVisitorSession,g.lc,g.kc,f)),Nr=!1}catch(t){Qk(t),d()}}}
function hs(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Mf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};is()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function es(a,b,c){is()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Er/2)),c++,c>Er&&(c=1),Lk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ds(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function is(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Zr(a,b){return S("transport_use_scheduler")?S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?jm(function(){if("none"===wr().currentState)a();else{var c={};wr().install((c.none={callback:a},c))}},b):jm(a,b):hl(a,b)}
function bs(a){S("transport_use_scheduler")?oi.qa(a):window.clearTimeout(a)}
function gs(a){var b,c,d,e,f,g,h,k,l,n;return A(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Br(d,qk),g=null==(f=d)?void 0:f.hotHashData,h=Br(d,pk),l=null==(k=d)?void 0:k.coldHashData,(n=fr().resolve(new ar(Ko)))?g?e?r.yield(Mo(n,g,e),2):r.yield(Mo(n,g),2):r.v(2):r.return()):l?h?r.yield(No(n,l,h),0):r.yield(No(n,l),0):r.v(0)})}
function Yr(a,b){b=void 0===b?200:b;return a?300===b?Lr:Jr:300===b?Kr:Ir}
function Tr(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Tp[b])return b}
function Ur(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var js=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",js);
function ks(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Oq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,js[b]=b in js?js[b]+1:0,a.sequence={index:js[b],groupKey:b},d.endOfSequence&&delete js[d.sequenceGroup]);(d.sendIsolatedPayload?Vr:Rr)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function $m(a,b,c){c=void 0===c?{}:c;var d=uq;R("ytLoggingEventsDefaultDisabled",!1)&&uq===uq&&(d=null);S("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Oq(),c.timestamp=U());ks(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var ls=new Set,ms=0,ns=0,ps=0,qs=[],rs=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Zm(a){ss(a)}
function ts(a){ss(a,"WARNING")}
function us(a){a instanceof Error?ss(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new fm(a),a.name="RejectedPromiseError",ts(a))}
function ss(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=ms))){d=qs;var k=Bc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var r=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(r=Gl(a.args[t],"params."+t,c,r),
500<=r);t++);else if(a.hasOwnProperty("params")&&a.params){var p=a.params;if("object"===typeof a.params)for(t in p){if(p[t]){var x="params."+t,y=Il(p[t]);c[x]=y;r+=x.length+y.length;if(500<r)break}}else c.params=Il(p)}if(d.length)for(t=0;t<d.length&&!(r=Gl(d[t],"params.context."+t,c,r),500<=r);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Cl();c=v(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Xf)){a=d.weight;break a}a=v(a.Sa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(xl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.mc[t.name])for(e=v(c.mc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Jc(f);break}t.params||(t.params={});a=Cl();t.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Sa.length;t.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));yb("sample").constructor!==xb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!ls.has(t.message)){if(g&&S("web_enable_error_204"))vs(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Dl.ab("handleError",t),S("record_app_crashed_web")&&0===ps&&1===t.sampleWeight&&(ps++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),$m("appCrashed",g)),ns++):"WARNING"===b&&Dl.ab("handleWarning",t);if(S("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(rs);for(c=a.next();!c.done;c=a.next())if(fn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));e=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&($m("clientError",h),("ERROR"===g||S("errors_flush_gel_always_killswitch"))&&Xr(void 0,void 0,!1))}S("suppress_error_204_logging")||vs(b,t)}try{ls.add(t.message)}catch(z){}ms++}}}
function vs(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}ol(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function ws(){this.register=new Map}
function xs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Zf("ABORTED")}
ws.prototype.clear=function(){xs(this);this.register.clear()};
var ys=new ws;var zs=Date.now().toString();
function As(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(zs)for(a=1,b=0;b<zs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^zs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Bs,Cs=C.ytLoggingDocDocumentNonce_;Cs||(Cs=As(),D("ytLoggingDocDocumentNonce_",Cs));Bs=Cs;function Ds(a){this.h=a}
m=Ds.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new xk;void 0!==this.h.trackingParams?J(a,1,gf(this.h.trackingParams,!0)):(void 0!==this.h.veType&&J(a,2,rf(this.h.veType)),void 0!==this.h.veCounter&&J(a,6,rf(this.h.veCounter)),void 0!==this.h.elementIndex&&J(a,3,rf(this.h.elementIndex)),this.h.isCounterfactual&&J(a,5,of(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();Wf(a,xk,7,b)}void 0!==this.h.youtubeData&&Wf(a,rk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Es(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function Fs(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Lk("client-screen-nonce-store",c));c[b]=a}
function Gs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Hs(a){return R(Gs(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",Hs);function Is(){var a=R("csn-to-ctt-auth-info");a||(a={},Lk("csn-to-ctt-auth-info",a));return a}
function Js(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function Ks(a){a=Es(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Ks);function Ls(a,b,c){var d=Is();(c=Ks(c))&&delete d[c];b&&(d[a]=b)}
function Ms(a){return Is()[a]}
D("yt_logging_screen.getCttAuthInfo",Ms);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Es(c)||b!==R(Gs(c)))if(Ls(a,d,c),Fs(a,c),Lk(Gs(c),b),b=function(){setTimeout(function(){a&&$m("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Bs,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Ns=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Ns);function Os(a){Gk(Ns,arguments)}
;function Ps(){var a=rb(Qs),b;return(new Sd(function(c,d){a.onSuccess=function(e){gl(e)?c(new Rs(e)):d(new Ss("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ss("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ss("Request timed out","net.timeout",e))};
b=ol("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof Zd&&b.abort();
return Xd(c)})}
function Ss(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Ss,Za);function Rs(a){this.xhr=a}
;function Ts(){this.h=0;this.value_=null}
Ts.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:Us(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:Vs(a):this};
Ts.prototype.getValue=function(){return this.value_};
Ts.prototype.isRejected=function(){return 2==this.h};
Ts.prototype.$goog_Thenable=!0;function Vs(a){var b=new Ts;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function Us(a){var b=new Ts;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function Ws(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:al(a)?"same-origin":"cors",credentials:al(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Xs(){return ug()||(xe||ye)&&fn("applewebkit")&&!fn("version")&&(!fn("safari")||fn("gsa/"))||Pc&&fn("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ys(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in vk)if(vk[d]==c.embeddedPlayerMode){b=vk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Zs(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof $s;this.isTimeout=a instanceof Ss&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Zd}
w(Zs,Za);Zs.prototype.name="BiscottiError";function $s(){Za.call(this,"Biscotti ID is missing from server")}
w($s,Za);$s.prototype.name="BiscottiMissingError";var Qs={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},at=null;function bt(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Xs())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==pb(a))return Error("Biscotti ID is not available in private embed mode");if(Ys(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ek(){var a=bt();if(void 0!==a)return Xd(a);at||(at=Ps().then(ct).sc(function(b){return dt(2,b)}));
return at}
function ct(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new $s;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new $s;a=a.id;Fk(a);at=Us(a);et(18E5,2);return a}
function dt(a,b){b=new Zs(b);Fk("");at=Vs(b);0<a&&et(12E4,a-1);throw b;}
function et(a,b){hl(function(){Ps().then(ct,function(c){return dt(b,c)}).sc(ab)},a)}
function ft(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Ek()}catch(b){return Xd(b)}}
;function gt(a){if("1"!=pb(R("PLAYER_VARS",{}))){a&&Dk();try{ft().then(function(){},function(){}),hl(gt,18E5)}catch(b){Qk(b)}}}
;function ht(){var a=Wl(),b=Zl(119),c=1<window.devicePixelRatio;if(document.body&&yi(document.body,"exp-invert-logo"))if(c&&!yi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!yi(d,"inverted-hdpi")){var e=wi(d);xi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&yi(document.body,"inverted-hdpi")&&zi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=$l(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Tl[b]:(c=d.toString(16),Tl[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Tl)Tl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Tl[f])));var f=d.join("&");Pl(b,f,63072E3,a.i,c)}}
;var jt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function kt(){var a=void 0===a?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=Zk(a).theme;return jt.get(b)||null}catch(c){}return null}
;function lt(){this.h={};if(this.i=Sl()){var a=Ql("CONSISTENCY");a&&mt(this,{encryptedTokenJarContents:a})}}
lt.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Oa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];mt(this,a)}};
function mt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Pl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var nt=window.location.hostname.split(".").slice(-2).join(".");function ot(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=pt(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var qt;function rt(){qt=E("yt.clientLocationService.instance");qt||(qt=new ot,D("yt.clientLocationService.instance",qt));return qt}
m=ot.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=pt(this))&&this.h.set("yt-location-playability-token",a,15552E3):Pl("YT_CL",JSON.stringify({loctok:a}),15552E3,nt,!0))};
function pt(a){return void 0===a.h?new Rm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=pt(this))&&this.h.remove("yt-location-playability-token"):Rl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function st(a,b){var c,d=null==(c=Br(a,uk))?void 0:c.signal;if(d&&b.Ub&&(c=b.Ub[d]))return c();var e;if((c=null==(e=Br(a,sk))?void 0:e.request)&&b.Wd&&(e=b.Wd[c]))return e();for(var f in a)if(b.ed[f]&&(a=b.ed[f]))return a()}
;function tt(a){return function(){return new a}}
;var ut={},vt=(ut.WEB_UNPLUGGED="^unplugged/",ut.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ut.WEB_UNPLUGGED_OPS="^unplugged/",ut.WEB_UNPLUGGED_PUBLIC="^unplugged/",ut.WEB_CREATOR="^creator/",ut.WEB_KIDS="^kids/",ut.WEB_EXPERIMENTS="^experiments/",ut.WEB_MUSIC="^music/",ut.WEB_REMIX="^music/",ut.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ut.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ut);
function wt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=vt[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(vt).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function xt(){}
xt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ml:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=sb(g);S("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Wl();var l="USER_INTERFACE_THEME_LIGHT";Zl(165)?l="USER_INTERFACE_THEME_DARK":Zl(174)?l="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:kt()||l;h.userInterfaceTheme=k;if(!f){if(k=dm())h.connectionType=
k;S("web_log_effective_connection_type")&&(k=em())&&(g.client.effectiveConnectionType=k)}var n;if(S("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var r;n=null==(r=C.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}S("web_gcf_hashes_innertube")&&(k=Oo())&&(r=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=r,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);r=Zk(C.location.href);!S("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&Nl.h&&(r=Nl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ol(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!S("web_lr_app_quality_killswitch")&&(r=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));if(!S("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(V){}t=void 0}t&&(h.timeZone=t)}(t=R("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=dl();lt.h||(lt.h=new lt);h=lt.h.h;r=[];n=0;for(var p in h)r[n++]=h[p];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:r});!S("web_prequest_context_killswitch")&&(p=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=p);t=Wl();p=Zl(58);t=t.get("gsml","");g.user=Object.assign({},g.user);p&&(g.user.enableSafetyMode=p);t&&(g.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?e&&(f=Ks())&&(g.clientScreenNonce=f):
!f&&(f=Ks())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;rt().setLocationOnInnerTubeContext(g);try{var x=bl(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var H=z.next();!H.done;H=z.next()){var I=v(H.value),M=I.next().value,N=I.next().value;x=M;y=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}}catch(V){ss(V)}z=g}else ss(Error("Error: No InnerTubeContext shell provided in ytconfig.")),
z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var K;b="/youtubei/v1/"+wt(this.j());(H=null==(K=Br(a.commandMetadata,tk))?void 0:K.apiUrl)&&(b=H);K=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&(K=String(b)+String(dc(K)));b={};b.key=R("INNERTUBE_API_KEY");S("json_condensed_response")&&(b.prettyPrint="false");K=$k(K,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:K,jb:Ws(K),Oa:z,config:a};a.config.Wb?a.config.Wb.identity=c:a.config.Wb={identity:c};return a}ss(new fm("Error: Failed to create Request from Command.",
a))};
da.Object.defineProperties(xt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function zt(){}
w(zt,xt);zt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",jb:Ws("/getDatasyncIdsEndpoint","GET"),Oa:{}}};
zt.prototype.j=function(){return[]};
zt.prototype.h=function(){};
zt.prototype.i=function(){};var At={},Bt=(At.GET_DATASYNC_IDS=tt(zt),At);var Ct="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Dt(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(0<=cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Ih(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ks()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Et(a,b,f)}else Et(a,b)}
function Et(a,b,c){a=Ft(a);b=b?jc(b):"";c=c||5;Xs()&&Pl(a,b,c)}
function Ft(a){if(S("st_skip_debug_params")){for(var b=v(Ct),c=b.next();!c.done;c=b.next())a=qc(a,c.value);return"ST-"+Zb(a).toString(36)}return"ST-"+Zb(a).toString(36)}
;function Gt(){try{return!!self.localStorage}catch(a){return!1}}
;function Ht(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function It(a){if(Gt()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ht(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Jt(){if(!Gt())return!1;var a=hm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Ht(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Kt(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return S("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))&&a}
function Lt(a){if(R("LOGGED_IN",!0)&&Kt()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);0<=cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=dc(a),(b=ec(b))?(b=Ft(b),b=(b=Ql(b)||null)?Yk(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;Kt()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Dt(a,b)}}
;function Mt(a){var b=B.apply(1,arguments);if(!Nt(a)||b.some(function(d){return!Nt(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Ot(a,c.value);return a}
function Ot(a,b){for(var c in b)if(Nt(b[c])){if(c in a&&!Nt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ot(a[c],b[c])}else if(Pt(b[c])){if(c in a&&!Pt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Qt(a[c],b[c])}else a[c]=b[c];return a}
function Qt(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Nt(c)?a.push(Ot({},c)):Pt(c)?a.push(Qt([],c)):a.push(c);return a}
function Nt(a){return"object"===typeof a&&!Array.isArray(a)}
function Pt(a){return"object"===typeof a&&Array.isArray(a)}
;function Rt(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function St(){var a=Rt();a.info||(a.info={});return a.info}
function Tt(a){a=Rt(a);a.metadata||(a.metadata={});return a.metadata}
function Ut(a){a=Rt(a);a.tick||(a.tick={});return a.tick}
function Vt(a){a=Rt(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Wt(a){a=Vt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Xt(a){var b=Rt(a).nonce;b||(b=As(),Rt(a).nonce=b);return b}
;function Yt(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Zt(a){a=a||"";var b=E("ytcsi.reference");b||(Yt(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Yt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},$t=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.embed="LATENCY_ACTION_EMBED",
W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",
W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]=
"LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]=
"LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",
W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",
W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",
W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",
W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),X={},au=(X.ad_allowed="adTypesAllowed",X.yt_abt="adBreakType",X.ad_cpn="adClientPlaybackNonce",X.ad_docid="adVideoId",X.yt_ad_an="adNetworks",X.ad_at="adType",X.aida="appInstallDataAgeMs",X.browse_id="browseId",X.p="httpProtocol",X.t="transportProtocol",X.cpn="clientPlaybackNonce",X.ccs="creatorInfo.creatorCanaryState",X.ctop=
"creatorInfo.topEntityType",X.csn="clientScreenNonce",X.docid="videoId",X.GetHome_rid="requestIds",X.GetSearch_rid="requestIds",X.GetPlayer_rid="requestIds",X.GetWatchNext_rid="requestIds",X.GetBrowse_rid="requestIds",X.GetLibrary_rid="requestIds",X.is_continuation="isContinuation",X.is_nav="isNavigation",X.b_p="kabukiInfo.browseParams",X.is_prefetch="kabukiInfo.isPrefetch",X.is_secondary_nav="kabukiInfo.isSecondaryNav",X.nav_type="kabukiInfo.navigationType",X.prev_browse_id="kabukiInfo.prevBrowseId",
X.query_source="kabukiInfo.querySource",X.voz_type="kabukiInfo.vozType",X.yt_lt="loadType",X.mver="creatorInfo.measurementVersion",X.yt_ad="isMonetized",X.nr="webInfo.navigationReason",X.nrsu="navigationRequestedSameUrl",X.pnt="performanceNavigationTiming",X.prt="playbackRequiresTap",X.plt="playerInfo.playbackType",X.pis="playerInfo.playerInitializedState",X.paused="playerInfo.isPausedOnLoad",X.yt_pt="playerType",X.fmt="playerInfo.itag",X.yt_pl="watchInfo.isPlaylist",X.yt_pre="playerInfo.preloadType",
X.yt_ad_pr="prerollAllowed",X.pa="previousAction",X.yt_red="isRedSubscriber",X.rce="mwebInfo.responseContentEncoding",X.rc="resourceInfo.resourceCache",X.scrh="screenHeight",X.scrw="screenWidth",X.st="serverTimeMs",X.ssdm="shellStartupDurationMs",X.br_trs="tvInfo.bedrockTriggerState",X.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",X.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",X.label="tvInfo.label",X.is_mdx="tvInfo.isMdx",X.preloaded="tvInfo.isPreloaded",X.aac_type="tvInfo.authAccessCredentialType",
X.upg_player_vis="playerInfo.visibilityState",X.query="unpluggedInfo.query",X.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",X.yt_vst="videoStreamType",X.vph="viewportHeight",X.vpw="viewportWidth",X.yt_vis="isVisible",X.rcl="mwebInfo.responseContentLength",X.GetSettings_rid="requestIds",X.GetTrending_rid="requestIds",X.GetMusicSearchSuggestions_rid="requestIds",X.REQUEST_ID="requestIds",X),bu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
cu={},du=(cu.ccs="CANARY_STATE_",cu.mver="MEASUREMENT_VERSION_",cu.pis="PLAYER_INITIALIZED_STATE_",cu.yt_pt="LATENCY_PLAYER_",cu.pa="LATENCY_ACTION_",cu.ctop="TOP_ENTITY_TYPE_",cu.yt_vst="VIDEO_STREAM_TYPE_",cu),eu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function fu(a,b,c){c=Vt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in au){c=au[a];0<=cb(bu,c)&&(b=!!b);a in du&&"string"===typeof b&&(b=du[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Mt({},d)}0<=cb(eu,a)||ts(new fm("Unknown label logged with GEL CSI",a))}
;function gu(a,b){To.call(this,1,arguments);this.timer=b}
w(gu,To);var hu=new Uo("aft-recorded",gu);var iu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",iu);function ju(){this.h=0}
function ku(){ju.h||(ju.h=new ju);return ju.h}
ju.prototype.tick=function(a,b,c,d){lu(this,"tick_"+a+"_"+b)||$m("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ju.prototype.info=function(a,b,c){var d=Object.keys(a).join("");lu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,$m("latencyActionInfo",a,{cttAuthInfo:c}))};
ju.prototype.jspbInfo=function(){};
ju.prototype.span=function(a,b,c){var d=Object.keys(a).join("");lu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,$m("latencyActionSpan",a,{cttAuthInfo:c}))};
function lu(a,b){iu[b]=iu[b]||{count:0};var c=iu[b];c.count++;c.time=U();a.h||(a.h=jm(function(){var d=U(),e;for(e in iu)iu[e]&&6E4<d-iu[e].time&&delete iu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new fm("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||ts(c)),!0):!1}
;var mu=window;function nu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function ou(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=pu(e.requestStart),e.responseEnd=pu(e.responseEnd),e.redirectStart=pu(e.redirectStart),e.redirectEnd=pu(e.redirectEnd),e.domainLookupEnd=pu(e.domainLookupEnd),e.connectStart=pu(e.connectStart),e.connectEnd=
pu(e.connectEnd),e.responseStart=pu(e.responseStart),e.secureConnectionStart=pu(e.secureConnectionStart),e.domainLookupStart=pu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function pu(a){return Math.round(qu()+a)}
function qu(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=mu.performance||mu.mozPerformance||mu.msPerformance||mu.webkitPerformance||new nu;var ru=!1,su={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||ab,Z);function tu(a,b,c){if(null!==b){if("yt_lt"===a){var d="string"===typeof b?b:""+b;Tt(c).loadType=d}(a=fu(a,b,c))&&uu(a,c)}}
function uu(a,b){if(!S("web_csi_action_sampling_enabled")||!Rt(b).actionDisabled){var c=Zt(b||"");Mt(c.info,a);a.loadType&&(c=a.loadType,Tt(b).loadType=c);Mt(Wt(b),a);c=Xt(b);b=Rt(b).cttAuthInfo;ku().info(a,c,b)}}
function vu(){var a,b,c,d;return(null!=(d=null==fr().resolve(new ar(Ko))?void 0:null==(a=Lo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function wu(a,b,c){if(!S("web_csi_action_sampling_enabled")||!Rt(c).actionDisabled){var d=Xt(c),e;if(e=S("web_csi_debug_sample_enabled")&&d)if(!1===Rt(c).debugTicksExcludedLogged)e=!1;else if(0===vu().length)e=Rt(c).debugTicksExcludedLogged=!1;else{var f,g,h;e=(null==fr().resolve(new ar(Ko))?void 0:null==(f=Lo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=vu();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=
f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Rt(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,uu(f,c));Rt(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=Zt(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Vt(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ut(c);e=b||U();S("log_repeated_ytcsi_ticks")?
a in f||(f[a]=e):f[a]=e;f=Rt(c).cttAuthInfo;"_start"===a?(a=ku(),lu(a,"baseline_"+d)||$m("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):ku().tick(a,d,b,f);xu(c);return e}}}
function yu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=wq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function zu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=qu(),wu("rsf_"+b,c+Math.round(a.fetchStart)),wu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Au(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(wu("wffs",pu(b.startTime)),wu("wffe",pu(b.responseEnd)))}
function Bu(a){var b=Cu("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Cu(b[d],a);if(e)return e}return NaN}
function Cu(a,b){if(a=Ut(b)[a])return"number"===typeof a?a:a[a.length-1]}
function xu(a){var b=Cu("_start",a),c=Bu(a);b&&c&&!ru&&(Zo(hu,new gu(Math.round(c-b),a)),ru=!0)}
function Du(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Du(a[d],b[d]))return!1;return!0}
function Eu(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return pu(a.startTime)}a=Z.timing;
return a.ze?Math.max(0,a.ze):0}
;function Fu(a,b){Pk(function(){Zt("").info.actionType=a;b&&Lk("TIMING_AFT_KEYS",b);Lk("TIMING_ACTION",a);var c=R("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&tu(d,c[d]);c={isNavigation:!0,actionType:$t[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=R("PREVIOUS_ACTION"))c.previousAction=$t[d]||"LATENCY_ACTION_UNKNOWN";if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Ks())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=yu();if(1===d||-1===d)c.isVisible=
!0;Tt();St();c.loadType="cold";d=St();var e=ou(),f=qu(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(wu("srt",e.responseStart),1!==d.prerender&&wu("_start",f,void 0));d=Eu();0<d&&wu("fpt",d);d=ou();d.isPerformanceNavigationTiming&&uu({performanceNavigationTiming:!0});wu("nreqs",d.requestStart,void 0);wu("nress",d.responseStart,void 0);wu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(wu("nrs",d.redirectStart,void 0),wu("nre",
d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(wu("ndnss",d.domainLookupStart,void 0),wu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(wu("ntcps",d.connectStart,void 0),wu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=qu()&&0<d.connectEnd-d.secureConnectionStart&&(wu("nstcps",d.secureConnectionStart,void 0),wu("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&Au();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in su)su.hasOwnProperty(h)&&
(e=su[h],zu(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});uu(c);c=St();h=Wt();if("cold"===Tt().loadType&&("cold"===c.yt_lt||"cold"===h.loadType)){d=Ut();e=Vt();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])wu(k,Cu(k));else if(S("log_repeated_ytcsi_ticks"))for(f=v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,wu(k.slice(1),g);k={};d=!1;e=v(Object.keys(c));for(f=e.next();!f.done;f=
e.next())f=f.value,(f=fu(f,c[f]))&&!Du(Wt(),f)&&(Mt(h,f),Mt(k,f),d=!0);d&&uu(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Gu()&&Bu()&&xu()})()}
function Hu(a,b,c,d){Pk(tu)(a,b,c,d)}
function Iu(a,b,c){return Pk(wu)(a,b,c)}
function Gu(){return Pk(function(){return"_start"in Ut()})()}
function Ju(){Pk(function(){var a=Xt();requestAnimationFrame(function(){setTimeout(function(){a===Xt()&&Iu("ol",void 0,void 0)},0)})})()}
var Ku=window;Ku.ytcsi&&(Ku.ytcsi.info=Hu,Ku.ytcsi.tick=Iu);var Lu="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Mu=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Nu(a,b,c,d){this.m=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ub||(a.Ub={});a.Ub=Object.assign({},Bt,a.Ub)}
function Ou(a,b,c,d){if(void 0!==Nu.h){if(d=Nu.h,a=[a!==d.m,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new fm("InnerTubeTransportService is already initialized",a);
}else Nu.h=new Nu(a,b,c,d)}
function Pu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Ml:c;var d=st(b,a.m);if(!d)return Xd(new fm("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(Lt(e.input),new Sd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.jb)?void 0:g.mode)?"cors":void 0;if(a.l.Ze){var n=e.config,r;n=null==n?void 0:null==(r=n.Wb)?void 0:r.sessionIndex;r=Ll(0,{sessionIndex:n});k=Object.assign({},Qu(h),r);return l.v(2)}return l.yield(Ru(e.config,
h),3)}2!=l.h&&(k=l.i);f(Su(a,e,k));l.h=0})})):Xd(new fm("Error: Failed to build request for command.",b))}
function Tu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.cg)?0:d.gg)&&a.j){d=v(Lu);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Su(a,b,c){var d,e,f,g,h,k,l,n,r,t,p,x,y,z,H,I,M,N,K,V,Y,fa,pa,ma,Fa,Hg,Hq,Iq,Jq;return A(function(ja){switch(ja.h){case 1:ja.v(2);break;case 3:if((d=ja.i)&&!d.isExpired())return ja.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Oa)?0:f.context)){ja.v(4);break}g=b.Oa.context;ja.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ja.v(4);break}l=k.value;return ja.yield(l.Yf(g),8);case 8:k=h.next();ja.v(7);break;case 4:if(null==(n=a.i)||!n.dg(b.input,b.Oa)){ja.v(11);
break}return ja.yield(a.i.Vf(b.input,b.Oa),12);case 12:return r=ja.i,S("kevlar_process_local_innertube_responses_killswitch")||Tu(a,r,b),ja.return(r);case 11:return(x=null==(p=b.config)?void 0:p.Qa)&&a.h.has(x)&&S("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Oa),I=null!=(H=null==(z=b.jb)?void 0:z.headers)?H:{},b.jb=Object.assign({},b.jb,{headers:Object.assign({},I,c)}),M=Object.assign({},b.jb),"POST"===b.jb.method&&(M=Object.assign({},M,{body:y})),(null==(N=b.config)?0:N.Je)&&
Iu(b.config.Je),K=function(){return a.aa.fetch(b.input,M,b.config)},t=K(),x&&a.h.set(x,t)),ja.yield(t,13);
case 13:if((V=ja.i)&&"error"in V&&(null==(Y=V)?0:null==(fa=Y.error)?0:fa.details))for(pa=V.error.details,ma=v(pa),Fa=ma.next();!Fa.done;Fa=ma.next())Hg=Fa.value,(Hq=Hg["@type"])&&-1<Mu.indexOf(Hq)&&(delete Hg["@type"],V=Hg);x&&a.h.has(x)&&a.h.delete(x);(null==(Iq=b.config)?0:Iq.Ke)&&Iu(b.config.Ke);if(V||null==(Jq=a.i)||!Jq.Nf(b.input,b.Oa)){ja.v(14);break}return ja.yield(a.i.Uf(b.input,b.Oa),15);case 15:V=ja.i;case 14:return Tu(a,V,b),ja.return(V||void 0)}})}
function Ru(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Wb)?void 0:d.sessionIndex;var h=g.yield;var k=Ll(0,{sessionIndex:e});if(!(k instanceof Sd)){var l=new Sd(ab);Td(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Qu(b),f)))})}
function Qu(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Uu=new $q("INNERTUBE_TRANSPORT_TOKEN");var Vu=["share/get_web_player_share_panel"],Wu=["feedback"],Xu=["notification/modify_channel_preference"],Yu=["browse/edit_playlist"],Zu=["subscription/subscribe"],$u=["subscription/unsubscribe"];function av(){}
w(av,xt);av.prototype.j=function(){return Zu};
av.prototype.h=function(a){return Br(a,Ck)||void 0};
av.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(av.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function bv(){}
w(bv,xt);bv.prototype.j=function(){return $u};
bv.prototype.h=function(a){return Br(a,Bk)||void 0};
bv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(bv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function cv(){}
w(cv,xt);cv.prototype.j=function(){return Wu};
cv.prototype.h=function(a){return Br(a,wk)||void 0};
cv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(cv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function dv(){}
w(dv,xt);dv.prototype.j=function(){return Xu};
dv.prototype.h=function(a){return Br(a,Ak)||void 0};
dv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function ev(){}
w(ev,xt);ev.prototype.j=function(){return Yu};
ev.prototype.h=function(a){return Br(a,zk)||void 0};
ev.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function fv(){}
w(fv,xt);fv.prototype.j=function(){return Vu};
fv.prototype.h=function(a){return Br(a,yk)};
fv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var gv=new $q("NETWORK_SLI_TOKEN");function hv(a){this.h=a}
hv.prototype.fetch=function(a,b){var c=this,d,e,f;return A(function(g){c.h&&(d=ac(bc(5,qc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;S("wug_networking_gzip_request")&&(e=qp(b));f=new window.Request(a,e);return S("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){ts(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){ts(h)}))})};
hv.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Qf(),b=b.then(function(c){ts(new fm("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
hv[Zq]=[new ar(gv)];var iv=new $q("NETWORK_MANAGER_TOKEN");var jv;function kv(){var a,b,c;return A(function(d){if(1==d.h)return a=fr().resolve(Uu),a?d.yield(Pu(a),2):(ts(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ts(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Of;return d.return(c)}ts(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var lv=C.caches,mv;function nv(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ov(){return A(function(a){if(void 0!==mv)return a.return(mv);mv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(lv.open("test-only"),4);case 4:return d.yield(lv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(mv)})}
function pv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(ov(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(lv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=nv(f),h=g.datasyncId,!h||a.includes(h)||b.push(lv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function qv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(ov(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=hm("cache contains other");return h.yield(lv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=nv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function rv(){kv().then(function(a){a&&(po(a),pv(a),It(a))})}
function sv(){var a=new iq;oi.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=hm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];po(g);pv(g);It(g);return f.return()}c=Jt();return f.yield(qv(),3);case 3:return d=f.i,f.yield(qo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?rv():a.h.add("publicytnetworkstatus-online",rv,!0,void 0,void 0),f.h=0}})})}
;var Nh=ha(["data-"]);function tv(a){a&&(a.dataset?a.dataset[uv("loaded")]="true":Mh(a))}
function vv(a,b){return a?a.dataset?a.dataset[uv(b)]:a.getAttribute("data-"+b):null}
var wv={};function uv(a){return wv[a]||(wv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var xv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,yv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function zv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(xv,""),c=c.replace(yv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Av(a,b,c)}
function Av(a,b,c){c=void 0===c?null:c;var d=Bv(a),e=document.getElementById(d),f=e&&vv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Tq(d,b),b=""+Pa(b),Cv[b]=f),g||(e=Dv(a,d,function(){if(!vv(e,"loaded")){tv(e);Wq(d);var h=Va(Xq,d);hl(h,0)}},c)))}
function Dv(a,b,c,d){d=void 0===d?null:d;var e=Ed("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sh(e,nk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Ev(a){a=Bv(a);var b=document.getElementById(a);b&&(Xq(a),b.parentNode.removeChild(b))}
function Fv(a,b){a&&b&&(a=""+Pa(b),(a=Cv[a])&&Vq(a))}
function Bv(a){var b=document.createElement("a");Ih(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var Cv={};var Gv=[],Hv=!1;function Iv(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Xs()){var a=R("PLAYER_VARS",{});if("1"!=pb(a)&&!Ys(a)){var b=function(){Hv=!0;"google_ad_status"in window?Lk("DCLKSTAT",1):Lk("DCLKSTAT",2)};
try{zv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Gv.push(oi.oa(function(){if(!(Hv||"google_ad_status"in window)){try{Fv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Hv=!0;Lk("DCLKSTAT",3)}},5E3))}}}
function Jv(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Kv(a){or.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.la},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Kv,or);Kv.prototype.la=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Kv.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Kv.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Kv.prototype.i=function(){this.h=new Map};function Lv(a){or.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Lv,or);Lv.prototype.i=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Lv.prototype.h=function(a,b){a(null==b?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Lv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Lv.prototype.G=function(a,b){a(null==b?void 0:b.event)};function Mv(){this.l=new Kv;this.m=new Lv}
Mv.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function Nv(a){To.call(this,1,arguments);this.csn=a}
w(Nv,To);var bp=new Uo("screen-created",Nv),Ov=[],Pv=0,Qv=new Map,Rv=new Map,Sv=new Map;
function Tv(a,b,c,d,e){e=void 0===e?!1:e;for(var f=Uv({cttAuthInfo:Ms(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(nb(k)||!k.trackingParams&&!k.veType)&&ts(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Vv(h,b);if(k.veType&&!Rv.has(l)&&!Sv.has(l)&&!e){Qv.set(l,[a,b,c,h]);return}h=Vv(c,b);Qv.has(h)?Wv(c,b):Sv.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?Xv("visualElementAttached",f,c):a?ks("visualElementAttached",c,a,f):$m("visualElementAttached",c,f)}
function Xv(a,b,c){Ov.push({De:a,payload:c,Tf:void 0,options:b});Pv||(Pv=cp())}
function dp(a){if(Ov){for(var b=v(Ov),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,$m(c.De,c.payload,c.options));Ov.length=0}Pv=0}
function Vv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Wv(a,b){a=Vv(a,b);Qv.has(a)&&(b=Qv.get(a)||[],Tv(b[0],b[1],b[2],[b[3]],!0),Qv.delete(a))}
function Uv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Yv(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
Yv.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Ks(void 0===c?0:c)){a=this.client;d=new Ds({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Vv(d,c);Rv.set(f,!0);Wv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Uv({cttAuthInfo:Ms(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?Xv("visualElementGestured",f,d):a?ks("visualElementGestured",d,a,f):$m("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Yv.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Ds({trackingParams:a}),b,void 0===c?0:c)};
Yv.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=Ks(d);a||(a=(a=Hs(void 0===d?0:d))?new Ds({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Uv({cttAuthInfo:Ms(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?Xv("visualElementStateChanged",d,b):a?ks("visualElementStateChanged",b,a,d):$m("visualElementStateChanged",b,d))}};
function Zv(a,b){if(void 0===b)for(var c=Js(),d=0;d<c.length;d++)void 0!==c[d]&&Zv(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Tv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function $v(){Mv.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w($v,Mv);$v.prototype.j=function(){$m("finalPayload",{csn:Ks()})};
$v.prototype.h=function(){xs(ys)};
$v.prototype.i=function(){var a=Zv;Yv.h||(Yv.h=new Yv);a(Yv.h)};function aw(){}
function bw(){var a=E("ytglobal.storage_");a||(a=new aw,D("ytglobal.storage_",a));return a}
aw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(cw()):d.return()})};
function cw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",aw);function Ym(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=T("ytidb_transaction_ended_event_rate_limit_session",.2)}
Ym.prototype.Qb=function(a){this.handleError(a)};
Ym.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":dw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=T("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function dw(a,b){bw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:ew(null==c?void 0:c.usage),deviceStorageQuotaMbytes:ew(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ew(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function fw(a,b,c){G.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(fw,G);fw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Rk(d)}}};
fw.prototype.M=function(){window.removeEventListener("message",this.s);G.prototype.M.call(this)};function gw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new fw(!!R("WIDGET_ID_ENFORCE")),b=this.Ge.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=gw.prototype;m.Ge=function(a,b,c){"addEventListener"===a&&b?this.Fc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.zc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Fc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.zc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ee=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Cc());this.sendMessage("onReady");db(this.i,this.Ad,this);this.i=[]};
m.Cc=function(){return null};
function hw(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var iw={},jw=(iw["api.invalidparam"]=2,iw.auth=150,iw["drm.auth"]=150,iw["heartbeat.net"]=150,iw["heartbeat.servererror"]=150,iw["heartbeat.stop"]=150,iw["html5.unsupportedads"]=5,iw["fmt.noneavailable"]=5,iw["fmt.decode"]=5,iw["fmt.unplayable"]=5,iw["html5.missingapi"]=5,iw["html5.unsupportedlive"]=5,iw["drm.unavailable"]=5,iw["mrm.blocked"]=151,iw);var kw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function lw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function mw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(kw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function nw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ow(a){gw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Se.bind(this));this.addEventListener("onVolumeChange",this.Te.bind(this));this.addEventListener("onApiChange",this.Ne.bind(this));this.addEventListener("onPlaybackQualityChange",this.Pe.bind(this));this.addEventListener("onPlaybackRateChange",this.Qe.bind(this));this.addEventListener("onStateChange",this.Re.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ue.bind(this))}
w(ow,gw);m=ow.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&lw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=mw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=mw(e);break;case "loadPlaylist":case "cuePlaylist":e=nw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);lw(a)&&hw(this,this.Cc())}};
m.Fc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);gw.prototype.Fc.call(this,a,b)};
m.zc=function(a,b){var c=this,d=gw.prototype.zc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.ee.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?jw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Cc=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Re=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());hw(this,a)};
m.Pe=function(a){hw(this,{playbackQuality:a})};
m.Qe=function(a){hw(this,{playbackRate:a})};
m.Ne=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Te=function(){hw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Se=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());hw(this,a)};
m.Ue=function(){var a={sphericalProperties:this.api.getSphericalProperties()};hw(this,a)};
m.dispose=function(){gw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function pw(a){G.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(pw,G);m=pw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.kb("RECEIVING"))};
m.kb=function(a,b){this.started&&!this.Z()&&this.connection.kb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=qw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=rw(a,c))&&this.kb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Oe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Oe=function(a,b){this.started&&!this.Z()&&this.connection.kb(a,this.Bc(a,b))};
m.Bc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.M.call(this)};function sw(a,b){pw.call(this,b);this.api=a;this.start()}
w(sw,pw);sw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
sw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function qw(a,b){switch(a){case "loadVideoById":return a=mw(b),[a];case "cueVideoById":return a=mw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=nw(b),[a];case "cuePlaylist":return a=nw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function rw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
sw.prototype.Bc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return pw.prototype.Bc.call(this,a,b)};
sw.prototype.M=function(){pw.prototype.M.call(this);delete this.api};function tw(a){a=void 0===a?!1:a;G.call(this);this.h=new L(a);xc(this,this.h)}
Xa(tw,G);tw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
tw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
tw.prototype.l=function(a,b){this.Z()||this.h.ab.apply(this.h,arguments)};function uw(a,b,c){tw.call(this);this.j=a;this.i=b;this.id=c}
w(uw,tw);uw.prototype.kb=function(a,b){this.Z()||this.j.kb(this.i,this.id,a,b)};
uw.prototype.M=function(){this.i=this.j=null;tw.prototype.M.call(this)};function vw(a,b,c){G.call(this);this.h=a;this.origin=c;this.i=Dq(window,"message",this.j.bind(this));this.connection=new uw(this,a,b);xc(this,this.connection)}
w(vw,G);vw.prototype.kb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
vw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
vw.prototype.M=function(){Eq(this.i);this.h=null;G.prototype.M.call(this)};function ww(){this.state=1;this.h=null}
m=ww.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=wb();d=f?f.createScript(d):d;d=new Bb(d,Ab)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,yb("From proto message. b/166824318"),e=Fb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());xw(this,d,e,a.program,b,c)}else ts(Error("Cannot initialize botguard without program"))};
function xw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,zv(c,function(){window[g]?yw(a,d,g,e):(a.state=3,Ev(c),ts(new fm("Unable to load Botguard","from "+c)))},f)):b?(f=Ed("SCRIPT"),b instanceof Bb?(b instanceof Bb&&b.constructor===Bb?b=b.h:(Ma(b),b="type_error:SafeScript"),f.textContent=b,Rh(f)):f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?yw(a,d,g,e):(a.state=4,ts(new fm("Unable to load Botguard from JS")))):ts(new fm("Unable to load VM; no url or JS provided"))}
function yw(a,b,c,d){a.state=5;try{var e=new Eh({program:b,ke:c,He:S("att_web_record_metrics")});e.We.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&ts(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Jd({gd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Qc=function(a){vc(this.h);this.h=a};function zw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Aw(){ww.apply(this,arguments)}
w(Aw,ww);Aw.prototype.Qc=function(a){var b;null==(b=zw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Aw.prototype.Tc=function(){return!!zw()};
Aw.prototype.Jd=function(a){return zw().bgvmc(a)};var Bw=new Aw;function Cw(){return Bw.Tc()}
function Dw(a){a=void 0===a?{}:a;return Bw.invoke(a)}
;function Ew(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||rb(b);this.assets=a.assets||{};this.attrs=a.attrs||rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ew.prototype.clone=function(){var a=new Ew,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=rb(c):a[b]=c}return a};var Fw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Gw(a){a=a||"";if(window.spf){var b=a.match(Fw);spf.style.load(a,b?b[1]:"",void 0)}else Hw(a)}
function Hw(a){var b=Iw(a),c=document.getElementById(b),d=c&&vv(c,"loaded");d||c&&!d||(c=Jw(a,b,function(){if(!vv(c,"loaded")){tv(c);Wq(b);var e=Va(Xq,b);hl(e,0)}}))}
function Jw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=nk(a);Qh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Iw(a){var b=Ed("A");Ih(b,new Hb(a,Ib));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function Kw(){G.call(this);this.h=[]}
w(Kw,G);Kw.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}G.prototype.M.call(this)};function Lw(){Kw.apply(this,arguments)}
w(Lw,Kw);function Mw(a,b,c,d,e){G.call(this);var f=this;this.s=b;this.webPlayerContextConfig=d;this.vc=e;this.Ba=!1;this.api={};this.ea=this.m=null;this.S=new L;this.h={};this.Y=this.ma=this.elementId=this.Ja=this.config=null;this.W=!1;this.j=this.D=null;this.na={};this.wc=["onReady"];this.lastError=null;this.ob=NaN;this.R={};this.Od=new Lw(this);this.da=0;this.i=this.l=a;xc(this,this.S);Nw(this);Ow(this);xc(this,this.Od);c?this.da=hl(function(){f.loadNewVideoConfig(c)},0):d&&(Pw(this),Qw(this))}
w(Mw,G);m=Mw.prototype;m.getId=function(){return this.s};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Ew||(b=new Ew(b));this.config=b;this.setConfig(a);Qw(this);this.isReady()&&Rw(this)}};
function Pw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.s,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.s:a.config.attrs.id=a.s);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ja=a;this.config=Sw(a);Pw(this);if(!this.ma){var b;this.ma=Tw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=gi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=gi(Number(a)||a))};
function Rw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Uw(a){var b=!0,c=Vw(a);c&&a.config&&(a=Ww(a),b=vv(c,"version")===a);return b&&!!E("yt.player.Application.create")}
function Qw(a){if(!a.Z()&&!a.W){var b=Uw(a);if(b&&"html5"===(Vw(a)?"html5":null))a.Y="html5",a.isReady()||Xw(a);else if(Yw(a),a.Y="html5",b&&a.j&&a.l)a.l.appendChild(a.j),Xw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=Zw(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Sw(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.vc);Xw(a)};
a.W=!0;b?a.D():(zv(Ww(a),a.D),(b=$w(a))&&Gw(b),ax(a)&&!c&&D("yt.player.Application.create",null))}}}
function Vw(a){var b=Dd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Xw(a){if(!a.Z()){var b=Vw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!Zw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}bx(a)}else a.ob=hl(function(){Xw(a)},50)}}
function bx(a){Nw(a);a.Ba=!0;var b=Vw(a);if(b){a.m=cx(a,b,"addEventListener");a.ea=cx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=cx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);Rw(a);a.ma&&a.ma(a.api);a.S.ab("onReady",a.api)}
function cx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,ts(f))}}}
function Nw(a){a.Ba=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.m=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ja};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
function Ow(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Wq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Wq("WATCH_LATER_VIDEO_REMOVED",b)})}
m.addEventListener=function(a,b){var c=this,d=Tw(this,b);d&&(0<=cb(this.wc,a)||this.h[a]||(b=dx(this,a),this.m&&this.m(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&hl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=Tw(this,b))&&this.S.unsubscribe(a,b)};
function Tw(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){ss(f)}};
a.na[b]=c}return c?c:null}
function dx(a,b){var c="ytPlayer"+b+a.s;a.h[b]=c;C[c]=function(d){var e=hl(function(){if(!a.Z()){try{a.S.ab(b,null!=d?d:void 0)}catch(h){ts(new fm("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.s,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
ob(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(Vw(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Yw(a){a.cancel();Nw(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Vw(a);b&&(Uw(a)||!ax(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&Fv(Ww(this),this.D);window.clearTimeout(this.ob);this.W=!1};
m.M=function(){Yw(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){ss(b)}this.na=null;for(var a in this.h)this.h.hasOwnProperty(a)&&(C[this.h[a]]=null);this.Ja=this.config=this.api=null;delete this.l;delete this.i;G.prototype.M.call(this)};
function ax(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Ww(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function $w(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Zw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Uk(c||"","&")[b]}
function Sw(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?rb(e):e}return b}
;var ex={},fx="player_uid_"+(1E9*Math.random()>>>0);function gx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Dd(c):c;var e=fx+"_"+Pa(c),f=ex[e];if(f&&d)return hx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Mw(c,e,a,b,void 0);ex[e]=f;Wq("player-added",f.api);yc(f,function(){delete ex[f.getId()]});
return f.api}
function hx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ix=null,jx=null,kx=null;function lx(){mx()}
function nx(){mx()}
function mx(){var a=ix.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function ox(){ix&&ix.sendAbandonmentPing&&ix.sendAbandonmentPing();R("PL_ATT")&&Bw.dispose();for(var a=oi,b=0,c=Gv.length;b<c;b++)a.qa(Gv[b]);Gv.length=0;Ev("//static.doubleclick.net/instream/ad_status.js");Hv=!1;Lk("DCLKSTAT",0);wc(kx,jx);ix&&(ix.removeEventListener("onVideoDataChange",lx),ix.destroy())}
;function px(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Dt(a,b);if(c)return!1;Lt(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=lc(a,e);Lt(a);f=a+f;var h=void 0===h?$h:h;a:{h=void 0===h?$h:h;for(a=0;a<h.length;++a)if(b=h[a],b instanceof Yh&&b.te(f)){h=new Hb(f,Ib);break a}h=void 0}g=g.location;h=Hh(h||Jb);void 0!==h&&(g.href=h)}return!0}
;D("yt.setConfig",Lk);D("yt.config.set",Lk);D("yt.setMsg",Os);D("yt.msgs.set",Os);D("yt.logging.errors.log",ss);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}gt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Fu("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Zk(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Fu("watch",["pbs","pbu","pbp"]);ix=gx(a,c);ix.addEventListener("onVideoDataChange",lx);ix.addEventListener("onReady",nx);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?kx=new ow(ix):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(jx=new vw(window.parent,a,b),kx=new sw(ix,jx.connection));Iv();S("ytidb_create_logger_embed_killswitch")||Xm();a={};$v.h||($v.h=new $v);
$v.h.install((a.flush_logs={callback:function(){Xr()}},a));
tq();S("ytidb_clear_embedded_player")&&oi.oa(function(){var f,g;if(!jv){var h=fr(),k={Nc:iv,Hd:hv};h.h.set(k.Nc,k);k={ed:{feedbackEndpoint:tt(cv),modifyChannelNotificationPreferenceEndpoint:tt(dv),playlistEditEndpoint:tt(ev),subscribeEndpoint:tt(av),unsubscribeEndpoint:tt(bv),webPlayerShareEntityServiceEndpoint:tt(fv)}};var l=rt(),n={};l&&(n.client_location=l);void 0===f&&(f=Kl());void 0===g&&(g=h.resolve(iv));Ou(k,g,f,n);f={Nc:Uu,Id:Nu.h};h.h.set(f.Nc,f);jv=h.resolve(Uu)}sv()})});
var qx=Pk(function(){Ju();ht()}),rx=Pk(function(a){a.persisted||(Ju(),ht())}),sx=Pk(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?ox():a.persisted||ox()}),tx=Pk(ox);
window.addEventListener?(window.addEventListener("load",qx),window.addEventListener("pageshow",rx),window.addEventListener("pagehide",sx)):window.attachEvent&&(window.attachEvent("onload",qx),window.attachEvent("onunload",tx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Mk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new fm(g),e.name="UnhandledWindowError",e.message=
g,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?ss(e):ts(e))};
he=us;window.addEventListener("unhandledrejection",function(a){us(a.reason)});
db(R("ERRORS")||[],function(a){ss.apply(null,a)});
Lk("ERRORS",[]);S("embeds_web_enable_scheduler_to_player_binary")&&Om();D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Cw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Dw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||Jv);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||px);D("yt.util.activity.init",E("yt.util.activity.init")||Lq);
D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Oq);D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Mq);}).call(this);

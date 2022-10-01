// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).bifurcate=r()}(this,(function(){"use strict";var t=Math.floor;function r(r){return t(r)===r}function e(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&r(t.length)&&t.length>=0&&t.length<=9007199254740991}function n(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return o&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var f=Object.prototype.hasOwnProperty;function c(t,r){return null!=t&&f.call(t,r)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var a=u()?function(t){var r,e,n;if(null==t)return i.call(t);e=t[l],r=c(t,l);try{t[l]=void 0}catch(r){return i.call(t)}return n=i.call(t),r?t[l]=e:delete t[l],n}:function(t){return i.call(t)};var s=Array.isArray?Array.isArray:function(t){return"[object Array]"===a(t)};var p=/./,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var b,v=Object.defineProperty,g=Object.prototype,d=g.toString,h=g.__defineGetter__,j=g.__defineSetter__,m=g.__lookupGetter__,w=g.__lookupSetter__;b=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?v:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===d.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===d.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(m.call(t,r)||w.call(t,r)?(n=t.__proto__,t.__proto__=g,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&h&&h.call(t,r,e.get),i&&j&&j.call(t,r,e.set),t};var _=b;function O(t,r,e){_(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function E(t){return"boolean"==typeof t}var T=Boolean.prototype.toString;var S=u();function P(t){return"object"==typeof t&&(t instanceof Boolean||(S?function(t){try{return T.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===a(t)))}function I(t){return E(t)||P(t)}function A(){return new Function("return this;")()}O(I,"isPrimitive",E),O(I,"isObject",P);var B="object"==typeof self?self:null,N="object"==typeof window?window:null,V="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},F="object"==typeof V?V:null;var x=function(t){if(arguments.length){if(!E(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(B)return B;if(N)return N;if(F)return F;throw new Error("unexpected error. Unable to resolve global object.")}(),k=x.document&&x.document.childNodes,q=Int8Array;function C(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function L(t){return null!==t&&"object"==typeof t}function M(t){var r,e,n,o;if(("Object"===(e=a(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=G.exec(n.toString()))return r[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}O(C,"REGEXP",G),O(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!s(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(L));var R="function"==typeof p||"object"==typeof q||"function"==typeof k?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function U(t){return"function"===R(t)}var Y,X=Object.getPrototypeOf;Y=U(Object.getPrototypeOf)?X:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===a(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=Y;var D=Object.prototype;function H(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!s(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!c(t,"constructor")&&c(r,"constructor")&&U(r.constructor)&&"[object Function]"===a(r.constructor)&&c(r,"isPrototypeOf")&&U(r.isPrototypeOf)&&(r===D||function(t){var r;for(r in t)if(!c(t,r))return!1;return!0}(t)))}function J(t){return"number"==typeof t}var K=Number,Q=K.prototype.toString;var W=u();function Z(t){return"object"==typeof t&&(t instanceof K||(W?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===a(t)))}function $(t){return J(t)||Z(t)}function tt(t){return t!=t}function rt(t){return J(t)&&tt(t)}function et(t){return Z(t)&&tt(t.valueOf())}function nt(t){return rt(t)||et(t)}function ot(t){return"string"==typeof t}O($,"isPrimitive",J),O($,"isObject",Z),O(nt,"isPrimitive",rt),O(nt,"isObject",et);var ut=String.prototype.valueOf;var it=u();function ft(t){return"object"==typeof t&&(t instanceof String||(it?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===a(t)))}function ct(t){return ot(t)||ft(t)}O(ct,"isPrimitive",ot),O(ct,"isObject",ft);var lt=Number.POSITIVE_INFINITY,at=K.NEGATIVE_INFINITY;function st(t){return t<lt&&t>at&&r(t)}function pt(t){return J(t)&&st(t)}function yt(t){return Z(t)&&st(t.valueOf())}function bt(t){return pt(t)||yt(t)}O(bt,"isPrimitive",pt),O(bt,"isObject",yt);var vt=["values","indices","*"];function gt(t,r){return H(r)?c(r,"returns")&&(t.returns=r.returns,-1===function(t,r,n){var o,u;if(!e(t)&&!ot(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(o=t.length))return-1;if(3===arguments.length){if(!pt(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=o)return-1;u=n}else(u=o+n)<0&&(u=0)}else u=0;if(nt(r)){for(;u<o;u++)if(nt(t[u]))return u}else for(;u<o;u++)if(t[u]===r)return u;return-1}(vt,t.returns))?new TypeError(n("0iq3t","returns",vt.join('", "'),t.returns)):null:new TypeError(n("0iq2h",r))}function dt(t,r){var e,n,o;if(0===(n=t.length))return[];for(e=[[],[]],o=0;o<n;o++)r[o]?e[0].push(t[o]):e[1].push(t[o]);return e}function ht(t,r){var e,n,o;if(0===(n=t.length))return[];for(e=[[],[]],o=0;o<n;o++)r[o]?e[0].push(o):e[1].push(o);return e}function jt(t,r){var e,n,o;if(0===(n=t.length))return[];for(e=[[],[]],o=0;o<n;o++)r[o]?e[0].push([o,t[o]]):e[1].push([o,t[o]]);return e}return function(t,r,o){var u,i,f;if(!e(t))throw new TypeError(n("0iqBO",t));if(u={returns:"values"},2===arguments.length)f=r;else{if(i=gt(u,r))throw i;f=o}if(!e(f))throw new TypeError(n("0iqBT",f));if(t.length!==f.length)throw new RangeError(n("0iq1k"));return"values"===u.returns?dt(t,f):"indices"===u.returns?ht(t,f):jt(t,f)}}));
//# sourceMappingURL=index.js.map

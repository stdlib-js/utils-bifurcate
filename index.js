// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).bifurcate=e()}(this,(function(){"use strict";var r=Math.floor;function e(e){return r(e)===e}function t(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=9007199254740991}var n="function";var i={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function o(r){var e=i[r];return"function"==typeof e?e:i.default}var a={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function u(r){var e=a[r];return"function"==typeof e?e:a.default}var f="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function c(r){return"number"==typeof r}function s(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function h(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+s(i):s(i)+r,n&&(r="-"+r)),r}var y=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=h(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=h(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===p.call(r.specifier)?p.call(t):y.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(r){return"string"==typeof r}var w=Math.abs,b=String.prototype.toLowerCase,v=String.prototype.toUpperCase,d=String.prototype.replace,E=/e\+(\d)$/,A=/e-(\d)$/,T=/^(\d+)$/,_=/^(\d+)e/,j=/\.0$/,x=/\.0*e/,V=/(\..*[^0])0*e/;function k(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!c(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,V,"$1e"),t=d.call(t,x,"e"),t=d.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,E,"e+0$1"),t=d.call(t,A,"e-0$1"),r.alternate&&(t=d.call(t,T,"$1."),t=d.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)}function R(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+R(n):R(n)+r}var L=String.fromCharCode,O=isNaN,B=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,a,u,f,l;if(!B(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(m(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,O(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(o)?String(n.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=C.exec(r);n;)(e=r.slice(i,C.lastIndex-n[0].length)).length&&t.push(e),t.push(M(n)),i=C.lastIndex,n=C.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function N(r){var e,t,n;if(!U(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var Y,W=Object.prototype,$=W.toString,G=W.__defineGetter__,Z=W.__defineSetter__,X=W.__lookupGetter__,J=W.__lookupSetter__;Y=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=W,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&Z&&Z.call(r,e,t.set),r};var z=Y;function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=H()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)};var ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function or(r){return null!==r&&"object"==typeof r}function ar(r){return or(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ur(){return/^\s*function\s*([^(]*)/i}q(or,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(or));var fr=/^\s*function\s*([^(]*)/i;function lr(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return ar(r)?"Buffer":t}q(ur,"REGEXP",fr);var cr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},sr="function"==typeof Float64Array;var hr="function"==typeof Float64Array?Float64Array:null;var yr="function"==typeof Float64Array?Float64Array:void 0;var pr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr([1,3.14,-3.14,NaN]),t=e,r=(sr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")},gr="function"==typeof Float32Array;var mr=Number.POSITIVE_INFINITY,wr="function"==typeof Float32Array?Float32Array:null;var br="function"==typeof Float32Array?Float32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,5e40]),t=e,r=(gr&&t instanceof Float32Array||"[object Float32Array]"===nr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===mr}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")},dr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null;var Ar="function"==typeof Uint32Array?Uint32Array:void 0;var Tr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Int32Array;var jr="function"==typeof Int32Array?Int32Array:null;var xr="function"==typeof Int32Array?Int32Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr([1,3.14,-3.14,2147483648]),t=e,r=(_r&&t instanceof Int32Array||"[object Int32Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?xr:function(){throw new Error("not implemented")},kr="function"==typeof Uint16Array;var Rr="function"==typeof Uint16Array?Uint16Array:null;var Sr="function"==typeof Uint16Array?Uint16Array:void 0;var Lr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(kr&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Sr:function(){throw new Error("not implemented")},Or="function"==typeof Int16Array;var Br="function"==typeof Int16Array?Int16Array:null;var Ir="function"==typeof Int16Array?Int16Array:void 0;var Fr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,32768]),t=e,r=(Or&&t instanceof Int16Array||"[object Int16Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")},Cr="function"==typeof Uint8Array;var Mr="function"==typeof Uint8Array?Uint8Array:null;var Pr="function"==typeof Uint8Array?Uint8Array:void 0;var Ur=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr(e=[1,3.14,-3.14,256,257]),t=e,r=(Cr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Nr="function"==typeof Uint8ClampedArray;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Wr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Nr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===nr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Int8Array;var Zr="function"==typeof Int8Array?Int8Array:null;var Xr="function"==typeof Int8Array?Int8Array:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,128]),t=e,r=(Gr&&t instanceof Int8Array||"[object Int8Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};function zr(r){return"number"==typeof r}var qr=Number,Dr=qr.prototype.toString;var Hr=H();function Kr(r){return"object"==typeof r&&(r instanceof qr||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function Qr(r){return zr(r)||Kr(r)}q(Qr,"isPrimitive",zr),q(Qr,"isObject",Kr);var re=qr.NEGATIVE_INFINITY;function ee(r){return r<mr&&r>re&&e(r)}function te(r){return zr(r)&&ee(r)}function ne(r){return Kr(r)&&ee(r.valueOf())}function ie(r){return te(r)||ne(r)}function oe(r){return te(r)&&r>=0}function ae(r){return ne(r)&&r.valueOf()>=0}function ue(r){return oe(r)||ae(r)}q(ie,"isPrimitive",te),q(ie,"isObject",ne),q(ue,"isPrimitive",oe),q(ue,"isObject",ae);function fe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&e(r.length)&&r.length>=0&&r.length<=4294967295}var le="function"==typeof ArrayBuffer;function ce(r){return le&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===nr(r)}function se(r){return"object"==typeof r&&null!==r&&!ir(r)}var he=/./;function ye(r){return"boolean"==typeof r}var pe=Boolean,ge=Boolean.prototype.toString;var me=H();function we(r){return"object"==typeof r&&(r instanceof pe||(me?function(r){try{return ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function be(r){return ye(r)||we(r)}function ve(){return new Function("return this;")()}q(be,"isPrimitive",ye),q(be,"isObject",we);var de="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Ae="object"==typeof global?global:null,Te="object"==typeof globalThis?globalThis:null;var _e=function(r){if(arguments.length){if(!ye(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ve()}if(Te)return Te;if(de)return de;if(Ee)return Ee;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),je=_e.document&&_e.document.childNodes,xe=Int8Array;var Ve="function"==typeof he||"object"==typeof xe||"function"==typeof je?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?lr(r).toLowerCase():e};function ke(r){return"function"===Ve(r)}function Re(r,e){if(!(this instanceof Re))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(N("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(N("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}q(Re,"BYTES_PER_ELEMENT",8),q(Re.prototype,"BYTES_PER_ELEMENT",8),q(Re.prototype,"byteLength",16),q(Re.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(Re.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Se="function"==typeof Math.fround?Math.fround:null,Le=new vr(1);var Oe="function"==typeof Se?Se:function(r){return Le[0]=r,Le[0]};function Be(r,e){if(!(this instanceof Be))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zr(r))throw new TypeError(N("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zr(e))throw new TypeError(N("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Oe(r)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Oe(e)}),this}function Ie(r){return r instanceof Re||r instanceof Be||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Fe(r){return e(r/2)}function Ce(){return"function"==typeof er&&"symbol"==typeof er("foo")&&rr(er,"iterator")&&"symbol"==typeof er.iterator}q(Be,"BYTES_PER_ELEMENT",4),q(Be.prototype,"BYTES_PER_ELEMENT",4),q(Be.prototype,"byteLength",8),q(Be.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(Be.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Me=Ce()?Symbol.iterator:null;function Pe(r,e,t){z(r,e,{configurable:!1,enumerable:!1,get:t})}function Ue(r){return r.re}function Ne(r){return r.im}function Ye(r,e){return new vr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function We(r,e){return new pr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function $e(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(fe(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ie(n))return new TypeError(N("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ue(n),Ne(n))}return e}function Ge(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,fe(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ie(o))return new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ue(o),Ne(o))}return n}function Ze(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ie(n=e[i]))return null;r[o]=Ue(n),r[o+1]=Ne(n),o+=2}return r}var Xe=2*vr.BYTES_PER_ELEMENT,Je=Ce();function ze(r){return r instanceof Ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function qe(r){return r===Ke||"Complex128Array"===r.name}function De(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Xe}function He(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Xe}function Ke(){var r,n,i,o;if(n=arguments.length,!(this instanceof Ke))return 0===n?new Ke:1===n?new Ke(arguments[0]):2===n?new Ke(arguments[0],arguments[1]):new Ke(arguments[0],arguments[1],arguments[2]);if(0===n)i=new vr(0);else if(1===n)if(oe(arguments[0]))i=new vr(2*arguments[0]);else if(t(arguments[0]))if((o=(i=arguments[0]).length)&&ir(i)&&Ie(i[0])){if(null===(i=Ze(new vr(2*o),i))){if(!Fe(o))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new vr(arguments[0])}}else{if(De(i))i=Ye(i,0);else if(He(i))i=We(i,0);else if(!Fe(o))throw new RangeError(N("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new vr(i)}else if(ce(arguments[0])){if(!e((i=arguments[0]).byteLength/Xe))throw new RangeError(N("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Xe,i.byteLength));i=new vr(i)}else{if(!se(arguments[0]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(i=arguments[0],!1===Je)throw new TypeError(N("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!ke(i[Me]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!ke((i=i[Me]()).next))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if((i=$e(i))instanceof Error)throw i;i=new vr(i)}else{if(!ce(i=arguments[0]))throw new TypeError(N("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",i));if(!oe(r=arguments[1]))throw new TypeError(N("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!e(r/Xe))throw new RangeError(N("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Xe,r));if(2===n){if(!e((o=i.byteLength-r)/Xe))throw new RangeError(N("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Xe,o));i=new vr(i,r)}else{if(!oe(o=arguments[2]))throw new TypeError(N("invalid argument. Length must be a nonnegative integer. Value: `%s`.",o));if(o*Xe>i.byteLength-r)throw new RangeError(N("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",o*Xe));i=new vr(i,r,2*o)}}return q(this,"_buffer",i),q(this,"_length",i.length/2),this}function Qe(r){return r.re}function rt(r){return r.im}function et(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(fe(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ie(n))return new TypeError(N("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Qe(n),rt(n))}return e}function tt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,fe(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ie(o))return new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),rt(o))}return n}function nt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ie(n=e[i]))return null;r[o]=Qe(n),r[o+1]=rt(n),o+=2}return r}q(Ke,"BYTES_PER_ELEMENT",Xe),q(Ke,"name","Complex64Array"),q(Ke,"from",(function(r){var e,n,i,a,f,l,c,s,h,y,p,g;if(!ke(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!ke(i=arguments[1]))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(ze(r)){if(s=r.length,i){for(f=(a=new this(s))._buffer,g=0,p=0;p<s;p++){if(Ie(y=i.call(e,r.get(p),p)))f[g]=Ue(y),f[g+1]=Ne(y);else{if(!(fe(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));f[g]=y[0],f[g+1]=y[1]}g+=2}return a}return new this(r)}if(t(r)){if(i){for(s=r.length,c=r.get&&r.set?o("default"):u("default"),p=0;p<s;p++)if(!Ie(c(r,p))){h=!0;break}if(h){if(!Fe(s))throw new RangeError(N("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,s));for(f=(a=new this(s/2))._buffer,p=0;p<s;p++)f[p]=i.call(e,c(r,p),p);return a}for(f=(a=new this(s))._buffer,g=0,p=0;p<s;p++){if(Ie(y=i.call(e,c(r,p),p)))f[g]=Ue(y),f[g+1]=Ne(y);else{if(!(fe(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));f[g]=y[0],f[g+1]=y[1]}g+=2}return a}return new this(r)}if(se(r)&&Je&&ke(r[Me])){if(!ke((f=r[Me]()).next))throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((l=i?Ge(f,i,e):$e(f))instanceof Error)throw l;for(f=(a=new this(s=l.length/2))._buffer,p=0;p<s;p++)f[p]=l[p];return a}throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),q(Ke,"of",(function(){var r,e;if(!ke(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Pe(Ke.prototype,"buffer",(function(){return this._buffer.buffer})),Pe(Ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),Pe(Ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(Ke.prototype,"BYTES_PER_ELEMENT",Ke.BYTES_PER_ELEMENT),q(Ke.prototype,"copyWithin",(function(r,e){if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),q(Ke.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Be(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),q(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&q(t,Me,(function(){return e.entries()})),t})),q(Ke.prototype,"get",(function(r){var e;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(r))throw new TypeError(N("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Be((e=this._buffer)[r*=2],e[r+1])})),Pe(Ke.prototype,"length",(function(){return this._length})),q(Ke.prototype,"set",(function(r){var e,n,i,o,a,u,f,l,c;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(!oe(n=arguments[1]))throw new TypeError(N("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Ie(r)){if(n>=this._length)throw new RangeError(N("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));return i[n*=2]=Ue(r),void(i[n+1]=Ne(r))}if(ze(r)){if(n+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=i.byteOffset+n*Xe,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new vr(e.length),l=0;l<e.length;l++)o[l]=e[l];e=o}for(n*=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2}else{if(!t(r))throw new TypeError(N("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(u=r.length,l=0;l<u;l++)if(!Ie(r[l])){a=!0;break}if(a){if(!Fe(u))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=i.byteOffset+n*Xe,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new vr(u),l=0;l<u;l++)o[l]=e[l];e=o}for(n*=2,u/=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=r[l],i[n]=Ue(f),i[n+1]=Ne(f),n+=2}}));var it=2*pr.BYTES_PER_ELEMENT,ot=Ce();function at(r){return r instanceof ct||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ut(r){return r===ct||"Complex64Array"===r.name}function ft(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it/2}function lt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it}function ct(){var r,n,i,o;if(n=arguments.length,!(this instanceof ct))return 0===n?new ct:1===n?new ct(arguments[0]):2===n?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===n)i=new pr(0);else if(1===n)if(oe(arguments[0]))i=new pr(2*arguments[0]);else if(t(arguments[0]))if((o=(i=arguments[0]).length)&&ir(i)&&Ie(i[0])){if(null===(i=nt(new pr(2*o),i))){if(!Fe(o))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new pr(arguments[0])}}else{if(ft(i))i=Ye(i,0);else if(lt(i))i=We(i,0);else if(!Fe(o))throw new RangeError(N("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",o));i=new pr(i)}else if(ce(arguments[0])){if(!e((i=arguments[0]).byteLength/it))throw new RangeError(N("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",it,i.byteLength));i=new pr(i)}else{if(!se(arguments[0]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(i=arguments[0],!1===ot)throw new TypeError(N("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",i));if(!ke(i[Me]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if(!ke((i=i[Me]()).next))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",i));if((i=et(i))instanceof Error)throw i;i=new pr(i)}else{if(!ce(i=arguments[0]))throw new TypeError(N("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",i));if(!oe(r=arguments[1]))throw new TypeError(N("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!e(r/it))throw new RangeError(N("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",it,r));if(2===n){if(!e((o=i.byteLength-r)/it))throw new RangeError(N("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",it,o));i=new pr(i,r)}else{if(!oe(o=arguments[2]))throw new TypeError(N("invalid argument. Length must be a nonnegative integer. Value: `%s`.",o));if(o*it>i.byteLength-r)throw new RangeError(N("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",o*it));i=new pr(i,r,2*o)}}return q(this,"_buffer",i),q(this,"_length",i.length/2),this}q(ct,"BYTES_PER_ELEMENT",it),q(ct,"name","Complex128Array"),q(ct,"from",(function(r){var e,n,i,a,f,l,c,s,h,y,p,g;if(!ke(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!ke(i=arguments[1]))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(e=arguments[2])}if(at(r)){if(s=r.length,i){for(f=(a=new this(s))._buffer,g=0,p=0;p<s;p++){if(Ie(y=i.call(e,r.get(p),p)))f[g]=Qe(y),f[g+1]=rt(y);else{if(!(fe(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));f[g]=y[0],f[g+1]=y[1]}g+=2}return a}return new this(r)}if(t(r)){if(i){for(s=r.length,c=r.get&&r.set?o("default"):u("default"),p=0;p<s;p++)if(!Ie(c(r,p))){h=!0;break}if(h){if(!Fe(s))throw new RangeError(N("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",s));for(f=(a=new this(s/2))._buffer,p=0;p<s;p++)f[p]=i.call(e,c(r,p),p);return a}for(f=(a=new this(s))._buffer,g=0,p=0;p<s;p++){if(Ie(y=i.call(e,c(r,p),p)))f[g]=Qe(y),f[g+1]=rt(y);else{if(!(fe(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));f[g]=y[0],f[g+1]=y[1]}g+=2}return a}return new this(r)}if(se(r)&&ot&&ke(r[Me])){if(!ke((f=r[Me]()).next))throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((l=i?tt(f,i,e):et(f))instanceof Error)throw l;for(f=(a=new this(s=l.length/2))._buffer,p=0;p<s;p++)f[p]=l[p];return a}throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),q(ct,"of",(function(){var r,e;if(!ke(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Pe(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Pe(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Pe(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),q(ct.prototype,"copyWithin",(function(r,e){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),q(ct.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Re(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),q(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&q(t,Me,(function(){return e.entries()})),t})),q(ct.prototype,"get",(function(r){var e;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(r))throw new TypeError(N("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Re((e=this._buffer)[r*=2],e[r+1])})),Pe(ct.prototype,"length",(function(){return this._length})),q(ct.prototype,"set",(function(r){var e,n,i,o,a,u,f,l,c;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=this._buffer,arguments.length>1){if(!oe(n=arguments[1]))throw new TypeError(N("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",n))}else n=0;if(Ie(r)){if(n>=this._length)throw new RangeError(N("invalid argument. Index argument is out-of-bounds. Value: `%u`.",n));return i[n*=2]=Qe(r),void(i[n+1]=rt(r))}if(at(r)){if(n+(u=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,c=i.byteOffset+n*it,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new pr(e.length),l=0;l<e.length;l++)o[l]=e[l];e=o}for(n*=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2}else{if(!t(r))throw new TypeError(N("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(u=r.length,l=0;l<u;l++)if(!Ie(r[l])){a=!0;break}if(a){if(!Fe(u))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",u));if(n+u/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,c=i.byteOffset+n*it,e.buffer===i.buffer&&e.byteOffset<c&&e.byteOffset+e.byteLength>c){for(o=new pr(u),l=0;l<u;l++)o[l]=e[l];e=o}for(n*=2,u/=2,c=0,l=0;l<u;l++)i[n]=e[c],i[n+1]=e[c+1],n+=2,c+=2;return}if(n+u>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(n*=2,l=0;l<u;l++)f=r[l],i[n]=Qe(f),i[n+1]=rt(f),n+=2}}));var st=[pr,vr,Vr,Tr,Fr,Lr,Jr,Ur,$r,Ke,ct],ht=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],yt=ht.length;function pt(r){var e,t=function(r){var e;if(ir(r))return"generic";if(ar(r))return null;for(e=0;e<yt;e++)if(r instanceof st[e])return ht[e];return cr[lr(r)]||null}(r);return typeof(e=r).get===n&&typeof e.set===n?o(t):u(t)}function gt(r,e){var t,n,i,o,a,u;if(i=r.length,e.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(0===i)return[];for(t=pt(r),n=pt(e),o=[[],[]],u=0;u<i;u++)a=t(r,u),n(e,u)?o[0].push(a):o[1].push(a);return o}function mt(r,e){var t,n,i,o;if(n=r.length,e.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(0===n)return[];for(t=pt(e),i=[[],[]],o=0;o<n;o++)t(e,o)?i[0].push(o):i[1].push(o);return i}function wt(r,e){var t,n,i,o,a,u;if(i=r.length,e.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");if(0===i)return[];for(t=pt(r),n=pt(e),o=[[],[]],u=0;u<i;u++)a=t(r,u),n(e,u)?o[0].push([u,a]):o[1].push([u,a]);return o}var bt,vt=Object,dt=Object.getPrototypeOf;bt=ke(Object.getPrototypeOf)?dt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===nr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Et=bt;var At=Object.prototype;function Tt(r){var e;return!!se(r)&&(e=function(r){return null==r?null:(r=vt(r),Et(r))}(r),!e||!rr(r,"constructor")&&rr(e,"constructor")&&ke(e.constructor)&&"[object Function]"===nr(e.constructor)&&rr(e,"isPrototypeOf")&&ke(e.isPrototypeOf)&&(e===At||function(r){var e;for(e in r)if(!rr(r,e))return!1;return!0}(r)))}function _t(r){return r!=r}function jt(r){return zr(r)&&_t(r)}function xt(r){return Kr(r)&&_t(r.valueOf())}function Vt(r){return jt(r)||xt(r)}function kt(r){return"string"==typeof r}q(Vt,"isPrimitive",jt),q(Vt,"isObject",xt);var Rt=String.prototype.valueOf;var St=H();function Lt(r){return"object"==typeof r&&(r instanceof String||(St?function(r){try{return Rt.call(r),!0}catch(r){return!1}}(r):"[object String]"===nr(r)))}function Ot(r){return kt(r)||Lt(r)}q(Ot,"isPrimitive",kt),q(Ot,"isObject",Lt);var Bt=["values","indices","*"];function It(r,e){return Tt(e)?rr(e,"returns")&&(r.returns=e.returns,-1===function(r,e,n){var i,o;if(!t(r)&&!kt(r))throw new TypeError(N("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(i=r.length))return-1;if(3===arguments.length){if(!te(n))throw new TypeError(N("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=i)return-1;o=n}else(o=i+n)<0&&(o=0)}else o=0;if(Vt(e)){for(;o<i;o++)if(Vt(r[o]))return o}else for(;o<i;o++)if(r[o]===e)return o;return-1}(Bt,r.returns))?new TypeError(N('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Bt.join('", "'),r.returns)):null:new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",e))}return function(r,e,n){var i,o,a;if(!t(r))throw new TypeError(N("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},2===arguments.length)a=e;else{if(o=It(i,e))throw o;a=n}if(!t(a))throw new TypeError(N("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return"values"===i.returns?gt(r,a):"indices"===i.returns?mt(r,a):wt(r,a)}}));
//# sourceMappingURL=index.js.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-bifurcate-values@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-bifurcate-indices@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-bifurcate-entries@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.1-esm/index.mjs";var m=["values","indices","*"];function l(l,a,j){var h,p,u;if(!r(l))throw new TypeError(n("1RzAh",l));if(h={returns:"values"},2===arguments.length)u=a;else{if(p=function(r,e){return i(e)?o(e,"returns")&&(r.returns=e.returns,-1===d(m,r.returns))?new TypeError(n("1Rz4S","returns",m.join('", "'),r.returns)):null:new TypeError(n("1Rz2V",e))}(h,a),p)throw p;u=j}if(!r(u))throw new TypeError(n("1RzAm",u));if(l.length!==u.length)throw new RangeError(n("1Rz1a"));return"values"===h.returns?e(l,u):"indices"===h.returns?s(l,u):t(l,u)}export{l as default};
//# sourceMappingURL=index.mjs.map

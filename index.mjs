// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-bifurcate-values@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-bifurcate-indices@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-bifurcate-entries@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-index-of@v0.2.0-esm/index.mjs";var l=["values","indices","*"];function m(e,t){return i(t)?o(t,"returns")&&(e.returns=t.returns,-1===a(l,e.returns))?new TypeError(n('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",l.join('", "'),e.returns)):null:new TypeError(n("invalid argument. Options argument must be an object. Value: `%s`.",t))}function d(i,o,a){var l,d,u;if(!e(i))throw new TypeError(n("invalid argument. First argument must be a collection. Value: `%s`.",i));if(l={returns:"values"},2===arguments.length)u=o;else{if(d=m(l,o))throw d;u=a}if(!e(u))throw new TypeError(n("invalid argument. Last argument must be a collection. Value: `%s`.",u));if(i.length!==u.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return"values"===l.returns?t(i,u):"indices"===l.returns?s(i,u):r(i,u)}export{d as default};
//# sourceMappingURL=index.mjs.map

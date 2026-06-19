"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw r=0,n}}};var f=i(function(V,l){"use strict";var h=require("@stdlib/assert-is-plain-object"),q=require("@stdlib/assert-has-own-property"),w=require("@stdlib/utils-index-of"),s=require("@stdlib/string-format"),v=["values","indices","*"];function b(e,r){return h(r)?q(r,"returns")&&(e.returns=r.returns,w(v,e.returns)===-1)?new TypeError(s('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",v.join('", "'),e.returns)):null:new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",r))}l.exports=b});var d=i(function(j,g){"use strict";var m=require("@stdlib/assert-is-collection"),p=require("@stdlib/array-base-bifurcate-values"),c=require("@stdlib/array-base-bifurcate-indices"),E=require("@stdlib/array-base-bifurcate-entries"),o=require("@stdlib/string-format"),O=f();function x(e,r,n){var u,a,t;if(!m(e))throw new TypeError(o("invalid argument. First argument must be a collection. Value: `%s`.",e));if(u={returns:"values"},arguments.length===2)t=r;else{if(a=O(u,r),a)throw a;t=n}if(!m(t))throw new TypeError(o("invalid argument. Last argument must be a collection. Value: `%s`.",t));if(e.length!==t.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return u.returns==="values"?p(e,t):u.returns==="indices"?c(e,t):E(e,t)}g.exports=x});var y=d();module.exports=y;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

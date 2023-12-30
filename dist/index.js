"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=a(function(V,v){
var h=require('@stdlib/assert-is-plain-object/dist'),q=require('@stdlib/assert-has-own-property/dist'),w=require('@stdlib/utils-index-of/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist'),s=["values","indices","*"];function b(r,e){return h(e)?q(e,"returns")&&(r.returns=e.returns,w(s,r.returns)===-1)?new TypeError(i('1Rz4S',"returns",s.join('", "'),r.returns)):null:new TypeError(i('1Rz2V',e));}v.exports=b
});var g=a(function(j,o){
var f=require('@stdlib/assert-is-collection/dist'),p=require('@stdlib/array-base-bifurcate-values/dist'),c=require('@stdlib/array-base-bifurcate-indices/dist'),E=require('@stdlib/array-base-bifurcate-entries/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),O=l();function x(r,e,d){var u,n,t;if(!f(r))throw new TypeError(m('1RzAh',r));if(u={returns:"values"},arguments.length===2)t=e;else{if(n=O(u,e),n)throw n;t=d}if(!f(t))throw new TypeError(m('1RzAm',t));if(r.length!==t.length)throw new RangeError(m('1Rz1a'));return u.returns==="values"?p(r,t):u.returns==="indices"?c(r,t):E(r,t)}o.exports=x
});var y=g();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

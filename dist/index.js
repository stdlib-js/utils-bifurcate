"use strict";var i=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var l=i(function(z,v){
var x=require('@stdlib/assert-is-plain-object/dist'),E=require('@stdlib/assert-has-own-property/dist'),O=require('@stdlib/utils-index-of/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist'),f=["values","indices","*"];function y(e,t){return x(t)?E(t,"returns")&&(e.returns=t.returns,O(f,e.returns)===-1)?new TypeError(s('1Rz4S',"returns",f.join('", "'),e.returns)):null:new TypeError(s('1Rz2V',t));}v.exports=y
});var o=i(function(A,h){
function T(e,t){var u,n,r;if(n=e.length,n===0)return[];for(u=[[],[]],r=0;r<n;r++)t[r]?u[0].push(e[r]):u[1].push(e[r]);return u}h.exports=T
});var m=i(function(B,g){
function V(e,t){var u,n,r;if(n=e.length,n===0)return[];for(u=[[],[]],r=0;r<n;r++)t[r]?u[0].push(r):u[1].push(r);return u}g.exports=V
});var d=i(function(D,p){
function j(e,t){var u,n,r;if(n=e.length,n===0)return[];for(u=[[],[]],r=0;r<n;r++)t[r]?u[0].push([r,e[r]]):u[1].push([r,e[r]]);return u}p.exports=j
});var c=i(function(G,w){
var b=require('@stdlib/assert-is-collection/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),F=l(),P=o(),C=m(),I=d();function L(e,t,u){var n,r,a;if(!b(e))throw new TypeError(q('1RzAh',e));if(n={returns:"values"},arguments.length===2)a=t;else{if(r=F(n,t),r)throw r;a=u}if(!b(a))throw new TypeError(q('1RzAm',a));if(e.length!==a.length)throw new RangeError(format('1Rz1a'));return n.returns==="values"?P(e,a):n.returns==="indices"?C(e,a):I(e,a)}w.exports=L
});var R=c();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

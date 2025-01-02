"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(b,f){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),o=require('@stdlib/math-base-assert-is-positive-zerof/dist');function p(e,r,i,n){var t,a;return e<=0?NaN:e===1||i===0?r[0]:(t=r[n],a=r[n+(e-1)*i],v(t)||v(a)?NaN:t===a?o(t)||o(a)?0:t:t>a?t:a)}f.exports=p
});var c=u(function(g,q){
var y=require('@stdlib/strided-base-stride2offset/dist'),l=s();function N(e,r,i){return l(e,r,i,y(e,i))}q.exports=N
});var m=u(function(h,x){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),P=s();O(d,"ndarray",P);x.exports=d
});var R=m();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

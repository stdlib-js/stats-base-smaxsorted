"use strict";var n=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var o=n(function(b,f){
var s=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-assert-is-positive-zerof/dist');function l(t,e,u){var i,r;return t<=0?NaN:t===1||u===0?e[0]:(u<0?(i=e[(1-t)*u],r=e[0]):(i=e[0],r=e[(t-1)*u]),s(i)||s(r)?NaN:i===r?v(i)||v(r)?0:i:i>r?i:r)}f.exports=l
});var p=n(function(g,m){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-assert-is-positive-zerof/dist');function P(t,e,u,i){var r,a;return t<=0?NaN:t===1||u===0?e[0]:(r=e[i],a=e[i+(t-1)*u],q(r)||q(a)?NaN:r===a?c(r)||c(a)?0:r:r>a?r:a)}m.exports=P
});var d=n(function(h,N){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=o(),x=p();Z(y,"ndarray",x);N.exports=y
});var O=d();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

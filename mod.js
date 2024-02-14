// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var a=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=a(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=a(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var s=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,a=parseFloat(r.arg);if(!isFinite(a)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);a=r.arg}switch(r.specifier){case"e":case"E":n=a.toExponential(r.precision);break;case"f":case"F":n=a.toFixed(r.precision);break;case"g":case"G":s(a)<1e-4?((e=r.precision)>0&&(e-=1),n=a.toExponential(e)):n=a.toPrecision(r.precision),r.alternate||(n=f.call(n,w,"$1e"),n=f.call(n,b,"e"),n=f.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,g,"e+0$1"),n=f.call(n,d,"e-0$1"),r.alternate&&(n=f.call(n,y,"$1."),n=f.call(n,h,"$1.e")),a>=0&&r.sign&&(n=r.sign+n),n=r.specifier===u.call(r.specifier)?u.call(n):p.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var A=String.fromCharCode,E=isNaN,k=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,i,o,s,p,u,f;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",p=1,u=0;u<r.length;u++)if(l(n=r[u]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(p=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[p],10),p+=1,E(n.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[p],10),p+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[p],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),s+=n.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,a;for(t=[],a=0,n=j.exec(r);n;)(e=r.slice(a,j.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),a=j.lastIndex,n=j.exec(r);return(e=r.slice(a)).length&&t.push(e),t}function N(r){return"string"==typeof r}function V(r){var e,t;if(!N(r))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return F.apply(null,e)}var O,$=Object.prototype,U=$.toString,C=$.__defineGetter__,P=$.__defineSetter__,R=$.__lookupGetter__,Z=$.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===U.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(R.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,o="set"in t,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var G=O;function W(r){return r!=r}function L(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=L();var z=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&M.call(r,e)}var q,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";q=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return z.call(r);t=r[D],e=Y(r,D);try{r[D]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[D]=t:delete r[D],n}:function(r){return z.call(r)};var H=q,J="function"==typeof Float32Array;var K=Number.POSITIVE_INFINITY,Q="function"==typeof Float32Array?Float32Array:null;var rr,er="function"==typeof Float32Array?Float32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,5e40]),t=e,r=(J&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===K}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=rr,nr=L();var ar=Object.prototype.toString;var ir,or="function"==typeof Symbol?Symbol:void 0,cr="function"==typeof or?or.toStringTag:"";ir=nr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return ar.call(r);t=r[cr],e=Y(r,cr);try{r[cr]=void 0}catch(e){return ar.call(r)}return n=ar.call(r),e?r[cr]=t:delete r[cr],n}:function(r){return ar.call(r)};var lr=ir,sr="function"==typeof Uint32Array;var pr="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(sr&&t instanceof Uint32Array||"[object Uint32Array]"===lr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var gr=ur,dr=new tr(1);new gr(dr.buffer)[0]=2139095040;var yr=dr[0];function hr(r){return 0===r&&1/r===yr}function vr(r,e,t){var n,a;return r<=0?NaN:1===r||0===t?e[0]:(t<0?(n=e[(1-r)*t],a=e[0]):(n=e[0],a=e[(r-1)*t]),W(n)||W(a)?NaN:n===a?hr(n)||hr(a)?0:n:n>a?n:a)}function br(r,e,t,n){var a,i;return r<=0?NaN:1===r||0===t?e[0]:(a=e[n],i=e[n+(r-1)*t],W(a)||W(i)?NaN:a===i?hr(a)||hr(i)?0:a:a>i?a:i)}G(vr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:br});export{vr as default,br as ndarray};
//# sourceMappingURL=mod.js.map

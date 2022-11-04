// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(l.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var c=t;function f(t){return t!=t}var y,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";y=p&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return b.call(t);e=t[_],a=_,r=null!=(o=t)&&d.call(o,a);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)};var s,v=y,m="function"==typeof Float32Array,w=Number.POSITIVE_INFINITY,A="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0;s=function(){var t,r,e;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,5e40]),e=r,t=(m&&e instanceof Float32Array||"[object Float32Array]"===v(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===w}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")};var j,h=s,S="function"==typeof Uint32Array,N="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var t,r,e;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,4294967296,4294967297]),e=r,t=(S&&e instanceof Uint32Array||"[object Uint32Array]"===v(e))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var O=j,T=new h(1);new O(T.buffer)[0]=2139095040;var U=T[0];function E(t){return 0===t&&1/t===U}function P(t,r,e){var n,o;return t<=0?NaN:1===t||0===e?r[0]:(e<0?(n=r[(1-t)*e],o=r[0]):(n=r[0],o=r[(t-1)*e]),f(n)||f(o)?NaN:n===o?E(n)||E(o)?0:n:n>o?n:o)}return c(P,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(t,r,e,n){var o,a;return t<=0?NaN:1===t||0===e?r[0]:(o=r[n],a=r[n+(t-1)*e],f(o)||f(a)?NaN:o===a?E(o)||E(a)?0:o:o>a?o:a)}}),P},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).smaxsorted=r();
//# sourceMappingURL=index.js.map

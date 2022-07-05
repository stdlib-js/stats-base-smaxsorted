// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,l=o.__defineSetter__,u=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||f.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),y="get"in r,p="set"in r,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&l&&l.call(t,e,r.set),t};var c=e;function y(t){return t!=t}var p,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";p=b&&"symbol"==typeof Symbol.toStringTag?function(t){var e,r,n,o,a;if(null==t)return d.call(t);r=t[s],a=s,e=null!=(o=t)&&_.call(o,a);try{t[s]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[s]=r:delete t[s],n}:function(t){return d.call(t)};var v,m=p,w="function"==typeof Float32Array,j=Number.POSITIVE_INFINITY,A="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0;v=function(){var t,e,r;if("function"!=typeof A)return!1;try{e=new A([1,3.14,-3.14,5e40]),r=e,t=(w&&r instanceof Float32Array||"[object Float32Array]"===m(r))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===j}catch(e){t=!1}return t}()?g:function(){throw new Error("not implemented")};var h,S=v,N="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var t,e,r;if("function"!=typeof F)return!1;try{e=new F(e=[1,3.14,-3.14,4294967296,4294967297]),r=e,t=(N&&r instanceof Uint32Array||"[object Uint32Array]"===m(r))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?O:function(){throw new Error("not implemented")};var T=h,P=new S(1);new T(P.buffer)[0]=2139095040;var U=P[0];function E(t){return 0===t&&1/t===U}function x(t,e,r){var n,o;return t<=0?NaN:1===t||0===r?e[0]:(r<0?(n=e[(1-t)*r],o=e[0]):(n=e[0],o=e[(t-1)*r]),y(n)||y(o)?NaN:n===o?E(n)||E(o)?0:n:n>o?n:o)}function I(t,e,r,n){var o,a;return t<=0?NaN:1===t||0===r?e[0]:(o=e[n],a=e[n+(t-1)*r],y(o)||y(a)?NaN:o===a?E(o)||E(a)?0:o:o>a?o:a)}c(x,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:I}),t.default=x,t.ndarray=I,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).smaxsorted={});
//# sourceMappingURL=index.js.map

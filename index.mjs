// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import A from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-read-dataview@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var p=a("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEWA2AAAGAFf39/f38AYAd/f39/f39/AAIPAQNlbnYGbWVtb3J5AgAAAwQDAAECB0wEEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAAHY19kc3dhcAABD2NfZHN3YXBfbmRhcnJheQACCvgCAwMAAQstACAAIAEgAkEBIABrIgAgAmxBACACQQBMGyADIAQgACAEbEEAIARBAEwbEAILwwICAXwCfwJAIABBAEwNACACQQFHIAVBAUdyRQRAIABBA3AiCARAQQAhAgNAIAIgCEZFBEAgASADQQN0aiIFKwMAIQcgBSAEIAZBA3RqIgUrAwA5AwAgBSAHOQMAIAJBAWohAiAGQQFqIQYgA0EBaiEDDAELCyAAQQNIDQILA0AgACAITA0CIAEgA0EDdGoiAisDACEHIAIgBCAGQQN0aiIFKwMAOQMAIAUgBzkDACACKwMIIQcgAiAFKwMIOQMIIAUgBzkDCCACKwMQIQcgAiAFKwMQOQMQIAUgBzkDECAIQQNqIQggBkEDaiEGIANBA2ohAwwACwALA0AgACAIRg0BIAEgA0EDdGoiCSsDACEHIAkgBCAGQQN0aiIJKwMAOQMAIAkgBzkDACAIQQFqIQggBSAGaiEGIAIgA2ohAwwACwALCw==");function h(A){if(!(this instanceof h))return new h(A);if(!d(A))throw new TypeError(m("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",A));return o.call(this,p,A,{env:{memory:A}}),this}function I(){return this instanceof I?(h.call(this,new i({initial:0})),this):new I}t(h,o),A(h.prototype,"main",(function(A,t,s,e,i){return this._instance.exports.c_dswap(A,t,s,e,i),e})),A(h.prototype,"ndarray",(function(A,t,s,e,i,r,n){return this._instance.exports.c_dswap_ndarray(A,t,s,e,i,r,n),i})),t(I,h),A(I.prototype,"main",(function(A,t,e,i,r){return this.ndarray(A,t,e,s(A,e),i,r,s(A,r))})),A(I.prototype,"ndarray",(function(A,t,s,i,d,o,m){var a,p,I;return p=(a=r(this,[n(A,t,s,i),n(A,d,o,m)]))[0],I=a[1],h.prototype.ndarray.call(this,A,p.ptr,p.stride,p.offset,I.ptr,I.stride,I.offset),p.copy&&e(A,this.view,p.stride*p.BYTES_PER_ELEMENT,p.ptr,t,s,i,!0),I.copy&&e(A,this.view,I.stride*I.BYTES_PER_ELEMENT,I.ptr,d,o,m,!0),d}));var g=new I;g.initializeSync(),A(g,"Module",h);export{h as Module,g as default};
//# sourceMappingURL=index.mjs.map

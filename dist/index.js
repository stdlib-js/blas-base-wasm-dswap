"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=c(function(J,f){
var B=require("path").resolve,O=require('@stdlib/fs-read-wasm/dist').sync,L=O(B(__dirname,"..","src","main.wasm"));f.exports=L
});var q=c(function(K,M){
var P=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=h();function o(e){if(!(this instanceof o))return new o(e);if(!P(e))throw new TypeError(g('26lH0',e));return E.call(this,j,e,{env:{memory:e}}),this}V(o,E);m(o.prototype,"main",function(r,s,t,a,i){return this._instance.exports.c_dswap(r,s,t,a,i),a});m(o.prototype,"ndarray",function(r,s,t,a,i,v,d){return this._instance.exports.c_dswap_ndarray(r,s,t,a,i,v,d),i});M.exports=o
});var S=c(function(Q,T){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/strided-base-read-dataview/dist').ndarray,D=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),w=q();function p(){return this instanceof p?(w.call(this,new D({initial:0})),this):new p}z(p,w);x(p.prototype,"main",function(r,s,t,a,i){return this.ndarray(r,s,t,_(r,t),a,i,_(r,i))});x(p.prototype,"ndarray",function(r,s,t,a,i,v,d){var l,n,u;return l=k(this,[b(r,s,t,a),b(r,i,v,d)]),n=l[0],u=l[1],w.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset,u.ptr,u.stride,u.offset),n.copy&&R(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,s,t,a,!0),u.copy&&R(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,i,v,d,!0),i});T.exports=p
});var A=c(function(U,W){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=S(),G=q(),y=new F;y.initializeSync();C(y,"Module",G.bind(null));W.exports=y
});var H=A();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

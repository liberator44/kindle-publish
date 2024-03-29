/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("querystring-stringify",function(D){var B=D.namespace("QueryString");B.escape=encodeURIComponent;var A=[];B.stringify=function(J,N,L,E){N=N||"&";L=L||"=";if(D.Lang.isNull(J)||D.Lang.isUndefined(J)||typeof(J)==="function"){return E?B.escape(E)+L:"";}if(C("Boolean",J)){J=+J;}if(C("Number",J)||C("String",J)){return B.escape(E)+L+B.escape(J);}if(D.Lang.isArray(J)){var M=[];E=E+"[]";for(var K=0,H=J.length;K<H;K++){M.push(B.stringify(J[K],N,L,E));}return M.join(N);}for(var K=A.length-1;K>=0;--K){if(A[K]===J){throw new Error("QueryString.stringify. Cyclical reference");}}A.push(J);var M=[];var G=E?E+"[":"";var I=E?"]":"";for(var K in J){if(J.hasOwnProperty(K)){var F=G+K+I;M.push(B.stringify(J[K],N,L,F));}}A.pop();M=M.join(N);if(!M&&E){return E+"=";}return M;};function C(E,F){return(D.Lang["is"+E](F)||Object.prototype.toString.call(F)==="[object "+E+"]");}},"3.1.2");

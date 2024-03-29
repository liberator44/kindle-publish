/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("querystring-parse",function(E){var B=E.namespace("QueryString");B.parse=function(G,H,F){return E.Array.reduce(E.Array.map(G.split(H||"&"),D(F||"=")),{},C);};B.unescape=function(F){return decodeURIComponent(F.replace(/\+/g," "));};var D=function(F){return function G(L,N){if(arguments.length!==2){L=L.split(F);return G(B.unescape(L.shift()),B.unescape(L.join(F)));}L=L.replace(/^\s+|\s+$/g,"");if(E.Lang.isString(N)){N=N.replace(/^\s+|\s+$/g,"");if(!isNaN(N)){var M=+N;if(N===M.toString(10)){N=M;}}}var H=/(.*)\[([^\]]*)\]$/.exec(L);if(!H){var J={};if(L){J[L]=N;}return J;}var I=H[2],K=H[1];if(!I){return G(K,[N]);}var J={};J[I]=N;return G(K,J);};};function C(G,F){return((!G)?F:(E.Lang.isArray(G))?G.concat(F):(!E.Lang.isObject(G)||!E.Lang.isObject(F))?[G].concat(F):A(G,F));}function A(H,F){for(var G in F){if(G&&F.hasOwnProperty(G)){H[G]=C(H[G],F[G]);}}return H;}},"3.1.2",{requires:["collection"]});

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("dump",function(G){var B=G.Lang,C="{...}",F="f(){...}",A=", ",D=" => ",E=function(N,M){var I,H,K=[],J=B.type(N);if(!B.isObject(N)){return N+"";}else{if(J=="date"){return N;}else{if(N.nodeType&&N.tagName){return N.tagName+"#"+N.id;}else{if(N.document&&N.navigator){return"window";}else{if(N.location&&N.body){return"document";}else{if(J=="function"){return F;}}}}}}M=(B.isNumber(M))?M:3;if(J=="array"){K.push("[");for(I=0,H=N.length;I<H;I=I+1){if(B.isObject(N[I])){K.push((M>0)?B.dump(N[I],M-1):C);}else{K.push(N[I]);}K.push(A);}if(K.length>1){K.pop();}K.push("]");}else{if(J=="regexp"){K.push(N.toString());}else{K.push("{");for(I in N){if(N.hasOwnProperty(I)){try{K.push(I+D);if(B.isObject(N[I])){K.push((M>0)?B.dump(N[I],M-1):C);}else{K.push(N[I]);}K.push(A);}catch(L){K.push("Error: "+L.message);}}}if(K.length>1){K.pop();}K.push("}");}}return K.join("");};G.dump=E;B.dump=E;},"3.1.2");

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("substitute",function(G){var B=G.Lang,D="dump",F=" ",C="{",E="}",A=function(U,I,O,H){var M,L,K,S,R,T,Q=[],J,N,P=U.length;for(;;){M=U.lastIndexOf(C,P);if(M<0){break;}L=U.indexOf(E,M);if(M+1>=L){break;}J=U.substring(M+1,L);S=J;T=null;K=S.indexOf(F);if(K>-1){T=S.substring(K+1);S=S.substring(0,K);}R=I[S];if(O){R=O(S,R,T);}if(B.isObject(R)){if(!G.dump){R=R.toString();}else{if(B.isArray(R)){R=G.dump(R,parseInt(T,10));}else{T=T||"";N=T.indexOf(D);if(N>-1){T=T.substring(4);}if(R.toString===Object.prototype.toString||N>-1){R=G.dump(R,parseInt(T,10));}else{R=R.toString();}}}}else{if(!B.isString(R)&&!B.isNumber(R)){R="~-"+Q.length+"-~";Q[Q.length]=J;}}U=U.substring(0,M)+R+U.substring(L+1);if(!H){P=M-1;}}for(M=Q.length-1;M>=0;M=M-1){U=U.replace(new RegExp("~-"+M+"-~"),C+Q[M]+E,"g");}return U;};G.substitute=A;B.substitute=A;},"3.1.2",{optional:["dump"]});

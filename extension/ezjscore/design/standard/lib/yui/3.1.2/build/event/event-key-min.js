/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("event-key",function(A){A.Env.evt.plugins.key={on:function(E,G,B,K,C){var I=A.Array(arguments,0,true),F,J,H,D;F=K&&K.split(":");if(!K||K.indexOf(":")==-1||!F[1]){I[0]="key"+((F&&F[0])||"press");return A.on.apply(A,I);}J=F[0];H=(F[1])?F[1].split(/,|\+/):null;D=(A.Lang.isString(B)?B:A.stamp(B))+K;D=D.replace(/,/g,"_");if(!A.getEvent(D)){A.on(E+J,function(P){var Q=false,M=false,N,L,O;for(N=0;N<H.length;N=N+1){L=H[N];O=parseInt(L,10);if(A.Lang.isNumber(O)){if(P.charCode===O){Q=true;}else{M=true;}}else{if(Q||!M){Q=(P[L+"Key"]);M=!Q;}}}if(Q){A.fire(D,P);}},B);}I.splice(2,2);I[0]=D;return A.on.apply(A,I);}};},"3.1.2",{requires:["node-base"]});

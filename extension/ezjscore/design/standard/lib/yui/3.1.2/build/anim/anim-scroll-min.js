/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("anim-scroll",function(B){var A=Number;B.Anim.behaviors.scroll={set:function(F,G,I,J,K,E,H){var D=F._node,C=([H(K,A(I[0]),A(J[0])-A(I[0]),E),H(K,A(I[1]),A(J[1])-A(I[1]),E)]);if(C[0]){D.set("scrollLeft",C[0]);}if(C[1]){D.set("scrollTop",C[1]);}},get:function(D){var C=D._node;return[C.get("scrollLeft"),C.get("scrollTop")];}};},"3.1.2",{requires:["anim-base"]});

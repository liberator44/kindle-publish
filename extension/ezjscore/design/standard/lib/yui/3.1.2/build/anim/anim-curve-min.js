/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("anim-curve",function(A){A.Anim.behaviors.curve={set:function(F,C,I,H,B,G,E){I=I.slice.call(I);H=H.slice.call(H);var D=E(B,0,100,G)/100;H.unshift(I);F._node.setXY(A.Anim.getBezier(H,D));},get:function(C,B){return C._node.getXY();}};A.Anim.getBezier=function(F,E){var G=F.length;var D=[];for(var C=0;C<G;++C){D[C]=[F[C][0],F[C][1]];}for(var B=1;B<G;++B){for(C=0;C<G-B;++C){D[C][0]=(1-E)*D[C][0]+E*D[parseInt(C+1,10)][0];D[C][1]=(1-E)*D[C][1]+E*D[parseInt(C+1,10)][1];}}return[D[0][0],D[0][1]];};},"3.1.2",{requires:["anim-xy"]});

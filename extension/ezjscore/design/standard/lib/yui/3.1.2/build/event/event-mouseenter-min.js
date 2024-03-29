/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("event-mouseenter",function(F){var C=F.Event,E=F.Lang,B=F.Env.evt.plugins,D={},A={on:function(M,O,H){var L=F.Array(arguments,0,true),J=H,K;if(E.isString(H)){J=F.all(H);if(J.size()===0){K=C.onAvailable(H,function(){K.handle=F.on.apply(F,L);},C,true,false);return K;}}var R=(M==="mouseenter")?"mouseover":"mouseout",Q=M+":"+F.stamp(J)+R,I=D[Q],N,P,G;if(!I){N=F.on(R,F.rbind(C._fireMouseEnter,F,Q),J);F.after(function(S){if(N.sub==S){delete D[Q];F.detachAll(Q);}},N.evt,"_delete");I={};I.handle=N;D[Q]=I;}G=I.count;I.count=G?(G+1):1;L[0]=Q;L.splice(2,1);P=F.on.apply(F,L);F.after(function(){I.count=(I.count-1);if(I.count===0){I.handle.detach();}},P,"detach");return P;}};C._fireMouseEnter=function(J,H){var G=J.relatedTarget,I=J.currentTarget;if(I!==G&&!I.contains(G)){F.publish(H,{contextFn:function(){return I;}});F.fire(H,J);}};B.mouseenter=A;B.mouseleave=A;},"3.1.2",{requires:["node-base"]});

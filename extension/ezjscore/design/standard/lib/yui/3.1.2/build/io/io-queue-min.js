/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("io-queue",function(B){var A=new B.Queue(),I,G,M=1;function J(N,P){var O={uri:N,id:B.io._id(),cfg:P};A.add(O);if(M===1){F();}return O;}function F(){var N=A.next();G=N.id;M=0;B.io(N.uri,N.cfg,N.id);}function D(N){A.promote(N);}function C(N){M=1;if(G===N&&A.size()>0){F();}}function L(N){A.remove(N);}function E(){M=1;if(A.size()>0){F();}}function H(){M=0;}function K(){return A.size();}I=B.on("io:complete",function(N){C(N);},B.io);J.size=K;J.start=E;J.stop=H;J.promote=D;J.remove=L;B.mix(B.io,{queue:J},true);},"3.1.2",{requires:["io-base","queue-promote"]});

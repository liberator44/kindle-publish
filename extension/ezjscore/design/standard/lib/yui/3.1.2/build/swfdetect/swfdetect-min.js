/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("swfdetect",function(B){var H=0;var F=B.UA;var D=B.Lang;var I="ShockwaveFlash";function E(K){if(D.isNumber(parseInt(K[0]))){F.flashMajor=K[0];}if(D.isNumber(parseInt(K[1]))){F.flashMinor=K[1];}if(D.isNumber(parseInt(K[2]))){F.flashRev=K[2];}}if(F.gecko||F.webkit||F.opera){if((mF=navigator.mimeTypes["application/x-shockwave-flash"])){if((eP=mF.enabledPlugin)){var C=[];C=eP.description.replace(/\s[rd]/g,".").replace(/[A-Za-z\s]+/g,"").split(".");E(C);}}}else{if(F.ie){try{var J=new ActiveXObject(I+"."+I+".6");J.AllowScriptAccess="always";}catch(G){if(J!=null){H=6;}}if(H==0){try{var A=new ActiveXObject(I+"."+I);var C=[];C=A.GetVariable("$version").replace(/[A-Za-z\s]+/g,"").split(",");E(C);}catch(G){}}}}B.SWFDetect={getFlashVersion:function(){return(String(F.flashMajor)+"."+String(F.flashMinor)+"."+String(F.flashRev));},isFlashVersionAtLeast:function(K,M,L){if(K<F.flashMajor){return true;}else{if(K>F.flashMajor){return false;}else{if(M<F.flashMinor){return true;}else{if(M>F.flashMinor){return false;}else{if(L<=F.flashRev){return true;}else{return false;}}}}}return false;}};},"3.1.2");

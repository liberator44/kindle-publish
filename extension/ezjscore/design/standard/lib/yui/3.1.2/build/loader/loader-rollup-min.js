/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("loader-rollup",function(A){A.Loader.prototype._rollup=function(){var H,G,F,L,K={},B=this.required,D,E=this.moduleInfo,C,I,J;if(this.dirty||!this.rollups){for(H in E){if(E.hasOwnProperty(H)){F=this.getModule(H);if(F&&F.rollup){K[H]=F;}}}this.rollups=K;this.forceMap=(this.force)?A.Array.hash(this.force):{};}for(;;){C=false;for(H in K){if(K.hasOwnProperty(H)){if(!B[H]&&((!this.loaded[H])||this.forceMap[H])){F=this.getModule(H);L=F.supersedes||[];D=false;if(!F.rollup){continue;}I=0;for(G=0;G<L.length;G=G+1){J=E[L[G]];if(this.loaded[L[G]]&&!this.forceMap[L[G]]){D=false;break;}else{if(B[L[G]]&&F.type==J.type){I++;D=(I>=F.rollup);if(D){break;}}}}if(D){B[H]=true;C=true;this.getRequires(F);}}}}if(!C){break;}}};},"3.1.2",{requires:["loader-base"]});

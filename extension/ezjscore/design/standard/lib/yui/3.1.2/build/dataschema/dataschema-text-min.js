/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("dataschema-text",function(C){var B=C.Lang,A={apply:function(F,G){var D=G,E={results:[],meta:{}};if(B.isString(D)&&B.isString(F.resultDelimiter)){E=A._parseResults(F,D,E);}else{E.error=new Error("Text schema parse failure");}return E;},_parseResults:function(D,K,E){var I=D.resultDelimiter,H=[],L,P,S,R,J,N,Q,O,G,F,M=K.length-I.length;if(K.substr(M)==I){K=K.substr(0,M);}L=K.split(D.resultDelimiter);for(G=L.length-1;G>-1;G--){S={};R=L[G];if(B.isString(D.fieldDelimiter)){P=R.split(D.fieldDelimiter);if(B.isArray(D.resultFields)){J=D.resultFields;for(F=J.length-1;F>-1;F--){N=J[F];Q=(!B.isUndefined(N.key))?N.key:N;O=(!B.isUndefined(P[Q]))?P[Q]:P[F];S[Q]=C.DataSchema.Base.parse(O,N);}}}else{S=R;}H[G]=S;}E.results=H;return E;}};C.DataSchema.Text=C.mix(A,C.DataSchema.Base);},"3.1.2",{requires:["dataschema-base"]});

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("widget-locale",function(F){var C=true,G="locale",E="initValue",B="-",A="",D=F.Widget;D.ATTRS[G]={value:"en"};F.mix(D.prototype,{_setStrings:function(I,H){var J=this._strs;H=H.toLowerCase();if(!J[H]){J[H]={};}F.aggregate(J[H],I,C);return J[H];},_getStrings:function(H){return this._strs[H.toLowerCase()];},getStrings:function(P){P=(P||this.get(G)).toLowerCase();var N=this.getDefaultLocale().toLowerCase(),I=this._getStrings(N),O=(I)?F.merge(I):{},L=P.split(B),M,K,J,H;if(P!==N||L.length>1){H=A;for(K=0,J=L.length;K<J;++K){H+=L[K];M=this._getStrings(H);if(M){F.aggregate(O,M,C);}H+=B;}}return O;},getString:function(J,I){I=(I||this.get(G)).toLowerCase();var K=(this.getDefaultLocale()).toLowerCase(),L=this._getStrings(K)||{},M=L[J],H=I.lastIndexOf(B);if(I!==K||H!=-1){do{L=this._getStrings(I);if(L&&J in L){M=L[J];break;}H=I.lastIndexOf(B);if(H!=-1){I=I.substring(0,H);}}while(H!=-1);}return M;},getDefaultLocale:function(){return this._state.get(G,E);},_strSetter:function(H){return this._setStrings(H,this.get(G));},_strGetter:function(H){return this._getStrings(this.get(G));}},true);},"3.1.2",{requires:["widget-base"]});

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("widget-htmlparser",function(F){var E=F.Widget,C=F.Node,D=F.Lang,A="srcNode",B="contentBox";E.HTML_PARSER={};E._buildCfg={aggregates:["HTML_PARSER"]};E.ATTRS[A]={value:null,setter:C.one,getter:"_getSrcNode",writeOnce:true};F.mix(E.prototype,{_getSrcNode:function(G){return G||this.get(B);},_applyParsedConfig:function(I,G,H){return(H)?F.mix(G,H,false):G;},_applyParser:function(G){var I=this,J=I.get(A),H=I._getHtmlParser(),L,K;if(H&&J){F.Object.each(H,function(N,M,O){K=null;if(D.isFunction(N)){K=N.call(I,J);}else{if(D.isArray(N)){K=J.all(N[0]);}else{K=J.one(N);}}if(K!==null&&K!==undefined){L=L||{};L[M]=K;}});}G=I._applyParsedConfig(J,G,L);},_getHtmlParser:function(){var H=this._getClasses(),J={},G,I;for(G=H.length-1;G>=0;G--){I=H[G].HTML_PARSER;if(I){F.mix(J,I,true);}}return J;}});},"3.1.2",{requires:["widget-base"]});

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("arraylist",function(E){var D=E.Array,C=D.each,A;function B(F){if(F!==undefined){this._items=E.Lang.isArray(F)?F:D(F);}else{this._items=this._items||[];}}A={item:function(F){return this._items[F];},each:function(G,F){C(this._items,function(I,H){I=this.item(H);G.call(F||I,I,H,this);},this);return this;},some:function(G,F){return D.some(this._items,function(I,H){I=this.item(H);return G.call(F||I,I,H,this);},this);},indexOf:function(F){return D.indexOf(this._items,F);},size:function(){return this._items.length;},isEmpty:function(){return !this.size();}};A._item=A.item;B.prototype=A;E.mix(B,{addMethod:function(F,G){G=D(G);C(G,function(H){F[H]=function(){var J=D(arguments,0,true),I=[];C(this._items,function(M,L){M=this._item(L);var K=M[H].apply(M,J);if(K!==undefined&&K!==M){I.push(K);}},this);return I.length?I:this;};});}});E.ArrayList=B;},"3.1.2");

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("arraylist-add",function(A){A.mix(A.ArrayList.prototype,{add:function(D,C){var B=this._items;if(A.Lang.isNumber(C)){B.splice(C,0,D);}else{B.push(D);}return this;},remove:function(D,C,E){E=E||this.itemsAreEqual;for(var B=this._items.length-1;B>=0;--B){if(E.call(this,D,this.item(B))){this._items.splice(B,1);if(!C){break;}}}return this;},itemsAreEqual:function(C,B){return C===B;}});},"3.1.2",{requires:["arraylist"]});

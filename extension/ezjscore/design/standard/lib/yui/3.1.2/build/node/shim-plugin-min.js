/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("shim-plugin",function(B){function A(C){this.init(C);}A.CLASS_NAME="yui-node-shim";A.TEMPLATE='<iframe class="'+A.CLASS_NAME+'" frameborder="0" title="Node Stacking Shim"'+'src="javascript:false" tabindex="-1" role="presentation"'+'style="position:absolute; z-index:-1;"></iframe>';A.prototype={init:function(C){this._host=C.host;this.initEvents();this.insert();this.sync();},initEvents:function(){this._resizeHandle=this._host.on("resize",this.sync,this);},getShim:function(){return this._shim||(this._shim=B.Node.create(A.TEMPLATE,this._host.get("ownerDocument")));},insert:function(){var C=this._host;this._shim=C.insertBefore(this.getShim(),C.get("firstChild"));},sync:function(){var D=this._shim,C=this._host;if(D){D.setAttrs({width:C.getStyle("width"),height:C.getStyle("height")});}},destroy:function(){var C=this._shim;if(C){C.remove(true);}this._resizeHandle.detach();}};A.NAME="Shim";A.NS="shim";B.namespace("Plugin");B.Plugin.Shim=A;},"3.1.2",{requires:["node-style","node-pluginhost"]});

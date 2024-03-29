/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("plugin",function(B){function A(C){A.superclass.constructor.apply(this,arguments);}A.ATTRS={host:{writeOnce:true}};A.NAME="plugin";A.NS="plugin";B.extend(A,B.Base,{_handles:null,initializer:function(C){this._handles=[];},destructor:function(){if(this._handles){for(var D=0,C=this._handles.length;D<C;D++){this._handles[D].detach();}}},doBefore:function(G,D,C){var E=this.get("host"),F;if(G in E){F=this.beforeHostMethod(G,D,C);}else{if(E.on){F=this.onHostEvent(G,D,C);}}return F;},doAfter:function(G,D,C){var E=this.get("host"),F;if(G in E){F=this.afterHostMethod(G,D,C);}else{if(E.after){F=this.afterHostEvent(G,D,C);}}return F;},onHostEvent:function(E,D,C){var F=this.get("host").after(E,D,C||this);this._handles.push(F);return F;},afterHostEvent:function(E,D,C){var F=this.get("host").after(E,D,C||this);this._handles.push(F);return F;},beforeHostMethod:function(F,D,C){var E=B.Do.before(D,this.get("host"),F,C||this);this._handles.push(E);return E;},afterHostMethod:function(F,D,C){var E=B.Do.after(D,this.get("host"),F,C||this);this._handles.push(E);return E;},toString:function(){return this.constructor.NAME+"["+this.constructor.NS+"]";}});B.namespace("Plugin").Base=A;},"3.1.2",{requires:["base-base"]});

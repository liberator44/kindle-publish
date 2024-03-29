/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("datasource-get",function(B){var A=function(){A.superclass.constructor.apply(this,arguments);};B.DataSource.Get=B.extend(A,B.DataSource.Local,{_defRequestFn:function(G){var F=this.get("source"),D=this.get("get"),C=B.guid().replace(/\-/g,"_"),E=this.get("generateRequestCallback");this._last=C;YUI.Env.DataSource.callbacks[C]=B.bind(function(H){delete YUI.Env.DataSource.callbacks[C];var I=this.get("asyncMode")!=="ignoreStaleResponses"||this._last===C;if(I){this.fire("data",B.mix({data:H},G));}else{}},this);F+=G.request+E.call(this,C);D.script(F,{autopurge:true,onFailure:B.bind(function(H){H.error=new Error("Script node data failure");this.fire("error",H);},this,G)});return G.tId;},_generateRequest:function(C){return"&"+this.get("scriptCallbackParam")+"=YUI.Env.DataSource.callbacks."+C;}},{NAME:"dataSourceGet",ATTRS:{get:{value:B.Get,cloneDefaultValue:false},asyncMode:{value:"allowAll"},scriptCallbackParam:{value:"callback"},generateRequestCallback:{value:function(){return this._generateRequest.apply(this,arguments);}}}});YUI.namespace("Env.DataSource.callbacks");},"3.1.2",{requires:["datasource-local","get"]});

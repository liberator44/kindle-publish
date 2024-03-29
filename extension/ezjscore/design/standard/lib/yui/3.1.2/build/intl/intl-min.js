/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("intl",function(C){var B={},A="yuiRootLang",D="yuiActiveLang";C.mix(C.namespace("Intl"),{_mod:function(E){if(!B[E]){B[E]={};}return B[E];},setLang:function(F,I){var H=this._mod(F),E=H[D],G=!!H[I];if(G&&I!==E){H[D]=I;this.fire("intl:langChange",{module:F,prevVal:E,newVal:(I===A)?"":I});}return G;},getLang:function(E){var F=this._mod(E)[D];return(F===A)?"":F;},add:function(F,G,E){G=G||A;this._mod(F)[G]=E;this.setLang(F,G);},get:function(G,F,I){var E=this._mod(G),H;I=I||E[D];H=E[I]||{};return(F)?H[F]:C.merge(H);},getAvailableLangs:function(F){var E=[],H=C.Env&&C.Env.lang,G;if(H){for(G in H){if(G&&H.hasOwnProperty(G)){if(H[G][F]){E[E.length]=G;}}}}return E;}});C.augment(C.Intl,C.EventTarget);C.Intl.publish("intl:langChange",{emitFacade:true});},"3.1.2",{requires:["event-custom"]});

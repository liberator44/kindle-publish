/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("dom-base",function(D){(function(I){var S="nodeType",F="ownerDocument",E="defaultView",K="parentWindow",N="tagName",P="parentNode",R="firstChild",M="previousSibling",Q="nextSibling",L="contains",H="compareDocumentPosition",G="",O=document.documentElement,J=/<([a-z]+)/i;I.DOM={byId:function(U,T){return I.DOM.allById(U,T)[0]||null;},children:function(V,T){var U=[];if(V){T=T||"*";U=I.Selector.query("> "+T,V);}return U;},firstByTag:function(T,U){var V;U=U||I.config.doc;if(T&&U.getElementsByTagName){V=U.getElementsByTagName(T)[0];}return V||null;},getText:(O.textContent!==undefined)?function(U){var T="";if(U){T=U.textContent;}return T||"";}:function(U){var T="";if(U){T=U.innerText;}return T||"";},setText:(O.textContent!==undefined)?function(T,U){if(T){T.textContent=U;}}:function(T,U){if(T){T.innerText=U;}},previous:function(T,V,U){return I.DOM.elementByAxis(T,M,V,U);},next:function(T,V,U){return I.DOM.elementByAxis(T,Q,V,U);},ancestor:function(U,V,W){var T=null;if(W){T=(!V||V(U))?U:null;}return T||I.DOM.elementByAxis(U,P,V,null);},elementByAxis:function(T,W,V,U){while(T&&(T=T[W])){if((U||T[N])&&(!V||V(T))){return T;}}return null;},contains:function(U,V){var T=false;if(!V||!U||!V[S]||!U[S]){T=false;}else{if(U[L]){if(I.UA.opera||V[S]===1){T=U[L](V);}else{T=I.DOM._bruteContains(U,V);}}else{if(U[H]){if(U===V||!!(U[H](V)&16)){T=true;}}}}return T;},inDoc:function(W,Z){Z=Z||W[F];var T=[],U=false,V,X,Y;W.id=W.id||I.guid();T=I.DOM.allById(W.id,Z);for(V=0;X=T[V++];){if(X===W){U=true;break;}}return U;},allById:function(Y,T){T=T||I.config.doc;var U=[],V=[],W,X;if(T.querySelectorAll){V=T.querySelectorAll('[id="'+Y+'"]');}else{if(T.all){U=T.all(Y);if(U&&U.nodeType){U=[U];}if(U&&U.length){for(W=0;X=U[W++];){if(X.id===Y){V.push(X);}}}}else{V=[I.DOM._getDoc(T).getElementById(Y)];}}return V;},create:function(Y,a){if(typeof Y==="string"){Y=I.Lang.trim(Y);}a=a||I.config.doc;var U=J.exec(Y),X=I.DOM._create,Z=I.DOM.creators,W=null,T,V;if(U&&Z[U[1]]){if(typeof Z[U[1]]==="function"){X=Z[U[1]];}else{T=Z[U[1]];}}V=X(Y,a,T).childNodes;if(V.length===1){W=V[0].parentNode.removeChild(V[0]);}else{W=I.DOM._nl2frag(V,a);}return W;},_nl2frag:function(U,X){var V=null,W,T;if(U&&(U.push||U.item)&&U[0]){X=X||U[0].ownerDocument;V=X.createDocumentFragment();if(U.item){U=I.Array(U,0,true);}for(W=0,T=U.length;W<T;W++){V.appendChild(U[W]);}}return V;},CUSTOM_ATTRIBUTES:(!O.hasAttribute)?{"for":"htmlFor","class":"className"}:{"htmlFor":"for","className":"class"},setAttribute:function(V,T,W,U){if(V&&V.setAttribute){T=I.DOM.CUSTOM_ATTRIBUTES[T]||T;V.setAttribute(T,W,U);}},getAttribute:function(W,T,V){V=(V!==undefined)?V:2;var U="";if(W&&W.getAttribute){T=I.DOM.CUSTOM_ATTRIBUTES[T]||T;U=W.getAttribute(T,V);if(U===null){U="";}}return U;},isWindow:function(T){return T.alert&&T.document;},_fragClones:{},_create:function(U,V,T){T=T||"div";var W=I.DOM._fragClones[T];if(W){W=W.cloneNode(false);}else{W=I.DOM._fragClones[T]=V.createElement(T);}W.innerHTML=U;return W;},_removeChildNodes:function(T){while(T.firstChild){T.removeChild(T.firstChild);}},addHTML:function(X,W,U){if(typeof W==="string"){W=I.Lang.trim(W);}var T=X.parentNode,V;if(W){if(W.nodeType){V=W;}else{V=I.DOM.create(W);}}if(U){if(U.nodeType){U.parentNode.insertBefore(V,U);}else{switch(U){case"replace":while(X.firstChild){X.removeChild(X.firstChild);}if(V){X.appendChild(V);}break;case"before":T.insertBefore(V,X);break;case"after":if(X.nextSibling){T.insertBefore(V,X.nextSibling);}else{T.appendChild(V);}break;default:X.appendChild(V);}}}else{X.appendChild(V);}return V;},VALUE_SETTERS:{},VALUE_GETTERS:{},getValue:function(V){var U="",T;if(V&&V[N]){T=I.DOM.VALUE_GETTERS[V[N].toLowerCase()];if(T){U=T(V);}else{U=V.value;}}if(U===G){U=G;}return(typeof U==="string")?U:"";},setValue:function(T,U){var V;if(T&&T[N]){V=I.DOM.VALUE_SETTERS[T[N].toLowerCase()];if(V){V(T,U);}else{T.value=U;}}},siblings:function(W,V){var T=[],U=W;while((U=U[M])){if(U[N]&&(!V||V(U))){T.unshift(U);}}U=W;while((U=U[Q])){if(U[N]&&(!V||V(U))){T.push(U);}}return T;},_bruteContains:function(T,U){while(U){if(T===U){return true;}U=U.parentNode;}return false;},_getRegExp:function(U,T){T=T||"";I.DOM._regexCache=I.DOM._regexCache||{};if(!I.DOM._regexCache[U+T]){I.DOM._regexCache[U+T]=new RegExp(U,T);}return I.DOM._regexCache[U+T];},_getDoc:function(T){var U=I.config.doc;if(T){U=(T[S]===9)?T:T[F]||T.document||I.config.doc;}return U;},_getWin:function(T){var U=I.DOM._getDoc(T);return U[E]||U[K]||I.config.win;},_batch:function(W,a,Z,V,U,Y){a=(typeof name==="string")?I.DOM[a]:a;var T,X=[];if(a&&W){I.each(W,function(b){if((T=a.call(I.DOM,b,Z,V,U,Y))!==undefined){X[X.length]=T;}});}return X.length?X:W;},creators:{},_IESimpleCreate:function(T,U){U=U||I.config.doc;return U.createElement(T);}};(function(X){var Z=X.DOM.creators,T=X.DOM.create,W=/(?:\/(?:thead|tfoot|tbody|caption|col|colgroup)>)+\s*<tbody/,V="<table>",U="</table>";if(X.UA.ie){X.mix(Z,{tbody:function(a,b){var c=T(V+a+U,b),Y=c.children.tags("tbody")[0];if(c.children.length>1&&Y&&!W.test(a)){Y[P].removeChild(Y);}return c;},script:function(Y,a){var b=a.createElement("div");b.innerHTML="-"+Y;b.removeChild(b[R]);return b;}},true);X.mix(X.DOM.VALUE_GETTERS,{button:function(Y){return(Y.attributes&&Y.attributes.value)?Y.attributes.value.value:"";}});X.mix(X.DOM.VALUE_SETTERS,{button:function(a,b){var Y=a.attributes.value;if(!Y){Y=a[F].createAttribute("value");a.setAttributeNode(Y);}Y.value=b;},select:function(c,d){for(var a=0,Y=c.getElementsByTagName("option"),b;b=Y[a++];){if(X.DOM.getValue(b)===d){X.DOM.setAttribute(b,"selected",true);break;}}}});}if(X.UA.gecko||X.UA.ie){X.mix(Z,{option:function(Y,a){return T("<select>"+Y+"</select>",a);},tr:function(Y,a){return T("<tbody>"+Y+"</tbody>",a);},td:function(Y,a){return T("<tr>"+Y+"</tr>",a);},tbody:function(Y,a){return T(V+Y+U,a);}});X.mix(Z,{legend:"fieldset",th:Z.td,thead:Z.tbody,tfoot:Z.tbody,caption:Z.tbody,colgroup:Z.tbody,col:Z.tbody,optgroup:Z.option});}X.mix(X.DOM.VALUE_GETTERS,{option:function(a){var Y=a.attributes;return(Y.value&&Y.value.specified)?a.value:a.text;
},select:function(a){var b=a.value,Y=a.options;if(Y&&b===""){if(a.multiple){}else{b=X.DOM.getValue(Y[a.selectedIndex]);}}return b;}});})(I);})(D);var B,A,C;D.mix(D.DOM,{hasClass:function(G,F){var E=D.DOM._getRegExp("(?:^|\\s+)"+F+"(?:\\s+|$)");return E.test(G.className);},addClass:function(F,E){if(!D.DOM.hasClass(F,E)){F.className=D.Lang.trim([F.className,E].join(" "));}},removeClass:function(F,E){if(E&&A(F,E)){F.className=D.Lang.trim(F.className.replace(D.DOM._getRegExp("(?:^|\\s+)"+E+"(?:\\s+|$)")," "));if(A(F,E)){C(F,E);}}},replaceClass:function(F,E,G){C(F,E);B(F,G);},toggleClass:function(F,E,G){var H=(G!==undefined)?G:!(A(F,E));if(H){B(F,E);}else{C(F,E);}}});A=D.DOM.hasClass;C=D.DOM.removeClass;B=D.DOM.addClass;},"3.1.2",{requires:["oop"]});

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("io-form",function(A){A.mix(A.io,{_serialize:function(M,R){var I=encodeURIComponent,H=[],N=M.useDisabled||false,Q=0,B=(typeof M.id==="string")?M.id:M.id.getAttribute("id"),K,J,D,P,L,G,O,E,F,C;if(!B){B=A.guid("io:");M.id.setAttribute("id",B);}J=A.config.doc.getElementById(B);for(G=0,O=J.elements.length;G<O;++G){K=J.elements[G];L=K.disabled;D=K.name;if((N)?D:(D&&!L)){D=encodeURIComponent(D)+"=";P=encodeURIComponent(K.value);switch(K.type){case"select-one":if(K.selectedIndex>-1){C=K.options[K.selectedIndex];H[Q++]=D+I((C.attributes.value&&C.attributes.value.specified)?C.value:C.text);}break;case"select-multiple":if(K.selectedIndex>-1){for(E=K.selectedIndex,F=K.options.length;E<F;++E){C=K.options[E];if(C.selected){H[Q++]=D+I((C.attributes.value&&C.attributes.value.specified)?C.value:C.text);}}}break;case"radio":case"checkbox":if(K.checked){H[Q++]=D+P;}break;case"file":case undefined:case"reset":case"button":break;case"submit":default:H[Q++]=D+P;}}}return R?H.join("&")+"&"+R:H.join("&");}},true);},"3.1.2",{requires:["io-base","node-base"]});

/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add('io-form', function(Y) {

   /**
    * Extends the IO base class to enable HTML form data serialization, when specified
    * in the transaction's configuration object.
    * @module io
    * @submodule io-form
    */

    Y.mix(Y.io, {
       /**
        * @description Method to enumerate through an HTML form's elements collection
        * and return a string comprised of key-value pairs.
        *
        * @method _serialize
        * @private
        * @static
        * @param {object} c - YUI form node or HTML form id.
        * @param {string} s - Transaction data defined in the configuration.
        * @return string
        */
        _serialize: function(c, s) {
                        var eUC = encodeURIComponent,
                data = [],
                useDf = c.useDisabled || false,
                item = 0,
                id = (typeof c.id === 'string') ? c.id : c.id.getAttribute('id'),
                e, f, n, v, d, i, il, j, jl, o;

                if (!id) {
                                        id = Y.guid('io:');
                                        c.id.setAttribute('id', id);
                                }

                f = Y.config.doc.getElementById(id);

            // Iterate over the form elements collection to construct the
            // label-value pairs.
            for (i = 0, il = f.elements.length; i < il; ++i) {
                e = f.elements[i];
                d = e.disabled;
                n = e.name;

                if ((useDf) ? n : (n && !d)) {
                    n = encodeURIComponent(n) + '=';
                    v = encodeURIComponent(e.value);

                    switch (e.type) {
                        // Safari, Opera, FF all default options.value from .text if
                        // value attribute not specified in markup
                        case 'select-one':
                            if (e.selectedIndex > -1) {
                                o = e.options[e.selectedIndex];
                                data[item++] = n + eUC((o.attributes.value && o.attributes.value.specified) ? o.value : o.text);
                            }
                            break;
                        case 'select-multiple':
                            if (e.selectedIndex > -1) {
                                for (j = e.selectedIndex, jl = e.options.length; j < jl; ++j) {
                                    o = e.options[j];
                                    if (o.selected) {
                                      data[item++] = n + eUC((o.attributes.value && o.attributes.value.specified) ? o.value : o.text);
                                    }
                                }
                            }
                            break;
                        case 'radio':
                        case 'checkbox':
                            if(e.checked){
                                data[item++] = n + v;
                            }
                            break;
                        case 'file':
                            // stub case as XMLHttpRequest will only send the file path as a string.
                        case undefined:
                            // stub case for fieldset element which returns undefined.
                        case 'reset':
                            // stub case for input type reset button.
                        case 'button':
                            // stub case for input type button elements.
                            break;
                        case 'submit':
                        default:
                            data[item++] = n + v;
                    }
                }
            }
            return s ? data.join('&') + "&" + s : data.join('&');
        }
    }, true);



}, '3.1.2' ,{requires:['io-base','node-base']});

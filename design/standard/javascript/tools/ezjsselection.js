//
// Created on: <20-Jul-2004 10:54:01 fh>
//
// ## BEGIN COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
// SOFTWARE NAME: eZ Publish
// SOFTWARE RELEASE: 4.1.x
// COPYRIGHT NOTICE: Copyright (C) 1999-2010 eZ Systems AS
// SOFTWARE LICENSE: GNU General Public License v2.0
// NOTICE: >
//   This program is free software; you can redistribute it and/or
//   modify it under the terms of version 2.0  of the GNU General
//   Public License as published by the Free Software Foundation.
// 
//   This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//   GNU General Public License for more details.
// 
//   You should have received a copy of version 2.0 of the GNU General
//   Public License along with this program; if not, write to the Free
//   Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//   MA 02110-1301, USA.
// ## END COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
//
            
/*! \file ezjsselection.js
*/


/*! 
    Invert the status of checkboxes named 'checkboxname' in form 'formname'.
    If you have a list of checkboxes name them with 'someName[]' in order to toggle them all.
*/
function ezjs_toggleCheckboxes( formname, checkboxname )
{
    with( formname )
        {
        for( var i = 0, l = elements.length; i < l; i++ )
        {
            if( elements[i].type === 'checkbox' && elements[i].name == checkboxname && elements[i].disabled == false )
            {
                if( elements[i].checked == true )
                {
                    elements[i].checked = false;
                }
                else
                {
                    elements[i].checked = true;
                }
            }
        }
    }
}

<?php
//
// Created on: <06-Jul-2003 15:52:54 amos>
//
// ## BEGIN COPYRIGHT, LICENSE AND WARRANTY NOTICE ##
// SOFTWARE NAME: eZ Publish
// SOFTWARE RELEASE: 4.4.0
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


/**
 * @deprecated Temporary compatibility layer for extensions
 */
function ezi18n( $context, $source, $comment = null, $arguments = null )
{
    return ezpI18n::tr( $context, $source, $comment, $arguments );
}

/**
 * @deprecated Temporary compatibility layer for extensions
 */
function ezx18n( $extension, $context, $source, $comment = null, $arguments = null )
{
    return ezpI18n::tr( $context, $source, $comment, $arguments );
}

?>

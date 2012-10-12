<?php
/**
 * File containing the ezcGraphInvalidDataException class
 *
 * @package Graph
 * @version //autogentag//
 * @copyright Copyright (C) 2005-2010 eZ Systems AS. All rights reserved.
 * @license http://ez.no/licenses/new_bsd New BSD License
 */
/**
 * Exception thrown when invalid data is provided, which cannot be rendered 
 * for some reason.
 *
 * @package Graph
 * @version //autogentag//
 */
class ezcGraphInvalidDataException extends ezcGraphException
{
    /**
     * Constructor
     * 
     * @param string $message
     * @return void
     * @ignore
     */
    public function __construct( $message )
    {
        parent::__construct( "You provided unusable data: '$message'." );
    }
}

?>
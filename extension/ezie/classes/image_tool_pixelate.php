<?php
/**
* File containing the eZIEImageToolPixelate class.
* 
* @copyright Copyright (C) 1999-2010 eZ Systems AS. All rights reserved.
* @license http://ez.no/licenses/gnu_gpl GNU General Public License v2.0
* @version 1.1.0
* @package ezie
*/
class eZIEImageToolPixelate extends eZIEImageAction
{
    /**
    * Creates a pixelate filter
    * 
    * @param  int $width 
    * @param  int $height 
    * @param  array(int) $region Affected region, as an array of 4 keys: w, h, x, y
    * 
    * @return array( ezcImageFilter )
    */
    static function filter( $width, $height, $region = null )
    {
        return array(
            new ezcImageFilter( 
                'pixelate',
                array( 
                    'width'  => $width,
                    'height' => $height,
                    'region' => $region, 
                ) 
            )
        );
    }
}

?>

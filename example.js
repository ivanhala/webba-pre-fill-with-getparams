jQuery(document).on( 'wbk_on_form_rendered', function(){
    if( typeof wbk_get_converted !== 'undefined' ){
	jQuery.each( wbk_get_converted, function( key, value ) {
	   if ( key != 'action' && key != 'time' && key != 'service' && key != 'step' ){
                if( jQuery( 'input[name="' + key + '"]').length == 1 ){
                    jQuery( 'input[name="' + key + '"]').val(value);
                }     
	    }
        });
    }
});

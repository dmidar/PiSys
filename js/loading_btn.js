// Кнопка загрузки файла на странице заявки

$(function(){
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".button" ),
        lbl = wrapper.find( "mark" );

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
            btn.text( "ФАЙЛ ВЫБРАН" );
            btn.addClass( "btn_focus" );
        }else
            btn.text( file_name );
    }).change();

});
$( window ).resize(function(){
    $( ".file_upload input" ).triggerHandler( "change" );
});
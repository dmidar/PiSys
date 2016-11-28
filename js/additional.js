/*Регулируемые фоновые полоски*/

$(window).load(function (){
    var hg=$(document).outerHeight();
    hg=hg-100+'px';
    
    $('.drk_bckgrnd_strp').height(hg);
});

$(window).resize(function() {
    
    var hg=$('.content_absl').outerHeight();
    hg=hg-100+'px';
    
    $('.drk_bckgrnd_strp').height(hg); 
    
});


// Всплывающее окно главной страницы проекта
$(document).ready(function () {
    
    $(document).on("click", ".about_project_main", function () {
        $("#popup1").show();
        });
    
    $(document).on("click", "#popup1", function () {
        $("#popup1").hide();
        });

});



/*мобильное меню*/

$(document).mouseup(function (e){
		var div = $("#slide_menu");
    
        $('#menu_button').click(function() {
        $('#slide_menu').toggleClass('visible');
        });
    
        if (div.hasClass("visible")
		&& (!div.is(e.target)
		    && div.has(e.target).length === 0)) { 
			div.toggleClass('visible'); 
		}
	});



/*уезжающее меню*/

var lg_hght = 46;
var xs_hght = 0;
var h_mrg = 0;

$(function runningMenu() {

    if ($(window).width() > 600) {
                     
        $(function(){
     
        var elem = $('#top_nav');
        var top = $(this).scrollTop();
         
        if(top > lg_hght){
            elem.css('top', h_mrg);
        }           
         
        $(window).scroll(function(){
            top = $(this).scrollTop();
             
            if (top+h_mrg < lg_hght) {
                elem.css('top', (lg_hght-top));
            } else {
                elem.css('top', h_mrg);
            }
        });
     
        });
    }

    else {
        
        $(function(){
         
            var elem = $('#top_nav');
            var top = $(this).scrollTop();
             
            if(top > xs_hght){
                elem.css('top', h_mrg);
            }           
             
            $(window).scroll(function(){
                top = $(this).scrollTop();
                 
                if (top+h_mrg < xs_hght) {
                    elem.css('top', (xs_hght-top));
                } else {
                    elem.css('top', h_mrg);
                }
            });
         
            });
    };

});

/*
$(window).load(runningMenu);
$(window).resize(runningMenu);*/

$(window).on('page: load resize', 'runningMenu');



 








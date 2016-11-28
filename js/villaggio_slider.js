// Слайдер на странице проекта Villaggio

$(window).load(function() {

  var $window = $(window),
      flexslider = { vars:{} };

  function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4;
  }

 
  $window.load(function() {
    $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
   });  
      
    $('#carousel').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 200,
      itemMargin: 15,
      minItems: getGridSize(4),
      maxItems: getGridSize(8)
    });
      
  });

  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });   
    
}());


// Слайдер как всплывающее окно

$(document).ready(function () {
    
    $(document).on("click", ".sl_img", function () {
        $("#popup2").show();
       
        $('.flexslider').flexslider({
            animation: "slide"
        });
        
     });

});

function PopUpHide(){
    $("#popup2").hide();
}


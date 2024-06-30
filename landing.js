// (function($){
//     // variables
//     elementWidth = $('ul').width(),
//     containerWidth = $('nav').width(),
//     difference = elementWidth-containerWidth,
//     finalWidth = difference * 1.5,
//     element = $('ul');
    
//     // active on click
//     $('li').on('click', function(){
//       $('li').removeClass('active');
//       $(this).addClass('active');
//     });
    
//   })(jQuery);


(function($){
  // variables
  var elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth - containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
      $('li').removeClass('active');
      $(this).addClass('active');
  });
  
  // smooth scroll
  $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
  });
  
})(jQuery);

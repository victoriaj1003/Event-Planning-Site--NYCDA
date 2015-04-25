$(document).ready(function(){
	$('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
   	
   	$(window).scroll(function() {

   	// Put together our final background position
     var coords = '50% '+ yPos + 'px';
                
    // Move the background
    $bgobj.css({ backgroundPosition: coords });
    
    });
  
  }); 

});

var yPos = -($window.scrollTop() / $bgobj.data('speed'));



// 1015
// $('img')
// [<img src=​"images/​hero-images/​contactbw.jpeg" style=​"
//     position:​ fixed;​
// ">​]
// $('img').attr('src', "")
// [<img src style=​"
//     position:​ fixed;​
// ">​]
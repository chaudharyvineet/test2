/*Icludes*/
  function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}


includeHTML();

/*Includes end*/





function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


$('#carouselExample').on('slide.bs.carousel', function (e) {

    /*

    CC 2.0 License Iatek LLC 2018
    Attribution required
    
    */

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
            // append slides to end
            if (e.direction == "left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            } else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});





// Add smooth scrolling to all links
$("#blog a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1600) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1600, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});





/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
        $(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$("#back2Top").hide();
	} else {
		$("#back2Top").show();
	}
	$("#thing-to-hide").css("opacity", op ); 
});
        } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
       $("#ppup").addClass('yu');
        return false;
    });

});



$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#b2t').fadeIn();
        $(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$("#b2t").hide();
	} else {
		$("#b2t").show();
	}
	$("#thing-to-hide").css("opacity", op ); 
});
        } else {
        $('#b2t').fadeOut();
    }
});
$(document).ready(function () {
    $("#b2t").click(function (event) {
        event.preventDefault();
       $("#ppup").addClass('yu');
        return false;
    });

});




$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#b2c').fadeIn();
        $(window).scroll(function(){
  var threshold = 200; // number of pixels before bottom of page that you want to start fading
  var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
	if( op <= 0 ){
		$("#b2c").hide();
	} else {
		$("#b2c").show();
	}
	$("#thing-to-hide").css("opacity", op ); 
});
        } else {
        $('#b2c').fadeOut();
    }
});
$(document).ready(function () {
    $("#b2c").click(function (event) {
        event.preventDefault();
       $("#bat").hide();
        $("#b2c").hide();
        return false;
    });

});
/*Scroll to top when arrow up clicked END*/




/*-------------Navigation language dropdown-----------*/

function englishflag() {
    document.getElementById("lang").style.backgroundImage = "url('svg/aus.svg')";
}

function japaneseflag() {
   document.getElementById("lang").style.backgroundImage = "url('svg/jp.svg')";
}
function spainflag() {
    document.getElementById("lang").style.backgroundImage = "url('svg/es.svg')";
}

//for mobile

function englishflagsm() {
    document.getElementById("lang-sm").style.backgroundImage = "url('svg/aus.svg')";
}

function japaneseflagsm() {
   document.getElementById("lang-sm").style.backgroundImage = "url('svg/jp.svg')";
}
function spainflagsm() {
    document.getElementById("lang-sm").style.backgroundImage = "url('svg/es.svg')";
}

/*-------------Navigation language dropdown end-----------*/










// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.documentElement.scrollTop - 800 ;
  var height = document.getElementById("blog").scrollHeight - 1200 ;
  var scrolled = 0 + (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/** ===========================================
    Hide / show the progressbar
============================================ */
  var previousScroll = 0;

  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop();

    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
        if (currentScroll < 1100){
        window.setTimeout(hideNav, 10);
          $(".stick").removeClass(" is-visible").addClass("is-hidden");
      }
        
      else if (currentScroll > previousScroll){
        window.setTimeout(hideNav, 10);
         $(".stick").removeClass(" is-hidden").addClass("is-visible"); 

      } else {
        window.setTimeout(showNav, 10);
          $(".stick").removeClass(" is-hidden").addClass("is-visible");
      }
      previousScroll = currentScroll;
    }

  });

  function hideNav() {
    $(".float-rec").removeClass(" is-visible").addClass("is-hidden");
  }
  function showNav() {
    $(".float-rec").removeClass(" is-hidden").addClass("is-visible");
  }




















   



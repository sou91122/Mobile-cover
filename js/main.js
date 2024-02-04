// -------------main menu area 
(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});	

  })(jQuery);
// product-carousel //
$('.product-carousel').slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  rtl : false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});

// customise-main-box product-carousel //
$('.customise-main-box .productcustomise-carousel, related-product-slider.area2 .product-carousel').slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  rtl : false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});

let ltrMobileSettings = [{breakpoint: 1024, settings: {slidesToShow: 3,slidesToScroll: 1,rtl : false}}, {breakpoint: 767, settings: {slidesToShow: 2,slidesToScroll: 1,rtl : false}}, {breakpoint: 480, settings: {slidesToShow: 1,slidesToScroll: 1,rtl : false}}];

let rtlMobileSettings = [{breakpoint: 1024, settings: {slidesToShow: 3,slidesToScroll: 1,rtl : true}}, {breakpoint: 767, settings: {slidesToShow: 2,slidesToScroll: 1,rtl : true}}, {breakpoint: 480, settings: {slidesToShow: 1,slidesToScroll: 1,rtl : true}}];

$('.product-carousel').slick('slickSetOption', 'responsive', ltrMobileSettings, true);



// product-carousel //

// small search
$("header .header-main .search-area .sm-srch").click(function(){
    $("header .header-main .search-area .form-group").toggleClass("active");
  });

  // ---------cart main-area----------
$(".cart-main-area .head-area h4 span, .header-main .hedrht ul li.cart-icon.cart2").click(function(){
    $(".cart-main-area").toggleClass("active");
  });


  
  // checkout panel increment decrement
(function() {
 
    window.inputNumber = function(el) {
  
      var min = el.attr('min') || false;
      var max = el.attr('max') || false;
  
      var els = {};
  
      els.dec = el.prev();
      els.inc = el.next();
  
      el.each(function() {
        init($(this));
      });
  
      function init(el) {
  
        els.dec.on('click', decrement);
        els.inc.on('click', increment);
  
        function decrement() {
          var value = el[0].value;
          value--;
          if(!min || value >= min) {
            el[0].value = value;
          }
        }
  
        function increment() {
          var value = el[0].value;
          value++;
          if(!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    }
  })();
  
  inputNumber($('.updown-btn .input-number'))

// cases page
$(".all-cases-main .case-main-filter .case-ctg-box h4").click(function(){
  $(this).toggleClass("active");
});

$(".all-cases-main .case-main-filter .case-ctg-box h5").click(function(){
  $(this).toggleClass("active");
});

// rtl format
$(function(){
  $("#language").on("click", function (){
      $('html').attr('dir', function(index, attr){
          return attr === 'rtl' ? 'ltr' : 'rtl';
      });
      if($("html").attr("dir") === "rtl"){
         $(this).text("English");
         $(".product-carousel").slick('slickSetOption', 'rtl', true, true);
         $('.product-carousel').slick('slickSetOption', 'responsive', rtlMobileSettings, true);
      }else{
         $(this).text("العربية");
         $(".product-carousel").slick('slickSetOption', 'rtl', false, true);
         $('.product-carousel').slick('slickSetOption', 'responsive', ltrMobileSettings, true);
      }
  });
 });

// small search
$(".order-item-sec .head-box .container .order-table").click(function(){
  $(".order-item-sec .order-item-box-area").toggleClass("active");
});


// product details page
$(".product-details-main .customise-main-box .related-product .product-carousel").slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  rtl : false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }

  ]
});

// -------------details main pic fixed------------------------

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});	

  })(jQuery);

$(document).ready(function() {
	"use strict";
	$(this).scrollTop(0);
	Rawbought_CommunitySlider();
	Rawbought_UniqueSlider();
	Rawbought_ProductHighlighter();
	Rawbought_productSticky();
	RawboughtAsideFilter();
	//Rawbought_NavHeightOffset();
	Rawbought_NavbarFixedDesktop();
	Rawbought_NavbarFixedMobile();
	Rawbought_ProductShowcaseSlider();
	init__productPreviewSliderMobile();
	Rawbought_readonlyRating();
	Rawbought_standardRating();
	Rawbought_ajaxQuickview();
	Rawbought_ColorSelect();
	Rawbought_ProductZoom();
	init__footerCollapse();
	Rawbought_Quantity();
	init__priceRange();

	/*$(window).scroll(function() {
	    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
	        $('body').css({
		    	"background-color": "#9BBABD",
		    	"color": "white"
		    }).addClass('body-reached-bottom');
	    }else {
	    	$('body').css({
		    	"background-color": "",
		    	"color": ""
		    }).removeClass('body-reached-bottom');
	    }
	});*/

	/*$('input[type="radio"]').click(function(){
        if($(this).attr("value")=="creditcard"){
            $(".review-collapse").addClass('open');
        }else if($(this).attr("value")=="paypal"){
            $(".review-collapse").addClass('open');
        }else {
        	$(".review-collapse").removeClass('open');
        }       
    });
	$('input[type="radio"]').trigger('click');*/

	$('.modal-product-default').on('show.bs.modal', function (e) {
		$(this).closest('body').addClass('modal-product-default-open');
	})
	$('.modal-product-default').on('hidden.bs.modal', function (e) {
		$(this).closest('body').removeClass('modal-product-default-open');
	})

	$('[data-thumbnail="thumbnail"]').on('click', '.btn-thumbnail-image', function(e) {
		var thumbnailSrc = $(this).find('img').attr('src');
		$(this).closest('[data-preview="wrapper"]').find('[data-preview="main"] img').attr('src', thumbnailSrc)
	});
	

	$('#imageZoomModal').on('shown.bs.modal', function (e) {
		$('.imagezoom-slider').slick();
	})
	$('#imageZoomModal').on('hide.bs.modal', function (e) {
		$('.imagezoom-slider').slick("unslick");
	})
	$('.navbar__only_mobile.bg-transparent-fixed-top #navbarCollapse').on('show.bs.collapse', function (e) {
		$(this).closest('.navbar__only_mobile')
			.addClass('bg-white navbar-light bg-solid-fixed-top')
				.removeClass('navbar-dark bg-transparent-fixed-top bg-transparent');
	})
	$('.navbar__only_mobile.bg-transparent-fixed-top #navbarCollapse').on('hidden.bs.collapse', function (e) {
		$(this)
		.closest('.navbar__only_mobile')
			.removeClass('bg-white navbar-light bg-solid-fixed-top n-open')
				.addClass('navbar-dark bg-transparent-fixed-top bg-transparent');
	})
});

/*$(window).load(function() {
    Rawbought_NavbarFixedDesktop();
});*/


function RawboughtAsideFilter() {
	var $filterToggle = $('.filter-toggle');	
	if($filterToggle.length > 0) {
		$filterToggle.on('click', function(event) {
			var $this = $(this);
			event.preventDefault();
			$this.toggleClass('collapsed');
			$this.closest('body').toggleClass('filter-show');
			$this.closest('section').toggleClass('section-filter-show');
			$this.closest('body').find('.aside-filter-collapse').toggleClass('-pull-left');
			$this.closest('body').find('.filter-collapse-content').toggleClass('-push-right');
		})
		
	}
}




function Rawbought_Quantity() {
  var incrementPlus;
  var incrementMinus;

  var buttonPlus  = $(".btn-plus");
  var buttonMinus = $(".btn-minus");

  var incrementPlus = buttonPlus.click(function() {
    var $n = $(this)
      .closest(".product-quantity-default")
      .find(".input-quantity");
    $n.val(Number($n.val())+1 );
  });

  var incrementMinus = buttonMinus.click(function() {
      var $n = $(this)
      .closest(".product-quantity-default")
      .find(".input-quantity");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount-1);
    }
  });
}


function Rawbought_NavbarFixedMobile() {
	$(window).scroll(function() {
		var $ww = $(window).width();
		if($ww <= 991.98) {
			var sTop = $(window).scrollTop();
			if (sTop > 60) {
				$('.navbar__only_mobile.bg-transparent-fixed-top').addClass('-stucked bg-white navbar-light bg-solid-fixed-top').removeClass('navbar-dark bg-transparent-fixed-top bg-transparent');
				//$('.navbar__only_mobile.navbar-light').find('.navbar-brand img').attr('src', 'assets/images/logo.png');
			}
			else if (sTop <= 59 && ($('.navbar__only_mobile').hasClass('bg-transparent-fixed-top'))) {
				$('.navbar__only_mobile').find('.collapse').collapse('hide')
			}
			else {
				$('.navbar__only_mobile.bg-solid-fixed-top').removeClass('-stucked bg-white navbar-light bg-solid-fixed-top').addClass('navbar-dark bg-transparent-fixed-top bg-transparent');
				//$('.navbar__only_mobile.navbar-dark').find('.navbar-brand img').attr('src', 'assets/images/logo-white.png');
			}
		}
	});
}



function init__productPreviewSliderMobile () {
	if($('.product-preview-slider').length) {
		$('.product-preview-slider').slick({
		    dots: true,
		    arrows: false,
		    slidesToShow: 1,
		    centerMode:true,
		    centerPadding:"100px",
		    draggable: true,
		    responsive: [
		        {
		            breakpoint: 600,
		            settings: {
		                slidesToShow: 1,
		                centerMode: false,
		                centerPadding: "0px"
		            }
		        }
		    ]
		});
	}
}

function Rawbought_NavbarFixedDesktop() {
	$(window).scroll(function() {
		var $ww = $(window).width();
		if($ww >= 768) {
			var sTop = $(window).scrollTop();
			if (sTop > 15) {
				$('.navbar__only_desktop.bg-transparent-fixed-top').addClass('-stucked bg-white navbar-light').removeClass('navbar-dark bg-transparent');
				//$('.navbar__only_desktop.navbar-light').find('.nav-brand-image img').attr('src', 'assets/images/logo.png');
			} else {
				$('.navbar__only_desktop.bg-transparent-fixed-top').removeClass('-stucked bg-white navbar-light').addClass('navbar-dark bg-transparent');
				//$('.navbar__only_desktop.navbar-dark').find('.nav-brand-image img').attr('src', 'assets/images/logo-white.png');
			}
		}
	});
}

$('.navbar .dropdown').mouseenter(function(e) {
	var $this = $(this).closest('.navbar');
	if($this.hasClass('bg-transparent') && ($(window).scrollTop() < 14)) {
		$(this).closest('.navbar')
			.removeClass('bg-transparent navbar-dark')
				.addClass('bg-white navbar-light');
	}else {

	}
});
$('.navbar .dropdown').mouseleave( function(e) {
	var $this = $(this).closest('.navbar');
	if($this.hasClass('bg-transparent-fixed-top') && ($(window).scrollTop() < 1)) {
		$(this).closest('.navbar')
			.addClass('bg-transparent navbar-dark')
				.removeClass('bg-white navbar-light');
	}
});

function Rawbought_ColorSelect() {
	$(".dropdown-colors").on('click', '.dropdown-item', function(e){
		var selText = $(this).html();
		$(this).parents('.dropdown-colors').find('.dropdown-toggle').html(selText);
	});
}


function Rawbought_ProductZoom() {
	if ($('.product-popup').length) {
		$('.product-popup').magnificPopup({
			type:'image',
			removalDelay: 300,
			mainClass: 'singlebar-product-popup',
			closeOnContentClick: true,
			callbacks: {
	            resize: changeImgSize,
	            imageLoadComplete:changeImgSize,
	            change:changeImgSize
	        }
		});

		function changeImgSize(){
	        var img = this.content.find('img');
	        img.css('max-height', 'none');
	    }
	}
}



function Rawbought_CommunitySlider() {
	if ($('.store-slider').length) {
		$('.store-slider').owlCarousel({
			dots: false,
			nav: true,
			margin: 12
		});
	}
}
function init__priceRange() {
	if ($('#priceRange').length) {
		$("#priceRange").slider({ min: 0, max: 10000, value: [0, 10000], focus: true });
	}
}
function Rawbought_ajaxQuickview() {
	if ($('.ajax-quickview').length) {
		$('.ajax-quickview').magnificPopup({
			type: 'ajax'
		});
	}
}
function Rawbought_readonlyRating() {
	if ($('.rating-readonly').length) {
		$(".rating-readonly").starRating({
			totalStars: 5,
			readOnly: true,
			strokeWidth: 0,
		});
	}
}
function Rawbought_standardRating() {
	if ($('.rating-standard').length) {
		$(".rating-standard").starRating({
			totalStars: 5,
			strokeWidth: 0,
		});
	}
}

function Rawbought_UniqueSlider() {
	if ($( '.unique-slider' ).length) {
		$('.unique-slider').owlCarousel({
		    dots: false,
		    nav: true,
		    margin: 70
		});
	}
}

function Rawbought_ProductShowcaseSlider() {
	if ($( '.singlebar-slider' ).length) {
		 var swiper = new Swiper('.singlebar-slider', {
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
	        direction: 'vertical',
	        slidesPerView: 1,
	        paginationClickable: true,
	        spaceBetween: 30,
	        mousewheel: true,
	        parallax: true,
	        speed: 600
	    });
	}
}

function Rawbought_ProductHighlighter() {
	var navH = $('.navbar').outerHeight(),	
		wh = ($(window).height() - navH)  - 120,
		wProCol = $('.product-highlighter-wrap').width();
	$('.product-highlighter').css({
		"height": wh,
		"width": wProCol
	});
}

function Rawbought_NavHeightOffset() {
	var navHeight = $('.navbar').outerHeight();
	if($('.has-fixed-navbar').length) {
		$('.has-fixed-navbar').css({
			"height": navHeight
		});
	}
}

function Rawbought_productSticky() {
	if ($('.product_sticky').length) {
		$(".product_sticky").stick_in_parent();
	}
}


function init__footerCollapse() {
	var $ww = $(window).width();
	if($ww <= 575.98) {
		$('.foo-collapse').slideUp();
		$('.foo-collapse-item').on('click', '.foo-title', function(e) {
			$(this).closest('.foo-collapse-item').toggleClass('f-uncollapsed').find('.foo-collapse').toggleClass('show').slideToggle();
		});
	}
}

$('.product-size-lists').on('click', '.btn', function() {
	$('.product-size-lists').find('.btn').removeClass('active');
	$(this).addClass('active')
});



$('.btn-quick-add').on('click', function(){
	$(this).closest('.raw-product').find('.product-quick').addClass('-showing');
});
$('.btn-quick-add--cancel').on('click', function(){
	$(this).closest('.raw-product').find('.product-quick').removeClass('-showing');
});


$("#navMobile").metisMenu();

$('#modalSearch').on('show.bs.modal', function (e) {
	$(this).closest('body').addClass('modal_search__open');
	$('.input-search').trigger('focus')
});
$('#modalSearch').on('shown.bs.modal', function (e) {
	$('.input-search').trigger('focus')
});
$('#modalSearch').on('hidden.bs.modal', function (e) {
	$(this).closest('body').removeClass('modal_search__open');
})

if ($(window).width() >= 768) {
   $('.dropdown-cart').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(300);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(300);
    });
}


$(window).scroll(function() {
    /*if ($(window).scrollTop() + $(window).height() + 100 >= $(document).height()) {
        $('body').css({
            "background-color": "#9BBABD",
            "color": "white"
        }).addClass('body-reached-bottom');
    } else {
        $('body').css({
            "background-color": "",
            "color": ""
        }).removeClass('body-reached-bottom');
    }*/
    if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
	 	$('body').css({
	        "background-color": "#9BBABD",
	        "color": "white"
	    }).addClass('body-reached-bottom');
	}else {
		$('body').css({
	        "background-color": "",
	        "color": ""
	    }).removeClass('body-reached-bottom');
	}
});

/*$(window).scroll(function() {
	var scrollCheck = $(window).scrollTop();
	if ($('#bodybottom').position().top <= scrollCheck) {			
		var currentId = $(this).attr('id');
		$('body').addClass('body');		
	} 
});*/




/*$(window).on("scroll", function() {
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    $('body').css({
	    	"background-color": "#9BBABD",
	    	"color": "white"
	    }).addClass('body-reached-bottom');
	}else {
		$('body').css({
	    	"background-color": "",
	    	"color": ""
	    }).removeClass('body-reached-bottom');
	}
});*/




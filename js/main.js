;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#usapostile-offcanvas, .js-usapostile-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-usapostile-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="usapostile-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-usapostile-nav-toggle usapostile-nav-toggle usapostile-nav-white"><span>MENU</span><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#usapostile-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#usapostile-offcanvas').append(clone2);

		$('#usapostile-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#usapostile-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-usapostile-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-usapostile-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".usapostile-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#usapostile-counter').length > 0 ) {
			$('#usapostile-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#usapostile-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};



	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();


		$('.showNonHag').click(function(event){
			event.preventDefault();
			$('.nonHagCountry').toggle();
			$('.hagCountry').toggle();
			$('.nonHag').toggle();
			$('.hag').toggle();
			$(this).toggleClass('smallFont');
		})

		$('.readMore').click(function(event){
			event.preventDefault();
			$(this).closest(".radioItem").find('.content').slideToggle();
			console.log(	$(this.closest(".radioItem")))
	
		})

		$('.caseCheck').click(function(){		
			if($(this).is(':checked')){
				console.log('ddddd')
				$('.radioItem').hide();
				$(this).closest('.radioItem').show();
				$(this).closest('.radioItem').find('.caseContent').show();
			}
			else{
				$('.radioItem').show();
				$('.caseContent').hide();
			}
		})
		$('#yesCheck').click(function(){		
			if($(this).is(':checked')){
				$('.countryCase .block').hide();
				$('.usd').show();
			}
		});
		$('#noCheck').click(function(){		
			if($(this).is(':checked')){
				$('.countryCase .block').hide();
				$('.ChooseState').show();
			}
		});
		$('#showFedx').click(function(){
			$('.countryCase .block').hide();
			$('.fedxOption').show();
		})

		$('input:radio').change(function(){
			$('.countryCase .item').hide();
		  if($(this).val()=='money-order'){
			   $('.money-order').slideDown();
		  }else if($(this).val()=='cashierCheck'){
				$('.cashierCheck').slideDown();
	
		  }
		  else if($(this).val()=='credit-body'){
			$('.credit-body').slideDown();
		  }
	  
		})
		
		$('#showPayment').click(function(){
			$('.countryCase .block').hide();
			$('.paymentMethod').show();
		})

		$('#alabamaForm').click(function(e){
			e.preventDefault();
			$('.countryCase .block').hide();
			$('.alabamaForm').show();
		})

		// fkrt next and back
		$('.processBtn').click(function () {
			let tar = $(this).attr("data-target");
			let className = $(this).parents(".countryCase .block").attr('class').split(' ')[1];
			if (tar != "") {
				$(this).parents(".countryCase .block").hide();
				$('.' + tar).find('.backBtn').attr("data-target",className);
				$('.' + tar).show();
			}
			if($('#embassy #click9').is(':checked')){
				console.log('hello')
				$('.fedxOption .radioContainer .form-row:nth-child(2)').hide();
			}
			$('.checkProcess').removeAttr("checked");
		});

		$('.checkProcess').click(function (e) {
			if ($(this).is(':checked')) {
				let className = $(this).parents(".countryCase .block").attr('class').split(' ')[1];
				let tar = $(this).attr("data-target");
				let elm=$(this)
				if (tar != "") {
					setTimeout(function(){  
						elm.parents(".countryCase .block").hide()
						$('.' + tar).fadeIn(300)
					},300)

					$('.' + tar).find('.backBtn').attr("data-target",className);
		
				
				}
			}
		});

		$('.backBtn').click(function () {
			let tar = $(this).attr("data-target");
			if (tar != "") {
				$(this).parents(".countryCase .block").hide();
				$('.' + tar).show();
			}
			$('.checkProcess').removeAttr("checked");
		});
		
		$('.contryQuestion .state-btn').click(function(){
			$('.choose-country2').show();
		})

	
		$('#check9').click(function(){		
			if($(this).is(':checked')){
				$('.check9').show();
				$('.check10').hide();
			}
		})
	
		$('#check10').click(function(){		
			if($(this).is(':checked')){
				$('.check10').show();
				$('.check9').hide();
			}
		})

		$('.single-dovument-case-container .procBtn').on("click", (function(){
			let tar = $(this).attr("data-target");
			if (tar != "") {
				$('.imgContainer .overlay').show();
				$('.imgContainer').show();
				$('.single-dovument-case-container .block').hide();
				$(this).parents('.single-dovument-case-container').find('.imgContainer').hide();
				$(this).parents('.single-dovument-case-container').find('.steps').show();
				$(this).parents('.single-dovument-case-container').find('.' + tar).show();
				$(this).parents('.single-dovument-case-container').find('.overlay').hide();
			}

			
		}))

		// $('.showDocument').click(function(){
		// 	$(this).parents('.single-dovument-case-container').find('.step1').hide();
		// 	$(this).parents('.single-dovument-case-container').find('.step2').show();

		// })
		$(".single-dovument-case-container .block .custom-option").on("click", (function(){
			let tar = $(this).parents('.block').attr("data-target");
			console.log(tar)
			if (tar != "") {
				$('.imgContainer .overlay').show();
				$('.imgContainer').show();
				$('.single-dovument-case-container .block').hide();
				$(this).parents('.single-dovument-case-container').find('.imgContainer').hide();
				$(this).parents('.single-dovument-case-container').find('.steps').show();
				$(this).parents('.single-dovument-case-container').find('.' + tar).show();
				$(this).parents('.single-dovument-case-container').find('.overlay').hide();
			}
		}))
		// $(".caseA .custom-option").on("click", (function(){
		// 	$(this).parents('.quesCountainer').find('.step2').hide();
		// 	$(this).parents('.quesCountainer').find('.step3').show();
		// 	console.log('ffrff')
		// }))

		$('.caseLabel1').on("click", (function(){
			$(this).parents('.single-dovument-case-container').siblings().hide();
			$('.quesCountainer1').show();
			
		}))


		// cardNumber.keyup(function() {
		// 	amex.removeClass('transparent');
		// 	visa.removeClass('transparent');
		// 	mastercard.removeClass('transparent');
		
		// 	if ($.payform.validateCardNumber(cardNumber.val()) == false) {
		// 		cardNumberField.removeClass('has-success');
		// 		cardNumberField.addClass('has-error');
		// 	} else {
		// 		cardNumberField.removeClass('has-error');
		// 		cardNumberField.addClass('has-success');
		// 	}
		
		// 	if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
		// 		mastercard.addClass('transparent');
		// 		amex.addClass('transparent');
		// 	} else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
		// 		mastercard.addClass('transparent');
		// 		visa.addClass('transparent');
		// 	} else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
		// 		amex.addClass('transparent');
		// 		visa.addClass('transparent');
		// 	}
		// });

		$('#card__name').val($('#owner').val());
		$('.card__ccv__input').val($('#cvv').val());
		$('.card__number__input').val($('#cardNumber').val());
		$('.card__year__input').val($('#year').val());
		$('#card__month').val($('#month').val());


		$('#owner').keyup(function() {
			$('#card__name').val($('#owner').val());
		});



		
		$('#cvv').keyup(function() {
			$('.card__ccv__input').val($('#cvv').val());
		});

		$('#cardNumber').keyup(function() {
			$('.card__number__input').val($('#cardNumber').val());
			$('.cvv').text(creditCardTypeFromNumber($(this).val()));
		});

		$('#year').change(function() {
			$('.card__year__input').val($('#year').val());
		});

		$('#month').change(function() {
			$('#card__month').val($('#month').val());
		});

	


		$('#credit_cards img').on("click", (function(){
			$('#credit_cards img').removeClass('selected');
			$(this).addClass('selected');
			let imgName=$(this).attr("alt");
			console.log(imgName)
			$('.card').css("background-image","url(images/" + imgName + "CreditCard.jpg)");
			$('.svgCards svg').hide();
			$('.svgCards .'+imgName+'SVG').show();
			
		}));
		function creditCardTypeFromNumber(num) {
			// first, sanitize the number by removing all non-digit characters.
			num = num.replace(/[^\d]/g,'');
			// now test the number against some regexes to figure out the card type.
			if (num.match(/^5[1-5]\d{14}$/)) {
				console.log('MasterCard');
			  return 'MasterCard';
			} else if (num.match(/^4\d{15}/) || num.match(/^4\d{12}/)) {
				console.log('Visa');
			  return 'Visa';
			} else if (num.match(/^3[47]\d{13}/)) {
				console.log('AmEx');
			  return 'AmEx';
			} else if (num.match(/^6011\d{12}/)) {
				console.log('Discover');
			  return 'Discover';
			}
			return 'UNKNOWN';
		  }
		

		  $('.moveBtn').click(function(){
				$('.single-dovument-case-container').addClass('animated fadeOut').hide();
				$(this).parents('.single-dovument-case-container').removeClass('animated fadeOut').show().addClass('animated fadeIn');
				$(this).parents('.expService').find('.docDetails').show().addClass('animated fadeIn');
				$('.clickText').hide();
		  })



		$('.docDetails .procBtn').on("click", (function(){
			  console.log('ddd')
			let tar = $(this).attr("data-target");
			if (tar != "") {
				$('.docDetails  .block').hide();
				$(this).parents('.docDetails').find('.steps').show();
				$(this).parents('.docDetails').find('.' + tar).show();
			}		
		}))

		$(".docDetails .block .custom-option").on("click", (function(){
			let tar = $(this).parents('.block').attr("data-target");
			console.log(tar)
			if (tar != "") {
				$('.docDetails .block').hide();
				$(this).parents('.docDetails').find('.steps').show();
				$(this).parents('.docDetails').find('.' + tar).show();
			}
		}))
	});


}());
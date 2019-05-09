jQuery(document).ready(function($) {


	// start  menu 
	{
		$(window).scroll(function(event) {
			console.log($(this).scrollTop())

			if($(this).scrollTop() >= $('header').height()/4){
				$('.menu').css('marginTop', `0`);
			}else{
				$('.menu').css('marginTop', `-${$('.menu').height()}px`);
			}

		});

		$(".menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
			    top = $(id).offset().top;
			console.log(event.target.href)
			if(event.target.href.split('#')[1] != 'home'){
				$('.menu').css('marginTop', `0`);
			}
			$('body,html').animate({scrollTop: top-$('.menu').height()}, 1000);
			$('a').parent('li').removeClass('active');
			$(this).parent('li').addClass('active');
			if($(document).width() <= 768){
				$('.navbar-toggler').click();
			}
		});

		$('.menu').css('marginTop', `-${$('.menu').height()}px`);
	}
	// end  menu 
	
	//start scroll + menu
	{

		let arr = [], l = 0;
 
		 $('.menu a').each(function(index, el) {
			 arr[l++] = el.href.split('#')[1];
		});
		
		arr = arr.map(function(elem) {
			return $(`#${elem}`).height();
		});

		for(let i = 1; i < arr.length; i++){
			arr[i] += arr[i-1]; 
		}
		console.log(arr)
		// arr.forEach((element)=>{
		// 	element.addEventListener('mouseenter', function (e) {
		// 		$('.menu li').removeClass('active');
		// 		$(`.menu li a[href="#${element.id}"]`).parent().addClass('active');
		// 	})
		// })

	}
	//end scroll + menu


	//start portfolio
	$(function () {
		var filterList = {
			init: function () {
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
	  				selectors: {
	    			  target: '.portfolio',
	    			  filter: '.filter'	
		    		  },
		    		  load: {
		      		  filter: '.app, .card, .icon'  
		      		}     
				});								
			
			}

		};
		// Run the show!
		filterList.init();
	});
	//end portfolio


	// start inpuls button in courses
	{
		let newEmel;
		let y, x, w;

		$('.btn-courses').on('click dblclick', function(e) {
			$(this).css('backgroundColor', '#357ebd');
			let target = e.target;
			$(this).children('div').remove();
			newEmel = $('<div></div>').addClass('newElem');
			y = e.clientY - $(this).css('marginTop');
			x = e.clientX - $(this).offset().left;
			w = $(this).width();
			$(newEmel).css({
				width: `${w/4}px`,
				height: `${w/4}px`,
				top : `calc(${y - 200}px - ${w/8 }px)`,
				left: `calc(${x}px - ${w/8 }px)`, 
				animation:'anime .5s linear'
			});
			$(this).append(newEmel);
			setTimeout(()=>{$(this).children('div').remove();$(this).css('backgroundColor', 'transparent');},510);

		});
	}
	// end inpuls button in courses

	// start inpuls button in services
	{
		
		let newEmel;
		let y, x, w;

		$('.btn-order-services').on('click dblclick', function(e) {
			$(this).css({backgroundColor:'#357ebd',color:'white'});
			let target = e.target;
			$(this).children('div').remove();
			newEmel = $('<div></div>').addClass('newElem');
			y = e.clientY - $(this).css('marginTop');
			x = e.clientX - $(this).offset().left;
			w = $(this).width();
			$(newEmel).css({
				width: `${w/4}px`,
				height: `${w/4}px`,
				top : `calc(${y - 200}px - ${w/8 }px)`,
				left: `calc(${x}px - ${w/8 }px)`, 
				animation:'anime .5s linear'
			});
			$(this).append(newEmel);
			setTimeout(()=>{
				$(this).children('div').remove();
				$(this).css({
					backgroundColor:'transparent',
					color: '#357ebd'
				})},510);

		});
	}
	// end inpuls button in services

	// start services slider
	{
		if($(window).width() > 995){
			$('.serv_slider').children('.container-list').css({
				width: `${4*$('.list-group-item').width()}px`
			});
		}else if($(window).width() <= 995 && $(window).width() > 500){
			$('.serv_slider').children('.container-list').css({
				width: `${2*$('.list-group-item').width()}px`
			});
		}else{
			$('.serv_slider').children('.container-list').css({
					width: `${$('.list-group-item').width()}px`
			});
		} 
		{
			let start;
			let left = 0;
			if($(window).width() > 995){
				start = 4*$('.list-group-item').width();
			}else if($(window).width() <= 995 && $(window).width() > 500){
				start = 2*$('.list-group-item').width();
			}else{
				start = $('.list-group-item').width();
			}
			$('.serv_sl_next').click(function(event) {

				if($(window).width() > 995){
					start += $('.list-group-item').width();

					if(start > $('.list-group').width()){
						left = 0;
						start = 4*$('.list-group-item').width();
					}else{
						left += $('.list-group-item').width();
					}
					
					$('.list-group').css('left', `${-left}px`);
				}else if($(window).width() <= 995 && $(window).width() > 500){
					start += $('.list-group-item').width();

					if(start > $('.list-group').width()){
						left = 0;
						start = 2*$('.list-group-item').width();
					}else{
						left += $('.list-group-item').width();
					}
					
					$('.list-group').css('left', `${-left}px`);
				}else{
					start += $('.list-group-item').width();

					if(start > $('.list-group').width()){
						left = 0;
						start = $('.list-group-item').width();
					}else{
						left += $('.list-group-item').width();
					}
					
					$('.list-group').css('left', `${-left}px`);
				}
				
			});
			


			$('.serv_sl_prev').click(function(event) {
				if($(window).width() > 995){
					start += $('.list-group-item').width();
					if(left == 0){
						left = $('.list-group').width() - 4 *$('.list-group-item').width();
						start = $('.list-group').width();
					}else{
						left  -= $('.list-group-item').width();
					}
					$('.list-group').css('left', `${-left}px`);
				}else if($(window).width() <= 995 && $(window).width() > 500){
					start += $('.list-group-item').width();
					if(left == 0){
						left = $('.list-group').width() - 2 *$('.list-group-item').width();
						start = $('.list-group').width();
					}else{
						left  -= $('.list-group-item').width();
					}
					$('.list-group').css('left', `${-left}px`);
				}else{
					start += $('.list-group-item').width();
					if(left == 0){
						left = $('.list-group').width() - $('.list-group-item').width();
						start = $('.list-group').width();
					}else{
						left  -= $('.list-group-item').width();
					}
					$('.list-group').css('left', `${-left}px`);
				}
				
			});

			
		}
	}
	// end services slider

	// start customer slider
	{
		$('.cloud9-item').click(function (e) {
			$(this).addClass('active');
			$('.cloud9-item').not(this).removeClass('active')
		})
		setInterval(()=>{
			$('.cloud9-item').each(function( index ) {
			 	if($(this).css('zIndex') == 100){
					$(this).addClass('active');
					$('.cloud9-item').not(this).removeClass('active')
				}
			});
			
		}, 1)
		
	}
	// end customer slider

	// start partners slider
	{
		$('.customer-logos').slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 1000,
				arrows: false,
				dots: false,
					pauseOnHover: false,
					responsive: [{
					breakpoint: 768,
					settings: {
						slidesToShow: 4
					}
				}, {
					breakpoint: 520,
					settings: {
						slidesToShow: 3
					}
				}]
			});
	}
	// end partners slider

	// start range
	{
		$('.range-slider').jRange({
		    from: 10,
		    to: 1000,
		    step: 1,
		    scale: [10,1000],
		    format: '%s',
		    width: 900,
		    showLabels: true,
		    isRange : true,
		    theme: 'theme-blue'
		});
	}
	// end range

});
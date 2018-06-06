$(document).ready(function(){

	jQuery('.card-item__gallery-wrapper').slick({
		infinite: true,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	jQuery('.review__card-wrapper').slick({
		infinite: true,
		dots: true,
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$(".phoneMask").inputmask("+7 (999) 999-9999");

	$(".phoneMask").on({
		keydown: function(e) { if (e.which === 32 || e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40) return false; },
		change: function() { this.value = this.value.replace(/\s/g, ""); }
	});

	jQuery(function() {
		jQuery("a[href^='#']").bind('click', function() {
			var _href=jQuery(this).attr("href");
			jQuery("html, body").animate({
				scrollTop:jQuery(_href).offset().top+"px"},800);
			return false;
		});
	});

	jQuery('.popup__bgr').on('click',function(){
		jQuery('.popup').fadeOut(200);
		jQuery('.popup__bgr').fadeOut(200);
	});
	jQuery('.popup__close').on('click',function(){
		jQuery('.popup').fadeOut(200);
		jQuery('.popup__bgr').fadeOut(200);
	});

	jQuery('.card-item__buy-btn').on('click', function(e){
		e.preventDefault();
		jQuery('.popup').fadeIn(200);
		jQuery('.popup__bgr').fadeIn(200);

		var model = jQuery(this).parents('.card-item').find('.card-item__title').text();
		jQuery('#model').val(model);
	});
	jQuery('.burger__wrapper').on('click',function(){
		jQuery('.page-header__box--bottom').slideToggle(300);
	});

});

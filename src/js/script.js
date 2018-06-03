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
		slidesToScroll: 3
	});

	$("#phone, #phone_top, #phone_btm").inputmask("+7 (999) 999-9999");

	$("#phone, #phone_top, #phone_btm").on({
		keydown: function(e) { if (e.which === 32 || e.which === 37 || e.which === 39 || e.which === 38 || e.which === 40) return false; },
		change: function() { this.value = this.value.replace(/\s/g, ""); }
	});

});

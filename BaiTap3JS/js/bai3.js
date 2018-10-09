$(document).ready(function() {
	// var slideIndex =
	var position = $(".slide__item").parent().find('.slide__item-active').index();
	var item =$(".slide__item").parent().find('.slide__item-active');
	var slides = $(".slide__item");
	var icons= $(".slide__list__icon");
	console.log();
	$(".slide__next").click(function() {
		// showSlides(position);
		$(".slide__item").parent().find('.slide__item-active').next().addClass('slide__item-acitve');
		item.removeClass('slide__item-active')
	});

	function showSlides(n)
	{
		var i;
		if(n > slides.length) { position=0 } ;
		if(n <1) { position=slides.length };
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.opacity = "1";
		}
		slides[position-1].style.opacity = "0"; 
	}
});
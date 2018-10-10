
$(document).ready(function() {
	var count = 0;
	var maxImg= $(".js-slider__list li").length;
	var widthImg = ($(".js-slider__list img").width());
	var distance = 0;
	var icons = $(".js-slider__icons li img");
	var autoPlay = autoSlide();
	$(icons[count]).css("opacity","0.5");

	/** function prevent users click many times; */
	function preventMultiClick() {

		$(".js-slider__next").css("pointer-events", "none");
		$(".js-slider__prev").css("pointer-events", "none");
		setTimeout(function() {
			$(".slider__next").css("pointer-events", "auto");
			$(".slider__prev").css("pointer-events", "auto");
			$(".js-slider__icons li").css("pointer-events","auto");
		},600);
	}

	/** handle when user click on slider__next  */
	function nextClick(){
		count +=1;
		$(icons).css("opacity","1");
		if (count < maxImg) {
			distance += 648;
			$(".js-slider__list").animate({right: distance+"px"},600);
		} else {
			count = 0;
			distance = 0;
			$(".js-slider__list").animate({right: distance},600);
		}
		$(icons[count]).css("opacity","0.5");
		preventMultiClick();
	}

	/** handle when user click on slider__prev  */
	function prevClick() {
		$(icons).css("opacity","1");
		if(count >0) {
			count --;
			distance -= 648;
			$(".js-slider__list").animate({right: distance+"px"},600);
		} else {
			count = maxImg-1;
		    distance = widthImg * (maxImg-1);
			$(".js-slider__list").animate({right: distance+"px"},600);
		}
		$(icons[count]).css("opacity","0.5");
		preventMultiClick();
	}

	/** handle slider: slide moves automatically  */
	function autoSlide() {
		var time = setInterval(function() { nextClick(); },3000);
		return time;
	}

	/** event when user click right arrow */
	$(".js-slider__next").click(function() {
		clearInterval(autoPlay);
		nextClick();
		autoPlay = autoSlide();
	});

	/** event when user click left arrow */
	$(".js-slider__prev").click(function() {
		clearInterval(autoPlay);
		prevClick();
		autoPlay = autoSlide();
	});

	/** event when user click selector */
	$(".js-slider__icons li").click(function(){
		$(this).css("pointer-events","none");
		clearInterval(autoPlay);
		$(icons).css("opacity","1");
		$(this).find('img').css("opacity","0.5");
		count = $(this).index();
		distance = widthImg * count;
		$(".js-slider__list").animate({right: distance+"px"},600);
		autoPlay = autoSlide();
	});
});
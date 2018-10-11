$(document).ready(function() {
	var nextElementPosition;
	var currentElementPosition;
	var distance = 0;
	var widthImg = $(".slide__list__item li img").width();
	var arr__item__nav = $(".list__nav li");
	var maxItemNav = $(".list__nav li").length;
	var autoPlay=autoSlide();
	var item_nav = $(".list__nav li");
	item_nav.hide();
	// $(".list__nav li").hide();
	$(".list__nav li:first-child").show();
	$(".list__nav").css("pointer-events","auto");
	$(".list__nav li").css("pointer-events","none");

	function autoSlide() {
		var time = setInterval(function() {
			nextClick();
		},2000);
		return time;
	}

	function clickMode(obj, str) {
		obj.css("pointer-events", str);
	}

	function setClickAll(str) {
		$(".list__nav li").css("pointer-events",str);
		$(".slide__next").css("pointer-events", str);
		$(".slide__prev").css("pointer-events", str);
	}

	function moveSlide() {
		distance =  widthImg * nextElementPosition;
		$(".js-slide__list__item").animate({right: distance}, "600");
		$(arr__item__nav[currentElementPosition]).hide();
		$(arr__item__nav[nextElementPosition]).show();;
		$(".list__item-active").removeClass("list__item-active");
	}

	/** handle when user click slide__next */
	function nextClick() {
		currentElementPosition = $(".list__item-active").index();
		nextElementPosition = $(".list__item-active").next().index();
		var elementAfter = $(".list__item-active").next();
		if ($(".list__item-active").next().length == 0)
		{
			distance = 0;
			$(".js-slide__list__item").animate({right: distance}, 600);
			$(".list__item-active").removeClass("list__item-active");
			$(".js-slide__list__item li:first-child").addClass('list__item-active');
			$(arr__item__nav[currentElementPosition]).hide();
			$(arr__item__nav[0]).show();
			return;
		} 
		moveSlide();
		elementAfter.addClass("list__item-active");
	}

	/** handle when user click slide__prev */
	function prevClick() {
		currentElementPosition = $(".list__item-active").index();
		nextElementPosition = $(".list__item-active").prev().index();
		var elementBefore = $(".list__item-active").prev();
		if ($(".list__item-active").prev().length == 0)
		{
			distance = widthImg * 4;
			$(".js-slide__list__item").animate({right: distance}, 600);
			$(".list__item-active").removeClass("list__item-active");
			$(".js-slide__list__item li:last-child").addClass('list__item-active');
			$(arr__item__nav[currentElementPosition]).hide();
			$(arr__item__nav[maxItemNav-1]).show();
			return;
		} 
		moveSlide();
		elementBefore.addClass("list__item-active");
	}

	$(".list__nav").click(function() {
		clearInterval(autoPlay);
		setClickAll("none");
		$(".list__nav li").show();
		clickMode(item_nav, "auto");
	});

	$(".list__nav li").click(function(event) {
			event.stopPropagation();
			$(".list__nav li").hide();
			position = $(this).index();
			distance = widthImg * position
			$(this).show();
			$(".js-slide__list__item").animate({right: distance}, 600);
			$(".list__item-active").removeClass("list__item-active");
			$(this).addClass('list__item-active');
			clickMode(item_nav, "none");
			$(".list__nav li").css("pointer-events","none");
			autoPlay = autoSlide();
	});
	
	$(".slide__next").click( function(){
		clearInterval(autoPlay);
		nextClick();
		autoPlay = autoSlide();
	});

	$(".slide__prev").click( function(){
		clearInterval(autoPlay);
		prevClick();
		autoPlay = autoSlide();
	});

	$(".js-slide__list__item li img").on("swipeleft",function(){
		clearInterval(autoPlay);
		nextClick();
		autoPlay = autoSlide();
	});
	$(".js-slide__list__item li img").on("swiperight",function(){
		clearInterval(autoPlay);
		prevClick();
		autoPlay = autoSlide();
	});

});
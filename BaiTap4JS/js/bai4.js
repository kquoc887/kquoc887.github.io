var nextElementPosition;
var currentElementPosition;
var distance = 0;
var arr__item__nav = $(".list__nav li");
var maxItemNav = $(".list__nav li").length;
var item_nav = $(".list__nav li");


/** handle slider: slide moves automatically  */
function autoSlide() {
	var time = setInterval(function() {
		nextClick();
	},3000);
	return time;
}

/**
 * setClickAll: set up pointer-events for element slide__next, slide__prev
 * input: str is string for setting for pontiner-event of element slide__next, slide__prev.
 * output: pointer-events of element slide__next, slide__prev already set in str.
 */
 function setClickAll(str) {
 	$(".slide__next").css("pointer-events", str);
 	$(".slide__prev").css("pointer-events", str);
 }

/**
 * moveSlide: handle move silde when user click slide__next, slide__prev 
 * not at first position and last position of slider's element.
 */
 function moveSlide() {
 	distance =  100 * nextElementPosition;
 	$(".js-slide__list__item").animate({right: distance+"%"}, "600");
 	$(arr__item__nav[currentElementPosition]).hide();
 	$(arr__item__nav[nextElementPosition]).show();;
 	$(".list__item-active").removeClass("list__item-active");
 }

 /** handle when user click slide__next */
 function nextClick() {
 	setClickAll("none");
 	currentElementPosition = $(".list__item-active").index();
 	nextElementPosition = $(".list__item-active").next().index();
 	var elementAfter = $(".list__item-active").next();
 	if ($(".list__item-active").next().length == 0)
 	{
 		distance = 0;
 		$(".js-slide__list__item").animate({right: distance +"%"}, 600);
 		$(".list__item-active").removeClass("list__item-active");
 		$(".js-slide__list__item li:first-child").addClass('list__item-active');
 		$(arr__item__nav[currentElementPosition]).hide();
 		$(arr__item__nav[0]).show();
 	} else {
 		moveSlide();
 		elementAfter.addClass("list__item-active");

 	}
 	setTimeout(function() {
 		setClickAll("auto");
 	},600);
 }

 /** handle when user click slide__prev */
 function prevClick() {
 	setClickAll("none");
 	currentElementPosition = $(".list__item-active").index();
 	nextElementPosition = $(".list__item-active").prev().index();
 	var elementBefore = $(".list__item-active").prev();
 	if ($(".list__item-active").prev().length == 0)
 	{
 		distance = 100 * 4;
 		$(".js-slide__list__item").animate({right: distance+"%"}, 600);
 		$(".list__item-active").removeClass("list__item-active");
 		$(".js-slide__list__item li:last-child").addClass('list__item-active');
 		$(arr__item__nav[currentElementPosition]).hide();
 		$(arr__item__nav[maxItemNav-1]).show();
 	} else {
 		moveSlide();
 		elementBefore.addClass("list__item-active");
 	}
 	setTimeout(function() {
 		setClickAll("auto");
 	},600);
 }


 $(document).ready(function() {
 	item_nav.hide();
	$(".list__nav li:first-child").show();
	$(".list__nav").css("pointer-events","auto");
	$(".list__nav li").css("pointer-events","none");
	var autoPlay=autoSlide();
 	
 	/** show menu items nav when user click on list__nav */
 	$(".list__nav").click(function() {
 		clearInterval(autoPlay);
 		setClickAll("none");
 		$(".list__nav li").show();
 		$(".list__nav li").css("pointer-events","auto");
 	});

 	/** event click on menu_item_nav's element */
 	$(".list__nav li").click(function(event) {
 		event.stopPropagation();
 		$(".list__nav li").hide();
 		position = $(this).index();
 		distance = 100 * position;
 		$(this).show();
 		$(".js-slide__list__item").animate({right: distance + "%"}, 600);
 		$(".list__item-active").removeClass("list__item-active");
 		$(this).addClass('list__item-active');
 		$(".list__nav li").css("pointer-events","none");
 		setClickAll("auto");
 		autoPlay = autoSlide();
 	});

 	/** event when user click right arrow */
 	$(".slide__next").click( function(){
 		clearInterval(autoPlay);
 		nextClick();
 		autoPlay = autoSlide();
 	});

 	/** event when user click left arrow */
 	$(".slide__prev").click( function(){
 		clearInterval(autoPlay);
 		prevClick();
 		autoPlay = autoSlide();
 	});

 	/* event when user swipe screen to left*/
 	$(".js-slide__list__item li img").on("swipeleft",function(){
 		clearInterval(autoPlay);
 		nextClick();
 		autoPlay = autoSlide();
 	});

 	/* event when user swipe screen to right*/
 	$(".js-slide__list__item li img").on("swiperight",function(){
 		clearInterval(autoPlay);
 		prevClick();
 		autoPlay = autoSlide();
 	});

 });
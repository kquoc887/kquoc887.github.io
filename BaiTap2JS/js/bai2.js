$(document).ready(function() {
	var flag = 0;
	var afterPosition;
	var firstPosition;
	var list_img = $(".js-img");
	$(".menu li p").hide();
	$(".js-popup").hide();

	/** event click menu show menu */
	$(".js-img").click(function() {
		$(this).css("pointer-events","none");
		display__content($(this));
	});

	/** event click button about on element odd of menu show popup */
	$(".menu li:nth-child(odd) .js-about").click(function() {
		$(".js-popup__body img").attr("src","images/box_1_img_1.gif");
		$(".js-popup").show().animate({top:50}, 1500);
	});
	
	/** event click button about on element even of menu show popup */
	$(".menu li:nth-child(even) .js-about").click(function() {
		$(".js-popup__body img").attr("src","images/box_1_img_2.gif");
		$(".js-popup").show().animate({top:50}, 1500);
	});

	/** event prevent click menu when popup show */
	$(".js-about").click(function() {
		$(".js-img").css("pointer-events", "none");
	})
	
	/** event click button close, close popup */
	$(".js-popup__header__close").click(function() {
		$(".js-popup").hide().animate({top:-500},"fast");
		$(".js-img").css("pointer-events", "auto");
	});
	
	
	function display__content(element) {
		afterPosition = $(element).parent().index()
		if (flag == 0) {
			firstPosition = afterPosition;
			var src = $(element).attr("src");
			var src = src.replace(".jpg","_hover.jpg");
			prevent_multi_click($(element));
			$(element).attr("src",src);
			$(element).parent().find('p').show();
			$(element).parent().find('p').animate({height: "200px", margin: "10px 5px"},800);
			flag = 1;
		} else {
			if (firstPosition == afterPosition) {
				var src = $(element).attr("src");
				var src = src.replace("_hover.jpg",".jpg");
				$(element).attr("src",src);
				prevent_multi_click($(element));
				$(element).parent().find("p").animate({height: "0px", margin: "0px"}, 1000);
				flag = 0;
			} else {
				var oldSrc = $(list_img[firstPosition]).attr("src");
				var oldSrc = oldSrc.replace("_hover.jpg",".jpg");
				$(list_img[firstPosition]).attr("src", oldSrc);
				$(list_img[firstPosition]).parent().find("p").hide().animate({height: "0"}, "slow");
				var startSrc = $(list_img[afterPosition]).attr("src");
				var startSrc = startSrc.replace(".jpg","_hover.jpg");
				$(list_img[afterPosition]).attr("src",startSrc);
				$(list_img[afterPosition]).parent().find("p").show().show().animate({height: "200px"}, "slow");
				firstPosition = afterPosition;
				prevent_multi_click($(element));
			}
		}
	}

	function prevent_multi_click(element) {
		setTimeout(function(){
				$(element).css("pointer-events","auto")
			},1000);
	}


});
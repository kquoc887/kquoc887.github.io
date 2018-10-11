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
	
	/** handle show content of menu's element
		input: menu's element.
	 */	
	function display__content(element) {
		afterPosition = $(element).parent().index();
		if (flag == 0) {
			handleClickMenuFirst($(element));
		} else {
			handleClickMenuSecond($(element));
			
		}
	}

    /** handle when user press menu first 
    	input: menu's element
    	output: show content of menu's element
    */
   
	function handleClickMenuFirst(element) {
		firstPosition = afterPosition;
		var src = $(element).attr("src");
		var src = src.replace(".jpg","_hover.jpg");
		prevent_multi_click($(element));
		$(element).attr("src",src);
		$(element).parent().find('p').show();
		$(element).parent().find('p').animate({height: "200px"},800);
		flag = 1;
	}

	 /** handle when user press menu second 
    	input: menu's element
    	output: show content of menu's element
    */
	function handleClickMenuSecond(element)
	{
		// handle when user click at old menu position
		if (firstPosition == afterPosition) {
				var src = $(element).attr("src"); 
				var src = src.replace("_hover.jpg",".jpg");
				$(element).attr("src",src);
				prevent_multi_click($(element));
				$(element).parent().find("p").animate({height: "0px"}, 1000);
				flag = 0;
			} else {
				// handle when user click at new menu position
				var oldSrc = $(list_img[firstPosition]).attr("src"); //src of element clicked
				var oldSrc = oldSrc.replace("_hover.jpg",".jpg"); 
				$(list_img[firstPosition]).attr("src", oldSrc);//change image at old menu position
				$(list_img[firstPosition]).parent().find("p").hide().animate({height: "0"}, "slow"); // hide content of menu clicked
				var startSrc = $(list_img[afterPosition]).attr("src"); // src of element after
				var startSrc = startSrc.replace(".jpg","_hover.jpg");
				$(list_img[afterPosition]).attr("src",startSrc);//change image at new menu position
				$(list_img[afterPosition]).parent().find("p").show().show().animate({height: "200px"}, "slow"); //show content of element after
				firstPosition = afterPosition;
				prevent_multi_click($(element));
			}
	}

	/** prevent user click many times 
		input: menu's element
	*/
	function prevent_multi_click(element) {
		setTimeout(function(){
				$(element).css("pointer-events","auto")
			},1000);
	}


});
$(document).ready(function() {
	var flag = 0;
	var afterPosition;
	var firstPosition;
	var list_img = $(".menu li .js-img");
	console.log(list_img);
	$(".menu li p").hide();
	$(".menu li .js-img").click(function() {
		change_image($(this));
	});
	function change_image(element) {
		afterPosition = $(element).parent().index()
		if (flag == 0) {
			firstPosition = afterPosition;
			var src = $(element).attr("src");
			var src = src.replace(".jpg","_hover.jpg");
			$(element).attr("src",src);
			$(element).parent().find('p').show();
			flag = 1;
			console.log(flag);
		} else {
			if (firstPosition == afterPosition) {
				var src = $(element).attr("src");
				var src = src.replace("_hover.jpg",".jpg");
				console.log(src);
				$(element).attr("src",src);
				$(".menu li p").hide();
				flag = 0;
			} else {
				console.log(flag);
				var oldSrc = $(list_img[firstPosition]).attr("src");
				var oldSrc = oldSrc.replace("_hover.jpg",".jpg");
				$(list_img[firstPosition]).attr("src", oldSrc);
				$(list_img[firstPosition]).parent().find("p").hide();
				var startSrc = $(list_img[afterPosition]).attr("src");
				var startSrc = startSrc.replace(".jpg","_hover.jpg");
				$(list_img[afterPosition]).attr("src",startSrc);
				$(list_img[afterPosition]).parent().find("p").show();
				firstPosition = afterPosition;
			}
		}
	}
});
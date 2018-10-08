$(document).ready(function() {
	var flag = 0;
	var position;
	var startPosition;
	var list_img = $(".menu li .js-img");
	console.log(list_img);
	$(".menu li p").hide();
	$(".menu li .js-img").click(function() {
		change_image($(this));
	});
	function change_image(element) {
		startPosition = $(element).parent().index()
		if (flag == 0) {
			position = startPosition;
			var src = $(element).attr("src");
			var src = src.replace(".jpg","_hover.jpg");
			$(element).attr("src",src);
			$(element).parent().find('p').show();
			flag = 1;
			console.log(flag);
		} else {
			if (position == startPosition) {
				var src = $(element).attr("src");
				var src = src.replace("_hover.jpg",".jpg");
				console.log(src);
				$(element).attr("src",src);
				$(".menu li p").hide();
				flag = 0;
				console.log(flag);
			} else {
				console.log(flag);
				var oldSrc = $(list_img[position]).attr("src");
				var oldSrc = oldSrc.replace("_hover.jpg",".jpg");
				$(list_img[position]).attr("src", oldSrc);
				$(list_img[position]).parent().find("p").hide();
				var startSrc = $(list_img[startPosition]).attr("src");
				var startSrc = startSrc.replace(".jpg","_hover.jpg");
				$(list_img[startPosition]).attr("src",startSrc);
				$(list_img[startPosition]).parent().find("p").show();
				console.log(flag);
			}
		}
	}
});
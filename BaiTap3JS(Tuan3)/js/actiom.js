$(document).ready(function() {
	var cloud = function () {
		this.position = 0;
		this.transfer = 0;
		this.cloudEffect = function(e) {
			if (this.position < e.pageX){
				this.transfer += 0.8;
				$(".layer").css({
					"display": "block",
					"left": this.transfer
				});
			} else {
				this.transfer -= 0.8;
				$(".layer").css({
					"display": "block",
					"left": this.transfer
				});
			}
		this.position = e.pageX;
		}
	};
	var myCloud = new cloud();
	$(".container").mousemove(function(event) {
		myCloud.cloudEffect(event);
	});
});
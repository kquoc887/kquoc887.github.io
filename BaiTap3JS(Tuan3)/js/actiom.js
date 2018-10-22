$(document).ready(function() {
	var arrLayer = $(".layer img");
	var cloud = function (left,layer) {
		this.position = 0;
		this.transfer = 0;
		this.cloudEffect = function(e) {
			if (this.position < e.pageX){
				this.transfer += left;
				$(layer).css({
					"display": "block",
					"left": this.transfer
				});
			} else {
				this.transfer -= left;
				$(layer).css({
					"display": "block",
					"left": this.transfer
				});
			}
		this.position = e.pageX;
		}
	};
	var myCloudLayer1 = new cloud(0.6,arrLayer[0]);
	var myCloudLayer2 = new cloud(0.4,arrLayer[1]);
	var myCloudLayer3 = new cloud(0.3,arrLayer[2]);
	$(".container").mousemove(function(event) {
		myCloudLayer1.cloudEffect(event);
		myCloudLayer2.cloudEffect(event);
		myCloudLayer3.cloudEffect(event);
	});
});
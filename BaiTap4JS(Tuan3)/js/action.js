$(document).ready(function() {
 	var listLeaves = $(".js-leave");

 	/** function effectLeavesFall: create effect falling for each leaf in array "listLeaves" */
	function effectLeavesFall() {
		for (var i = 0; i < listLeaves.length; i++) {
	 		var leavesFall = $(listLeaves[i]);
	 		var valObject = randomAttributeValues();
	 		leavesFall.css({left: valObject.left});
	 		TweenMax.staggerTo(leavesFall, valObject.duration, {
	 			x: valObject.distanceX,
	 			y: 800,
	 			rotation: valObject.rotation,
	 			transformOrigin: "left top",
	 			rotationX: valObject.roatationX,
	 			rotationY: valObject.rotationY,
	 			delay: valObject.timedelay,
	 			onComplete: repeatEffect,
	 			onCompleteParams: [leavesFall]
	 		}, 0.3);
	 	}
	}

	/** 
	 * function repeatEffect: repeat effect of  a leaves in array "listLeaves".
	 * input: param leaves is a leaves in array "listLeaves". 
	 */

	function repeatEffect(leaves) {
		TweenMax.set(leaves, {y:-100});
		var valueOfAttribute = randomAttributeValues();
		TweenMax.staggerTo(leaves, valueOfAttribute.duration, {
			x:valueOfAttribute.distanceX,
			y:800,
			roatation: valueOfAttribute.rotation,
			transformOrigin: "left top",
			roatationX: valueOfAttribute.roatationX,
			rotationY: valueOfAttribute.rotationY,
			onComplete: repeatEffect,
			onCompleteParams: [leaves]
		});
	}

	/**
	 * function randomAttributeValues: set value of attribute for leaf in array "listLeaves"
	 */
	function randomAttributeValues() {
		var attributes = {
			roatation: Math.floor(Math.random() *360),
			roatationX: Math.floor(Math.random() * 360),
			rotationY: Math.floor(Math.random() * 360),
			distanceX:  Math.floor(Math.random() * 100),
			timedelay: Math.random() * 10,
			left: Math.floor(Math.random()  * $(".container").width()),
			duration:3
		};
		return attributes;
	}
	
	effectLeavesFall();
});
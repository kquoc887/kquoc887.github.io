$(document).ready(function() {
function effect() {
	var indexLeave = Math.floor((Math.random()*5)+1);
	var positionFall = Math.floor(Math.random()*10 + 100);
	if (indexLeave >1 && indexLeave < 6) {
		 TweenMax.fromTo($("leave" + indexLeave),3,
			{
				// x: positionFall,
				top:-500
			},
			{
				top:500,
				skewX: 350,
				skewY: 50,
				repeat:-1
			}
		)
	}
	// console.log($("leave"+indexLeave));
}

setInterval(function() {
	effect();
},600)

// console.log($(arrLeave[random()]));
});
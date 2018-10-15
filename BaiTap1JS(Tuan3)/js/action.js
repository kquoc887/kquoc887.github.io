$(document).ready(function() {

	var myCanvas = $("#myCanvas").get(0);
	var ctx = myCanvas.getContext("2d");
	var xscale = 1;
	var yscale = 0.6;
	var radius = 200;
	var xcenter = myCanvas.width/2;
	var ycenter = myCanvas.height;
	var move = 10;
	console.log(xcenter + " " + ycenter);

	function drawPieSlice1(ctx, centerX, centerY, radius, startAngle, endAngle, i) {
 
 		ctx.save();
		ctx.scale(1,0.6);
		ctx.beginPath();
		ctx.moveTo(centerX,centerY-i);
		ctx.arc(centerX, centerY - i, radius, startAngle, endAngle);
		ctx.restore();
		if ( i == 99 ) {
			ctx.fillStyle = "#99CCFF";
		}		
		else
		{
			ctx.fillStyle = "#66CCFF";
		}
		ctx.fill();		
	}
	function drawPieSlice2(ctx, centerX, centerY, radius, startAngle, endAngle, i) {
 
 		ctx.save();
		ctx.scale(1,0.6);
		ctx.beginPath();
		ctx.moveTo(centerX-move,centerY+10);
		ctx.arc(centerX, centerY, radius, startAngle, endAngle);
		ctx.restore();
		if ( i == 99 ) {
			ctx.fillStyle = "#FF0000";
		}		
		else
		{
			ctx.fillStyle = "#880000";
		}
		ctx.fill();
	}
	// drawPieSlice(_ctx, 150,150,150, Math.PI/2, Math.PI/2 + Math.PI/4);
	for (var i = 0; i < 100; i++) {
		drawPieSlice1(ctx, xcenter, ycenter,200,0, 2* Math.PI * 0.8, i);

	}
	// for (var i = 0; i < 100; i++) {
	// 	drawPieSlice2(ctx, xcenter+10, ycenter-10,200,(2* Math.PI * 0.8),0, i);

	// }
	// while ( i < 2000)
	// {
	// 	if (i == 1999)
	// 	{
	// 		drawPieSlice(_ctx, 150,150,150, Math.PI/2, Math.PI/2 + Math.PI/4, 'blue');
	// 	}
	// 	else {
	// 		drawPieSlice(_ctx, 150,150,150, Math.PI/2, Math.PI/2 + Math.PI/4, '#ff0000');
	// 	}
	// 	i++;
	// }
	// for (i < 100 ;i++) {
	// 	drawPieSlice(_ctx, 150,150,150, Math.PI/2, Math.PI/2 + Math.PI/4, '#ff0000');
	// }

	
	// var myVinyls = {

	// 	"Classical music": 0.8,

	// 	"Alternative rock": 0.2

	// };

	// var Piechart = function(options){

	// 	this.options = options;

	// 	this.canvas = options.canvas;

	// 	this.ctx = this.canvas.getContext("2d");

	// 	this.colors = options.colors;



	// 	this.draw = function(){

	// 		var total_value = 0;

	// 		var color_index = 0;

	// 		for (var categ in this.options.data){

	// 			var val = this.options.data[categ];

	// 			total_value += val;

	// 		}



	// 		var start_angle = 0;

	// 		for (categ in this.options.data){

	// 			val = this.options.data[categ];

	// 			var slice_angle = 2 * Math.PI * val / total_value;



	// 			drawPieSlice(

	// 				this.ctx,

	// 				this.canvas.width/2,

	// 				this.canvas.height/2,

	// 				Math.min(this.canvas.width/2,this.canvas.height/2),

	// 				start_angle,

	// 				start_angle+slice_angle,

	// 				this.colors[color_index%this.colors.length]

	// 				);



	// 			start_angle += slice_angle;

	// 			color_index++;

	// 		}



	// 	}

	// }

	// var myPiechart = new Piechart(

	// {

	// 	canvas:myCanvas,

	// 	data:myVinyls,

	// 	colors:["#fde23e","#f16e23", "#57d9ff","#937e88"]

	// }

	// );

	// myPiechart.draw();

});
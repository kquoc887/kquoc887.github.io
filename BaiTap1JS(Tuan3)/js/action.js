$(document).ready(function() {
	var canvas= $("#myCanvas").get(0);
	var move 	= 10;
	console.log(canvas.height);
	var PieChart = function () {
		this.ctx = canvas.getContext("2d");
		this.x = canvas.width/2;
		this.y = canvas.height;
		this.radius = 200;
		this.xscale = 1;
		this.yscale =0.4;
		this.drawSlicePieSuccess = function(ctx, centerX, centerY, radius, startAngle, endAngle, i) {
			// console.log(this.xscale, this.yscale);
			ctx.save();
			ctx.scale(this.xscale,this.yscale);
			ctx.beginPath();
			ctx.moveTo(centerX,centerY-i);
			ctx.arc(centerX, centerY - i, radius, startAngle, endAngle);
			ctx.restore();
			if ( i == 99 ) {
				ctx.fillStyle = color[1];
			} else {
				ctx.fillStyle = color[0];
			}
			ctx.fill();	
		}
		this.drawSlicePieFail = function(ctx, centerX, centerY, radius, startAngle, endAngle,i) {
			ctx.save();
			ctx.scale(this.xscale, this.yscale);
			ctx.beginPath();
			if (data[0] > data [1])
			{
				ctx.moveTo((centerX +move),(centerY-move-i ));
				ctx.arc((centerX +move ), (centerY-move- i), radius, startAngle, endAngle);
			} else if (data[0]== 0.5) {
				ctx.moveTo((centerX),(centerY - move -i ));
				ctx.arc((centerX), (centerY - move - i), radius, startAngle, endAngle);
			} else {
				ctx.moveTo((centerX -move),(centerY-move-i ));
				ctx.arc((centerX  - move ), (centerY-move- i), radius, startAngle, endAngle);
			}
			ctx.restore();
			if ( i == 99 ) {
				ctx.fillStyle = color[3];
			} else {
				ctx.fillStyle = color[2];
			}
			ctx.fill();
		};
		this.draw = function() {
			for (var i = 0; i < 100; i++) {
				this.drawSlicePieSuccess(this.ctx, this.x, this.y, this.radius, 0, 2* Math.PI * data[0], i);
				this.drawSlicePieFail(this.ctx, this.x, this.y, this.radius, 2*Math.PI*data[0], 0, i);
			}
		};
		this.drawTitle = function() {
			this.ctx.font = "20px Arial";
			this.ctx.fillStyle="#5bc1e3";
			this.ctx.fillText("Biểu đồ tổng quan khung năng lực",300,350);
		};



		this.drawLine = function() {
			this.ctx.beginPath();
			let labelX = this.x +(this.radius * Math.cos(Math.PI* data[0]));
			let labelY =this.y+ (this.radius * Math.sin(Math.PI * data[0]));
			let middleX = (this.x + labelX)/2;
			let middleY = ((this.y * + labelY)/2) * this.yscale;
			this.ctx.moveTo(100,100);
			this.ctx.lineTo(300,100);
			this.ctx.lineTo(middleX,middleY);
			this.ctx.stroke();
			// console.log(labelX + "" + labelY);
		}
	};
	var myPieChart= new PieChart();
	myPieChart.draw();
	myPieChart.drawTitle();
	myPieChart.drawLine();

});
	


$(document).ready(function() {
	var canvas= $("#myCanvas").get(0);
	var move 	= 5;
	var PieChart = function () {
		this.ctx = canvas.getContext("2d");
		this.x = canvas.width/2;
		this.y = 400;
		this.radius = 200;
		this.xscale = 1;
		this.yscale =0.4;

		this.drawSlicePieSuccess = function(ctx, centerX, centerY, radius, startAngle, endAngle, i) {
			// console.log(this.xscale, this.yscale);
			ctx.save();
			ctx.scale(this.xscale,this.yscale);
			ctx.beginPath();
			ctx.moveTo(centerX,centerY+i);
			ctx.arc(centerX, centerY +i, radius, startAngle, endAngle);
			ctx.restore();
			if ( i == 1) {
				ctx.fillStyle = colors.colorSuccessTop;
			} else {
				ctx.fillStyle = colors.colorSuccessBot;
			}
			ctx.fill();	
		}

		this.drawSlicePieFail = function(ctx, centerX, centerY, radius, startAngle, endAngle,i) {
			ctx.save();
			ctx.scale(this.xscale, this.yscale);
			ctx.beginPath();
			if (data.success > data.fail)
			{
				ctx.moveTo((centerX +move),(centerY-move+i));
				ctx.arc((centerX +move), (centerY-move+ i), radius, startAngle, endAngle);
			} else if (data.success == data.fail) {
				ctx.moveTo((centerX),(centerY - move +i ));
				ctx.arc((centerX), (centerY -move + i), radius, startAngle, endAngle);
			} else {
				ctx.moveTo((centerX -move ),(centerY-move+i ));
				ctx.arc((centerX  -move ), (centerY-move+ i), radius, startAngle, endAngle);
			}
			ctx.restore();
			if ( i == 1 ) {
				ctx.fillStyle = colors.colorFailTop;
			} else {
				ctx.fillStyle = colors.colorFailBot;
			}
			ctx.fill();
		};

		this.drawTitle = function() {
			this.ctx.font = "20px Arial";
			this.ctx.fillStyle="#5bc1e3";
			this.ctx.fillText("Biểu đồ tổng quan khung năng lực",300,350);
		};

		this.drawText = function(data,content,x,y) {
			this.ctx.font = "20px Arial";
			this.ctx.fillStyle ="gray";
			this.ctx.fillText(data * 100 + "%" + content,x,y);
		};

		this.drawLineSuccess = function() {
			this.ctx.beginPath();
			this.ctx.strokeStyle = colors.colorLineSuccess;
			let labelX = this.x +(this.radius * Math.cos(Math.PI* data.success));
			let labelY =this.y+ (this.radius * Math.sin(Math.PI * data.success));
			let middleX = (this.x + labelX)/2;
			let middleY = ((this.y  + labelY)/2) * this.yscale;
			this.ctx.moveTo(100,100);
			this.ctx.lineTo(300,100);
			this.drawText(data.success,texts.textSucess,90,80);
			this.ctx.lineTo(middleX,middleY);
			this.ctx.stroke();
			// console.log(labelX + "" + labelY);
		};

		this.drawLineFail = function() {
			this.ctx.beginPath();
			let labelX = this.x +(this.radius * Math.cos(2*Math.PI-(Math.PI* data.fail)));
			let labelY =this.y+ (this.radius * Math.sin(2*Math.PI -(Math.PI* data.fail)));
			let middleX = (this.x + labelX)/2;
			let middleY = ((this.y  + labelY)/2) * this.yscale;
			this.ctx.moveTo(700,70);
			this.ctx.lineTo(600,70);
			this.drawText(data.fail,texts.textFail,600,50);
			this.ctx.lineTo(middleX,middleY);
			this.ctx.strokeStyle = colors.colorLineFail;
			this.ctx.stroke();
		};

		this.draw = function() {
			if((data.success + data.fail) > 1 || (data.success + data.fail) < 1) {
				alert("Total of success and fail to be greater than 1 and not smaller than 1");
				return;
			}
			this.drawTitle();
			for (var i = 100; i >0; i--) {
				if(data.success ==1) {
					this.drawSlicePieSuccess(this.ctx, this.x, this.y, this.radius, 0, 2* Math.PI * data.success, i);
					this.drawLineSuccess();
				} else if (data.success == 0) {
					this.drawSlicePieFail(this.ctx, this.x, this.y, this.radius,2*Math.PI- 2*Math.PI*data.success, 0, i);
					this.drawLineFail();
				} else {
					this.drawSlicePieSuccess(this.ctx, this.x, this.y, this.radius, 0, 2* Math.PI * data.success, i);
					this.drawSlicePieFail(this.ctx, this.x, this.y, this.radius, 2*Math.PI*data.success, 0, i);
					this.drawLineSuccess();
					this.drawLineFail();
				}
			}
		};
	};
	var myPieChart= new PieChart();
	myPieChart.draw();
});
	


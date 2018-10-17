$(document).ready(function() {
	var canvas = $("#myCanvas").get(0);
	var ctx = canvas.getContext("2d");
	// console.log(valueOfColumn.length);
	var columnChart = function() {
		this.xStart =250;

		/** draw title of column chart */
		this.drawTitle = function() {
			ctx.font = fonts.fontTitle;
			ctx.fillText(texts.textTitle,220,50);
		};

		/** draw note of chart */
		this.drawComment = function() {
			let arr_text = texts.textLevelofCatpion.split(" ");
			let distance =60;
			ctx.save();
			ctx.translate(this.xStart+valueOfColumn.length*100,90);
			ctx.fillStyle=colors.colorRect;
			ctx.fillRect(10,10,45,25);
			for (var i = 0; i < arr_text.length; i++) {
				ctx.fillStyle = colors.colorTextBlack;
				ctx.fillText(arr_text[i],10,distance)
				distance+=30;
			}
			ctx.restore();
		};

		/** draw name of chart */
		this.drawNameChart = function() {
			ctx.fillStyle = colors.colorTextGray;
			ctx.fillText(texts.textName,450,570);
		};

		/** draw letters display on canvas  */
		this.drawText = function() {
			ctx.save();
			ctx.translate(100,500);
			ctx.font = fonts.fontNodeTextLevel; 
			ctx.rotate(-Math.PI/2);
			ctx.fillStyle = colors.colorTextGray;
			ctx.fillText(texts.textLevelofCatpion,0,30);
			ctx.restore();
			this.drawTitle();
			this.drawComment();
			this.drawNameChart();
		};

		/** draw line for level split */
		this.drawLine = function() {
			// let xStart = 250;
			let yStart = 500;
			let xEnd =750;
			let yEnd = 500;
			let distance = 100;
			for (var i = 0; i < level.length; i++) {
				if (i == 0) {
					ctx.strokeStyle = colors.colorDrawLineFirst;
				} else {
					ctx.strokeStyle = colors.colorDrawLine;
				}
				ctx.beginPath();
				ctx.moveTo(this.xStart,yStart);
				ctx.lineTo(this.xStart+valueOfColumn.length*100,yStart);
				ctx.stroke();
				ctx.fillText(level[i],this.xStart-30,yStart+10)
				yStart -= distance;
			}
		};

		/** draw column of column chart */
		this.drawColumn = function() {
			let yStart = 500;
			for (var i = 0; i < valueOfColumn.length; i++) {
				ctx.fillStyle = colors.colorRect;
				ctx.fillRect(this.xStart,yStart-(valueOfColumn[i].value*100),75,valueOfColumn[i].value*100);
				ctx.fillStyle = colors.colorTextBlack;
				ctx.fillText(valueOfColumn[i].name,this.xStart+25,yStart+30);
				this.xStart += 100;
			}
		};
		
		/** draw column chart */
		this.drawChart = function() {
			for (var i = 0; i < valueOfColumn.length; i++) {
				if(valueOfColumn[i].value <0) {
					alert("data is not smaller than 0");
					return 0;
				}
			}
			if(valueOfColumn.length > 5) {
				alert("tổng cột không lớn hơn 5");
				return;
			}
			this.drawText();
			this.drawLine();
			this.drawColumn();
		}
	};
	var myColumnChart = new columnChart();
	myColumnChart.drawChart();
});
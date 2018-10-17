$(document).ready(function() {
	var d = new Date();
	var year=0;
	var month=0;
	/** create list year on calender */
	function create_list_year() {
		var k=0;
		for (i=d.getFullYear()-50; i<=d.getFullYear()+50 ; i++) {
			document.forms["calender"].year.options[k] = new Option(i,i);
			k++;
		}
		year = document.forms["calender"].year.value = 2018;
	}
	/** create list month on calender */
	function craete_list_month() {
		var arrMonth =["January", "February", "March", "April", "May", 
		"June", "July", "August", "September", "October", "November", "December"];
		for (var i = 0; i < arrMonth.length; i++) {
			document.forms["calender"].month.options[i]= new Option(arrMonth[i],i+1);
		}
		month = document.forms["calender"].month.value = 9;
	}

	/**
	 * [days: day computation 
	 * input:
	 * year: user select year.
	 * month: user select month.
	 * output:
	 * return: date of month in year.
	 */
	function days(year, month) {
		if (month == 4 || month == 6 || month == 9 || month == 11) {
			return 30;
		} else if (month == 2) {
			if ( year % 400 == 0 || (year % 100 !=0 && year % 4 ==0) ) {
				return 29;
			} else {
				return 28;
			}
		} else {
			return 31;
		}
	}

	/** delete calender old for update calender new */
	function delete_calender_old() {
		if (table2.rows.length > 0 ) {
			for (var i = table2.rows.length-1; i >= 1; i--) {
				table2.deleteRow(i);
			}
		}
	}

	/**
	 * [print_days: print day inside cell of table2
	 * input:
	 * day is day first of month
	 */
	function print_days(day) {
		// var dd = new Date();
		// Tinh vị trí khi in
		var start =2;
		var position = day.getDay();
		var startDay = 1;
		var songay = days(day.getFullYear(),day.getMonth()+1)
		for ( var i = 0; i <songay ;i++) {
			position ++;
			if(i+1 == d.getDate() && year == d.getFullYear() && month == d.getMonth()) {
				$("#table2 tr:nth-child("+start+") td:nth-child("+position+")").css("background-color","#00ace6");
				$("#table2 tr:nth-child("+start+") td:nth-child("+position+")").append(i+1);
			} else {
				$("#table2 tr:nth-child("+start+") td:nth-child("+position+")").append(i+1);
			}
			
			if (position > 6) {
				position=0;
				start += 1;
			}
		}
		
	}

	/** create rows and cells in table2 */
	function print_calender(year, month) {
		var day = new Date(year, month -1, 1);
		delete_calender_old();
		for (var i = 7; i <= 49; i+=7) {
			var table_temp = document.getElementById('table2');
			var row = table_temp.insertRow(i/7); // add new row in table_temp
			for (var j = 0; j < 7; j++) {
				var cell = row.insertCell(j);
				cell.width = 50;
				cell.height= 25
			}
		}
		print_days(day);
	}

	/** create calender */
	function init() {
		create_list_year();
		craete_list_month();
		print_calender(year,month);
		var arr_tr = $("#table2 tr");

	}
	init();

	$("#month").change(function() {
		month = $(this).val();
		print_calender(year,month);
	
	});

	$("#year").change(function() {
		year = $(this).val();
		print_calender(year,month);
	});

	$(".btn-prev-year-js").click(function() {
		if(year > d.getFullYear()-50) {
			year =$("#year").val()-1;
			$("#year").val(year);
		 	print_calender(year,month);
		}
	});

	$(".btn-next-year-js").click(function() {
		if (year < d.getFullYear()+50) {
			year =parseInt($("#year").val())+1	;
		// console.log(year+1);
		 	$("#year").val(year);
			 print_calender(year,month);
		}
	});

	$(".btn-prev-month-js").click(function() {
		if (month > 1) {
			month=$("#month").val()-1
			$("#month").val(month);
			print_calender(year,month);
		}

	});
	$(".btn-next-month-js").click(function() {
		if( month <12) {
			month=parseInt($("#month").val())+1;
			$("#month").val(month);
			print_calender(year,month);
		}

	});

	$(".birthday").click(function() {
		$("#calender").css("display","block");
	});

	$(document).on("click","#table2 tr td",function(){
		var dateSeleted= $(this).text();
		$(".birthday").val(dateSeleted+"/"+month+"/"+year );
		$("#calender").css("display","none");
	});
});
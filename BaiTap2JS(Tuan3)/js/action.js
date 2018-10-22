$(document).ready(function() {
	var d = new Date();
	var year=0;
	var month=0;
	var username = document.forms["frmInfo"]["UserName"];
	var passwork = document.forms["frmInfo"]["Passwork"];
	var email = document.forms["frmInfo"]["Email"];
	var birthday = document.forms["frmInfo"]["birthday"];
	var messageUser = document.getElementById("messageUser");
	var messagePass = document.getElementById("messagePass");
	var messageEmail = document.getElementById("messageEmail");
	var messageBirthday = document.getElementById("messageBirthday");
	/** create list year on calender */
	function createListYear() {
		var k=0;
		for (i=d.getFullYear()-50; i<=d.getFullYear()+50 ; i++) {
			document.forms["frmInfo"].year.options[k] = new Option(i,i);
			k++;
		}
		year = document.forms["frmInfo"].year.value = d.getFullYear();
	}

	/** create list month on calender */
	function createListMonth() {
		var arrMonth =["January", "February", "March", "April", "May", 
		"June", "July", "August", "September", "October", "November", "December"];
		for (var i = 0; i < arrMonth.length; i++) {
			document.forms["frmInfo"].month.options[i]= new Option(arrMonth[i],i+1);
		}
		month = document.forms["frmInfo"].month.value = d.getMonth()+1;
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
	function deleteCalenderOld() {
		if (calender__content.rows.length > 0 ) {
			for (var i = calender__content.rows.length-1; i >= 1; i--) {
				calender__content.deleteRow(i);
			}
		}
	}

	/**
	 * printDays: print day inside cell of table2
	 * input: 
	 * day is day first of month
	 * output:
	 * print day inside cell of table2
	 */
	function printDays(day) {
		var start =2;
		var position = day.getDay();
		var startDay = 1;
		var songay = days(day.getFullYear(),day.getMonth()+1)
		$("#calender__content tr:nth-child("+start+") td:nth-child(-n+"+position+")").css("background-color","#d7dbdd");
		for ( var i = 0; i <songay ;i++) {
			position ++;
			if (i+1 == d.getDate() && year == d.getFullYear() && month == d.getMonth() + 1) {
				$("#calender__content tr:nth-child("+start+") td:nth-child("+position+")").css("background-color","#00ace6");
				$("#calender__content tr:nth-child("+start+") td:nth-child("+position+")").append(i+1);
			} else {
				$("#calender__content tr:nth-child("+start+") td:nth-child("+position+")").append(i+1);
			}
			if (position > 6) {
				position=0;
				start += 1;
			}
		}
		position++;
		$("#calender__content tr:nth-child("+start+") td:nth-child(n+"+position+")").css("background-color","#d7dbdd");
		// postion = 0;
		for (var j = start+1; j<= calender__content.rows.length; j++) {
			position=0;
			$("#calender__content tr:nth-child("+j+") td:nth-child(n+"+position+")").css("background-color","#d7dbdd");
		}

		
	}

	/** 
	 * print_calender
	 * @param  {[type]} year  [description]
	 * @param  {[type]} month [description]
	 * @return {[type]}       [description]
	 */
	function printCalender(year, month) {
		var day = new Date(year, month -1, 1);
		deleteCalenderOld();
		for (var i = 7; i <= 49; i+=7) {
			var table_temp = document.getElementById('calender__content');
			var row = table_temp.insertRow(i/7); // add new row in table_temp
			for (var j = 0; j < 7; j++) {
				var cell = row.insertCell(j);
				cell.width = 50;
				cell.height= 25
			}
		}
		printDays(day);
	}

	/** create calender  */
	function init() {
		createListYear();
		createListMonth();
		printCalender(year,month);
	}
	init();

	/** event when user change month on select month */
	$("#month").change(function() {
		month = $(this).val();
		printCalender(year,month);
	
	});

	/** event when user change year on select year */
	$("#year").change(function() {
		year = $(this).val();
		printCalender(year,month);
	});

	$(".btn-prev-year-js").click(function() {
		if(year > d.getFullYear()-50) {
			year =$("#year").val()-1;
			$("#year").val(year);
		 	printCalender(year,month);
		}
	});

	$(".btn-next-year-js").click(function() {
		if (year < d.getFullYear()+50) {
			year =parseInt($("#year").val())+1	;
		 	$("#year").val(year);
			 printCalender(year,month);
		}
	});

	$(".btn-prev-month-js").click(function() {
		if (month > 1) {
			month=$("#month").val()-1
			$("#month").val(month);
			printCalender(year,month);
		}

	});
	$(".btn-next-month-js").click(function() {
		if (month <12) {
			month=parseInt($("#month").val())+1;
			$("#month").val(month);
			printCalender(year,month);
		}

	});

	/** event when user click on "input birthday" for show calender */
	$(".js-frm__birthday").click(function() {
		$(".js-calender").css("display","block");
	});

	/** event when user select day in calender */
	$(document).on("click","#calender__content tr td",function(){
		var dateSeleted= $(this).text();
		messageBirthday.innerHTML =  "";
		$(".js-frm__birthday").val(year+"/"+month+"/"+dateSeleted );
		$(".js-calender").css("display","none");
	});

	/** check validate of username, passwork, email
     * input : object can be username,passwork, email
     * outpit: report the object of errors.
	 */
	function checkValidateObject(object) {
		object.style.border = "1px solid #b4eecc";
		if ($(object).parents("tr").find("td:nth-child(3)").length !=0) {
			$(object).parents("tr").find("td:nth-child(3)").remove();
		}
		if (object.value.length == 0 ) {
				$(object).parents("tr").append("<td  style='color:red'>Please Enter "+object.name+"</td>");
		} else {
			if (object.value.length == 0 ) {
				$(object).parents("tr").append("<td  style='color:red'>Please Enter "+object.name+"</td>");
			} else {
				if (object.name == "Email") {
					var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if(re.test(object.value) == false) {
						$(object).parents("tr").append("<td  style='color:red'>"+object.name+" wrong format</td>");
					} 
				} else if (object.value.length < 8) {
					$(object).parents("tr").append("<td  style='color:red'>"+object.name+" length min 8 letter</td>");
				}
			}

		}
	}

	/**
	 * handle when user enter data at "input username" 
	 */

	$(".frm__username").blur(function(){
		checkValidateObject(username);
	});

	 /**
	  * handle when user enter data at "input password"
	  */
	 $(".frm__passwork").blur(function() {
	 	checkValidateObject(passwork);
	 });

	/** 
	 * handle when user enter data at "input email"
	 */
	$(".frm__email").blur(function() {
		checkValidateObject(email);
	});

	/** event when user click button submit
	 * If user leave empty  error report at cells input
	*/
	$(".js-btn-submit").click(function() {
		console.log(Date.parse(birthday.value));
		// return false;
		checkValidateObject(username);
		checkValidateObject(passwork);
		checkValidateObject(email);
		if (birthday.value == "") {
			messageBirthday.innerText = "Please Enter Birthday";
		} else if (Date.parse(birthday.value) > new Date()) {
			messageBirthday.innerText = "Birthday is not smaller than date current";
		}
		for (var i = 0 ; i< 3 ; i++ ) {
			if($(".frm").find('tr').eq(i).children('td').eq(2).length !=0) {
				return false;
			}
		}
	});
});
$(document).ready(function() {
	var d = new Date();
	console.log(d.getMonth());

	function create_list_year() {
		var d = new Date();
		var k=0;
		for (i=d.getFullYear()-50; i<d.getFullYear()+50 ; i++) {
			document.forms["calender"].year.options[k] = new Option(i,i);
			k++;
		}
	}

	function craete_list_month()
	{
		var arrMonth =["January", "February", "March", "April", "May", 
		"June", "July", "August", "September", "October", "November", "December"];
		for (var i = 0; i < arrMonth.length; i++) {
			document.forms["calender"].month.options[i]= new Option(arrMonth[i],i+1);
		}
	}

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

	function print_calender(year, month) {
		var day = new Date(year, month - 1, 1);
		delete_calender_old();
	}
	function init() {
		create_list_year();
		craete_list_month();
	}
	init();

});
$(document).ready(function() {
	var arrMonth =["January", "February", "March", "April", "May", 
	"June", "July", "August", "September", "October", "November", "December"];
	for (var i = 0; i < arrMonth.length; i++) {
		var value= i+1;
		$(".month").append("<option value='"+value+"'>"+arrMonth[i]+"</option>");
	}
	for (var i = 1950; i < 2050; i++) {
		$(".year").append("<option value='"+i+"'>"+i+"</option>");
	}
});
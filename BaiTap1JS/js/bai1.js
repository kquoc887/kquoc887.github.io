$(document).ready(function(){
	$("#name_product").attr("maxlength","30");
	$("#btn_add-js").click(function(){
		var product_name = $("#name_product").val().trim();
		if (product_name == "") {
			alert("Please enter product name");
			return;
		}
		$(".list_product-js").append("<li>"+ product_name+
		 	 "<input class='btn_remove btn_remove-js' type='button' value='X'>"+"</li>");
		$("#name_product").val("").focus();

	});
	$(document).on("click", ".btn_remove", function(){
		$(this).parent().remove();
	});
		
});
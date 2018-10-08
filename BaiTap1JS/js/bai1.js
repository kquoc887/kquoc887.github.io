$(document).ready(function(){
	$("#name_product").attr("maxlength","30");
	$("#btn_add-js").click(function(){
		var product_name = $("#name_product").val().trim();
		var list_product = $(".list_product-js li");
		if (product_name == "") {
			alert("Please enter product name");
			return;
		}
		for (var i = 0; i < list_product.length; i++) {
			if (product_name.toUpperCase() == list_product[i].innerText.toUpperCase()) {
				alert('Product name is existed');
				return;
			}
		}
		$(".list_product-js").append("<li>"+ product_name+
		 	 "<input class='btn_remove btn_remove-js' type='button' value='X'>"+"</li>");
		$("#name_product").val("").focus();
	});
	
	$(document).on("click", ".btn_remove", function(){
		$(this).parent().remove();
	});
		
});
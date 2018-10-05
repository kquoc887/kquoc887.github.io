$(document).ready(function(){
	$("#btn_add").click(function(){
		var product_name = $("#name_product").val();
		if (product_name == "") {
			alert("Chưa nhập tên sản phẩm");
			return;
		}
		$(".list_product").append("<li>"+ $("#name_product").val()+
		 	 "<input class='btn_remove' type='button' value='X'>"+"</li>");
	});
	$(document).on("click", ".btn_remove", function(){
		$(this).parent().remove();
	});
		
});
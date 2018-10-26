package facadepattern;

public class Sony implements Mobile {
	
	@Override
	public void showMobile() {
		System.out.println("Điện thoại Sony");
	}
	
	@Override
	public void orderMobile() {
		System.out.println("Bạn đã đặt mua một điện thoại Sony");
		
	}
	
	@Override
	public void pay() {
		System.out.print("Bạn đã thanh toán để mua điện thoại Sony");
		
	}
}

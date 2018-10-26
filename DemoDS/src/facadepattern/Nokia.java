package facadepattern;

public class Nokia implements Mobile {
	
	@Override
	public void showMobile() {
		System.out.println("Điện thoại Nokia");
	}
	
	@Override
	public void orderMobile() {
		System.out.println("Bạn đã đặt mua một điện thoại Nokia");
		
	}
	
	@Override
	public void pay() {
		System.out.print("Bạn đã thanh toán để mua điện thoại nokia");
		
	}
}

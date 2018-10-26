package facadepattern;

public class SamSung implements Mobile {
	
	@Override
	public void showMobile() {
		System.out.println("Điện thoại SamSung");
	}
	
	@Override
	public void orderMobile() {
		System.out.println("Bạn đã đặt mua một điện thoại SamSung");
		
	}
	
	@Override
	public void pay() {
		System.out.print("Bạn đã thanh toán để mua điện thoại SamSung");
		
	}
}

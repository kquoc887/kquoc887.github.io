package adapterpattern;

public class Adapter implements PhoneTarget {
	CheckNumberAdaptee CheckNumberAdaptee = new CheckNumberAdaptee();
	@Override
	public void checkPhoneNumber(String input) {
		if (!CheckNumberAdaptee.checkNumber(input)) {
			System.out.println("Chuỗi bạn nhập vào không phải là số");
			return;
		}
		
		if (input.length() >11 || input.length() <10) {
			System.out.println("Số điện thoại nhập vào không được nhỏ hơn 10 số hoặc không được lớn hơn 11 sô");
			return;
		}
		System.out.println("Số điện thoại: " + input);
		
	}
}

package adapterpattern;

public class Client {

	public static void main(String[] args) {
		PhoneTarget phoneTarget = new Adapter();
		String input1 = "abc1";
		String input2 = "1234";
		String input3 = "0906944659";
		phoneTarget.checkPhoneNumber(input1);
		phoneTarget.checkPhoneNumber(input2);
		phoneTarget.checkPhoneNumber(input3);

	}

}

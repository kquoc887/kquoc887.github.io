package singletonpattern;

public class singletonDemo {

	public static void main(String[] args) {
		Printer printer1 = Printer.getInstace();
		Printer printer2 = Printer.getInstace();
		if (printer1 == printer2) {
			System.out.println("Bằng nhau");
		}

	}

}

package singletonpattern;

public class Printer {
	private static Printer instance;
	private Printer () {}
	public static Printer getInstace() {
		if (instance == null) {
			instance = new Printer();
		}
		return instance;
	}
}

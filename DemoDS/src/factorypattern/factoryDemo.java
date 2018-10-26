package factorypattern;

public class factoryDemo {
	public static void main(String[] args) {
		CarFactory carFactory = new CarFactory();
		carFactory.viewCar("Honda");
		carFactory.viewCar("Yamaha");
	}
}

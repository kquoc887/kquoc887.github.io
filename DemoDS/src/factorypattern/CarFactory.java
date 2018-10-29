package factorypattern;

public class CarFactory {
	public static void viewCar(String carType) {
		Car car;
		if (carType.equalsIgnoreCase("Honda")) {
			car = new Honda();
			car.view();
		} else if (carType.equalsIgnoreCase("Yamaha")) {
			car = new Yamaha();
			car.view();
		}
	}
}

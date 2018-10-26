package abstractfactorypattern;

public class FactoryProducer {
	public static AbstractFactory getFactory(String factoryType) {
		if (factoryType.equalsIgnoreCase("SHAPE")) {
			return new ShapFactory();
		} else if (factoryType.equalsIgnoreCase("COLOR")) {
			return new ColorFactory();
		}
		return null;
	}
}

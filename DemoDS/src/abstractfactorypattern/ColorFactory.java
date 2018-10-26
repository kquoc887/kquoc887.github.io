package abstractfactorypattern;

public class ColorFactory extends AbstractFactory {
	@Override
	Color getColor(String colorType) {
		if (colorType == null) {
			return null;
		}
		if (colorType.equalsIgnoreCase("Red")) {
			return new Red();
		} else if (colorType.equalsIgnoreCase("Blue")) {
			return new Blue();
		}
		return null;
	}
	
	@Override
	Shape getShape(String shape) {
		return null;
	}
}

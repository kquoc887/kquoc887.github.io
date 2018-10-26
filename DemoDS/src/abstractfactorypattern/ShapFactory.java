package abstractfactorypattern;

public class ShapFactory extends AbstractFactory {
	@Override
	Shape getShape(String shapeType) {
		if (shapeType == null) {
			return null;
		}
		
		if (shapeType.equalsIgnoreCase("Circle")) {
			return new Circle();
		} else if (shapeType.equalsIgnoreCase("Rectangle")) {
			return new Rectangle();
		}
		return null;
	}
	
	@Override
	Color getColor(String color) {
		return null;
	}
}

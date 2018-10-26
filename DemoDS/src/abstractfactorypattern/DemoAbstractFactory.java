package abstractfactorypattern;

public class DemoAbstractFactory {

	public static void main(String[] args) {
		AbstractFactory shapeFactory = FactoryProducer.getFactory("SHAPE");
		Shape shape1 = shapeFactory.getShape("Circle");
		shape1.draw();
		Shape shape2 = shapeFactory.getShape("Rectangle");
		shape2.draw();
		shapeFactory = FactoryProducer.getFactory("Color");
		Color color1 = shapeFactory.getColor("Red");
		color1.fill();
		Color color2 = shapeFactory.getColor("Blue");
		color2.fill();
	}

}

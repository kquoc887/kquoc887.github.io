package builderpattern;

public class DemoBuilderPattern {

	public static void main(String[] args) {
		NutritionFacts cocaCola = new NutritionFacts.Builder(240,8).setCalories(100).build();
		System.out.println("ServingSize: " + cocaCola.getServingSize());
	}

}

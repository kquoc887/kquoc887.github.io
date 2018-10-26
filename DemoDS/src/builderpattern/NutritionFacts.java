package builderpattern;

public class NutritionFacts {
	private final int servingSize;
	private final int servings;
	private final int calories;
	private final int fats;
	private final int sodium;
	private final int cacbohydrat;
	
	public int getServingSize() {
		return servingSize;
	}
	public int getServings() {
		return servings;
	}
	
	public int getCalories() {
		return calories;
	}
	
	public int getFats() {
		return fats;
	}
	
	public int getSodium() {
		return sodium;
	}
	
	public int getCacbohydrat() {
		return cacbohydrat;
	}
	
	public static class Builder {
		private final int servingSize;
		private final int servings;
		private int calories = 0 ;
		private int fats = 0;
		private int sodium = 0;
		private int cacbohydrat = 0;
		
		public Builder(int servingSize, int servings) {
			this.servingSize = servingSize;
			this.servings = servings;
		}
		
		public Builder setCalories(int calories) {
			this.calories = calories;
			return this;
		}
		
		public Builder setFats(int fats) {
			this.fats = fats;
			return this;
		}
		
		public Builder setSodium(int sodium) {
			this.sodium = sodium;
			return this;
		}
		
		public Builder setCacbohydrat(int cacbohydrat) {
			this.cacbohydrat = cacbohydrat;
			return this;
		}
		public NutritionFacts build() {
			return new NutritionFacts(this);
		}
	}
	
	private NutritionFacts(Builder builder) {
		this.servingSize = builder.servingSize;
		this.servings = builder.servings;
		this.calories = builder.calories;
		this.fats = builder.fats;
		this.sodium = builder.sodium;
		this.cacbohydrat = builder.cacbohydrat;
		
	}
}

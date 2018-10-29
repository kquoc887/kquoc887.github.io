package strategypattern;

public class StudentStrategy implements MarketingStategy {
	@Override
	public void sale() {
		System.out.println("Chiến lược dành cho học sinh");
	}

}

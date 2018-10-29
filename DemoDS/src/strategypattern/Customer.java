package strategypattern;

public class Customer {
	private MarketingStategy strategy;
	public Customer(MarketingStategy strategy) {
		this.strategy = strategy;
	}
	public void sale() {
		strategy.sale();
	}
	
	public static void main(String[] args) {
		Customer c1 = new Customer(new EmloyeeStrategy());
		c1.sale();
		Customer c2 = new Customer(new StudentStrategy());
		c2.sale();
	}
}

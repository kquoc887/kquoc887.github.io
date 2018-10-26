package adapterpattern;

public class CheckNumberAdaptee {
	public boolean checkNumber(String input) {
		String reg = "[0-9]+";
		return input.matches(reg);
	}
}

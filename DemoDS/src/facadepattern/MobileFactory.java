package facadepattern;

public class MobileFactory {
	public static Mobile moblieSale(String mobileType) {
//		MobileStore mobileStore;
		if (mobileType.contentEquals("Nokia")) {
			return new Nokia();
		} else if (mobileType.equalsIgnoreCase("SamSung")) {
			 return new SamSung();
		} else if (mobileType.equalsIgnoreCase("Sony")) {
			return new Sony();
		}
		return null;
		
	}
}

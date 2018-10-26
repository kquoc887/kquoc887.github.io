package facadepattern;

public class MobileStoreKeeper {
    private Mobile nokia;
    private Mobile samsung;
    private Mobile sony;

    public MobileStoreKeeper() {
    	nokia = new Nokia();
    	samsung = new SamSung();
    	sony = new Sony();
    }

    public void nokiaSale() {
    	nokia.showMobile();
    	nokia.orderMobile();
    	nokia.pay();
    }

    public void samsungSale() {
    	samsung.showMobile();
    	samsung.orderMobile();
    	samsung.pay();
    }

    public void sonySale() {
    	sony.showMobile();
    	sony.orderMobile();
    	sony.pay();
    }
}

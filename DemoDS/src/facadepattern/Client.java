package facadepattern;
import java.util.Scanner;
public class Client {
	public static void main(String[] args) {
		int choise;
		Scanner sc = new Scanner(System.in);
		 MobileStoreKeeper storeKp = new MobileStoreKeeper();
		do {
			  System.out.println("Quý khách muốn xem điện thoại nào từ cửa hàng chúng tôi?");
              System.out.println("1. Nokia");
              System.out.println("2. SamSung");
              System.out.println("3. Sony");
              System.out.println("4. Exit");
              System.out.println("Mời quý khách nhập lựa chọn");
              choise = sc.nextInt();
              switch(choise) {
              case 1: 
            	  storeKp.nokiaSale();
            	  break;
              case 2: 
            	  storeKp.samsungSale();
            	  break;
              case 3: 
            	  storeKp.sonySale();
            	  break;
              default: 
                  System.out.println("Mời quý khách xem thêm các mẫu trong cửa hàng.");
          }
		} while (choise != 4);
	}
	
}

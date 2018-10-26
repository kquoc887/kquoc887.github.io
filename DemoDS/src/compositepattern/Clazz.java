package compositepattern;
import java.util.ArrayList;
import java.util.List;
public class Clazz implements Education {
	ArrayList<Student> listStudent = new ArrayList<Student>();
	
	public void addStudent(Student student) {
		if (listStudent.contains(student) == false) {
			listStudent.add(student);
		}
	}
	
	public void getStudent() {
		for (int  i = 0; i < listStudent.size(); i++) {
			System.out.println("ID: " + listStudent.get(i).getId() + ", Name: " + listStudent.get(i).getName() + ", Math= "
							+ listStudent.get(i).getMath() + "Physic= " + listStudent.get(i).getPhysic());
		}
	}
	@Override
	public float calculatePoint() {
		float sum = 0;
		for (Student s:listStudent) {
			sum += s.calculatePoint();
		}
		return sum;
	}
}

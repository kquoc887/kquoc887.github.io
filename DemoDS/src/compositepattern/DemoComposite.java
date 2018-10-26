package compositepattern;

public class DemoComposite {

	public static void main(String[] args) {
		Student student1 = new Student(1,"A", 7.2f,8.2f);
		Student student2 = new Student(2, "B", 6.5f,6.3f);
		Clazz cl = new Clazz();
		cl.addStudent(student1);
		cl.addStudent(student2);
		cl.getStudent();
		System.out.println("Điểm trung bình của lớp:" + cl.calculatePoint());
	}

}

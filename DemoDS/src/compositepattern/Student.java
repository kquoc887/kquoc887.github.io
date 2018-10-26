package compositepattern;

public class Student implements Education {
	private int id;
	private String name;
	private float math;
	private float physic;
	
	public Student(int id, String name, float math, float physic) {
		this.id = id;
		this.name = name;
		this.math = math;
		this.physic = physic;
	}
	
	@Override
	public float calculatePoint() {
		return (math + physic) /2;
	}
	
	public int getId() {
		return id;
	}
	
	public String getName() {
		return name;
	}
	
	public float getMath() {
		return math;
	}
	
	public float getPhysic() {
		return physic;
	}
}

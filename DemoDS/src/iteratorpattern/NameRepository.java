package iteratorpattern;

public class NameRepository implements Container {
	public String names[] = {"Hưng","Đạt","Khánh"};
	@Override
	public Iterator getIterator() {
		// TODO Auto-generated method stub
		return new NameIterator();
	}
	
	private class NameIterator implements Iterator {
		public int index;
		public int getIndex() {
			return index;
		}
		@Override
		public boolean hasNext() {
			if (index < names.length) {
				return true;
			}
			return false;
		}
		@Override
		public Object next() {
			// TODO Auto-generated method stub
			if (this.hasNext()) {
				System.out.println(index);
				return names[index++];
			}
			return null;
		}
	}
}

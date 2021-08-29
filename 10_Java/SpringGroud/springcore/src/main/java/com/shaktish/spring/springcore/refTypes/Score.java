package com.shaktish.spring.springcore.refTypes;

public class Score {
	private double physics;
	private double tamil;
	private double maths;

	public double getMaths() {
		return maths;
	}

	public void setMaths(double maths) {
		this.maths = maths;
	}

	public double getPhysics() {
		return physics;
	}

	public void setPhysics(double physics) {
		this.physics = physics;
	}

	public double getTamil() {
		return tamil;
	}

	public void setTamil(double tamil) {
		this.tamil = tamil;
	}

	@Override
	public String toString() {
		return "Student Score [physics=" + physics + ", tamil=" + tamil + ", maths=" + maths + "]";
	}
	
	

}

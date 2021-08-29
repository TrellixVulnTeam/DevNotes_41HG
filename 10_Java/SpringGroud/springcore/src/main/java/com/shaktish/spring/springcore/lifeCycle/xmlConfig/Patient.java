package com.shaktish.spring.springcore.lifeCycle.xmlConfig;

public class Patient {
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {		
		this.id = id;
	}
	
	public void init () {
		System.out.println("Initialized...");
	}
	
	public void exit () {
		System.out.println("Destroyed...");
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + "]";
	}
}

package com.shaktish.spring.springcore.lifeCycle.annotations;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Patient {
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {	
		System.out.println("Setters method");
		this.id = id;
	}
	
	@PostConstruct
	public void init () {
		System.out.println("Initialized...");
	}
	
	@PreDestroy
	public void exit () {
		System.out.println("Destroyed...");
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + "]";
	}
	
	
}

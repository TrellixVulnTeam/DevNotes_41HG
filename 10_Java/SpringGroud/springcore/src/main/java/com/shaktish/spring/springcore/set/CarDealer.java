package com.shaktish.spring.springcore.set;

import java.util.List;

public class CarDealer {
	private String name;
	private List<String> models;

	public List<String> getModels() {
		return models;
	}

	public void setModels(List<String> models) {
		this.models = models;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}

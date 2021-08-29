package com.shaktish.spring.springcore.practice;

public class IceCreamPack {	
	private String flavour;
	private String type;
	
	IceCreamPack (String flavour, String type) {
		this.flavour = flavour;
		this.type = type;
	}
	
	public String getFlavour() {
		return flavour;
	}
	public void setFlavour(String flavour) {
		this.flavour = flavour;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	@Override
	public String toString() {
		return "IceCreamPack [flavour=" + flavour + ", type=" + type + "]";
	}		
}

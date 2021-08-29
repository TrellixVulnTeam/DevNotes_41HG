package com.shaktish.spring.springcore.practice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Aavin {
	@Value("2")
	private int milk;

	public int getMilk() {
		return milk;
	}

	public void setMilk(int milk) {
		this.milk = milk;
	}

	@Override
	public String toString() {
		return "Aavin [milk=" + milk + "]";
	}
}

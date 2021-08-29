package com.shaktish.spring.springcore.set;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/set/setConfig.xml");
		CarDealer carDealer = (CarDealer) context.getBean("carDealer");
		System.out.println(carDealer.getName());
		System.out.println(carDealer.getModels());
	}

}

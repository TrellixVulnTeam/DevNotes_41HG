package com.shaktish.spring.springcore.map;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/map/mapConfig.xml");
		Customer customer = (Customer) context.getBean("customer");
		System.out.println(customer.getId());
		System.out.println(customer.getProducts());
	}

}

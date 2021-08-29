package com.shaktish.spring.springcore.practice;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestMilkStoreAnnotations {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/practice/ConfigMilkStoreAnnotations.xml");
		Aavin aavin = (Aavin) context.getBean("aavin");
		System.out.println(aavin);

	}

}

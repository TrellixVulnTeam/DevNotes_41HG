package com.shaktish.spring.springcore.practice;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestConstructorConfig {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/practice/config.xml");
		Bakery bakery = (Bakery) context.getBean("bakery");
		System.out.println(bakery);

	}

}

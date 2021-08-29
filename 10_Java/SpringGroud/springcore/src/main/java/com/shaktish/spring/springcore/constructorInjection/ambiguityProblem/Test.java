package com.shaktish.spring.springcore.constructorInjection.ambiguityProblem;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/constructorInjection/ambiguityProblem/config.xml");
		Addition addition = (Addition) context.getBean("addition");
		System.out.println(addition);
	}

}

package com.shaktish.spring.springcore.refTypes;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/refTypes/studentConfig.xml");
		Student student = (Student) context.getBean("student");
		System.out.println(student.getScore());

	}

}

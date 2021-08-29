package com.shaktish.spring.springcore.constructorInjection;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/constructorInjection/ShoppingCartConfig.xml");
		ShoppingCart cart = (ShoppingCart) context.getBean("shoppingCart");
		System.out.println(cart.getItem());
	}
}

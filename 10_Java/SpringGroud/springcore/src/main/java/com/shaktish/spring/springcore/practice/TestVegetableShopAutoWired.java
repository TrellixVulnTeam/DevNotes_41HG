package com.shaktish.spring.springcore.practice;

import org.springframework.context.support.ClassPathXmlApplicationContext;


public class TestVegetableShopAutoWired {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/practice/VegetableShopAutoWiredConfig.xml");
		VegetableShopAutoWired vegetableShop = (VegetableShopAutoWired ) context.getBean("vegetableShop");
		System.out.println(vegetableShop);
	}

}

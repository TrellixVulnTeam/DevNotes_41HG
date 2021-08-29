package com.shaktish.spring.springorm.product.test;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.shaktish.spring.springorm.product.dao.ProductDao;
import com.shaktish.spring.springorm.product.entity.Product;

public class TestSpringOrm {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springorm/product/test/ConfigSpringOrm.xml");
		ProductDao productDao = (ProductDao) context.getBean("ProductDaoImpl");
		Product product = new Product();
		product.setId(3);
		product.setName("Realme3");
		product.setPrice(180);
		product.setDesc("Realme Rocks 3");
		int result = productDao.create(product);
//		productDao.update(product);
//		productDao.delete(product);
//		Product result = productDao.find(2);
//		System.out.println(result);
//		List<Product> productList = productDao.findAll();
		System.out.println(result);
		
	}

}

package com.shaktish.spring.springorm.product.dao.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.shaktish.spring.springorm.product.dao.ProductDao;
import com.shaktish.spring.springorm.product.entity.Product;

@Component("ProductDaoImpl")
public class ProductDaoImpl implements ProductDao {
	@Autowired
	HibernateTemplate hibernateTemplate;

	@Override
	@Transactional
	public int create(Product product) {
		hibernateTemplate.setCheckWriteOperations(false);
		Integer result = (Integer) hibernateTemplate.save(product);
		return result;
	}

	@Override
	@Transactional
	public void update(Product product) {
		hibernateTemplate.setCheckWriteOperations(false);
		hibernateTemplate.update(product);	
	}

	@Override
	@Transactional
	public void delete(Product product) {
		hibernateTemplate.setCheckWriteOperations(false);
		hibernateTemplate.delete(product);			
	}
	
	@Override
	@Transactional
	public Product find(int id) {
		// TODO Auto-generated method stub
		hibernateTemplate.setCheckWriteOperations(false);
		Product product = hibernateTemplate.get(Product.class, id);
		return product;
	}

	@Override
	@Transactional
	public List<Product> findAll() {
		hibernateTemplate.setCheckWriteOperations(false);
		List<Product> products = hibernateTemplate.loadAll(Product.class);
		return products;
	}

}

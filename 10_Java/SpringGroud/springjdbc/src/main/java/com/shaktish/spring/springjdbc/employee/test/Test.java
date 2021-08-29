package com.shaktish.spring.springjdbc.employee.test;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import com.shaktish.spring.springjdbc.employee.dao.EmployeeDao;
import com.shaktish.spring.springjdbc.employee.dto.Employee;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub		
		ApplicationContext  context = new ClassPathXmlApplicationContext("com/shaktish/spring/springjdbc/employee/test/config.xml");
		EmployeeDao dao = (EmployeeDao) context.getBean("emplyoeeDao");
		Employee employee = new Employee();
		employee.setId(2);
		employee.setFirstName("prakash");
		employee.setLastName("kumar");
		
//		int res = dao.create(employee);
//		int res = dao.update(employee);
//		int res = dao.delete(employee);
		List<Employee> res = dao.read();
		System.out.println("get employee data " + res);
	}

}

package com.shaktish.spring.springjdbc.employee.dao;

import java.util.List;

import com.shaktish.spring.springjdbc.employee.dto.Employee;

public interface EmployeeDao {
	int create(Employee employee);

	int update(Employee employee);

	int delete(int id);

	Employee read(int id);

	List<Employee> read();
}

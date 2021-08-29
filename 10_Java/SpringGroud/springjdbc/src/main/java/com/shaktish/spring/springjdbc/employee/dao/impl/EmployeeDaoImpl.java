package com.shaktish.spring.springjdbc.employee.dao.impl;

import com.shaktish.spring.springjdbc.employee.dao.EmployeeDao;
import com.shaktish.spring.springjdbc.employee.dao.rowMapper.EmployeeRowMapper;
import com.shaktish.spring.springjdbc.employee.dto.Employee;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component("emplyoeeDao")
public class EmployeeDaoImpl implements EmployeeDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Override
	public int create(Employee employee) {
		// TODO Auto-generated method stub
		String sql = "insert into employee values(?,?,?)";
		int res = jdbcTemplate.update(sql, employee.getId(), employee.getFirstName(), employee.getLastName());
		return res;
	}

	@Override
	public int update(Employee employee) {
		// TODO Auto-generated method stub
		String sql = "update employee set firstName=?, lastName=? where id=?";
		int res = jdbcTemplate.update(sql, employee.getFirstName(), employee.getLastName(), employee.getId());
		return res;
	}

	@Override
	public int delete(int id) {
		// TODO Auto-generated method stub
		String sql = "delete from employee where id=?";
		int res = jdbcTemplate.update(sql, id);
		return res;
	}

	@Override
	public Employee read(int id) {
		String sql = "select * from employee where id=?";
		EmployeeRowMapper rowMapper = new EmployeeRowMapper();
		Employee employee = jdbcTemplate.queryForObject(sql, rowMapper, id);
		return employee;
	}

	@Override
	public List<Employee> read() {
		// TODO Auto-generated method stub
		String sql = "select * from employee";
		EmployeeRowMapper rowMapper = new EmployeeRowMapper();
		List<Employee> res = jdbcTemplate.query(sql, rowMapper);
		return res;
	}

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

}

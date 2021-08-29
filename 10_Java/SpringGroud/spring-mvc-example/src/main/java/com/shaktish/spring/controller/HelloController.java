package com.shaktish.spring.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.shaktish.spring.dto.Employee;
import com.shaktish.spring.dto.User;

@Controller
public class HelloController {
	@RequestMapping("/")
	public ModelAndView homePage() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index");
		modelAndView.addObject("name", "shaktish");
		return modelAndView;
	}
	
	@RequestMapping("/hello")
	public ModelAndView hello() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("hello");
		modelAndView.addObject("name", "shaktish");
		return modelAndView;
	}

	@RequestMapping("/employee")
	public ModelAndView employee() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("employee");
		Employee employee = new Employee();
		employee.setId(1);
		employee.setName("Shaktish");
		employee.setLocation("chennai");

		modelAndView.addObject("employeeObj", employee);
		return modelAndView;
	}

	@RequestMapping("/getEmployees")
	public ModelAndView getEmployees() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("getEmployees");
		Employee employee1 = new Employee();
		employee1.setId(1);
		employee1.setName("Shaktish");
		employee1.setLocation("Chennai");

		Employee employee2 = new Employee();
		employee2.setId(2);
		employee2.setName("Proh");
		employee2.setLocation("Vellore");

		Employee employee3 = new Employee();
		employee3.setId(3);
		employee3.setName("Annz");
		employee3.setLocation("Karaikal");
		
		ArrayList<Employee> employees = new ArrayList<Employee>();
		employees.add(employee1);
		employees.add(employee2);
		employees.add(employee3);
		
		modelAndView.addObject("employees", employees);
		return modelAndView;
	}
	
//	@RequestMapping("/register") 
//	public ModelAndView registerPage () {
//		ModelAndView modelAndView = new ModelAndView();
//		modelAndView.setViewName("register");
//		return modelAndView;	
//	}
	
	@RequestMapping("/register") 
	public String registerPage () {		
		return "register";	
	}
	
//	@RequestMapping(value="/registerUser", method =RequestMethod.POST) 
//	public ModelAndView registerUser (@ModelAttribute("user") User user) {
//		System.out.println(user);
//		ModelAndView modelAndView = new ModelAndView();
//		modelAndView.setViewName("registerSuccess");
//		modelAndView.addObject("user", user);
//		return modelAndView;	
//	}
	
	@RequestMapping(value="/registerUser", method =RequestMethod.POST) 
	public String registerUser (@ModelAttribute("user") User user, ModelMap model) {		
		model.addAttribute(user);
		return "registerSuccess";	
	}
}

















<%@page import="com.shaktish.spring.dto.Employee, java.util.List"%>

<html>
<body>
	<h2>Employee page</h2>

	<%
		List<Employee> employees = (List<Employee>) request.getAttribute("employees");	
		for (Employee e : employees) {
			out.println(e.getId());
			out.println(e.getName());
		} 
	%>
</body>
</html>

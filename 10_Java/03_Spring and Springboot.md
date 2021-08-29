- [Spring Core Concepts](#spring-core-concepts)
	- [What is Spring](#what-is-spring)
		- [Layers](#layers)
	- [Spring Modules](#spring-modules)
		- [Core Container Module](#core-container-module)
		- [Other Modules](#other-modules)
	- [Spring Container](#spring-container)
		- [Overview](#overview)
		- [ApplicationContext](#applicationcontext)
		- [Spring Bean](#spring-bean)
	- [Two types of Depedency Injection](#two-types-of-depedency-injection)
		- [Setter Injection](#setter-injection)
		- [Constructor Injection](#constructor-injection)
	- [Datatypes of dependencies](#datatypes-of-dependencies)
- [Setter Injection](#setter-injection-1)
	- [Create a Maven Project](#create-a-maven-project)
	- [POM Explanation](#pom-explanation)
		- [Properties](#properties)
	- [Create the Java Bean](#create-the-java-bean)
		- [Summary](#summary)
- [Lifecycle methods](#lifecycle-methods)
	- [Configure LifeCycle methods using XML configuration](#configure-lifecycle-methods-using-xml-configuration)
	- [Configure Spring lifecycle using Spring Annotations](#configure-spring-lifecycle-using-spring-annotations)
		- [Configuring support for all annotations](#configuring-support-for-all-annotations)
- [Constructor Injection](#constructor-injection-1)
	- [Ambguity Problem using Constrcutor Injection](#ambguity-problem-using-constrcutor-injection)
	- [Bean Externalization / Reading Properties](#bean-externalization--reading-properties)
- [AutoWiring](#autowiring)
	- [Assignemnt](#assignemnt)
- [Standalone collections](#standalone-collections)
- [Sterotype Annotations](#sterotype-annotations)
			- [@Component](#component)
			- [<context:component-scan base-package ="com.app.beans"/>](#contextcomponent-scan-base-package-comappbeans)
			- [@Scope](#scope)
			- [@Value](#value)
	- [Example](#example)
- [Spring expression language (SpEL)](#spring-expression-language-spel)
- [Interface Injection](#interface-injection)
	- [Implementation](#implementation)
- [Spring JDBC](#spring-jdbc)
	- [Creating the employee table in the database](#creating-the-employee-table-in-the-database)
	- [Spring JDBC project](#spring-jdbc-project)
	- [Steps to use JDBC Template](#steps-to-use-jdbc-template)
	- [Configure the DataSource and JDBC template](#configure-the-datasource-and-jdbc-template)
	- [Create the DTO and DAO's classes](#create-the-dto-and-daos-classes)
	- [Implementation](#implementation-1)
		- [EmployeeDaoImpl.java](#employeedaoimpljava)
		- [EmployeeDao.java (Interface)](#employeedaojava-interface)
		- [Employee.java (DTO)](#employeejava-dto)
		- [Test.java](#testjava)
		- [config.xml](#configxml)
	- [Executing Select Queries](#executing-select-queries)
		- [RowMapper](#rowmapper)
	- [Create the read method and Row Mapper](#create-the-read-method-and-row-mapper)
	- [Executing Query to get all records](#executing-query-to-get-all-records)
	- [Using autowired in jdbc](#using-autowired-in-jdbc)
- [ORM](#orm)
		- [With JDBC](#with-jdbc)
		- [With ORM](#with-orm)
		- [JPA](#jpa)
	- [Spring ORM](#spring-orm)
		- [Overview](#overview-1)
	- [Mapping an Entity to a Database table](#mapping-an-entity-to-a-database-table)
		- [Example](#example-1)
	- [Create the Product table in the Database](#create-the-product-table-in-the-database)
	- [Create the maven project](#create-the-maven-project)
	- [Create the Product Entity](#create-the-product-entity)
	- [Create the DAO Interface and productDAOImpl class](#create-the-dao-interface-and-productdaoimpl-class)
	- [Create the Spring Configuration file](#create-the-spring-configuration-file)
	- [Configure the localSessionFactory bean](#configure-the-localsessionfactory-bean)
	- [Configure HibernateTemplate in config.xml](#configure-hibernatetemplate-in-configxml)
	- [Transaction Manager](#transaction-manager)
		- [Configure Trasaction Manager](#configure-trasaction-manager)
	- [Implement the Create Method](#implement-the-create-method)
	- [Create the Test class and run](#create-the-test-class-and-run)
	- [Adding Update method](#adding-update-method)
	- [Code](#code)
- [Spring MVC](#spring-mvc)
		- [Sumamrize](#sumamrize)
		- [Refernce](#refernce)
	- [Spring MVC Example Eclipse Project Setup](#spring-mvc-example-eclipse-project-setup)
		- [Converting Dynamic Web Project to Maven Project](#converting-dynamic-web-project-to-maven-project)
		- [Step 2 : Create the Spring Configuration file](#step-2--create-the-spring-configuration-file)
		- [Step 3 : Configure the View Resolver in Spring configuration file](#step-3--configure-the-view-resolver-in-spring-configuration-file)
		- [Step 4 : Create the controller class](#step-4--create-the-controller-class)
		- [Step 5 : Create the folder structure and view](#step-5--create-the-folder-structure-and-view)
	- [Sending data from UI to Controller](#sending-data-from-ui-to-controller)
		- [HTML Form](#html-form)
	- [ModelMap and String for ModelAndView](#modelmap-and-string-for-modelandview)
	- [Spring MVC Summary](#spring-mvc-summary)
		- [Diagram](#diagram)
- [Spring MVC and ORM](#spring-mvc-and-orm)
	- [Create the Maven Project](#create-the-maven-project-1)
	- [Walk thru of building the app](#walk-thru-of-building-the-app)
		- [Create User Model Entity](#create-user-model-entity)
		- [Create the DataAccessLayer and Controller](#create-the-dataaccesslayer-and-controller)
		- [Implement the DAO and Service methods](#implement-the-dao-and-service-methods)
		- [Implement the Controller methods](#implement-the-controller-methods)

# Spring Core Concepts
## What is Spring
1. Spring is a Depedency Injection Framework
- When we have classes that depend on each other we will delegate the responsbility to spring. It will automatically create those objects and inject them 
2. Compliments Java Enterprise Edition 
- The Java EE platform is built on top of the Java Standard Edition platform.
- The Java EE platform provides an API and runtime environment for developing and running large-scale, multi-tiered, scalable, reliable, and secure network applications.
- Provide Spring JDBC, its like a wrapper areound JDBC
- Provide Spring ORM (Object Relational Mapping), will be able to use Hibernate.
- In UI layer, it provides integration with Struts/JSF
- Community Support, provides alternative libaries. Example Spring MVC for Struts
- Provides services like Security and Transactions

### Layers
- UI Layer
- Services/Business Layer
- Data Access Layer

Example 
- OrderController
- OrderService
- OrderDAO

## Spring Modules
Is made of 20+ Spring Modules 
1. Core Container Modules
- beans
- core
- context
- SpEL
2. Data Access/Integration
- JDBC
- ORM
- JMS
- Transaction
3. Web
- MVC
- Portlet
- WebSocket
- Servlet
4. AOP
5. Aspects
6. Instrumentation
7. Messaging 
8. Testing
9. Many more

 
### Core Container Module
- Core container module is the heart of the spring module 
- It has the implementation of inversion of control and support for dependency injection 
- It is responsible for object lifecycle methods that is creation, calling init methods and destroy methods 

### Other Modules
JMS support send/produce/consume messages
Transaction supports declartive/programatiic transaction management
AOP, aspect oriented programming allows us to inject services/code to our objects without modifying their classes 

## Spring Container
The container will create the objects, wire them together, configure them, and manage their complete life cycle from creation till destruction. 

Container needs two things.
- Bean 
- XML Config, which devleopers create throught which we tell the container what teh dependencies are for a object

### Overview 
- Bean factories: These are the simplest type of container, providing basic support for Depdency Injection.
- ApplicationContext: These are built on the notion of bean factories. It adds some extra functionality as compared to its parent class.
 
### ApplicationContext
- AnnotationConfigApplicationContext: Loads a Spring application context from one or more Java-based configuration classes.
- ClassPathXmlApplicationContext: Loads a context definition from one or more XML files located in the classpath.
- FileSystemXmlApplicationContext: Loads a context definition from one or more XML files located in filesystem.
- AnnotationConfigWebApplicationContext: Loads a spring web application context from one or more Java-based configuration classes.

In modern Java-based application, using annotations has become a common standard 


### Spring Bean
A spring bean represents an object that is created, configured and managed by spring container. A spring bean is created by configuration metadata passed to the spring container which tells the container about bean creation, bean lifecycle and bean dependencies.

Syntax using XML based configuration file:
```XML
<bean id="..." class="..." lazy-init="true">
       //bean configuration
</bean>
```


## Two types of Depedency Injection 
Depedency Injection is an process of injection what an object requires in run time, Spring container does it for us.

The two ways are
- Setter Injection
- Contructor Injection

Employee Class 
- id 
- name
- address

Address Class
- street
- city
- state 
- country 


### Setter Injection
is where we provide setter and getter methods for the fields of our objects 
- setName

### Constructor Injection
We provide a paramterized contructor, Spring will invoke the const at run time when creation of the objects 

## Datatypes of dependencies
Types of Data
- Primtive Types Dependencies
  - Byte,
  - Number
  - etc 
- Collection 
  - List, Set, Map, properties
- Reference 
  - are the object types, used most.
  - Depends on other class objects 

# Setter Injection 

## Create a Maven Project 
- Open eclipse IDE, File Menu > New Maven Project 
- Select maven-archetype-quickstart, this archetype allows us to create standalone java projects 
- New Maven Project params
  - Group id, this is the package name for the maven repo
    -  Group id: com.shaktish.spring
 - Artifact id, this is the project id 
    - Artifact id : springcore
- pom.xml is the heart of the project 
  - it will have the project coordiantes, artifact id, package name
  - it includes depedencies
  - we can include spring depedencies here 

pom.xml
```XML
   <properties>
        <springframework.version>4.3.6.RELEASE</springframework.version>
    </properties>
 
    <dependencies>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-core</artifactId>
            <version>${springframework.version}</version>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>${springframework.version}</version>
        </dependency>
    </dependencies>
    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.2</version>
                    <configuration>
                        <source>1.8</source>
                        <target>1.8</target>
                    </configuration>
                </plugin>
            </plugins>
        </pluginManagement>
    </build>
```
## POM Explanation 
### Properties
We can define variables in properties and use it in dependency like below
- ``` <version>${springframework.version}</version>```
```xml
<properties>
	<springframework.version>4.3.6.RELEASE</springframework.version>
</properties>
```	
### Dependencies
- Below depedency is springframework dependecny 
- To get dependency like this goto https://mvnrepository.com/ and search for your dependency 
```xml
<dependency>
	<groupId>org.springframework</groupId>
	<artifactId>spring-core</artifactId>
	<version>${springframework.version}</version>
</dependency>
```
- spring-core and spring-context dependencies are required to do dependency injection 
- anytime we change pom.xml, right click on project goto Maven > Update Project
  - this will build the project if we have added any dependency 

## Create the Java Bean
Example 
1. Create a Java Class/Bean/POJO (plain old object with javascript), with getters and setters 
```java
package com.shaktish.spring.springcore.list;

import java.util.List;

public class Hospital {
	private String name;
	private List<String> departments;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getDepartments() {
		return departments;
	}

	public void setDepartments(List<String> departments) {
		this.departments = departments;
	}
}

```
2. Create a Spring configuration in config.xml file 
- Create a Spring configuration, add name (bean name) and class (package name)
  - name= "hospital"
  - class="com.shaktish.spring.springcore.list.Hospital"
- Add property 
  - ``` <property name="name"> <value>Hira Hospital </value> </property> ```

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

	<bean name="hospital" class="com.shaktish.spring.springcore.list.Hospital">		
		<property name="name">
			<value>Hira Hospital </value>
		</property>
		<property name="departments">
			<list>
				<value>Front office</value>
				<value>In patient</value>
			</list>
		</property>
	</bean>

</beans>
```
1. Test Class 
- Create context using ClassPathXmlApplicationContext and pass class path as its param
```ClassPathXmlApplicationContext("com/shaktish/spring/springcore/list/List.xml");  ```
- assign it a local variable, call it as context. Define context variable type as ClassPathXmlApplicationContext
```ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/list/List.xml"); ```
- using context, call getBean method by passing bean name
``` context.getBean("hospital"); ```
- Assign this to a local variable
```Object hospital = context.getBean("hospital"); ```
- change type to Hospital, also typeCase it 
``` Hospital hospital = (Hospital) context.getBean("hospital"); ```

Test.java
```java
package com.shaktish.spring.springcore.list;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/list/List.xml");
		Hospital hospital = (Hospital) context.getBean("hospital");
		System.out.println(hospital.getName());
		System.out.println(hospital.getDepartments());
	}

}
```

### Summary 
Setter injection is the process of the spring container using setter methods on our object to do depedenct injection, the three important steps are 
- Creating Spring Beans
- Create the Spring Configartion file
- Use the Spring Bean from the container and use them in Test class

# Lifecycle methods 
The life cycle of a Spring bean is easy to understand. When a bean is instantiated, it may be required to perform some initialization to get it into a usable state. Similarly, when the bean is no longer required and is removed from the container, some cleanup may be required.

Spring provides two life cycle methods to every bean
- public void int()
- public void destroy()

- The init-method attribute specifies a method that is to be called on the bean immediately upon instantiation. 
- Similarly, destroymethod specifies a method that is called just before a bean is removed from the container.

We can configure lifecycle methods in three ways
- XML Configuration
  - init-methood
  - destory-method
- Spring Interfaces  
  - @PostConstruct
  - @PreDestroy
- Spring Annotations  
  - InitializingBean 
  - DisposableBean

## Configure LifeCycle methods using XML configuration 
1. Create the Patient Bean
2. Create the XML Confguration
3. Test 


1. Bean 
- Define init and destroy method in the bean
```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

	<bean class=" com.shaktish.spring.springcore.lifeCycle.xmlConfig.Patient" name="patient" p:id="123" init-method="init" destroy-method="exit" />
	
		
</beans>
```
2. Class
```java
package com.shaktish.spring.springcore.lifeCycle.xmlConfig;

public class Patient {
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {		
		this.id = id;
	}
	
	public void init () {
		System.out.println("Initialized...");
	}
	
	public void exit () {
		System.out.println("Destroyed...");
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + "]";
	}
}
```
3. Test file
- add AbstractApplicationContext, this will have registerShutdownHook. 
``` java
package com.shaktish.spring.springcore.lifeCycle.xmlConfig;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/lifeCycle/xmlConfig/config.xml");
		
		Patient patient = (Patient) context.getBean("patient");
		System.out.println(patient);	
		context.registerShutdownHook();
	}

}
```

## Configure Spring lifecycle using Spring Annotations 
By default Annotation support is disabled, we need to enable it by using context, <context:annotation-config /> in config.xml

1. Java file
- Add PostConstruct annotation to init method
- Add PreDestroy annotation to destory method 
```java

package com.shaktish.spring.springcore.lifeCycle.annotations;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Patient {
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {	
		System.out.println("Setters method");
		this.id = id;
	}
	
	@PostConstruct
	public void init () {
		System.out.println("Initialized...");
	}
	
	@PreDestroy
	public void exit () {
		System.out.println("Destroyed...");
	}

	@Override
	public String toString() {
		return "Patient [id=" + id + "]";
	}
	
	
}
```
2. XML configuration file
- import CommonAnnotationBeanPostProcessor
- add a bean, and class as CommonAnnotationBeanPostProcessor, this will take PostConstruct and PreDestroy annotations 
```java 
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

	<bean class="com.shaktish.spring.springcore.lifeCycle.annotations.Patient" name="patient" p:id="123" />
	<bean class="org.springframework.context.annotation.CommonAnnotationBeanPostProcessor" />
	
		
</beans>
```
3. Test file
```java
package com.shaktish.spring.springcore.lifeCycle.annotations;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/lifeCycle/annotations/config.xml");
		
		Patient patient = (Patient) context.getBean("patient");
		System.out.println(patient);	
		context.registerShutdownHook();
	}

}
```

### Configuring support for all annotations 
- Using context we can add annotation-config, <context:annotation-config />
```java
	<context:annotation-config/>	
	<bean class="com.shaktish.spring.springcore.lifeCycle.annotations.Patient" name="patient" p:id="123"/>	
```


# Constructor Injection
Spring container uses a parameterized constructor instead of a setter method when we use Constructor injection
- we do that using constructor arg, we use multiple constructor-arg depending on no of parameters we have on our class constructor 
```xml
	<bean>
		<constructor-arg>
		<constructor-arg>
		<constructor-arg>
	</bean>
```

We are going to use refType, Shopping Cart and Item 

1. In ShoppingCart, add ShoppingCart constructor
```java
package com.shaktish.spring.springcore.constructorInjection;

public class ShoppingCart {
	private Item Item;
	
	ShoppingCart (Item Item) {
		this.Item = Item; 
	}

	public Item getItem() {
		return Item;
	}

	public void setItem(Item item) {
		Item = item;
	}
}
```
2. Sames goes with Item class

```java
package com.shaktish.spring.springcore.constructorInjection;

public class Item {
	private int id;
	private String itemName;
	private double price;
	private int quantity;
	
	Item (int id, String itemName, double price, int quantity) {
		this.id = id;
		this.itemName = itemName;
		this.price = price;
		this.quantity = quantity;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Item [id=" + id + ", itemName=" + itemName + ", price=" + price + ", quantity=" + quantity + "]";
	}

}

```

3. Configuring XML
- use constructor-arg and refer the bean Item 
- use c-schema/p-schema to define attributes 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans 
	xmlns="http://www.springframework.org/schema/beans" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xmlns:context="http://www.springframework.org/schema/context" 
	xmlns:p="http://www.springframework.org/schema/p"
	xmlns:c="http://www.springframework.org/schema/c"  
	xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">
    
	<!-- using p:schema -->
  <!--  <bean name="item" class="com.shaktish.spring.springcore.constructorInjection.Item"  
    p:id="54"   p:itemName="RealMe" p:price="300" p:quantity="2"
    />-->

	<!-- using constructor arg -->
 	<!-- <bean name="item" class="com.shaktish.spring.springcore.constructorInjection.Item">		
		<constructor-arg value="54"/>
		<constructor-arg value="realMe"/>
		<constructor-arg value="300"/>
		<constructor-arg value="2"/>	
	</bean>	 -->
    
	<!-- using c:schema -->
   <bean name="item" class="com.shaktish.spring.springcore.constructorInjection.Item"  
    c:id="54" c:itemName="RealMe" c:price="300" c:quantity="2"
    />

	<bean name="shoppingCart" class="com.shaktish.spring.springcore.constructorInjection.ShoppingCart">				
		<constructor-arg>
			<ref bean="item" />
		</constructor-arg>		
	</bean>	
		
</beans>
```

4. Test java file
```java
package com.shaktish.spring.springcore.constructorInjection;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/constructorInjection/ShoppingCartConfig.xml");
		ShoppingCart cart = (ShoppingCart) context.getBean("shoppingCart");
		System.out.println(cart.getItem());
	}

}

```

## Ambguity Problem using Constrcutor Injection
- We will have Ambugity problem coz of the types of constructors arguments we pass in 
- To avoid ambuigty problem we can the type, index, name attribute 
  - using type, we can define data type 
  - using index, we can define the order of arguments we pass in constrcutor 
  - using name, we can specify which parameter name we have mapped in constructor 

1. Lets understand with a Example, we will create Addition class and add methods 

```java
package com.shaktish.spring.springcore.constructorInjection.ambiguityProblem;

public class Addition {
	Addition(int a, int b) {
		System.out.println("Inside constructor int");
	}
	Addition(double a, double b) {
		System.out.println("Inside constructor double");
	}
	
	Addition(String a, String b) {
		System.out.println("Inside constructor string");
	}
	
	Addition(int a, double b) {
		System.out.println("Inside constructor int and double");
	}
}
```

2. Configure XML
- when we don't define type attribute in constructor-arg, it ll be taken String
- So lets define type and index 
```java
<?xml version="1.0" encoding="UTF-8"?>
<beans 
	xmlns="http://www.springframework.org/schema/beans" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xmlns:context="http://www.springframework.org/schema/context" 
	xmlns:p="http://www.springframework.org/schema/p"	
	xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">
        

	<bean name="addition" class="com.shaktish.spring.springcore.constructorInjection.ambiguityProblem.Addition">				
		<constructor-arg value="1" index="0" type="int" />
		<constructor-arg value="20" index="1" type="double"/>	
	</bean>	
		
</beans>
```
3. Test file
```java
package com.shaktish.spring.springcore.constructorInjection.ambiguityProblem;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/constructorInjection/ambiguityProblem/config.xml");
		Addition addition = (Addition) context.getBean("addition");
		System.out.println(addition);
	}

}

```


## Bean Externalization / Reading Properties
- In realtime application we have some properties as dbName, port, userName, password
- We have these properties under database.properties object 

In spring application, we use property placeholder configuration to create the properties in three steps
- Create the properties
- Link the properties
- User properties in xml and inject 


1. database.properties
```json
dbServer=shaktishserver
dbPort=3306
dbUser=test
dbPass=test
```
2. myDAO.java
```java
package com.shaktish.spring.springcore.propertyPlaceholder;

public class myDAO {
	private String dbServer;
	
	myDAO(String dbServer) {
		this.dbServer = dbServer;
	}

	@Override
	public String toString() {
		return "myDAO [dbServer=" + dbServer + "]";
	}	
}
```
3. XML configuartion file
- Include context:property-placeholder
- use dollar and curlyBraces to use the name of the db porperties key
```java 
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

	<context:property-placeholder location="com/shaktish/spring/springcore/propertyPlaceholder/database.properties" />
	<bean name="myDAO" class="com.shaktish.spring.springcore.propertyPlaceholder.myDAO">
		<constructor-arg>
			<value>${dbServer}</value>
		</constructor-arg>
	</bean>
</beans>

```
4. Test file 
```java 
package com.shaktish.spring.springcore.propertyPlaceholder;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcore/propertyPlaceholder/config.xml");
		myDAO dao = (myDAO) context.getBean("myDAO");
		System.out.println(dao);
	}
}
```

# AutoWiring 
When object a depends on object B to do its job then 
- B is the dependency object  
- A is the dependent object

So far we learnt dependency injection using Setter/Constructor and link up using Ref tag. The process of linking the dependency is called wiring 

if this process is done by the Spring container its called Auto wiring 
- we will not use any ref tag 
- we simple configure our beans todo auto wiring

Autowiring can be done in two ways 
- Using XML
  - Not autowired by default
  - We can wire it by Type, Name, Constructor and Auto Detect works only in spring2 and lower 
  - By Type, Name will use setter injection
- Annotations
  - @Autowired
  - @Qualifier
    - if there are multiple beans with same type we can use @Qualifier to tell which bean is required by giving it name and referring the same name with bean name

## Assignemnt

1. hotelManagement.java 
```java
package com.shaktish.spring.springcoreadvanced.autowiring.annotation.assignment;

import org.springframework.beans.factory.annotation.Autowired;

public class hotelManagement {
	private Reservation reservation;

	@Autowired
	hotelManagement(Reservation reservation) {
		this.reservation = reservation;
	}

	public Reservation getReservation() {
		return reservation;
	}

	public void setReservation(Reservation reservation) {
		this.reservation = reservation;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}

}
```
2. reservation.java 
```java
package com.shaktish.spring.springcoreadvanced.autowiring.annotation.assignment;

public class Reservation {
	private int id;
	private String time;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "id : " + this.id + ", time : " + this.time;
	}		
}
```
3. config.xml
```java 
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">
      
    <context:annotation-config />
  	<bean name="reservation" class="com.shaktish.spring.springcoreadvanced.autowiring.annotation.assignment.Reservation" p:id="54" p:time="9.30" />  	
	<bean name="hotelManagement" class="com.shaktish.spring.springcoreadvanced.autowiring.annotation.assignment.hotelManagement" autowire="constructor"/>
		
</beans>
```
4. test.java
```java 
package com.shaktish.spring.springcoreadvanced.autowiring.annotation.assignment;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {

	public static void main(String[] args) {	
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcoreadvanced/autowiring/annotation/assignment/config.xml");
		hotelManagement hotelManagement = (hotelManagement) context.getBean("hotelManagement");
		System.out.println(hotelManagement.getReservation());
	}

}
```

# Standalone collections 
To use standalone collections, we use util schema
1. Import the namespaces on the bean element
2. Use the followingSyntax 
  - <util:CN CN-class="" id="">
  - <value /> or <entry>
- explanation 
  - <util:List List-class="" id="">
once we define a collection like this, we can re-use it.

# Sterotype Annotations
#### @Component
- Instead of using XML configuartion we can use @Component to mark our java classes, Spring will automatically create the object.
#### <context:component-scan base-package ="com.app.beans"/>
- To tell the spring container about the packages to scan for @Component classes, in the XML configuration we use <context:component-scan base-package ="com.app.beans (package-path-here)"/>
#### @Scope
- When we use sterotype annotation, we use @Scope to specify the scope of the bean which could be Singleton, prototype, request and session
#### @Value
- To inject vlaues, use @Value 
- To inject collection type 
  - util:Collection id="myList"
  - @Value("#{myList})
- To inject object/ref type, use @Autowired

## Example
- instructor.java
```java 
package com.shaktish.spring.springcoreadvanced.sterotypeAnnotation;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

// you can define component name and reference it in the bean
//@Component("instructor")
@Component
public class instructor {
	@Value("9")
	private int id;
	@Value("shaktish")
	private String name;
	@Autowired
	private Profile profile;
	@Value("#{topics}")
	private List<String> topics; 

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "instructor [id=" + id + ", name=" + name + ", profile=" + profile + ", topics=" + topics + "]";
	}
	
}

```
- config.xml
```XML 
<?xml version="1.0" encoding="UTF-8"?>
<beans 
	xmlns="http://www.springframework.org/schema/beans" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xmlns:context="http://www.springframework.org/schema/context" 
	xmlns:p="http://www.springframework.org/schema/p"		 
	xmlns:util="http://www.springframework.org/schema/util" 
	
		
	xsi:schemaLocation="http://www.springframework.org/schema/beans	
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd
    http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util-3.0.xsd"      
>
      
    <context:component-scan base-package ="com.shaktish.spring.springcoreadvanced.sterotypeAnnotation" />
    <util:list list-class="java.util.LinkedList" id="topics">
    	<value>React JS</value>
    	<value>Java</value>
    </util:list>    
		
</beans> 
```
- Test.java
```java
package com.shaktish.spring.springcoreadvanced.sterotypeAnnotation;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
	
	public static void main(String[] args) {	
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springcoreadvanced/sterotypeAnnotation/config.xml");
		instructor instructor = (instructor) context.getBean("instructor");
		System.out.println(instructor);
	}

}
```
- Profile.java
```java
package com.shaktish.spring.springcoreadvanced.sterotypeAnnotation;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Profile {
	@Value("Full stack developer")
	private String title;
	@Value("Incedo")
	private String company;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	@Override
	public String toString() {
		return "Profile [title=" + title + ", company=" + company + "]";
	}
	
	
}

```

# Spring expression language (SpEL)
- Spring expression language supports parsing and executing  with the help of @Value 
- Expression is a various of Classes, Variable, Methods, Constructors, Objects and Symbol
- Example @Value("#{1+1}"), will return 2

# Interface Injection 
1. OrderBO - Bussiness Logic 	
|	- is-a-relationship
OrderBOImpl - Class 
|
2. OrderDAO - Database control
|
OrderDAOImpl - Class

OrderBO has-a-relationshop with OrderDAO

## Implementation
1. Create the POJIS/POJO
2. Create the configuration 
3. Create the test 

# Spring JDBC
- JDBC : Java Database Connectivity to perform db operations 
- Java App -- SQL -- DB

By default 
- we create a connection, 
- create a statement, 
- set the parameter to the perpared statement, 
- Execute it and process the result

This code is repeated across our classes in the application. Spring simplifies JDBC by JDBC Template 
-  JDBC Template is a combination of JDBC Technology + Template Design Pattern
-  Template carries the common code also called boiler plate code

To use JDBC template class from spring we should provide it a data source 
- JDBC template depends on dataSource javax.sql.DataSource(l)
- Datasource is an interface, Spring provides an implementation class called DriverManagerDataSource. 
- we will be creating this bean in spring configuration and when we create a JDBC template in the spring configration we will inject this DriverManagerDataSource
- DriverManagerDataSource is responsible for database connection, It takes four parameters 
  - driverClassName
  - url
  - userName
  - password 
- JDBC tempale provides various methods such as
  - update(String sql) int
  - update(String sql, Object..args) int
  - insert, update and delete

## Creating the employee table in the database
Open mySqlWorkbench and run each query sepeartely 

- Telling sql to use mydb as database
```use mydb; ```
- Create a employee table with id, firstname and last name 
``` create table employee(id int, firstname varchar(20), lastname varchar(20)); ```
- select all the records from employee table
``` select * from employee; ```

```sql
use mydb;
create table employee(id int, firstname varchar(20), lastname varchar(20));
select * from employee;
```
## Spring JDBC project 
We will update the required dependencies in pom.xml, dependencies are 
- spring-context
- spring-jdbc
- mysql-connector-java

Lets start by creating the project
- Goto file menu > New Maven Project, click next 
- Select Archetype > maven-archetype-quickstart, click next
- Artifact id is project name 
  - Artifact id : springjdbc 
- open pom.xml, paste the below 
  - Here we are adding spring-core, spring-context, mysql-connector-java and spring-jdbc dependencies
  - In plugin, we ll add maven-compiler plugin
```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.shaktish.spring</groupId>
	<artifactId>springjdbc</artifactId>
	<version>0.0.1-SNAPSHOT</version>

	<name>springjdbc</name>
	<!-- FIXME change it to the project's website -->
	<url>http://www.example.com</url>

	<properties>
		<springframework.version>4.3.6.RELEASE</springframework.version>
		<mysql.version>5.1.6</mysql.version>
	</properties>

	<dependencies>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-core</artifactId>
			<version>${springframework.version}</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-context</artifactId>
			<version>${springframework.version}</version>
		</dependency>		
		<dependency>
		    <groupId>mysql</groupId>
		    <artifactId>mysql-connector-java</artifactId>
		    <version>{mysql.version}</version>
		</dependency>		
			
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-jdbc</artifactId>
			<version>${springframework.version}</version>
		</dependency>

	</dependencies>
	<build>
		<pluginManagement>
			<plugins>
				<plugin>
					<groupId>org.apache.maven.plugins</groupId>
					<artifactId>maven-compiler-plugin</artifactId>
					<version>3.2</version>
					<configuration>
						<source>1.8</source>
						<target>1.8</target>
					</configuration>
				</plugin>
			</plugins>
		</pluginManagement>
	</build>
</project>

```
- Right click on Project, Goto Maven > Update Project, Maven ll pull all the dependencies. 

## Steps to use JDBC Template 
Lets see how to perform database opeartions using spring JDBC, We will do it in two simple steps 
1. Configure the driver manager data source
- dataSource : Create the bean by defining four properties
  - driverClassName : com.mysql.jdbc.Driver
  - url 			: jdbc:mysql://localhost/mydb
  - username 		: root
  - password 		: test
2. Configure jdbc template in spring configuration 
- inject the dataSource to jdbc template 

We will create these two beans,Jdbc template depends on our dataSource manager 
Lastly, craete the test class and use the JDBC template 

## Configure the DataSource and JDBC template 
- Create the config.xml and create the bean
- add DriverManageDataSource as class to the bean. 
  - use ctrl+shift+t to search for DriverManageDataSource, click ok it ll open the file 
  - copy package name org.springframework.jdbc.datasource and copy the class name DriverManagerDataSource. 
  - use it like this, class="org.springframework.jdbc.datasource.DriverManagerDataSource"

Config.xml
```xml
<bean class="org.springframework.jdbc.datasource.DriverManagerDataSource" name="nameSource" p:driverClassName=" com.mysql.jdbc.Driver" p:url="jdbc:mysql://localhost/mydb" p:username="root" p:password="test" />
<bean class="org.springframework.jdbc.core.JdbcTemplate" name="jdbcTemplate" p:dataSource-ref="nameSource" />
```
Test.java
We will use jdbcTemplate bean that we configured in .xml file and create a employee in sql database 
```java
package com.shaktish.spring.springjdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext  context = new ClassPathXmlApplicationContext("com/shaktish/spring/springjdbc/config.xml");
		JdbcTemplate jdbcTemplate = (JdbcTemplate) context.getBean("jdbcTemplate");
		
		String sql = "insert into employee values(?,?,?)";
		int result = jdbcTemplate.update(sql, new Integer(1), "shaktish", "kumar");
		System.out.println("no of records inserted are, " + result);		
	}
}
```
## Create the DTO and DAO's classes 
Model Object or Value Object : DTO (Data transfer Object)
- This object is simple POJO containing get/set methods to store data retrieved using DAO class.
DAO Interface : Data Access Object (DAO) 
- This interface defines the standard operations to be performed on a model object(s).
Data Access Object concrete class / DAO Impl
- This class implements above interface. This class is responsible to get data from a data source which can be database / xml or any other storage mechanism.
- This class will use JDBC template to perform database opeartions, we will wire jdbc template with this class. 


## Implementation
- Lets create a employee class with id, firstName, lastName, we call it DTO (Data/Entity)
- Lets create a employee.dao interface file.
  - Create a method called create it takes in employee as param.
  - import the employee class
- Lets create a employee.dao.impl,  
  - This class should implement employee.dao class 
  - add unimplemented methods, that is the create method we just added in interface class
  - intialize JdbcTemplate
    - ``` private JdbcTemplate jdbcTemplate```
  - Create getter and setter method for jdbcTemplate 
  - Add jdbcTemplate.update method to create a employee in create method
    - ``` string sql = "insert into employee values(?,?,?)"; ```
    - ``` int result = jdbcTemplate.update(sql, employee.getId(), employee.getFirstName(), employee.getLastName() )```
    - return the result method 
- Creating the config.xml file  
  - Under employee package, create a test file and config.xml file
  - Open xml file, add the DriverManagerDataSource bean and jdbcTemplate bean 
  - Craate a bean for EmployeeDaoImpl class, add class and name property
    - add property, define name as jdbcTemplate and add value ref as jdbcTmeplate
```xml 
<bean class="com.shaktish.spring.springjdbc.employee.dao.impl.EmployeeImpl" name ="employeeDao"> 
	<property name="jdbcTemplate"><ref bean="jdbcTemplate"/></property>
</bean>
```

### EmployeeDaoImpl.java
```java
package com.shaktish.spring.springjdbc.employee.dao.impl;

import com.shaktish.spring.springjdbc.employee.dao.EmployeeDao;
import com.shaktish.spring.springjdbc.employee.dto.Employee;
import org.springframework.jdbc.core.JdbcTemplate;

public class EmployeeDaoImpl implements EmployeeDao {

	private JdbcTemplate jdbcTemplate;

	@Override
	public int create(Employee employee) {
		// TODO Auto-generated method stub
		String sql = "insert into employee values(?,?,?)";
		int res = jdbcTemplate.update(sql, employee.getId(), employee.getFirstName(), employee.getLastName());
		return res;
	}

	public JdbcTemplate getJdbcTemplate() {
		System.out.println(" getJdbcTemplate");
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {		
		this.jdbcTemplate = jdbcTemplate;
	}

}
```
### EmployeeDao.java (Interface)
```java
package com.shaktish.spring.springjdbc.employee.dao;
import com.shaktish.spring.springjdbc.employee.dto.Employee; 

public interface EmployeeDao {
	int create(Employee employee);
}
```

### Employee.java (DTO)
```java
package com.shaktish.spring.springjdbc.employee.dto;

public class Employee {
	private int id;
	private String firstName;
	private String lastName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + "]";
	}	
	
}
```
### Test.java
```java
package com.shaktish.spring.springjdbc.employee.test;

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
		employee.setId(7);
		employee.setFirstName("hinata2");
		employee.setLastName("uzmak2");
		int res = dao.create(employee);		
		System.out.println("no of records inserted are " + res);
	}
}

```
### config.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

	<bean class="org.springframework.jdbc.datasource.DriverManagerDataSource" name="nameSource" p:driverClassName=" com.mysql.jdbc.Driver" p:url="jdbc:mysql://localhost/mydb" p:username="root" p:password="test" />
	<bean class="org.springframework.jdbc.core.JdbcTemplate" name="jdbcTemplate" p:dataSource-ref="nameSource" />	
	<bean class="com.shaktish.spring.springjdbc.employee.dao.impl.EmployeeDaoImpl" name="emplyoeeDao">
		<property name="jdbcTemplate"><ref bean="jdbcTemplate"/></property> 
	</bean>

</beans>
```

## Executing Select Queries
So far we learnt how to execute, non-select statements that are insert, update and delete. 
Lets see how to execute select queries using two methods 
- queryForObject(String sql, RowMapper<T> rowmapper, Object...args ):<T>
  - Returns a single record 
  - Params 
    - sql
    - RowMapper Interface
    - variable arguments
- query(String sql, RowMapper<T> ):List<T>
  - Returns mutiple records 

### RowMapper 
RowMapper<T> (I) is an Interface in the spring framework which we need to implement.
- It maps jdbc result set that comes back into an object of class that we create in the application 

Architecture 
- App -- select..from (query) -- DB -- row -- Row Mapper -- Object 


## Create the read method and Row Mapper
- In employeeDao, add read method. 
```java 
Employee read(Employee employee);
```
- In employeeDaoImpl, override the read method 
```java 
@Override
	public Employee read(int id) {
		String sql = "select * from employee where id=?";
		EmployeeRowMapper rowMapper = new EmployeeRowMapper();
		Employee employee = jdbcTemplate.queryForObject(sql, rowMapper, id);
		return employee;
	}
```
- create RowMapper with rowMapperInterface available in jdbcTemplate 
```java 
// EmployeeRowMapper.java
package com.shaktish.spring.springjdbc.employee.dao.rowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.shaktish.spring.springjdbc.employee.dto.Employee;

public class EmployeeRowMapper implements RowMapper<Employee> {

	@Override
	public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		Employee emp = new Employee();
		emp.setId(rs.getInt(1));
		emp.setFirstName(rs.getString(1));
		emp.setLastName(rs.getString(2));
		return emp;
	}

}
```
- test
```java 
package com.shaktish.spring.springjdbc.employee.test;

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
		Employee res = dao.read(3);
		System.out.println("get employee data " + res);
	}
}

```


## Executing Query to get all records
- EmployeeDaoImpl.java
```java
@Override
	public Employee read(int id) {
		String sql = "select * from employee where id=?";
		EmployeeRowMapper rowMapper = new EmployeeRowMapper();
		Employee employee = jdbcTemplate.queryForObject(sql, rowMapper, id);
		return employee;
	}
```
- EmployeeDao.java
```java
	List<Employee> read();
```
- Test.java
```java 
ApplicationContext  context = new ClassPathXmlApplicationContext("com/shaktish/spring/springjdbc/employee/test/config.xml");
EmployeeDao dao = (EmployeeDao) context.getBean("emplyoeeDao");
List<Employee> res = dao.read();
System.out.println("get employee data " + res);
```

## Using autowired in jdbc

- In config.xml, add the scan package 
```java 
<context:component-scan base-package ="com.shaktish.spring.springjdbc.employee.dao.impl" />
```
- In EmployeeDaoImpl.java, add @Component and pass the name
- Add @Autowired for variable
```java
@Component("emplyoeeDao")
public class EmployeeDaoImpl implements EmployeeDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	...
```
- test.java
```java
List<Employee> res = dao.read();
System.out.println("get employee data " + res);
```

# ORM
- Stands for Object Relational Mapping 

### With JDBC
- when we JDBC/Spring jdbc to do database operations we create sql query using the primitive data in an object. We take the primitive types create an SQL statement and then execute it against the database. All that work is done by developer. Here is where our ORM tool comes in

### With ORM
- We simple create a class called entity class, a simple java POJO or bean and we provide mapping. Every field in the class will be mapped to a database column. 
- Once we do that mapping this ORM tool will automatically convert our object into database rows and vice versa. We'll not be writing any sql 
- This ORM tool will generate the reuqired SQL on the fly once we provide the mapping information. 

### JPA
- The Java EE stand for doing ORM is JPA, which stands for Java Persistence API
- Oracle provides this JPA standard and as a part of every standard we have an API and a specification. 
  - The API is for us the developers, there are several annotations and interfaces and classes which we use
  - Specification is for somebody like Hibernate which implements this standard, the JPA standard 
  - Hibernate is the popular implementation of the JPA standard. 

## Spring ORM
- Just like how Spring made it easy for us to use JDBC by providing a Spring JDBC template, It also makes it easy to use ORM tools like Hiberate by providing Hibernate Template 
  - Hibernate Template hides all the boiler plate coding like creating a hibernate session etc and we can simply use the hibernate template and execute operation against a database such as save, update, delete and get which returns one record and loadAll which returns multiple records. 
    - All these methods here deal with objects they take objects save them into the database 
- Any Application that uses Hibernate Template will have the followin design 
  - For example if we are dealing with a entity or table called product, we'll creat a java file called Product, we ll mark it with all the annotations or the mapping information against the database table. 
  - And then we create the productDao which will have all our database code. This is the interface.
  - Daoimpl will depend on Hibernate tempalte. The Hibernate template in turn uses the Session factory bean which is an interface. This sessionFactory takes care of establishing the connection. It provides the hiberante session 
    - An implementation for SessionFactory is LocalSessionFactoryBean from Spring. we'll be implementing in our application and SessionFactory needs a DataSource 
  - We ll also configure a TransactionManager, we need transaction when we do write operations against a database to ensure that ensure that all of them fall in one transaction 
  - The LocalSessionFactoryBean takes three arguments or it depends on three other beans 
    - dataSource
    - hibernateProperties
      - hibernate.dialect = org.hibernate.dialect.MYSQLDialect
        - dialect provides SQL from the objects we provide for a particular operation. if it is save, it'll generate insert, if its update it'll generate a update etc. 
      - hibernarte.show.sql = true 
        - this property will tell the dialect that is should display all the SQL stements taht it is generating on the console.
    - annotatedClasses 
      - we need to tell the LocalSessionFactory bean which all classes in our application map to the database tables 

### Overview
- SpringORM provides 
- HibernateTemplate depends 
- SessionFacory Bean needs 
  - dataSource 
  - hibernateProperties
  - AnnotatedClasses                             -  

## Mapping an Entity to a Database table 
- We need to provide mapping information, mapping between fields in our classes and the database table 
- We can do it using XML and Annotations, we will be using Annotations
- There are four Java Persistence API annotations
  - @Entity
  - @Table
  - @Id
  - @Column 

### Example 
- First we create a entity, a Employee class, and mark @Entity 
```java
@Entity
// if class-name and table name are different we give the table name
@Table("tableName")
java public class Employee {
	... 
}
```
- Mark primary key, that is id 
```java
@Entity
java public class Employee {
	@Id
	private int id;
	//@Column("name="name")
	private String name;
}
```
- @Entity and @Id are mandatory, @Column is optional 

## Create the Product table in the Database
In mysql, create product table 
```java
use mydb;
create table product(id int, name varchar(20), description varchar(100), price decimal(8,3) );
select * from product;
```

## Create the maven project 
- file menu, new project -> Maven Project
- ArcheType : maven-archetype-quickstart
- artifactId : springorm
- Configure dependency in pom.xml 
  - add spring-core, spring-context, mysql-connector-java, spring-orm and hibernate-core
  - add maven-compiler-plugin in pluginManagement
- Maven > Update Project 
  - installs the dependency 

## Create the Product Entity 
- Let's create the Product entity/class, product class represent the table it has four columns id, name, descprition and price 
- in src/main/java > com.shaktish.spring.springorm > create a class 
  - package : com.shaktish.spring.springorm.product.entity
  - Name : Product
- add the 4 properties 
  - private int id;
  - private String name; 
  - private String desc;
  - private double price;
- add the getters and setters for these properties 
- To make the product an entity, add the JPA annotations 
  - import Entity from javax.persistence 
```java
import javax.persistence.Entity;

@Entity
public class Product {
...
```
- Add the Id annotation from javax.persistence 
```java 
import javax.persistence.Id;
@Id
private int id;
```
- Add the Table annotation from javax.persistence 
```java 
import javax.persistence.Table;

@Table(name="product")
public class Product {
```  
- Add the column annotation from javax.persistence 
```java 
import javax.persistence.Column;
@Column(name="description")
private String desc;
```
## Create the DAO Interface and productDAOImpl class 
- in src/main/java > com.shaktish.spring.springorm > new interface
  - package : com.shaktish.spring.springorm.product.dao
  - name : ProductDao
- Add a create method in ProductDao
```java 
// ProductDao.java
package com.shaktish.spring.springorm.product.dao;
import com.shaktish.spring.springorm.product.entity.Product;

public interface ProductDao {
	int create(Product product);
}
```
- Add ProductDaoImpl 
  - in src/main/java > com.shaktish.spring.springorm.product.dao > new class
  - package : com.shaktish.spring.springorm.product.dao.impl
  - name : ProductDaoImpl
```java
// ProductDaoImpl.java
package com.shaktish.spring.springorm.product.dao.impl;
import com.shaktish.spring.springorm.product.dao.ProductDao;
import com.shaktish.spring.springorm.product.entity.Product;
public class ProductDaoImpl implements ProductDao {

	@Override
	public int create(Product product) {
		return 0;
	}
}
```
- ProductDaoImpl uses HibernateTemplate

```java
// ProductDaoImpl.java
package com.shaktish.spring.springorm.product.dao.impl;

import org.springframework.orm.hibernate5.HibernateTemplate;
import com.shaktish.spring.springorm.product.dao.ProductDao;
import com.shaktish.spring.springorm.product.entity.Product;

public class ProductDaoImpl implements ProductDao {
	HibernateTemplate hibernateTemplate;
	@Override
	public int create(Product product) {
		return 0;
	}
}
```
## Create the Spring Configuration file 
- add test.java and config.xml
- in src/main/java > com.shaktish.spring.springorm.product.test > new class
  - package : com.shaktish.spring.springorm.product.test
  - test.java
  - create config.xml and past the below code 

```java
// config.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:context="http://www.springframework.org/schema/context" xmlns:p="http://www.springframework.org/schema/p" xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd">

	<bean class="org.springframework.jdbc.datasource.DriverManagerDataSource" name="dataSource" p:driverClassName=" com.mysql.jdbc.Driver" p:url="jdbc:mysql://localhost/mydb" p:username="root" p:password="test" />

</beans>
```
## Configure the localSessionFactory bean 
- Open config.xml andd add the localSessionFactory bean
- bean
  - name = "sessionFactory"
  - class = "org.springframework.orm.hibernate5.localSessionFactoryBean"
  - p:dataSource-ref="dataSource"
  - add the property
    - Property
      - name = "hibernateProperties"
        - props
          - key="hibernate.dialect"
          - value= "org.hibernate.MySQLDialect"
          - key="hibernate.show_sql"
          - value= "true"
      - name="annotationClasses"
        - list 
          - value = "com.shaktish.spring.springorm.product.entity.Product"
```xml
<bean name="sessionFactory"  class="org.springframework.orm.hibernate5.localSessionFactoryBean"
	p:dataSource-ref="dataSource"
>
	<property name="hibernateProperties">
		<props>
			<prop key="hibernate.dialect">org.hibernate.dialect.MySQLDialect</prop>
			<prop key="hibernate.show_sql">true</prop>
		</props>
	</property>
	<property name="annotatedClasses">
		<list>
			<value>com.shaktish.spring.springorm.product.entity.Product</value> 
		</list>
	</property>
</bean>
```
## Configure HibernateTemplate in config.xml
- Add bean
  - name = "sessionFactory"
  - class = "org.springframework.orm.hibernate5.localSessionFactoryBean"
  - p:sessionFactory-ref= "sessionFactory"
```java
<bean name="hibernateTemplate" class="org.springframework.orm.hibernate5.hibernateTemplate" p:sessionFactory-ref="sessionFactory" />
```
- Lets Autowire this HibernateTemaplte, Open ProductDaoImpl.java 
  - add @Component to class 
  - add @Autowired to hibernateTemplate
- Add component-scan package in config.xml
  - provide the base packages to context:component-scan : ProductDaoImpl
```xml
<context:component-scan base-package="com.shaktish.spring.springorm.product.dao.impl"/>
```
## Transaction Manager 
- When we develop Java EE applications or any application we will execute mupltiple statement that is update, insert, delete against a database and there could be business scenario where we want either all of them to success or none of them should succeed, Here is where Transaction management comes in to do autonomous work 
- we do it using commit and rollback 
- A simple example is a money transfer. when we transfer money from one bank account to another we debit it from the sender and credit it to the receiver 
  - These two should happen within a single transaction 
  - if the debit happens and if something goes wrong with the creditt everything should be rolled back, otherwise sender will not be happy, that is where we use Transactions 
- Spring makes it easy to do transaction management by providing a TransactionManager for every template like JDBC, Hibernate etc 
- When we are using Hibernate, we'll use HibernateTransactionManager we ll configure this bean in the XML and then we'll use the annotation supoort that is provided by Spring 
- We add this single line once we get the transaction namesapces to the XML configuration 
  - <tx:annotaiton-driven/>
  - Spring will know that we are going to use annotations to configure transactions 
- The last step is to mark our Java methods, which need transaction with the @Transactional annotation

### Configure Trasaction Manager 
- Open XML, we are going to add a new bean 
  - name = "transactionManager"
  - class = "org.springframework.orm.hibernate5.hibernateTransactionManager"
- Transaction maanger depends on SessionFactory 
  - p:sessionFactory-ref= "sessionFactory"
- To use the transaction, we need to add tx schema 
  - xmlns:tx="http://www.springframework.org/schema/tx"
- We also need to add context 
	- http://www.springframework.org/schema/tx 
	- http://www.springframework.org/schema/tx/spring-tx.xsd
- Spring transactions either through XML or annotations. To use the annotated way, add tx:annotation-driven. That's it, It tells spring that we are ogin to use annotations to do transactions 
  - <tx:annotaiton-driven/>
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans 
	xmlns="http://www.springframework.org/schema/beans" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xmlns:context="http://www.springframework.org/schema/context" 
	xmlns:tx="http://www.springframework.org/schema/tx"  
	xmlns:p="http://www.springframework.org/schema/p" 
	xsi:schemaLocation="http://www.springframework.org/schema/beans
	
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd

	http://www.springframework.org/schema/tx
    http://www.springframework.org/schema/tx/spring-tx.xsd">
	
	<tx:annotation-driven />
	<context:component-scan base-package="com.shaktish.spring.springorm.product.dao.impl" />
	<bean class="org.springframework.jdbc.datasource.DriverManagerDataSource" name="dataSource" p:driverClassName=" com.mysql.jdbc.Driver" p:url="jdbc:mysql://localhost/mydb" p:username="root" p:password="test" />
	
	<bean name="sessionFactory" class="org.springframework.orm.hibernate5.LocalSessionFactoryBean" p:dataSource-ref="dataSource">
		<property name="hibernateProperties">
			<props>
				<prop key="hibernate.dialect">org.hibernate.dialect.MySQLDialect</prop>
				<prop key="hibernate.show_sql">true</prop>
			</props>
		</property>
		<property name="annotatedClasses">
			<list>
				<value>com.shaktish.spring.springorm.product.entity.Product</value>
			</list>
		</property>
	</bean>

	<bean name="hibernateTemplate" class="org.springframework.orm.hibernate5.HibernateTemplate" p:sessionFactory-ref="sessionFactory" />

	<bean name="transactionManager" class="org.springframework.orm.hibernate5.HibernateTransactionManager" p:sessionFactory-ref="sessionFactory" />

</beans>
```
## Implement the Create Method
- In ProductDaoImpl, add hibernateTemplate and add **create** method
```java
@Override
	@Transactional
	public int create(Product product) {
		Integer result = (Integer) hibernateTemplate.save(product);
		return result;
	}
```
## Create the Test class and run 
- Add application context, classPathApplicationContext
  - Enter the ConfigSpringOrm.xml path
```java
package com.shaktish.spring.springorm.product.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.shaktish.spring.springorm.product.dao.ProductDao;
import com.shaktish.spring.springorm.product.entity.Product;

public class TestSpringOrm {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("com/shaktish/spring/springorm/product/test/ConfigSpringOrm.xml");
		ProductDao productDao = (ProductDao) context.getBean("ProductDaoImpl");
		Product product = new Product();
		product.setId(1);
		product.setName("Iphone");
		product.setPrice(55.5);
		product.setDesc("Iphone description");
		productDao.create(product);
	}

}

```

## Adding Update method
- Add the update method in ProductDAO
```java
// ProductDao
void update(Product product);
```
- Add the update method in ProductDaoImpl
```java
// ProductDaoImpl
@Override
@Transactional
public void update(Product product) {
	hibernateTemplate.setCheckWriteOperations(false);
	hibernateTemplate.update(product);	
}
```
- Test.java
```java
productDao.update(product);
```

## Code 
- Product 
```java
package com.shaktish.spring.springorm.product.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

@Table(name="product")
public class Product {
	@Id
	private int id;
	private String name;
	@Column(name="description")
	private String desc;
	private double price;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", desc=" + desc + ", price=" + price + "]";
	}
}
```

- ProductDao
```java
package com.shaktish.spring.springorm.product.dao;

import java.util.List;

import com.shaktish.spring.springorm.product.entity.Product;

public interface ProductDao {
	int create(Product product);
	void update(Product product);
	void delete(Product product);
	Product find(int id);
	List<Product> findAll();
}

```
- ProductDaoImpl
```java
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
```

- Test
```java
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
		product.setId(1);
		product.setName("Realme");
		product.setPrice(18000);
		product.setDesc("Realme Rocks ");
//		productDao.create(product);
//		productDao.update(product);
//		productDao.delete(product);
//		Product result = productDao.find(2);
//		System.out.println(result);
		List<Product> productList = productDao.findAll();
		System.out.println(productList);		
	}

}
```
# Spring MVC
Spring MVC is used to design dynamic web applications. It internally uses three different design patterns 
- Front Controller 
- Handler Mapper 
- View Resolver 

Let's take look at how the lfow of Spring MVC looks like and the various components that are involved. 
 - When a request, a HTTP request comes from a client(1) the very first component that will handle it is the Dispatched Servlet which is an implementation of the front controller design pattern.  
- It stands at the front and it handles all the incoming requests.
- We configure this dispatched servlet in the web.xml of our web application which is the deployment descriptor. 
- The dispatcher servlet is from Spring framework. we ll not be writing any servlets, we ll simply use it and configure it in our web.xml, 
- once configure the dispatcher servlet will take the incoming request, uses a HandlerMapper, (this is from Spring) it internally calls the HandlerMapper which knows which controller class should be invoked depending on the url pattern
- Controller is a POJO class which we create and we mark it with a Sterotype annotation from Spring called Controller. Controller is the annotation. The controller class inside a controller class we will implement a method which will create a Model and View. 
    - Model Represents the data in our application  
    - View is the page displayed to the end user 
- At the end we return this ModelAndView to the dispatcher servlet 
- Dispatcher service will take the view name and it will invoke a View resolver 
- The View resolver takes the view name it will append a perfix and suffix to it
  - The perfix is the locaton of that view on the server and 
  - The suffix is the extension for the view 
  - This way controller is not coupled with a particular view 
  - For exmaple, we can have a view location on the server which could be WEB-INF page and tomrrow if we want to move it to a differnt location we can simple change it in the configuration.
  - Similary if we want to switch from a JSP to JSF tomorrow we can do that by simply changing the suffix in the configuration 
- Finally the view reoslver will return a view back to the complete view back to the dispatcher servlet 

### Sumamrize 
- The client request comes into the Dispatcher servlet, the Dispatcher servlet will use the HandlerMapper, invoke a controller.
- Controller will create a Model and View. Model is optional (Data might be there or might not be there for a particular request)
- A Controller should always return the name of the view. That view name will be given to the View Resolver 
- The view resolver will append a location which si the prefix and and extension which is the suffix. 
- The dispatcher servlet will then take that page, give it the model if there is model, that page will use the model and it will dispaly the end result to the client 
- View resolver 
	- prefix - view - suffix
	- views/ - hello - .jsp

### Refernce 
https://www.journaldev.com/14476/spring-mvc-example

## Spring MVC Example Eclipse Project Setup
Since it’s a web application and we want to use maven for dependencies management, first of all we have to create a dynamic web application and then convert it to a maven project. Below images show how to do this and get our project skeleton structure ready.
- Right click on the project explorer window and click on “New -> Dynamic Web Project” 
- Provide name as “spring-mvc-example” in the next popup page, rest of the things should not required to be changed.
- On next page, provide the source folder as “src/main/java”. You might have to remove “src” folder from the list before adding this.
- Next is the web module page, provide the context root of application as “spring-mvc-example” and make sure to check “Generate web.xml deployment descriptor” option.
- Click on Finish and you will have a new Dynamic Web Project in your eclipse project explorer.

### Converting Dynamic Web Project to Maven Project
- We want to use maven for easily manage our spring mvc dependencies. So let’s convert our web project to maven.
- Right click on the project and select “Configure -> Convert to Maven Project”.
- Next provide the pom.xml configurations as shown below.
  - Groupd id = com.shaktish.spring
  - Artifact id = springmvc
  - packagin name = Sprign MVC Example 
- Open pom.xml and add the below code 
<!-- POM.XML -->
<project xmlns="https://maven.apache.org/POM/4.0.0" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="https://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.journaldev.spring.mvc</groupId>
	<artifactId>spring-mvc-example</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>war</packaging>
	<name>Spring MVC Example</name>
	<description>Spring MVC Hello World Example</description>

	<!-- Add Spring Web and MVC dependencies -->
	<dependencies>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-webmvc</artifactId>
			<version>4.3.9.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-web</artifactId>
			<version>4.3.9.RELEASE</version>
		</dependency>
		<!-- Servlet -->
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>servlet-api</artifactId>
			<version>2.5</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>javax.servlet.jsp</groupId>
			<artifactId>jsp-api</artifactId>
			<version>2.1</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>jstl</artifactId>
			<version>1.2</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.6.1</version>
				<configuration>
					<source>1.8</source>
					<target>1.8</target>
				</configuration>
			</plugin>
			<plugin>
				<artifactId>maven-war-plugin</artifactId>
				<version>3.0.0</version>
				<configuration>
					<warSourceDirectory>WebContent</warSourceDirectory>
				</configuration>
			</plugin>
		</plugins>
		<finalName>${project.artifactId}</finalName> <!-- added to remove Version from WAR file -->
	</build>
</project>
```

## Spring MVC Application Creation Steps
We ll create the Spring MVC application in 5 steps 
- Spring MVC DispatcherServlet as Front Controller 
- Create the spring configuration under WEB-INF folder
- Configure the View Resolver 
- Create the Controller class
- Create the folder structure and view (jsp page)

### Step 1 : Configure the dispatcher servlet in the web.xml 
We have to add Spring MVC framework to our web application, for that we need to configure DispatcherServlet in web.xml as shown below.

- Add servlet
  - servelet-name = spring
  - servlet-class = org.springframework.web.servlet.DispatcherServlet
- Add servlet-mapping
  - servelet-name = spring
  - url-pattern = /

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xmlns="https://java.sun.com/xml/ns/javaee" xsi:schemaLocation="https://java.sun.com/xml/ns/javaee https://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" id="WebApp_ID" version="3.0">
  <display-name>spring-mvc-example</display-name>

	<!-- Add Spring MVC DispatcherServlet as front controller -->
	<servlet>
        <servlet-name>spring</servlet-name>
        <servlet-class>
                org.springframework.web.servlet.DispatcherServlet
        </servlet-class>
        <init-param>
       		<param-name>contextConfigLocation</param-name>
       		<param-value>/WEB-INF/spring-servlet.xml</param-value>
    		</init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>
 
    <servlet-mapping>
        <servlet-name>spring</servlet-name>
        <url-pattern>/</url-pattern> 
    </servlet-mapping>
    
 </web-app>
```

### Step 2 : Create the Spring Configuration file
Next step is to create spring bean configuration file spring-servlet.xml as shown below.

- Add the config.xml file under src/main/webapp/WEB=INF/
  - There is a convention we need to follow, the servlet name should be the name of the config.xml file 
  - name =  spring-servlet.xml

### Step 3 : Configure the View Resolver in Spring configuration file
- We will configure this as a bean and it s going to resolve prefix (location) and suffix (extension)
- Open spring-servlet.xml, add a new bean
  - class = "org.springframework.web.servlet.view.InternalResourceViewResolver"
  - name = "viewResolver"
  - property 
    - name="prefix"
    - value="/WEB-INF/views/"
  - property
    - name="suffix"
    - value= "jsp"
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:mvc="http://www.springframework.org/schema/mvc"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans     
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/mvc 
        http://www.springframework.org/schema/mvc/spring-mvc.xsd
        http://www.springframework.org/schema/context 
        http://www.springframework.org/schema/context/spring-context.xsd">
    <!-- DispatcherServlet Context: defines this servlet's request-processing 
        infrastructure -->

    <!-- Enables the Spring MVC @Controller programming model -->
    <mvc:annotation-driven/>
    <context:component-scan base-package="com.shaktish.spring.controller" />

    <!-- Resolves views selected for rendering by @Controllers to .jsp resources 
        in the /WEB-INF/views directory -->
    <bean 
        class="org.springframework.web.servlet.view.InternalResourceViewResolver">

        <property name="prefix" value="/WEB-INF/views/" />
        <property name="suffix" value=".jsp" />
    </bean>
</beans>

There are three important configurations.
- annotation-driven tells DispatcherServlet to look for Controller classes using @Controller annotation.
- context:component-scan tells DispatcherServlet where to look for controller classes.
- InternalResourceViewResolver bean configuration to specify location of view pages and suffix used. Controller class methods return name of the view page and then suffix is added to figure out the view page to use for rendering the response.

```
### Step 4 : Create the controller class 
- Create a class under > project > src/main/java
  - name = "HelloController"
  - Package = "com.shaktish.spring.controller"
- To make it a controller, we need to mark it a @Controller annotation
  - add it to HelloController 
- Add a method to HelloController 
  - Method = public ModelAndView 
  - import ModelAndViewfrom org.springframework.sterotype.Controller
  - add a name to ModalAndView 
    - modelAndView.setViewName("hello"), this s the .jsp filename u need to map 
    - we need to mark this method @RequestMapping coz we need to tell spring when this method should be invoked for which url  
    - @RequestMapping("/hello")
  - Enable the annotation in spring-servlet.xml 
    - provide the base-package
    - <context:component-scan base-package="com.shaktish.spring.controller"></context:component-scan>
```java
package com.shaktish.spring.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.shaktish.spring.dto.Employee;

@Controller
public class HelloController {
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
}

```

### Step 5 : Create the folder structure and view
- Create views folder under project > src > main > java > webapp > WEB-INF > 
- Create hello.jsp file under views folder 
```jsp
<html>
<body>
<%
	Object obj = (String) request.getAttribute("name");
	out.println(obj);
%>
	<h2>Hello World from Hello</h2>
</body>
</html>


<!-- getEmployees.jsp -->
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

<!-- employee.jsp -->
<html>
<body>
	<h2>Employee page</h2>
	
	<%=request.getAttribute("employeeObj") %>
</body>
</html>

```

## Sending data from UI to Controller 
There are two ways to send data from UI to controller 
- HTML Form
- Query Parameters 

### HTML Form 
When we submit html form data we can access it in Controller as an object. When we submit a form a spring container does 4 things 
- Reads all data by request.parameters 
- Converts appropriate java data type using intenger.double etc 
- Creates the Object
- Sets values 

Define User class 
```java
package com.shaktish.spring.dto;

public class User {
	private int id;
	private String name;
	private String email;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + "]";
	}
}

```
Define Controller class 
```java
// register 
@RequestMapping("/register") 
public ModelAndView registerPage () {
	ModelAndView modelAndView = new ModelAndView();
	modelAndView.setViewName("register");
	return modelAndView;	
}

// action : registerUser, view : registerSuccess
@RequestMapping(value="/registerUser", method =RequestMethod.POST) 
public ModelAndView registerUser (@ModelAttribute("user") User user) {
	System.out.println(user);
	ModelAndView modelAndView = new ModelAndView();
	modelAndView.setViewName("registerSuccess");
	modelAndView.addObject("user", user);
	return modelAndView;	
}
```
Define UserReg.jsp 
```html
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Registration</title>
</head>
<body>
	<form action="registerUser" method="post">
		<pre>
			Id : <input type="text" name="id" />
			Name : <input type="text" name="name" />
			Email : <input type="text" name="email" />
		</pre>
		<input type="submit" />
	</form>
	
</body>
</html>
```
## ModelMap and String for ModelAndView
- modelAndView is tightly coupled that is our controller methods evne though we dont use the model or data in few scenarios, we still have to create the modelAndView object, that is why in later version of Spring. We have ModelMap and ViewName as a simple string.
- when we don't have any data to send to the ui we can use simple use string and return jsp file name
```java

// @RequestMapping("/register") 
// public ModelAndView registerPage () {
// 	ModelAndView modelAndView = new ModelAndView();
// 	modelAndView.setViewName("register");
// 	return modelAndView;	
// }

@RequestMapping("/register") 
	public String registerPage () {		
		return "register";	
	}	
```
- When we have data to send to UI, we can use modelMap and pass the data 
```java 
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
```

## Spring MVC Summary
Spring MVC uses three differnt patterns 
- Front Controller
  - When a request comes in from client, it first reaches the FrontController which is a dispatcher servlet that we ll configure in the web.xml of our application
  - The dispatcher servlet will forward this request to HandlerMapper
- HandlerMapper 
  - Handler mapper is responsible for mapping the incoming request to a Controller class that we create.
  - We mark these classes with @Controller annotations.
  - The handlerMapper uses the URL in the request and it maps it to the appropriate controller
  - When we define a controller, we also do the RequestMapping on the methods in side that controller 
  - Finally it returns a ModelAndView, Model represent the data and view represents the ui which response should be sent.
  - Controller returns ModelAndView back to the FrontCtonroller which is our dispatcher-servlet
  - The dispatcher servlet will then invoke the ViewResolver which is the component which is reponsible for adding a location and the extension for the view taht the Controller returns 
  - Once the FrontController has the complete view, it will generate the view and send the response back to the end client 
- ViewResolver


### Diagram
- Client Request -> FrontController  -> Controller (HandlerMapper) 
	- Controller - (ModelAndView/ModelMap) -> FrontController -> View Resolver -> FrontController -> Client Response   


# Spring MVC and ORM
In this section, we ll configure MVC and ORM together 
- Lets create the user table in mysql
```sql
use mydb;
create table user(id int, name varchar(20), email varchar(30));
select * from user;
```

## Create the Maven Project
Refer [Spring MVC](#spring-mvc) to create the project
- apart from springmvc dependencies we ll add ORM dependencies
- and also we ll add hibnerate config bean in .xml 

```xml 
<!-- pom.xml -->
<project xmlns="https://maven.apache.org/POM/4.0.0" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="https://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.journaldev.spring.mvc</groupId>
	<artifactId>spring-mvc-example</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>war</packaging>
	<name>SpringMVCORM</name>
	<description>Spring MVC Hello World Example</description>
	
	<properties>
		<springframework.version>4.3.6.RELEASE</springframework.version>
		<mysql.version>5.1.6</mysql.version>
	</properties>
	Q-
	<!-- Add Spring Web and MVC dependencies -->
	<dependencies>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-webmvc</artifactId>
			<version>4.3.9.RELEASE</version>
		</dependency>
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-web</artifactId>
			<version>4.3.9.RELEASE</version>
		</dependency>
		<!-- Servlet -->
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>servlet-api</artifactId>
			<version>2.5</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>javax.servlet.jsp</groupId>
			<artifactId>jsp-api</artifactId>
			<version>2.1</version>
			<scope>provided</scope>
		</dependency>
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>jstl</artifactId>
			<version>1.2</version>
		</dependency>
		<!-- mysql, springorm, hibernate-core -->
		<dependency>
		    <groupId>mysql</groupId>
		    <artifactId>mysql-connector-java</artifactId>
		    <version>${mysql.version}</version>
		</dependency>					
		<dependency>
			<groupId>org.springframework</groupId>
			<artifactId>spring-orm</artifactId>
			<version>${springframework.version}</version>
		</dependency>	
		<dependency>
		    <groupId>org.hibernate</groupId>
		    <artifactId>hibernate-core</artifactId>
		    <version>5.2.5.Final</version>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<artifactId>maven-compiler-plugin</artifactId>
				<version>3.6.1</version>
				<configuration>
					<source>1.8</source>
					<target>1.8</target>
				</configuration>
			</plugin>
			<plugin>
				<artifactId>maven-war-plugin</artifactId>
				<version>3.0.0</version>
				<configuration>
					<warSourceDirectory>WebContent</warSourceDirectory>
				</configuration>
			</plugin>
		</plugins>
		<finalName>${project.artifactId}</finalName> <!-- added to remove Version from WAR file -->
	</build>
</project>
```
dispatcher-servlet.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:mvc="http://www.springframework.org/schema/mvc"
    xmlns:context="http://www.springframework.org/schema/context"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:p="http://www.springframework.org/schema/p"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans     
        http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/mvc 
        http://www.springframework.org/schema/mvc/spring-mvc.xsd
        http://www.springframework.org/schema/context 
        http://www.springframework.org/schema/context/spring-context.xsd">
    <!-- DispatcherServlet Context: defines this servlet's request-processing 
        infrastructure -->

    <!-- Enables the Spring MVC @Controller programming model -->
    <mvc:annotation-driven/>
    <context:component-scan base-package="com.shaktish.spring.springmvcorm.user" />

    <!-- Resolves views selected for rendering by @Controllers to .jsp resources 
        in the /WEB-INF/views directory -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/views/" />
        <property name="suffix" value=".jsp" />
    </bean>
	
	<!-- JDBC Configuration starts -->
	<bean class="org.springframework.jdbc.datasource.DriverManagerDataSource" name="dataSource" p:driverClassName=" com.mysql.jdbc.Driver" p:url="jdbc:mysql://localhost/mydb" p:username="root" p:password="test" />
	<bean name="sessionFactory" class="org.springframework.orm.hibernate5.LocalSessionFactoryBean" p:dataSource-ref="dataSource">
		<property name="hibernateProperties">
			<props>
				<prop key="hibernate.dialect">org.hibernate.dialect.MySQLDialect</prop>
				<prop key="hibernate.show_sql">true</prop>
			</props>
		</property>
		<property name="annotatedClasses">
			<list>
				<value>com.shaktish.spring.springmvcorm.user.entity.User</value>
			</list>
		</property>
	</bean>
	<bean name="hibernateTemplate" class="org.springframework.orm.hibernate5.HibernateTemplate" p:sessionFactory-ref="sessionFactory" />
	<bean name="transactionManager" class="org.springframework.orm.hibernate5.HibernateTransactionManager" p:sessionFactory-ref="sessionFactory" />
	<!-- JDBC Configuration ends -->
</beans>
```

## Walk thru of building the app 
- Create a Model that represent Database table
  - marked as @Entity ( hibernate annotation )
- Layers of the application 
  - Controller	->	Services			-	DAL (DataAccessLayer)
  - 			-	UserService			-	UserDao					-	HibernateTemplate
  - 			-	UserServiceImpl		-	UserDaoImpl


### Create User Model Entity

```java
package com.shaktish.spring.springmvcorm.user.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	private int id;
	private String name;
	private String email;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + "]";
	}

}

```

### Create the DataAccessLayer and Controller
- UserDao.java
```java
package com.shaktish.spring.springmvcorm.user.dao;

public interface UserDao {
	
}
```
- UserDaoImpl.java
```java
package com.shaktish.spring.springmvcorm.user.dao.impl;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.shaktish.spring.springmvcorm.user.dao.UserDao;

@Repository
public class UserDaoImpl implements UserDao {
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}
}

```
- UserService.java
```java
package com.shaktish.spring.springmvcorm.user.services;

public interface UserService {

}

```
- UserServiceImpl.java
```java
package com.shaktish.spring.springmvcorm.user.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shaktish.spring.springmvcorm.user.dao.UserDao;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao dao;

	public UserDao getDao() {
		return dao;
	}

	public void setDao(UserDao dao) {
		this.dao = dao;
	}
}
```
- UserController.java
```java
package com.shaktish.spring.springmvcorm.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.shaktish.spring.springmvcorm.user.services.UserService;

@Controller
public class UserController {
	@Autowired
	private
	UserService service;

	public UserService getService() {
		return service;
	}

	public void setService(UserService service) {
		this.service = service;
	}
}
```


### Implement the DAO and Service methods
- In UserDao, add create method
```java
int create(User user);
```
- In UserDaoImpl, add the unimplemented Method 
```java
@Override
public int create(User user) {
	Integer result = (Integer) hibernateTemplate.save(user);
	return result;
}

// Complete code 
package com.shaktish.spring.springmvcorm.user.dao.impl;
import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.shaktish.spring.springmvcorm.user.dao.UserDao;
import com.shaktish.spring.springmvcorm.user.entity.User;

@Repository
public class UserDaoImpl implements UserDao {
	@Autowired
	private HibernateTemplate hibernateTemplate;

	public HibernateTemplate getHibernateTemplate() {
		return hibernateTemplate;
	}

	public void setHibernateTemplate(HibernateTemplate hibernateTemplate) {
		this.hibernateTemplate = hibernateTemplate;
	}

	@Override
	public int create(User user) {
		Integer result = (Integer) hibernateTemplate.save(user);
		return result;
	}
}
```
- In UserServiceDao, add the save method
```java
package com.shaktish.spring.springmvcorm.user.services;

import com.shaktish.spring.springmvcorm.user.entity.User;

public interface UserService {
	int save(User user);
}

```
- In UserServiceDaoImpl add the unimplemented methods 
```java
@Override
@Transactional
public int save(User user) {
	// Business logic
	return dao.create(user);
}

// Complete code 
package com.shaktish.spring.springmvcorm.user.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.shaktish.spring.springmvcorm.user.dao.UserDao;
import com.shaktish.spring.springmvcorm.user.entity.User;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao dao;

	public UserDao getDao() {
		return dao;
	}

	public void setDao(UserDao dao) {
		this.dao = dao;
	}

	@Override
	@Transactional
	public int save(User user) {
		// Business logic
		return dao.create(user);
	}
}

```

### Implement the Controller methods 
- add RegisterPage method and mark it with @RequestMapping annotation with "/register" url
- add registerUser method and mark it with @RequestMapping annotation with "/registerUser" url
  - with registerUser param pass @ModelAttribute("user") User user, ModelMap model
  - invoke save method from service
    - create a local varaible result and assign it the save method. it will return an id when register use is success
  - add response using model.addAttribute("result", "User created with id " + result);
  - finally return "register" page




select o.order_date, o.order_id, c.first_name, s.name AS shipperName, os.name as Status
from orders o 
JOIN customers c 
ON o.customer_id = c.customer_id
JOIN shippers s 
ON o.shipper_id = o.shipper_id
JOIN order_statuses os
ON o.status = os.order_status_id
ORDER BY o.order_id;

select * from customers;
SELECT * FROM products;
SELECT * FROM order_items;
SELECT * FROM orders;
SELECT * FROM order_statuses;
SELECT * FROM shippers;

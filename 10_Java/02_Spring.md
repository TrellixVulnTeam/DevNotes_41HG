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
```typeScript
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
By default Annotation support is disabled, we need to enable it by using context, <context:annotation-config />

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
  <bean class="com.shaktish.spring.springcore.lifeCycle.annotations.Patient" name="patient" p:id="123"/>
	<context:annotation-config/>	
```


# Constructor Injection
Spring container uses a parameterized constructor instead of a setter method when we use Constructor injection
- we do that using constructor arg, we use multiple constructor-arg depending on no of parameters we have on our class constructor 
```xml
	<bean>
		<constructor-arg>
		<constructor-arg>
		<constructor-arg>
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
- we simple confiure our beans todo auto wiring

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
- Instead of using XML configuartion we can use @Component to mark our java classes, Sprin will automatically create the object.
#### <context:component-scan base-package ="com.app.beans"/>
- To tell the spring container about the packages to scan for @Component classes, in the XML configuration we use <context:component-scan base-package ="com.app.beans (class-path-here)"/>
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
- Java App --SQL-- DB

By default 
- we create a connection, 
- create a statement, 
- set the paramter to the perpared statement, 
- Execute it and process the result, 

This code is repeated across our classes in the application. Spring simplifies JDBC by JDBC Template 
-  JDBC Template is a combination of JDBC Technology + Template Design Pattern
-  Template carries the boiler template 

JDBC template depends on dataSource javax.sql.DataSource(l)




- [Init](#init)
- [What is Java](#what-is-java)
  - [Origin](#origin)
- [Java Features](#java-features)
  - [Simple](#simple)
  - [Object Oriented](#object-oriented)
  - [Robust](#robust)
  - [Platform Independent](#platform-independent)
  - [Secure](#secure)
  - [Multi Threading](#multi-threading)
  - [Architectural Neutral](#architectural-neutral)
  - [Portable](#portable)
  - [High Performance](#high-performance)
  - [Distributed](#distributed)
- [Java Environmental Setup](#java-environmental-setup)
  - [Installing JDK](#installing-jdk)
    - [Checking if Java is installed](#checking-if-java-is-installed)
- [Java Internals](#java-internals)
  - [Java Virtual Machine (JVM)](#java-virtual-machine-jvm)
  - [Java Runtime Environment (JRE)](#java-runtime-environment-jre)
  - [Java development kit (JDK)](#java-development-kit-jdk)
- [Java Working](#java-working)
- [Modifiers in Java](#modifiers-in-java)
- [Datatypes in java](#datatypes-in-java)
- [Opeartors](#opeartors)
- [Control Statements in Java](#control-statements-in-java)
- [Methods in Java](#methods-in-java)
- [Arrays in Java](#arrays-in-java)
- [Strings](#strings)
- [Classes and Objects](#classes-and-objects)
- [Java Naming Conventions](#java-naming-conventions)
- [Types of variables](#types-of-variables)
- [Constructor](#constructor)
- [Java static keyword](#java-static-keyword)
- [OOPS concepts](#oops-concepts)
- [Interface](#interface)
- [What is a package](#what-is-a-package)
- [Access Modifiers](#access-modifiers)
- [Access package from another package](#access-package-from-another-package)
- [Regular Expression](#regular-expression)
- [Exception](#exception)
- [Serialization](#serialization)
- [Generics](#generics)
  - [Java Editions](#java-editions)
  - [Three main things in Java](#three-main-things-in-java)
- [Java Syntax](#java-syntax)
- [Java Variables](#java-variables)
  - [Declaring (Creating) Variables](#declaring-creating-variables)
  - [Example](#example)
- [Data types](#data-types)
  - [Non-Primitive Data Types](#non-primitive-data-types)
    - [Arrays](#arrays)
    - [String](#string)
- [Java Operators](#java-operators)
- [Java Modifiers](#java-modifiers)
  - [Access Modifiers](#access-modifiers-1)
  - [Non-Access Modifiers](#non-access-modifiers)
  - [Final](#final)
  - [Static](#static)
- [Java Methods](#java-methods)
  - [Java Method Overlaping](#java-method-overlaping)
    - [Why method overlapping](#why-method-overlapping)


# Init
Prepared this doc from 
```javascript
let doc = [
  {
    name : "Edurkea",
    link :  "https://www.youtube.com/watch?v=hBh_CC5y8-s",
  },
  {
    name : "Simplilearn",
    link :  "https://www.youtube.com/watch?v=Ae-r8hsbPUo",
  },
  {
    name : "studytonight",
    link : "https://www.studytonight.com/java/overview-of-java.php"
  }
]
```
# What is Java
Java is a programming language, that enforces an object-oriented programming model 

- Java is a platform-independent language because it has runtime environment i.e JRE and API. Here platform means a hardware or software environment in which anapplication runs. 
- Java codes are compiled into byte code or machine-independent code. This byte code is run on JVM (Java Virtual Machine).
- Java can be used to create complete applications that may run on a single compluter or can be distributed among servers and clients in a network 


## Origin 
- First released by Sun Microsystem  in 1995.
- It is owned by Oracle, and more than 3 billion devices run Java.
- Created by a team lead by James gosling
- How did Java Name came
  - James gosling was looking at a oak tree then he named it as Oak, at last he drank his fav coffee that is Java. So he kept that name and also the logo has coffe logo
  - Oak
  - Green
  - Java coffe 

# Java Features
The prime reason behind creation of Java was to bring portability and security feature into a computer language.

## Simple
Java is easy to learn and its syntax is quite simple, clean and easy to understand

## Object Oriented
In java, everything is an object which has some data and behaviour. Java can be easily extended as it is based on Object Model. Following are some basic concept of OOP's.
- Object
- Class
- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

## Robust
Java makes an effort to eliminate error prone codes by emphasizing mainly on compile time error checking and runtime checking

But the main areas which Java improved were Memory Management and mishandled Exceptions by introducing automatic Garbage Collector and Exception Handling.

## Platform Independent
Unlike other programming languages such as C, C++ etc which are compiled into platform specific machines. Java is guaranteed to be write-once, run-anywhere language.

On compilation Java program is compiled into bytecode. This bytecode is platform independent and can be run on any machine, plus this bytecode format also provide security. Any machine with Java Runtime Environment can run Java Programs.

![alt text](https://github.com/shaktish/DevNotes/blob/master/10_Java/images/javaCore/01-platformIndependent.png?raw=true "01-platformIndependent")

## Secure 
Java program always runs in Java runtime environment with almost null interaction with system OS, hence it is more secure.

##  Multi Threading
Java multithreading feature makes it possible to write program that can do many tasks simultaneously. Benefit of multithreading is that it utilizes same memory and other resources to execute multiple threads at the same time, like While typing, grammatical errors are checked along.

## Architectural Neutral
Compiler generates bytecodes, which have nothing to do with a particular computer architecture, hence a Java program is easy to intrepret on any machine.

## Portable
Java Byte code can be carried to any platform. No implementation dependent features. Everything related to storage is predefined, example: size of primitive data types

## High Performance
Java is an interpreted language, so it will never be as fast as a compiled language like C or C++. But, Java enables high performance with the use of just-in-time compiler.

## Distributed

Java is also a distributed language. Programs can be designed to run on computer networks. Java has a special class library for communicating using TCP/IP protocols. Creating network connections is very much easy in Java as compared to C/C++.

# Java Environmental Setup 
We need JDK (Java development kit) and a IDE (Integrated Development Environment)
- JDK is a software that is used to create JAVA Programs 
- IDE is a Code Editor 

## Installing JDK
- After downloading and installing  JDK based on ur OS
- You have to set permanent path of JDK in your system via environment variable 
  - MyComputer -> Properties -> Advanced System settings -> Environment Variables 
  - System Variables -> Find Path Variable -> Add the path 
  - "C:\Program Files\Amazon Corretto\jdk11.0.10_9\bin"
- Basically it tells OS that you have executables within this category 
- Install a IDE, either IntelliJ or Eclipse 

### Checking if Java is installed
- By entering the blow command in cmd
  - ``` java -version ```
- If installed, you will get the following log
  - ``` Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode) ```

# Java Internals 
## Java Virtual Machine (JVM)
- Java Virutal Machine is the virtual machine that runs the Jave bytecodes
- The JVM does not understand Java source code, thats why you complie your .java files to obtain .class files that contain the bytecodes understood by the JVM.
  - JavaCode (.java) -> JavacCompiler -> ByteCode(.class) -> JVM 
  - JVM - OS[windows, ubuntu, mac]
- The same bytecodes give the same results makes Java Platform Independent language (Write once, run anywhere)

## Java Runtime Environment (JRE)
JRE provides the libraries, the Java Virtual Machine and other components to run applets and application written in the Java programming langauge

The JRE does nto contain tools and utilities such as compliers or debuggers for developing applets and application 

JRE Has
- JVM
- Set of libraries like rt.jar 
- other files 

## Java development kit (JDK)
JDK is a superset of the JRE and contains everything that is the JRE, plus tools such as the compliers and debuggers necessary for developing applets and applications 

- JDK = JRE + Development Tools
- JDK = (JVM + Set of libraries + Other Additional files) + Development Tools 

JDK has
- JRE
- Development tools for expample javac, java etc 

Notes
- To run the class file you need JRE but if you are developer you would need JDK 

# Java Working 

Complie-time-Environment
- Java Source(.java) -> Java Complier-> Java ByteCode.class -> Run-time Environment (OS -Windows, Linux, Mac)
 
![alt text](https://github.com/shaktish/DevNotes/blob/master/10_Java/images/javaCore/02-javaWorking-complier.png?raw=true "02-javaWorking-compiler")

Run-time-Environment
- class loader Bytecode verifier <-> Java Class Libraries
        /                 \
- Java Interperter    - Just in time Complier >

![alt text](https://github.com/shaktish/DevNotes/blob/master/10_Java/images/javaCore/02-javaWorking-complier-runtime.png?raw=true "02-javaWorking-compiler-runtime")


# Modifiers in Java

# Datatypes in java

# Opeartors 

# Control Statements in Java

# Methods in Java

# Arrays in Java 

# Strings 

# Classes and Objects

# Java Naming Conventions 

# Types of variables 

# Constructor 

# Java static keyword 

# OOPS concepts 

# Interface 

# What is a package 

# Access Modifiers 

# Access package from another package

# Regular Expression 

# Exception  

# Serialization 

# Generics


## Java Editions
- SE (STANDARD EDITION) - developers 
- EE (ENTERPRISE EDITION) - company
- ME (MICRO EDITION) - mobiles
- JAVA CARD (smart cards) - smart watch/ cards 

## Three main things in Java
- PACKAGE
  - assume it as container
- CLASS
  - assume it as section 
- METHODS
  - staright forward 

# Java Syntax 
- Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.
- The name of the java file must match the class name.

```java
package com.codewithshaktish
 
public class Main {
  public static void main (string[]args) {
    // write your code 
  }
}
```

# Java Variables
Variables are containers for storing data values. In Java, there are different types of variables, for example:

- String - stores text, such as "Hello". String values are surrounded by double quotes
- int - stores integers (whole numbers), without decimals, such as 123 or -123
- float - stores floating point numbers, with decimals, such as 19.99 or -19.99
- char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes
- boolean - stores values with two states: true or false

## Declaring (Creating) Variables
- Syntax
  - ``` type variableName = value; ```
- Example
```JAVA 
int myNum = 5;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
String myText = "Hello";
```
## Example

```JAVA
// # Creataing a number
int number = 10 

// datatype : int
// variable : number 
// value    : 10

// # Print in java console ; 
System.out.print(number);
// # to print each in newline; 
System.out.println(number);
```

# Data types

There are two categories
- Primitive data 
  - Numeric
    - Integer
      - byte
      - int
      - short
      - long
    - Floating point
      - double
      - float
  - Non-numeric 
    - Character
    - Boolean 
- Non-Primitive Data Types / Reference types
  - String,
  - Arrays,
  - Classes,

A primitive data type specifies the size and type of variable values, and it has no additional methods.
- There are eight primitive data types in Java:

![alt text](https://github.com/shaktish/DevNotes/blob/master/10_Java/images/java-primitive-datatype.jpg?raw=true "java-primitive-datatype")



## Non-Primitive Data Types
The main difference between primitive and non-primitive data types are:
- Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for String).
- Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.
- A primitive type has always a value, while non-primitive types can be null.
- A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.
- The size of a primitive type depends on the data type, while non-primitive types have all the same size.

### Arrays 
- Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
- Creation Example
  - ``` String[] cars = {"Volvo", "BMW", "Ford", "Mazda"}; ```
- Accesing Array
  - Accessing whole array
    - Import Arrays Utils to print whole array 
      - ``` import java.util.Arrays;```
    - ``` System.out.println(Arrays.toString(cars)); ```
  - Accessing Single element in Array
    - ``` System.out.println(cars[0]);  ```
- Get Array length
  - ``` System.out.println(names.length); ```
- Loop an array using for Loop
```java
String[] names = {"shaktish", "proh", "annz"};
for(int i =0; i < names.length; i++) {
    System.out.println(names[i]);
}
```
### String
- A String variable contains a collection of characters surrounded by double quotes:
- Creating a string variable 
  - ``` String greeting = "Hello"; ```
- Get String Length
  - ``` System.out.println(greeting.length()); ```
- There are many string methods available, for example toUpperCase() and toLowerCase():
  - ``` System.out.println(greeting.toUpperCase()); ```


# Java Operators
- Operators are used to perform operations on variables and values.
- Java divides the operators into the following groups:
  - Arithmetic operators
    - Arithmetic operators are used to perform common mathematical operations.
  - Assignment operators
    - Assignment operators are used to assign values to variables.
  - Comparison operators
    - Comparison operators are used to compare two values:
  - Logical operators
    - Logical operators are used to determine the logic between variables or values:
  - Bitwise operators
    - Bitwise operators are used to perform binary logic with the bits of an integer or long integer.

# Java Modifiers 
- The public keyword is an access modifier, meaning that it is used to set the access level for classes, attributes, methods and constructors.
- We divide modifiers into two groups:
  - Access Modifiers - controls the access level
  - Non-Access Modifiers - do not control access level, but provides other functionality

## Access Modifiers
For classes, you can use either public or default:
- public 
  - The class is accessible by any other class	
- default
  - The class is only accessible by classes in the same package. This is used when you don't specify a modifier.

For attributes, methods and constructors, you can use the one of the following:
- public	
  - The code is accessible for all classes
- private	
  - The code is only accessible within the declared class
- default	
  - The code is only accessible in the same package. This is used when you don't specify a modifier. 
- protected	
  - The code is accessible in the same package and subclasses.

## Non-Access Modifiers
For classes, you can use either final or abstract:
- final 	
  - The class cannot be inherited by other classes (You will learn more about inheritance in the Inheritance chapter)
- abstract	
  - The class cannot be used to create objects (To access an abstract class, it must be inherited from another class. 

For attributes and methods, you can use the one of the following:
- final	
  - Attributes and methods cannot be overridden/modified
- static	
  - Attributes and methods belongs to the class, rather than an object
- abstract	
  - Can only be used in an abstract class, and can only be used on methods. The method does not have a body, for example abstract void run();. The body is provided by the subclass (inherited from). 
- transient	
  - Attributes and methods are skipped when serializing the object containing them
- synchronized	
  - Methods can only be accessed by one thread at a time
- volatile	
  - The value of an attribute is not cached thread-locally, and is always read from the "main memory"

## Final
If you don't want the ability to override existing attribute values, declare attributes as final:
- ``` final int x = 10; ```

## Static
A static method means that it can be accessed without creating an object of the class, unlike public:


# Java Methods
## Java Method Overlaping 
- Method overloading is a feature that allows us to have more than one method with same name. so long as we use differnt parameters
- It is the ability to create multiple methods of the same name with differnet implementations
- Calls to an overloaded method will runa specific implementation of that method
- Its bad practive to write three methods with different names to handle a function
```java
public static int sumTwoNumbers (int a, int b) {
  return a + b;
}

public static int sumThreeNumbers (int a, int b, int c) {
  return a + b + c;
}
```
- Method overloading exmaple
- With method overloading we endup with 3 methosd but all sharing the same method name. Easier to remember
```java
public static int sum (int a, int b) {
  return a + b;
}

public static int sum (int a, int b, int c) {
  return a + b + c;
}
```
- The printIn method is a great example of method overloading in the java language.
- There are actually 10 methods with the name printIn.
- We can prtin an integer, double, string and so on.. 
``` java
public static voide main (String [] args) {
  System.out.printIn("Hello!");
  System.out.printIn(5);
  System.out.printIn(10.75);
}
```

### Why method overlapping
- It improved code readability and re-usablilty
- It is easier to remember one method names instead of remembering multiple names.
- Achieves consistency in maing. One name ofr methods that are commonly used for example println.
- Overloaded methods give programmers the flexivility to call a similar method with different types of data. 

- [Java](#java)
  - [Installation](#installation)
    - [Check if already installed](#check-if-already-installed)
- [Java insides ?](#java-insides-)
  - [How java code gets executed](#how-java-code-gets-executed)
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
  - [Access Modifiers](#access-modifiers)
  - [Non-Access Modifiers](#non-access-modifiers)
  - [Final](#final)
  - [Static](#static)


# Java
- Java is a popular programming language, created in 1995.
- It is owned by Oracle, and more than 3 billion devices run Java.
- Developed by James gosling
- How did Java Name came
  - James gosling was look at a oak tree then he names it as Oak, at last he drank his fav coffee tat is Java. So he kept that name and also the logo has coffe logo
  - Oak
  - Green
  - Java coffe 

## Installation
We need 
- JDK (Java development kit)
  - It's the software that is used to create JAVA Programs 
- IDE (Integrated Development Environment)
  - We are going to use INTELLIJ

### Check if already installed
- By entering the blow command in cmd
  - ``` java -version ```
- If installed, you will get the following log
  - ``` Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode) ```


# Java insides ?
Jave program has .java extension 

## How java code gets executed 
- To make java programs Platform independent,  Java uses it's complier to complie .java file to .class file
- with .class file you can use it other platforms 

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

```JAVA
package com.codewithshaktish
 
public class Main {
  public state voide main (string[]args) {
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
  - ``` type variable = value; ```
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
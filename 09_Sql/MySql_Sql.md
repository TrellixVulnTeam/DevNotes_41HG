SQL for Beginners: Learn SQL using MySQL and Database Design
https://www.udemy.com/course/sql-for-beginners-course/

- [Section 1 - SQL Introduction](#section-1---sql-introduction)
  - [What is a Database](#what-is-a-database)
  - [What is SQL?](#what-is-sql)
  - [What is MySQL?](#what-is-mysql)
  - [What is an RDBMS ?](#what-is-an-rdbms-)
  - [Introduction to Database - Creating Databases](#introduction-to-database---creating-databases)
- [Section 2 - Data Definition Language](#section-2---data-definition-language)
  - [Datatypes](#datatypes)
    - [Numeric](#numeric)
    - [Non-Numeric Data Types](#non-numeric-data-types)
    - [Data and Time types](#data-and-time-types)
  - [Primary and Foreign keys](#primary-and-foreign-keys)
    - [PRIMARY KEY](#primary-key)
    - [FOREIGN KEY](#foreign-key)
  - [Creating Tables](#creating-tables)
  - [Modifying Tables](#modifying-tables)
  - [Deleting Tables](#deleting-tables)
  - [Deleting all data from Tables](#deleting-all-data-from-tables)
- [Section 3 - More On Alter Table](#section-3---more-on-alter-table)
  - [Creating our Test database and tables](#creating-our-test-database-and-tables)
  - [Add and Remove Primary key](#add-and-remove-primary-key)
  - [Add and remove Foreign keys](#add-and-remove-foreign-keys)
  - [Add a Unique constraint](#add-a-unique-constraint)
  - [Change a columns name](#change-a-columns-name)
  - [Change a columns data type](#change-a-columns-data-type)
- [Section 3 - Data Manipulation Language](#section-3---data-manipulation-language)
  - [Insert Data into Tables](#insert-data-into-tables)
  - [Update Data in a table](#update-data-in-a-table)
  - [Delete data from a table](#delete-data-from-a-table)
- [Section 4 - Selecting from a Table](#section-4---selecting-from-a-table)
  - [How to retrieve data from a table using the SELECT command](#how-to-retrieve-data-from-a-table-using-the-select-command)
  - [Adding WHERE clauses to filter your query](#adding-where-clauses-to-filter-your-query)
  - [How to use the IN, BETWEEN and LIKE commands](#how-to-use-the-in-between-and-like-commands)
  - [Null Values](#null-values)
  - [IN, NOT IN](#in-not-in)
  - [Between](#between)
  - [Like](#like)
  - [How to order your result set by column](#how-to-order-your-result-set-by-column)
  - [Distinct](#distinct)
  - [Limit, Offset](#limit-offset)
  - [Column name alias](#column-name-alias)
- [Section 4 - Selecting From Multiple Tables](#section-4---selecting-from-multiple-tables)
  - [What is a Join](#what-is-a-join)
  - [INNER JOIN](#inner-join)
  - [LEFT JOIN || RIGHT JOIN](#left-join--right-join)
  - [Joining more than two tables](#joining-more-than-two-tables)
- [Section 5 - Database Design](#section-5---database-design)
  - [Normalization](#normalization)
    - [Useful Links](#useful-links)
    - [First Normal Form (1NF)](#first-normal-form-1nf)
    - [Second Normal Form (2NF)](#second-normal-form-2nf)
    - [Third Normal Form (3NF)](#third-normal-form-3nf)
    - [BOYCEE CODD Normal form](#boycee-codd-normal-form)
    - [Fourth Normal form (4NF)](#fourth-normal-form-4nf)
  - [What are relationships](#what-are-relationships)
    - [One to One Relationship](#one-to-one-relationship)
    - [One to Many Relationship](#one-to-many-relationship)
    - [Many to Many Relationship](#many-to-many-relationship)
  - [Constraints](#constraints)
- [Section 6 - Creating a Cinema Booking System Database](#section-6---creating-a-cinema-booking-system-database)
  - [DB Schema](#db-schema)
    - [Creating Films Table](#creating-films-table)
    - [Creating Customers Table](#creating-customers-table)
    - [Creating Rooms Table](#creating-rooms-table)
    - [Creating Screening Table](#creating-screening-table)
    - [Creating seats table](#creating-seats-table)
    - [Creating bookings table](#creating-bookings-table)
    - [Creating reserved_seats table](#creating-reserved_seats-table)
  - [Insert the Data](#insert-the-data)
- [Section 7 - Aggregate Functions](#section-7---aggregate-functions)
  - [Aggregate functions](#aggregate-functions)
    - [COUNT](#count)
    - [SUM](#sum)
    - [MIN MAX](#min-max)
    - [AVERAGE](#average)
  - [Grouping Data](#grouping-data)
    - [Having clause](#having-clause)
- [Section 8 - Subqueries](#section-8---subqueries)
  - [What are Subqueries are](#what-are-subqueries-are)
    - [Non-correlated subquery](#non-correlated-subquery)
    - [Correlated subquery](#correlated-subquery)
    - [Exercise](#exercise)


# Section 1 - SQL Introduction
## What is a Database 
Database is an organised collection of information/data
Example : Yellow Book or Table of contents in a book  

- To interact with the data held in a database, Database systems and sql come in.
  - Allows us to access and interact with the data


## What is SQL?
Structured Query Language 
It is a standard language used to communicate with databases 
SQL is used to perform tasks on a database 
- CREATING, UPDATING, RETREIVING AND DELETING 
``` SELECT * FROM customers; ```

## What is MySQL?
MySQL is a Relational Database Management System
Provides a UI for us to access and interact with the database 

RDMS
- MySQL
- PostgreSQL
- SQL Server
- Oracle 

## What is an RDBMS ?
A relational database is a collection of data organised into tables 
Tables contain columns of data categories and rows with particular instances of that data category 

id-firstName-lastName-gender
1-chris-martin-m
2-Emma-Law-f
3-Mark-Watkins-m

The whole point of relational databases is that the tables held within the database can be linked together or they share a relation 


## Introduction to Database - Creating Databases 
SHOW DATABASES 
- To show all the databases we have created 

CREATE DATABASE test;
- To create a database 

USE TEST
- to use the database

SHOW TABLES
- lists all the tables in a database 

DROP DATABASE test
- removes the database 


# Section 2 - Data Definition Language
 DDL is subsection of SQL which deals with database objects such as tables and views, in this section we are going to look at tables 

We will create a database fora  coffee shop which will the following tables
- Products
- Customers
- Orders

## Datatypes
When you are creating tables, we have to define data type of each column, we are gonna see the common/important datatypes

### Numeric
INT : Whole numbers
- USAGE : Age || 123
FLOAT (M,D) : Decimal numbers (approximate)
- USAGE : Height 1.78meters 
- if you want to store 1.78 then it's going to be length 3, so M will be 3 and D will be 2 
DECIMAL (M,D) : Decimal numbers (precise)
- USAGE : Price columns 
- Similar to float, but float is approximate Deciaml is precise 
- For float it will include rounding 

### Non-Numeric Data Types
CHAR(N) : Fixed length character
VARCHAR(N) : Varying length character
ENUM('M', 'F') : Values from a defined list 
BOOLEAN : True or False values 

### Data and Time types
DATA : Data (YYYY-MM-DD)
- USAGE : DOB
DATETIME : Data and the time (YYYY-MM-DD HH-MM-SS)
- USAGE : Order placed data and time 
TIME : Time (HHH-MM-SS)
- It can be used for the time btw two events.
- If two events took place more than 100 hours btw thenyou can use the time datatype 
YEAR : Year (YYYY)
- USAGE : Film Relase 

## Primary and Foreign keys

### PRIMARY KEY
- A primary key is a column or set of columns which uniquely identifiesa record within a table 
- A primary key must be unique 
- A primary key cannot be null
- A table can only have one primary key

### FOREIGN KEY
- A foreign key is used to link two tables together 
- A foreign key is a column whose values match the values of another table primary key column
- The table with the priamry key is called the refernece or parent, table and the table with the foreign key is called the child table 
- A table can have multiple foreign keys 

## Creating Tables
- Createing coffee_store database 
```CREATE database coffee_store;```
- Creating products tables 
```sql
CREATE TABLE products (
	id INT auto_increment primary key,
    name VARCHAR(30),
    price DECIMAL(3,2)
);
```
- Creating customers table
```sql
CREATE TABLE customers(
	id INT auto_increment primary key,
    first_name varchar(30),
    last_name varchar(30),
    gender enum('M','F'),
    phone_numer varchar(11)
);
```
- Creating Orders tables with foreign key
```sql
CREATE TABLE orders (
	id INT auto_increment primary key,
    product_id int,
    customer_id int,
    order_time datetime,
    foreign key(product_id) references products(id),
    foreign key(customer_id) references customers(id)
);
```

## Modifying Tables
- Adda new column to a table 
```sql
ALTER TABLE products 
ADD column coffee_origin varchar(30);
```
- Remove a column from a table 
```sql
ALTER TABLE products 
DROP column coffee_origin;
```

## Deleting Tables
To remove a database 
```DROP TABLE test;```

## Deleting all data from Tables 
To remove data/rows from a table 
```TRUNCATE TABLE test;```

# Section 3 - More On Alter Table
By the end of this section, you ll learn
How to 
- add and remove primary keys
- add and remove foreign keys
- add a Unique constraint
- to change a columns name
- to change a columns data type 

## Creating our Test database and tables 
1. Create test database 
```sql
CREATE DATABASE test; 
use test
```
2. Create an address, people and pets table 
```sql
CREATE TABLE addresses(
	id int,
    house_number int,
    city varchar(20),
    postcode varchar(7)
);

CREATE TABLE people (
	id int,
    first_name varchar(20),
    last_name varchar(20),
    address_id int
);

CREATE TABLE PETS (
	id int,
    name varchar(20),
    species varchar(20),
    owner_id int     
);

SHOW TABLES;

-- This will list the columms in a table
DESCRIBE addresses;
```

## Add and Remove Primary key
1. To add primary key 
```sql
ALTER TABLE addresses
ADD PRIMARY key (ID);
```
2. To remove primary  key
- one thing to keep in mind is, once you alter the column the columnm will not accept null value, even if you remove the primary key, it ll still not accept null values. we may need to do separetely 
```sql
ALTER TABLE addresses
DROP PRIMARY key;
```

## Add and remove Foreign keys
1. To add a foreign key 
- Whene ever you are referencing a column for a foreign key it must be a primary key  
```sql
ALTER TABLE people
ADD CONSTRAINT FK_PeopleAddress
FOREIGN KEY (address_id) REFERENCES addresses (id);
```
2. To remove a foreign key 
- To see the constranints, keys in a table, use the following ``` SHOW CREATE TABLE people; ```
```sql
ALTER TABLE people
DROP FOREIGN KEY (address_id)
```

## Add a Unique constraint
1. Add a unique constraint 
```sql
ALTER TABLE <tableName>
ADD CONSTRAINT <constraintName> UNIQUE (<columnName>);

ALTER TABLE pets
ADD CONSTRAINT u_species UNIQUE (species);
```

2. Remove unique constraint
```sql
ALTER TABLE pets
DROP INDEX u_species;

-- DESCRIBE pets;
```

## Change a columns name
```sql 
ALTER TABLE pets
CHANGE `OLD_COLUMN_NAME` `NEW_COLUMN_NAME` <data type>;

ALTER TABLE pets
change `name` `fname` varchar(30);
```

## Change a columns data type 
```sql
ALTER TABLE <tablename> MODIFY <columnname> <data type>;
DESCRIBE tableName 
```
# Section 3 - Data Manipulation Language 
DML is a subset of SQL which is concerned with inserting, updating and deleting of data in tables
- DDL is concerned with creating tables
- DML is concerned with inserting data into those tables 

By the end of this section, you will know
- Insert Data into Tables
- Update Data in a table
- Delete data from a table 

## Insert Data into Tables 
Inserting a data into a table

```sql
-- Syntax 
INSERT INTO <tableName> (<column1>, <column2>, <column3>)
VALUES ("value1", "value2", "value3");

-- Example
insert into products (name, price, coffee_origin)
VALUES ("Espresso", 2.50, "Brazil");

-- Insert multiple rows
insert into products (name, price, coffee_origin)
VALUES  
("Macchiato", 3.00, "Brazil"),
("Capuccino", 3.50, "Costa Rica")
;
```

## Update Data in a table
Update data that is already been inserted into our tables.

In the following query we are gonna update coffee_origin value which is set to india to Sri lanka

```sql
-- Syntax 
UPDATE <tableName>
SET <column_name> = "value"
WHERE <column_name> = "value";

-- Example
UPDATE products
SET coffee_origin = "Sri lanka" 
WHERE id = 7;
```

By default SQL updates safely by primary key, if you want to turn it off, run the below query
```sql
SET SQL_SAFE_UPDATES = 0;
```

To update multiple columns 
```sql
UPDATE products
SET price = 3.25, coffee_origin = "Ethiopia"
WHERE name = "Americano";
```

To update multiple rows 
```sql
UPDATE products
SET coffee_origin = "Colombia"
where coffee_origin = "Brazil";
```

## Delete data from a table 

```sql
-- Syntax 
DELETE FROM <table>
WHERE <columnName> = "value";


-- Example
DELETE FROM products
WHERE id = 1;


-- DELETE ALL DATA IN TABLE
DELETE FROM products
```

# Section 4 - Selecting from a Table
By the end of this Section, you will learn
- How to retrieve data from a table using the SELECT command 
- Adding WHERE clauses to filter your query 
- How to use the IN, BETWEEN and LIKE commands 
- How to order your result set by column 
- How to limit the number of rows in your extraction
- How to remove duplicate values
- How to set a column name alias


OrdersTable Query
```sql
INSERT INTO orders (product_id,customer_id,order_time) VALUES (1,1,'2017-01-01 08-02-11'),(1,2,'2017-01-01 08-05-16'),(5,12,'2017-01-01 08-44-34'),(3,4,'2017-01-01 09-20-02'),(1,9,'2017-01-01 11-51-56'),(6,22,'2017-01-01 13-07-10'),(1,1,'2017-01-02 08-03-41'),(3,10,'2017-01-02 09-15-22'),(2,2,'2017-01-02 10-10-10'),(3,13,'2017-01-02 12-07-23'),(1,1,'2017-01-03 08-13-50'),(7,16,'2017-01-03 08-47-09'),(6,21,'2017-01-03 09-12-11'),(5,22,'2017-01-03 11-05-33'),(4,3,'2017-01-03 11-08-55'),(3,11,'2017-01-03 12-02-14'),(2,23,'2017-01-03 13-41-22'),(1,1,'2017-01-04 08-08-56'),(3,10,'2017-01-04 11-23-43'),(4,12,'2017-01-05 08-30-09'),(7,1,'2017-01-06 09-02-47'),(3,18,'2017-01-06 13-23-34'),(2,16,'2017-01-07 09-12-39'),(2,14,'2017-01-07 11-24-15'),(4,5,'2017-01-08 08-54-11'),(1,1,'2017-01-09 08-03-11'),(6,20,'2017-01-10 10-34-12'),(3,3,'2017-01-10 11-02-11'),(4,24,'2017-01-11 08-39-11'),(4,8,'2017-01-12 13-20-13'),(1,1,'2017-01-14 08-27-10'),(4,15,'2017-01-15 08-30-56'),(1,7,'2017-01-16 10-02-11'),(2,10,'2017-01-17 09-50-05'),(1,1,'2017-01-18 08-22-55'),(3,9,'2017-01-19 09-00-19'),(7,11,'2017-01-19 11-33-00'),(6,12,'2017-01-20 08-02-21'),(3,14,'2017-01-21 09-45-50'),(5,2,'2017-01-22 10-10-34'),(6,24,'2017-01-23 08-32-19'),(6,22,'2017-01-23 08-45-12'),(6,17,'2017-01-23 12-45-30'),(2,11,'2017-01-24 08-01-27'),(1,1,'2017-01-25 08-05-13'),(6,11,'2017-01-26 10-49-10'),(7,3,'2017-01-27 09-23-57'),(7,1,'2017-01-27 10-08-16'),(3,18,'2017-01-27 10-13-09'),(4,19,'2017-01-27 11-02-40'),(3,10,'2017-01-28 08-03-21'),(1,2,'2017-01-28 08-33-28'),(1,12,'2017-01-28 11-55-33'),(1,13,'2017-01-29 09-10-17'),(6,6,'2017-01-30 10-07-13'),(1,1,'2017-02-01 08-10-14'),(2,14,'2017-02-02 10-02-11'),(7,10,'2017-02-02 09-43-17'),(7,20,'2017-02-03 08-33-49'),(4,21,'2017-02-04 09-31-01'),(5,22,'2017-02-05 09-07-10'),(3,23,'2017-02-06 08-15-10'),(2,24,'2017-02-07 08-27-26'),(1,1,'2017-02-07 08-45-10'),(6,11,'2017-02-08 10-37-10'),(3,13,'2017-02-09 08-58-18'),(3,14,'2017-02-10 09-12-40'),(5,4,'2017-02-10 11-05-34'),(1,2,'2017-02-11 08-00-38'),(3,8,'2017-02-12 08-08-08'),(7,20,'2017-02-12 09-22-10'),(1,1,'2017-02-13 08-37-45'),(5,2,'2017-02-13 12-34-56'),(4,3,'2017-02-14 08-22-43'),(5,4,'2017-02-14 09-12-56'),(3,5,'2017-02-15 08-09-10'),(6,7,'2017-02-15 09-05-12'),(1,8,'2017-02-15 09-27-50'),(2,9,'2017-02-16 08-51-12'),(3,10,'2017-02-16 13-07-46'),(4,11,'2017-02-17 08-03-55'),(4,12,'2017-02-17 09-12-11'),(5,10,'2017-02-17 11-41-17'),(6,18,'2017-02-17 13-05-56'),(7,19,'2017-02-18 08-33-27'),(1,17,'2017-02-19 08-12-31'),(1,1,'2017-02-20 09-50-17'),(3,5,'2017-02-20 09-51-29'),(4,6,'2017-02-20 10-43-39'),(3,1,'2017-02-21 08-32-17'),(1,1,'2017-02-21 10-30-11'),(3,2,'2017-02-21 11-08-45'),(4,3,'2017-02-22 11-46-32'),(2,15,'2017-02-22 13-35-16'),(6,13,'2017-02-23 08-34-48'),(4,24,'2017-02-24 08-32-03'),(2,13,'2017-02-25 08-03-12'),(7,17,'2017-02-25 09-34-23'),(7,23,'2017-02-25 11-32-54'),(5,12,'2017-02-26 11-47-34'),(6,4,'2017-02-27 12-12-34'),(1,1,'2017-02-28 08-59-22');
```
CustomersTable Query
```sql
INSERT INTO customers (first_name, last_name, gender, phone_number) VALUES ('Chris','Martin','M','01123147789'),('Emma','Law','F','01123439899'),('Mark','Watkins','M','01174592013'),('Daniel','Williams','M',NULL),('Sarah','Taylor','F','01176348290'),('Katie','Armstrong','F','01145787353'),('Michael','Bluth','M','01980289282'),('Kat','Nash','F','01176987789'),('Buster','Bluth','M','01173456782'),('Charlie',NULL,'F','01139287883'),('Lindsay','Bluth','F','01176923804'),('Harry','Johnson','M',NULL),('John','Smith','M','01174987221'),('John','Taylor','M',NULL),('Emma','Smith','F','01176984116'),('Gob','Bluth','M','01176985498'),('George','Bluth','M','01176984303'),('Lucille','Bluth','F','01198773214'),('George','Evans','M','01174502933'),('Emily','Simmonds','F','01899284352'),('John','Smith','M','01144473330'),('Jennifer',NULL,'F',NULL),('Toby','West','M','01176009822'),('Paul','Edmonds','M','01966947113');
```

## How to retrieve data from a table using the SELECT command 
```sql
select * from customers;

Select first_name, gender from customers;
```

## Adding WHERE clauses to filter your query 
```sql
-- AND CASE
select * from customers
WHERE price = 3.00
AND coffee_origin = 'Colombia';

-- OR CASE
select * from customers
WHERE price = 3.00
OR coffee_origin = 'Colombia';
```

## How to use the IN, BETWEEN and LIKE commands 
- > : greater than 
- >= : greater than  or equal to
- < : less than 
- <= : less than equal to 


```sql
-- Returns result where a column is equal to or greater than a certain value 
select * from customers
WHERE price >= 3.00;
```

## Null Values
instead of = we need to IS, IS NULL
```sql
-- IS NULL
SELECT * FROM customers 
where phone_number IS NULL;

-- NOT NULL
SELECT * FROM customers 
where phone_number IS NOT NULL;
```

## IN, NOT IN 
```sql
select * from customers
WHERE last_name IN ('Taylor', 'Bluth', 'Armstrong');

select * from customers
WHERE last_name NOT IN ('Taylor', 'Bluth', 'Armstrong');
```

## Between
Get values btw a certain date/time.
```sql
SELECT * FROM ORDERS
WHERE order_time between '2017-01-01' AND '2017-01-07';
```

## Like 
Like statement is used for pattern matching 
- % : Any number of characters
- _ : for one character 

Examples 
- ``` select * from customers where last_name like 'W%';```
- W% : Get all our customers that beging with W, the percentage sign is looking for any number of characters 
- ```select * from cusomers where last_name like '%o%';```
- In this example, it look for any number of characters before the O and it's looking for any number of characters after the O

## How to order your result set by column 
```sql
SELECT * FROM customers 
order by id desc;

SELECT * FROM customers 
order by id asc;
```

## Distinct
```sql
SELECT DISTINCT coffee_origin from Products;
```

## Limit, Offset 
```sql
SELECT * FROM CUSTOMERS 
OFF
LIMIT 5;

-- Offset : state
-- limit : pageResult 
SELECT * FROM CUSTOMERS 
LIMIT 10
offset 10;
```

## Column name alias
Column name alias is when you rename a column in your result set
```sql
select name as coffee_name, coffee_origin as country from products;
```

# Section 4 - Selecting From Multiple Tables
By the end of this Section, you will learn

- Learn how to SELECT data from multiple tables by using different types of JOIN statements in sql
- How to write an INNER JOIN query
- How to write LEFT and RIGHT JOINs queries and the differences between them
- How to SELECT data from mroe than two tables using multiple JOIN statements

## What is a Join
- Join allow you to retrieve data from multiple tables in a single select statement 
- To Join two tables there needs to be a related column between them
- There are many different kinds of join 
  - INNER JOIN : will retrieve data oly when there is matching values in both tables 
  - LEFT JOIN : Will retrieve all data from the left table and matching rows from the right table 
  - RIGHT JOIN : Will retrieve all data from the right table and matching rows from the left right table 
  - FULL JOIN/ OUTER JOIN : will retrieve all the data from left and right table, it doesn't matter if there's missing rows in the table. 
    - In mySql there's no such thing as a full join 

## INNER JOIN
```sql
SELECT p.name as product_name, p.price,  o.order_time from products p
INNER JOIN orders o ON o.product_id = p.id
```

## LEFT JOIN || RIGHT JOIN 
```sql
-- First, lets set null value to a record in customer table with customerId 1
update orders 
SET customer_id = null
WHERE ID =1;

-- This right join will bring the results matched with second table
-- this will omit customer id 1
SELECT * from customers c 
RIGHT JOIN orders o on c.id = o.customer_id
order by o.order_time 
LIMIT 10;

-- thiS left join will get customerId 1, which is null
SELECT * from customers c 
LEFT JOIN orders o on c.id = o.customer_id
order by o.order_time 
LIMIT 10;


-- REVERT
update orders 
SET customer_id = 1
WHERE ID = 1;
```

## Joining more than two tables 
```sql
select CONCAT(c.first_name, ' ', c.last_name)  as customer_name, c.phone_number, 
p.name as product_name, p.price,
o.order_time
from orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN products p on o.product_id = p.id
ORDER BY o.order_time
LIMIT 10;
```

# Section 5 - Database Design
By the end of this Section, you will learn
- Normalization  
  - What normalziation is and the rules of normalization is, how we can apply this to our databases 
- Relationships 
- Constraints 


## Normalization 
Normalization is the process of efficiently organizing data in a database 

Why do we want to do this?
- To eliminate redundant data
- To only store releated data in a table 

Benefits 
- Reduce storage space
- Reduce insert, updat and deletion anomalies
- Improve query performance 

Levels of Normalization
- 1st Normal Form (1NF)
- 2nd Normal Form (2NF)
- 3rd Normal Form (3NF)
- Boyce and Codd Normal Form (BCNF)


### Useful Links
https://www.studytonight.com/dbms/database-normalization.php
https://www.youtube.com/watch?v=WwTAVJII98Y

### First Normal Form (1NF)
Tables are in 1NF if 
- No repeated rows of data
- Columns only contain a single value
- The table has a primary key 
  - Remember, Primary key is a column or a set of columns which uniquely identifies that row. 
  - It doesn't have to be one column, it could be a combination of more than one column 

### Second Normal Form (2NF)
Tables are in 2NF if 
- They conform to 1NF
- Every column that is not a primary key of the table is dependent on the whole of the primary key  
- there should not be any partial dependency  

### Third Normal Form (3NF)
- They confrom to 2NF
- Every column that is not a primary key is only dependent on the whole of the primary key 
- there should not be Transitive dependency

### BOYCEE CODD Normal form 
- Follow 3NF, Remove reverse dependency

### Fourth Normal form (4NF)
- Table should be in Boycee Codd Normal Form
- There must not be multivalued dependency 


## What are relationships 
Tables are related through primary and foreign keys
- One to One Relationship
- One to Many Relationship
- Many to Many Relationship

### One to One Relationship
Where a key to one table appears no more than once as the key in another table and vice versa 

Products -- 1 --> 0..1 -- Product_Details 

### One to Many Relationship
Where a primary key of one table can be in multiple rows of a foreign key column of another table

Customer -- 1 --> 1..m -- Orders 

- Most commonly used

### Many to Many Relationship
Where two table can have many instances of each other 
- Complicated relationships 
- Most commonly used

Usage : when one customers buys multiple orders at a time 
Products  -- 1 < -- > 1..m -- Order Details -- 1..m < -- > Orders 

To represent many to many relationships in a database we create a third table called a Junction table and the junction table has a one to many relationship 


## Constraints 
- NOT NULL : A column can't contain any null values
- UNIQUE : A column can't contain any duplicate values of data
- PRIMARY KEY : A column that uniquely identifies each row of data 
- FOREIGN KEY : A column which is related to a primary key in another table 
- CHECK : Controls the vlaues that can be inserted into a column 
- DEFAULT : If no values is inserted into a column, you can set a default value  


# Section 6 - Creating a Cinema Booking System Database
By the end of this Section, you will learn

- Create a database for a cinema online booking system
- Consisting of 7 Tables
- Explanation of the database schema
- Inserting data into our complete database 


## DB Schema
films
- id INT 
  - PRIMARY KEY
- name VARCHAR(45) 
  - NOT NULL UNIQUE 
- length_min INT
  - NOT NULL

screenings
- id INT
  - PRIMARY KEY AUTO_INCREMENT
- film_id INT
  - UNIQUE NOT NULL
- room_id INT
  - FOREIGN KEY 
- start_time DATETIME

rooms
- id INT
- name VARCHAR(45)
- no_seats INT

seats 
- id INT
- row CHAR(1)
- number (int)
- room_id INT

reserved_seat
- id INT
- booking_id INT
- seat_id INT

bookings
- id INT
- screening_id INT
- customer_id INT

Customers
- id INT
- first_name VARCHAR(45)
- last_name VARCHAR(45)
- email VARCHAR(45)



### Creating Films Table
Create a database called Luxe and create films table 

```sql
create database luxe;
use luxe;
show databases;
SHOW TABLES;

CREATE TABLE films (
	id INT auto_increment primary key,
  name varchar(45) NOT null unique,
  length_min INT NOT null
);

SELECT * FROM films;
describe films;
```

### Creating Customers Table
```sql
create TABLE customers (
	id INT auto_increment primary key,
    first_name VARCHAR(45),
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(45) not null unique
);
```
### Creating Rooms Table
```sql
CREATE TABLE rooms (
	id INT auto_increment primary KEY, 
    name varchar(45) NOT NULL,
    no_seats INT not null
);
```

### Creating Screening Table
Adding foreign keys
```sql
CREATE TABLE screenings (
	id INT auto_increment primary key,
    film_id INT NOT null,
    room_id INT NOT null,
    start_time datetime NOT null,
    foreign key (film_id) references films(id),
    foreign key (room_id) references rooms(id)
);
```

### Creating seats table
```sql
create table seats (
	id int auto_increment primary key, 
    row char(1) NOT NULL,
    number int NOT NULL,
    room_id INT NOT NULL,
    foreign key (room_id) references rooms(id)
);

```

### Creating bookings table
```sql
CREATE TABLE bookings (
	id INT auto_increment primary key,
    screening_id INT NOT NULL,
    customer_id INT NOT NULL,
    foreign key (screening_id) references screenings(id),
    foreign key (customer_id) references customers(id)
);
```

### Creating reserved_seats table
```sql
CREATE TABLE reserved_seats (
	id INT auto_increment primary key,
    booking_id INT not null,
    seat_id INT not null,
    foreign key (booking_id)  references bookings(id),
    foreign key (seat_id) references seats(id)
);
```

## Insert the Data
```sql
-- FILMS 
INSERT INTO films (name, length_min)
VALUES ('Blade Runner 2049',153),
('Dunkirk',106),
('Geostorm',121),
('Thor: Ragnarok',107),
('Jigsaw',116),
('The Death of Stalin',98),
('The Lego Ninjago Movie',101),
('Murder on the Orient Express',135),
('Paddington 2',88),
('Breathe',117),
('Blade Runner',127),
('Victoria and Abdul',112);

-- customers 
INSERT INTO customers (first_name, last_name, email)
VALUES ('David','May','dmay@gmail.com'),('Theresa','Davis','tdavis@gmail.com'),('Jerry','Martin','jermar@gmail.com'),('John','Smith','smithy@gmail.com'),
('Martin','Watkins','mwatto@gmail.com'),('Emma','Watson','itswingardiumleviosa@gmail.com'),('Javier','Pastore','jp@gmail.com'),('Charlotte','Hare','chare@gmail.com'),
('Mark','Smith','markysmith@gmail.com'),('Emily','Thorne','ethorne@gmail.com'),('David','Paul','davpaul@gmail.com'),('Cherry','Wang','cherryw@gmail.com'),
('Bort','Simpson','mynameisbort@gmail.com'),('Emma','Connor','econ@gmail.com'),('Jonathan','Edwards','jedwards@gmail.com'),('Simon','Davis','sdavis@gmail.com'),
('Sophie','Marshall','sophmarsh@gmail.com'),('Sally','Lam','slam@gmail.com'),('Kenneth','Harrison','kson@gmail.com'),(NULL,'Smith','smith@gmail.com'),
('Harry','Weasley','whatsmyname@gmail.com'),('Ron','Potter','thatsmyname@gmail.com'),('Ray','Wilkinson','wilky@gmail.com'),('Samuel','Windsor','royalty@gmail.com'),
('Jennifer','David','jda@gmail.com'),('Larry','Davis','larryd@gmail.com'),('Bolt','Tin','btin@gmail.com'),('Sarah','Thompson','sthompson1977@gmail.com'),
('Alan','Bennet','thosewerethedays@gmail.com'),('Brian','Apple','bapple101@gmail.com'),('Rob','Bryson','rbry@gmail.com'),('Shelly','Zu','szu@gmail.com'),
('Steve','Shoogan','sshoogan@gmail.com'),('Matthew','Gray','graym@gmail.com'),('Sally','Kramer','kallysramer@gmail.com'),('Peter','Chef','chefp@gmail.com'),
(NULL,'Cooke','nullcooke@gmail.com'),('Marty','Seinfeld','marfeld@gmail.com'),('Carl','Green','creen@gmail.com'),('Emma','Greene','egreene@gmail.com'),
('Michael','Bannon','mbannon@gmail.com'),('Paul','Showman','theshowman1@gmail.com'),('Harry','Goldthistle','hgold@gmail.com'),('Gill','Newton','gnew@gmail.com'),
('Preston','Peters','p2p@gmail.com'),('Simon','Smithson','sismithson@gmail.com'),('Benjamin','Rabbit','brabbit@gmail.com'),('Jerry','David','curb@gmail.com'),
('Olivia','Tulip','otulip@gmail.com'),('Richard','Horne','richhorne@gmail.com'),('Betty','Corbe','bcorbe@gmail.com'),('Anne','Callaway','acway@gmail.com'),
('Yifan','Way','yway@gmail.com'),('Charlie','Cheene','ccheene@gmail.com'),('Ula','Boon','uboon@gmail.com'),('Buster','David','bdavid@gmail.com'),
('Dustin','Beer','beerd@gmail.com'),('John','Sleet','knoweverything@gmail.com'),('August','Summer','asummer@gmail.com'),('Linda','Martins','lmart@gmail.com'),
('Chris','Kay','chkay@gmail.com'),('Christopher','Roberts','croberts@gmail.com'),('Robert','Winston','rwin@gmail.com'),('Daniel','Orbe','dorbe@gmail.com'),
('Joshua','Wells','wellj@gmail.com'),('Fred','Flinton','ff100@gmail.com'),('Paula','Winner','pwinner@gmail.com'),(NULL,'Canter','canter99@gmail.com'),
('Michael','Bassett','mbass@gmail.com'),('Michelle','Martins','mm109@gmail.com'),('Lorna','Brown','lbrown@gmail.com'),('Kerry','Vale','wish1985@gmail.com'),
('Sean','Borne','sborne@gmail.com'),('Craig','Evans','cevans@gmail.com'),('Alex','Sanders','asand@gmail.com'),('George','McNabb','gnabb@gmail.com'),
('Richard','Trout','redtrout@gmail.com'),('Stewart','Dee','sdee@gmail.com'),('Sue','Werkins','swerkins@gmail.com'),('Mel','Wozniack','mwoz@gmail.com'),
('Steve','Dole','sdole@gmail.com'),('Zara','Yelland','zy27@gmail.com'),('Irene','Mellon','mellonirene@gmail.com'),('Karen','Wall','kwall@gmail.com'),
('Lucy','Oak','loak@gmail.com'),('Orson','Young','oyoung@gmail.com'),('Oliver','Daniels','odaniels@gmail.com'),('Queen','Bee','qbee@gmail.com'),
('Vera','Jack','verajack@gmail.com'),('Thomas','Soft','softt@gmail.com'),(NULL,'Blair','nblair@gmail.com'),('Tim','Jones','tjones@gmail.com'),
('Nicola','Jenkins','njenk@gmail.com'),('Olivia','Jones','ojo@gmail.com'),('James','Depp','jdepp@gmail.com'),('Meryl','Steep','msteep@gmail.com'),
('Jake','Portman','jportman@gmail.com'),('Jenny','Appleton','japple@gmail.com'),('Simon','Hoover','shoover@gmail.com'),('Belinda','Marshall','belindam@gmail.com'),
('Stephanie','Watson','swatson@gmail.com'),('Art','Simons','simons@gmail.com'),('Stan','Smith','smithstan@gmail.com'),('Christopher','Roberts','robertsc@gmail.com'),
('Nathan','Gold','engold@gmail.com'),('Alain','Bennet','alainb@gmail.com'),('Lewis','Russelton','lrus@gmail.com'),('Josh','Reynolds','jrey@gmail.com'),
('William','Williams','williamw@gmail.com'),(NULL,'Pointer','apointer@gmail.com'),('Bort','Skinner','mynameisalsobort@gmail.com'),(NULL,'Smith','lonsmith@gmail.com'),
('Susan','Williams','swill@gmail.com'),('Yu','Xi','yuxi@gmail.com'),('Annabelle','Winks','anwinks@gmail.com'),('Andrew','Landhurst','andylandy@gmail.com'),
('Winston','Smith','room101@gmail.com'),('Gemma','Arton','garton@gmail.com'),('Renton','McDonald','rent@gmail.com'),('Maggie','Chu','chuchu@gmail.com');


-- rooms 
INSERT INTO rooms (name, no_seats) 
VALUES ('Chaplin',72),
('Kubrick',36),
('Coppola',36);


-- screening
INSERT INTO screenings (film_id, room_id, start_time)
VALUES (2,1,'2017-10-01 13:00:00'),(1,2,'2017-10-01 13:30:00'),(2,3,'2017-10-01 14:00:00'),
(3,1,'2017-10-01 16:00:00'),(6,2,'2017-10-01 16:30:00'),(3,3,'2017-10-01 17:00:00'),
(4,1,'2017-10-01 19:00:00'),(6,2,'2017-10-01 19:30:00'),(4,3,'2017-10-01 20:00:00'),
(1,1,'2017-10-02 16:00:00'),(4,2,'2017-10-02 16:30:00'),(5,3,'2017-10-02 17:00:00'),
(2,1,'2017-10-02 19:00:00'),(1,2,'2017-10-02 19:30:00'),(1,3,'2017-10-02 20:00:00'),
(5,1,'2017-10-03 16:00:00'),(3,2,'2017-10-03 16:30:00'),(2,3,'2017-10-03 17:00:00'),
(1,1,'2017-10-03 19:00:00'),(2,2,'2017-10-03 19:30:00'),(3,3,'2017-10-03 20:00:00'),
(3,1,'2017-10-04 16:00:00'),(1,2,'2017-10-04 16:30:00'),(4,3,'2017-10-04 17:00:00'),
(2,1,'2017-10-04 19:00:00'),(1,2,'2017-10-04 19:30:00'),(5,3,'2017-10-04 20:00:00'),
(3,1,'2017-10-05 16:00:00'),(4,2,'2017-10-05 16:30:00'),(6,3,'2017-10-05 17:00:00'),
(2,1,'2017-10-05 19:00:00'),(6,2,'2017-10-05 19:30:00'),(3,3,'2017-10-05 20:00:00'),
(1,1,'2017-10-06 16:00:00'),(5,2,'2017-10-06 16:30:00'),(2,3,'2017-10-06 17:00:00'),
(4,1,'2017-10-06 19:00:00'),(2,2,'2017-10-06 19:30:00'),(4,3,'2017-10-06 20:00:00'),
(2,1,'2017-10-07 13:00:00'),(1,2,'2017-10-07 13:30:00'),(2,3,'2017-10-07 14:00:00'),
(3,1,'2017-10-07 16:00:00'),(1,2,'2017-10-07 16:30:00'),(1,3,'2017-10-07 17:00:00'),
(3,1,'2017-10-07 19:00:00'),(2,2,'2017-10-07 19:30:00'),(1,3,'2017-10-07 20:00:00'),
(7,1,'2017-10-08 13:00:00'),(1,2,'2017-10-08 13:30:00'),(1,3,'2017-10-08 14:00:00'),
(7,1,'2017-10-08 16:00:00'),(3,2,'2017-10-08 16:30:00'),(2,3,'2017-10-08 17:00:00'),
(2,1,'2017-10-08 19:00:00'),(5,2,'2017-10-08 19:30:00'),(7,3,'2017-10-08 20:00:00'),
(1,1,'2017-10-09 16:00:00'),(7,2,'2017-10-09 16:30:00'),(8,3,'2017-10-09 17:00:00'),
(3,1,'2017-10-09 19:00:00'),(8,2,'2017-10-09 19:30:00'),(9,3,'2017-10-09 20:00:00'),
(1,1,'2017-10-10 16:00:00'),(6,2,'2017-10-10 16:30:00'),(6,3,'2017-10-10 17:00:00'),
(3,1,'2017-10-10 19:00:00'),(9,2,'2017-10-10 19:30:00'),(6,3,'2017-10-10 20:00:00'),
(8,1,'2017-10-11 16:00:00'),(4,2,'2017-10-11 16:30:00'),(5,3,'2017-10-11 17:00:00'),
(9,1,'2017-10-11 19:00:00'),(3,2,'2017-10-11 19:30:00'),(4,3,'2017-10-11 20:00:00'),
(4,1,'2017-10-12 16:00:00'),(7,2,'2017-10-12 16:30:00'),(6,3,'2017-10-12 17:00:00'),
(3,1,'2017-10-12 19:00:00'),(7,2,'2017-10-12 19:30:00'),(7,3,'2017-10-12 20:00:00'),
(5,1,'2017-10-13 16:00:00'),(2,2,'2017-10-13 16:30:00'),(8,3,'2017-10-13 17:00:00'),
(9,1,'2017-10-13 19:00:00'),(2,2,'2017-10-13 19:30:00'),(9,3,'2017-10-13 20:00:00'),
(1,1,'2017-10-14 13:00:00'),(4,2,'2017-10-14 13:30:00'),(6,3,'2017-10-14 14:00:00'),
(2,1,'2017-10-14 16:00:00'),(1,2,'2017-10-14 16:30:00'),(5,3,'2017-10-14 17:00:00'),
(3,1,'2017-10-14 19:00:00'),(7,2,'2017-10-14 19:30:00'),(7,3,'2017-10-14 20:00:00'),
(2,1,'2017-10-15 13:00:00'),(10,2,'2017-10-15 13:30:00'),(11,3,'2017-10-15 14:00:00'),
(2,1,'2017-10-15 16:00:00'),(10,2,'2017-10-15 16:30:00'),(11,3,'2017-10-15 17:00:00'),
(3,1,'2017-10-15 19:00:00'),(10,2,'2017-10-15 19:30:00'),(11,3,'2017-10-15 20:00:00'),
(1,1,'2017-10-16 16:00:00'),(4,2,'2017-10-16 16:30:00'),(4,3,'2017-10-16 17:00:00'),
(4,1,'2017-10-16 19:00:00'),(4,2,'2017-10-16 19:30:00'),(2,3,'2017-10-16 20:00:00'),
(7,1,'2017-10-17 16:00:00'),(5,2,'2017-10-17 16:30:00'),(1,3,'2017-10-17 17:00:00'),
(8,1,'2017-10-17 19:00:00'),(7,2,'2017-10-17 19:30:00'),(7,3,'2017-10-17 20:00:00'),
(9,1,'2017-10-18 16:00:00'),(8,2,'2017-10-18 16:30:00'),(6,3,'2017-10-18 17:00:00'),
(6,1,'2017-10-18 19:00:00'),(3,2,'2017-10-18 19:30:00'),(5,3,'2017-10-18 20:00:00'),
(5,1,'2017-10-19 16:00:00'),(2,2,'2017-10-19 16:30:00'),(9,3,'2017-10-19 17:00:00'),
(3,1,'2017-10-19 19:00:00'),(4,2,'2017-10-19 19:30:00'),(9,3,'2017-10-19 20:00:00'),
(1,1,'2017-10-20 16:00:00'),(1,2,'2017-10-20 16:30:00'),(8,3,'2017-10-20 17:00:00'),
(2,1,'2017-10-20 19:00:00'),(6,2,'2017-10-20 19:30:00'),(4,3,'2017-10-20 20:00:00'),
(1,1,'2017-10-21 13:00:00'),(9,2,'2017-10-21 13:30:00'),(7,3,'2017-10-21 14:00:00'),
(2,1,'2017-10-21 16:00:00'),(8,2,'2017-10-21 16:30:00'),(2,3,'2017-10-21 17:00:00'),
(3,1,'2017-10-21 19:00:00'),(7,2,'2017-10-21 19:30:00'),(1,3,'2017-10-21 20:00:00'),
(3,1,'2017-10-22 13:00:00'),(11,2,'2017-10-22 13:30:00'),(10,3,'2017-10-22 14:00:00'),
(2,1,'2017-10-22 16:00:00'),(11,2,'2017-10-22 16:30:00'),(10,3,'2017-10-22 17:00:00'),
(4,1,'2017-10-22 19:00:00'),(11,2,'2017-10-22 19:30:00'),(10,3,'2017-10-22 20:00:00'),
(6,1,'2017-10-23 16:00:00'),(6,2,'2017-10-23 16:30:00'),(9,3,'2017-10-23 17:00:00'),
(12,1,'2017-10-23 19:00:00'),(6,2,'2017-10-23 19:30:00'),(9,3,'2017-10-23 20:00:00'),
(5,1,'2017-10-24 16:00:00'),(9,2,'2017-10-24 16:30:00'),(9,3,'2017-10-24 17:00:00'),
(12,1,'2017-10-24 19:00:00'),(8,2,'2017-10-24 19:30:00'),(8,3,'2017-10-24 20:00:00'),
(8,1,'2017-10-25 16:00:00'),(7,2,'2017-10-25 16:30:00'),(7,3,'2017-10-25 17:00:00'),
(9,1,'2017-10-25 19:00:00'),(5,2,'2017-10-25 19:30:00'),(6,3,'2017-10-25 20:00:00'),
(12,1,'2017-10-26 16:00:00'),(7,2,'2017-10-26 16:30:00'),(5,3,'2017-10-26 17:00:00'),
(12,1,'2017-10-26 19:00:00'),(9,2,'2017-10-26 19:30:00'),(12,3,'2017-10-26 20:00:00'),
(5,1,'2017-10-27 16:00:00'),(12,2,'2017-10-27 16:30:00'),(12,3,'2017-10-27 17:00:00'),
(7,1,'2017-10-27 19:00:00'),(12,2,'2017-10-27 19:30:00'),(7,3,'2017-10-27 20:00:00'),
(6,1,'2017-10-28 13:00:00'),(12,2,'2017-10-28 13:30:00'),(5,3,'2017-10-28 14:00:00'),
(5,1,'2017-10-28 16:00:00'),(6,2,'2017-10-28 16:30:00'),(5,3,'2017-10-28 17:00:00'),
(5,1,'2017-10-28 19:00:00'),(7,2,'2017-10-28 19:30:00'),(8,3,'2017-10-28 20:00:00'),
(12,1,'2017-10-29 13:00:00'),(8,2,'2017-10-29 13:30:00'),(9,3,'2017-10-29 14:00:00'),
(12,1,'2017-10-29 16:00:00'),(9,2,'2017-10-29 16:30:00'),(6,3,'2017-10-29 17:00:00'),
(5,1,'2017-10-29 19:00:00'),(5,2,'2017-10-29 19:30:00'),(12,3,'2017-10-29 20:00:00'),
(5,1,'2017-10-30 16:00:00'),(7,2,'2017-10-30 16:30:00'),(12,3,'2017-10-30 17:00:00'),
(5,1,'2017-10-30 19:00:00'),(12,2,'2017-10-30 19:30:00'),(7,3,'2017-10-30 20:00:00'),
(5,1,'2017-10-31 13:00:00'),(12,2,'2017-10-31 13:30:00'),(8,3,'2017-10-31 14:00:00'),
(5,1,'2017-10-31 16:00:00'),(5,2,'2017-10-31 16:30:00'),(9,3,'2017-10-31 17:00:00');


-- seats
INSERT INTO seats (row, number, room_id)
VALUES ('A',1,1),('A',2,1),('A',3,1),('A',4,1),('A',5,1),('A',6,1),('A',7,1),('A',8,1),
('B',1,1),('B',2,1),('B',3,1),('B',4,1),('B',5,1),('B',6,1),('B',7,1),('B',8,1),
('C',1,1),('C',2,1),('C',3,1),('C',4,1),('C',5,1),('C',6,1),('C',7,1),('C',8,1),
('D',1,1),('D',2,1),('D',3,1),('D',4,1),('D',5,1),('D',6,1),('D',7,1),('D',8,1),
('E',1,1),('E',2,1),('E',3,1),('E',4,1),('E',5,1),('E',6,1),('E',7,1),('E',8,1),
('F',1,1),('F',2,1),('F',3,1),('F',4,1),('F',5,1),('F',6,1),('F',7,1),('F',8,1),
('G',1,1),('G',2,1),('G',3,1),('G',4,1),('G',5,1),('G',6,1),('G',7,1),('G',8,1),
('H',1,1),('H',2,1),('H',3,1),('H',4,1),('H',5,1),('H',6,1),('H',7,1),('H',8,1),
('I',1,1),('I',2,1),('I',3,1),('I',4,1),('I',5,1),('I',6,1),('I',7,1),('I',8,1),
('A',1,2),('A',2,2),('A',3,2),('A',4,2),('A',5,2),('A',6,2),
('B',1,2),('B',2,2),('B',3,2),('B',4,2),('B',5,2),('B',6,2),
('C',1,2),('C',2,2),('C',3,2),('C',4,2),('C',5,2),('C',6,2),
('D',1,2),('D',2,2),('D',3,2),('D',4,2),('D',5,2),('D',6,2),
('E',1,2),('E',2,2),('E',3,2),('E',4,2),('E',5,2),('E',6,2),
('F',1,2),('F',2,2),('F',3,2),('F',4,2),('F',5,2),('F',6,2),
('A',1,3),('A',2,3),('A',3,3),('A',4,3),('A',5,3),('A',6,3),
('B',1,3),('B',2,3),('B',3,3),('B',4,3),('B',5,3),('B',6,3),
('C',1,3),('C',2,3),('C',3,3),('C',4,3),('C',5,3),('C',6,3),
('D',1,3),('D',2,3),('D',3,3),('D',4,3),('D',5,3),('D',6,3),
('E',1,3),('E',2,3),('E',3,3),('E',4,3),('E',5,3),('E',6,3),
('F',1,3),('F',2,3),('F',3,3),('F',4,3),('F',5,3),('F',6,3);

-- bookings
INSERT INTO bookings (screening_id, customer_id)
VALUES (2,2),(1,4),(2,6),(4,8),(6,10),(1,12),(5,14),(1,16),(2,18),(3,20),
(5,120),(4,12),(8,24),(10,33),(9,37),(4,67),(11,87),(4,109),(5,12),(6,21),
(8,11),(10,13),(14,7),(16,103),(18,81),(7,89),(17,52),(7,50),(8,49),(9,37),
(11,1),(16,37),(20,4),(22,23),(21,24),(10,24),(23,24),(10,55),(14,51),(12,69),
(14,3),(22,34),(26,33),(28,35),(27,65),(13,22),(29,22),(13,100),(20,101),(12,58),
(17,5),(28,29),(32,33),(34,45),(33,32),(19,32),(35,30),(16,17),(26,56),(18,55),
(17,7),(31,11),(38,26),(40,4),(30,51),(25,38),(41,37),(22,101),(32,99),(15,76),
(20,9),(37,10),(44,21),(46,55),(33,22),(31,33),(47,44),(25,55),(38,42),(24,1),
(23,11),(37,1),(50,77),(52,23),(39,1),(43,5),(53,89),(28,88),(44,37),(30,2),
(26,12),(40,1),(56,66),(58,27),(42,7),(46,45),(59,22),(31,25),(50,29),(27,9),
(29,14),(43,1),(62,55),(64,11),(45,8),(49,56),(65,11),(37,26),(56,120),(33,1),
(32,15),(49,1),(68,44),(70,11),(51,13),(55,58),(71,1),(49,33),(56,116),(36,103),
(35,17),(55,56),(74,33),(70,17),(54,11),(61,77),(71,45),(58,78),(62,36),(66,9),
(38,19),(61,88),(80,57),(76,120),(66,100),(67,89),(77,49),(58,89),(62,17),(69,61),
(41,100),(67,22),(86,45),(82,119),(72,27),(73,90),(80,56),(61,68),(68,20),(33,9),
(44,66),(76,119),(92,82),(88,100),(81,89),(79,5),(83,65),(64,42),(74,80),(42,26),
(47,45),(82,118),(98,67),(94,11),(81,55),(82,4),(83,23),(67,4),(86,80),(45,19),
(50,44),(88,117),(104,61),(100,97),(81,35),(85,3),(89,35),(76,41),(86,90),(48,17),
(53,33),(94,116),(110,4),(106,54),(84,33),(88,2),(95,34),(76,27),(86,29),(51,28),
(56,39),(97,115),(116,4),(112,32),(90,33),(88,1),(101,34),(82,90),(86,101),(51,104),
(59,111),(100,114),(122,7),(118,35),(93,57),(88,77),(107,69),(91,96),(92,4),(54,35),
(92,100),(106,113),(128,9),(124,60),(87,88),(91,39),(113,67),(91,43),(98,90),(60,36),
(98,99),(112,112),(134,10),(130,43),(69,84),(97,31),(119,1),(97,3),(104,7),(63,1),
(104,4),(118,111),(140,1),(136,22),(72,67),(97,111),(125,87),(100,24),(110,46),(66,4),
(110,17),(130,110),(146,12),(142,22),(75,48),(100,111),(131,47),(103,24),(122,27),(69,27),
(122,55),(136,91),(152,11),(148,13),(84,90),(103,101),(137,12),(109,11),(128,10),(75,9),
(128,58),(142,90),(158,56),(154,15),(93,91),(109,34),(143,9),(115,34),(131,33),(78,81),
(134,88),(148,48),(164,78),(160,16),(102,22),(115,33),(149,47),(121,46),(137,6),(90,6),
(140,67),(154,40),(170,77),(166,78),(108,21),(121,26),(155,53),(127,42),(143,31),(99,11),
(152,45),(160,70),(176,38),(172,66),(114,20),(127,106),(161,111),(211,109),(149,108),(102,113),
(158,44),(166,87),(182,99),(178,65),(120,19),(136,99),(167,49),(133,66),(158,67),(117,3),
(164,71),(172,33),(188,100),(184,50),(144,18),(142,23),(173,46),(139,23),(164,1),(129,3),
(170,78),(178,35),(194,36),(187,23),(159,24),(151,23),(179,55),(145,58),(170,60),(141,4),
(176,70),(184,7),(200,36),(190,78),(162,70),(157,80),(182,99),(151,95),(176,32),(156,7),
(182,88),(190,8),(200,34),(193,74),(168,35),(163,120),(185,109),(157,31),(182,68),(180,56),
(191,47),(190,16),(200,1),(196,72),(177,11),(169,12),(191,19),(166,108),(176,23),(189,23),
(197,32),(196,26),(203,2),(199,80),(192,4),(175,49),(197,55),(172,76),(188,99),(195,90),
(200,23),(199,43),(206,3),(202,90),(198,59),(181,58),(200,59),(178,6),(194,35),(198,44),
(203,116),(202,28),(209,4),(205,93),(201,23),(187,10),(203,76),(187,77),(200,78),(204,9),
(209,18),(205,10),(209,5),(208,43),(204,67),(193,54),(206,54),(196,1),(206,7),(207,9),
(212,68),(211,5),(212,6),(211,7),(207,8),(199,9),(209,9),(205,23),(212,111),(213,40);


-- reserved_seats
INSERT INTO reserved_seats (booking_id, seat_id) 
VALUES (1,74),(1,75),(1,76),(2,10),(2,11),(3,100),(3,101),(4,66),(4,67),(5,141),
(6,33),(6,34),(7,102),(7,103),(8,2),(8,3),(8,4),(8,5),(9,98),(9,99),
(10,120),(11,74),(11,75),(11,76),(12,23),(12,24),(13,104),(13,105),(14,60),(14,61),
(15,130),(15,131),(16,71),(16,72),(17,88),(17,89),(18,51),(18,52),(18,53),(18,54),
(19,83),(19,84),(20,138),(21,94),(22,30),(22,31),(22,32),(23,101),(23,102),(23,103),
(23,75),(24,67),(24,68),(25,113),(25,114),(26,44),(27,97),(27,98),(28,71),(29,76),
(30,139),(31,79),(32,50),(33,80),(33,81),(33,82),(33,83),(33,84),(34,62),(34,63),
(35,120),(35,121),(36,16),(36,17),(37,82),(37,83),(38,59),(39,78),(40,111),(40,112),
(41,90),(41,91),(41,92),(42,52),(42,53),(42,54),(43,89),(43,90),(44,71),(44,72),
(45,120),(45,121),(46,38),(46,39),(47,101),(47,102),(48,62),(48,63),(48,64),(49,81),
(50,121),(50,122),(50,123),(50,124),(51,91),(51,92),(51,93),(51,94),(52,61),(52,62),
(53,107),(53,108),(54,67),(54,68),(55,117),(55,118),(56,61),(57,104),(57,105),(57,106),
(58,1),(58,2),(59,75),(59,76),(60,139),(60,140),(61,86),(61,87),(62,13),(62,14),
(63,101),(63,102),(63,103),(64,66),(64,67),(64,68),(65,120),(65,121),(65,122),(65,123),
(66,9),(66,10),(67,76),(68,48),(68,49),(68,50),(69,93),(69,94),(70,121),(70,122),
(71,80),(71,81),(71,82),(72,67),(72,68),(73,77),(73,78),(74,61),(74,62),(74,63),
(75,130),(75,131),(76,9),(76,10),(77,100),(78,57),(79,107),(80,110),(81,91),(81,92),
(82,5),(82,6),(83,104),(83,105),(84,23),(84,24),(85,118),(85,119),(85,120),(85,121),
(86,31),(86,32),(87,76),(87,77),(88,63),(89,89),(89,90),(89,91),(90,113),(90,114),
(91,79),(91,80),(91,81),(92,1),(92,2),(92,3),(92,4),(92,5),(92,6),(93,105),
(94,12),(94,13),(94,14),(95,111),(95,112),(95,113),(95,114),(96,59),(96,60),(96,61),
(97,81),(97,82),(98,47),(98,48),(99,85),(99,86),(100,118),(100,119),(101,103),(101,104),
(102,23),(102,24),(103,81),(103,82),(104,66),(104,67),(105,136),(105,137),(106,39),(106,40),
(107,75),(108,72),(109,101),(109,102),(109,103),(109,104),(109,105),(110,122),(110,123),(110,124),
(111,77),(111,78),(112,8),(113,82),(113,83),(114,56),(114,57),(115,139),(115,140),(116,69),
(117,75),(117,76),(117,77),(118,60),(119,88),(120,111),(121,108),(122,31),(122,32),(123,98),
(124,18),(124,19),(125,120),(125,121),(126,61),(126,62),(127,101),(127,102),(128,70),(128,71),
(129,105),(129,106),(130,141),(130,142),(131,77),(132,71),(133,106),(133,107),(133,108),(134,61),
(135,110),(135,111),(136,52),(137,84),(137,85),(138,37),(139,75),(139,76),(140,140),(140,141),
(141,90),(142,42),(143,94),(143,95),(144,66),(145,112),(146,21),(147,79),(147,80),(147,81),
(148,63),(149,89),(150,128),(150,129),(151,77),(151,78),(151,79),(152,57),(152,58),(152,59),
(153,89),(153,90),(153,91),(154,37),(154,38),(155,111),(155,112),(155,113),(156,19),(156,20),
(157,83),(158,5),(159,77),(160,140),(161,89),(162,9),(163,104),(164,71),(165,117),(165,118),
(166,66),(166,67),(167,83),(167,84),(167,85),(167,86),(168,55),(168,56),(168,57),(168,58),
(169,105),(169,106),(170,121),(170,122),(171,92),(172,36),(173,99),(174,38),(175,117),(175,118),
(176,68),(176,69),(177,81),(177,82),(178,31),(178,32),(179,103),(179,104),(180,119),(181,102),
(182,71),(182,72),(183,100),(183,101),(184,48),(184,49),(185,110),(185,111),(186,12),(186,13),
(187,78),(187,79),(188,39),(189,81),(190,135),(191,79),(192,33),(192,34),(192,35),(193,90),
(194,54),(194,55),(195,121),(195,122),(196,53),(196,54),(197,80),(197,81),(198,2),(198,3),
(199,81),(199,82),(200,115),(201,76),(202,27),(203,103),(203,104),(204,22),(205,140),(206,51),
(207,83),(208,64),(209,98),(210,118),(211,101),(212,61),(212,62),(213,79),(213,80),(214,50),
(215,111),(216,30),(216,31),(217,106),(217,107),(218,40),(218,41),(219,91),(219,92),(220,123),
(221,76),(222,20),(222,21),(223,105),(224,60),(225,133),(225,134),(226,70),(226,71),(226,72),
(227,83),(228,47),(229,80),(230,120),(230,121),(231,85),(231,86),(232,11),(232,12),(232,13),
(233,81),(233,82),(234,62),(234,63),(235,113),(235,114),(236,35),(236,36),(237,81),(237,82),
(238,41),(238,42),(239,77),(239,78),(240,129),(241,102),(241,103),(242,21),(242,22),(242,23),
(243,89),(244,45),(245,137),(245,138),(245,139),(245,140),(246,49),(246,50),(246,51),(247,101),
(248,34),(249,77),(250,138),(251,102),(251,103),(251,104),(252,61),(253,98),(253,99),(254,70),
(255,119),(255,120),(255,121),(256,23),(257,87),(258,36),(258,37),(259,95),(259,96),(260,132),
(261,88),(261,89),(261,90),(262,20),(262,21),(262,22),(262,23),(263,102),(264,63),(265,118),
(266,24),(267,79),(268,68),(269,90),(269,91),(270,120),(271,104),(272,8),(273,76),(274,33),
(275,122),(275,123),(275,124),(276,11),(276,12),(276,13),(277,82),(277,83),(278,27),(278,28),
(279,75),(279,76),(279,77),(280,140),(280,141),(281,80),(282,26),(283,100),(283,101),(283,102),
(284,23),(284,24),(285,121),(286,68),(287,78),(288,4),(288,5),(289,97),(290,113),(290,114),
(291,81),(291,82),(292,49),(293,85),(294,39),(295,140),(296,68),(297,82),(298,25),(298,26),
(299,83),(299,84),(300,134),(300,135),(301,101),(301,102),(302,56),(302,57),(303,92),(303,93),
(304,5),(305,112),(305,113),(306,61),(306,62),(307,81),(308,72),(309,88),(309,89),(310,123),
(311,97),(311,98),(311,99),(312,39),(312,40),(313,79),(314,61),(314,62),(315,144),(316,55),
(317,81),(317,82),(318,66),(319,101),(320,129),(321,83),(321,84),(322,13),(322,14),(322,15),
(323,89),(323,90),(324,37),(324,38),(325,115),(325,116),(326,68),(326,69),(326,70),(327,108),
(328,61),(329,77),(330,125),(330,126),(331,91),(331,92),(332,58),(332,59),(333,76),(333,77),
(334,23),(334,24),(335,131),(335,132),(336,10),(336,11),(337,99),(337,100),(338,67),(338,68),
(339,101),(339,102),(340,138),(341,105),(342,3),(342,4),(343,74),(343,75),(344,58),(344,59),
(345,122),(345,123),(346,34),(346,35),(347,79),(347,80),(348,27),(348,28),(348,29),(349,77),
(350,112),(350,113),(351,83),(351,84),(352,67),(352,68),(352,69),(353,101),(353,102),(353,103),
(354,13),(355,113),(355,114),(356,45),(357,90),(358,70),(359,79),(360,138),(361,97),(362,72),
(363,80),(364,54),(365,122),(366,30),(367,89),(368,48),(369,103),(370,110),(371,88),(372,62),
(373,81),(373,82),(374,59),(375,140),(376,70),(377,93),(378,23),(378,24),(378,25),(378,26),
(379,79),(379,80),(379,81),(380,118),(380,119),(381,103),(382,66),(382,67),(382,68),(382,69),
(383,77),(384,41),(384,42),(384,43),(385,125),(386,68),(387,84),(388,70),(388,71),(389,95),
(390,120),(390,121),(390,122),(391,76),(391,77),(391,78),(392,8),(392,9),(392,10),(393,103),
(394,39),(394,40),(395,127),(395,128),(395,129),(396,66),(396,67),(397,85),(397,86),(398,58),
(399,83),(399,84),(400,118),(400,119),(400,120),(401,103),(401,104),(401,105),(402,51),(403,75),
(404,34),(404,35),(405,109),(405,110),(405,111),(406,72),(407,93),(407,94),(408,49),(409,88),
(410,117),(410,118),(410,119);

```

# Section 7 - Aggregate Functions 
What you will learn 
- What aggregate functions are 
- How to use COUNT, MIN, MAX, SUM and AVG functions 
- How to group data using group by clause 
- What the HAVING clause is and how to use it 



## Aggregate functions
- Perform a calculations on data within a column and returns one result row 
- Can use GROUP BY clauses to gorup the results by one or more columns 
- Can use a HAVING clause in a similar way to a WHERE clause in a SELECT statement to filter the results set 

### COUNT 
```sql
select COUNT(*) from customers;
select COUNT(last_name) from customers;
select COUNT(last_name) from customers c where c.id = 1;
```

### SUM 
Sum will sum the values in the column, so it should be a numeric column 
```sql
select SUM(no_seats) from rooms;
```

### MIN MAX 
```sql
select MAX(length_min) from films;
select MIN(length_min) from films;
```

### AVERAGE
This returns the average of a given column, it will sum up all values in a column and is gonna divide the value by the number of entries in the column to return the average value
```sql
select AVG(length_min) from films;

select AVG(length_min) from films where length_min > 120;
```

## Grouping Data 
- In bookings table we have totol of 410 bookings.
- Now what if we want to get the number of bookings per person

```sql
select customer_id, COUNT(id) from bookings
GROUP BY customer_id;
```
- Any column in the query statement isn't an aggregate function must appear in a group by clause  


### Having clause 
Having clause acts like a where clause in a select statement but for group by statements  
```sql
select customer_id, COUNT(id) from bookings
GROUP BY customer_id HAVING customer_id = 1;
```

# Section 8 - Subqueries
What you will learn
- What subqueries are and the diferent types
- Non-correlated subqueries
- Correlated subqueries

## What are Subqueries are 
Subquerires are queries nested within other queries 

```sql
SELECT id, start_time from screenings 
where film_id IN (select id from films where length_min > 120);
```

- Can be used in a select, insert, update and delete query
- The nested query can be in the WHERE clause or the FROM
- Two types of subquery, 
  - Non-correlated
  - Correlated

### Non-correlated subquery
- The inner query can run independently of the outer query 
- Inner query runs first and producs a result set which is then used by the outer query 

```sql
SELECT id, start_time from screenings 
where film_id IN (select id from films where length_min > 120);

-- here film_id from screenings is a foreign key 
-- id from films is a primary key
-- this is how with subquery in where clause find link btw two tables 
```

### Correlated subquery
- The inner query can't run independently of the outer query 
- Inner query runs for every row in the outer query 

```sql
SELECT screening_id, customer_id 
(SELECT COUNT(seat_id) FROM reserved_seat WHERE booking_id = b.id)
FROM booking b;

from screenings 
where film_id IN (select id from films where length_min > 120);
```

Another Example 
- When you use subqueries after FROM bascially you are creating a table with the subquery 
- This is known as Derived table, we have to name the table
- Here we named it as b 

```sql
select AVG(no_seats), MAX(no_seats) from 
(SELECT booking_id, count(seat_id) AS no_seats FROM reserved_seats
GROUP BY booking_id) b;
```

### Exercise

```sql
-- select the film name and lenght for all films witha length greater than the average film length
SELECT MAX(countFilmId), MIN(countFilmId) from 
(select film_id, COUNT(id) as countFilmId from screenings group by film_id) f;

-- Select the maximum number and minimum number of screenings for a film 
select f.name, count(s.film_id) as noOfTimes from screenings 
JOIN films f ON f.id = s.film_id
group by s.film_id
ORDER BY noOfTimes desc;

-- Select each film name and the number of screenings for that film
select name, (select COUNT(id) from screenings where film_id = f.id) from films f;
```










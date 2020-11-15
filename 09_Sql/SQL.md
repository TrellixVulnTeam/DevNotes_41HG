## Table of contents 
- [Run Oracla via docker](#run-oracla-via-docker)
- [SQL Statements Used](#sql-statements-used)
- [Database Concepts](#database-concepts)
  - [What is a Database ?](#what-is-a-database-)
    - [What are the Database Management Systems? (DBMS)](#what-are-the-database-management-systems-dbms)
      - [Relational Database](#relational-database)
      - [Non Relational Database (No SQL)](#non-relational-database-no-sql)
  - [Why Oracle Database ?](#why-oracle-database-)
    - [What is a Relational Database ?](#what-is-a-relational-database-)
      - [What is an Entity ?](#what-is-an-entity-)
      - [What is the Relationship ?](#what-is-the-relationship-)
- [Introducing Database Objects](#introducing-database-objects)
      - [SchemaObjects](#schemaobjects)
      - [What is a Schema](#what-is-a-schema)
      - [What is HR Schema](#what-is-hr-schema)
- [SQL](#sql)
    - [What is SQL](#what-is-sql)
    - [Where we use SQL?](#where-we-use-sql)
    - [How do we run an SQL query?](#how-do-we-run-an-sql-query)
- [Retriving Data](#retriving-data)
    - [Orcale Datatypes](#orcale-datatypes)
    - [What is a NULL value ?](#what-is-a-null-value-)
    - [DESCRIBE Command](#describe-command)
    - [SQL ERRORS](#sql-errors)
    - [Using SELECT statements](#using-select-statements)
    - [Using Column Aliases](#using-column-aliases)
    - [Quote(q) opeartor](#quoteq-opeartor)
        - [DUAL table](#dual-table)
        - [Quote operator](#quote-operator)
    - [Distinct & Unique Operator](#distinct--unique-operator)
    - [Concatenation Opeartors](#concatenation-opeartors)
    - [Arthmetic Expressions](#arthmetic-expressions)
- [Restricting Data](#restricting-data)
    - [Using the WHERE clause](#using-the-where-clause)
      - [BETWEEN, AND Opeartors](#between-and-opeartors)
      - [Using the IN operator](#using-the-in-operator)
      - [Using the LIKE operator](#using-the-like-operator)
      - [Using the IS NULL operator](#using-the-is-null-operator)
      - [Logical Operators](#logical-operators)
      - [Rules of Precedence](#rules-of-precedence)
        - [Note](#note)
- [Sorting Data](#sorting-data)
    - [The ORDER BY Clause](#the-order-by-clause)
    - [ASC DESC Operators](#asc-desc-operators)
    - [NULLS FIRST AND NULLS LAST](#nulls-first-and-nulls-last)
    - [ROWNUM AND ROWID](#rownum-and-rowid)
    - [Oracle Fetch Clause](#oracle-fetch-clause)
- [Substitution Variable](#substitution-variable)
- [Single Row Functions](#single-row-functions)
    - [What is a Function](#what-is-a-function)
    - [Single-Row Functions](#single-row-functions-1)
    - [Character functions](#character-functions)
      - [Case Conversion Functions](#case-conversion-functions)
      - [Character Manipulation Functions](#character-manipulation-functions)
    - [Numeric functions](#numeric-functions)
    - [Date values & Formats in Oracle](#date-values--formats-in-oracle)
      - [DATE FUNCTIONS](#date-functions)
      - [DATE MANIPULATION FUNCTIONS](#date-manipulation-functions)
    - [Conversion Functions](#conversion-functions)
      - [Implicit Data type Conversion](#implicit-data-type-conversion)
      - [Explicit Data type Conversion](#explicit-data-type-conversion)
        - [TO_CHAR](#to_char)
        - [TO_NUMBER](#to_number)
        - [TO_DATE](#to_date)
    - [NULL related (NVL, NVL2, NULLIF, COALESCE)](#null-related-nvl-nvl2-nullif-coalesce)
      - [NVL Function](#nvl-function)
      - [NVL2 Function](#nvl2-function)
      - [NULLIF Function](#nullif-function)
      - [COALESCE](#coalesce)
- [Multiple row functions](#multiple-row-functions)
    - [Group Functions](#group-functions)
    - [Grouping Data ( GROUP BY Clause)](#grouping-data--group-by-clause)
    - [Having Clause](#having-clause)
    - [Nested Group Functions](#nested-group-functions)
- [Joining Multiple Tables](#joining-multiple-tables)
    - [Creating a JOIN](#creating-a-join)
    - [Natural Join](#natural-join)
    - [Join with the USING Clause](#join-with-the-using-clause)
    - [Handling Ambiguous Column Names](#handling-ambiguous-column-names)
    - [Inner Join](#inner-join)
    - [Multiple Join Operations](#multiple-join-operations)
  - [Others](#others)


# Run Oracla via docker
1. Run Oracle via docker
```shell
  // # to run oracle 
  docker run -d -p 1521:1521 --name myoracle store/oracle/database-enterprise:12.2.0.1
  // # wait for the msg: Done ! The database is ready for use .
  // # to run logs
  sudo docker logs -f myoracle 
```
2. Run sqlDeveloper by running sqldeveloper.sh  
```shell
  /opt/sqldeveloper/sqldeveloper.sh
```
3. sys user
Username: sys
Password: Oradoc_db1 

4. To list containers 
``` docker ps -a ```
5. To restart container  
```
docker restart <container_id> 
// sudo docker restart myoracle 
```
Ref
https://gist.github.com/SanthoshBabuMR/d5f22e3677815074dc8656f544a319b1

# SQL Statements Used 
- DML : Data Manipulation Language
  - SELECT
  - INSERT
  - UPDATE
  - DELETE
  - MERGE
- DDL : Data Defintion Language
  - CREATE
  - ALERT
  - DROP
  - RENAME
  - TRUNCATE
    - This removes all records in a table 
- DCL : Data Control Language
  - Controls Privilege, Access database, Create Connection  
    - GRANT     
    - REVOICE
- TCL : Transaction Control Language
  - Saving or Cancelling the the changes
    - COMMIT
    - ROLLBACK
    - SAVEPOINT

# Database Concepts
## What is a Database ?
- A database is basically a place that we store and organized collection of data
- In order to manage our database, we use a software called Database Management System (DBMS)

### What are the Database Management Systems? (DBMS)
- The collection programs taht enable the uses to access the database and manipulate, retrieve data to the users.  
- There are few types of DBMS
  - Hierarchical DMBS
  - Network DBMS
  - Relational Database (Structured Query Language)  
  - Object Relational DBMS / Non Relational (No Sql)
  
#### Relational Database
- In relational DB, we store data in table that are linked to each other using relationships.
- Most popular RelationalDatbaseManagementSystems are
  - MySql
  - Sql Server
  - Oracle 
- Each database management system has a differnt flavour of SQL, but all these implementations are very similar and based on the standard SQL specification 

#### Non Relational Database (No SQL)
NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.

## Why Oracle Database ?
Pros
- Security 
- Performance
- Scalability 
- Poweful Coding 
  - Oracle SQL
  - PL/SQL
- My Oracle Support

Cons
- You must know how to deal with the database 
- It's not free  

See, DB-Engines Ranking
https://db-engines.com/en/ranking

### What is a Relational Database ? 
A relational database organizes data into tables which can be linked—or related—based on data common to each. This capability enables you to retrieve an entirely new table from data in one or more tables with a single query.

![alt text](https://github.com/shaktish/DevNotes/blob/master/09_Sql/images/relationalDatabase.png?raw=true "graph_term_undirectedgraph")

#### What is an Entity ?
- The smallest unit containing a meaningful set of data is called as Entity
- We will assume Table as our entity 

#### What is the Relationship ?
In the below figure, we use DEPARTMENT_ID to define relationshp
![alt text](https://github.com/shaktish/DevNotes/blob/master/09_Sql/images/relationalDatabase.png?raw=true "graph_term_undirectedgraph")

# Introducing Database Objects
Oracle Database has many database objects categoriezed under two subjects which are Scheme objects and Nonshcema objects.

#### SchemaObjects 
A schema is a collection of logical structures of data or objects. 

- Table : A table is the base unit of the database to store data formatted with columns and rows
- View  : A view is a virutal table that provides access to a subset of columns or some restricted rows from one or more tables 
  - Works like Alias 
  - This is just sql query
```SQL
  // Create a hightSalreis 
  CREATE VIEW high_salaries AS 
    select DEPARTMENT_ID, MAX(SALARY) salary 
      FROM EMPLOYEES
        GROUP BY DEPARTMENT_ID;
        
  // Alias created       
  SELECT * FROM high_salaries
```
- Constraint : Constraints are the rules for restricting invalid data entry into tables 
- Index  : Indexes are used for improving speed of data retrieval from tables 
- Sequence : Sequences are the database objects which generate unique integers 
- Synonym : A synonym is an alternative names (alias) fro the database objects 
- Materialzied View : A materialized view has a real table filled by an SQL query unlike the views. The real table is truncated and refilled with a specificied time frequency.
- Functions and Procedures : Functions return some value, but procedures return nothing 
  - PL/SQL : SQL + Procedurural Programming 
  - By using PL+SQL, we can have variables, if/else, loop, manymore
- Triggers : Triggers are compiled program unutis stored in teh database and executed with a specific event
  - insert, update, delete, create
  - Before, On, After 
- Packages 
  - Packages are the scheme objects that complied and stored in the database 
  - Packages are consists of SQL, PL/SQL codes, variables cursors etc. to perform one or mroe than one operation by using functions and procedures. 
- Database Links : Database links are the connections btw two physical database servers 

#### What is a Schema
Schemas are teh collections of objects for each user in Oracle Database 

#### What is HR Schema
Abbreviation of Human Resources. A schema that can practice on it. 

![alt text](https://github.com/shaktish/DevNotes/blob/master/09_Sql/images/EntityRelationshipDiagram.png?raw=true "EntityRelationshipDiagram")

# SQL
### What is SQL 
- SQL stands for Strucuted Query Language
- SQL is a language used to intract with the database.

### Where we use SQL?
- BI, Data Science, Database Administration, Web development etc

### How do we run an SQL query?
- Tools like SQL plus, Toad Etc, We will use SQL developer as it was developed by Oracle 


# Retriving Data 
### Orcale Datatypes 
- VARCHAR2(SIZE) : Variable-length character data
  - When u enter 20characters, it will take only 20-chars space in db
- CHAR(SIZE) : Fixed-length character data
  - When u enter 20characters, it will take full 100-chars space in db
- NUMBER(p,s) : Variable-length numeric data
  - P means Precision
  - S means Scale
- DATE : Date and time values
- LONG : Variable-length character data upto (2gb)
  - Not recommended
- RAW and LONG RAW : Raw binary data
  - Not recommended instead use BLOB or CLOB or BFILE
- BLOB : Maximum size is (4 gigabytes)
  - LOB -> Large Objects, used to store large block like images, video, audio etc
- CLOB : Maximum size is (4 gigabytes)
  - used to store large block of characters 
- BFILE : Binary data stored in an extenral file (upto 4gb)
  - External Large files, it stores binary data but in an extrenal file in operating system, 
  - It is read-only 
- ROWID : A base 64 number system representing the unique address of a row in its table 
  - Base64 represents physical row in a table 
  - Stored in a Hexadecimal string

### What is a NULL value ?
In database context NULL is a special marker to indicate that data not exists in database 
- Null means unknown or nonexistent 

### DESCRIBE Command
To see attribute of the column we use Describe command 
- Provides a description of the specified table 
- Returns column names, nullable or not and data types. 
- ``` DESC[RIBE] table_name```;
- Can be used with the DESC or DESCRIBE keywords 

Implementation in Oracle Sql developer
1. Open oracle developer tool
2. Connect to the database
3. Open SQL worksheet, run the below command to get all employees
```
DESCRIBE HR.employees

// SHORT to describe, only for naming
DESC HR.employees
````
4. After writing the query, press shift+f4 button together to see a more details view of a table 

### INFO Command
A improved version of desc command 
- Denotes the primary Key
- References of other tables

```
INFORMATION HR.employees;
// SHORT
INFO HR.departments;

// 
INFO+ HR.employees
```

##### INFO+
- LOW_VALUE describes low value in alphabetic order or ascending order
- HIGH_VALUE describes low value in alphabetic order or ascending order
- NUM_DISTINCT describes denotes no of distinct values
- HISTOGRAM describes special type of column statics more details info about the data distrubution in table column, Used for query performance 

### SQL Statement Basics
- SQL statements are not case-sensitive 
- Use semi-colon to end the statement 

```sql
SELECT * FROM HR.EMPLOYEES;
```

### SQL ERRORS
When you can't solve the error using console, goto google and type the error code, eg ORA-01722

### Using SELECT statements
Select statement is used to retrieve data from the database

- Example QUery
```sql
SELECT * || {col_name1, col_name2,...} FROM TABLE;
```
- * retrieves all data without knowing table metadata
  - ```SELECT * FROM employees;```
- We can retrieve some specific columns by writing the column names
  - ``` SELECT FIRST_NAME, LAST_NAME, EMAIL FROM HR.EMPLOYEES; ```
  
### Using Column Aliases
- Used to rename a column heading
  - ``` SELECT FIRST_NAME first, LAST_NAME surname, EMAIL FROM HR.EMPLOYEES; ```
- AS keyword is used to increase readability 
  - ``` SELECT FIRST_NAME AS first, LAST_NAME AS surname, EMAIL FROM HR.employees;```
- AS keyword is useful for calculations 
  - ``` SELECT first_name, employee_id, salary + nvl(salary*commission_pct,0) + 1000, salary FROM HR.employees; ```
- Aliases are used with the double quotation marks if our alias name contains space characters, special characters or it is used for handling case-sensitivity
  - ``` SELECT FIRST_NAME AS "$first$", LAST_NAME AS "$surname$", EMAIL FROM HR.employees; ```

### Quote(q) opeartor 
##### DUAL table
There is a table called DUAL. 
- It's sort of dummy table with single row used for selecting soemthing when you are not actually  interested in the data but instead want to show the results of some funtions etc 
- It is generally used by developers to show or explain something
  - ``` SELECT * FROM DUAL; 
  SELECT 'My name is Shaktish' AS "output" from dual; ```

##### Quote operator
- The quotation mark is used to increase readability and usability
  ``` SELECT q'[My name is Shaktish, frnd name is Annz]' my_text from dual; ```
- when you use single quote, 
  - ``` select 'I'm Hero' as 'HeroHead' from dual  ```
- This will throw error as second quote is the end, rest is not interpted
- To over-come use, two quotes '' 
  - first is quote, second is escape character 
  - ```select I''m Hero' as 'HeroHead' from dual```
- if you want to use escape character at serveral places, in that scenari use Quote opeartor

### Distinct & Unique Operator 
- They are used to eliminate the duplicate rows 
  - ``` SELECT JOB_ID FROM HR.EMPLOYEES;```
    - // 107 ROWS
  - ``` SELECT DISTINCT JOB_ID FROM EMPLOYEES;  ```
    - // 19 ROWS
- Select UNIQUE will also return distinct values
  - It is Oracle's old syntax, it is basically synonym of distinct
  - ``` SELECT UNIQUE JOB_ID FROM EMPLOYEES;  ```
  - UNIQUE may not work in other databases
- The DISTINCT Operator is a row-based operator. Only one DISTINCT opeartor is used in an SQL query. 

### Concatenation Opeartors
- Concatenates two or more strings or columns and returns as a single output column value
- Can be done btwo two Vetical bards (||)
  - ``` select 'My name is' || FIRST_NAME from HR.EMPLOYEES; ```
  - ``` select LAST_NAME || ' EVILY GOOD ' || FIRST_NAME  AS FULLNAME from HR.EMPLOYEES; ```
- Concatenating with NULL value does not return NULL, it returns the other character strings 
  - ``` SELECT commission_pct || ' are you there ' FROM HR.EMPLOYEES; ```

### Arthmetic Expressions
- Arithmetic expressions are used to perfrom arithmetic opeartions in SQL
- An Arithmetic expression can contain column names, numeric numbers and arithmetic operators, basic arithmetic operators as follows
  - + : Addition
  - - : Subtraction
  - * : Multiplication
  - / : Division 
- Multiplication and division operations are performed before the addition and subtraction opeartions 
- Parentheses has the highest precedence 
- Arithmetic Example
  - increase 50Rs*12Months in salary 
  - ``` SELECT employee_id, salary, salary+100*12 "Annual Salary" FROM HR.employees; ```
  - Solution : ``` SELECT employee_id, salary, (salary+100)*12 "Annual Salary" FROM HR.employees ```
- Arithmetic opeartions with data values return new data vlues
  - You can also perform arithmetic operations by using dates and numbers together 
  - ``` select sysdate + 3 from dual; ```
  - -- three days after today 
  - Sys date return the current date and time of the system
- Arithmetic opeartions with the NULL values return NULL

# Restricting Data
We ll explore how to restrict data by various methods  

### Using the WHERE clause
- WHERE clause limits the rows by a query
  - ``` SELECT FIRST_NAME FROM HR.employees WHERE JOB_ID = 'IT_PROG'; ```
- WHERE clause is used with
  - Comparison opeartors (=, <, >, <=, >=, <>, != )
- BETWEEN ... AND, IN, LIKE and NULL
- Logical opeartios (AND, OR, NOT Opeartors)

#### BETWEEN, AND Opeartors
- Retrieves data btw the specified lower limit and upper limit
- The lower and upper limit values are included 
- Many data types like number, date, character values can be restricted with the BETWEEN, AND Operators
  - ```SELECT first_name, salary FROM HR.EMPLOYEES where salary BETWEEN 1000 AND 12000```

#### Using the IN operator
- IN operator is sued to retrieve the restricted values in a specified list
- Many data types like number, date, character values can be used with IN Operator
- The order of the specified values is not important 
- ``` SELECT employee_id, first_name FROM HR.EMPLOYEES where employee_id IN ( 100,105,102,200 ) ```

#### Using the LIKE operator
- The LIKE operators are used for searching some texts in string values 
- The LIKE operators is used to perform wildcard searches and retrieves rows match in a certain character pattern
- Oracle Wildcard Operators
  - % : Matches any number of characters including 0 or more characters
  - _ : Matches exactly one character 
- The LIKE operator can also be used without the wildcard characters (%,_) but it is nonsense because it will be equal to (=) opeartor and LIKE is slower than ( = ) operator 
- Example, % works like wildcard so it brings any job_id matching 'SA_M' abbreviation Sales-Manager
  - ``` SELECT * FROM HR.employees where job_id like 'SA_M%';```
  - ``` SELECT * FROM HR.employees where first_name like 'A%' ```
- Example, putting (%) before the string, will match the last character
  - Select all first name tat ends with a character
  - ``` SELECT * FROM HR.employees where first_name like '%a' ```
- ( _r% ), this will return the firstNames matching the below condition
  - _, match any character
  - r, second letter to be followed by r 
  - %, next character is wild-card so return any characters 
  - ``` SELECT * FROM HR.employees where first_name like '_r%' ```
  
#### Using the IS NULL operator
NULL value
- Unassigned
- Unavailable
- Unknown 

How to search null values
- The IS NULL operator is used for SERACHING NULL values
- Below command returns employees who don't have a manager
  - ``` SELECT * FROM HR.EMPLOYEES WHERE manager_id  IS NULL; ```
- = NULL is not the same as the IS NULL ```
- IS NOT NULL operator returns the values that has values 
  - ``` SELECT * FROM HR.EMPLOYEES WHERE commission_pct IS NOT NULL; ```

#### Logical Operators 
- Logical operators enable us to use more than one condition in the WHERE clause 
  - AND : Return TRUE if all component conditions are true
  - OR : Returns TRUE if at least one the component conditions are true 
  - NOT : Returns TRUE if the condition is false 
- Example, return the employees whose salary is greater than 10k and job is sales rep
  - ``` SELECT * FROM HR.employees where job_id like 'SA_REP' AND salary > 10000; ```

#### Rules of Precedence 
The expressions in the WHERE clause are preformed in the following order

Order : Meaning 
- 1 : Arthmetic Operators
- 2 : Concatenation Opeartor
- 3 : Comparsion Conditions
- 4 : IS [NOT] NULL, LIKE [NOT] IN
- 5 : [NOT] BETWEEN
- 6 : Not equal to
- 7 : NOT Logical opeartor
- 8 : AND Logical opeartor
- 9 : OR Logical opeartor

##### Note
- You should use parentheses to avoid logical order confusion or change the order specifically 
  - ``` WHERE (job_id = 'IT_PROG' OR job_id = 'ST_CLERK') AND salary > 5000;```

# Sorting Data
We ll know how to sort the data 

### The ORDER BY Clause
 The ORDER BY clause changes the returning rows order by any column or alias or the numeric positions of the columns in the SELECT list 

 - The ORDER BY clause can sort the retrieved rows in ascednign (ASC) or descending (DESC) order
 - If you do not specify anything for the type of the oder, the default order is ascending 
   - ``` SELECT * FROM HR.countries ORDER BY country_name; ```
   - ``` SELECT * FROM HR.employees ORDER BY first_name; ```
- The ORDER BY clause can be used with the given alias in the SELECT statement  
- The ORDER BY clause can also be used with the colum postion in the SELECT List or the column order in the database 
  - Orders by first_name as the order 
  -  ``` SELECT first_name, last_name, salary, salary+5 as NEW_SALARY FROM HR.employees ORDER BY first_name; ```
- The ORDER BY can be used with multiple columns 
  - ``` SELECT * FROM HR.employees order by first_name, job_id, salary; ```

### ASC DESC Operators 
- Queries can be ordered by columns in ascedning or descedning order individually 
  - Arrange the firstname in descending 
  - ``` SELECT * FROM HR.employees order by first_name desc; ```

### NULLS FIRST AND NULLS LAST 
- The NULLS FIRST or NULLS LAST operators are used for changing the order of the NULL values
  - ``` SELECT first_name, last_name, commission_pct c FROM HR.employees ORDER BY 1 desc NULLS LAST, last_name asc, c NULLS FIRST ```


### ROWNUM AND ROWID
ROWID 
- A unique identifer that contains the physical address of a row
- Oracle automatically generates a unique ROWID at the time of insertion of a row. 
- The fastest way to access a single row is using its ROWID
- The ROWID is permanent 
- The ROWID doesn't change 

ROWNUM
- The ROWNUM is nothing but consecutive logical sequence number given to the rows fetched from the table
- To limit the returning rows in a table, you can use the ROWNUM pseudo column
- The ROWNUM is temporary. 
- If you change the query, the rownum number will to another row 

``` SELECT employee_id, first_name, last_name, salary, rowid, rownum FROM employees WHERE department_id = 80 AND rownum <= 10; ```

### Oracle Fetch Clause
The FETCH clause is used in conjunction with the SELECT amd ORDER BY  clauses to limit the rows and retrieve a portion of the returning rows  

```SQL
[OFFSET rows_to_sjio ROW[S]]
FETCH [FIRST|NEXT] [row_count | precent PERCENT] ROW[S] [ONLY | WITH TIES]; 
```
- OFFSET L specifies the number of rows to skip before the limiting starts
- ROW | ROWS : Both of them can be used based on the returning rows in order to inrease the semantic clarity 
- FETCH : Specifies the number of rows or percentage of rows to return 
- FIRST | NEXT : You can use any of them based on the situation
- row_count | percent : the row_count to specify the number of rows to return, the PERCENT sepcifies the percentage of the the total number of selected rows to return
- ONLY | WITH TIES : ONLY is used to return exactly the specified number of rows or percentage of rows. The WITH TIES returns extra rows with the same vlaue as teh last row fetch. If you specify WITH TIES, then you must specify the oder_by_clause. If you dont not specify the ORDER_BY lause then no additional rows will be returned 

ROWS ONLY
```SQL
SELECT first_name, last_name, salary FROM HR.employees 
OFFSET 1 ROW FETCH FIRST 10 ROWS ONLY;
```

WITH TIES
- make sure to set ORDER BY when using WITH TIES
```SQL
SELECT first_name, last_name, salary FROM HR.employees ORDER BY salary DESC OFFSET 1 ROW FETCH FIRST 10 ROWS WITH TIES;
```
# Substitution Variable 
- A substiution variable can be thought as a user variable
- The substitution variables are placeholders in an SQL script wher you want to substitute some values at runtime 

# Single Row Functions 
### What is a Function
- Functions are created for manipulating the data and returning a value
- Functions must be created before calling them. Otherwise, you will have the following error:
- Functions are formerly created codes that reside in the database. They can be called easily by typing only their names and parameters
- A function is a bunch of code created for reuse.
- There are two types of functison
  - Single Row Functions
  - Multiple Row Functions    

### Single-Row Functions
- As the name implies gets only one row as input and return one result per row.
- Can be used alone or nested 
- A column or an expression can be used arguments
- The returning data type can be different than the input data type
- Can be used in SELECT, WHERE, OR ORDER BY clauses
- ``` SELECT function_name[(arg1, arg2,...)] FROM dual;```
- There are five types of Single-Row functions
   - Character
    - Accepts character values as input and return character or numeric values
  - Numeric
    - Accept numerice values as input and return numeric values as ouput  
  - Date
    - Operate on values of the DATE data type
  - Conversion
    - Used to convert one data type to another
  - General
    - These functions take in any data but they are mainly used to handle the NULL values  


### Character functions 
- Takes in character data as input and return character or numeric data as output.
- There are two different types of character functions
  1. Case Conversion functions : Convert characters to upper case or lower case 
     - UPPER, LOWER, INITCAP function
  2. Character Manipulation functions
     - SUBSTR, LENGTH, CONCAT, INSTR, TRIM, REPLACE AND LPAD | RPAD functions

#### Case Conversion Functions 
Case conversion functions are used to convert the characters to uppercase or lowercase characters

- LOWER function : Converts all the input characters to lowercase character
- UPPER function : Converts all the input characters to uppercase character
- INITCAP function : Converts first letters of earch word to uppercase and rest of them to lowercase
- Example 
  - ``` SELECT UPPER(first_name) FROM HR.employees ```
  - ``` SELECT * FROM HR.employees where lower(last_name) = 'king' ```

#### Character Manipulation Functions 
Are used to manipulate, change, extract or alter a character string

Character Manipulation 
- SUBSTR(source_string, position[,length])
  - Example: ``` SELECT SUBSTR(first_name,1,3), last_name FROM HR.employees ```
  - Result : Ell (first three letter)
  - Note 
    - Index starts from 1 in Oracle not 0
- LENGTH(string)
  - Example : ``` SELECT length(first_name) FROM HR.employees ```
  - Result : Returns character count of each first name
- CONCAT(string1, string2)
  - Example : ``` SELECT CONCAT(first_name, last_name) FROM HR.employees; ```
  - Alternative : 
    - Using concat operator
    - ``` SELECT first_name || ' ' || last_name from HR.employees ```
  - Result : Concats/combines two words/column names
- INSTR(string, substring[postion, occurence])
  - Example : ``` SELECT INSTR('I am learning how to use functions in Oracle', 'o', 20,2) from dual; ```
    - STR : string
    - 'O' : letter to search
    - 20 : 'Position from'
    - 2 : occurence, for the first time or second time 
  - Result : Find position of a character in a word
- TRIM 
  - Example : TRIM('   sql Course ')
  - Result : Sql Course
- REPLACE (string, string_to_replace[,replacement_string])
  - Example : REPLACE('SqlCourse', 's', '*')
  - Result : Sql Cour*e

### Numeric functions 
Numeric functions accept numeric values as the input and return numeric vlaues as the output
- ROUND 
  - Takes in a number and rounds it to the sepcified number of decimal places
  - Syntax : ROUND(number[,decimal])
  - Example : ROUND(12,136,2) 
  - Result : 12.14
- TRUNC 
  - Trucates values to the sepcified number of decimal places
  - Syntax : TRUNC(number[,decimal])
  - Example : TRUNC(12,136,2) 
  - Result : 12.13
- CEIL : Retruns the smallest integer number greater than or eqaul to a specified number
  - Syntax : CEIL(number)
  - Example : CEIL(2.67)  
  - Result : 3
- FLOOR 
  - Returns the hightest interger number less than or equal to a specified number
  - Syntax : FLOOR(number)
  - Example : FLOOR(2.67)  
  - Result : 2
- MOD : Returns the remainder of division 
  - Syntax : MOD(m,n)
  - Example : MOD(8,5)  
  - Result : 3

### Date values & Formats in Oracle
- Date is the main datatype used in Oracle for storing the date values
  - Oracle database stored the date values in an internal numerice format
  - It stored a seven-byte number that contains the century, year, month, day and hour, minute and second
  - There are many different date representations in Oracle like ('DD-MON-RR','DD-MM-YY')
  - The RR date format is a different time format element taht allows us to show 20th century dates in the 21st centruy using only 2 digits
- TIMESTAMP 
  - This data type store year, month, day, hour, minute, second as well as fractional seconds
- TIMESTAMP WITH TIME ZONE
  - This data type is similar to TIMESTAMP WITH TIME ZONE, but it stores the timezone along with it 
- TIMESTAMP WITH LOCAL TIME ZONE
  - This data type is similar to TIMESTAMP WITH TIME ZONE, but the stored timezone is the database's timezone

#### DATE FUNCTIONS
- SYSDATE : return the current date and time of the OS where the Oracle Database is installed
- CURRENT_DATE : returns the current date and time of the place where the user's sesion is logged in from 
- SESSIONTIMEZONE : returns time zone of the user's session
- SYSTIMESTAMP : returns the date and time of the database 
- CURRENT_TIMESTAMP : returns current date and time from user's session
- 
```SQL
SELECT SYSDATE, CURRENT_DATE, SESSIONTIMEZONE, SYSTIMESTAMP, CURRENT_TIMESTAMP FROM DUAL;
```
#### DATE MANIPULATION FUNCTIONS
Date functions operate on dates and return dates, numbers or texts
- ADD_MONTHS(DATE, N) 
  - Adds months to a date
  - EXAMPLE : ADD_MONTHS('18-SEP-23', 3)
  - RESULT : 18-DEC-23
- MONTHS_BETWEEN(date1, date2)
  - Number of months btw 2 dates
  - EXAMPLE : MOTHS_BETWEEN('03-SEP-20', '18-FEB-20')
  - RESULT : 6.5161290....
- ROUND(date,[,format])
  - Rounds a date/time value to a specified element 
- TRUNC(date[,format])
  - Truncates a date/time value to specifi element
- EXTRACT (DATE_COMPONENT from DATE)
  - Extracts a specific time component from a date
- NEXT_DAT(date, day_of_week)
  - Returns teh date of the next specified weekday
- LAST_DAY(date)
  - Return the last day of the month

### Conversion Functions 
Oracle conversion function convert one data type into another 
- Implicit Data type Conversion
  - Oracle Server automatically converts some data types to the required one.
- Explicit Data type conversion 
  - Are done using the conversion functions explicitly 

Although implicit conversion converts some data types atuomatically, it is recommended to use the explict conversion functions to ensure the relability of SQL statement

#### Implicit Data type Conversion
- A VARCHAR2 or CHAR value is converted to a NUMBER or a DATE by the Oracle Server automatically 
- A NUMBER or a DATE value is automatically converted to character data by the Oracel server
- The implicit conversions are performed only if the characters match with a valid number or data.
- Example with Table
  - From : To
    - VARCHAR2 OR CHAR : NUMBER
    - VARCHAR2 OR CHAR : DATE
    - NUMBER : VARCHAR2
    - DATE : VARCHAR2
- In the below query, we entered 5000 as string, Oracle converts string to number, this is called implicit Conversion  
  - ``` SELECT * FROM HR.EMPLOYEES where salary > '5000'; ```
  - If it can't convert, it will throw an error 
  - Implicit conversion also decreases performance 
- Another example, string to date
  - ``` SELECT * FROM HR.EMPLOYEES WHERE HIRE_DATE = '17-JUN-03' ```
- NUMBER + STRING returns string
  - ``` select department_id || department_name from HR.departments; ```

#### Explicit Data type Conversion
There are 3 functions for explicit data type conversion which are 
- TO_CHAR()
- TO_NUMBER()
- TO_DATE()

##### TO_CHAR
- Converts the Number or DATE to the VARCHAR2 data type in the specified format model.
- SYNTAX
  - TO_CHAR( date|number, [format_model], [nls_parameter] )
  - date | number : this is the value to be conveted into the VARCHAR2 type. It can be a date or a number
  - format_model : (optional), The input value is converted to the VARCHAR2 data type in the specified format model. 
  - nls_parameter : (optional) Specifed the langague for the names and abbreviations of the days and month (Eg, Monday -> Mon, Janurary -> Jan, etc)
    - nls : national language support
- TO_CHAR functions is case-senstive 
- Example 
  - Displays hire date in YEAR
  - ``` SELECT first_name, last_name, TO_CHAR(hire_date, 'YYYY') from HR.EMPLOYEES where TO_CHAR(employee_id) = '100'; ```
- Number format models are used with the TO_CHAR function to display the numeric vlaues in different formats 
- Number Format Models : Meaning
  - 9 : Sepcifies the number of digits
  - 0 : specifies leading or trailing zeros
  - $ : Adds dollar sign
  - L : Displays local currecny symbol
  - . : Displays a decimal point
  - , : Displays comma as indicator 
- Example
  - Change Salary into readably currency format
  - ``` SELECT salary as Original, TO_CHAR(salary, 'L999,999') as Modified FROM HR.employees  ```

##### TO_NUMBER
- It is use to convert a text to a number 
- Syntax
  - TO_NUMBER(char, [,'format_model'])
- Same Number Format Models applies to number
- Example
  - ``` SELECT TO_NUMBER('$6,152.21', '$99,999.99') AS FORMATTED_NUMBER from dual ```
##### TO_DATE
- Converts the characters to a DATE date type in the specifed format model
- Syntax
  - TO_DATE(char,[,'format_model'])
  - Example
    - ``` SELECT first_name, last_name FROM HR.EMPLOYEES where HIRE_DATE > TO_DATE('Jun 12,2005', 'Mon DD, YYYY') ```

### NULL related (NVL, NVL2, NULLIF, COALESCE)
There are four NULL functions
- NVL
- NVL2
- NULLIF
- COALESCE
  
#### NVL Function 
- The NVL function allows us to replace a null value with a meaningful alternative.
- Syntax
  - NVL(Expression1, Expression2)
  - If expressions 1 is null, then NVL() functions returns expression2 
- Data type can be characters, numers or dates
- Data types must match with each other(number-number, date-date, character-character)
- The NVL functions is extermely useful in arithmetic opeartions to avoid calculation errors 
- Example
  - ``` SELECT JOB_ID, FIRST_NAME, LAST_NAME, COMMISSION_PCT, NVL(COMMISSION_PCT,0) AS NLV_COMM_PCT FROM HR.EMPLOYEES where JOB_ID in ('SA_REP', 'IT_PROG'); ```

#### NVL2 Function 
- The NVL2 function allows us replace a value when a null vlaue is encountered as well as when a non-null value is encountered
- Syntax
  - NVL2(Expression1, Expression2, Expression3)
- If the Expression1 is not null, then it return the Expression2. if the Expression1 is NULL, then then Expression3 is returned
- And the Expression 1 doest not have be the same data type in Expression2 and Expressioin
- Example
  - ``` SELECT JOB_ID, FIRST_NAME, COMMISSION_PCT, NVL2(COMMISSION_PCT,'has', 'has not') from HR.EMPLOYEES where JOB_ID IN ('SA_REP', 'IT_PROG'); ```


#### NULLIF Function 
- Syntax
  - ``` NULLIF(Expression1, Expression2) ```;
- Compares Expression1 and Expression2, if they are equal returns NULL but if they are not equal returns Expression1
- The Expression1 and Expression2 must be in same datatype
- Example
  - ``` SELECT FIRST_NAME, LAST_NAME, LENGTH(FIRST_NAME) AS LEN1, NULLIF(LENGTH(FIRST_NAME), LENGTH(LAST_NAME)) from HR.Employees; ```

#### COALESCE
- Improved version of NVL function
- The COALESCE function accepts a list of arguments and returns the first one that evaluates to a non-null value 
- Syntax
  - ``` COALESCE(Expression1, Expression2, ..., ExpressioN)
- It aceepts at least two ore more parameters 
- If all the specified expresssions are NULL, then the function returns NULL
- All of the expression must be in the same data type
- Example
  - ``` SELECT coalesce(null, null, null, null, 1,2,3, null) from dual; ```
  - ``` SELECT location_id, street_address, postal_code, city, state_province, coalesce(state_province, city) as STATE_PROV FROM HR.locations; ```

# Multiple row functions
Multiple row also called group functions gets more than one row as input and return 1 result as output for that group of rows 

### Group Functions 
- Reporting Aggregated Data using the Group Functions
- Group functions are also called Multiple Row Functions or Aggregate Functions 

Real world Scenarios
- How many employees do we have ?
  - ``` SELECT COUNT(*) from HR.EMPLOYEES ```
- who earn the maximum salary among the IT programmers ?
  - ``` select MAX(salary) FROM HR.employees WHERE JOB_ID = 'IT_PROG'; ```
- what is the average salary we pay to our employees ?
  - ``` select AVG(salary) FROM HR.employees WHERE JOB_ID = 'IT_PROG'; ```
- How many employees earn more than 10,000 salary ?
  - ``` SELECT COUNT(*) from HR.employees where salary > 10000; ```

These kind of information can be handled by group functions 

- Syntax 
  - ``` SELECT group_function([DISTINCT|ALL] column_name), ... FROM table [WHERE condition]; ```
- Group functions opeartoe on multiple rows and return one result for each group 
- Group functions are usally used after the SELECT keyword
- Multiple group functions can be used in a single SELECT statement
- Group functions ignore the NULL values! but you can use the NVL, NVL2, COALESCE, DECODE functions or CASE expressions to handle the NULL values 
- The DISTINCT and ALL (default) keywords are used with the gorup function to consider duplicate values 
- Most commonly used functions
  - AVG : Returns the average value
  - COUNT : Returns the number of rows returned by a query
  - MAX : Returns the maximum value of the exoression or a column
  - MIN : Returns the minimum value of the expression or a column
  - SUM : Returns the sum of the expression or column values 
  - LISTAGG : Transforms and orders data from mulitple rows into a single list of values separted by a specified delimiter. 
- Notes
  - Groupby Function Syntax
    - AVG([DISTNICT|ALL] expression)
    - ``` SELECT AVG(SALARY), AVG(ALL salary), AVG(DISTINCT salary) from HR.employees; ```
  - Group functions must be used with Group By CLAUSE else you cant add a column
    - the following query will fail as it don't have a groupby clause and has a column 
    - ``` select FIRST_NAME, MAX(salary) FROM HR.employees WHERE JOB_ID = 'IT_PROG'; ```
    - the following query will work 
      - ``` select MAX(salary) FROM HR.employees WHERE JOB_ID = 'IT_PROG'; ```
  - Handling NULL, use Null functions, the following query uses NVL to handle null value 
    - ``` select AVG(commission_pct),  AVG(NVL(commission_pct, 0)) from HR.employees; ``` 
  - COUNT Function  
    - '*' if we use astreik it counts including the NULL values 
    - ``` SELECT COUNT(*), COUNT(manager_id),  COUNT(DISTINCT manager_id), COUNT(ALL manager_id) from HR.employees; ```

### Grouping Data ( GROUP BY Clause)
- Creates groups of values using the group functions 
- Syntax
  - ``` SELECT expression1, expression2, ..., aggregate_function(aggregate_expression) FROM table [WHERE condition] GROUP BY expression1, expression2, ..., [ORDER BY order_expression]```
- We can use more than one expression -or column- in a GROUP BY caluse
- The SELECT clause cannot have any other individual columns than what is used with the GROUP BY clause
- We don't need to use all the colums used with the GROUP BY clause in SELECT statement
- In the SELECT statements, we can use the group functions with different columns than the GROUP BY has. 
  - GROUP BY clause groups teh rows not the columns 
- We can use as many gorup functions as we want
- Column aliases cannot be used with the GROUP BY clause
- The ORDER BY clause cannot have any other individual columns than the GROUP BY clause has. 
- We can use the WHERE clause to restrict the resulting data
- Example
  - The following query groups by department
  - ``` select job_id, max(salary) from HR.employees GROUP BY job_id ORDER BY AVG(salary) desc;  ```
- Note 
  - The SELECT clause cannot have any differnt columns than what is used in the GROUP BY clause 
- ORDER BY Clause Order Precedence 
  - Order : Clause : Function
    - 1 : from : choose and join tables to get base data.
    - 2 : where : filters the base data
    - 3 : group by : Aggregates the base data
    - 4 : having : Filters the base data
    - 5 : select : Returns the final data 
    - 6 : Order by : Sorts the final data 

### Having Clause
- HAVING clause filters grouped data. 
- The group functions cannt be used in the WHERE clause
- Following query fails 
  - ``` SELECT job_id, AVG(salary) from HR.EMPLOYEES WHERE AVG(salary) > 5000 GROUP BY job_id; ```
- We can use the HAVING clause to filter data after it has been grouped 
- The WHERE clause filters rows wheras the HAVING clause filters grouped data. 
- Example
  - ``` SELECT job_id, AVG(salary) from HR.EMPLOYEES GROUP BY job_id HAVING AVG(salary) > 10000 ; ``` 


### Nested Group Functions 
- Group functions can be nested 
- The output of the inner function is the input opf ther outer function
- We have to use the GROUP BY clause when using nested group functions 
- Group functions can be nested to a depth of two.
  - Maximum nested group functions limit is TWO
  - Groupfunction1(Groupfunction2())
  - Select MAX(AVG(salary)) from HR.emplyees GROUP BY department_id;


# Joining Multiple Tables 
What is a Join ?
- A join is a concept that allows us to retrieve data from two or more tables in a single query
- In SQL, we often need to write queries to get data from two or more tables.Anything but the simplest of queries will usally need data from two or more tables, and to get data from multiple tables, we need to use the joins 
- There are couple of Join types
  - Natural Join
  - Inner Join
  - Outer Join
    - LEFT Outer Join
    - Right Outer Join
    - FULL Outer Join
  - Equijoin
  - Non-Equijoin
  - Self Join
  - Cross Join 

### Creating a JOIN
- Syntax
  - ``` SELECT columns FROM table1 JOIN_TYPE table2 ON table1.column_name = table2.column_name; ```
- Following query get firstname and department name from employee and department table using department_id 
  - ``` SELECT first_name, email, department_name FROM HR.EMPLOYEES JOIN HR.departments USING (department_id); ```

### Natural Join 
- Lets understand few terms with the following query
  - ``` Select * from source_table NATURAL JOIN target_table ```
  - Source Table
  - target table 
- Natural Join joins two tables based on common columns that have the same name and same data type. 
- The rows are matched with each other from two tables that have equal values in the common columns 
- If common columns have the same name but differnt type of data, it will result in an error 
- The WHERE clause can be used to restrict data 
- Syntax
  - ``` SELECT columns from table1 NATURAL JOIN table2 ```
- Example
  - ``` SELECT * FROM HR.employees NATURAL JOIN HR.departments; ```

### Join with the USING Clause
- When joining two tables, if ther are more than one common columns that have the same names, we can use the USING lause to specify which oclumns needs to be selected as teh join column in the join opeartion. 
- The USING clause is used for matching a specific column or columns when join two tables
- Joining with the USING clause is considered as 'Equijoin'
- Example
  - In 2 tables, If there are 5 eqaul columns Natural join perfroms join opeartion using all these five columns 
  - If you to join by a specific column we can do this with USING clause
  - ``` SELECT * FROM HR.EMPLOYEES JOIN HR.DEPARTMENTS USING (department_id) ```
  - To write more columns add comma and write the columns
  - ``` SELECT * FROM HR.EMPLOYEES JOIN HR.DEPARTMENTS USING (department_id, manager_id) ```

### Handling Ambiguous Column Names 
- Table aliases are used for handling column ambiguity when joining tow or more tables 
- We can explain to the SQL engine which table's column will be used by writing the table aliases
- Table aliases increase code readability and query performance
- We cannot give aliases to columns that we use with the USING clause or NATURAL JOIN
- ``` SELECT first_name,last_name, department_name, e.manager_id from HR.EMPLOYEES e JOIN HR.departments d USING (department_id) ```;

### Inner Join 
- Returns all the rows from both the participating tables that satisfy the join ocndition or the expression of the ON/USING clause
  - In the inner Joins, unmatched rows do not appear in the result set
- Syntax
  - ``` SELECT columns FROM table1 [INNER] JOIN table2 ON (join_condition) / USING(column_name); ```
- With the ON clause, we can write one or more conditions even if they have different names. Only the rows that satisfy these join conditions are included in the result set.
  - ``` SELECT e.first_name, e.last_name, d.manager_id, d.department_name FROM HR.employees e JOIN HR.departments d ON (e.department_id = d.department_id AND e.manager_id = d.manager_id); ```
- What is the differnce btw ON and USING clause in SQL ?
  - both of them allows us to join unlimited columns 
  - the difference is 
  - USING clause requires the join columns to have the same name 
  - ON clause works even if  join columns have different name 

### Multiple Join Operations 
- We can join more than two tables 
- We can use the USING, ON clause, or NATRUAL JOIN while joining multiple tables 
- Example
  - Following query joins employees, departments using JOIN, USING clause
  ``` SQL
    select first_name, last_name, 
    department_name, city, state_province
    from HR.employees 
    JOIN HR.departments
    USING(department_id)
    JOIN HR.locations
    USING (location_id); 
  ```
- Another Example, 
  - Following query join employes, department, location, countries
```sql
select first_name, last_name, department_name, city, state_province,  COUNTRY_NAME
from HR.employees e
JOIN HR.departments d
ON(d.department_id = e.department_id )
JOIN HR.locations l
USING (location_id)
JOIN(HR.countries) c
ON(c.country_id = l.country_id)
```
### Restricting JOINS
- We can restrict joins using the WHERE clause or the AND operator
- Following JOIN is restricted using WHERE clause 
``` SQL
select first_name, last_name, department_name, city, state_province,  COUNTRY_NAME
from HR.employees e
JOIN HR.departments d
ON(d.department_id = e.department_id )
JOIN HR.locations l
USING (location_id)
JOIN(HR.countries) c
ON(c.country_id = l.country_id)
WHERE d.department_id = 100;
```
- Following JOIN is restricted using AND operator 
``` SQL
select first_name, last_name, department_name, city, state_province,  COUNTRY_NAME
from HR.employees e
JOIN HR.departments d
ON(d.department_id = e.department_id )
JOIN HR.locations l
USING (location_id)
JOIN(HR.countries) c
ON(c.country_id = l.country_id)
AND d.department_id = 100;
```

### Self Join 
- Joining a table with itself is called 'Self Join'
- A self-join is used for comparing rows in the same table or quering hierarchical data. 


## Others
Desktop manager 
  - Citrix Workspace Reciever
    - Repair 

T
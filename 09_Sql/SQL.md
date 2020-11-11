## Table of contents 
- [Run Oracla via docker](#run-oracla-via-docker)
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
      - [Multiple-Row Functions](#multiple-row-functions)
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

## Introducing Database Objects
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


## Retriving Data 
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

## Restricting Data
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

## Sorting Data
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
## Substitution Variable 
- A substiution variable can be thought as a user variable
- The substitution variables are placeholders in an SQL script wher you want to substitute some values at runtime 

## Single Row Functions 
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
  - ``` SELECT first_name, last_name, TO_CHAR(hire_date, 'YYYY') from HR.EMPLOYEES where TO_CHAR(employee_id) = '100'; ```
  - 



#### Multiple-Row Functions
- Multiple row also called group functions gets more than one row as input and return 1 result as output for that group of rows  




## Others
Desktop manager 
  - Citrix Workspace Reciever
    - Repair 


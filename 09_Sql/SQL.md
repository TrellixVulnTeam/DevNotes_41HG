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


# Run Oracla via docker
1. Run Oracle via docker
```shell
  // # to run oracle 
  docker run -d -p 1521:1521 --name myoracle store/oracle/database-enterprise:12.2.0.1
  // # wait for the msg: Done ! The database is ready for use .
  // # to run logs
  docker logs -f myoracle 
```
2. Run sqlDeveloper by running sqldeveloper.sh  
```shell
  opt/sqldeveloper/sqldeveloper.sh
```

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

- Table : A table is the base unit of the database to store data formatted with columsn and rows
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


  




# Installation

## Angular CLI
We are gonna use **Angular CLI (Command Line Interface)** which makes creating and building angular applications very simple. It quickly creates angular projects and we have some commands you can use to build that project for production

### Why Angular CLI ?
why to use Angular CLI  and not just import angular framwork in an existing index html page?

Angular is futuristic framework and it uses features like typescript which is a superset of javascript which needs to be complied before it runs in the the browser so it has some extra steps we have to take into account during development and doing that manually can really be a pain thats why CLI is really an awesome solution

## Nodejs 
We need nodeJs for angular CLI, behind the scenes it build our projects and to manage our dependencies the pacakges we use like the Angular framwork itself and it develops server which will host our app on our local machine to test it.

### Nodejs installation
- Download and install latest version of NodeJs

### Angular CLI installation
- Open command line (run > cmd) and these instructions

```nodejs
 npm install -g @angular/cli
 ```
Mac/Linux
 ```nodejs
 sudo npm install -g @angular/cli
 ```
 
**Command Explanation** 

| sudo | npm  | install | -g | @angular/cli |
| --- | ------- | -------- | --- | ---- |
| required on Mac/Linux, not on Windows | Node package manager | install | install **Globally** on your machine | angular cli means simple the package we're using  |

After running this command in cmd, it will install angular cli in your machine.

## Create your new angular project

For this you should navigate in the terminal here into the folder where you want to create. 
- to step back a directory : type ```cd ..``` 
- to move to differnt drive : type ``` d: ``` (moves to d drive)
eg : D\codie\angular\ 

now type ```D\codie\angular\ ng new my-frist-app``` and simply hit ENTER

**Explanation** 

| ng | new | project name |
| ---- | ----- | ------------------- |
| refers to Angular CLI | new to create a new project | choose a project name | 

- Navigate to my-first-app folder folder, ```cd my-first-app```
- Run this project by typing ``` ng serve ``` command, 
	- this command will build all our source code as or uses typeScript which needs to be complied to javascript, then development server running 
- Goto chrome and type ```localhost:4200```, you will see, Welcome to app!

# Summary
Angular 2 requires angularCLI, node js requires angularCLI to run dependancies and to host server on your local machine.

### Steps
1. Download and install latest nodejs version, here [nodejs](https://nodejs.org/en/)
2. To install angularCLI, open cmd and run this command, 
 ```npm install -g @angular/cli``` 
3. To host server on your machine, navigate to a folder in cmd.
```D\codie\angular\ng new my-frist-app```
4. Open your browser, and type,
```localhost:4200```

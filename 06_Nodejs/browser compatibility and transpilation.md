## Table of Contents 
1. [Browser Compatibility and Transpilation ](#browser-compatibility-and-transpilation)
    - [Installing node Js](#installing-node-js)
    - [Review](#review)

# Browser Compatibility and Transpilation   
- ES5 — The old JavaScript version that is supported by all modern web browsers.
- ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
- **[caniuse](https://caniuse.com/)** — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information. 
- **[babel](https://babeljs.io/)** A JavaScript package that transpiles JavaScript ES6+ code to ES5.
- **[kangax](https://kangax.github.io/compat-table/es6/)** ECMAScript 6 compatibility table

## Installing node Js 

- Install [node js](https://nodejs.org/en/), make sure node js and npm is installed.
- To check it's installed.
	- open cmd/Terminal and type ' -v '	//output : v6.11.4 node version
	- open cmd/Terminal and type ' npm -v ' //output : v6.11.4 npm version

- Use 'cd' to move directories/folder, goto your js file
	- 'cd' stands for current directory
	- example : type 'cd foldername'
	- to step back a directory : type 'cd ..'
	- to move differnt drive ```cd d: ```  (moves to d drive)
	- type 'dir' to see the file directory
- Create package.json file
	- after selecting the directory, type 'npm init' in cd to create pacakge.json file
	- give name, descripiton etc 
- Install Node Packages	
	- We use the npm install command to install new Node packages locally.
	- The install command creates a folder called node_modules and copies the package files to it. 
- Install Babel
	- To install Babel, we need to npm install two packages, babel-cli and babel-preset-env.
	- We install Babel with the following two commands
```
$ npm install babel-cli -D
$ npm install babel-preset-env -D
```
- The babel-cli package includes command line Babel tools, and the babel-preset-env package has the code that maps any JavaScript feature, ES6 and above (ES6+), to ES5.	
- The -D flag instructs npm to add each package to a property called devDependencies in package.json. 
- Once the project's dependencies are listed in devDependencies, other developers can run your project without installing each package separately. Instead, they can simply run npm install — it instructs npm to look inside package.json and download all of the packages listed in devDependencies.


- To create a 'empty file' with a specified format.
```
touch .babelrc - Linux
echo $null >> .babelrc - windows

```
- open the .babelrc file paste the following object. 

```
{
  "presets": ["env"]
}
```
### Babel Source Lib, before we can transpile our code. 
- We need to specify a script in package.json that initiates the ES6+ to ES5 transpilation.
- Inside of the package.json file, there is a property named "scripts" that holds an object 
- the "scripts" property contains an object with one property called "test". Below the "test" property, we will add a script that runs Babel like this:
```
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
```
- Explained
	- In the "scripts" object above, we add a property called "build". The property's value, "babel src -d lib", is a command line method that transpiles ES6+ code to ES5. Let's consider each argument in the method call:
	- babel — The Babel command call responsible for transpiling code.
	- src — Instructs Babel to transpile all JavaScript code inside the src directory.
	- -d — Instructs Babel to write the transpiled code to a directory.
	- lib — Babel writes the transpiled code to a directory called lib.

### Build
- We're ready to transpile our code, from the command line, we type:

```
### npm run build
```
- The command above runs the build script in package.json.
- Babel writes the ES5 code to a file named main.js (it's always the same name as the original file), inside of a folder called li. The resulting directory structure is:
- Notice, the directory contains a new folder named lib, with one file, called main.js.
- The npm run build command will transpile all JavaScript files inside of the src fold.

## Review
- ES5 — The old JavaScript version that is supported by all modern web browsers.
- ES6 — The new(er) JavaScript version that is not supported by all modern web browsers. The syntax is more readable, similar to other programming languages, and addresses the source of common bugs in ES5.
- caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
- Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.
- npm init — A terminal command that creates a package.json file.
- package.json — A file that contains information about a JavaScript project.
- npm install — A command that installs Node packages.
- babel-cli — A Node package that contains command line tools for Babel.
- babel-preset-env — A Node package that contains ES6+ to ES5 syntax mapping information.
- .babelrc — A file that specifies the version of the JavaScript source code.
- "build" script — A package.json script that you use to tranpsile ES6+ code to ES5.
- npm run build — A command that runs the build script and transpiles ES6+ code to ES5.

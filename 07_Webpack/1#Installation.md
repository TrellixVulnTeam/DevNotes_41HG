## Table of contents
1. [Setting up Webpack with npm](#setting-up-webpack-with-npm)
2. [Export and Import Es6 Modules](#export-and-import-es6-modules)
3. [Webpack core concepts ](#webpack-core-concepts)


# Setting up Webpack with npm
1. Install node js and npm
- Create package.json file by ```npm init``` in project folder.
- It will prompt for project name and author etc

2. Install Webpack via cmd
- ```npm install webpack --save-dev```

3. Create webpack.config.js file in project folder. 
- In web webpack.config.js, create an Module.exports object.
	- ```module.exports = {}```
	- In module.exports obj include entry point, output etc.
- Set Entry point in module.exports object
	- ```entry : './src/js/index.js'```
- Set Ouput, var path = require('path'); 
	- ```output : {path: path.resolve('__dirname', 'dist/js'), filename:'bundle.js'}```		
- To run the config file: use ```npx webpack``` in cmd

4. Install Webpack-cli ( This will help to run the scripts in package.json file)
- ```npm install webpack-cli --save-dev```
- Open package.json file, in scripts call the webpack.config.js
	- ```script : { "dev" : "webpack"}```
	- run the script in cmd by ```npm run dev```
- Set development mode
	- ```script : { "dev" : "webpack --mode development"}```
- To build production mode
	- ```script : { "build" : "webpack ---mode proudction"}```

5. Install Webpack Server : It provides development server and bundles js files and reload the file whenever there is a cahnge
- ```npm install webpack-dev-server --save-dev```
- To config webpack-dev-server, Open webpack.config.js
	- in module.exports obj, add an object.
		- ``` devServer : {contentBase : './dist'} ```
- To make devServer work, open Packages.json
	- Add script ```{ "start" : "webpack-dev-server --mode development"}```
	- Add ```open``` command to wepack-dev-ser. It will open the file in the browser
		```{ "start" : "webpack-dev-server --mode development --open"}```
	- This will open a localhost-server ```http://localhost:8080/```
6. Install html-webpack-server : The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
- ```npm install html-webpack-plugin --save-dev```
- Copy the css and img files in dist
- This plugin will inject not build. Use dev/build to do the bundling
- To build/bundle the files in dist. Use one of the scripst ```npm run build```

[Example Webpack Installing Done](#webpack-installing-done)

7. Install Babel packages
- babel core contains core functionalties
	- ```npm install babel-core --save-dev```
- babel preset env converts Es6 to es5 
	- ```npm install babel-preset-env --save-dev```
- babel loader is needed for webpack in order to actually load babel files
	- ```npm install babel-loader --save-dev```

### Step 1	
1. Now let's Configure the loaders, Open package.json file and add module object.
- ``` module : {} ```
2. Inside module, add rules key with array value
- ``` module : {rules : []} ```
3. Inside Rules array, add an object called test.
- In test we ask it to find only Js files using regular expression
``` module : {rules :[{ test : '/\.js$/' }]} ```
4. Exclude node modules files
```  module : {rules :[{ test : '/\.js$/', exclude : /node_modules/}]} ```
4. Inside Rules add another obj called Use.
- In Use key, load the babel loader 
``` module : {rules :[{ test : '/\.js$/', exclude : /node_modules/, use : babel-loader }]} ```

Package.json
```
module : {
		rules : [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use : {
					loader:'babel-loader'
				}
			}
		]
	}
```

### Step 2	
Create babel config file, file name is ```.babelrc```
- Open cmd, This command will create .babelrc file 
	- ```copy NUL .babelrc``` 
- Open .babelrc file, Pass an Object 
	- ``` {} ```	
- In object, Pass ```presets```, In preset pass an array called env
	- ``` { "preset" : [["env"]]}
- We can target browser
	- ``` {"preset" : [["env", { "target": {"browsers":["last 5 versions", "ie >=8"]}}]] }

.babelrc		
```
{
	"presets" : [
		["env", {
			"targets" : [
				"last 5 versions",
				"ie >= 8"
			]
		}]
	]
}
```	

### Step 3
Installing babel-polyfill. This will polyfill new features like promise to ES5.
- Note this is not a dev dependency file, It's a real dependency
```npm install babel-polyfill ```
- After installing babel-polyfill, we need to add it in webpack.config.js file
	- Open webpack.config, Include it in entry point. 
	``` entry : ['babel-polyfill', './src/js/index.js']
	- Webpack will bundle polyfill and index.js 
	- Run ```npm run dev```

[Webpack with Babel](#webpack-with-babel)

### Webpack with Babel

// pacakge.json
```javascript
{
  "name": "forky2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode-development --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.16.5",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.5"
  },
  "dependencies": {
    "babel-polyfill": "^6.26.0"
  }
}

```

// webpack.config.js
```javascript
const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : ['babel-polyfill','./src/js/index.js'],
  output : {
    path:path.resolve(__dirname, 'dist'),
    filename : 'js/bundle.js'
  },
  devServer : {
    contentBase : './dist'
  },
  plugins : [
    new HtmlWepackPlugin ({
      filename : 'index.html',
      template : './src/index.html'
    })
  ],
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use : {
          loader:'babel-loader'
        }
      }
    ]
  }
}
```

// .babelrc
```
{
	"presets" : [
		["env", {
			"targets" : [
				"last 5 versions",
				"ie >= 8"
			]
		}]
	]
}
```


### Webpack Installing Done 

// package.json
```javasript
{
  "name": "forky2",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production",
    "start": "webpack-dev-server --mode-development --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "webpack": "^4.16.5",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.5"
  }
}

```

// Webpack.config.js
```javascript
const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : {
		main : './src/js/index.js'
	},
	output : {
		path:path.resolve(__dirname, 'dist'),
		filename : 'js/bundle.js'
	},
	devServer : {
		contentBase : './dist'
	},
	plugins : [
		new HtmlWepackPlugin ({
			filename : 'index.html',
			template : './src/index.html'
		})
	]
}
```

# Export and Import Es6 Modules
JavaScript modules have export and import now, There are two different types of export default and export named.

### Default Export

// Search.js
``` export default 'Krishna';```
Syntax
```export default 'expression/str' ```

// index.js
### Default Import
```import string from './models/Search' ```
Syntax
```import <name> from 'directory/file.js'```


## Names Export/Import

//Search.js
### Names Export
```export const add (a,b)=> a+b;```
```export const ID = 6```

//Search.js
### Names Import
- We have to use exact names that we used in Named export.

// Single import
```import add from './models/Search'```
// Multi import
```import {add, ID} from './models/Search'```

console.log(add(ID,2)); // 8

// store import named with different names
```import add as a './models/Search'; ```

#### Import Named : everything
``` import * as searchView from './modesl/Search'```
console.log('Using imported functions!' + searchView.add(ID,2));


## Webpack core concepts 
In webpack there are fours core concepts :
- Entry point 
	- Specify the entry point, this is the file where it will start bundling 
- Output
	- The output property tells webpack where to emit the bundles it creates and how to name these files.
- Loaders 
	- Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
	- At a high level, loaders have two properties in your webpack configuration:
		- The test property identifies which file or files should be transformed.
		- The use property indicates which loader should be used to do the transforming.
- Plugins
- This can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables
- In order to use a plugin, you need to require() it and add it to the plugins array. Most plugins are customizable through options. Since you can use a plugin multiple times in a config for different purposes, you need to create an instance of it by calling it with the new operator.

### Reference
[https://webpack.js.org/concepts/]	

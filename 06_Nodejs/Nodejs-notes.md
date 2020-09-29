# Nodejs
/home/shaktish/Documents/01_Databases/mongodb/bin/mongod --dbpath=/home/shaktish/Documents/01_Databases/mongodb-data

## Table of contents
1. [Fundamentals](#fundamentals)
2. [Node Module System](#nodemodulesystem)
3. [Async](#async)
4. [WebServer](#webServer)
5. [Git](#git)
6. [Heroku](#heroku)
7. [MongoDb](#mongodb)
8. [Mongoose](#mongoose)
9. [Promises](#promises)
10. [AsyncAwait](#AsyncAwait)
11. [REST API](#RestApi)
12. [API Authentication](#apiAuthentication)
13. [AdvancedPostMan](#AdvancedPostMan)
14. [Sorting And Filtering](#SortingAndFiltering)
15. [FileUpload](#FileUpload)
16. [SendingEmails](#SendingEmails)
17. [EnvironmentVariables](#EnvironmentVariables)


## Fundamentals

##### What is Nodejs ?
Node is a way to run js code on the server. 
Nodejs is a javascript runtime built on Chrome V8 Js engine. 
V8 is written using c++. 

##### What can Nodejs do ?
- With nodejs you can create webservers.
- Access file system, database 

##### Why nodejs ?
Nodejs uses an event-driven, non-blocking I/O model taht makes it lightweight
-  I/O = Input/Ouput 
- When node app has to communcate with the machine it running its I/O. 
	- Eg: Accessing file from your machine
	- Commuicate with a server, 
	- Eg :Quering a database for a given user
- I/O takes time, non-blocking i/o allows users to interact even if a request is made, waiting for it. 
- In blocking I/O, page will be stuck until the response is back. 

Nodejs package eco-system, npm is the largest ecosystem of open source libraries in the world.

- npm is a tool, which was installed when you install node. 

##### Difference btw js in browser and nodejs ?
- Js was limited to browser can do but there was no way build web servers, access filesystem, connect with database. 

##### For what applications do you chose nodeJs?
- For instant applications like chats, messaging, instant updates.

##### How does nodejs work interally/behind the scenes ?

- Chrome doesn't know to run Javascript code. 
It is passed to V8 engine and browser gets the results. 

- Node doesn't know how to run js code, it also uses V8 engine, it passes to V8 engine and gets back the result 

- V8 is written in C++
Chrome and node will have specific methods. 
When you call them, behind the scenes you are also calling c++ bindings when you send it to V8. 
	- localStorage.getItem
	- fs.readFile 

- Methods available in  
	- Browser :window
	- Node :global

Why V8 is written in C++ ?
- C++ is a language that can access to files sytem, so you can interact with the machine (server), write files, read files etc.
- And it simply the fastest.

## NodeModuleSystem
Nodejs API Documentation
https://nodejs.org/api/


#### fileSystem
The fs module provides an API for interacting with the file system.

To use this module:
``` const fs = require('fs'); ```

##### writeFileSync
Syntax
``` fs.writeFileSync(file, data[, options]) ```

Creating a text file using fs.writeFileSync 

Example 
```javascript
let fs = require('fs'); 

fs.writeFileSync('notes.txt', 'Introduction')
```

####  Import & Export
To load a file, use ```require('./filename')```

Modules have scope, so you can't call a variable from another module. 
To call a variable from another file, use ```exports.module = variable name```

```javascript
// sum.js
const sum = (a, b) =>{
	return a + b;
}
module.exports = sum;

// app.js 
const sum = require('./sum.js');
console.log(sum(2+2)) // returns 4

// run the file using command :  node app.js
```

####  Import npm modules
This is about importing npm modules
- run ```npm init```, define package.json
- install a pacakage,  say chalk a library to print your console lines in colors.
- define a variable and require it
```javascript
let chalk = require('chalk')
let msg = chalk.bold.green('Success');
console.log(msg) // print in green and bold in VS command line
```

####  Global npm modules and nodemon 
Install global modules 
```npm i nodemon -g ```
Nodemon lets the app node file run. 

#### Commanline arguments
Getting input from users via cmd process.argv

- process.argv returns node, app.js, param

```javascript
process.argv 

// [ '/usr/bin/node',
//   '/home/shaktish/Documents/0#__Code/Nodejs/Section3/notes-app/app.js' ] 'shaktish'
```

We have a better args parse, Its Yargs. ```npm i yargs```
```javascript
yargs.command({
    command : 'add',
    description : 'add a note',
    handler : function () {
        console.log('Added a note !!')
    }
})

```

## Async 
- Call stack
- Node apis
- Event loop (callback queue) 


1. All the executable functions will be added in Call-stack
2. When there is a Async function / SetTimeout function it will moved to Node api
3. Once the call stack has finished with main(), the event loop will move the async/setTimeout function to Call stack. Event loop can't run async callback until callstack is empty

example
```javascript
console.log('starting')

```

## WebServer
According to Wikipedia, a web server is "a computer system that processes requests via HTTP, the basic network protocol used to distribute information on the World Wide Web.

Servers commonly used
- Apache HTTP Server
- NGINX	
- Apache Tomcat
- Node.js


#### Express
- Express.js is a Node.js framework, It simplifies development and makes it easier to write secure, modular and fast applications. You can do all that in plain old Node.js, but some bugs can (and will) surface, including security concerns (eg. not escaping a string properly)
- Express creates webserver thru nodejs, It can serve webAssets
    - HTML, CSS, JS and images, anything application needs.
    - Create API's
- It can be used to build WebApps, RESTFUL APIs etc quickly.
- Supports multiple template engines like Jade, EJS.

##### Why Express
That you don't have to repeat same code over and over again.

Node.js is a low-level I/O mechanism which has an HTTP module. If you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting the right route pattern based on regular expressions will have to be re-implemented. With Express.js, it is just there for you to use.

- Try to write a small REST API server in plain Node.js (that is, using only core modules) and then in Express.js. The latter will take you 5-10x less time and lines of code.


##### Installing
First create a directory named myapp, change to it and run npm init. Then install express as a dependency
```javascript
npm init
npm install express --save
```

##### Running Node with Express
This app starts a server and listens on port 3000 for connections. The app responds with “Hello World!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.


```javascript
// require express
const express = require('express')
// init express and assign it to app var
const app = express()
// set the port 
const port = 3000

// Define a get request for '/' and a simple text, Hello World
app.get('/', (req, res) => res.send('Hello World!'))

// Listen to the port
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```
The req (request) and res (response) are the exact same objects that Node provides, so you can invoke req.pipe(), req.on('data', callback), and anything else you would do without Express involved.


<!-- #### Express application generator
Use the application generator tool, express-generator, to quickly create an application skeleton.
```javascript
 npx express-generator
```

Display the command options with the -h option
```javascript
 express -h
```

For example, the following creates an Express app named myapp. The app will be created in a folder named myapp in the current working directory and the view engine will be set to Pug:
```javascript
express --view=pug myapp
``` 
Then install dependencies: ```npm install``` 
-->


### Serving static files in Express
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express

The function signature is:
```express.static(root, [options])```


```javascript
const express = require('express');
const path = require('path')

const app = express();

// Use join to 1up a directory
const publicDirectory = path.join(__dirname, './public');
// console.log(publicDirectory, 'publicDirectory')

// Sets public directory
app.use(express.static(publicDirectory))

```
once you set the public directory, add css, image, js folder and link them in html files.

### Serving an image and html file 
- Setup the static file
```javascript
const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir))
```
- set the route, make sure to use sendFile method
- set the absolute path by using path and setting the correct path
```
app.get('/', (req, res) => {        
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
```
- html file
```javascript
<h1>Welcome, Man !</h1>
<img src="/images/screenshot.png" />
```


### Using hbs, Folder Structure is very important
Project
- src
	- app.js 
	- views (template engine)
		- index.hbs
- public
	- index.html
	- images
	- css
	- js
- node_modules
- pacakge.json	



### Template Engine - Handlebars
- Handlebars allows us to render dynamic content and easily create code to re-use. eg header, footer
- hbs uses handlebars, its more of a plugin made to work with express as view engine
```npm install hbs```

Tell express which template engine we insatalled.
```javascript
app.set('view engine', 'hbs')
```

When we are workin with express, it expects all views (handlebar files) to be in a spcific folder, root of the project/views
- create a views folder inside ur root of the project

#### Serve dynamic pages
- In views folder, create a index.hbs file (if u want to load dynamic content in index page).
- In app.js file, setup the route, use render to load the file with index filename
- use res.render() when you want to render a template, otherwise you'll be using res.send or res.json.
```javascript 
app.get('/', function (req, res) {
    res.render('index');
 });
```

####  Dynamic content 
In routing, with render method, pass an object with params u want to render in index.hbs 

```javascript
// exporting
app.get('/', function (req, res) {
    res.render('index', {
        title : 'home',
        name : 'shaktish'
    });
 });

// consuming in index.hbs
<h1>{{title}}</h1>
<p>Name is {{name}}</p>
```

Note : Make sure u don't a index file in public folder, else it will be served. 
- Serve staic html files in public folder
- Serve dynamic html content using handle bar


#### Handlebar customizing view directory
Customize views folder name, using the below code.


```javascript
// views pathDirectory
const viewsPath = path.join(__dirname, './templates');

app.set('views', viewsPath);

```

#### Handlebar partials, templating
It lets us reuse headers, footers 

#### Folder Structure
- project
	- src 
	- templates
        - views
            - index.hbs
        - partials
            - header.hbs

#### Congifure hbs to set partials

- Import hbs in app.js
```javascript
const hbs = require('hbs');
```
- set partial directory
```javascript
const partialsPath = path.join(__dirname, './templates/partials')

// Hbs partial path
hbs.registerPartials(partialsPath);
```

#### Use partials
1. Create a file name header.hbs in partials folder and add a title param
```javascript
<h1>{{title}}</h1>
```

2. In index.hbs, use the header partial as below
```javascript
    {{>header}}
    <p>Name is {{name}}</p>
```
3. In app.js, make sure the path and params are set.
```javascript 
app.get('', function (req, res) {
    res.render('index', {
        title : 'Home',
        name : 'shaktish'
    });
 });
```

#### To update changes done in hbs file 
``` nodemon src/app -e js, hbs ```


#### 404 page
Place 404 route at the bottom, so it ll be matched last when none of the other route matches.
```javascript
app.get('/*', function (req, res) {
    res.render('404', {
        title : '404 page',
        message : 'Page not found',
        name : 'shaktish'
    });
});
```


## Git
##### Setting SSH keys
To check if ssh keys exists in ur machine/pc, run the below command. 
```ls -a -l ~/.ssh ```

- -a list hidden files
- -l list from top to bottom 
- ~/ userDirectory 

##### Create ssh keys
Enter the below code in cmd to create ssh key. 
```ssh-keygen -t rsa -b 4096 -C "shakiddo@gmail.com"```
- -t type
- -rsa last name inital of the creators of the algorithm
- -b bits 
- -C label/comments, put ur email address

Prompts fileNam, press enter
Prompts passphrase, press Enter, default it no pass phrase


##### Register private key in ur machine
It will start up the ssh-agent 
```cmd
eval "$(ssh-agent -s)"

// returns Agemt pid: 87**
```
Register
```javascript
ssh-add ~/.ssh/id_rsa

// returns Identity added : /users/shaktish/.ssh/id_rsa (shakie@gmail.com)
```

##### Add public key in git

##### Setting origin in your project folder
- Once you're done with this, goto git, create a repo. 
- Run this command in cmd ```git@github.com:shaktish/WeatherAppNodejs-.git``` in your project folder
- Make sure you copied the SSH, not HTTPS url

##### - Setup ssh key in git
- in cmd run this command ```cat ~/.ssh/id_rsa.pub``` to public key text, copy it and paste in ssh key git.com
- To test connection, run this command ```ssh -T git@github.com```, this is going to test in github server. 

```javascript
ssh -T git@github.com
// returns 
// The authenticity of host 'github.com (13.234.176.102)' can't be established.
// RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
// Are you sure you want to continue connecting (yes/no)? yes
// Warning: Permanently added 'github.com,13.234.176.102' (RSA) to the list of known hosts.
// Hi shaktish! You've successfully authenticated, but GitHub does not provide shell access.
```

## Heroku 
- Signup a account
- Install Heroku-cli
- Verifying your installation ``` heroku --version ```
- Login in cli by ```heroku login```, prompts in browser to login, press login, It will take few mins to login


##### Add public ssh key in heroku
open cmd and run this command ```heroku keys:add```
It will identify the pub key if u already have one, press yes to add the ssh public-key to heroku

##### Create heroku application
- Open ur project folder, run ```heroku create 'heroku_weather_app'```
- Make sure u have unique app name.

once you create the app, you will get a link to ur application and git url 
``` https://tintin-weather-app.herokuapp.com/ | https://git.heroku.com/tintin-weather-app.git ```

#### Heroku - Project configuration
1. Tell heroku, how to start up the application 
- Goto package.json, and add start in script
```javascript
 "scripts": {
    "start" : "node ./src/app.js",
  },
```
2. Make sure application listens to the Heroku port 
- Port value will be assigned by Heroku, its provided to our app via environment.
- Open App.js 
```javascript
// when env.PORT is not there, uses port 3000 (for localhost)
const port = process.env.PORT || 3000;

app.listen(port);
```
3. Make sure you dont use localhost for Https in clienside js. 

#### Heroku - Pushing to heroku git remote
To push the master branch to heroku git master, Run the command in cmd
```javascript
git push heroku master
```

## MongoDb
Open source database 
- MongoDb db native driver can connect to our database thru nodejs
- Lanucned in 2009, Nodejs is also launchedi in 2009
- Popular database solutions are MySql, Postgress 

Differences 
- SQL : Structured query lanague 
- NOSQL : Not only structured query lanague 

#### SQL VS NOSQL
- Create Database 
- Storing data is the where structure differs 

Lets see an example with userData

##### Sql
This is a Table 

| id |  name     | email | password |
|----|:---------:|------:|------:|
| 1  |  shaktish | shakiddo@gmail.com | 1234

This is a row, a entry
|    |            |  |  |
|----------|:-------------:|------:|------:|
| 1 | shaktish | shakiddo@gmail.com | 1234

- id, name, email, passwords are reffered as column

#### NoSql
This is a collection 
```json
[
    {
        "id": "1",
        "name": "shaktish",
        "email": "shakiddo@gmail.com",
        "id": "12345"
    }
]
```
This is a document 
```json
{
    "id": "1",
    "name": "shaktish",
    "email": "shakiddo@gmail.com",
    "id": "12345"
}
```    
This is a field 
```json
    "id": "1"
```  

#### Installing MongoDb in Linux
- Goto MongoDb download center https://www.mongodb.com/download-center/community
- Select OS version, currently im using Ubuntu 18, Select it 
- Select Tdz as Pacakge and download it.
- Extract the file
- Copy and paste it in User directory or somewhere safe
- Create a folder mongodb-data

```javascript
- User
    - mongodb
    - mongodb-data
```    

- now we are going to exectue mongodb and link it with mongodb-data foler
- open cmd and run set the path and link them
```
/home/shaktish/Documents/01_Databases/mongodb/bin/mongod --dbpath=/home/shaktish/Documents/01_Databases/mongodb-data


// Exaplanation
- This path refers to mongodb folder u just download, it point to mongod in mongodb folder under bin folder
/home/shaktish/Documents/01_Databases/mongodb/bin/mongod

- dbPath 
--dbpath=

- point to the mongodb-data folder u jsut created 
/home/shaktish/Documents/01_Databases/mongodb-data
```

- once it done, u ll see the log as below. 

```log
I  NETWORK  [listener] Listening on 127.0.0.1
I  NETWORK  [listener] waiting for connections on port 27017
I  SHARDING [LogicalSessionCacheReap] Marking collection config.transactions as collection version: <unsharded>
I  SHARDING [ftdc] Marking collection local.oplog.rs as collection version: <unsharded>
```


##### MongoDb Admin tool - GUVI (Graphic User Interface)
The goal of this Database admin tool is to provide nice graphical represntation to manage your mongodb database and the data it contains

###### Robomongo
- The tool name robo3t, open this url https://robomongo.org/
- Download and install it

Once you're done, you will be asked to craete a new connection or select existing one. Let's create a new connection,
- Click create new connection
- In connectiont tab, set the config 
```javascript
{
    type : Direct connection
    name : Local MongoDb database
    Address : localhost, port : 27017 (default mongoDb port)
}
```
- Before creating connection, click on test
- If it's successful, you ll get this message
```
connected to localhost:27017
access to databases is available
```

###### Testing robo3t is connected with mongoDB
- Double click on the createion u just created.
- On left, with dbConnection name  -Local MongoDb database, rightClick on it and click open shell
- in sheell run this command to get the version mongoDb, if Robo3t is connected to mongodb you will get the version
``` db.version() ```



##### Connecting and inserting documents 

###### Mongodb npm library 

This is a  native driver created by Mongodb company allowing us to connect to a mongodatabase from nodejs

Refer this link for methods and apis for nodejs mongodb driver api
- https://mongodb.github.io/node-mongodb-native/2.0/api/index.html 

Lets create a project task-manager
- npm init 
- Install mongodb npm library
```javascript
npm i mongodb
```
- Create mongodb.js file 

1. Open mongodb.js, require the mongodb library
```javascript
const mongodb = require('mongodb');
```
2. Create MongoClient 
```javascript
const MongoClient = mongodb.MongoClient;
```

3. Create connectionURL and databaseName;
```javascript
const connectionURL = mongodb://127.0.0.1:27017
const databaseName = 'task-manager';

```
4. Use the connect method from MongoClient to connect to the specifi server 

```javascript
MongoClient.connect(connectionURL,{useNewUrlParser : true},(error, client)=>{

    MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client)=>{
        // if error return 
        if(error) {
            return console.log(error + 'unable to connect to database')
        }    
        // console.log('Connected to database')


        // Use the db method on client to get the specifi database 
        const db = client.db(databaseName);

        // Create a collection 
        db.collection('users').insertOne({
            name : 'shaktish',
            age : 27
        });
    })
})
```
5. Make sure the mongodatabase is running in cmd
```
/home/shaktish/Documents/01_Databases/mongodb/bin/mongod --dbpath=/home/shaktish/Documents/01_Databases/mongodb-data

```
6. Now in the project folder, execute mongodb.js using node
```javascript
node mongodb.js
```
7. Goto Robo3T and refresh the database, you can see a new database, task-manger created with a collection

#### CRUD
Lets do CRUD opeartion 

###### Create

```javascript 
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client)=>{
    if(error) {
        return console.log(error + 'unable to connect to database')
    }
    console.log('Connected to database')

    // CREATE CLIENT CONNECTION WITH DATABASE 
    const db = client.db(databaseName);

    // INSERT ONE 
    db.collection('users').insertOne({
        name : 'shaktish',
        age : 27
    });

    // INSERT ONE 
    let taskCollection = [
        {
            description : 'buy milk',
            completed : true
        },
        {
            description : 'cut nails',
            completed : false
        },
        {
            description : 'read',
            completed : false
        }
    ]

    // INSERT A COLLECTION  
    db.collection('tasks').insertMany(taskCollection, (error, result)=>{
        if(error) {
            return console.log('failed to insert')
        }

        console.log(result.ops,'result ops')
    })

})
```
###### READ 
- When reading mutple documents, use CURSOR to get the callback options.

```javascript 

    // READ ONE DOCUMENT
    db.collection('tasks').findOne({_id : new ObjectID('5e927b483d7e64246b05ca2e')}, (error, result) => {
        console.log(result);
    })

    // READ MULTIPLE DOCUMENT
    db.collection('tasks').find({completed : false}).toArray((error, response)=>{
        console.log(response, 'res');
    })

})
```

##### UPDATE
```javascript
    // UPDATE ONE DOCUMENT
    db.collection('tasks').updateOne({
        _id : new ObjectID('5e927b483d7e64246b05ca2c')
    }, {
        $set:{description : 'buy curd'}
    }).then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })

    // UPDATE MULTIPLE DOCUMENT
    db.collection('tasks').updateMany({completed : false}, {
        $set:{completed : true}
    }).then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })

```
##### Delete
```javascript

   // DELETE MULTIPLE DOCUMENT 
    db.collection('tasks').deleteMany({
        completed : true
    }).then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })


    // DELETE DOCUMENT 
    db.collection('users').deleteOne({
        _id : new ObjectID('5e927a5a78d89f23f0be645e')
    }).then(response=>{
        console.log(response)
    }).catch(error=>{
        console.log(error)
    })
```


## Mongoose
- Mongoose is a library, it gives a easy sytem for modelling our data.
- Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

##### Installation
First be sure you have MongoDB and Node.js installed.

1.  install Mongoose from the command line using npm:
``` npm install mongoose ```

2. Setup in ongodb.js file in project folder under src folder

```javascript
const mongoose = require('mongoose');

task-manager-api
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true
})

 
// mongodb:localhost : mongodb://127.0.0.1 
// port : 27017/
// collection name : task-manager-api

//useCreateIndex : saves with Index in db
```

##### Mongoose Creating a Model

```javascript 
// Define a Modal and define the dataType of the fields
const Task = mongoose.model('Task', {
    description : {type : String},
    completed : {type : Boolean},
})

// Create a instance of that Modal 
const buyMilk = new Task({
    description : 'Buy Milk',
    completed : false
})

// Save to db
buyMilk.save().then(response => {
    console.log(response)
}).catch(error => {
    console.log(error)
})

```

##### Data Validation and Sanitization 
- With validation, we can enforce the data confirms to some rules.  
    - eg name field should be string
- With sanitization, allows us to alter the data before saving it
    - eg remove empty space in name field. 


###### Sanitization 
- Use validate method to provide custom validation 
- use trim, required to santize the data


```javascript

const User = mongoose.model('User', {
    name : {
        type : String,
        required : true,
        trim : true
    },
    age : {
        type : Number,
        default : 5,
        validate(value) {
            if(value < 0) {
                throw new Error ('Age must be postive number')
            }
        }
    },
    password : {
        type : String,
        required : true,
        trim : true,
        validate(value) {
            if(value.length < 6) {
                throw new Error ('Password must be atleast 6 characters')
            }
            if(value.toLowerCase() == 'password') {
                throw new Error ('You cant have password has password for security reason ')
            }            
        }
    },
})

const shaktish = new User({name : 'shaktish    ', age : 27, password : 'password2' });

shaktish.save().then(response=>{
    console.log(response, 'response')
}).catch(error=> console.log(error.message) );

```

## Promises
The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
- Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

```javascript
var sum = (x,y) => { 
  // create a promise with fake api call/setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(x + y);
    },1000)
  })
}
// call the function 
// and use the then method to get the response/data
sum(4,6).then(res=>{  
  console.log(res);
}).catch(e=>{
  console.log(e);
});

```
##### Promise chaining
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

```javascript
sum(4,6).then(res=>{
  console.log(res, 'res first')
  return sum(res, 10)
}).then(res=>{
  console.log(res,'res')
}).catch(e=>{
  console.log(e);
});

```
## AsyncAwait
Async function declaration defines an asynchronous function — a function that is an AsyncFunction object. Asynchronous functions operate in a separate order than the rest of the code via the event loop, returning an implicit Promise as its result. But the syntax and structure of code using async functions looks like standard synchronous functions.


- Async function returns a promise, so make sure to use the **then** method to get result
```javascript
const test = async () => {
  // throw error
  // throw new Error('something went wrong');
  return 'Hello world'
}

test()
    .then(res=>console.log(res))
    .catch(e=>{console.log(e.message)});
```

##### Advantages over promises 
- Has access to all fetched values
- Easy to read

```javascript
var sum = (x,y) => { 
  // create a promise with fake api call/setTimeout
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(x <= 0 || y <= 0) {
        return reject('Values must be greater than 0')
        //throw new Error('Values must be greater than 0')
      }
      resolve(x + y);      
    },500)
  })
}
// Make the list of api calls
const doWork = async()=>{
  const a = await sum(-2,-4);
  const b = await sum(a, 10)
  // return the result 
  return b
}

// use the then method to retireve the data or the error
doWork().then(res=>{
  console.log(res)
}).catch(e=>{
  console.log(e);
});

```


##### Async await vs Promise api call example
```javascript
// PROMISE - THEN
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {        
        return res.send(user);
    }).catch(error => res.status(400).send(error.message));
    
})

// ASYNC AWAIT 
app.post('/users', (req, res) => {
    const user = new User(req.body);

    try {
        const saveUser = await user.save()
        res.send(user);
    } catch(e) {
        res.status(400).send(error.message)
    }
})
```

## RestApi
REST : Representational State Transfer 
- Rest api's allows client's to (web apps) access manipulate resources with predefined opeartions, eg to mark a task completed  

API : Application Programming Interface
- An api is set of tools to build software apps. 

Get request overview
- Client Request - GET/tasks/id  - To Server - Server Response : JSON response 

##### Task Resource - CRUD
- Create 
``` POST / tasks ```
- Read 
``` GET / tasks ```
``` GET / tasks / :id```
- Update
``` PATCH / tasks / :id ```
- Remove
``` DELETE / tasks / id ```


##### Structure of HTTP Request 
Headers are key value pairs which allow u attach metadata information to the request
- here we use acception json data, 
- connection to be alive, to keep things fast.
- Setting Authentication  

we provide jsondata in requestBody.
```javascript
Method : POST / tasks HTTP/1.1,
Accept : application/json,
Connection : Keep/Alive,
Authorization : iodsaniodanoihn2n2i312nin2349n  

data : {'description' : 'buy milk'}
```

##### Structure of HTTP Response 
Resposne headers are the below 3
```javascript
HTTP/1.1 201 Created
Date : Sun, 28 Jul 2019 15 : 37 : 37 GMT,
Server : Express, s
Content-Type : application/json,


reponseBody : {
    "_id" : ObjectId("5e93acd6cf9e37196445b316"),
    "description" : "Buy milk",
    "completed" : false,
    "__v" : 0
}
```

### Creating a Rest api endpoint
1. create a projeect, task-manager
- install express, mongoose, mongodb and nodemon as dev depedency, 
2. create src folder in project folder
- create db folder under src folder
- craete models folder under src folder
3. In db folder, create mongodb.js file and configure mongoose to connect with monogodb 
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser : true,
    useCreateIndex : true
})
```
4. In models folder, create task.js and define a model and export it 
```javascript
const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description : {
        type : String,
        required : true,
        trim : true        
    },
    completed : {
        type : Boolean,
        default : false
    },
})

module.exports = Task
```
5. create index.js filde under src folder. set express server configuration 
```javascript
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (error) => {
    if(error) {
        return console.log(error)
    }
    console.log('Listening in port :' + port );
})

```
6. Require mongodb file and task.js model. 
```javascript
require('./db/mongodb');
const User = require('./models/user');
const Task = require('./models/task');
```
7. create a endpoint for tasks and test in postman. 
- Make sure you send the param in body

```javascript
app.post('/tasks', (req, res)=>{
    const task = new Task(req.body);

    task.save().then(()=>{
        return res.send(task)
    }).catch(error=>{
        return res.status(400).res.send(error.message)
    })
});
```


#### READING END POINT
```javascript
// GET ALL TASKS 
app.get('/tasks',(req, res)=>{
    // Use the model and use the find method
    Task.find({}).then(tasks=>res.send(tasks))
    .catch(error => res.send(error))
})


// GET BY ID 
app.get('/tasks/:id',(req, res)=>{
    const id = req.params.id;

    Task.findById(id).then(taskData=>{
        console.log(taskData, 'taskData')
        if(!taskData || taskData == undefined){
            return res.status(400).send('not found');
        } else {
            res.send(taskData)
        }
        
    }).catch(error=>res.status(500).send(error.message))
})

```


#### UPDATING END POINT
app.patch()
- Update a field based on Id

```javascript
app.patch('/users/:id', async (req, res) => {
    let id = req.params.id;

    try{
        const user = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators : true});
        if(!user) {
            return res.status(400).send('Not found');
        }
        res.send(user)
    } catch(e){
        res.status(500).send(e.message)
    }
})

```
#### DELETE END POINT

```javascript

app.delete('/users/:id', async (req, res) => {    
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(400).send('Not found')
        }
        res.send(user);
    } catch(e) {
        res.status(500).send(e);
    }
})
```

## Route - Sepearting Route files 
1. Create a route folder under src folder
2. Create the files needed, example userRouter.js
3. Open router.js, add express, new router init and user Model
    - set the route to router

```javascript
const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/task', async (req, res)=>{
    const task = new Task(req.body);
    try{
        await task.save();
        res.send(task)
    }catch(e) {
        res.status(400).res.send(error.message)
    }
});
```
5. In index.js, require userRouter js and add it to the express router
```javascript
const userRouter = require('./router/user');

// Add the userRouter
app.use(userRouter);
```

## APIAuthentication
Let's start with storing the password securely.

1. Install bcryptjs module, 
```javascript
npm i bcryptjs
```
2. Import it in index.js file.
```javascript 
const bcrypt = require(bcryptjs)
```
3. Write a function, Use bcrypt method to hash the userPassword, 
    - First param is the password, Second param is no of rounds the hashing algorithm is executed. Use 8. 
```javascript
const userPassword = 'helloWorld'
const hashedPass = await bcrypt.hash(userPassword,8);
```
4. Difference btw Hashing algorithm and encryption algorithm. 
    - with encryption algorithm we can get the value back by encypting it again.
```javascript
shaktish -> 12af52... -> shaktish 
```
    - with Hashing algorithm it's one way, you cant' reverse, its how it designed.
```javascript
shaktish -> 12af2f32g9gl...
``` 
5. To validate the user password, we can use the bcrypt.compare method to see if they're same.
    - First param is userPassword, secondParam is hashedPass    
```javascript
const isMatch = await bcrypt.compare(userPassword, hashedPass) 
```

###### Example code
```javascript
const runPass = async () => {
    const userPassword = 'helloWorld'
    const hashedPass = await bcrypt.hash(userPassword,8);

    // compare userPassword with hashed password
    const isMatch = await bcrypt.compare(userPassword, hashedPass)

    console.log(hashedPass)
    console.log(isMatch)
}

runPass();

```
### Mongoose middleware 
Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

##### Types of Middleware
Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware. Document middleware is supported for the following document functions. In document middleware functions, this refers to the document.

https://mongoosejs.com/docs/middleware.html


##### Using middleware 

1. Earlier when defining a model, we passed an object with type, rules as an object. 
```javascript 
const User = mongoose.model('User', {
    name : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        validate(value) {
            if(value.length < 6) {
                throw new Error ('Password must be atleast 6 characters')
            }
            if(value.toLowerCase() == 'password') {
                throw new Error ('You cant have password has password for security reason ')
            }            
        }
    }
})

```
2. Instead of doing it we should define a Schema and declare the object there. (Internally mongoose was doing this for us earlier)
```javascript 
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true,
        validate(value) {
            if(value.length < 6) {
                throw new Error ('Password must be atleast 6 characters')
            }
            if(value.toLowerCase() == 'password') {
                throw new Error ('You cant have password has password for security reason ')
            }            
        }
    }
});

```
3. Pass the user schema to the userModel 
```javascript 
const User = mongoose.model('User', userSchema)
```
4. Now let's write a pre method to hash a password to db
```javascript 
userSchema.pre('save', async function (next) {    
    // this - refers to the document here 
    const user = this;
    if(user.isModified('password')) {
        // check if password is modifed in User and hash it using bcrypt
        let pass = await bcrypt.hash(user.password, 8);
        // assign the hashed password to password
        user.password = pass;
    }
    next();
})

```
5. Make sure you are not using few functions such as findByIdAndUpdate method as it directly updates the db and doesn't go under middleware function.
6. Use findById on the User document, store it in a variable called User.
    1. use Object.keys to get the keys into Array, store it as ArrKeys
    2. Loop ArrKeys, if user[key] matches with arrkeys. alter it 
    3. save the document

```javascript
router.patch('/users/:id', async (req, res) => {
    let id = req.params.id;
    const updates = Object.keys(req.body)

    try{
        // this method updates directly in db, ignores middleware.     
        // const user = await User.findByIdAndUpdate(id, req.body, {new: true, runValidators : true});
        const user = await User.findById(id);
      
        if(!user) {
            return res.status(400).send('Not found');
        }

        updates.forEach(el=>{
            user[el] = req.body[el]
        });
        await user.save();  

        res.send(user);
    } catch(e){
        res.status(500).send(e.message)
    }
})
```
#### Logging in Users

1. Lets create a route to login in users router,
    - req.body = email and password are required

```javascript
users.router('/users/login', async (req, res) => {
    try {
        // we add a custom method validateEmailandPassword in userSchema and use it here
        // we are passing email and password params
        // it user is valid we will get back the user
        const user = await User.validateEmailandPassword(email, password)

         if(!user) {
            res.status(400).send('Unable to login')
        }
        res.send({message : 'Login succesful', data : user})
    }catch(e) {
        res.status(400).send(e)
    }
})
```
2. In user model, lets create the custom function
```javascript
    userSchema.static('findByEmailAndValidate', async function (email, password) {
    // use the findOne method to verify email address
    let user = await this.findOne({email});    
    if(!user) {
        throw new Error ('Login credentails failed')
    }
    // import bcryptjs and use bcrypt.compare method to validate the hashed password with req.body password 
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        throw new Error ('Login credentails failed')
    }

    return user;
})
```
3. Make sure to set unique to email addres in User.email schema 

### JSON Web Tokens
JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

##### Installing 
Install jsonwebtoken by ```npm install jsonwebtoken```

###### Test

```javascript
const myFunction = async () => {
    // 
    const token = jwt.sign({_id : '21'}, 'heroku')
    console.log(token, 'token')
    // returns 
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMSIsImlhdCI6MTU4NzI2NTE4OH0.BozcfHyVliD22wQgx-iJOGAyvzyLanq4tnZ90Wf-U-I

    // headers      - base64EncodedString : metaInfo    : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    // body         - base64EncodedString : id-we-sent  : eyJfaWQiOiIyMSIsImlhdCI6MTU4NzI2NTE4OH0
    // signature    -                     : heroku      : BozcfHyVliD22wQgx-iJOGAyvzyLanq4tnZ90Wf-U-I
}

myFunction();
```

1. header and body can decoded at https://www.base64decode.org/
```javascript 

// decoded headers
{"alg":"HS256","typ":"JWT"}
// algorithm and json token type 

// decoded body 
{"_id":"21","iat":1587265188}

// iat - issue at time : timestamp

```

2. Verify jsonwebtoken using verify method provided jwt npm package
```javascript
  const data  = jwt.verify(token, 'heroku' )
  console.log(data)
```

3. we can also expire the token after certain amount of time. wen we create them add third param an object

```javascript
    {expiresIn : '7days'}
```

#### Generating Auth token for Login
Login/Signup both send jwt tokens, so lets create a seperate function which will return a jtw token

1. Goto user model.js in routes, generate a token for a single user that u just got using findByEmailAndValidate method.

```javascript
router.post('user/login', async (req, res) => {
    try {
        const user = await User.findByEmailAndValidate(req.body.email, req.body.password);
        // Lives on user instance 
        const token = await user.generateAuthToken();

        if(!user) {
            res.status(400).send('Unable to login')
        }
        res.send({message : 'Login succesful', data : user, token})

    }catch(e) {
        res.status(400).send('Unable to login')
    }
});
```
2. Open user.js in model and define a method for user schema  
    - Static methods are accessible in model, called model methods.
    - Methods are accessible on the instances, called instance methods

```javascript 
userSchema.method.generateAuthToken = async function () {
    const user = this;
}
```
3. Import jwt, let's sign jwt sign and return the token. 
    - First param, the param to be ve verifed ID 
    - Second param, the signature 
```javascript
const jwt = require('jsonwebtoken');

userSchema.method.generateAuthToken = async function () {
    const user = this;

    const token = jwt.sign({id : user._id.toString()}, 'heroku');

    return token;
}

```
4. Tokens as long as exist, user are logged in. So let's the save the tokes in db
    - Users can login in multiple devices so lets store the tokens in an array
    - So user may logout in system but be logged in mobile.
5. Create a tokens field in user schema, in user model. 
```javascript
tokens : [{
        token : {
            type : String,
            required : true
        }
    }]

```
6. Save the token in db to user document.
- Quick note, make sure to wrap your code with try and catch, to find db errors.
```javascript
   const token = jwt.sign({id : user._id.toString()}, 'heroku');
   user.tokens = user.tokens.concat({token});     

   await user.save();
   return token;

```

### Express Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

Without middleware -> New request -> run route handler
With    middleware -> New request -> do something -> run route handler


##### Application-level middleware

1. Open index.js, right after creating express instance, write the below code.
    - To register a new middleare function, use **app.use** method 
    - Pass a function, it has access to req and res along with it next
    - Unless next is called, routes handlers never going to run. meaning to run next things in the chain to run.

```javascript
app.use((req, res, next)=>{
    console.log('Time:', Date.now())
    next()
})
```

```javascript
// Server under maintance example
app.use((req, res, next)=>{
    res.status(503).send('The site under maintance, pls try back soon');
});
```
##### Router-level middleware
We are going to add authetication to get Users route. 

1. Lets start by creating a folder middleware in src folder, create auth.js file and add a auth middleware function
```javascript
const auth = async function (req, res, next) {
    try {
        next();
    } catch(e) {
        res.status(401)send('Please Authenticate')
    }
}
```
2. In user.js route folder, add a route users/me
    - second param is auth function 
    - thrid param is the callback, req-res
```javascript

router('/users/me', auth, async (req, res)=>{
    res.send('incoming')
})

```
3. In auth.js middleware function, let's start validating the token using jwt.verify method 
    1. To do this, in postman you have to send the token in headers for user/me route    
    ```javascript
     Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOWQ4MmU5MDQ1NjRlMjk3ZjU0M2QwOCIsImlhdCI6MTU4NzM4ODAxNn0.vM1yjKaC4Py8CKOYfK8Gu7N2cOucdoY0dPhHT3zO6_k'
    ```
    2. Import jwf module and Users document model.
    ```javascript
    const jwt = require('jsonwebtoken');
    const User = require('../models/user');
    ```
    3. Get the authoization token from req.header('Authorization')
    ```javascript
    const jwt = require('jsonwebtoken');

    const auth = async function (req, res, next) {
        try {
            // replace the 'Bearer ' to ''
            const token = req.header('Authorization').replace('Bearer ', '');

            // verify the token using jwt, add the secret singature.
            // if successful, it will have the id we set earlier
            const decoded = jwt.verify(token, 'test')

            // On User model, use findOne method to get by id and the token 
            const user = await User.findOne({_id : decoded._id, 'tokens.token' : token});

            // if token failes or user not found
            if(!user) {
                throw new Error();
            }
            
            // add the user to req.user, with route u can use it
            req.user = user;

            // return the token
            return token;
            
            next();
        } catch(e) {
            res.status(401)send({error:'Please Authenticate'})
        }
    }

    // if authorization is successful, u can get user with req.user
    router('/users/me', auth, async (req, res)=>{
        res.send(req.user)
    })

    ```

## AdvancedPostMan

#### Setting up Environment in postman 
1. Click on Manage Environments under settings icon, Add an environment, name it as Task Manager Api (dev)
2. Create a url variable, key as url, value as localhost:3000
3. Now you can use the environmnent variable url to make a request, to use it use 2 nested curly variable
```javascript
{{url}}/users/me
```

#### Setting up Authentication Token in postman 
1. Download Postman which has Authroization features available
2. After setting up environment, click on the user collection options (3 dots) and click on edit 
3. Goto Authroization tab, select Bearer token on select and paste the copied token u got from login
4. This will make the authorization token set on all request, set no auth for login and signup request 

but the problem here is everytime u need to copy the token from login and paste it in that settings authroization tab, so lets write a script in postman to take care of it 

1. In postman, we have **pre-request**, it will run before the request is made. **Tests** will run after the request is made. 
2. Here we cam write js code to extract token value and set it environment variable.
3. Edit the collection in postman, goto authroization tab. Remove the token and set env variable {{authToken}}  
4. Goto Login user request, open Tests tab,
```
// make sure the request status is 200
// postman gives us access to object pm, wen we are writing pre-request or tests script
if(pm.response.code === 200) {
    // use pm.environment and set method to set Env variable.
    // get the token from response, convert it to json object
    pm.environment.set('authToken', pm.response.json().token)
}

```
5. Now we have a script that anytime we login will setup the authToken.



#### Logging out
To logout basically we have to remove the current logged in token from database. To do that, 
1. Lets create a route */users/logout*, with auth middleware. 
```javascript
router.get('/users/logout', auth, (req,res)=>{
    res.send('Logged out successfully');
})
```
2. Auth middleware returns the user object in req.user, lets also add the token in req.token in auth middleware functions
```javascript
 req.token = token
```
3. Filter the token and remove it in User document and save it.
```javascript
router.get('/users/logout', auth, async (req, res) => {        
    const user = req.user;
    const lastToken = req.token;

    const filterdTokens = user.tokens.filter(tokenObj=>{
        return tokenObj.token != lastToken
    })

    user.tokens = filterdTokens;
    await user.save();
    res.send('Logged out')
});
```
#### Hiding Private json in response
There are two ways to hide private data. 
1. Create instance-method called publicProfile  and define what data to be sent.
2. Use toJSON instance-method and define the data to be sent


##### Public profile method
```javascript
userSchema.methods.getPublicProfile = function () {
    const user = this;
    // Use toObject method from mongoose to get it as object
    const userObj = user.toObject();

    // remove password, tokens and return the userOb
    delete userObj.password
    delete userObj.tokens
    return userObj;
}


// user route
res.send({message : 'Login succesful', data : user.getPublicProfile(), token})
```

##### toJSON method
```javascript
userSchema.methods.toJSON = function () {
    const user = this;
    // Use toObject method from mongoose to get it as object
    const userObj = user.toObject();

    // remove password, tokens and return the userOb
    delete userObj.password
    delete userObj.tokens
    return userObj;
}

// user route
res.send({message : 'Login succesful', data : user, token})
```

### User/Task Relationship
1. Let's add a Author field in Task schema, set type with mongose
```javascript
 author : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
```
2. In task route js, import auth file from middleware. 
3. In create task route, add the auth middleware, with req.body params, add the author params using spread opeartore and save it.
```javascript
router.post('/task', auth, async (req, res)=>{

    const task = new Task({
        ...req.body,
        author : req.user._id
    })
    try{
        await task.save();
        res.send(task)
    }catch(e) {
        res.status(400).res.send(error.message)
    }
});
```

With mongoose we can setup a relationship btw two models and its gonna provide us with helper function. 

1. Open task.js model file, in task schema add a property called ref (reference) and value as 'User'
    - reference to another to model, here we ref User model
```javascript
ref : 'User'
```
2. In user.js model, setup a virtual reference by 
```javascript
userSchema.virtual('tasks', {
    // reference to a model 
    ref : 'Task', 
    // field tat reference points to, here task reference to id field
    localField : '_id',
    // to which field user schema has to point. 
    foreignField : 'author'
})
```

3. To get the tasks created by the user in tasks route
- Use the auth middleware, with tat you can get user
- with user using populate method get the virutal name, and execute populate method
```javascript
    await req.user.populate('tasks').execPopulate();
```

Example
```javascript
// SAVE AUTHOR WITH TASK 
router.post('/task', auth, async (req, res)=>{

    const task = new Task({
        ...req.body,
        author : req.user._id
    })
    try{
        await task.save();
        res.send(task)
    }catch(e) {
        res.status(400).res.send(error.message)
    }
});

// GET ALL TASKS OF AN USER 
router.get('/task', auth, async (req, res)=>{
    try{
        //const tasks = await Task.find({ author : req.user._id})
        await req.user.populate('tasks').execPopulate();
        
        res.send(req.user.tasks)
    }catch(e) {
        res.send(e)
    }
})

// GET ONE TASK
router.get('/task/:id', auth, async (req, res)=>{
    const id = req.params.id;
    try{
        const taskData = await Task.findOne({_id:id, author : req.user._id });
        if(!taskData){
            res.status(400).send('not found');
        }  
        res.send(taskData);
    } catch(e) {
        res.status(500).send(error.message)
    }
})

// DELETE TASK
router.delete('/task/:id', auth, async (req, res)=>{        
    try{
        const taskData = await Task.findOneAndDelete({_id : req.params.id, author : req.user._id});
        if(!taskData){
            return res.status(400).send('Task not found');
        }  
        res.send(taskData);
    } catch(e) {
        res.status(500).send(e.message)
    }
})


```
##### Delete Tasks when deleteing a user using middleware
1. In userSchema add a pre method with remove, to delete all Tasks when deleteing a user using middleware. 
2. Import task, use deletMany method to delete all tasks by userId.
```javascript
userSchema.pre('remove', async function (next) {
    const user = this;
    await Task.deleteMany({author : user._id});
    next();
});
```

## SortingAndFiltering

#### Working with Timestamps
Lets add timestamps to user modal and task model
1. in userSchema, add second param with timeStamps property as true. 
```javascript
    const userSchema = new mongoose.Schema( 
        {...userSchema},
        {
            timestamps : true
        }
    )
```

#### Url params, Filtering completed status
Lets set completed in query params and based on that data should be filtered

1. In populate method, we can define an object which takes path as 'tasks' and match as an object. 
2. In match object, it can take params completed to true or false, see the below code.
```javascript

// Filter by Completed status
router.get('/task', auth, async (req, res)=>{
    
    let match = {}
    
    if(req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    
    console.log(match,'match')
    try{        
        await req.user.populate({
            path : 'tasks',   
            match         
        }).execPopulate();
        
        res.send(req.user.tasks)
    }catch(e) {
        res.send(e)
    }
})

// PAGINATION
router.get('/task', auth, async (req, res)=>{

    try{        
        await req.user.populate({
            path : 'tasks',   
            options : {
                limit : parseInt(req.query.limit),
                skip : parseInt(req.query.limit) * ( parseInt(req.query.page) - 1)
            }         
        }).execPopulate();
        
        res.send(req.user.tasks)
    }catch(e) {
        res.send(e)
    }
})

// SORT and full function
router.get('/task', auth, async (req, res)=>{
    let sort = {};
    let match = {};

    // createdBy:'desc'
    if(req.query.sortBy) {
        let parts = req.query.sortBy.split(':');        
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    }
    
    if(req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    
    try{        
        await req.user.populate({
            path : 'tasks',   
            match,
            options : {
                limit : parseInt(req.query.limit),
                skip : parseInt(req.query.limit) * ( parseInt(req.query.page) - 1),
                sort
            }         
        }).execPopulate();
        
        res.send(req.user.tasks)
    }catch(e) {
        res.send(e)
    }
})


```

## FileUpload
To upload files, Nodejs doesn't have it inbuilt, so we use a package called Multer

##### Multer
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

NOTE: Multer will not process any form which is not multipart (multipart/form-data).

##### Uploading a file to server
Lets add a avatar image for user

1. Install Multer package, import it in User.js route
```javascript
npm install --save multer
```
2. Congfigure multer, after importing, set folder destination to save the files
```javascript
var upload = multer({ dest: 'avatars/' })
```
3. In the avatar route, add multer ```upload``` as middleware
- upload.single('avatar') 
- upload as middleware, single takes one image, 'avatar' text should the body param. 
```javascript
router.post('/users/me/avatar', upload.single('avatar'), async (req, res) => {    
    try {
        res.response(200)
    } catch(e) {
        res.status(500).send(e);
    }
})

```
4. setup a route, /user/me/avatar, and in body send a jpg file 

##### Validating file uploads
With multer we can set validations 

```javascript
var upload = multer({ 
    dest: 'avatars/',
    limits : {
        fileSize : 100000,
    },
    fileFilter (res, file, callBack) {
        // if(!file.originalname.endsWith('.pdf')) {
        //   return callBack(new Error('Expects pdf format'))
        // }

        if(!file.originalname.match(/\.(doc|docx)$/)) {
            return callBack(new Error('Expects doc or docs format'))
        }

        callBack(null, true)

    }
})
```

###### Handling/Customizing Errors
Add a callback to the route to handle error
- Make sure to pass error, req, res, next params in the callback.

```javascript
router.post('/users/me/avatar', upload.single('avatar'), async (req, res) => {    
    try {
        res.response(200)
    } catch(e) {
        res.status(500).send(e);
    }
}, (error, req, res, next) => {
    res.status(400).send({error : error.message})
})
```


#### Add Avatars in db
1. Add avatar in user mode and type as Buffer
```javascript
avatar : {
    type : Buffer
},

```
2. Add the auth middleware in /avatar route, make sure u remove the dest property in multer. (so it doesn't save the img in db instead shares the image buffer in req.file.buffer)
```javascript

// Multer
var upload = multer({ 
    // dest: 'avatars/',
    limits : {
        fileSize : 1000000,
    },
    fileFilter (res, file, callBack) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return callBack(new Error('Expects png, jpg, jpeg format'))
        }

        callBack(null, true)
    }
})


// Avatar router
router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {    
    try {
        req.user.avatar = req.file.buffer;
        await req.user.save();
        res.status(200).send();
    } catch(e) {
        res.status(500).send(e);
    }
}, (error, req, res, next) => {
    res.status(400).send({error : error.message})
})

```

##### Reading buffer in browser
In src attribute we can provide binary data.

- data:image/jpg; : refers we are providing data, follwed by dataType which is image
- base64, : our data is base64 encoded which just removed specialcharacters things like url
- {binaryData} 

```html 
<img src="data:image/jpg;base64, {binaryData}" alt="avatar">
```


#### Remove Avatar in db
```javascript
router.delete('/users/me/avatar', auth, async (req, res) => {    
    try {
        req.user.avatar = undefined;
        await req.user.save();
        return res.status(200).send();
    } catch(e) {
        res.status(500).send(e);
    }
})
```

#### Serving the Avatar
1. Setup a get route for avatar, get the avatar by userId
2. Set response Content-Type to image/jpg
```javascript
router.get('/users/:id/avatar', async (req, res) => {    
    try {
        const user = await User.findById(req.params.id)
        if(!user || !user.avatar) {
            return new Error();
        }

        res.set({'Content-Type': 'image/jpg' });
        res.status(200).send(user.avatar) 
    } catch(e) {
        res.status(500).send(e);
    }
})

```

## SendingEmails 
1. Signup in sendGrid, setup Web API integration, 
    - Choose Nodejs or any lanauge 
    - Choose a name for api, create it, you will get an API
    - Complet Single Sender
    - once you're done, verify the last step in sendgrid 
2.  In nodejs, create a folder emails under src folder and create a account.js file
3. Install sendgrid/mail module
```javascript
npm install --save @sendgrid/mail
```
4. In account.js, require the sendgrid module. configure the api with the module
```javascript
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = "*****";

//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
    to: email,
    from: 'shakiddo@gmail.com',
    subject: 'Thanks for joining in',
    text: `Welcome to Task App ${name},Let me know how you get along with the app`,
}

sgMail.send(msg);
```
5. Test the email by running it in node. make sure you dont use same email for to and from 
```javascript
node projcet/src/emails/account
```

#### sendingMailsForLogin
1. Lets create sepeate to functions to handle each mail, lets go with welcome mail
- it takes email and name as params 

```javascript
const welcomeMail = (email, name) => {
    const msg = {
        to: email,
        from: 'shakiddo@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to Task App ${name}, Let me know how you get along with the app`,
    }

    sgMail.send(msg);
}
```
2. In users route.js, goto userCreation route, once the user is saved. call the welcomeMail function and pass the email and name params.
```javascript
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    
    try {        
        if(!user) {
            req.send(400)
        }
        const token = await user.generateAuthToken();
        await user.save()
        welcomeMail(user.email, user.name.slice(0,1).toUpperCase() + user.name.slice(1) );
        res.status(201).send({message : 'User created succesfully', data : user, token});
    } catch(e) {
        res.status(400).send(e.message)
    }
})


```

## EnvironmentVariables

##### Why environment variables ?
1. Security
    - Storing api's in code is not good practise, can be used by others
2. Customization 
    - defining env-variables makes it easy to use in dev and production

### Setting up Environment Variables for dev
Lets see how to setup custom environment variables
- We are already set env-variables in index.js
```const port = process.env.PORT || 3000;```

1. Create config folder under project folder, create dev.env file
    - make sure you to ignore the file in git
2. dev.env file will consist of key/value pair
    - Make sure you don't have any spaces or any formatting when defining
```javascript
// dev.env
PORT=3000
```

3. Each operating system configure Environment variables are differntly, it's a huge pain. So lets use a module called env-cmd
```javascript
npm i env-cmd --save-dev
```
4. As we are using env-cmd, it requires some changes package.json
    - in scripts to run dev with env-variables add the following code
    ```javascript
   "dev": "env-cmd  -f ./config/dev.env nodemon src/index.js",
    ```
5. Lets define other API keys in dev.env
```javascript
// dev.env 
PORT=3000
SENDGRID_API_KEY=*****
JWT_SECRET=herok2u
MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api


// user.js and auth.js 
const JWT_SECRET = process.env.JWT_SECRET
const decoded = jwt.verify(token, JWT_SECRET); 

// mongodb.js
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true,
    useCreateIndex : true
})
```

### Setting up Environment Variables for production
So far we are running mongoDb in our local we want to use mongodb hosting service to get a db service up and running. 
- Mongodb has their own solution called atlas 

1. Goto MongodbAtlas, create an account. 
    - Select Shared cluster a free service 
    - Select AWS as cloud provider
    - Select your region, 
    - Create cluster, this will take about 7 - 10 mins 
    - once its' done, connect button will enable 
2. Click on connect to walk thru a setup for this cluster    
    1. Whitelist your IP address
        - Select, Add a different IP address and enter 0.0.0.0/0. this is going to whitelist all ips, local-ip, heroku-ip 
    2. Create a mongodb User
        - user, taskapp 
        - password 
    3. Choose a connection method, download mongodb compass
        - mongodb compass is like robo3t would gives graphical interface to see database  
    4. Setup a connection mongodb compass for dev 
        - before clicking connect, Make sure you are running mongodb in local
        - once you are connected, you can see your database in mongoCompass which were already created
    5. Setup production database 
        1. create new connection in mongoCompass
        2. We will need to fill a few fields,
        ```javascript
        // in hostname, enter this
        @cluster0-gztll.mongodb.net/

        mongodb+srv://taskapp:<password>@cluster0-gztll.mongodb.net/test
        ```
            - host name : @cluster0-gztll.mongodb.net/
            - enable SRV Record
            - Authentication : Username/Password
            - Username : taskapp
            - password : ... 
            - authentication database : admin
            - ssl : System CA / Atlas Deployment
            - SSH tunnel : none
            - Favourite name : Production MongoDb database
        3. Click on connect after filling the fileds 
            - if you are having issues connecting, Add a new database user and use this credential to connect in mongodb compass. 
            - new-database-user is available under security > Database Access
    
        
### Heroku Deployment Task App API
1. Add the project to git, make sure to ignore config and node_modules folder
2. Initialize the application in Heroku
- ```heroku create <projectName>```
- it will give url of the website and remote repo 
3. set the environment variable 
    - read 
    ```heroku config```
    - set
    ```heroku config:set key=value ```
    - remove
    ```heroku config:unset key ```

    1. Set the JWF_TOKEN, SENDGRID_API_KEY AND MONGODB_URL
    2. To get mongodbUrl, goto mongodbAtlas in clusters, click connect your application and copy the url ```mongodb+srv://<username>:<password>@cluster0-gztll.mongodb.net/test?retryWrites=true&w=majority```
    3. Set the env variable, make sure to wrap the url with quotes and /test? = is the db name, so alter it
    ```MONGO_DB_URL:'mongodb+srv://<username>:<password>@cluster0-gztll.mongodb.net/test?retryWrites=true&w=majority'```
    4. Push to git heroku repo 
    ```git push heroku master```
3. One your are done pushing to heroku repo, test is in postman,
    - url should be      









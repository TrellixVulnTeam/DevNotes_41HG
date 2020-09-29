var express = require('express')
var path = require('path');
var app = express()

var students = [
  {
    "_id": "58be04282c5595d3c9c13b13",
    "name": "Waters Hickman",
    "gender": "male"
  },
  {
    "_id": "58be0428e77ab147a70087f4",
    "name": "Olive Mendez",
    "gender": "female"
  },
  {
    "_id": "58be0428600e941faec62d8b",
    "name": "Walton Blackburn",
    "gender": "male"
  },
  {
    "_id": "58be0428450950c34e5eef82",
    "name": "Hogan Mills",
    "gender": "male"
  },
  {
    "_id": "58be0428d474c6a5dd261ef5",
    "name": "Holmes Rutledge",
    "gender": "male"
  },
  {
    "_id": "58be04284bf0f465b9a46e8c",
    "name": "Clark Pena",
    "gender": "male"
  },
  {
    "_id": "58be0428458250e60b11b604",
    "name": "Nieves Lopez",
    "gender": "male"
  },
  {
    "_id": "58be0428da7bf7252d44d455",
    "name": "Jannie Thornton",
    "gender": "female"
  },
  {
    "_id": "58be0428d5b1082ebe6fc388",
    "name": "Alford Smith",
    "gender": "male"
  },
  {
    "_id": "58be04283aeab62362bc57e0",
    "name": "Valencia Lynn",
    "gender": "male"
  },
  {
    "_id": "58be0428eae3c9a2eb94f83a",
    "name": "Mclean Summers",
    "gender": "male"
  },
  {
    "_id": "58be042830cf07beb73d8d24",
    "name": "Marian Joseph",
    "gender": "female"
  },
  {
    "_id": "58be04281eda966902d5f529",
    "name": "Mason Farmer",
    "gender": "male"
  },
  {
    "_id": "58be04284ac1df7c459f3b28",
    "name": "Woodward Barr",
    "gender": "male"
  },
  {
    "_id": "58be04286458ea08a8f9ca04",
    "name": "Clayton Garcia",
    "gender": "male"
  }
] ;
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/students', function (req, res) {
  var query = req.query;
  res.send(students)
})

app.get('/student/:id', function (req, res) {
	var id = req.params.id;
  console.log(id)
  res.send(students.find(function(student) {
    return student._id === '58be0428600e941faec62d8b';
  }));  
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
# get All students
API: '/students'
data: NA


# get a student
API: '/student/[id]'
data: NA


# get set of students
API: '/students'
data: index: <value>, length: <value>


NOTES:
-----------

var httpReq = {
   url: 'physical/path/or/virutal/path',
   method: 'get|put|post|delete',
   data: {},
   success: function () {},
   failure: function () {}
};


$.ajax(httpReq);

// execute for loop

// execute complex math

CRUD

Create -> Post
Read   -> Get
Update -> Put
Delete -> Delete
----------------------
Partial Update -> Patch
------------------------------

App:
create a new student -> post
get a student
get all students
get first 4 students   -> get
update a student     -> put
delete a student      -> delete










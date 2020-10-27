## Table of contents 
- [DataStructures](#datastructures)
    - [Why so many?](#why-so-many)
    - [ES2015 Class](#es2015-class)
    - [DataStucture class exmaple](#datastucture-class-exmaple)
- [Singly Linked List](#singly-linked-list)
    - [Define what a singly Linked List is](#define-what-a-singly-linked-list-is)
    - [Compare with Arrays](#compare-with-arrays)
- [Doubly Linked List](#doubly-linked-list)
- [Stacks](#stacks)
    - [What is a stack ?](#what-is-a-stack-)
    - [What are the use cases for a stack ?](#what-are-the-use-cases-for-a-stack-)
    - [How to implement stack data structure ?](#how-to-implement-stack-data-structure-)
    - [Array Implementation](#array-implementation)
    - [Linked List Implementation](#linked-list-implementation)
    - [BIG O of Stacks](#big-o-of-stacks)
- [Queues](#queues)
    - [What is a Queue ?](#what-is-a-queue-)
    - [Usecases for a Queue ?](#usecases-for-a-queue-)
    - [Implement operations on a Queue data structure](#implement-operations-on-a-queue-data-structure)
      - [Building Queue with Array](#building-queue-with-array)
      - [Building Queue Class](#building-queue-class)
    - [BIG O Queues](#big-o-queues)
- [Binary Search Tree (BST)](#binary-search-tree-bst)
    - [What is a Tree ?](#what-is-a-tree-)
    - [Compare and contrast trees and lists](#compare-and-contrast-trees-and-lists)
    - [Tree terminology](#tree-terminology)
    - [Usecases for a Tree ?](#usecases-for-a-tree-)
    - [Explain the differences btw trees and binary tree and binary search trees](#explain-the-differences-btw-trees-and-binary-tree-and-binary-search-trees)
      - [Tree](#tree)
      - [Binary Trees](#binary-trees)
      - [Binary Search Tree (BST)](#binary-search-tree-bst-1)
    - [Implement on a Tree data structure ?](#implement-on-a-tree-data-structure-)
    - [BIG O of Binary Search Tree](#big-o-of-binary-search-tree)
- [Tree Traversal](#tree-traversal)
    - [What is a Tree Traversal ?](#what-is-a-tree-traversal-)
      - [Breadth-First-Search Brief](#breadth-first-search-brief)
      - [Depth-First-Search Brief](#depth-first-search-brief)
  - [Breadth First Search](#breadth-first-search)
    - [Implement on a Tree Traversal ?](#implement-on-a-tree-traversal-)
    - [Usecases for a Tree Traversal ?](#usecases-for-a-tree-traversal-)
    - [BIG O of Tree Traversal](#big-o-of-tree-traversal)
- [Heaps](#heaps)
    - [What is Heap ?](#what-is-heap-)
- [Graph](#graph)
    - [Why ? Purpose](#why--purpose)
    - [What ?](#what-)
      - [Graph Terms](#graph-terms)
      - [Types of Graphs](#types-of-graphs)
      - [Types of Graph Representations](#types-of-graph-representations)
    - [How ? Implementation](#how--implementation)
    - [Usecases for Graph ?](#usecases-for-graph-)
      - [Social Networks](#social-networks)
      - [Google Map](#google-map)
      - [Recommendation Engines](#recommendation-engines)
    - [BIG O of Graph](#big-o-of-graph)
- [Example](#example)
    - [What is a Queue ?](#what-is-a-queue--1)
    - [Usecases for a Queue ?](#usecases-for-a-queue--1)
    - [Implement on a Queue data structure ?](#implement-on-a-queue-data-structure-)
    - [BIG O of Queue](#big-o-of-queue)
- [HashTable](#hashtable)
    - [What is a hashtable](#what-is-a-hashtable)
    - [Introductory Example](#introductory-example)
    - [HashPart](#hashpart)
      - [What makes a good hash?](#what-makes-a-good-hash)
    - [Recap](#recap)

# DataStructures
- A data structure is a data organization, management, and storage format that enables efficient access and modification

- Data structures are collections of values, the relationshops among them, and the functions or operations that can be applied to the data.

### Why so many?
Different data structures excel at different htings. Some are highly specialized, while others (like arrays) are more generally used. 

### ES2015 Class
What is a class ?
- A blueprint for creating objects and with pre-defined properties and methods
- Classes are created with the new keyword
- The constructor function is a special function that gets run when the class is instantiated 
- Instance methods can be added to classes similar to methods in objects 
- Class methods can be added using the static keyword
- Example below
```javascript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return `Full name is ${this.firstName} ${this.lastName}`;
  }

  // the static keyword define a static method
  // Static methods are called without instancting their class
  // Cannot be called throught a class Instance 
  // Created for utility functions
  static enrollStudents (...students) {
    console.log(students,'students')
    // maybe send an email here
    return 'Enrolling Students!'
  }
}
let firstStudent = new Student("Shaktish", "kumar")
let secondStudent = new Student("Pradeep", "bro");
let thirdStudent = new Student("Annz", "Aravind")

// ENROLL STUDENTS TO SEND MAIL
console.log(Student.enrollStudents({firstStudent, secondStudent}));

// RETURNS FIRST STUDEN FULL NAME
console.log(firstStudent.fullName());

```

### DataStucture class exmaple 
- We will be using constructor and instance methods quite a bit
- We will almost never be using static methods
```javascript
class DataStructures {
  constructor() {
    // what default properties should it have?
  }

  someInstanceMethod() {
    // what should each object created from this class be able to do ?
  }
}

```
- Inside all of our instqance methods and constructopr the keyword 'this' refers to the object created from that class (also known as an instance)

# Singly Linked List
Objectivies
- Define what a singly Linked List is 
- Compare and contrast Linked List with Arrays
- Implement insertion, rmeoval and traversal methods on Singly Linked List


### Define what a singly Linked List is 
- A data structure that contains a head, tail and length property
- Linked lists consists of nodes and each node has a value and a pointer to antoher node or null 

### Compare with Arrays 
Lists 
- Do not have indexes!
- Connected via nodes with a next pointer
- Random access is not allowed 

Arrays
- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index 

Notes 
- Linked List is good at insertion and deletion, coz arrays are indexed if we insert in the beginning, everything has to re-indexed. In linked list its not the case 

Technical Concept 
- newNode has object reference, so when you tail's next value, head's next will also be updated. Thanks to Object reference 

```javascript
class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }

  class SingleyLinkedList {
    constructor(value) {
      this.head = null
      this.tail = null
      this.size = 0
    }

    push(val) {
      let newNode = new Node(val);
      
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++ 
      return this;
    }

    pop() {
      /* 
        #INPUT
        1 

        RESULT 
        null 

        this.size === 1 ? 
        this.head = null  
        this.tail = null 

        ----------
        #INPUT
        1, 2 

        RESULT
        1 

        this.size === 2 ? 
        this.head = this.tail  

        -----------
        #INPUT
        1, 2, 3
        n, n, 

        RESULT
        1, 2 

        let current = this.head
        while(current.next) {
          {val : 1, next : { val : 2 : next : {val : 3, next : null }}  }
          
          // get last second element
          // the last element next will be null 

          current = current
        }

        current.next = null;
        this.tail = current;

      */
      let current = this.head;
      let newTail = current;
      if(!this.head) {
        return undefined
      } else if(this.size == 1) {
        this.head = null
        this.tail = null
      } else {        
          while(current.next) {          
            // get last second element
            // the last element's next will be null 
            newTail = current
            current = current.next    
          }

          newTail.next = null;
          this.tail = newTail;        
      }
      this.size--
      return current;    
    }

    shift () {
      if(!this.head) {
        return undefined
      }
      let removedHead = this.head;           
      this.head = removedHead.next; 
      this.size--;

      if(this.size == 0) {
        this.head = null
        this.tail = null
      }
      return removedHead
    }

    unshift(val) {
      let newNode = new Node(val);
      let removedNode = {...this.head}       
      if(!this.head){
        this.head = newNode
        this.tail = newNode
      } else {
        
        newNode.next = this.head;
        this.head = newNode;

      }
      this.size++

      return removedNode;
    }

    get(index) {
      if(index >= this.size || index < 0)   {
        return null
      }
      let counter = 0;
      let current = this.head;
      let temp = current;
      while(counter !== index) {
        current = current.next
        counter++;
      }
      return current;
    }

    set(index, value) {
      let itemFound = this.get(index);
      if(itemFound) {
        itemFound.value = value; 
        return true 
      }
      return false;
    }

    insert(index, value) {
      /* 
        # INPUT
        0, 1, 2, 3
        # RESULT
        0, 9, 1, 2, 3
        index = 1 
        index - 1 
        let temp = foundNode
        let newNode.next = temp.next
        temp.next = newNode                 
      */

      let newNode = new Node(value);
      if(index < 0 || index >= this.size) {
        return false 
      } else if(index == 0) {          
        return !!this.unshift(value);
      } else if (index == this.size - 1) {
        return !!this.push(value);
      } else {
        if(itemFound) {
          let itemFound = this.get(index - 1 );
          newNode.next = itemFound.next 
          itemFound.next = newNode; 
          this.size++;        
          return true;
        } else {
          return false 
        }        
      }
    }

    remove(index) {
      /* 
        # INPUT
        0, 1, 2, 3       
        # REMOVE INDEX 
        index = 2
        # RESULT
        0, 1, 3

        get(index - 1);
        foundNode = {value : 1, next : {value : 2 : next : {value : 3 : next : null}}}
        let nextNode = foundNode.next.next;
        foundNode.next = nextNode;          
      */
      if(index < 0 || index >= this.size) { return null}
      if(index === 0) { return this.shift()}
      if(index === this.size - 1 ) { return this.pop()}
      let foundNode = this.get(index - 1 );
      let removedNode = foundNode.next
      let nextNode = removedNode.next;
      foundNode.next = nextNode;            
      this.size--;
      return removedNode

    }

    print() {
      let arr = [];
      let current = this.head;
      arr.push(this.head.value);

      while(current.next) {
        current = current.next;
        arr.push(current.value);
      }
      console.log(arr);
      return arr
    }
  }

  const list = new SingleyLinkedList();  
  list.push(0);
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.print();
  // list.insert(3, 56);
  list.remove(3);
  ```

# Doubly Linked List
-- NOT UPDATED 


# Stacks  
### What is a stack ?
- Stacks are a LIFO data structure (LAST IN FIRST OUT Principle) where the last value in is always the first one out.
- Think about a stack of plates or stack of.. anything. 
- As you pile it up the last thing (or the top-most thing) is what gets removed first 
- Stacks are used to handle function invocations (the call stack) for opeartion like undo/redo and for routing(remeber pages you have visited and go back/forward) and much more!

### What are the use cases for a stack ?
- Managing function invocations 
- Undo/Redo (Photoshop)
- Routing (the history object) is treated like a stack ( in ReactJS)

### How to implement stack data structure ?
There is more than one way of implementing a stack, 
- Array Implementation
- Linked List Implementation

A stack is a concept, its basically a set of rules that says we have to store in such a way thatt 
- First thing added in is the last thing removed 
- Last thing added is the first thing removed 

### Array Implementation
Some programming languages come with their own stack data type but we can still use a built in array to create our own stack.

```javascript
var stack = [];

// Add a element at the end, using push method
stack.push(1)
stack.push(2)
// remove a element 
stack.pop(); // removes 2 
stack.pop(); // removes 1 

// use unshift method to add element at the beginning 
stack.unshift(1)
stack.unshift(2)
// use shift method to remove lastly added element in the array
stack.shift() //removes 2
stack.shift() //removes 1

// if u see both approaches follow the stack concept
```
### Linked List Implementation
- Stack is supposed to be constant time 
- Remember, Its not constant time from removing from end thats why didn't go with SingleyLinked list push and pop 
- In stack, we need to add and remove from the beginning of our list but we are calling it push and pop because its a stack


```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Stack DataStrucuture</title>
</head>
<body>

</body>
<script>
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Stack {
    constructor(value) {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(val) { 
      /*
        #ORG
        HELLO WORLD SHAKTISHHERE
        #RES
        SHAKTISHHERE WORLD HELLO
      */

      let newNode = new Node(val);

      if(!this.first) {
        this.first = newNode;
        this.last = newNode;        
      } else {
        let temp = this.first;         
        newNode.next = temp;
        this.first = newNode;        
      }
      this.size++;
      console.log(this.print(), 'print')
      return this.size;
    }
    pop () {
      /*
        #ORG
        SHAKTISHHERE WORLD HELLO
        #RES
        pop : WORLD SHAKTISHHERE
        pop : SHAKTISHHERE
        pop : NULL
      */

      if(!this.first) { return null}
      let temp = this.first;      
      if(this.size == 1) {
        this.last = null;
      } 
      this.first = temp.next;    
      this.size--
      return temp.value;
    }

    print () {
      if(this.size) {
        let res = [];
        let current = this.first;
        res.push(this.first.value)
        while(current.next) {
          current = current.next;
          res.push(current.value)
        }
        return res;
      } 
      return [];
      
    }
  }

  const stack = new Stack();
  stack.push('hello');
  stack.push('world');
  stack.push('shaktishhere');
  stack.pop();
  

</script>
</html>
```

### BIG O of Stacks
- Insertion O(1)
- Removal   O(1)
- Searching O(N)
- Access    O(N)

Searching and Access isn't efficent in stack-linked-list, use other Array or other strucuture.

# Queues  
### What is a Queue ?
- It's similar to stack in the sense that you add data in and you remove data out and those are really the only two opeartions
- How ever the order is different instead of last in first out for a stack LIFO, Queue is a FIFO (First in First Out)
- The first person in line/queue is the first person out, The first piece of data in a queue is the first thing out  

### Usecases for a Queue ?
How do we use them in programming ?
- Background Tasks 
- Uploading Resources 
- Music Playlist 
- Printing / Task processing 

### Implement operations on a Queue data structure
we can impletement Queue in Array or Queue Class  

#### Building Queue with Array 
1. using push and shift
- using shift method will remove the first element, disadvantage is all the elements in array will be reindexed
2. using unshift and pop 
- unshift will also re-index array elements so we don't have a efficient way we should create our own Queue class
```javascript 
 /* 
  let arr = []
  INPUT  : 1 2 3
  shift()
  OUTPUT : 2 3 
  arr.push(1).push(2).push(3)
  arr.shift()
 */
 let arr = [];
 arr.unshift(3);
 arr.unshift(2);
 arr.unshift(1);
 // arr = [3,2,1]
 // remove the the first element using pop()
 arr.pop(); // [3,2] // first in first out 
```

#### Building Queue Class
```javascript
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  class Queue {
    constructor(value) {
      this.first = null;
      this.last = null;
      this.size = 0;
    }

    push(val) { 
      /* QUEUE EXAMPLE        
        HEAD TO TAIL 
          {val : 0, next : null}
          {val : 0, next : {val : 1, next : null}}
          {val : 0, next : {val : 1, next : {val :2, next : null}}}
        TO POP, I need to iterate 

        TAIL TO HEAD 
          {val : 0, next : null}
          newNode = {val : 1, next : null}
          this.tail.next = newNode;
          this.tail = newNode;
          size++
        SHIFT (REMOVE FIRST ELEMENT) 
          input : [0,1,2,3]
          SHIFT : ()
          RES   : [1,2,3], [2,3], [3]
        
        this.head = this.head.next
        size--     

        SO GO WITH TAIL TO HEAD         
      */ 

      let newNode = new Node(val);
      if(!this.first) {
        this.first = newNode;
        this.last = newNode;        
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.size++;      
      return this.size;
    }
    pop () {
      if(!this.first) { return null}
      let temp = this.first;      
      if(this.size == 1) {
        this.last = null;
      } 
      this.first = temp.next;    
      this.size--
      return temp.value;
    }

    print () {
      if(this.size) {
        let res = [];
        let current = this.first;
        res.push(this.first.value)
        while(current.next) {
          current = current.next;
          res.push(current.value)
        }
        return res;
      } 
      return [];
      
    }
  }

  const q = new Queue();
  q.push(1);
  q.push(2);
  q.push(3);

```

### BIG O Queues
- Insertion O(1)
- Removal   O(1)
- Searching O(N)
- Access    O(N)


# Binary Search Tree (BST)
### What is a Tree ?
A data strucutre that consist of nodes in a parent/child relationship 

### Compare and contrast trees and lists 
Lists are linear
- It's one thing and then next and then next... 

Trees are nonlinear 
- They can branch, it can have more than one path 
- Singley linked list has one path, Doubley linked list could work backwards or forward but stil there is one line through our data structure, In trees we can take multiple paths 
  
### Tree terminology 
- Root : The top node in a tree
- Child : A node directly connected to another node 
- Parent : the converse notion of a child
- Siblings : A group of nodes with the same parent
- Leaf : A node with no children
- Edge : The connection between one node and another (its the arrow/caret )
  
### Usecases for a Tree ?
Lots of different applications, used in 
- HTML DOM 
- Network Routing (Broadcast)
- Abstract syntax tree 
- Artificial Intelligence 
  - Mini max tree (TIC TOC Game)
- Folder Structures
- JSON 
 

### Explain the differences btw trees and binary tree and binary search trees 
#### Tree
General tree is a tree in which each node can have many children or nodes.

```javascript
          5
       /  |  \
      /   |   \
     9    4    2
    / \   |   / \
  15   17 2  19  21
```
#### Binary Trees
Binary Tree is a specialized form of tree with two child (left child and right Child). It is simply representation of data in Tree structure

- Every parent node has at most two children, they cannot have three childs at Root node  

```javascript
         5
       /   \
      /     \
     9       2
    / \     / \
  15   17  19  21
```

#### Binary Search Tree (BST) 
BST is a special type of Binary Tree that follows following condition:
- left child node is smaller than its parent Node
- right child node is greater than its parent Node

```javascript
         50
       /    \
      /      \
     25      75
    /  \    /  \
  20    30 70   80
```
### Implement on a Tree data structure ?
```javascript
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {
    constructor() {
      this.root = null; 
    }

    findExplorePath(root, insertedValue, newNode) {
      if(insertedValue < root.value  ) {
        if(root.left) {
          return this.findExplorePath(root.left, insertedValue, newNode )
        } else {
          return root.left = newNode
        } 
      } else {
        if(root.right ) {
          return this.findExplorePath(root.right, insertedValue, newNode )
        } else {
          return root.right = newNode
        }               
      }
    }

    insert(insertedValue) {
      /* 
        root : 5 
        -------
              5
          4       10
        3        6  15

        insert : 20 

        insert : 10 

        check if root value is greater than insertedValue 
          if it s greater than take right 
          if its lesser than take left 
        
        Insertion is 10 so take right 
          let newNode = new Node (value);
          let current = this.root; 
          check insertedValue is greater than root value amd take right or left 

          let explorePath = findExplorePath(root, insertedValue);
      */

      let newNode = new Node (insertedValue)
      if(!this.root)  {
        this.root = newNode
        return this; 
      } else {
        this.findExplorePath(this.root, insertedValue, newNode);
        return this;
      }
    }

    findHelper (root, value) {
      if(value === root.value  ) {
        return root
      } else if (value < root.value) {
        if(root.left) {
          return this.findHelper(root.left,value)
        } else {
          return false
        }        
      } else if (value > root.value) {
        if(root.right) {
          return this.findHelper(root.right,value)
        } else {
          return false
        }        
      }
    }

    find(value) {
      if(!this.root ) {
        return null 
      } else {
        {
        /* 
                  5
              4       10
            3        6  15

          Search for 10 
          if root.value == value {
            return 'found'
          } else {
            findHelper(root,value)            
          }
        */

        }        
        return this.findHelper(this.root, value);

      }
    } 
  }

  let tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(7);
  tree.insert(11);
  tree.insert(16);
  console.log( tree.find(100) );
  console.log(tree, 'tree')

//           10
//     5              13
// 2      7       11      16

```

### BIG O of Binary Search Tree 
- Insertion : O(log n)
- Searching : O(log n) 
Not guaranteed!

# Tree Traversal

### What is a Tree Traversal ?
Tree traversal is a process to visit all the nodes of a tree and may print their values too. Because, all nodes are connected via edges (links) we always start from the root (head) node.

There are two ways of traversing a tree
- Breadth First Search
  - BFS is implemented iteratively witha a Queue (FIFO)
  - Uses 
    - Check if a path exists between nodes, finding 'hops' or disatance out or 'levels' away 
  - Goes Wide 
- Depth First Search
  - DFS uses Stack, either by the stack we create or use inbuilt one.
  - Uses : 
    - Ubuntu's DFS is backtracking, complete search, finding all paths.. DFS goes deep into a path, explores all of it and comes back outwards and then decides.  
  - Goes Deep 

#### Breadth-First-Search Brief
```javascript
--------------> 10 
-------> 6 ---------> 15
---> 3       8  ---------> 20
```
- [10,6,15,3,8,20]
- Starting with the beginning and working across the tree

#### Depth-First-Search Brief
Idea of DFS is that you're going down like your primary direction is end of the tree and the coming back up.

Tree Example
```javascript
          10
    6           15
3       8             20
```
There are three main orders for DFS
- DFS - InOrder  
  - Example : [3, 6, 8, 10, 15, 20]
- DFS - PreOrder 
  - Example : [10, 6, 3, 8, 15, 20]
- DFS - PostOrder 
  - Example : [3, 8, 6, 20, 15, 10]


## Breadth First Search
The Breadth First Search ( BFS ) is an algorithm for traversing or searching tree or graph data structures. It explores all the nodes at the present depth before moving on to the nodes at the next depth level.

- We will read through horizontally (left to right)


### Implement on a Tree Traversal ?
- Create a queue (this can be an array) and a variable to store the values of nodes visited
- Place the root node in the queue
- Loop as long ad there is anything in the queue
  - Dequeue a node from queue and push the value of the node into variable that store the nodes 
  - if there is a left property on the node dequeued - add it to the queue
  - if there is right property on the node dequeued - add it to the queue
- Return the variable that stores tha values


### Usecases for a Tree Traversal ?


### BIG O of Tree Traversal 


# Heaps
### What is Heap ?
A Heap is a special Tree-based data structure in which the tree is a complete binary tree. Generally, Heaps can be of two types:

Very Similar to a binary search tree, but with some different rules
- In a MaxBinaryHeap, parent nodes are always larger than child nodes
- In a MinBinaryHeap, parent nodes are always smaller than child node

There are many types of heaps 
- Heap
- Binary Heap
- B-Heap
- and many more. 


# Graph

### Why ? Purpose 

### What ?  
A graph data structure consists of a finite (and possibly mutable) set of vertices (also called nodes or points), together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

- A Graph is a collection of nodes amd connection btw nodes 

#### Graph Terms
![alt text](https://github.com/shaktish/DevNotes/blob/master/08_DataStructuresAndAlgorithms/images/graph_term_undirectedgraph.png?raw=true "graph_term_undirectedgraph")

- Vertex : a node
- Edge : connection between nodes
- Weighted/Unweighted : values assigned to distances between vertices
- Directed/Undirected : directions assigned to distanced between vertices 


#### Types of Graphs 

Undirected Graph:
In an undirected graph, nodes are connected by edges that are all bidirectional. For example if an edge connects node 1 and 2, we can traverse from node 1 to node 2, and from node 2 to 1.
- A type of graph that contains unordered paris of vertices
- Edges do not reporesent the direction of vertexes 
- Undirected arcs represeen the edges 
- Facebook uses undirected graph for their users 

Directed Graph: 
In a directed graph, nodes are connected by directed edges – they only go in one direction. For example, if an edge connects node 1 and 2, but the arrow head points towards 2, we can only traverse from node 1 to node 2 – not in the opposite direction.
- A type of graph that contains ordered pairs of vertices
- Edges represent the direction of vertexes
- An arrow represents the edges 

Weighted Graph
A graph is unwieghted if its edges are not assigned any value

Unweighted Graph
A graph where each edge is assigned a numerical value 

#### Types of Graph Representations
Adjacency List
- To create an Adjacency list, an array of lists is used. The size of the array is equal to the number of nodes.
- A single index, array[i] represents the list of nodes adjacent to the ith node.


### How ? Implementation 

### Usecases for Graph ?
#### Social Networks
- Social graphs draw edges between you and the people, places and things you interact with online.
- This are entities such as Users, Pages, Places, Groups, Comments, Photos, Photo Albums, Stories, Videos, Notes, Events and so forth. Anything that has properties that store data is a vertice.
#### Google Map
- Google Maps and Routes APIs are classic Shortest Path APIs. This a graph problem that's very easy to solve with edge-weighted directed graphs (digraphs).
- The idea of a Map API is to find the shortest path from one vertex to every other as in a single source shortest path variant, from your current location to every other destination you might be interested in going to on the map.

#### Recommendation Engines
- Yelps has been slowly phasing out their old Fusion API for a GraphQL API.


### BIG O of Graph 


# Example
### What is a Queue ?


### Usecases for a Queue ?


### Implement on a Queue data structure ?


### BIG O of Queue 


# HashTable
### What is a hashtable
- Hash tables are used to store a key-value pairs 
- They are like arrays, but the keys are not orderd.
- Unlike arrays, hash tables are fast for 
  - Finding values,
  - Adding new values,
  - Removing values


### Introductory Example
- Imagine we want to store some colors, we could just array/list
```javascript
['#000', '#fff', '#ccc'];
```
- Not super readable! what do these colors correspon to?
- It would be nice if instead of using indices to access colors, we could use more human readable keys
- pink : #ff69b4, colors['cyan'] is way better than colors[2]


### HashPart
To implement a hashtable we'll b using an array 
- In order to lookup values by key, we need a way to convert keys into valid array indices
- a function that performs this task is called hash functions 

```javascript
0 1 2 3 4 5 6 7 8 9 
pink  --> 0
white --> 1 
```

#### What makes a good hash?
- Fast (i.e constant time)
- Doesn't cluster outputs at specific indices but distributes uniformly 
- Deterministic (same input yields same output)



### Recap
- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can add new key-values quickly 
- Hash tables store data in a large array, and work by hashing the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic 
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index

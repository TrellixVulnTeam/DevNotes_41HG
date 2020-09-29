Asynchronus JS : Promises 

- Old way had callback functions, when request are many callbacks can be easily lost.


```javascript
function getIDs () {
  setTimeout(()=>{
   var ids = [1,2,3];
   console.log('List of IDs ' + ids);
    
    setTimeout((id)=>{
      var recpy = {
        item : 'Idly',
        requester : 'Shaktish'
      }
      console.log('id : '+ id + '\n' + ' Item : ' +recpy.item);
      setTimeout((auth)=>{
        console.log('Requester : ' +auth);
      },100,recpy.requester);
    },100,ids[0])
  },100)
}

getIDs();
```

## Promises

Promises came in Es6 to deal with Asynchronous JS
- Promise object keeps track about whether a certain event has happened already or not
- Determines what happens after the event has happened. (ajax call)
- Implement the concept of a future that we're expecting

State
- Promise has Pending, Settled/Resolved State

Callback Paramenters
- Promise has Resolve, Reject parameters

Consumes promise, using ```then``` and ```catch``` method
- To consume promises, we have '''promise.then''' and  '''promise.catch'''

Notes
- Promises are executable functions 
- To call promises, we use ```promise.then((data)=>{console.log(data)})``` 
- ```then``` method is chainable. 

```javascript
const IDs = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    const idArr = [1,2,3];
    resolve(idArr);
    //reject(idArr);
  },100);
});

const getID = function (id) {
  return new Promise ((resolve, reject)=>{
    setTimeout((id)=>{
      const recpy = {
        id : id,
        item : 'idly',
        requestor : 'Shaktish'
      }
      resolve(recpy);
    },100,id);
  }); 
}

const getRequester = (requesterName) => {
  return new Promise ((resolve,reject)=>{
    setTimeout((requesterName)=>{
      resolve(requesterName);
    },100,requesterName);
  })
}



IDs.then((idArr)=>{
  console.log(idArr); 
  return getID(idArr[0]);
})
.then((recpyDetails)=>{
  console.log('ID: '+ recpyDetails.id +'\n' + 'Item: '+ recpyDetails.item);
  return getRequester(recpyDetails.requestor);
})
.then((reqName)=>{
  console.log('Requestor Name: ' +reqName);
})
.catch(error=>{console.log('We have an error '+error)});


/*
// Usin then method
IDs.then((idArr)=>{
  console.log(idArr);
    getID(idArr[0]).then((recpy)=>{
    console.log(recpy.id + ' ' + recpy.item );
    getRequester(recpy.requestor).then((requestName)=>{
      console.log(requestName);
    })
  });

})
*/




```

## Async/Await
Async/Await was introducted in ES8/ES2017 to consume promises. This makes it easier to consume promises.
- Async/Await was designed to consume promises not to produce them.To produce promises use then and catch.
- The word “async” before a function means one simple thing: a function always returns a promise. 

```javascript
const IDs = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    const idArr = [1,2,3];
    resolve(idArr);
    //reject(idArr);
  },100);
});

const getID = function (id) {
  return new Promise ((resolve, reject)=>{
    setTimeout((id)=>{
      const recpy = {
        id : id,
        item : 'idly',
        requestor : 'Shaktish'
      }
      resolve(recpy);
    },100,id);
  }); 
}

const getRequester = (requesterName) => {
  return new Promise ((resolve,reject)=>{
    setTimeout((requesterName)=>{
      resolve(requesterName);
    },100,requesterName);
  })
}

async function makeRecpyAW () {
  getIDsAW = await IDs;
  console.log(getIDsAW);
  idAW = await getID(getIDsAW);
  console.log(idAW.id[0]+ ' ' + idAW.item);
  reqAW = await getRequester(idAW.requestor);
  console.log(reqAW);
  return  'Success Return : ' + idAW.id[0]+ ' ' + idAW.item + ' ' + reqAW;
}

var returnValue = makeRecpyAW();
console.log(returnValue.then((result)=>{console.log(result)}));

```

## Fetch
 Fetch API a new standard to make server request jam-packed with promises

 How do we use the Fetch API?
 In a very simple manner all you really do is call fetch with the URL you want, by default the Fetch API uses the GET method, so a very simple call would be like this:
 ```javascript
 fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});
```


```javascript
  function getWeather (code) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${code}/`)
    .then((result)=>{return result.json()})
    .then((data)=>{
      //console.log(data);
      const today = data.consolidated_weather[0];
      console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
    })  
    .catch((error)=>{console.log(error)})
  }


  getWeather('44418');
  getWeather('2487956');

  
    async function getWeatherAW (weatherID) {
      try {
        const result = await fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/'+ weatherID +'/');
        const data = await result.json();
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
        return data;
      } catch (error) {
        console.log(error)
      }
  }

  let dataLondon;

  getWeatherAW('44418').then((data)=>{dataLondon  = data; console.log(dataLondon)});
  getWeatherAW('2487956');


  // Storing it in a variable and using the then method
  var storedResult = getWeatherAW('44418');
  storedResult.then((result)=>{console.log(result)});

```

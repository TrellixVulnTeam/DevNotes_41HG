## Deep Cloning 

This a form data that has Objects inside an Object.
```javascript
orderData : {
            name : {
                elementType : 'input',
                elementConfig : {
                    type : 'text',
                    placeholder : 'Your Name',
                    name : 'name'
                },
                value : ''
            }            
        },
```             

When you want to update state, you hafta deep clone it.
```javascript
    // e = event, 
    // el = input element's name : eg : name="email"
    inputChangedHandler = (e, el) => {
        // Clone the orderData 
        const updatedOrderData = {...this.state.orderData};
        
        // Again clone the child object that you want to update
        let updatedFormEl = {...updatedOrderData[el]};
        
        // Assign the value and update the child object.
        updatedFormEl.value = e.target.value
        
        // Now, update OrderData object with childObject.
        updatedOrderData[el]  = updatedFormEl;
        
        // And now you can set the state with updatedOrderData
        this.setState({
            orderData : updatedOrderData
        })

        console.log(e.target.value)
    }   
 ```


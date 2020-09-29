This is a form handler, handled in js. 
- Initially submit btn is disbaled
- if inputs are not empty, Hence Valid then submit will enable. 
- Cocept is we use one variable to check prev input is valid or not and update the isFormValid variable

```javascript
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<form action="#" class="user-form">
  <input 
    type="text" 
    name="firstname"
    placeholder="firstname"
  >
  <input 
    type="text" 
    name="email"
    placeholder="email"
  >
  <input id="submit" type="submit" />
</form>
  
<script>
var userForm = document.querySelector('.user-form');
var submit = document.querySelector('#submit');
var formData = {};
var isFormValid = false; 

// Disable submit btn
isSubmitEnabled();

// Condition to enable submit function 
function isSubmitEnabled () {
  isFormValid ? 
  submit.disabled = false :
  submit.disabled = true
} 


// Get the input and add valid to false 
var inputEls = document.querySelectorAll('.user-form input:not([type="submit"])');
[].slice.apply(inputEls).forEach(el=>{
  el.addEventListener('change', onChangeHandler);
  formData[el.name] = {valid : false}
})


function checkValidity(value, inputName) { 
   return value !== '' ? 
    (formData[inputName].valid =  true) : 
    (formData[inputName].valid = false )
}

// onInputChange 
function onChangeHandler (e) {
  // Update valid for current input 
  formData[e.target.name].valid = checkValidity(e.target.value, e.target.name);

  let isLastInputValid = true;    
  for( input in formData) {
    isFormValid = formData[input].valid && isLastInputValid
  }  
  isSubmitEnabled();
}



userForm.addEventListener('submit', function (e) {
  e.preventDefault();  
})  
</script>
</body>
</html>
```

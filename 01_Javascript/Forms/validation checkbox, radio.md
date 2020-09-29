## Form

## form validation
 when you enter data the web application checks it to see if it is correct. If so, it allows it to be submitted to the server and (usually) saved in a database; if not, it gives you error messages to explain what you've done wrong (provided you've done it right). Form validation can be implemented in a number of different ways.

### Preventing form from submitting when input field is empty
- get form, input fields and store them in variables
- use event.preventDefault() method, it won't allow the form to be submitted

```html
<form onsubmit="return validate()">
  <label for="fname">Name</label>
  <input type="text" name="fname" id="fname">
  <label for="password">Password</label>
  <input type="password" name="password" id="password">
  <input type="submit" value="Submit">
</form>
```
```javascript
function validate (){
  // getting form
  var form = document.querySelector('form');
  // getting all input fields except input type button using not selector attribute
  var inputList = document.querySelectorAll('form input:not([type="button"])');

  // accessing input list using array forEach method
  inputList.forEach(function (element) {
    // if value is empty
    if(element.value == '' ) {
      alert('empty');

      // prevents from submitting
      event.preventDefault();
      // for formality
      return false;
    } else {
      // fields are filled go true, NOT Neccessary
      return true;
    }
  });
}
```
### radio, checkbox validation

```html
  <form onsubmit="checkFunc()">
    <label for="gender">Gender</label>
    <input type="checkbox" name ='gender' value='0' id="genderMale"> Male
    <input type="checkbox" name ='gender' value='1' id="genderFemale"> Female

    <label for="name"> Name</label>
    <input type="text" name="name" id="firstName">
    <br>

    <label for="voting">Voting</label>
    <input type="radio" name="voting" value="0" id="votingYes"> Yes
    <input type="radio" name="voting" value="1" id="votingNo"> No
    <input type="submit" class='submit-btn' value ='Send'">
  </form>
```

```javascript
   var male, female,votingYes,votingNo;

   male = document.querySelector('#genderMale');
   female = document.querySelector('#genderFemale');

   votingYes =document.querySelector('#votingYes');
   votingNo = document.querySelector('#votingNo');
  function checkFunc(){

   if(male.checked === false && female.checked === false){
    alert('please select your gender');
    event.preventDefault();
    //return false;
   } 
   if (male.checked === true && female.checked === true) {
    alert('can\'t select both ');
    //return false;
    event.preventDefault();
   }

   if(votingYes.checked === false && votingNo.checked === false) {
    alert('Select your voting rights');
    event.preventDefault();
   }

   console.log('Good to go'); 
  }
   ```

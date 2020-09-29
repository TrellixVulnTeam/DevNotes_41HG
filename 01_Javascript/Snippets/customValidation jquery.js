
<!-- 
<script type="text/javascript">

$(document).ready(function(){

  var formCustomValidator = (function () {

    var footer = document.querySelector('.gform_page_footer');
    footer.insertAdjacentHTML('beforeend', '<input type="button" class="gform_next_button button custom-next-btn" value="Next">')

    $('#gform_page_8_1 #gform_next_button_8_1').css('cssText', 'display: none !important');




    var form1 = function () {
      // Disable the submit button
      //$('#gform_next_button_8_1').prop('disabled', true);
      // $('#gform_next_button_8_1').prop('disabled', true);

      // get the form inputs and store them in a variable
      var mainCategory = $('#input_8_137_1');
      var subCategory = $('#input_8_137_2');
      var fname = $('#input_8_52');
      var lname = $('#input_8_53');
      var gender = $('input[name="input_54"]');
      var radioInput_54 = $('input[name="input_54"]:checked');
      var radioGenderLabel = $('#label_8_54_0');
      var dob = $('#input_8_55');
      var countryCodeMobile = $('#input_8_132');
      var countryCodeAlterMobile = $('#input_8_56');
      var mobileNo = $('#input_8_92');
      var alterMobileNo = $('#input_8_133');
      var address = $('#input_8_63');
      var country = $('#input_8_139_1');
      var state = $('#input_8_139_2');
      var city = $('#input_8_139_3');
      var pincode = $('#input_8_135');
      var nationality = $('#input_8_68');
      var email = $('#input_8_91');
      var bib = $('#input_8_70');
      var identityProofType = $('#input_8_121');
      var identityProofNumber = $('#input_8_122');
      var proofImage = $('#input_8_71');
      var identityImage = $('#input_8_72');

      


      // init varibles to check if the conditions pass the requirment
      var mainCategoryPassed, subCategoryPassed,fnamePassed,lnamePassed,genderPassed,dobPassed,mobileNoPassed,alterMobileNoPassed,addressPassed,countryPassed,statePassed,cityPassed,pincodePassed, nationalityPassed, emailPassed, bibPassed, identityProofTypePassed, identityProofNumberPassed, proofImagePassed, identityImagePassed

      // declare them to false;
       mainCategoryPassed = subCategoryPassed = fnamePassed = lnamePassed = genderPassed = dobPassed = mobileNoPassed = alterMobileNoPassed = addressPassed = countryPassed = statePassed = cityPassed = pincodePassed = nationalityPassed = emailPassed =  bibPassed =  identityProofTypePassed =  identityProofNumberPassed =  proofImagePassed =  identityImagePassed = false;


      function createErrorMessagesForInputField (input) {
        if(arguments.length > 1) {
          for(var i = 0,; i < arguments.length; i++) {
            arguments[i].after('<p class="custom-error">This field is required</p>');
            $('.custom-error').css({'display':'none'});
          }
        } else {
          $(input).after('<p class="custom-error">This field is required</p>'); 
          $(input).next('.custom-error').css({'display':'none'});
        }
        
      }


      // # create a empty p tag for the input fields
      createErrorMessagesForInputField(mainCategory,subCategory,fname,lname,radioGenderLabel,dob,mobileNo,alterMobileNo,address,country,state,city,pincode, nationality, email, bib, identityProofType, identityProofNumber, proofImage, identityImage);

      //  ====== METHODS ======

      //  - genric inputValidation -
      function genricInputValidation (input, required, minLen, maxLen, msg, minMsg, maxMsg) {
        required = required || true;
        minLen = minLen || 3;
        maxLen = maxLen || 140;
        msg = msg || 'This feild is required';
        minMsg = minMsg || 'Please enter at least ' + minLen + ' characters'; 
        maxMsg = maxMsg || 'Maximum of ' + maxLen + ' characters';

        if(required === true) {
          if($(input).val() === '' ) {
            $(input).nextAll('.custom-error').css({'display':'block'});
            $(input).nextAll('.custom-error').text(msg);
              $(input).css({'border-color':'#ED0A0A'});
              return false;
          } else if ($(input).val().length < minLen) {
              $(input).css({'border-color':'#ED0A0A'});

              $(input).nextAll('.custom-error').css({'display':'block'});
              $(input).nextAll('.custom-error').text(minMsg);
                return false;       
          } else if ($(input).val().length > maxLen) {
              $(input).css({'border-color':'#ED0A0A'});

              $(input).next('.custom-error').css({'display':'block'});
              $(input).next('.custom-error').text(maxMsg);
          } else {
              $(input).css({'border-color':'#537837'});
              $(input).next('.custom-error').css({'display':'none'});
              return true;
          }
        } else if ($(input).val().length < minLen && $(input).val().length > 0 ) {
              $(input).css({'border-color':'#ED0A0A'});
              $(input).next('.custom-error').css({'display':'block'});
              $(input).next('.custom-error').text('Please enter at least ' + minLen + ' characters.');
              return false;       
          } else if ($(input).val().length > maxLen) {
              $(input).css({'border-color':'#ED0A0A'});

              $(input).next('.custom-error').css({'display':'block'})
              $(input).next('.custom-error').text('Maximum of ' + maxLen + ' characters');
              return false;
          } else {
              $(input).css({'border-color':'#537837'});
              $(input).next('.custom-error').css({'display':'none'});
              return true;
          }
      }

      // required field

      function fieldRequired(input,msg){
        msg = msg || 'This field is required'
        if(input.val() === "") {
          $(input).css({'border-color':'#ED0A0A'});
          $(input).next('.custom-error').css({'display':'block'});
          $(input).next('.custom-error').text(msg);
        } else {
          $(input).css({'border-color':'#537837'});
          $(input).next('.custom-error').css({'display':'none'});
        }
      }

      // selectField Validation 
      function selectFieldValidation (input, msg) {
        msg = msg || 'This feild is required'
        if(input.val() === undefined || input.val() === "") {
          $(input).css({'border-color':'#ED0A0A'});
          $(input).next('.custom-error').css({'display':'block'});
          $(input).next('.custom-error').text(msg);
          return false;
        } else {
          $(input).next('.custom-error').css({'display':'none'});
          $(input).css({'border-color':'#537837'});
          return true;
        }
      }

      // function radioFieldValidation(radioByName, lastradio){
      //   debugger;
      //   if(radioByName.length <= 0) {
      //     $(radio).css({'border-color':'#ED0A0A'});
      //     $(lastradio).next('.custom-error').css({'display':'block'});
      //     $(lastradio).next('.custom-error').text('Please select a field')
      //     return false;
      //   } else {
      //     $(radioByName).css({'border-color':'#537837'});
      //     $(lastradio).next('.custom-error').css({'display':'none'});
      //     return true;
      //   }
      // }

      function radioFieldValidation(radio, lastradio){
        // debugger;
        
        if(radio.length<=0) {
          $(lastradio).next('.custom-error').css({'display':'block'});
          $(lastradio).next('.custom-error').text('This field is required');
          return false;
        } else {
          $(lastradio).next('.custom-error').css({'display':'none'});
          return true;
        }
      }

      // PINCODE 
      function keydownHandler (e) {
        var el = e.target;
        oldValue = el.value;
      }

      function unmaskPincode (value) {
        var output = value.replace(new RegExp(/[^a-zA-Z0-9-]/, 'g'), ''); // Remove every non-digit character
        return output;
      }

      function pincodeMask (e) {
        var el = e.target,
            newValue = unmaskPincode(el.value);
        
        if(newValue.match(/^[a-zA-Z0-9-]{0,6}$/g) || newValue.match(/^[a-zA-Z0-9-]{0,4}$/g)) {
          if(newValue !== "") {
            el.value = newValue;
          } else {
            el.value = "";
          }
        } else {
          el.value = oldValue;
        }
      }

      function pincodeMaskIndia (e) {
        var el = e.target,
            newValue = unmaskPincode(el.value);
        
        if(newValue.match(/^[a-zA-Z0-9-]{0,6}$/g)) {
          if(newValue !== "") {
            el.value = newValue;
          } else {
            el.value = "";
          }
        } else {
          el.value = oldValue;
        }
      }

      function pincodeMaskOther (e) {
        var el = e.target,
            newValue = unmaskPincode(el.value);
        
        if(newValue.match(/^[a-zA-Z0-9-]{0,10}$/g)) {
          if(newValue !== "") {
            el.value = newValue;
          } else {
            el.value = "";
          }
        } else {
          el.value = oldValue;
        }
      }




      // Only Alphabets
      function unmaskAlphabets (value) {
        var output = value.replace(new RegExp(/[^a-zA-Z]/, 'g'), ''); // Remove every non-digit character
        return output;
      }

      function aplhabetsMask (e) {
        var el = e.target,
            newValue = unmaskAlphabets(el.value);
        if(newValue.match(/^[a-zA-Z]{0,25}$/g)) {
          if(newValue !== "") {
            el.value = newValue;
          } else {
            el.value = "";
          }
        } else {
          el.value = oldValue;
        }
      }


      // Only Alphabets and space
      function unmaskAlphabetsAndSpace (value) {
        var output = value.replace(new RegExp(/[^a-zA-Z ]/, 'g'), ''); // Remove every non-digit character
        return output;
      }

      function aplhabetsAndSpaceMask (e) {
        var el = e.target,
            newValue = unmaskAlphabetsAndSpace(el.value);
        if(newValue.match(/^[a-zA-Z ]{0,25}$/g)) {
          if(newValue !== "") {
            el.value = newValue;
          } else {
            el.value = "";
          }
        } else {
          el.value = oldValue;
        }
      }


      // mobile number validator
      function unmaskMobileNumber (value) {
        var output = value.replace(new RegExp(/[^0-9]/, 'g'), ''); // Remove every non-digit character
        return output;
      }

      function onlyNumMask (e) {
        var el = e.target,
            newValue = unmaskMobileNumber(el.value);
        if(newValue.match(/^[0-9]{0,10}$/g)) {
          if(newValue !== "") {
            el.value = newValue;
          } else {
            el.value = "";
          }
        } else {
          el.value = oldValue;
        }
      }

      // validate email       
      function validateEmail(input) {
        var emailPattern;
        emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

       if ($(input).val().match(emailPattern)) {
          $(input).next('.custom-error').css({'display':'none'});
          $(input).css({'border-color':'#537837'});
          return true;
        } else if($(input).val().length >= 1 && !$(input).val().match(emailPattern)) {
          $(input).css({'border-color':'#ED0A0A'});
          $(input).next('.custom-error').css({'display':'block'});
          $(input).next('.custom-error').text('This is not a valid email address');
          return false;
        } else if ($(input).val().length === 0) {
          $(input).css({'border-color':'#ED0A0A'});
          $(input).next('.custom-error').css({'display':'block'});
          $(input).next('.custom-error').text('This field can\'t be empty');
        }
      }

      function pincodeValidator(input) {
        
        if(input.val() === "") {
            $(input).css({'border-color':'#ED0A0A'});
            $(input).next('.custom-error').css({'display':'block'});
            $(input).next('.custom-error').text('This field is required');
        } else if (country.val() === "" && input.val().length >= 1){
            $(input).css({'border-color':'#ED0A0A'});
            $(input).next('.custom-error').css({'display':'block'});
            $(input).next('.custom-error').text('Please select a country');
        } else if (country.val() === 'India' && input.val().length <= 5) {
            $(pincode).on('input',pincodeMaskIndia);
            $(pincode).on('keydown',keydownHandler);
            $(input).css({'border-color':'#ED0A0A'});
            $(input).next('.custom-error').css({'display':'block'});
            $(input).next('.custom-error').text('Please enter a valid pincode of 6 characters');
        } else if (country.val() !== "" && country.val() !== "India" && (input.val().length <= 9   ) ) {
            console.log('ello');
            $(pincode).off('input',pincodeMaskIndia);
            $(pincode).on('input',pincodeMaskOther);
            $(pincode).on('keydown',keydownHandler);
            $(input).css({'border-color':'#ED0A0A'});
            $(input).next('.custom-error').css({'display':'block'});
            $(input).next('.custom-error').text('Please enter a valid pincode of 10 characters');
        } else {
           $(input).css({'border-color':'#537837'});
           $(input).next('.custom-error').css({'display':'none'});
        }

      }

      // upload field 
      function uploadFieldValidation (input) {
        if(input.files.length === 0) {
          console.log('pls upload a file');
          return false;
        } else {
          console.log('file is uploaded')
          return true;
        }
      }

      // main category
      $(mainCategory).on('change focusout', function () {
        mainCategoryPassed = selectFieldValidation(mainCategory);
        form1SubmitValdation();
      });

      // sub category
      $(subCategory).on('change focusout', function () {
        subCategoryPassed = selectFieldValidation(subCategory);
        form1SubmitValdation();
      });


      // First name 
      $(fname).on('input',aplhabetsAndSpaceMask);
      $(fname).on('keydown',keydownHandler);

      $(fname).on('keyup focusout', function () {
        fnamePassed = genricInputValidation(fname, true, 3, 25);
        form1SubmitValdation();
      });

      // Last name 
      $(lname).on('input',aplhabetsAndSpaceMask);
      $(lname).on('keydown',keydownHandler);

      $(lname).on('keyup focusout', function () {
        lnamePassed = genricInputValidation(lname, true, 3, 25);
        form1SubmitValdation();
      });

      // // Gender
      // $(gender).on('change focusout', function () {
      //   lastradioInput_54GenderPassed = radioFieldValidation(radioInput_54, lastradioInput_54Label);
      //   // form1SubmitValdation();
      // });

      // Gender
      $(gender).on('change focusout', function () {
        var element = $('input[name="input_54"]:checked');
        var lastradio = $('#label_8_54_0');
        genderPassed = radioFieldValidation(element, lastradio);

        form1SubmitValdation();
      });

      // Date of brith
      $(dob).on('change focus click', function(){
        dobPassed = fieldRequired(dob);
        form1SubmitValdation();
      });


      // Mobile number validator
      $(mobileNo).on('input',onlyNumMask);
      $(mobileNo).on('keydown',keydownHandler);
      $(mobileNo).on('keyup focusout', function () {
        //mobileNoPassed = genricInputValidation(mobileNo, true, 9, 9);
        form1SubmitValdation();
      });

      // Alternate Mobile number validator
      $(alterMobileNo).on('input',onlyNumMask);
      $(alterMobileNo).on('keydown',keydownHandler);
      $(alterMobileNo).on('keyup focusout', function () {
        //alterMobileNoPassed = genricInputValidation(alterMobileNo, true, 2, 4);
        form1SubmitValdation();
      })


      // Address 
      $(address).on('keyup focusout', function () {
        addressPassed = genricInputValidation(address, true, 2, 4);
        form1SubmitValdation();
      });



      // Pincode
      $(pincode).on('keyup focusout', function(){
        // pincodePassed = genricInputValidation(pincode,true,6,6,undefined,'Please enter a valid pincode');
        pincodePassed = pincodeValidator(pincode);
        form1SubmitValdation();
      });


      // Select country 
      $(country).on('change focusout', function () {
        countryPassed = selectFieldValidation(country);

        if(pincode.val() !== "") {
          pincodePassed = pincodeValidator(pincode);
        } 
        
        if(country.val() === 'India' ) {
          $(pincode).val("");  
          $(pincode).css({'border-color':'#e2e2e2'}); 
        }

        if(country.val() !== 'India' || country.val() === "") {
          $(pincode).val("");  
        }

        if(country.val() === '') {
          $(pincode).val(""); 
        }
        
        form1SubmitValdation();
      });

      // Select state
      $(state).on('change focusout', function () {
        statePassed = selectFieldValidation(state);
        form1SubmitValdation();
      });

      // Select City
      $(city).on('change focusout', function () {
        cityPassed = selectFieldValidation(city);
        form1SubmitValdation();
      });



      // Nationality
      $(nationality).on('input',aplhabetsMask);
      $(nationality).on('keydown',keydownHandler);
      $(nationality).on('keyup',function(){
        nationalityPassed = genricInputValidation(nationality,true,3,25);
        form1SubmitValdation();
      });

      // Email
      $(email).on('keyup', function(){
        emailPassed = validateEmail(email);
        form1SubmitValdation();
      })

      // Bib
      $(bib).on('keyup', function(){
        bibPassed = genricInputValidation(bib,true,3,15);
        form1SubmitValdation();
      });

      // identityProofType 
      $(identityProofType).on('change focusout', function(){
        identityProofTypePassed = selectFieldValidation(identityProofType);
        form1SubmitValdation();
      })

      // identityProofNumber
      $(identityProofNumber).on('keyup focusout', function () {
        identityProofNumberPassed = genricInputValidation(identityProofNumber, true, 1, 30);
        form1SubmitValdation();
      })

      // proofImage
      $(proofImage).on('change focusout', function (){
        proofImagePassed = fieldRequired(proofImage);  
        form1SubmitValdation();
      });
      
      // identityImage
      $(identityImage).on('change focusout', function (){
        identityImagePassed = fieldRequired(identityImage);  
        form1SubmitValdation();
      });
 

      function form1Start () {
        mainCategoryPasssed = selectFieldValidation(mainCategory);
        subCategoryPassed = selectFieldValidation(subCategory);
        fnamePassed = genricInputValidation(fname, true, 3, 25);
        lnamePassed = genricInputValidation(lname, true, 3, 25);
        var element = $('input[name="input_54"]:checked');
        var lastradio = $('#label_8_54_0');
        genderPassed = radioFieldValidation(element, lastradio);
        dobPassed = fieldRequired(dob);
        mobileNoPassed = fieldRequired(mobileNo);
        alterMobileNoPassed = fieldRequired(alterMobileNo);
        addressPassed = genricInputValidation(address, true, 2, 4);
        pincodePassed = pincodeValidator(pincode);
        countryPassed = selectFieldValidation(country);
        statePassed = selectFieldValidation(state);
        cityPassed = selectFieldValidation(city);
        nationalityPassed = genricInputValidation(nationality,true,3,25);
        emailPassed = validateEmail(email);
        bibPassed = genricInputValidation(bib,true,3,15);
        identityProofTypePassed = selectFieldValidation(identityProofType);
        identityProofNumberPassed = genricInputValidation(identityProofNumber, true, 1, 30);
        proofImagePassed = fieldRequired(proofImage);
        identityImagePassed = fieldRequired(identityImage);
        form1SubmitValdation();
      }


      $('.custom-next-btn').on('click', function(){
        form1Start();
      });



      function form1SubmitValdation(){
        // if( mainCategoryPassed === true && subCategoryPassed === true && fnamePassed === true && lnamePassed === true && genderPassed === true && dobPassed === true && mobileNoPassed === true && alterMobileNoPassed === true && addressPassed === true && countryPassed === true && statePassed === true && cityPassed === true && pincodePassed === true && nationalityPassed === true && emailPassed === true &&  bibPassed === true &&  identityProofTypePassed === true &&  identityProofNumberPassed === true &&  proofImagePassed === true &&  identityImagePassed === true  ) {

        
        if(mainCategoryPassed === true && addressPassed === true) {
          //$('#gform_next_button_8_1').prop('disabled', false);
          $('#gform_next_button_8_1').css('cssText', 'display: block !important');
          $('.custom-next-btn').css('cssText', 'display: none !important')
        } else {
          // $('#gform_next_button_8_1').prop('disabled', true);

          $('#gform_next_button_8_1').css('cssText', 'display: none !important');
          $('.custom-next-btn').css('cssText', 'display: block !important')
        }
      }


    } // end of form1 

    return {
      init : function () {
        form1();
      }
    }

  })();

  formCustomValidator.init();

});


</script>

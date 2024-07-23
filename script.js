//select form and html elements
const formData = document.querySelector("#form_data");
const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");
const emailAddressError = document.querySelector(".email-error");
const queryError = document.querySelector(".query-error");
const messageError = document.querySelector(".message-error");
const checkboxError = document.querySelector(".checkbox_error");
const successMessage = document.querySelector(".success-message");
const wrapper = document.querySelector(".wrapper");

//form submission handler
formData.addEventListener("submit", function(event) {
    event.preventDefault();

    //extracting input values
    const form = event.target;
    const firstName = form["first_name"].value;
    const lastName = form["last_name"].value;
    const emailAddress = form["email_address"].value;
    const generalEnquiry = form.querySelector("#general_enquiry").checked;
    const supportRequest = form.querySelector("#support_request").checked;
    const message = form["message"].value;
    const checkbox = form.querySelector("#checkbox_field").checked;

    //calling the validation function storing the validation result
    isValid = validateFields( firstName, lastName, emailAddress, generalEnquiry, supportRequest, message, checkbox);

    //display success message if the validation is true
    if(isValid) {
        successMessage.style.display = "inline-flex";
    }
  
});

/*
description: function to validate input fields
parameters:
1. first name
2. last name
3. email address
4. general enquiry
5. support request
6. message
7.checkbox
*/

function validateFields(firstName, lastName, emailAddress, generalEnquiry, supportRequest, message, checkbox) {

    let isValid = true;

    //checking if the input fields are empty

    if(!firstName) {
        isValid = setError(firstNameError, "This field is required",);
    }

    if(!lastName) {
        isValid =  setError(lastNameError, "This field is required");
    }

    if(!emailAddress) {
        isValid = setError(emailAddressError, "This field is required");
    }

    if(!generalEnquiry && !supportRequest) {
        isValid = setError(queryError, "Please select a query type")
    }

    if(!message) {
        isValid = setError(messageError, "This field is required");
    }

    if(!checkbox) {
        isValid = setError(checkboxError, "To submit this form, please consent to being contacted");
    }

    //checking the email address is in wrong format

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAddress)) {
        isValid = setError(emailAddressError, "Please enter a valid email address");
    }

    return isValid;

}

/*
description: functiom to display error message
parameters:
1. html element to display error message
2. error message
*/
function setError(errorElement, errorMessage) {

    errorElement.innerHTML = errorMessage;
    return false;

}
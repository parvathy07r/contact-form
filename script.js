const formData = document.querySelector("#form_data");
const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");
const emailAddressError = document.querySelector(".email-error");
const queryError = document.querySelector(".query-error");
const messageError = document.querySelector(".message-error");
const checkboxError = document.querySelector(".checkbox_error");
const successMessage = document.querySelector(".success-message");
const wrapper = document.querySelector(".wrapper");


formData.addEventListener("submit", function(event) {
    event.preventDefault();

    const form = event.target;
    const firstName = form["first_name"].value;
    const lastName = form["last_name"].value;
    const emailAddress = form["email_address"].value;
    const generalEnquiry = form.querySelector("#general_enquiry").checked;
    const supportRequest = form.querySelector("#support_request").checked;
    const message = form["message"].value;
    const checkbox = form.querySelector("#checkbox_field").checked;


    isValid = validateFields( firstName, lastName, emailAddress, generalEnquiry, supportRequest, message, checkbox);

    if(isValid) {
        successMessage.style.display = "inline-flex";
    }
  
});

function validateFields(firstName, lastName, emailAddress, generalEnquiry, supportRequest, message, checkbox) {

    let isValid = true;

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

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAddress)) {
        isValid = setError(emailAddressError, "Please enter a valid email address");
    }

    return isValid;

}

function setError(errorElement, errorMessage) {

    errorElement.innerHTML = errorMessage;
    return false;

}
const formData = document.querySelector("#form_data");
const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");
const emailAddressError = document.querySelector(".email-error");
const queryError = document.querySelector(".query-error");
const messageError = document.querySelector(".message-error");
const checkboxError = document.querySelector(".checkbox_error");
const successMessage = document.querySelector(".success-message");


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
        firstNameError.innerHTML = "This field is required";
        isValid = false;
    }

    if(!lastName) {
        lastNameError.innerHTML = "This field is required";
        isValid = false;
    }

    if(!emailAddress) {
        emailAddressError.innerHTML = "This field is required";
        isValid = false;
    }

    if(!generalEnquiry && !supportRequest) {
        queryError.innerHTML = "Please select a query type";
        isValid = false;
    }

    if(!message) {
        messageError.innerHTML = "This field is required";
        isValid = false;
    }

    if(!checkbox) {
        checkboxError.innerHTML = "To submit this form, please consent to being contacted";
        isValid = false;
    }

    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAddress)) {
        emailAddressError.innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    return isValid;

}
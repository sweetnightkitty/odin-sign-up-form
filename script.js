//Form Inputs
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("pwd-confirm");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    //If there is an erro, errorInput will equal the relevant global const
    const errorInput = checkForErrors();

    if(errorInput != "none") {
        e.preventDefault();
        let errorMessage;
        if(isEmpty(errorInput)) {
            errorMessage = setMissingErrorMessage(errorInput);
        } else {
            errorMessage = setMismatchErrorMessage(errorInput);
        }

        errorInput.setCustomValidity(errorMessage);
        errorInput.reportValidity();
    }

})

function checkForErrors() {
    if(firstName.validity.valueMissing) {
        return firstName;
    } else if(lastName.validity.valueMissing) {
        return lastName;
    } else if((email.validity.valueMissing) || (email.validity.typeMismatch)) {
        return email;
    } else if((phone.validity.valueMissing) || (phone.validity.patternMismatch)) {
        return phone;
    } else if((password.validity.valueMissing) || (password.validity.tooShort)) {
        return password;
    } else if((confirmPassword.validity.valueMissing) || (confirmPassword.value != password.value)) {
        return confirmPassword;
    } else {
        return "none";
    }
}

function isEmpty(element) {
    return element.validity.valueMissing;
};

function setMissingErrorMessage(element) {
    let message;
    if(element == firstName) {
        message = "Please type your first name";
    } else if(element == lastName) {
        message = "Please type your last name";
    } else if(element == email) {
        message = "Please write your email";
    } else if(element == phone) {
        message = "Please write your phone number";
    } else if(element == password) {
        message = "Please type a password";
    } else if(element == confirmPassword) {
        message = "Please write your password again";
    }

    return message;
}

function setMismatchErrorMessage(element) {
    let message;
    if(element == email) {
        message = "Please type a valid email address";
    } else if(element == phone) {
        message = "Please type a valid US phone number in XXX-XXX-XXXX format";
    } else if(element == password) {
        message = "Password must be at least 8 characters long";
    } else if(element == confirmPassword) {
        message = "Passwords do not match";
    }

    return message;
}

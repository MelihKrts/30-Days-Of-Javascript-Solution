function validateInput(inputId, pattern, errorMessage) {
    var input = document.getElementById(inputId).value;
    var alertDiv = document.querySelector(`#${inputId} ~ .alert-text`);
    
    if (!pattern.test(input)) {
        alertDiv.textContent = errorMessage;
        return false;
    } else {
        alertDiv.textContent = "";
        return true;
    }
}

function validateForm() {
    var firstNameValid = validateInput("firstName", /^[A-Za-z0-9]{3,16}$/, "Input should be alphanumeric and contain 3-16 characters.");

    var lastNameValid = validateInput("lastName", /^[A-Za-z0-9]{3,16}$/, "Input should be alphanumeric and contain 3-16 characters.");
    var emailValid = validateInput("email", /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, "Invalid email address.");

    var passwordValid = validateInput("password", /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/, "Password must be alphanumeric with at least one special character (!,@,#,$,%,^,&,*) and minimum 8 characters.");

    var telephoneValid = validateInput("telephone", /^\d{3}-\d{3}-\d{4}$/, "Telephone must be in the format 333-333-3334.");

    var bioValid = validateInput("bio", /^[A-Za-z0-9,\.\s'"-]{10,}$/, "Bio must contain only alphanumeric characters, comma, period, apostrophe, double-quote, space, or hyphen and be at least 10 characters.");

    return firstNameValid && lastNameValid && emailValid && passwordValid && telephoneValid && bioValid;
}
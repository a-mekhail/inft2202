/**
 * Validate the email address
 * @param {string} email    the email address to validate
 * @returns {boolean}        to indicate if the email is valid
 */
function validateEmailAddressSimple(emailString) {
    // check for @ sign
    let atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false;

    let dot = emailString.indexOf('.');
    if(dot <= atSymbol + 2) return false;

    // check that the dot is not at the end
    if (dot === emailString.length - 1) return false;

    return true;
}

/**
 * Validate the username
 * @param {string} username the username to validate
 * @returns {string} returns any errors or blank string if valid
 */
function validateUsername(username) {
    // Trim whitespaces from username
    username = username.trim()
    if (username.length == 0) {
        return "Username cannot be blank";
    }
    if (username.length < 3) {
        return "Username must be at least 3 characters"
    }
}

const registrationForm = document.getElementById("registration-form");
const error = document.getElementById("generalError");

/**
 * Validate the registration form on the submit event
 */
registrationForm.addEventListener('submit', (e) => {
    // form input attributes
    const username = document.getElementById("usernameInput");
    const email = document.getElementById("inputEmail4");

    // array to store errors
    let errors = [];

    // validate the email
    if (!validateEmailAddressSimple(email.value)) {
        errors.push("Invalid Email")
    }

    // validate the username
    let usernameError = validateUsername(username.value);
    if (usernameError != "") {
        errors.push(usernameError);
    }

    // if there is any errors, update the error in the html and prevent the form from submitting
    if (errors.length > 0) {
        error.innerText = errors.join("\n");
        error.style.color = "red";
        e.preventDefault();
    }
});

/**
 * Clear errors when the form is reset
 */
registrationForm.addEventListener('reset', (e) => {
    error.innerText = "";
    error.style.color = "";
});

//TODO:
// Make all fields required (HTML)
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in (HTML)
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D

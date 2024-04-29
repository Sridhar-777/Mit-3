function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var Emailaddress=document.getElementById('password').value;
     var password=document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    // Check if username and password are same
    if (username === password) {
        alert("Username and password cannot be the same.");
        return false;
    }

    // Check username length
    if (username.length < 4) {
        alert("Username should contain at least 4 characters.");
        return false;
    }

    // Check password length
    if (password.length < 6 || password.length > 16) {
        alert("Password should be between 6 and 16 characters.");
        return false;
    }

    // Check for uppercase, lowercase, number, and special character in password
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,16}$/;
    if (!regex.test(password)) {
        alert("Password should contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirm_password) {
        alert("Passwords do not match.");
        return false;
    }

    // If all checks pass, submit the form or perform desired action
    alert("Form submitted successfully!");
    return true;
}

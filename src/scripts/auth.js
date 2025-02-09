document.addEventListener("DOMContentLoaded", function () {

    const signUpForm = document.querySelector("form"); // Selects the form
    const signInForm = document.querySelector("form");

    const signUpBtn = document.getElementById("signUpBtn");
    const signInBtn = document.getElementById("signInBtn");

    const switchToLogin = document.getElementById("switchToLogin");
    const switchToSignup = document.getElementById("switchToSignup");

    // Handle Signup Form Submission
    if (signUpBtn) {
        signUpBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Check if all required fields are filled
            if (signUpForm.checkValidity()) {
                window.location.href = "home.html"; // Redirect if form is valid
            } else {
                signUpForm.reportValidity(); // Show browser's built-in validation message
            }
        });
    }

    // Handle Signin Form Submission
    if (signInBtn) {
        signInBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            // Check if all required fields are filled
            if (signInForm.checkValidity()) {
                window.location.href = "home.html"; // Redirect if form is valid
            } else {
                signInForm.reportValidity(); // Show browser's built-in validation message
            }
        });
    }

    // Switch Between Signup and Login Screens
    if (switchToLogin) {
        switchToLogin.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "signin.html"; // Navigate to Sign In page
        });
    }

    if (switchToSignup) {
        switchToSignup.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "signup.html"; // Navigate to Sign Up page
        });
    }
});

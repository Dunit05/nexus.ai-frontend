// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Select Form and Buttons
    // ==========================

    const signUpForm = document.querySelector("form"); // Selects the first form element
    const signInForm = document.querySelector("form"); // This is redundant; should target different forms if applicable

    const signUpBtn = document.getElementById("signUpBtn"); // Signup button
    const signInBtn = document.getElementById("signInBtn"); // Signin button

    const switchToLogin = document.getElementById("switchToLogin"); // Link to switch to Login
    const switchToSignup = document.getElementById("switchToSignup"); // Link to switch to Signup

    // ==========================
    // Handle Signup Form Submission
    // ==========================

    /**
     * Listens for a click on the Signup button.
     * Prevents form submission if fields are invalid, otherwise redirects to home.
     */
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

    // ==========================
    // Handle Signin Form Submission
    // ==========================

    /**
     * Listens for a click on the Signin button.
     * Prevents form submission if fields are invalid, otherwise redirects to home.
     */
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

    // ==========================
    // Switch Between Signup and Login Screens
    // ==========================

    /**
     * Redirects to the Signin page when clicking the "Already have an account?" link.
     */
    if (switchToLogin) {
        switchToLogin.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "signin.html"; // Navigate to Sign In page
        });
    }

    /**
     * Redirects to the Signup page when clicking the "Create an account" link.
     */
    if (switchToSignup) {
        switchToSignup.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "signup.html"; // Navigate to Sign Up page
        });
    }
});

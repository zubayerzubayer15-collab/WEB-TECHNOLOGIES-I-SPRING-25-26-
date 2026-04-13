function showError(message) {
    let errorCard = document.getElementById("errorCard");
    errorCard.innerHTML = message;
    errorCard.style.display = "inline-block";
}

function validateForm() {

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();

    let errorCard = document.getElementById("errorCard");
    errorCard.style.display = "none";


    // 1. Full Name minimum 8 characters
    if (fullname.length < 8) {
        showError("Full Name must contain at least 8 characters.");
        return false;
    }


    // 2. Email must end with @xyz.org
    if (!email.endsWith("@xyz.org")) {
        showError("Email must end with @xyz.org");
        return false;
    }


    // 3. Password rules

    if (password.length < 10) {
        showError("Password must be at least 10 characters.");
        return false;
    }

    let numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
        showError("Password must contain at least one number.");
        return false;
    }

    let specialRegex = /[!@#$%^&*(),.?\":{}|<>]/;
    if (!specialRegex.test(password)) {
        showError("Password must contain at least one special character.");
        return false;
    }


    // 4. Phone exactly 11 digits
    let phoneRegex = /^[0-9]{11}$/;

    if (!phoneRegex.test(phone)) {
        showError("Phone number must contain exactly 11 digits.");
        return false;
    }


    alert("Form submitted successfully!");
    return true;
}

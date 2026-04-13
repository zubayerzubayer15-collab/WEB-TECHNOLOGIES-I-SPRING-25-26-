function showError(message) {
    let errorCard = document.getElementById("errorCard");

    errorCard.innerHTML = message;
    errorCard.style.display = "inline-block";
}

function validateForm() {

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    let errorCard = document.getElementById("errorCard");
    errorCard.style.display = "none";

    // Full name letters + spaces
    let nameRegex = /^[A-Za-z ]+$/;

    if (!nameRegex.test(fullname)) {
        showError("Full Name must contain only letters and spaces.");
        return false;
    }

    // Email rule
    if (!email.endsWith("@aiub.edu")) {
        showError("Email must end with @aiub.edu");
        return false;
    }

    // Password rule
    if (password.length < 6) {
        showError("Password must contain at least 6 characters.");
        return false;
    }

    // Phone rule
    let phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
        showError("Phone number must contain exactly 10 digits.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

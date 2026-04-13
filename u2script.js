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


    // 1. Full Name must contain minimum 5 characters
    if (fullname.length < 5) {
        showError("Full Name must contain at least 5 characters.");
        return false;
    }


    // 2. Email must end with @abc.com
    if (!email.endsWith("@abc.com")) {
        showError("Email must end with @abc.com");
        return false;
    }


    // 3. Password rules
    // At least 8 characters and one uppercase letter

    if (password.length < 8) {
        showError("Password must be at least 8 characters.");
        return false;
    }

    let upperCaseRegex = /[A-Z]/;

    if (!upperCaseRegex.test(password)) {
        showError("Password must contain at least one uppercase letter.");
        return false;
    }


    // 4. Phone must start with +880
    if (!phone.startsWith("+880")) {
        showError("Phone number must start with +880.");
        return false;
    }


    alert("Form submitted successfully!");
    return true;
}

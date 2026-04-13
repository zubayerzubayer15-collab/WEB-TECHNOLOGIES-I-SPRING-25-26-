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


    // 1. Full Name cannot be empty
    if (fullname === "") {
        showError("Full Name cannot be empty.");
        return false;
    }


    // 2. Standard Email Format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        showError("Please enter a valid email address.");
        return false;
    }


    // 3. Password minimum 4 characters
    if (password.length < 4) {
        showError("Password must contain at least 4 characters.");
        return false;
    }


    // 4. Phone optional but must be 10 digits if entered
    if (phone !== "") {

        let phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phone)) {
            showError("Phone number must contain exactly 10 digits.");
            return false;
        }
    }

    alert("Form submitted successfully!");
    return true;
}

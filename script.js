function validateForm() {
    // Name validation
    let name = document.getElementById('name').value;
    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
        alert("Please enter a valid name (letters and spaces only).");
        return false;
    }

    // Email validation
    let email = document.getElementById('email').value;
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password validation
    let password = document.getElementById('password').value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // Confirm Password validation
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Phone number validation
    let phone = document.getElementById('phone').value;
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Date of Birth validation
    let dob = document.getElementById('dob').value;
    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    // Address validation
    let address = document.getElementById('address').value;
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}

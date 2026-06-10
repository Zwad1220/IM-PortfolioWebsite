// Find the contact form
const form = document.getElementById("contact-form");

// Check if the user submitted
form.addEventListener("submit", (event) => {

    event.preventDefault();

    let valid = true;

    // Find the different text fields
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Ensure no box is empty
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    // Name empty error
    if (name.value.trim() === "") {
        document.getElementById("name-error").textContent =
            "Please enter your name.";
        valid = false;
    }

    // Email empty error
    if (email.value.trim() === "") {
        document.getElementById("email-error").textContent =
            "Please enter your email.";
        valid = false;
    }

    // Message empty error
    if (message.value.trim() === "") {
        document.getElementById("message-error").textContent =
            "Please enter a message.";
        valid = false;
    }

    // Send through the valid message
    if (valid) {
        alert("Message sent successfully!");
        form.reset();
    }

});
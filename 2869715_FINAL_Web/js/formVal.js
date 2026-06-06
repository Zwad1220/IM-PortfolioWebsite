const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("message-error").textContent = "";

    if (name.value.trim() === "") {
        document.getElementById("name-error").textContent =
            "Please enter your name.";
        valid = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("email-error").textContent =
            "Please enter your email.";
        valid = false;
    }

    if (message.value.trim() === "") {
        document.getElementById("message-error").textContent =
            "Please enter a message.";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        form.reset();
    }

});
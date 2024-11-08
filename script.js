// Contact Form Validation and Submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Form submission event listener
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Basic validation checks
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            nameInput.focus();
            return;
        }
        
        if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (messageInput.value.trim() === "") {
            alert("Please enter a message.");
            messageInput.focus();
            return;
        }

        // Display a success message
        alert("Thank you, " + nameInput.value + "! Your message has been sent.");
        
        // Clear form fields
        form.reset();
    });
});

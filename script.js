document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    const fromName = document.getElementById('fill_name').value;
    const fromEmail = document.getElementById('fill_email').value;
    const subject = document.getElementById('fill_subject').value;
    const message = document.getElementById('textarea').value;

    // Create the template parameters for EmailJS
    const templateParams = {
        to_name: "Sachin",             // Replace with the name of the recipient
        from_name: fromName,
        subject: subject,
        message: message,
        from_email: fromEmail
    };

    // Send the email using EmailJS
    emailjs.send("service_6nfinzl", "template_7jkdcik", templateParams)
    .then(function(response) {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Your message has been sent successfully!");
    }, function(error) {
        console.error("Failed to send email:", error);
        alert("There was an error sending your message. Please try again.");
    });
});





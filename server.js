document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone');
    const contactForm = document.querySelector('.contact-form');

    if (contactForm && phoneInput) {
        contactForm.addEventListener('submit', function (event) {
            // Check if the phone field is NOT empty AND fails the 10-digit check
            // Note: The HTML pattern handles the "only numbers" part.
            if (phoneInput.value && phoneInput.value.length !== 10) {
                
                // Prevent the form from submitting
                event.preventDefault(); 
                
                // Display the custom error message
                alert('The phone number must contain exactly 10 digits.');
                
                // Give focus back to the input
                phoneInput.focus();
            }
        });
    }
});
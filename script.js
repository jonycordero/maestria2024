document.addEventListener('DOMContentLoaded', function() {
    // Set the end date for the offer (1 week from today)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    // Update the countdown every second
    const countdownElement = document.getElementById('countdown');
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date();
        const difference = endDate - now;

        if (difference <= 0) {
            clearInterval(countdownInterval);
            countdownElement.innerText = 'Offer expired';
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Handle form submission
    const form = document.getElementById('subscription-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (email !== '') {
            // Here you can send the email to your backend for processing
            console.log('Email submitted:', email);
            emailInput.value = ''; // Clear the input field
            alert('Thank you for subscribing!');
        } else {
            alert('Please enter a valid email address');
        }
    });
});

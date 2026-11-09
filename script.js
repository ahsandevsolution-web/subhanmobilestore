document.addEventListener('DOMContentLoaded', () => {

    // 1. Interactive Live Search for Panel & Parts
    const searchInput = document.getElementById('searchInput');
    const partCards = document.querySelectorAll('.part-card');

    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase().trim();

        partCards.forEach(card => {
            const title = card.getAttribute('data-title');
            if (title.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 2. Repair Booking Form Submission Handler
    const repairForm = document.getElementById('repairForm');
    const formResponse = document.getElementById('formResponse');

    repairForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const device = document.getElementById('device').value;

        // Display Success Feedback
        formResponse.innerText = `Thank you ${name}! Your request for "${device}" has been submitted successfully. We will call you at ${phone} shorty.`;

        // Reset Form Fields
        repairForm.reset();
    });
});
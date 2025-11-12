document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) {
        console.error("Error: Could not find filter buttons or project cards.");
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            // 1. Update active button style
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Filter the cards
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                // Logic: If filter is 'all' OR category matches, SHOW the card.
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    // Otherwise, HIDE the card.
                    card.classList.add('hidden');
                }
            });
        });
    });
});
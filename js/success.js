document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', '#f9bec7', '#f6d6e1', '#f6d6e1'];

    function createConfettiPiece() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);

        // Initial position: center of the screen
        confetti.style.left = '50vw';
        confetti.style.top = '20vh';

        // Random movement direction
        const xMove = (Math.random() * 200 - 100) + 'vw';
        const yMove = (Math.random() * 200 - 150) + 'vh';
        confetti.style.setProperty('--x-move', xMove);
        confetti.style.setProperty('--y-move', yMove);

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            createConfettiPiece();
        }
    }

    // Trigger the confetti animation on page load
    createConfetti();
});

// Update the total price
let price = JSON.parse(sessionStorage.getItem('totalPrice'));
document.getElementById('totalPrice').textContent = price;
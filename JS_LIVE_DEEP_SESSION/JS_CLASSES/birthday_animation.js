// Create confetti
function createConfetti() {
    const colors = ['#ff4081', '#3f51b5', '#ffeb3b', '#4caf50', '#2196f3'];
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}

// Generate confetti continuously
setInterval(createConfetti, 200);

// Add a birthday message that appears after a delay
setTimeout(() => {
    const message = document.createElement('div');
    message.classList.add('birthday-message');
    message.textContent = 'Wishing you a fantastic year ahead!';
    document.querySelector('.container').appendChild(message);
}, 2000);

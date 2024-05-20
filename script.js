document.addEventListener("DOMContentLoaded", function() {
    const rainContainer = document.getElementById('rain-container');
    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = Math.random() * 0.5 + 0.5 + 's';
        drop.style.animationDelay = Math.random() * 5 + 's';
        rainContainer.appendChild(drop);
    }
});

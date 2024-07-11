document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 3}s`;
    });
});

const canvas = document.querySelector('.confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
        
const confetti = [];
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            speed: Math.random() * 2 + 1
        });
    }
}
function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((c, i) => {
        ctx.fillStyle = c.color;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fill();
        c.y += c.speed;
        if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}
createConfetti();
drawConfetti();
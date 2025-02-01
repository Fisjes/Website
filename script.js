// script.js

const blurContainer = document.getElementById('blur-container');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const blurRadius = 30;

    blurContainer.style.filter = `blur(${blurRadius}px)`;
});

document.addEventListener('mouseleave', () => {
    blurContainer.style.filter = 'blur(0)';
});

document.addEventListener("mousemove", function (event) {
    aimX = event.clientX; // Use clientX to keep it fixed to the viewport
    aimY = event.clientY; // Use clientY to keep it fixed to the viewport
});


const cursorTag = document.querySelector("div.cursors");
const ball = cursorTag.querySelector("div");

let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
let aimX = 0;
let aimY = 0;
let speed = 0.5;

const animate = function () {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;

    ball.style.left = currentX + "px";
    ball.style.top = currentY + "px";
    requestAnimationFrame(animate);
};

document.addEventListener("mousemove", function (event) {
    aimX = event.clientX; // Fixes cursor moving with scroll
    aimY = event.clientY;
});


animate();

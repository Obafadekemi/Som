const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const numberOfPieces = 150;
    const colors = ['#f3a6f5', '#bde0fe', '#fffbeb', '#f0f4f8']; // Pastel colors
    
    function createConfettiPiece(x, y) {
        return {
            x, y,
            color: colors[Math.floor(Math.random() * colors.length)],
            diameter: Math.random() * 10 + 5,
            tilt: Math.random() * 10,
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        };
    }
    
    for (let i = 0; i < numberOfPieces; i++) {
        confettiPieces.push(createConfettiPiece(Math.random() * canvas.width, Math.random() * canvas.height));
    }
    
    function drawConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach((piece, index) => {
            ctx.beginPath();
            ctx.arc(piece.x, piece.y, piece.diameter, 0, Math.PI * 2, false);
            ctx.fillStyle = piece.color;
            ctx.fill();
    
            piece.tiltAngle += piece.tiltAngleIncrement;
            piece.y += Math.sin(piece.tiltAngle) * 2;
            piece.tilt = Math.sin(piece.tiltAngle) * 15;
    
            if (piece.y > canvas.height) {
                confettiPieces[index] = createConfettiPiece(Math.random() * canvas.width, -20);
            }
        });
    
        requestAnimationFrame(drawConfetti);
    }
    
    drawConfetti();
document.addEventListener('DOMContentLoaded', (event) => {
  const carousel = document.getElementById('image-carousel');
  const items = carousel.querySelectorAll('.item');
  let currentSlide = 0;

  function nextSlide() {
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % items.length;
    items[currentSlide].classList.add('active');
  }

  function prevSlide() {
    items[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    items[currentSlide].classList.add('active');
  }

  const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


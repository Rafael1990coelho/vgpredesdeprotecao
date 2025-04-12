let index = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(i) {
  slides.forEach((img, idx) => {
    img.classList.remove('active');
    if (idx === i) {
      img.classList.add('active');
    }
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 3000); // Muda a cada 3 segundos

document.addEventListener('DOMContentLoaded', () => {
  showSlide(index);
});

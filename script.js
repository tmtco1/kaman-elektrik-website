let currentSlide = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const heroSection = document.querySelector('.hero');
const isMobile = window.innerWidth <= 768;

function showSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// Otomatik slider
let autoSlider = setInterval(() => nextSlide(), 5000);

// Sadece mobilde touch events
if (isMobile) {
  let touchStartX = 0;
  let touchEndX = 0;

  heroSection.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(autoSlider);
  });

  heroSection.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    autoSlider = setInterval(() => nextSlide(), 5000);
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }
}

// Geri kalan kodların aynı kalacak...
function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("show");
}

let mybutton = document.getElementById("gototop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
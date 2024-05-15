const carousel = document.getElementById('carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  let index = 0;

  function nextSlide() {
    index = (index + 1) % items.length;
    updateCarousel();
  }

  function updateCarousel() {
    const screenWidth = window.innerWidth;
    let slideCount = 6; // Default for desktops

    if (screenWidth <= 1024) {
      slideCount = 4; // For tablets
    }

    if (screenWidth <= 768) {
      slideCount = 1; // For mobiles
    }

    const slideWidth = 100 / slideCount;
    items.forEach((item, i) => {
      const offset = ((index - i) % items.length) * slideWidth;
      item.style.transform = `translateX(${offset}%)`;
    });
  }

  let intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

  carousel.addEventListener('mouseenter', () => {
    clearInterval(intervalId); // Pause on hover
  });

  carousel.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 3000); // Resume on mouse leave
  });

  window.addEventListener('resize', updateCarousel); // Update carousel on window resize
  updateCarousel(); // Initial update
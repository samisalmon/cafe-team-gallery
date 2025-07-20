// Preloader functionality
let pre = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  pre.classList.add("hidden");
});

// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const carouselTrack = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const indicators = document.querySelectorAll('.indicator-btn');
  const currentImageSpan = document.getElementById('currentImage');
  const totalImagesSpan = document.getElementById('totalImages');
  
  // Check if all elements exist
  if (!carouselTrack || !prevBtn || !nextBtn || !currentImageSpan || !totalImagesSpan) {
    return;
  }
  
  let currentIndex = 0;
  const totalImages = 6;
  
  // Initialize
  totalImagesSpan.textContent = totalImages;
  updateCarousel();
  
  // Next button click
  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  });
  
  // Previous button click
  prevBtn.addEventListener('click', function(e) {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  });
  
  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function(e) {
      e.preventDefault();
      currentIndex = index;
      updateCarousel();
    });
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      updateCarousel();
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }
  });
  

  
  function updateCarousel() {
    // Preload next image for smoother transitions
    const nextIndex = (currentIndex + 1) % totalImages;
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    
    // Preload images
    const images = document.querySelectorAll('.carousel-slide img');
    if (images[nextIndex]) {
      const nextImg = new Image();
      nextImg.src = images[nextIndex].src;
    }
    if (images[prevIndex]) {
      const prevImg = new Image();
      prevImg.src = images[prevIndex].src;
    }
    
    // Update track position with hardware acceleration
    const translateX = -currentIndex * 100;
    carouselTrack.style.transform = `translate3d(${translateX}%, 0, 0)`;
    
    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
    
    // Update counter
    currentImageSpan.textContent = currentIndex + 1;
  }
});

// Image Carousel

let currentImage = 0;
const images = document.querySelectorAll('.slider-image');
const captions = document.querySelectorAll('.caption');
const indicators = document.querySelectorAll('.indicator');

function showImage(index) {
  images.forEach((image) => (image.style.display = 'none'));
  captions.forEach((caption) => (caption.style.display = 'none'));
  indicators.forEach((indicator) => indicator.classList.remove('active'));

  images[index].style.display = 'block';
  captions[index].style.display = 'block';
  indicators[index].classList.add('active');
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

function setIndicatorClickHandler(indicator, index) {
  indicator.addEventListener('click', () => {
    currentImage = index;
    showImage(currentImage);
  });
}

indicators.forEach(setIndicatorClickHandler);

// Automatically switch images every 5 seconds (5000 milliseconds)
setInterval(nextImage, 5000);

// Show the first image initially
showImage(currentImage);


// Main Navigation

const openMenu = document.getElementById('open-menu');
openMenu.addEventListener("click", openNav);

function openNav() {
  document.getElementById("nav-container").style.width = "100%";
}

const closeMenu = document.querySelector('.close-btn');
closeMenu("click", closeNav)

function closeNav() {
  document.getElementById("nav-container").style.width = "0%";
}
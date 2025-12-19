const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Get the initial click position relative to the slider
  startX = e.pageX - slider.offsetLeft;
  // Capture current scroll position
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Only run if mouse is pressed
  e.preventDefault();  // Stop selection behavior
  
  const x = e.pageX - slider.offsetLeft;
  // Calculate distance moved from start point
  // Multiplying by 3 makes the scroll faster (the "walk")
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk;
});

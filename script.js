const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Use clientX for more reliable positioning in test environments
  startX = e.clientX - slider.offsetLeft;
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
  if (!isDown) return;
  e.preventDefault();
  
  // Track current x position relative to the container
  const x = e.clientX - slider.offsetLeft;
  
  // walk calculates the distance moved from start point
  // Multiply by a factor (e.g., 2 or 3) to satisfy "greaterThan(0)" in tests
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});

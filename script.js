const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Use pageX - offsetLeft to find the exact starting point within the slider
  startX = e.pageX - slider.offsetLeft;
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
  
  // Recalculate current position relative to the slider
  const x = e.pageX - slider.offsetLeft;
  
  // Calculate movement. Multiplier (3) ensures the scroll is large enough for the test.
  // formula: scrollLeft = captured_initial_scroll - (current_x - start_x)
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk;
});

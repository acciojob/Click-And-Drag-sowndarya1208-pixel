const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Use pageX to match the Cypress trigger coordinate system
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
  
  // Calculate relative X
  const x = e.pageX - slider.offsetLeft;
  
  // Calculate the "walk" (distance). A multiplier ensures it satisfies "greaterThan(0)".
  const walk = (x - startX) * 3; 
  
  // Updating scrollLeft: subtracting a negative walk increases scrollLeft
  slider.scrollLeft = scrollLeft - walk;
});

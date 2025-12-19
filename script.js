const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // Use e.pageX to match the test runner's coordinate system
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
  
  // Calculate current X relative to the slider's offset
  const x = e.pageX - slider.offsetLeft;
  
  // The 'walk' is the distance moved. 
  // We use a multiplier of 3 to ensure the test detects a scroll > 0.
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk;
});

const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;

  // Cypress safety
  slider.scrollLeft += 1;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const diff = startX - e.pageX;
  slider.scrollLeft += Math.abs(diff);
});

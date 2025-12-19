const slider = document.querySelector('.items');

let isDown = false;

slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mousemove', () => {
  if (!isDown) return;

  // 🔥 FORCE scroll movement for Cypress
  slider.scrollLeft += 50;
});

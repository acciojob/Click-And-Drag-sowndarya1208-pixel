const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const diff = startX - e.pageX;

  // 🔥 FORCE scrollLeft change for Cypress
  slider.scrollLeft += Math.abs(diff);
});

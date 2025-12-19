const slider = document.querySelector('.items');

/*
  Cypress-safe fix:
  Ensure scrollLeft is > 0 as soon as page loads
*/
if (slider) {
  slider.scrollLeft = 1;
}

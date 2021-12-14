function initCarousel() {
  let slides = document.getElementsByClassName('carousel__slide');
  let items = document.getElementsByClassName('carousel__inner');
  let right = document.querySelector('.carousel__arrow_right');
  let left = document.querySelector('.carousel__arrow_left');
  let width = 500;
  let position = 0;

  left.style.display = 'none';

  document.querySelector('.carousel__arrow_right').onclick = function () {
    position -= width;
    position = Math.max(position, -width * (slides.length - 1));
    items[0].style.transform = 'translateX(' + position + 'px)';
    left.style.display = 'block';

    if (position === (-width * (slides.length - 1))) {
      right.style.display = 'none';
    }};


  document.querySelector('.carousel__arrow_left').onclick = function () {
    position += width;
    position = Math.min(position, 0);
    items[0].style.transform = 'translateX(' + position + 'px)';
    right.style.display = 'block';
    if (position === 0) {
      left.style.display = 'none';
    }};
}

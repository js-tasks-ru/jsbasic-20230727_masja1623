function initCarousel() {
  let rightClickArrow = document.querySelector('.carousel__arrow.carousel__arrow_right');
  let leftClickArrow = document.querySelector('.carousel__arrow.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselSlideWidth = document.querySelector('.carousel__slide');
  let currentPosition = 0;
  let numberOfSlides = 4;

  function checkNavigationButtonsVisibility() {
    if (currentPosition === 0) {
      leftClickArrow.style.display = 'none';
    } else {
      leftClickArrow.style.display = '';
    }

    if (currentPosition === -carouselSlideWidth.offsetWidth * (numberOfSlides - 1)) {
      rightClickArrow.style.display = 'none';
    } else {
      rightClickArrow.style.display = '';
    }
  }
  checkNavigationButtonsVisibility();

  rightClickArrow.addEventListener('click', function () {
    currentPosition -= carouselSlideWidth.offsetWidth;
    checkNavigationButtonsVisibility();

    carouselInner.style.transform = `translateX(${currentPosition}px)`;
  });

  leftClickArrow.addEventListener('click', function () {
    currentPosition += carouselSlideWidth.offsetWidth;
    checkNavigationButtonsVisibility();

    carouselInner.style.transform = `translateX(${currentPosition}px)`;
  });
}

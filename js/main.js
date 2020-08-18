let productSlider = $('.slick-slider-product');
productSlider.slick({
	slide: '.product-card',
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '[data-best-prev]',
	nextArrow: '[data-best-next]',
	dots: true,
	centerMode: true,
  centerPadding: '0',
  appendDots: '.navigation-wrapper__dots',
  responsive: [
	{
	  breakpoint: 640,
	  settings: {
		 slidesToShow: 1,
		 slidesToScroll: 1,
		 centerMode: true,
	  }
	}
]
});

let menuBtn = document.querySelector('.menu-toggle');
let menuWrap = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
	menuWrap.classList.toggle('active');
});
		
let dropdownBtn = document.querySelector('.dropdown-toggle');
let dropdownWrap = document.querySelector('.header__menu-dropdown');

dropdownBtn.addEventListener('click', () => {
	dropdownWrap.classList.toggle('active');
	dropdownBtn.classList.toggle('change-margin');
});

let searchBtn = document.querySelector('.search-header');
let searchForm = document.querySelector('.search-form');
let searchFormClose = document.querySelector('.search-form__close');

searchBtn.addEventListener('click', () => {
	searchForm.classList.toggle('active-search-form');
});
searchFormClose.addEventListener('click', () => {
	searchForm.classList.toggle('active-search-form');
});
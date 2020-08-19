AOS.init({
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


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


let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	if ($(window).scrollTop() > header.clientHeight/2){
		header.classList.add('header-decrease-padding');
	}
	else {
		header.classList.remove('header-decrease-padding');
	}
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


let body = document.querySelector('#body');

menuBtn.addEventListener('click', () => {
	body.classList.toggle('overflow');

});



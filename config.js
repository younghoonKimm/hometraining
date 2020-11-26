export const navList = [
  'Galaxy 5G',
  'Mobile',
  'TV & AV',
  ' Home Appliances',
  'IT',
  'Smart Home',
  'Service',
  'Offers',
];

export const depth2SmatHomeList = [
  'Featured',
  'Home Entertainment',
  'Home Fitness',
  'Home Management',
  'Cleaning & Hygiene',
  'SmartThings',
];

export const dummycost = [
  {
    id: 1,
    month: 4,
    cost: 39,
  },
  {
    id: 2,
    month: 8,
    cost: 78,
  },
  {
    id: 3,
    month: 12,
    cost: 117,
  },
];

export const dummyProduct = [
  {
    id: 'GRLTPK001',
    name: 'Daily Juice 7Days',
    cost: 32.55,
    check: false,
  },
  {
    id: 'K143LST0B-MS',
    name: 'The Sero Space White + Galaxy Buds Live',
    cost: 1782.16,
    check: false,
  },
];

export const subscribeSliderOptions = [
  {
    option: {
      direction: 'horizontal',
      preventClicks: false,
      preventClicksPropagation: false,
      slideToClickedSlide: false,
      touchEventsTarget: 'wrapper',
      slidesPerView: 'auto',
      spaceBetween: 40,
      breakpoints: {
        800: {
          centeredSlides: true,
        },
      },
    },
  },
  {
    option: {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return `<div class=${className}></div>`;
        },
      },
    },
  },
  {
    option: {
      direction: 'horizontal',
    },
  },
];

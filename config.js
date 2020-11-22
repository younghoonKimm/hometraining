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

export const dummyProduct = [
  {
    id: 'GRLTPK001',
    name: '이너주스',
    cost: 32550,
    check: false,
  },
  {
    id: 'KQ_MS',
    name: '버즈',
    cost: 1999050,
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

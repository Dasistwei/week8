// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
// import styles bundle
// import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// init Swiper:

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  // autoHeight: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      // spaceBetween: 30,
    }
  }
});


const swiper3 = new Swiper(".mySwiper3", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  direction: 'horizontal',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-3',
    prevEl: '.swiper-button-prev-3',
  },
  autoHeight: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      // grid: {
      //   rows: 1,
      // },
      // spaceBetween: 30,
    }
  }
});

const swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-4",
    clickable: true,
  },
  // autoHeight: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      grid: {
        // rows: 2,
      },
      // spaceBetween: 30,
    }
  }
});
const swiper5 = new Swiper(".mySwiper5", {
  // slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination-4",
    clickable: true,
  },
  // autoHeight: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      // slidesPerView: 3,
      grid: {
        // rows: 2,
      },
      // spaceBetween: 30,
    }
  }
});
const swiper6 = new Swiper(".mySwiper6", {
  modules: [Navigation, Pagination],
  slidesPerView: 6,
  spaceBetween: 16,
  loop: true,
  direction: 'horizontal',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-6',
    prevEl: '.swiper-button-prev-6',
  },
  pagination: {
    el: ".swiper-pagination-6",
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      spaceBetween: 24,
      slidesPerView: 6,
      // grid: {
      //   rows: 1,
      // },
    }
  }
});
const swiper7 = new Swiper(".mySwiper7", {
  modules: [Navigation, Pagination],
  slidesPerView: 6,
  spaceBetween: 16,
  loop: true,
  direction: 'horizontal',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-6',
    prevEl: '.swiper-button-prev-6',
  },
  pagination: {
    el: ".swiper-pagination-6",
    clickable: true,
  },
  autoHeight: true,
  breakpoints: {
    // when window width is >= 992px
    992: {
      spaceBetween: 24,
      slidesPerView: 6,
      // grid: {
      //   rows: 1,
      // },
    }
  }
});
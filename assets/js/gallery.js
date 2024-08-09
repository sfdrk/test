import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5.4.2/dist/photoswipe-lightbox.esm.js';
// import PhotoSwipe from 'https://unpkg.com/photoswipe@5.4.2/dist/photoswipe.esm.js';



var swiper = new Swiper(".gallerySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 2,

  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    200: {
      slidesPerView: 1.3,
      spaceBetween: 20
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 2.5,
      // spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 3.2,
      spaceBetween: 30
    },
  }
//   },
//   keyboard: {
//     enabled: true,
//   }
});




const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#gallery',
  
    // Elements within gallery (slides)
    children: 'a',
  
    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('https://unpkg.com/photoswipe@5.4.2/dist/photoswipe.esm.js'),
    wheelToZoom: true, 
  showHideOpacity: true,

  });
  lightbox.init();



// const photo_swipe_options = {
//   gallery: '#gallery',
//   pswpModule: PhotoSwipe,
//   // set background opacity
//   bgOpacity: 1,
//   showHideOpacity: true,
//   children: 'a',
// //   loop: true,
//   showHideAnimationType: 'zoom', /* options: fade, zoom, none */

//   /* Click on image moves to the next slide */
//   imageClickAction: 'next',
//   tapAction: 'next',

//   /* ## Hiding a specific UI element ## */
//   zoom: false,
//   close: true,
//   counter: true,
//   arrowKeys: true,
//   /* ## Options ## */
//   bgOpacity: "1",/* deafult: 0.8 */
//   wheelToZoom: true, /* deafult: undefined */
// };

// const lightbox = new PhotoSwipeLightbox(photo_swipe_options);

// lightbox.init();

// lightbox.on('change', () => {
//   const { pswp } = lightbox;
//   swiper.slideTo(pswp.currIndex, 0, false);
//   console.log('Slide index', pswp.currIndex);
//   //console.log('Slide object', pswp.currSlide);
//   //console.log('Slide object data', pswp.currSlide.data);
// });

// /* ### PhotoSwipe events ### */

// lightbox.on('afterInit', () => {
//   const { pswp } = lightbox;
//   if(swiper.params.autoplay.enabled){
//     swiper.autoplay.stop();
//   };
// });

// lightbox.on('closingAnimationStart', () => {
//   //console.log('closingAnimationStart');
//   const { pswp } = lightbox;
//   swiper.slideTo(pswp.currIndex, 0, false);
//   /* if autoplay enabled == true -> autoplay.start() when close lightbox */
//   if(swiper.params.autoplay.enabled){
//     swiper.autoplay.start();
//   }
// });
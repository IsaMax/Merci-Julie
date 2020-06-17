window.addEventListener('load', function() {

  
  document.querySelector('.btn-hamburger').addEventListener('click', function(e) {
    console.log(this)
    e.preventDefault();
    this.classList.toggle('active');
    document.querySelector('.menu-items').classList.toggle('active');
    
  })
  
  /* Slider intro homepage */
  let swiperAccueil = new Swiper('.swiper-container-home', {
    speed: 1000,
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    fadeEffect: {
    crossFade: true
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });


    /* Slider témoignages */
    let swiperTemoignage = new Swiper('.swiper-container-blockquote', {
      speed: 1000,
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    

  /* Slider des logos partenaires */
    let swiperLogos = new Swiper('.swiper-container-multipleviews', {
        slidesPerView: 1,
        spaceBetween: 200,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });


      /* Slider gabarit */
    let swiperGabarit = new Swiper('.swiper-actu', {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      autoplay: {
          delay: 5000,
        },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      },
    
    });

    let swiperTb = new Swiper('.swiper-bloc-tb', {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });


}); 

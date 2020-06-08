window.addEventListener('load', function() {

    let swiper = new Swiper('.swiper-container-multipleview', {
        slidesPerView: 6    ,
        spaceBetween: 15,
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

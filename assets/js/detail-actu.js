window.addEventListener('load', function() {

    
    let swiperActu = new Swiper('.swiper-actu', {
            slidesPerView: 3,
            spaceBetween: 36,
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

});
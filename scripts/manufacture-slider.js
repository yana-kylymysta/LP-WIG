//MANUFACTURE SLIDER initialization
    const manufacturerSwiper = new Swiper(".manufacturers__slider", {
        spaceBetween: 16,
        slidesPerView: 1,
        grabCursor:true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 2,
                pagination: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            1200: {
                slidesPerView: 3,
                pagination: false
            }
            }
    });
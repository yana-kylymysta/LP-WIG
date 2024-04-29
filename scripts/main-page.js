
document.addEventListener('DOMContentLoaded', function () {
    const mainSwiper = new Swiper(".main-banner__slider", {
        loop:true,
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
            enabled: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
            const slideNumb = 
                index > 10 
                    ? `<div class="${className}">${index + 1}</div>`
                    : `<div class="${className}">0${index + 1}</div>`

                    return slideNumb;
                },
            },
        });
            // swiper.on('slideChange', function () {
            //     gsap.to(swiper.slides[swiper.previousIndex], { opacity: 0.8, scale: 1.3 });
            //     gsap.to(swiper.slides[swiper.activeIndex], { scale: 1, opacity: 1 });
            //      gsap.to(swiper.slides[swiper.previousIndex], { opacity: 0.8, scale: 1.3 });
                
            //     swiper.slides[swiper.previousIndex].animation.pause(0);
            //     swiper.slides[swiper.activeIndex].animation.restart();
            //     swiper.slides.forEach((slide, index) => {
            //         if (index === swiper.activeIndex) {
            //             slide.classList.add('active-slide');
            //         } else {
            //             slide.classList.remove('active-slide');
            //         }
            //     });
            // });
     
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

    const projectSwiper = new Swiper(".projects__slider", {
            spaceBetween: 16,
            slidesPerView: 1,
            on: {
                snapGridLengthChange: function () {
                    if (window.innerWidth >= 1024) {
                        if (this.snapGrid.length != this.slidesGrid.length) {
                            this.snapGrid = this.slidesGrid.slice(0);
                        }
                    }
                },
            },
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
                    autoHeight: true,
                    spaceBetween: 32,
                    pagination: false,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                },
                1200: {
                    slidesPerView: 3,
                    autoHeight: true,
                    spaceBetween: 32,
                    pagination: false,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                },
            }
        });

    if (windowWidth < 1024) {
        createLogosAnimate('.companies__logo');
    }
});

//ANIMATION
gsap.registerPlugin(ScrollTrigger);

//ABOUT US BLOCK
gsap.to('.about__img', {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });

gsap.to('.about__desc', {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });

const numberDisplays = document.querySelectorAll('.amount__numb');
numberDisplays.forEach(num => {
    const targetValue = +(num.dataset.num);
    gsap.to(num, {
        duration: 3,
        ease: "power4.out",
        scrollTrigger: {
            trigger: '.amounts__container',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        },
        innerHTML: targetValue,
        onUpdate: function () {
            num.innerHTML = Math.round(num.innerHTML);
        },
        onComplete: function () {
            num.innerHTML += "+"; 
        }
    });
});
//SERVICES BLOCK
gsap.from('.service', {
    opacity: 0,
    y: 150,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.service',
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'restart none  none  none '
    }
});

//COMPANIES BLOCK
if(windowWidth < 1024) {
    gsap.from('.companies__logo', {
        opacity: 0,
        x: 200,
        duration: 1,
        scrollTrigger: {
            trigger: '.companies__logo',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });
} else {
    gsap.from('.companies__desc-left', {
        opacity: 0,
        x: -200,
        duration: 1,
        scrollTrigger: {
            trigger: '.companies',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });
    gsap.from('.companies__logo', {
        opacity: 0,
        x: 200,
        duration: 1,
        scrollTrigger: {
            trigger: '.companies',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });
}

//SLIDER BLOCK
if(windowWidth < 1200) {
    gsap.from('.animate-slider', {
        opacity: 0,
        y: 150,
        duration: 1,
        scrollTrigger: {
            trigger: '.animate-slide',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });
} else {
    gsap.fromTo('.animate-slide', 
      { opacity: 0, y: 200 },
      { opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.animate-wrapper',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });
}

//FORM
gsap.from('.cta__block', {
    opacity: 0,
    y: 150,
    duration: 0.8,
    scrollTrigger: {
        trigger: '.cta__block',
        start: '30% bottom',
        end: 'bottom top',
        toggleActions: 'restart none  none  none '
    }
});

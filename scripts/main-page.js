
document.addEventListener('DOMContentLoaded', function () {
 //MAIN SLIDER initialization
 const mainSwiper = new Swiper(".main-banner__slider", {
            loop:true,
            autoplay: {
                delay: 6000,
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
            on: {
                slideChangeTransitionStart: function () {
                    const activeSlide = this.slides[this.activeIndex];
                     gsap.fromTo(activeSlide.querySelector('.main-banner__slide-bg'), 3, {
                        scale: 1.04,
                    }, {
                        scale: 1,
                        ease: "power3.out",
                    });
                    gsap.fromTo(activeSlide.querySelector('.main-banner__desc'), 1.4, {
                        opacity: 0,
                        scale: 1
                    }, {
                        opacity: 1,
                        scale: 1,
                        ease: Expo.easeInOut
                    });
                }
            }
        });
    //GSAP ANIMATION HERO SECTION
    TweenMax.fromTo('.tweenmax-banner', 0.8, {
            opacity: 0,
            scale: 0.94
        },
        {
            opacity: 1,
            delay: 0.3,
            scale: 1,
            easy: Expo.easyInOut
        })
    TweenMax.fromTo('.tweenmax-hero', 0.4, {
            opacity: 0,
            y: 10,
        },
        {
            delay: 1,
            opacity: 1,
            y: 0,
            easy: Expo.easyInOut
        })
 
if(windowWidth < 1024) {
    TweenMax.from('.menu__icon', 0.4, {
            opacity: 0,
            y: 10,
        },
        {
            opacity: 1,
            y: 0,
            easy: Expo.easyInOut
        })
} else {
    TweenMax.staggerFrom('.menu__item', 0.4, {
        opacity: 0,
        delay: 1,
        y: 10,
        easy: Power3.easyInOut
    }, 0.1)
}

   TweenMax.staggerFrom('.swiper-pagination-bullet', 0.4, {
        autoAlpha: 0,
        delay: 1,
        y: 10,
        easy: Power3.easyInOut
    }, 0.1)

    TweenMax.from('.main-banner__left-container', 1, {
            opacity: 0,
            y: '100%',
            delay: 1.2,
            easy: Expo.easyInOut
     })

// GSAP ANIMATION ABOUT US SECTION
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.about__img-left', {
            y: '-15%',
            scale: 1.05,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about__images',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart none  none  none '
            }
        });
     gsap.from('.about__img-right', {
            y: '15%',
            scale: 1.05,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.about__images',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart none  none  none '
            }
        });

    if(windowWidth < 881) {
    gsap.from('.about__desc', {
                y: '15%',
                opacity: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'restart none  none  none '
                }
            });
    } else {
    gsap.from('.about__desc', {
            x: '15%',
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart none  none  none '
            }
        });
    }
    const numberDisplays = document.querySelectorAll('.amount__numb');
    numberDisplays.forEach(num => {
        const targetValue = +(num.dataset.num);
        gsap.to(num, {
            duration: 1.4,
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

//GSAP ANIMATION SERVICES SECTION
    gsap.from('.service', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.service',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'restart none  none  none '
        }
    });

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


//GSAP ANIMATION COMPANIES BLOCK
    if(windowWidth < 1024) {
        createLogosAnimate('.companies__logo');
        gsap.from('.companies', {
            opacity: 0,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: '.companies',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart none  none  none '
            }
        });
    } else {
        gsap.from('.companies__desc-left', {
            opacity: 0,
            x: -20,
            duration: 0.5,
            scrollTrigger: {
                trigger: '.companies',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart none  none  none '
            }
        });
        gsap.from('.companies__logo', {
            opacity: 0,
            x: 20,
            duration: 1,
            scrollTrigger: {
                trigger: '.companies',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'restart none  none  none '
            }
        });
    }
   //PROJECT SLIDER initialization
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
});


// GSAP SECTION SLIDE
gsap.utils.toArray('.section-slide').forEach(section => {
    gsap.from(section, {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
            trigger: section,
            start: '20% bottom',
            end: 'bottom top',
            toggleActions: 'restart none none none'
        }
    });
}); 

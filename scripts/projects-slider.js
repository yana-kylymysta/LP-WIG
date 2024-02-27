const projects = document.querySelectorAll('.project');

const projectArray = [
    {
        id: "sofiamall",
        code: `<div class="pop-up__project active swiper" data-project="sofiamall">
            <div class="swiper-wrapper">
                <div class="pop-up__slide swiper-slide" >
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill">
                            <img src="./assets/projects/sofia-mall/01.JPG" style="object-position: 60%">
                        </div>
                    </div>
                </div>
                <div class="pop-up__slide  swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/sofia-mall/02.jpg">
                        </div>
                    </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/sofia-mall/03.JPG">
                        </div>
                    </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill">
                            <img src="./assets/projects/sofia-mall/04.JPG">
                        </div>
                    </div>
                </div>    
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                                <img src="./assets/projects/sofia-mall/05.JPG">
                        </div>
                    </div>
                </div>   
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill">
                            <img src="./assets/projects/sofia-mall/06.JPG">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/sofia-mall/07.JPG">
                        </div>
                    </div>
                </div>  
                <div class="pop-up__slide swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/sofia-mall/08.JPG">
                        </div>
                   </div>
                </div> 
                 <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/sofia-mall/09.JPG">
                        </div>
                   </div>
                </div>   
                 <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill ">
                            <img src="./assets/projects/sofia-mall/10.JPG">
                        </div>
                    </div>
                </div>           
            </div>
            <div class="swiper-button swiper-button-prev">
                    <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.6015 0L30 1.64L2.43243 41.8405L29.5946 79.54L28.6192 82L0 41.8405L28.6015 0Z" fill="#929A9F" />
                        </svg>
                    </div>
                                    <div class="swiper-button swiper-button-next">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3985 0L0 1.64L27.5676 41.8405L0.405405 79.54L1.38075 82L30 41.8405L1.3985 0Z" fill="#929A9F" />
                            </svg>
                        </div>
            <div class="pop-up__desc">
                <h4>ТРЦ Sofia Mall</h4>
                <p>Поставка та монтаж - 2 ліфти, 2 ескалатори</p>
            </div>
         </div> `
    },
    {
        id: "fora",
        code: `<div class="pop-up__project active swiper" data-project="fora">
         <div class="swiper-wrapper">
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/01.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/02.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/03.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/04.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/05.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/06.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/07.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/fora/09.jpg">
                        </div>
                    </div>
                </div> 
                <div class="pop-up__slide  swiper-slide"> 
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill">
                            <img src="./assets/projects/fora/10.jpg">
                        </div>
                    </div>
                </div>   
            </div>
            <div class="swiper-button swiper-button-prev">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.6015 0L30 1.64L2.43243 41.8405L29.5946 79.54L28.6192 82L0 41.8405L28.6015 0Z" fill="#929A9F" />
                            </svg>
                        </div>
                                    <div class="swiper-button swiper-button-next">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3985 0L0 1.64L27.5676 41.8405L0.405405 79.54L1.38075 82L30 41.8405L1.3985 0Z" fill="#929A9F" />
                            </svg>
                        </div>
            <div class="pop-up__desc">
                <h4>ТРЦ Фора</h4>
                <p>Ремонт 2 ескалаторів</p>
            </div>
        </div>`
    },
    {
        id: "veles",
        code: `<div class="pop-up__project active swiper" data-project="veles">
         <div class="swiper-wrapper">
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill">
                            <img src="./assets/projects/veles/01.jpg">
                        </div>
                   </div>
                </div>   
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/02.jpg">
                        </div>
                   </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/03.jpg">
                        </div>
                   </div>
                </div> 
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/04.jpg">
                        </div>
                   </div>
                </div> 
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/05.jpg">
                        </div>
                   </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/07.jpg">
                        </div>
                   </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/08.jpg">
                        </div>
                   </div>
                </div>       
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/10.jpg">
                        </div>
                   </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/11.jpg">
                        </div>
                   </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/13.jpg">
                        </div>
                   </div>
                </div>
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/veles/15.jpg">
                        </div>
                   </div>
                </div>     
            </div>
            <div class="swiper-button swiper-button-prev">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.6015 0L30 1.64L2.43243 41.8405L29.5946 79.54L28.6192 82L0 41.8405L28.6015 0Z" fill="#929A9F" />
                            </svg>
                        </div>
                                    <div class="swiper-button swiper-button-next">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3985 0L0 1.64L27.5676 41.8405L0.405405 79.54L1.38075 82L30 41.8405L1.3985 0Z" fill="#929A9F" />
                            </svg>
                        </div>
             <div class="pop-up__desc">
                <h4>ТРЦ Велес</h4>
                <p>Поставка та монтаж 8 ескалаторів</p>
            </div>
            </div>`
    },
     {
        id: "knyagynyn",
        code: `<div class="pop-up__project active swiper" data-project="knyagynyn">
         <div class="swiper-wrapper">
                <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/knyagynyn/01.jpg">
                        </div>
                   </div>
                </div>
                 <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/knyagynyn/02.jpg">
                        </div>
                   </div>
                </div> 
                 <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/knyagynyn/03.jpg">
                        </div>
                   </div>
                </div> 
                 <div class="pop-up__slide swiper-slide">
                    <div class="pop-up__slide-container">
                        <div class="swiper-zoom-container img-fill vertical-img">
                            <img src="./assets/projects/knyagynyn/04.jpg">
                        </div>
                   </div>
                </div>     
            </div>
            <div class="swiper-button swiper-button-prev">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.6015 0L30 1.64L2.43243 41.8405L29.5946 79.54L28.6192 82L0 41.8405L28.6015 0Z" fill="#929A9F" />
                            </svg>
                        </div>
                                    <div class="swiper-button swiper-button-next">
                            <svg width="30" height="82" viewBox="0 0 30 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3985 0L0 1.64L27.5676 41.8405L0.405405 79.54L1.38075 82L30 41.8405L1.3985 0Z" fill="#929A9F" />
                            </svg>
                        </div>
             <div class="pop-up__desc">
                <h4>ТРЦ Княгинин</h4>
                <p>Поставка та монтаж 6 ескалаторів</p>
            </div>
        </div>`
    },
         {
        id: "kyivskyi",
        code: `<div class="pop-up__project active swiper" data-project="kyivskyi">
                    <div class="swiper-wrapper">
                     <div class="pop-up__slide swiper-slide">
                        <div class="pop-up__slide-container">
                            <div class="swiper-zoom-container img-fill vertical-img">
                                <img src="./assets/projects/kyivskyi/01.jpg">
                            </div>
                        </div>
                    </div>     
                </div>
                 <div class="pop-up__desc">
                <h4>ТРЦ Київський</h4>
                <p>Поставка та монтаж - 1 ліфт, 2 ескалатори</p>
            </div>
        </div>`
    }
]
function createPopUpSlider(block){
    const popUpSlider = new Swiper(block, {
            spaceBetween: 0,
            slidesPerView: 1,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
}
 const openProjectPopUp = (project) => {
        const loader = document.createElement('div');
        loader.classList.add('loader__wrapper');
        loader.innerHTML = '<div class="loader"></div>';
        popup.innerHTML = loader;

        popup.classList.add('active');
        let template = `<div class="pop-up__bg">
                            <div class="pop-up__block">
                                <div class="pop-up__scroll">
                                    <div class="pop-up__close" onclick="closeWindow()">&#10006;</div>
                                    <div class="pop-up__slider">`
        projectArray.forEach(el =>el.id === project.dataset.slide && (template += el.code));
        template +=`</div></div></div></div>`
        popup.innerHTML = template;
    
     disableScroll('.pop-up__bg');
      const popUpSlider = new Swiper('.pop-up__project.active', {
            spaceBetween: 0,
            slidesPerView: 1,
            zoom: true,
            navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
        });
    }
    
projects.forEach(project => {
    project.addEventListener('click', ({currentTarget}) => {
    openProjectPopUp(currentTarget);
    })
})
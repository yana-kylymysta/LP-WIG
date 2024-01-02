const header = document.querySelector('.header');
const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const lang = document.querySelector('.lang');
const langSwitcher = document.querySelector('.lang__summary');
const langActive = document.querySelector('.header__right-desc .dropdown__summary');
const langList = document.querySelectorAll('.header__right-desc .lang__item');
const langListMob = document.querySelector('.lang__list-mob');
const pageWrapper = document.querySelector('.page__wrapper');
const details = document.querySelectorAll('.details');



//SLIDER
const initializationSlider = (element, item1, item2, item3, margin1 = 16, margin2 = 20) => {
    $(document).ready(function () {
        let slider = $(element).lightSlider({
            item: item3,
            slideMargin: margin2,
            slideMove: 1,
            controls: false,
            autoWidth: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        item: item2,
                        slideMargin: margin2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        item: item1,
                        slideMargin: margin1,
                        autoWidth: false,
                    }
                }
            ]
        });

        const parentElement = $(element).closest('.slider__wrapper');

        parentElement.find('.slider__arrows .lSPrev').on('click', function (event) {
            slider.goToPrevSlide();
               removeFocus();
        });

        parentElement.find('.slider__arrows .lSNext').on('click', function (event) {
            slider.goToNextSlide();
            removeFocus();
        });

        function removeFocus() {
            document.activeElement.blur();
        }
    });
};


// //FORM VALIDATION
// const isValidInputs = (elements) => {
//    let status = true;

//   const addErrorMessage = (input, text) => {
//     const parent = input.closest('.input-wrapper');
//     const msgBlock = parent.querySelector('.error-msg');
//     msgBlock.innerText = text ;
//     msgBlock.style.display = 'block';
//   }

//   const removeErrorMessage = (input) => {
//     const parent = input.closest('.input-wrapper');
//     const msgBlock = parent.querySelector('.error-msg');
//     msgBlock.style.display = 'none';
//     msgBlock.innerText = ''; 
//   }

//   const inputEmail = (input) => {
//       const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//       let result = reg.test(input.value);
//       if(!result) {
//           input.classList.add("error"); 
//           addErrorMessage(input, 'Данні введені не коректно');
//           status = false; 
//       }  else {
//           input.classList.contains('error') && input.classList.remove('error');
//           removeErrorMessage(input)
//         }
//   }

//   const inputLength = (input) => {
//         let count = input.classList.contains('phone') ? 17 : 0;
//         if(input.value.length > count){
//             if(input.classList.contains('error')){
//                 input.classList.remove('error');
//                 removeErrorMessage(input)
//             }
//         }else{
//               input.classList.add('error');
//               addErrorMessage(input, 'Заповність це поле');
//               status = false;
//               }
//            if(input.classList.contains('email') && input.value.length > 0) {
//               inputEmail(input);
//           }
//  }
//   const checkedInput = (input) => {
//     const parent = input.closest('.checkbox-container');
//     const box = parent.querySelector('.checkmark')
//     if(input.checked) {
//         box.classList.contains('error') && box.classList.remove('error');
//     } else {
//         box.classList.add('error');
//         status = false;
//     }
//  }
//   elements.forEach(el => {
//       if(el.type === 'checkbox') {
//           checkedInput(el)
//       } else {
//           el.onkeyup  = (e) => inputLength(el);  
//           inputLength(el);
//       }
//   })
//    return status;
// }

// $(function(){
//     $(".phone").mask("+38(099) 999-99-99");

//     $(".phone").click(function() {
//         setCursorPosition(this, 5); // Встановіть позицію, на яку ви хочете перемістити курсор
//     });

//     function setCursorPosition(input, pos) {
//         if (input.setSelectionRange) {
//             input.focus();
//             input.setSelectionRange(pos, pos);
//         } else if (input.createTextRange) {
//             var range = input.createTextRange();
//             range.collapse(true);
//             range.moveEnd('character', pos);
//             range.moveStart('character', pos);
//             range.select();
//         }
//     }
// });


const disableScroll = () => {
      const widthScroll = window.innerWidth - document.body.offsetWidth;
      const popup = document.querySelector('.pop-up__bg');
      document.body.dbScrollY = window.scrollY;

      const scrollPosition = Math.max(
          window.scrollY,
          document.documentElement.scrollTop,
          document.body.scrollTop
    );

    pageWrapper.style.cssText = `
        position: fixed;
        top: -${scrollPosition}px;
        left: 0;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
        `;
        popup.style.top = `${scrollPosition}px`;
    };

const enableScroll = () => {
        pageWrapper.style.cssText = '';
        window.scroll({
            top: document.body.dbScrollY,
        })
    }


const thanksPopUp = (event, buttonElement) => { 
       const parent = buttonElement.closest('.form');
       const inputs = parent.querySelectorAll('input:required');
       let status = true;
       
       let template = `
            <div class="pop-up__bg thank">
                <div class="pop-up__block">
                    <div class="pop-up__scroll">
                        <div class="pop-up__close"></div>
                        <h2 class="pop-up__title title"><span>Дякуємо!</span></h2>
                        <div class="pop-up__text">
                            Ми зв'яжемося з вами протягом<br><span>двох робочих днів</span>
                        </div>
                        <a href="../" class="pop-up___btn btn section__btn">На головну</a>
                    </div>
                </div>
            </div>`;

            if(isValidInputs(inputs)){ 
                status = true;
                event.preventDefault();
            } else {
                status = false;
                event.preventDefault();
            }

        if(status) {
        const formData = new FormData(parent);
        const xhr = new XMLHttpRequest();

        //Data output to the console
        formData.forEach(function(value, key){
            console.log(key, value);
        });

        //Sending data
        // xhr.open('POST', 'ваш_url_для_відправки_форми', true);
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         console.log('Form submitted')
        //         // Додатковий код для обробки відповіді сервера (якщо потрібно)
        //     }
        // };
        // xhr.send(formData);

        popUp.innerHTML = template;
        if(!popUp.classList.contains("active")) {
            popUp.classList.add('active');}
        disableScroll();
        parent.reset();
       }
    }


//MARQUEE
const createWidthMarquee = (element) => {
    const block = document.querySelector(element);

    const childs =  block.children;
    
    console.log(childs[0].scrollWidth)
    const childWidth = 
        childs[0].scrollWidth === childs[1].scrollWidth
        ? childs[0].scrollWidth
        : 'max-content'
   
    block.style.setProperty('--block-width', `${childWidth * 2}px`);
    block.classList.add('marquee');
}

//HEADER 
window.addEventListener('scroll', () => {
  const verticalScrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (verticalScrollPosition > 50) {
    header.classList.add('header__scroll');
  } else {
    header.classList.remove('header__scroll');
  }
});





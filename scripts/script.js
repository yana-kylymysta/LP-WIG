const header = document.querySelector('.header');
const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const lang = document.querySelector('.lang');
const langSwitcher = document.querySelector('.lang__summary');
const langActive = document.querySelector('.header__right-desc .dropdown__summary');
const langList = document.querySelectorAll('.header__right-desc .lang__item');
const langListMob = document.querySelector('.lang__list-mob');
const pageWrapper = document.querySelector('.page__wrapper');
const details = document.querySelectorAll('.details');
const popup = document.querySelector('.pop-up')

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;
    const popupBg = document.querySelector('.pop-up__bg');

    const verticalPosition = (window.innerHeight - popupBg.offsetHeight) / 2;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden'; 
    document.body.style.paddingRight = `${widthScroll}px`; 

    popupBg.style.position = 'fixed'; 
    popupBg.style.top = `${verticalPosition}px`; 
    popupBg.style.left = '0';
    popupBg.style.right = '0';
};

const enableScroll = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = ''; 
    document.body.style.paddingRight = ''; 
}
const closeWindow = () => {
    popup.classList.remove('active');
    enableScroll();
    
}
// //FORM VALIDATION
  const addErrorMessage = (input, text) => {
    const parent = input.closest('.input__wrapper');
    let msgBlock = parent.querySelector('.error-msg');

    if (!msgBlock) {
        msgBlock = document.createElement('div');
        msgBlock.classList.add('error-msg');
        parent.appendChild(msgBlock);
    }
    msgBlock.innerText = text;
  }

  const removeErrorMessage = (input) => {
    const parent = input.closest('.input__wrapper');
    const msgBlock = parent.querySelector('.error-msg');
    if (msgBlock) {
        msgBlock.remove();
    }
  }


const isValidInputs = (elements) => {
   let status = true;

  const inputEmail = (input) => {
      const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      let result = reg.test(input.value);
      if(!result) {
          input.classList.add("error"); 
          addErrorMessage(input, 'Дані введені некоректно');
          status = false; 
      }  else {
          input.classList.contains('error') && input.classList.remove('error');
          removeErrorMessage(input)
        }
  }

  const inputLength = (input) => {
        let count = input.classList.contains('phone') ? 17 : 0;
        if(input.value.length > count){
            if(input.classList.contains('error')){
                input.classList.remove('error');
                removeErrorMessage(input)
            }
        }else{
              input.classList.add('error');
              addErrorMessage(input, 'Заповніть це поле');
              status = false;
              }
           if(input.type === 'email' && input.value.length > 0) {
              inputEmail(input);
          }
    } 

  const checkedInput = (input) => {
        if(input.checked) {
            input.classList.contains('error') && input.classList.remove('error');
            status = true;
        } else {
            input.classList.add('error');
            status = false;
        }
    }

  elements.forEach(el => {
    if (el.type === 'text' || el.type === 'email') {
        el.onkeyup  = (e) => inputLength(el);  
          inputLength(el);
    }
    if(el.type === 'checkbox') {
        el.onchange  = () => checkedInput(el);  
          checkedInput(el)
    }
  })
   return status;
}

$(function(){
    $(".phone").mask("+38(099) 999-99-99");

    $(".phone").click(function() {
        setCursorPosition(this, 5); // Встановіть позицію, на яку ви хочете перемістити курсор
    });

    function setCursorPosition(input, pos) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(pos, pos);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }
});


const thanksPopUp = (event, buttonElement) => { 
    const parent = buttonElement.closest('.form');
    const inputs = parent.querySelectorAll('input:required');
    
    let status = true;
       
    //    let template = `
    //         <div class="pop-up__bg thank">
    //             <div class="pop-up__block">
    //                 <div class="pop-up__scroll">
    //                     <div class="pop-up__close"></div>
    //                     <h2 class="pop-up__title title"><span>Дякуємо!</span></h2>
    //                     <div class="pop-up__text">
    //                         Ми зв'яжемося з вами протягом<br><span>двох робочих днів</span>
    //                     </div>
    //                     <a href="../" class="pop-up___btn btn section__btn">На головну</a>
    //                 </div>
    //             </div>
    //         </div>`;


    status = isValidInputs(inputs);
    event.preventDefault();

    if(status) {
        const formData = new FormData(parent);
        const xhr = new XMLHttpRequest();

        formData.forEach(function(value, key){
            console.log(key, value);
        });

        xhr.open('POST', '../scripts/send_mail.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('Form submitted')
            }
        };
        xhr.send(formData);

    //     popUp.innerHTML = template;
    //     if(!popUp.classList.contains("active")) {
    //         popUp.classList.add('active');}
    //     disableScroll();
    parent.reset();
       }
    }


//HEADER 
window.addEventListener('scroll', () => {
  const verticalScrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (verticalScrollPosition > 100) {
    header.classList.add('header__scroll');
  } else {
    header.classList.remove('header__scroll');
  }
});

popup.addEventListener('click', ({target}) => {
    if(target.matches('.pop-up__close') || target.matches('.pop-up__bg')) {
        closeWindow();
    }
})



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

const createLogosAnimate = (block) => {
        const element = document.querySelector(block);
        if (element) {
            let images = element.querySelectorAll('img');
            let loadedImages = 0;

            function checkAllImagesLoaded() {
                loadedImages++;
                if (loadedImages === images.length) {
                    createWidthMarquee(block);
                }
            }

            images.forEach(function (img) {
            if (img.complete) {
                checkAllImagesLoaded(); 
            } else {
                img.addEventListener('load', checkAllImagesLoaded);
                img.addEventListener('error', checkAllImagesLoaded); 
                }
            });
        }
}
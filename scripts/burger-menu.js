const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__wrapper');
const menuBtns = document.querySelectorAll('.lang__item');
const menuItems =  document.querySelectorAll('.menu__item:not(.dropdown)');
const menuDropdowns = document.querySelectorAll('.menu__item.dropdown');
const backMenu = document.querySelectorAll('.dropdown__back');
const dropdownBlocks = document.querySelectorAll('.dropdown__block');
const darkWrapper = document.querySelector('.dark-wrapper');

console.log(windowWidth)
if (menuIcon) {
    menuIcon.addEventListener('click', () => toggleMenu());
}

const toggleMenu = () => {
    document.body.classList.toggle('lock');
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
};

const closeMenu = () => {
    if (menuBody.matches('.active')) {
        document.body.classList.remove('lock');
        menuIcon.classList.remove('active');
        menuBody.classList.remove('active');
    }
};

menuBtns.forEach(btn => {
    btn.addEventListener('click', closeMenu);
});

menuItems.forEach(el => {
    el.addEventListener('click', closeMenu);
});

menuDropdowns.forEach(el => {
    if(windowWidth < 1023 ) {
        
        const child = el.querySelector('.dropdown__block');
        if(!el.matches('.opened')) {     
            el.classList.add('opened');
        }
        if(!child.matches('.active')) {       
            child.classList.add('active');
        }
        el.addEventListener('click', ({currentTarget}) => {
            console.log(currentTarget)
            const parent = currentTarget.parentElement;
            const child = currentTarget.querySelector('.dropdown__block'); 
                child.classList.toggle('active');
                currentTarget.classList.toggle('opened');
        })
    }
    else {
        el.addEventListener('mouseover', ({currentTarget}) => {
            const child = currentTarget.querySelector('.dropdown__block');
           if(!child.matches('.active')) {       
                child.classList.add('active');
            }
          if(!currentTarget.matches('.opened')) {     
                currentTarget.classList.add('opened');
            }
        });
        el.addEventListener('mouseout', ({currentTarget}) => {
            const child = currentTarget.querySelector('.dropdown__block');
            child.classList.remove('active');
            currentTarget.classList.remove('opened');
        });
    }    
});



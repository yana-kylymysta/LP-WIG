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

const dropdownEffect = (parent, child) => {
    if(!child.classList.contains('active')) {
        for (const block of dropdownBlocks) {
                block.classList.remove('active');
            }
        for (const block of menuDropdowns) {
                block.classList.remove('active');
            }
        parent.classList.add('active');
        child.classList.add('active');
        darkWrapper.classList.add('active');
    }
    else {
        parent.classList.remove('active');
        child.classList.remove('active');
        darkWrapper.classList.remove('active');
    }
}
menuDropdowns.forEach(el => {
    el.addEventListener('click', ({currentTarget}) => {
        const parent = currentTarget.parentElement;
        const child = currentTarget.querySelector('.dropdown__block');
        if(windowWidth > 1023 ) {
           dropdownEffect(currentTarget, child);
         }
        if(windowWidth > 767 && windowWidth < 1024 ) {  
            if(parent.matches('.lang__list-wrapper')) {
                dropdownEffect(currentTarget, child);
            }
          }
        if(windowWidth < 1024 ) {
            if(!parent.matches('.lang__list-wrapper')) {
                child.classList.toggle('active');
            }
        }
    });
});



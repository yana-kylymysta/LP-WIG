const popUp = document.querySelector('.pop-up');

const closeWindow = () => {
    popUp.classList.remove('active');
    popUp.innerHTML = '';
        enableScroll();
}

const openPopUpForm = () => {
    let template = `
            <div class="pop-up__bg">
                <div class="pop-up__block">
                    <div class="pop-up__scroll">
                        <div class="pop-up__close"></div>
                        <h2 class="pop-up__title title"><span>Зворотній</span> зв’язок</h2>
                        <div class="pop-up__row">
                            <form class="contacts__form form">
                                <div class="contacts__inputs inputs">
                                    <div class="input-wrapper">
                                        <input class="contacts__input input name" name="name" type="text" placeholder="Ім’я, Прізвище*" required onkeyup="replaceName(this)">
                                        <div class="error-msg"></div>
                                    </div>
                                    <div class="input-wrapper">
                                        <input class="contacts__input input phone" name="tel" type="tel" placeholder="Телефон контактної особи*" required>
                                        <div class="error-msg"></div>
                                    </div>
                                    <textarea class="contacts__textarea textarea input" rows="10" name="message" placeholder="Ваше повідомлення"></textarea>
                                </div>
                                <div class="checkbox__wrapper">
                                    <label class="career__checkbox checkbox-container">
                                        <input type="checkbox" checked="" required>
                                        <span class="checkmark"></span>
                                        <span class="checkbox-label">Я даю згоду на обробку персональних даних</span>
                                    </label>
                                    <button type="submit" class="pop-up__btn btn section__btn form__btn" target="_blank" onclick="thanksPopUp(event, this)">Зв’яжіться зі мною</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
        popUp.classList.add('active');
        popUp.innerHTML = template;
        disableScroll();
     
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
}

popUp.addEventListener('click', ({target}) => {
    if(target.matches('.pop-up__close') || target.matches('.pop-up__bg')) {
        closeWindow();
    }
})
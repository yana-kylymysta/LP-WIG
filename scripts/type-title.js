//TYPE TITLE 
function splitTextNodes(element) {
  const childNodes = Array.from(element.childNodes);
  
  childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Розбиваємо текст на слова з урахуванням пробілів
      const words = node.textContent.split(/(\s+)/).map(word => {
        if (word.trim() === '') {
          return `<span class="space">${word}</span>`; // Зберігаємо пробіли
        } else {
          // Розбиваємо кожне слово на літери
          const letters = word.split('').map(letter => {
            return `<span class="letter">${letter}</span>`;
          }).join('');
          return `<span class="word">${letters}</span>`; // Обгортаємо кожне слово
        }
      }).join('');
      
      const wrapper = document.createElement('span');
      wrapper.innerHTML = words;
      node.replaceWith(wrapper);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      splitTextNodes(node); // Рекурсія для вкладених елементів
    }
  });
}


const typeTitle = document.querySelector('.type-title');

splitTextNodes(typeTitle);

gsap.to('.type-title .letter', {
  delay: 4.5,
  opacity: 1,
  y: 0,
  stagger: 0.1, 
  duration: 0.08,
  ease: "power2.out"
});

gsap.to('.elevator-page .main__btn', {
  delay: 7,
  opacity: 1,
  duration: 0.3,
  ease: "power2.out"
});

gsap.to('.escalator-page .main__btn', {
  delay: 7.8,
  opacity: 1,
  duration: 0.3,
  ease: "power2.out"
});

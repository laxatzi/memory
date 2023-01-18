const memory_cards = document.querySelectorAll('[data-emoji]');

memory_cards.forEach((button) => {
    button.addEventListener(('click'), () => {
        console.log(button.innerText);
    });
});
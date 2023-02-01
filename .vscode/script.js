const memory_cards = document.querySelectorAll('.js-button');

memory_cards.forEach((button) => {
    button.addEventListener(('click'), () => {
        console.log(button.innerText);
    });
});
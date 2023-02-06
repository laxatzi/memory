const cards = document.querySelectorAll('.js-button');
const emojies = document.querySelectorAll('.js-emoji');

cards.forEach((card) => {
    card.addEventListener(('click'), () => {
        emojies.forEach((emoji) => {
          console.log('hi');
        });
    });
});
const cards = document.querySelectorAll('.js-button');
const emojies = document.querySelectorAll('.js-emoji');

// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("toggle");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };

cards.forEach((card) => {
  card.addEventListener('click', function() {

    card.style.backgroundColor = 'grey';
  });
});

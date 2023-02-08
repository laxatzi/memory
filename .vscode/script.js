const card_containers = document.querySelectorAll('.js-card-container');
const cards = document.querySelectorAll('.js-card');

// const targetDiv = document.getElementById("third");
// const btn = document.getElementById("toggle");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };

let countOpenCards = 0;

cards.forEach((card) => {
  card.addEventListener('click', function() {
     card.style.backgroundColor = 'transparent';
     countOpenCards = countOpenCards + 1;
  });
});

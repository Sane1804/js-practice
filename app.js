const hands = document.querySelectorAll(".real > div");

const cardHeader = document.querySelector(".user-choice");



hands.forEach(hand => hand.addEventListener("click", () => {
    const choice = hand.className;
    if (cardHeader.textContent == ""){
        cardHeader.textContent = choice;
    } 

}))

console.log(cardHeader.textContent);







const hands = document.querySelectorAll(".real > div > img");

const cardHeader = document.querySelector(".user-choice");

const displayUserChoice = (clicked) => {
    hands.forEach(element => {
        if (element.parentElement.className !== clicked){
            element.parentElement.style.display = "none"
            cardHeader.textContent = clicked;
        }
    })
}

const addClassToCliked = (e) => {
    const CLICKED = e.target.parentElement.className;
    e.target.style.maxWidth = "350px"
    displayUserChoice(CLICKED)
}

hands.forEach(hand => hand.addEventListener("click", addClassToCliked))



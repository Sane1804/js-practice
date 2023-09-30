const hands = document.querySelectorAll(".real > div > img");

const cardHeader = document.querySelector(".user-choice");

const computerImage = document.querySelector(".compu");

const compuChoice = document.querySelector(".compu-choice");

const displayComputerChoice = () => {
    const compuSrc = computerImage.getAttribute("src")
    if (compuSrc == "images/question-mark.png"){
        const ramdonIndex = Math.floor(Math.random() * 3)
        const arr = ["rock", "paper", "scissors"];
        const path = {
            0 : "images/rock-right.png",
            1 : "images/paper-right.png",
            2 : "images/scissors-right.png"
        }
        computerImage.setAttribute("src", path[ramdonIndex])
        computerImage.style.maxWidth = "350px"
        if (compuChoice.textContent == ""){
            compuChoice.textContent = arr[ramdonIndex];
        }
    }
}

const displayUserChoice = (clicked) => {
    hands.forEach(element => {
        if (element.parentElement.className !== clicked){
            element.parentElement.style.display = "none"
            cardHeader.textContent = clicked;
        }
    })
}

const whenUserChoose = (e) => {
    const CLICKED = e.target.parentElement.className;
    const compuImg = computerImage.getAttribute("src");
    e.target.style.maxWidth = "350px"
    displayUserChoice(CLICKED)
    displayComputerChoice()
}

hands.forEach(hand => hand.addEventListener("click", whenUserChoose))



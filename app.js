const hands = document.querySelectorAll(".real > div > img");

const boxHands = document.querySelectorAll(".real > div");

const cardHeader = document.querySelector(".user-choice");

const computerImage = document.querySelector(".compu");

const compuChoice = document.querySelector(".compu-choice");

const leftHearts = document.querySelectorAll(".left-hearts > .icon");

const rightHearts = document.querySelectorAll(".right-hearts > .icon");

const compuSrc = computerImage.getAttribute("src");

const displayComputerChoice = () => {

    if (compuSrc == "images/question-mark.png"){
        const ramdonIndex = Math.floor(Math.random() * 3)
        const arr = ["rock", "paper", "scissors"];
        const path = {
            0 : "images/rock-right.png",
            1 : "images/paper-right.png",
            2 : "images/scissors-right.png"
        }
        computerImage.setAttribute("src", path[ramdonIndex])
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
        } else {
            element.style.maxWidth = "350px";
            element.style.pointerEvents = "none";
        }
    })
}


//Determinate who lost a life after a round
const loser = (string1, string2) => {
    const arr = [0, 0]; 
    const str1 = string1.toLowerCase()
    const str2 = string2.toLowerCase();
    if (str1 == str2){
        return arr;
    }

    if (str1 == "rock" && str2 == "scissors" || str1 == "scissors" && str2 == "paper" || str1 == "paper" && str2 == "rock"){
        arr[1]--;
    } else {
        arr[0]--;
    }
    return arr;
} 




const removeLoserHeart = (arr) => {
    if (arr[0] < 0){
        leftHearts[0].style.display = "none";
    } else if (arr[1] < 0) {
        rightHearts[0].style.display = "none";
    } else {
        return;
    }
}


const replay = (selectedElem) => {
    setTimeout(() => {
    const compuImg = document.querySelector(".compu");
    compuImg.setAttribute("src", compuSrc);
    [cardHeader.textContent, compuChoice.textContent] = "";
    selectedElem.removeAttribute("style");
    boxHands.forEach(elem => elem.removeAttribute("style"));
    console.log(selectedElem)
    }, 2000)
}


const playRound = (e) => {
    const CLICKED = e.target.parentElement.className;
    displayUserChoice(CLICKED)
    displayComputerChoice()
    const user = cardHeader.textContent;
    const compu = compuChoice.textContent;
    const score = loser(user, compu);
    removeLoserHeart(score);
    replay(e.target);
}

hands.forEach(hand => hand.addEventListener("click", playRound))

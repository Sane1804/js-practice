const hands = document.querySelectorAll(".real > div > img");

const boxHands = document.querySelectorAll(".real > div");

const cardHeader = document.querySelector(".user-choice");

const computerImage = document.querySelector(".compu");

const compuChoice = document.querySelector(".compu-choice");

const leftHearts = document.querySelectorAll(".left-hearts > .icon > div");

const rightHearts = document.querySelectorAll(".right-hearts > .icon > div");

const compuSrc = computerImage.getAttribute("src");

const vsBtn = document.querySelector(".vs");

const displayComputerChoice = () => {
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


//Determinates who lost a the round
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

const changeHeartColor = (nodeArr) => {
    const array = Array.from(nodeArr);
    const heartPair = [];
    for (let i = 0; i < array.length; i+=2){
        heartPair.push(array.slice(i, i+2))
    }
    for (let i = 0; i < heartPair.length; i++){
        if (heartPair[i][0].className.length == 4){
            heartPair[i][0].classList.add("grey")
            heartPair[i][1].classList.add("grey")
            break;
        }
    }
}



const removeLoserHeart = (arr) => {
    if (arr[0] < 0){
        changeHeartColor(leftHearts)
    } else if (arr[1] < 0) {
        changeHeartColor(rightHearts)
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
    }, 2000)
}


const isLastHeart = (nodeArr) => {
    const arr = Array.from(nodeArr)[nodeArr.length-2];
    if (arr.className.length > 4){
        return true;
    }
}

const togleElem = (node1, node2) => {
    node1.classList.toggle("real-end");
    node2.classList.toggle("computer-end");
}

const displayMessegeWinnerBox = (str) => {
    const leftUser = document.querySelector(".real");
    const rightUser = document.querySelector(".computer");
    togleElem(leftUser, rightUser);
    console.log(leftUser.className)
    console.log(rightUser.className)
    let col1 = document.createElement("div");
    let col2 = document.createElement("div");
    let h2 = document.querySelector(".vs > h2");
    let restartBtn = document.createElement("button");


    vsBtn.classList.add("winner-box")

    // // building col1 
    h2.textContent = str;
    col1.appendChild(h2);
    col1.classList.add("col1");

    // building col2
    restartBtn.textContent = "Play again";
    col2.appendChild(restartBtn);
    col2.classList.add("col2");

    vsBtn.appendChild(col1);
    vsBtn.appendChild(col2);

    hands.forEach(btn => console.log(btn));
}

const gameWinner = () => {
    if (isLastHeart(leftHearts)){
        displayMessegeWinnerBox("The computer Won")
    } else if (isLastHeart(rightHearts)){
        displayMessegeWinnerBox("You won");
    }
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
    gameWinner()
}

hands.forEach(hand => hand.addEventListener("click", playRound))

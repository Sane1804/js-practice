

console.log("Welcome, This is rock, paper and scissors game. Hope you enjoy")

const inputUser = prompt("enter your choice 'rock' 'paper' 'scissors'").toLocaleLowerCase();

let userPoints = 0;
let computerPoints = 0;

const userChoice = (input) => { 
    if (input == "rock" || input == "paper" || input == "scissors"){
        return input
    } else {
        return "Not a valid option. Try again"
    }
}

const user = userChoice(inputUser);


const getComputerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const computer = getComputerChoice();


const whoWins = (playerOne, playerTwo) => {
    let output = "";

    if (playerOne == "rock" && playerTwo == "scissors" || playerOne == "paper" && playerTwo == "rock" || playerOne == "scissors" && playerTwo == "paper"){
        output = "You win"
    } else {
        output = "The computer win"
    }


    if (playerOne == playerTwo){
        output = "Draw"
    }

    return output;
}

console.log(`You : ${user}`, `||  The computer : ${computer}`);

console.log(whoWins(user, computer));


console.log("Welcome, This is rock, paper and scissors game. Hope you enjoy")


const userChoice = () => {
    let input = prompt("enter your choice 'rock' 'paper' 'scissors'").toLocaleLowerCase();

    if (input == "rock" || input == "paper" || input == "scissors"){
        return input
    } else {
        return "Not a valid option. Try again"
    }
}


const getComputerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


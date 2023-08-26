

console.log("Welcome, This is rock, paper and scissors game. Hope you enjoy")

const inputUser = prompt("enter your choice 'rock' 'paper' 'scissors'").toLocaleLowerCase();


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


const messege = (userOne, compu) => {
    let arr = [userOne, compu];
    if (arr[0].length <= 8){
        return `${arr[0]}-${arr[1]}`
    } else {
        return arr[0];
    }
}
console.log(messege(user, computer));



const winner = (str1, str2) => {
    let output = "";
    
    if (str1 == "paper" && str2 == "rock" || str1 == "rock" && str2 == "scissors" || str1 == "scissors" && str2 == "paper"){
       output = "You won" 
    } else {
        output = "The computer won"
    }
    
    if (str1 === str2){
        output = "Draw"
    }
    
    return output
}


console.log(winner(user, computer))


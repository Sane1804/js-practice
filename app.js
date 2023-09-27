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



const game = () => {
    console.log("Welcome to this boring game. Hoping it works well")
    let player1 = 0;
    let player2 = 0;

    for (let i = 1; i <= 5; i++){
        let user = userChoice()
        let compu = getComputerChoice();

        console.log(`Round ${i}`);
        console.log(`You: ${user} | Compu: ${compu}`);


        if (user == "rock" && compu == "scissors" || user == "paper" && compu == "rock" || user == "scissors" && compu == "paper"){
            player1++
        } else if (compu == "rock" && user == "scissors" || compu == "paper" && user == "rock" || compu == "scissors" && user == "paper") {
            player2++
        }

        if (user == compu){
            player1++;
            player2++;
        }

        console.log("You: ", player1, "|", "Compu: ", player2);
    }

    if (player1 > player2) {
        return "You won"
    } else {
        return "The compu won"
    }
}


console.log(game());


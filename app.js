const getComputerChoice = () => {
    let arr = ["Rock", "Paper", "Scissors"];
    let ramdomIndex = Math.floor(Math.random() * arr.length);
    return arr[ramdomIndex];
}

console.log(getComputerChoice());
document.addEventListener("DOMContentLoaded", () => {
const choices = ["Rock", "Paper", "Scissors"];
let count = 0;
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const resultTxt = document.getElementById("rpsResult");
const winStreak = document.getElementById("winstreak");

function play(usrChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let result ="";

    if (usrChoice == computerChoice){
        result = "Tie";
        count =0;
        winStreak.textContent = "Winstreak= "+count;
    }else if (       
        (usrChoice === "Rock" && computerChoice === "Scissors") ||
        (usrChoice === "Paper" && computerChoice === "Rock") ||
        (usrChoice === "Scissors" && computerChoice === "Paper")
    ){
        result = "You Win!";
        count = count +1;
        winStreak.textContent = "Winstreak= "+count;
    }else{
        result =  "You Lose!";
        count =0;
        winStreak.textContent = "Winstreak= "+count;
    }

    resultTxt.textContent = `You chose ${usrChoice}, and computer chose ${computerChoice}. ${result}`;
}

rock.addEventListener("click",()=> play("Rock"));
paper.addEventListener("click",()=> play("Paper"));
scissors.addEventListener("click",()=> play("Scissors"));
});
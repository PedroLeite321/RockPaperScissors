
const rock = document.getElementById("rockButton").addEventListener("click", () => playerChoice("rock"));
const paper = document.getElementById("paperButton").addEventListener("click",  () => playerChoice("paper"));
const scissors = document.getElementById("scissorsButton").addEventListener("click", () => playerChoice("scissors"));
let winningP = 0;
let winningC = 0;
let rounds = prompt("How many rounds do you want to play?");
if(rounds == ""){
    rounds = 5;
}
let roundsGame = parseInt(rounds);




function playerChoice(playerChoosed){
    let computerChoice;
    for(let i = 1; i < roundsGame;i++){
        computerChoice = Math.floor(Math.random() * (3)+1);

        if(playerChoosed == "rock"){
            document.querySelector("#secondImage").src="./images/rock2.png";
        }else if(playerChoosed == "paper"){
            document.querySelector("#secondImage").src="./images/Paper.png";
        }else{
            document.querySelector("#secondImage").src="./images/Scissors.png";
        }
        
        if(computerChoice == 1){
            document.querySelector("#firstImage").src="./images/rock2.png";
        }else if(computerChoice == 2){
            document.querySelector("#firstImage").src="./images/Paper.png";
        }else{
            document.querySelector("#firstImage").src="./images/Scissors.png";
        }
        if(winningC == roundsGame || winningP == roundsGame){
            if(winningC > winningP){
                alert("Computer won! Death to all the organic beings!");
            }else{
                alert("Player won... For now.");
            }
            winningC = 0;
            winningP = 0;
            break;
        }

        if(computerChoice == 3 && playerChoosed == 'rock' || computerChoice == 1 && playerChoosed == 'paper' || computerChoice == 2 && playerChoosed == 'scissors')
        {
            winningP++;
            document.querySelector(".whoWon").innerHTML = "Player Won!";
            document.querySelector(".gameScore").innerHTML = `${winningC} || ${winningP}`;
            return playerChoosed;
            
        
            
        }

        else if(computerChoice == 1 && playerChoosed == 'rock' || computerChoice == 2 && playerChoosed == 'paper' || computerChoice == 3 && playerChoosed == 'scissors'){
            
            document.querySelector(".whoWon").innerHTML = "It's a tie. Both choosed the same.";
            document.querySelector(".gameScore").innerHTML = `${winningC} || ${winningP}`

            return playerChoosed
            
        }
        else{
            winningC++;
            document.querySelector(".whoWon").innerHTML = "Player lost this round."
            document.querySelector(".gameScore").textContent = `${winningC} || ${winningP}`;
            
            return computerChoice;
            
        }
        
    }
    
}





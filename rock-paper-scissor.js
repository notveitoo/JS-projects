 //get items from JSON and if score is null it will assign a default value of 0s
let score = JSON.parse(localStorage.getItem('score')) || {
win: 0,
lose: 0,
tie: 0
};
let result = '';
let playerMove, computerMove;
        
// Function for random pick by the computer
function pickComputermove(){
    let computerMove = ''; 
    const randomPick = Math.random();
    if(randomPick >= 0 && randomPick < 1/3){
        computerMove = 'rock';
    } else if(randomPick >= 1/3 && randomPick < 2/3){
        computerMove = 'paper';
    } else if(randomPick >= 2/3 && randomPick < 1){
        computerMove = 'scissor';
    }
    return computerMove;
}

        // Function that sets the score of the player
        function pickResult(playerChoice){
            playerMove = playerChoice;
            computerMove = pickComputermove();
            
            if (playerMove === 'scissor'){
                if (computerMove === 'rock'){
                    result = 'You lose';
                    score.lose += 1;
                } else if (computerMove === 'paper'){
                    result = 'You win';
                    score.win += 1;
                } else if (computerMove === 'scissor'){
                    result = 'Its a Tie';
                    score.tie += 1;
                }
            }
            else if (playerMove === 'paper'){
                if (computerMove === 'rock'){
                    result = 'You win';
                    score.win += 1;
                } else if (computerMove === 'paper'){
                    result = 'Its a Tie';
                    score.tie += 1;
                } else if (computerMove === 'scissor'){
                    result = 'You lose';
                    score.lose += 1;
                }
            }
            else if (playerMove === 'rock'){
                if (computerMove === 'rock'){
                    result = 'Its a Tie';
                    score.tie += 1;
                } else if (computerMove === 'paper'){
                    result = 'You lose';
                    score.lose += 1;
                } else if (computerMove === 'scissor'){
                    result = 'You win';
                    score.win += 1;
                }
            }
            
            // Sets score in JSON
            localStorage.setItem('score', JSON.stringify(score));
            updateScore();
        }
        
        function updateScore(){
            document.querySelector('.js-result-moves').innerHTML = `Moves: You picked <img src="${playerMove}.png" class = "picked-icon"> Computer picked <img src="/${computerMove}.png" class = "picked-icon">`;
            document.querySelector('.js-result-pick').innerHTML = `Result: ${result}`;
            document.querySelector('.js-result-score').innerHTML = `Score: Wins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`;
        }

        function resetScore(){
            score.win = 0;
            score.lose = 0;
            score.tie = 0;
            localStorage.removeItem('score');

            if(score.win === 0 && score.lose === 0 && score.tie === 0){
                alert('Score has been reset');
                result = '';
            } else {
                alert('Error in resetting the score!');
            }
            updateScore();
        }
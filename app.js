/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

This game is called PIG GAME.

DOM Access and Manipilation

What I will do here:

part 1:
1.How to create fundamental game variables
2.How to generate a random number
3.How to manipulate DOM
4.How to read from DOM
5.How to change CSS styles.

part 2.
1.How to set up event handler.
2.what a call function is.
3.what an anonymous function is.
4.Another way to select elements by ID
5.How to change the image in an <img> element.

part3.
1.How to use function sto correctly apply the 
// DRT principle.
// How to think about the game logic like a programmer.
*/

var scores, roundScore, activePlayer, gamePlaying;

init();



// In other to create a dice I need random number
// Math.floor(Math.random () * 6) + 1
dice = Math.floor(Math.random() * 6) + 1;

// <img src="dice-5.png" alt="Dice" class="dice">
document.querySelector('.dice').style.display = 'none';

// Set to zero:score and current.
//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';
//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';



// addEventListener(rollDice-button)
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        //1.random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2.Display results
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3.Update the round score IF the round number is NOT 1.
    if (dice !== 1){
        // Add score.
        // turn of player 1
        roundScore += dice;
        document.querySelector('#current-'  + activePlayer).textContent = roundScore;
    }else{
        //next Player
        nextPlayer();
    }
        
    } 
});

//<button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
// Set event-listener of button hold
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
       // Add CURRENT SCORE to GLOBAL score.
    scores[activePlayer] += roundScore;
    // same as below:
    //scores[activePlayer] = scores[activePlayer] + roundScore;
    
    
    //Update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
    // Check if the player won the game.
    if (scores[activePlayer] >= 20 ){
        document.querySelector('#name-' + activePlayer).textContent = 'winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner!');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        }else{
          nextPlayer();
        }
     
    }
    
})

function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // switch the dice to activePlayer.
        // Player 1 active:0 then palyer 2 become active automatically. 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // hide the dice for the next player.
        document.querySelector('.dice').style.display = 'none';    
}

document.querySelector('.btn-new').addEventListener('click', init);
    
function init(){
    // What will I do when I want to start a new game?
   // Reset all scores right?
    
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    // Set to zero:score and current.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner!');
    document.querySelector('.player-1-panel').classList.remove('winner!');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




//document.querySelector('#current-'  + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

/*
        //Next player.
        
        // turn of player 2
        // ternary operator:an operator accepting three operands.
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        // switch the dice to activePlayer.
        // Player 1 active:0 then palyer 2 become active automatically. 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // hide the dice for the next player.
        document.querySelector('.dice').style.display = 'none';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        */
        






















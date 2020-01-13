/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore  = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// select the .bts-roll and add an event listener and ad an annonynmous function do to something
document.querySelector('.btn-roll').addEventListener('click', function() {

  //1 random number
    var dice = Math.floor((Math.random() * 6) + 1);
  //2 display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; // inital was none to not disply the dice image but now we want to see the dice
    diceDOM.src = 'dice-' + dice + '.png'; // i choose the picture with the src
  //3 updatre the round score IF the rolled  number was NOT a 1
    if (dice !== 1) {
        //add scores
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active'); i tried this
        //document.querySelector('.player-1-panel').classList.add('active'); and this  better use toggle
        document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
      //insert code here for when you click the button hold :)
      //1 add player score to global scores
      scores[activePlayer] += roundScore; //
      //2 update the UI with the numbers
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      roundScore = 0;
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      //3 next players turn



      //4 check if player won the game
});



//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// function btn() {
//    //change
// }


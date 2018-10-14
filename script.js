var score = [0, 0];
var activePlayer = 1;
var currentScore = 0;

document.querySelector('.dicee').style.display= 'none';
var rollDice = document.querySelector('#rollDice');
var newGame = document.querySelector('#newGame');
var player1Score = document.querySelector('.player-1-score');
player1Score.textContent = "0";
var player2Score = document.querySelector('.player-2-score');
player2Score.textContent = "0";
var holdBtn = document.querySelector('#hold-btn');
var final = document.querySelector('.final');
var rules = document.querySelector('.help');


newGame.addEventListener('click', function(){
    if (confirm("Are you sure to start a new game. All score will be lost!")) {
        player1Score.textContent = '0';
        player2Score.textContent = '0';
        document.querySelector('.player-1-current').textContent = '0';   document.querySelector('.player-2-current').textContent = '0';
        score = [0, 0];
        currentScore =0;

    } else {
        
    } 
});


rollDice.addEventListener('click', function(){
    
    var dice = Math.floor(Math.random()*6)+1;
    
    var diceImage = document.querySelector('.dicee');
    diceImage.style.display = 'block';
    diceImage.src = 'images/dice-' + dice + '.png';
    
    if(dice !==1) {
        currentScore +=dice;
        document.querySelector('#player-' + activePlayer + '-current').textContent = currentScore;
        
    } else {
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        currentScore =0;
        
        document.querySelector('#player-1-current').textContent = currentScore;
        document.querySelector('#player-2-current').textContent = currentScore;
        
        document.querySelector('.box-1').classList.toggle('active');     document.querySelector('.box-2').classList.toggle('active');

        
    } 
});

holdBtn.addEventListener('click', function(){
    if(activePlayer==1) {
        score[0] += currentScore;
        player1Score.textContent = score[0];
        check();
        document.querySelector('.box-1').classList.toggle('active');     document.querySelector('.box-2').classList.toggle('active');
        document.querySelector('#player-1-current').textContent = '0';
        activePlayer=2;
        currentScore = 0;
    }
    else{
        score[1] +=currentScore;
        player2Score.textContent = score[1];
        check();
        document.querySelector('.box-1').classList.toggle('active');     document.querySelector('.box-2').classList.toggle('active');
        document.querySelector('#player-2-current').textContent = '0';
        activePlayer=1;
        currentScore =0;
    }
});

rules.addEventListener('click', function(){
   alert("Rules of the Game\n\n1. The game has 2 players, playing in rounds\n2. In each turn, a playr rolls a dice as many times as he wishes. Each result get added to his round score\n3. If the player rolls a 1, all his round score get lost. After that, it's the next player's turn\n4. The player can choose to 'HOLD', which mean that his round score gets added to his Final score. After that, it's the next player's turn\n5. The first player to reach 100 points on Final Score wins the game.\n\nBest of Luck....!"); 
});

function check(){
    var total1 = parseInt(player1Score.textContent);
    var total2 = parseInt(player2Score.textContent);

    if(total1 >=100)
        {
            alert("Player 1 wins the game....!");
            document.querySelector('#player-1-current').textContent = '0';
            document.querySelector('#player-2-current').textContent = '0';
            player1Score.textContent = '0';
            player2Score.textContent = '0';
            currentScore = 0;
            total1 = 0;
            total2 =0;
            score = [0,0];

        }
    if(total2 >=100)
        {
            alert("Player 2 wins the game....!");
            document.querySelector('#player-1-current').textContent = '0';
            document.querySelector('#player-2-current').textContent = '0';
            player1Score.textContent = '0';
            player2Score.textContent = '0';
            currentScore = 0;
            total1=0;
            total2=0;
            score = [0,0];
        }
}
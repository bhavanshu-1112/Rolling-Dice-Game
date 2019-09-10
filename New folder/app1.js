var scores, roundScore, activePlayer,gamePlaying;
init();
 var dice = Math.floor(Math.random()*6+1);
 console.log(dice);

 document.querySelector('#current-' + activePlayer).textContent = dice; // setter -- as we set we a value
 //document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';
//using text content method we can only set text and not html elements like that we send in innerHTMl;

//query selector can be used to reach from webpage and store them in some variable
//var x = document.querySelector('score-0').textContent; // this is getter as here we get a value
// console.log(x); output  =  43;

//using querry selector we can also change css property 

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6+1);
        console.log(dice);
        document.querySelector('#current-'+activePlayer).textContent = dice;
       
    }

 // random number
    var dice = Math.floor(Math.random()*6)+1;
//disply the result
   var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice' + dice + '.png';

    if(dice > 1){
roundScore = roundScore + dice;
document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }
    else{
 nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
  scores[activePlayer] += roundScore;
  document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

  if(scores[activePlayer]>=100){
       document.querySelector('#name'+ activePlayer).textContent = 'WINNER!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer+ '-panel').classList.remove('active');

    }else{
  nextPlayer();
}
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;

    document.getElementsById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');

    //document.querySelector('.player-0-panel').classList.toggle('active');
    //document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);
function init(){

    scores = [0,0];
    roundScore =  0;
    activePlayer = 0;
    
document.querySelector('.dice').style.display = 'none';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player -1';
document.getElementById('name-1').textContent = 'Player-2';
document.querySelector('.player-0-panel').classList.remove('WINNER!!');
document.querySelector('.player-1-panel').classList.remove('WINNER!!');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
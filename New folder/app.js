var scores, roundScore, activePlayer;

scores = [0,0];
roundScore =  0;
activePlayer = 0;
 var dice = Math.floor(Math.random()*6+1);
 console.log(dice);

 document.querySelector('#current-' + activePlayer).textContent = dice; // setter -- as we set we a value
 //document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';
//using text content method we can only set text and not html elements like that we send in innerHTMl;

//query selector can be used to reach from webpage and store them in some variable
//var x = document.querySelector('score-0').textContent; // this is getter as here we get a value
// console.log(x); output  =  43;

//using querry selector we can also change css property 
document.querySelector('.dice').style.display = 'none';

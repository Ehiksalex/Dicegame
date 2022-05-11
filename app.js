let score = document.getElementById('player1');
let score1 = document.getElementById('player2');

dice1 = 0;
dice2 = 0;

document.getElementById('TRY').addEventListener('click', () =>{
    
var play = document.getElementById("play");


function rollDice(){
//Dice1
    let firstDice = Math.floor(Math.random() * 6 + 1);
    let diceImage = "images/dice" + firstDice + ".png";
    document.querySelectorAll("img.img1")[0].setAttribute('src',diceImage);

//Dice2
     let secondDice = Math.floor(Math.random() * 6 + 1);
     let diceImage2 = "images/dice" + secondDice + ".png";
    document.querySelectorAll("img.img2")[0].setAttribute('src',diceImage2);


    
//Using the IF and ELSE IF function to check for the winners

    if(firstDice > secondDice){
        dice1 ++;
        score.innerHTML = dice1;
        score + 1;
        return "Player 1 wins! ";
       
    
    }
    else if (firstDice < secondDice){
        dice2 ++;
        score1.innerHTML = dice2;
        score1 +1
        return "player 2 wins!";
       
        
    }
    else{
        score + 1;
        score1 + 1
        return "It's a draw!";
    
    }
}

var playGame = rollDice();
play.innerHTML = playGame;

})

//To Reset The Game

document.getElementById('reset').addEventListener('click', () =>{
    dice1 = 0;
    dice2 = 0;
    score.innerHTML = dice1;
    score1.innerHTML = dice2;

    
})
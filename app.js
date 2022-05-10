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
        return "Player 1 wins!"
    }
    else if (firstDice < secondDice){
        return "player 2 wins!"
    }
    else{
        return "It's a draw!"
    }
}

var playGame = rollDice();
play.innerHTML = playGame;
})
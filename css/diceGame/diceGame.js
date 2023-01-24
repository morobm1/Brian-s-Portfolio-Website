
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource = "./images/" + "dice" + randomNumber1 + ".png";
var randomImageSource2 = "./images/" + "dice" + randomNumber2 + ".png";

var player1 = document.querySelectorAll('img')[0];
    player1.setAttribute("src", randomImageSource);

var player2 = document.querySelectorAll('img')[1];
    player2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
} 

/* function setPlayerOne (randomNumber1) {
    if (randomNumber1 == 1){
        player1.setAttribute(src="./images/dice1.png")
    } else if (randomNumber1 == 2){
        player1.setAttribute(src="./images/dice2.png")
    } else if (randomNumber1 == 3){
        player1.setAttribute(src="./images/dice3.png")
    } else if (randomNumber1 == 4){
        player1.setAttribute(src="./images/dice4.png")
    } else if (randomNumber1 == 5){
        player1.setAttribute(src="./images/dice5.png")
    } else if( randomNumber1 == 6){
        player1.setAttribute(src="./images/dice6.png")
    }
    return randomNumber1;
} */

console.log(randomNumber1, randomNumber2);

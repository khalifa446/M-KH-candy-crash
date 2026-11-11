var candies = [ "Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var boardd =[];
var rows = 9;
var score = 0;
var timeLeft = 10;
var gameOver = false;

var currTile;
var otherTile;

window.onload = function() {
    startGame();

    window.setinterval(function() {
        if (gameOver) return;
        crushCandy();
        slideCandy();
        generateCandy();
    }, 100);
    
    window.setInterval(function(){
        if (gameOver) return;
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            score -= 5;
            if (score < 0) score= 0;
            document.getElementById("score").innerText = score;

            if (score <= 0) {
                endGame();
                return;
            }

            timeLeft = 10;
            document.getElementById("timer").innerText = timeLeft;
        } 
    }, 1000);
};


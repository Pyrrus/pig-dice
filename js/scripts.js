// Business Logic
var pigDice = function () {

}

// user input
var player = function (ai) {
  this.points = 0;
  this.ai = ai;
}

var player.phototype.holder = function () {
  
}


var pigDice.phototype.game = function (currentPlayer) {
  var turnEnd = true;
  var points = 0;
  while (turnEnd) {
    if (dice === 1) {
      turnEnd = false;
      points = 0;
    } else {
      points += dice;
      turnEnd = holder();
    }
  }

  currentPlayer.points += points;

  if (currentPoint >= 100) {
    you win
  } else {
    pass to next person
  }
}

// User Interface Logic

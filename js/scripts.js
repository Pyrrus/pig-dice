// Business Logic
var pigDice = function () {
  this.dicePoints = 0;
}

// user input
var player = function () {
  this.points = 0;
  this.diceData = 0;
}

player.prototype.adder = function () {
  this.diceData = 0;

}

pigDice.prototype.game = function (currentPlayer) {
  var points = 0;
  var dice = Math.floor((Math.random() * 6) + 1);
  this.diceRoll = dice;
  if (dice === 1) {
    points = 0;
    this.diceRoll = 0;
    console.log("reset")

  } else {
    points += this.diceRoll;
    console.log("add")
  }
  console.log(dice)

  console.log(currentPlayer)
  $("#currentPoint").text("Current Point: " + currentPlayer.points);
  $("#Point").text("Point: " + points);

  currentPlayer.points += points;

  if (currentPoint.points >= 100) {
    console.log("you win");
  } else {
    console.log("new Turn");
  }

}

var game = new pigDice();

var players = [];

var at = 0;

// User Interface Logic
$(document).ready(function() {

  $("#start").click(function () {
    $("#start").hide();
    $("#roll").show();
    $("#hold").show();

    var player1 = new player;
    players.push(player1);
  });

  $("#roll").click(function() {
    game.game(players[at])
  });

  $("#hold").click(function() {
    at++
    if (at >= player.length)
      at = 0;
  });
});

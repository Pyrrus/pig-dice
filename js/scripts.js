// Business Logic
var pigDice = function () {
  this.dicePoints = 0;
}

// user input
var player = function () {
  this.points = 0;
  this.diceData = 0;
}

player.prototype.adder = function (dice) {
  this.diceData += dice;
}

pigDice.prototype.game = function (currentPlayer) {
  var points = 0;
  var dice = Math.floor((Math.random() * 6) + 1);
  if (dice === 1) {
    currentPlayer.diceData = 0;
    at++;
    number++;

    if (at >= players.length) {
      at = 0;
      number = 1;
    }

    $("#currentPoint").text("Current Point: " + players[at].points);
    $("#Point").text("Point: " + 0);
    $("#currentPlayer").text("Player " + number);
  } else {
    currentPlayer.diceData += dice;
  }

  $("#currentPoint").text("Current Point: " + currentPlayer.points);
  $("#Point").text("Point: " + currentPlayer.diceData);

  if (currentPoint.points >= 100) {
    $("#win").text("you win");
  }

}

var game = new pigDice();

var players = [];

var at = 0;

var number = 1;

// User Interface Logic
$(document).ready(function() {

  $("#start").click(function () {
    $("#start").hide();
    $("#roll").show();
    $("#hold").show();

    var player1 = new player;
    var player2 = new player;

    $("#currentPlayer").text("Player " + number);
    players.push(player1);
    players.push(player2);
  });

  $("#roll").click(function() {
    game.game(players[at])
  });

  $("#hold").click(function() {
    players[at].points += players[at].diceData;

    players[at].diceData = 0;

    number++;
    at++;

    if (at >= players.length) {
      at = 0;
      number = 1;
    }

    $("#currentPoint").text("Current Point: " + players[at].points);
    $("#Point").text("Point: " + 0);
    $("#currentPlayer").text("Player " + number);

  });
});

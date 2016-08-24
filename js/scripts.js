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
  } else {
    currentPlayer.diceData += dice;
  }

  displays();

  if (currentPoint.points >= 100) {
    $("#win").text("you win");
  }

}

var game = new pigDice();

var players = [];

var at = 0;

var number = 1;

var displays = function () {
  $("#currentPoint").text("Current Point: " + players[at].points);
  $("#currentPlayer").text("Player " + number);
  $("#Point").text("Point: " + players[at].diceData);

}

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
    if (players[at].points >= 20) {
      $("#win").text("You win Player " + number);
      $("#hold").hide();
      $('#roll').hide();
      $("#currentPoint").hide();
      $("#currentPlayer").hide();
      $("#Point").hide();
    } else {
      players[at].diceData = 0;

      number++;
      at++;

      if (at >= players.length) {
        at = 0;
        number = 1;
      }
      displays();
    }
  });
});

// Business Logic
var pigDice = function () {
  this.dicePoints = 0;
}

// user input
var player = function () {
  this.points = 0;
  this.diceData = 0;
  this.ai = false;
}

player.prototype.adder = function (dice) {
  this.diceData += dice;
}

player.prototype.aiHolder = function () {
  if (this.diceData >= 6) {
    this.points += this.diceData;
    players[at].diceData = 0;

    if (this.points >= 20) {
      $("#win").text("You win Player " + number);
      $("#hold").hide();
      $('#roll').hide();
      $("#currentPoint").hide();
      $("#currentPlayer").hide();
      $("#Point").hide();
      return true;
    } else {
      number++;
      at++;

      if (at >= players.length) {
        at = 0;
        number = 1;
      }
      displays();

      return false;
    }
  } else {
    return true;
  }
};

pigDice.prototype.game = function (currentPlayer) {

  ai = true;

  while (ai) {
    var points = 0;
    var dice = Math.floor((Math.random() * 6) + 1);
    if (dice === 1) {
      currentPlayer.diceData = 0;
      at++;
      number++;

      ai = false;

      if (at >= players.length) {
        at = 0;
        number = 1;
      }
    } else {
      currentPlayer.diceData += dice;
    }

    if (currentPoint.points >= 100) {
      $("#win").text("you win");
    } else if (currentPlayer.ai && ai && !(currentPoint.points >= 100)) {
      console.log("AI Dice: " + currentPlayer.diceData);
      ai = currentPlayer.aiHolder();
    } else {
      ai = false;
      displays();
    }
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
  console.log(players);
}

// User Interface Logic
$(document).ready(function() {

  $("#start").click(function () {
    $("#start").hide();
    $("#roll").show();
    $("#hold").show();

    var player1 = new player;
    var player2 = new player;
    player2.ai = true;

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

      if (players[at].ai) {
        game.game(players[at]);
      }
    }
  });
});

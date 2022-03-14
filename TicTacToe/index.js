const firstPlayer = "X";
const secondPlayer = "O";
const tiles = document.querySelectorAll(".tiles");
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let circle_turn = true;
startGame();
// nextPlayerTurn();

function startGame() {
  tiles.forEach((tile) => {
    tile.addEventListener(
      "click",
      (e) => {
        const tile = e.target;
        const currentPlayer = circle_turn ? firstPlayer : secondPlayer;
        currentPlace(tile, currentPlayer);
        if (checkWin(currentPlayer)) {
          alert("winner");
        }
        //   endGame(draw);
        // } else if (isDraw()) {
        //   endGame(true);
        // } else {
        //   //   nextPlayerTurn();
        // }
        nextPlayerTurn();
      },
      { once: true }
    );
  });
}

function endGame(draw) {
  if (draw) {
    alert("draw");
  } else {
    alert("winner");
  }
}

function currentPlace(tile, currentPlayer) {
  tile.classList.add(currentPlayer);
  tile.innerText = currentPlayer;
}

function nextPlayerTurn() {
  circle_turn = !circle_turn;
}

function checkWin(currentPlayer) {
  return winner.some((combination) => {
    return combination.every((index) => {
      return tiles[index].classList.contains(currentPlayer);
    });
  });
}

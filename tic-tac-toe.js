let player = 'X'; 
let gameState = [null, null, null, null, null, null, null, null, null];

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const statusDiv = document.getElementById('status');

  squares.forEach((square, index) => {
    square.classList.add('square');

    square.addEventListener('click', () => {
      if (gameState[index] === null) {
        gameState[index] = player;
        square.textContent = player;
        square.classList.add(player);

        const winner = winnerCheck();
        if (winner) {
          statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
          statusDiv.classList.add('you-won');
        } else {
        if (player === 'X') {
          player = 'O';
         } else {
          player = 'X';
        }
        }
      }
    });


    square.addEventListener('mouseover', () => {
      square.classList.add('hover');
    });
    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
    });
  });

  function winnerCheck() {
    const winMoves = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];

    for (let moves of winMoves) {
      const [a,b,c] = moves;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }
});

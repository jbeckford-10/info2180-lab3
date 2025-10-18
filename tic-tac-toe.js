
let player = 'X'; 
let gameState = [null, null, null, null, null, null, null, null, null];

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  
  squares.forEach((square, index) => {
    square.classList.add('square');
    square.addEventListener('click', () => {
      if (gameState[index] === null) {
        gameState[index] = player;
        square.textContent = player;
        square.classList.add(player);
        if (player === 'X') {
          player = 'O';
         } else {
          player = 'X';
        }
      }
      squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
          square.classList.add('hover');
    });
    square.addEventListener('mouseout', () => {
      square.classList.remove('hover');
  });
});

    });
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  squares.forEach(square => {
    square.classList.add('square');
  });
  
});
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
    });
  });
});


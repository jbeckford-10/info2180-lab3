// tic-tac-toe.js

window.addEventListener("DOMContentLoaded", () => {
    // Select all squares and the status message
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");

    let currentPlayer = "X"; // Start with X
    let gameActive = true;
    let board = Array(9).fill(null); // Track game state

    // ---- Exercise 1: Layout the board ----
    squares.forEach(square => {
        square.classList.add("square");
    });

    // ---- Exercise 2: Add X or O on click ----
    squares.forEach((square, index) => {
        square.addEventListener("click", () => {
            if (!gameActive || board[index] !== null) return; // Exercise 6: Disallow cheating

            board[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (checkWinner(currentPlayer)) {
                status.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                status.classList.add("you-won");
                gameActive = false;
                return;
            }

            // Switch player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        // ---- Exercise 3: Hover effect ----
        square.addEventListener("mouseover", () => {
            if (gameActive && !board[index]) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });
    });

    // ---- Exercise 4: Check for the winner ----
    function checkWinner(player) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combo =>
            combo.every(index => board[index] === player)
        );
    }

    // ---- Exercise 5: Restart the game ----
    newGameButton.addEventListener("click", () => {
        board.fill(null);
        gameActive = true;
        currentPlayer = "X";
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");

        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });
    });
});

let counters = 10;
let userTurn = false;

function setUserFirst() {
    userTurn = true;
    document.getElementById("userFirstBtn").disabled = true;
    document.getElementById("computerFirstBtn").disabled = true;
    document.getElementById('hardMode').disabled = true;
    document.getElementById("resultMsg").innerText = "";
}

function setComputerFirst() {
    userTurn = false;
    document.getElementById("userFirstBtn").disabled = true;
    document.getElementById("computerFirstBtn").disabled = true;
    document.getElementById('hardMode').disabled = true;
    document.getElementById("resultMsg").innerText = "";
    computerMove();
}

function makeMove(move) {
    if (userTurn && move > 0 && move <= Math.min(2, counters)) {
        counters -= move;
        updateCounterDisplay();
        if (counters === 0) {
            displayResult("You Win!<button class=\"btn\" onclick=\"newGame()\">Play Again</button>");
        } else if (counters === 3 && document.getElementById('hardMode').checked == true) {
            displayResult("3-counter Rule: You Win!<sup><i style=\"text-decoration: underline\" title=\"3-counter Rule: Your opponent cannot win because regardless whether they take 1 or 2 counters, you can win.\">i</i></sup><button class=\"btn\" onclick=\"newGame()\">Play Again</button>");
        } else {
            userTurn = false;
            computerMove();
        }
    }
}

function computerMove() {
    let move;
    if (document.getElementById('hardMode').checked == false) {
        move = Math.floor(Math.random() * Math.min(2, counters)) + 1;
    } else {
        switch (counters) {
            case 10:
                move = 1;
                break;
            case 9:
                move = 2;
                break;
            case 8:
                move = 2;
                break;
            case 7:
                move = 1;
                break;
            case 6:
                move = 2;
                break;
            case 5:
                move = 2;
                break;
            case 4:
                move = 1;
                break;
            case 3:
                move = 2;
                break;
            case 2:
                move = 2;
                break;
            case 1:
                move = 1;
                break;
        }
    }
    counters -= move;
    updateCounterDisplay();
    if (counters === 0) {
        displayResult("Computer Wins!<button class=\"btn\" onclick=\"newGame()\">Play Again</button>");
    } else if (counters === 3 && document.getElementById('hardMode').checked == true) {
        displayResult("3-counter Rule: Computer Wins!<sup><i style=\"text-decoration: underline\" title=\"3-counter Rule: You cannot win because regardless whether they take 1 or 2 counters, you can win.\">i</i></sup><button class=\"btn\" onclick=\"newGame()\">Play Again</button>");
    } else {
        userTurn = true;
    }
}

function updateCounterDisplay() {
    document.getElementById("counterDisplay").innerText = counters;
}

function displayResult(message) {
    document.getElementById("resultMsg").innerHTML = message;
}

function newGame() {
    counters = 10;
    userTurn = false;
    document.getElementById("userFirstBtn").disabled = false;
    document.getElementById("computerFirstBtn").disabled = false;
    document.getElementById('hardMode').disabled = false;
    document.getElementById("resultMsg").innerText = "";
    updateCounterDisplay();
}

document.getElementById("userFirstBtn").addEventListener("click", setUserFirst);
document.getElementById("computerFirstBtn").addEventListener("click", setComputerFirst);

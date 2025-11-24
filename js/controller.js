// Controller

function dropPiece(colIndex) {
    let piecePlaced = false;
    // Sjekker kolonne fra bunnen og oppover etter ledig plass for brikke
    for (let rowIndex = rowCount - 1; rowIndex >= 0; rowIndex--) {
        const index = rowIndex * colCount + colIndex;
        if (board[index] === 0) {
            board[index] = turn;
            piecePlaced = true;
            break;
        }
    }
    // Sjekk for vinn eller uavgjort
    if (piecePlaced === true) {
        if (hasWon()) {
                // Return brukes ikke her slik at koden fortsetter til updateView()
            } else if (isBoardFull()) {
                turn = 0;
            } else {
                turn = (turn === 1) ? 2 : 1;
            }
    }
    updateView();
}

function hasWon() {
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let colIndex = 0; colIndex < colCount; colIndex++) {
            const player = board[getBoardIndex(colIndex, rowIndex)];
            // Sjekker vertikal vinn-situasjon
            if (player != 0 && rowIndex <= 2) {
                if (
                    board[getBoardIndex(colIndex, rowIndex + 1)] === player &&
                    board[getBoardIndex(colIndex, rowIndex + 2)] === player &&
                    board[getBoardIndex(colIndex, rowIndex + 3)] === player
                ) {
                    turn = -player;
                    return true;
                }
            }
            // Sjekker horisontal vinn-situasjon
            if (player !=0 && colIndex <= 3) {
                if (
                    board[getBoardIndex(colIndex +1, rowIndex)] === player &&
                    board[getBoardIndex(colIndex +2, rowIndex)] === player &&
                    board[getBoardIndex(colIndex +3, rowIndex)] === player
                ) {
                    turn = -player;
                    return true;
                }
            }
            // Sjekker diagonal-vinn \-retning
            if (player != 0 && rowIndex <= 2 && colIndex <= 3) {
                if (
                    board[getBoardIndex(colIndex + 1, rowIndex + 1)] === player &&
                    board[getBoardIndex(colIndex + 2, rowIndex + 2)] === player &&
                    board[getBoardIndex(colIndex + 3, rowIndex + 3)] === player
                ) {
                    turn = -player;
                    return true;
                }
            }
            // Sjekker diagonal-vinn /-retning
            if (player != 0 && rowIndex <= 2 && colIndex >= 3) {
                if (
                    board[getBoardIndex(colIndex - 1,rowIndex + 1)] === player &&
                    board[getBoardIndex(colIndex - 2, rowIndex + 2)] === player &&
                    board[getBoardIndex(colIndex - 3, rowIndex + 3)] === player
                ) {
                    turn = -player;
                    return true;
                }
            }
        }
    }
}

// Sjekker uavgjort-situasjon
function isBoardFull() {
    for (let i =0; i < board.length; i++) {
        if (board[i] === 0) {
            return false;
        }
    }
    return true;
}
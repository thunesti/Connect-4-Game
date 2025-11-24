// Common

// Konverterer kolonne- og radindekser til en enkel, flat index
function getBoardIndex(colIndex, rowIndex) {
    if (colIndex < 0 || colIndex > 6) {
        return -1;
    }
    if (rowIndex < 0 || rowIndex > 5) {
        return -1;
    }
    return (rowIndex * colCount) + colIndex;
}

// Brukes bare av unit-testen
function createBoard(value = 0) { 
    return new Array(colCount * rowCount).fill(value); 
}


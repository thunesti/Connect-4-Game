// Model

const colCount = 7;
const rowCount = 6;

let turn = 1; // 1 = player 1
              // 2 = player 2 
              // 0 = game over, ingen har vunnet
              // -1 = game over, player 1 har vunnet
              // -2 = game over, player 2 har vunnet

// Originalt brett, påbegynt spill
let board = [
    0, 0, 0, 0, 0, 0, 0, // øverste rad
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 2, 0, 0, // nederste rad
];

// Nullstiller brett, nytt spill
function newGame() {
    board = [
    0, 0, 0, 0, 0, 0, 0, // øverste rad
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, // nederste rad
    ];
}
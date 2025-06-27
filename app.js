const board = document.querySelector("#board");
const width = 8;

// prettier-ignore
const setup = [
  "rook","knight","bishop","queen","king","bishop","knight","rook",
  "pawn","pawn","pawn","pawn","pawn","pawn","pawn","pawn",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "pawn","pawn","pawn","pawn","pawn","pawn","pawn","pawn",
  "rook","knight","bishop","queen","king","bishop","knight","rook",
];

function createBoard() {
  setup.forEach((piece, i) => {
    const sqaure = document.createElement("div");
    sqaure.classList.add("square");
    sqaure.innerHTML = piece;
    sqaure.setAttribute("sqaure-id", i);
    sqaure.classList.add("white");
    board.append(sqaure);
  });
}
createBoard();

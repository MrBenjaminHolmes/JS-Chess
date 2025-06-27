import { king, queen, bishop, rook, pawn, knight } from "./pieces.js";

const board = document.querySelector("#board");
const width = 8;

// prettier-ignore
const setup = [
  rook,knight,bishop,queen,king,bishop,knight,rook,
  pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  pawn,pawn,pawn,pawn,pawn,pawn,pawn,pawn,
  rook,knight,bishop,queen,king,bishop,knight,rook,
];

function createBoard() {
  setup.forEach((piece, i) => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = piece;
    square.setAttribute("square-id", i);
    board.append(square);
    const row = Math.floor((63 - i) / 8) + 1;
    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "light" : "dark");
    } else {
      square.classList.add(i % 2 === 0 ? "dark" : "light");
    }
  });
}
createBoard();

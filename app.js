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
    const row = Math.floor((63 - i) / 8) + 1;

    square.classList.add("square");
    square.innerHTML = piece;

    square.setAttribute("square-id", i);
    board.append(square);

    if (row % 2 === 0) {
      square.classList.add(i % 2 === 0 ? "light" : "dark");
    } else {
      square.classList.add(i % 2 === 0 ? "dark" : "light");
    }
    console.log(square.children[0]);
    if (i <= 15) {
      square.children[0].classList.add("black");
    }
    if (i >= 48) {
      square.children[0].classList.add("white");
    }
  });
}
createBoard();

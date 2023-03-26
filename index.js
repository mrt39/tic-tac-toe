// Module for gameboard
//using a module for this because there will be only 1 gameboard
const Gameboard = (() => {
  gameboard = []
  return {
/*     add,
    sub,
    mul,
    div, */
  };
})();


// Factory function for creating player models
// using a factory for this because there will be multiple players (user and computer)
const playerFactory = (name) => {
  let moves = []

  const makeMove = move => {
    moves.push(move)
  };

  return { name, makeMove, moves };
};


const user = playerFactory ("User");
user.makeMove(3)
console.log(user.moves[0])
console.log(user.name)
user.name = "Keko"
console.log(user.name)



const Gameflow = (() => {
  gameboard = []
  return {
/*     add,
    sub,
    mul,
    div, */
  };
})();

//when the user clicks on a box, fill the box and also make the computer randomly fill a box
const allBoxes = document.querySelectorAll(".gameBox")
allBoxes.forEach(function (box) {
  box.addEventListener("click", () => {
    box.innerHTML = "X";
  });
});
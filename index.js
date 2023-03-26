//Module for Gameboard
//using a module for this because there will be only 1 gameboard
const Gameboard = (() => {
  let totalMoveCount = 0
  const boxesOccupiedByX = []
  const boxesOccupiedByO = []
  const availableBoxes = []
  return {
    totalMoveCount,
    boxesOccupiedByX,
    boxesOccupiedByO,
    availableBoxes,
  };
})();


// Factory function for creating player models
// using a factory for this because there will be multiple players (user and computer)
const playerFactory = (name) => {

  let sideX = true //which side, X or O. if X, this will return true.

  const makeMove = boxNumber => {
    Gameboard.boxesOccupiedByX.push(boxNumber)
  }; 

  return { name, sideX, makeMove };
};

//Create two player models, user and computer. their side will be decided by the user.
const user = playerFactory ("User");
const computer = playerFactory ("Computer");




//----------------------------PICKING SIDES--------------------------------- 
//User is presented with a choice, picking either X or O. 

const pickingSideSection = document.querySelector("#pickingSidesContainer")
const bothSides = document.querySelectorAll(".side")
const gameBoardSection = document.querySelector("#numpadContainer")

bothSides.forEach(button => {
  button.addEventListener('click', function (){
      

    //see which side  user has picked, arrange the "sideX" property within the computer and user objects according to that
    var buttoninnerHTML = this.innerHTML;   
    if (buttoninnerHTML === "X"){
      console.log("User picked X");
      computer.sideX = false
    }
    else if (buttoninnerHTML === "O"){
      console.log("User picked O");
      user.sideX = false
    }

    //After user picks, selection div becomes invisible and gameboard becomes visible.
    pickingSideSection.className = "hidden";
    gameBoardSection.className ="hidden";
    setInterval(() => {
      pickingSideSection.style.display = "none";
    }, "500");
    setInterval(() => {
      gameBoardSection.style.display = "block";
      gameBoardSection.className ="visible";
    }, "500");
  
  });
});







//----------------------------GAME SCRIPT--------------------------------- 
//when the user clicks on a box, fill the box 
const allBoxes = document.querySelectorAll(".gameBox")
allBoxes.forEach(function (box) {
  box.addEventListener("click", () => {

    //if user is side X, fill the box with an X and record user's move into "boxesOccupiedByX" array
    if (user.sideX === true){
      box.innerHTML = "X";
    }
    else{
      box.innerHTML = "O";
    }
    //record user's choice on the gameboard array


    //eliminate player's choice from the choices of boxes to fill

    //randomly choose one from the rest of the available boxes and fill it for computer
  });
});


//Module for Gameboard
//using a module for this because there will be only 1 gameboard
const Gameboard = (() => {
  let totalMoveCount = 0
  const boxesOccupiedByX = []
  const boxesOccupiedByO = []
  const availableBoxes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
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

/*   const makeMove = boxNumber => {
    Gameboard.boxesOccupiedByX.push(boxNumber)
  };  */

  return { name, sideX };
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

    //variable for getting the number of the box user has clicked on
    const boxNumber = box.dataset.display

    //if the box user has pressed is not in the "availableBoxes" array, do nothing
    const validMove = Gameboard.availableBoxes.indexOf(boxNumber);
    if (validMove == -1){
      return
    }


    //---------USER'S MOVE-------------
    //if user is side X, fill the box's innerhtml with X 
    if (user.sideX === true){
      makingMove("X", boxNumber)
    }
    //if user is side O, fill the box's innerhtml with O 
    else{
      makingMove("O", boxNumber)
    }

    //checkWin function 
    
    //see if the move count has reached 9, if it did, end the game with a draw


    //---------COMPUTER'S MOVE-------------
    //randomly choose an element from the "availableBoxes" array (which will have a box number for us).
    const randomBoxNumber = Gameboard.availableBoxes[Math.floor(Math.random() * Gameboard.availableBoxes.length)];
    console.log("computer chooses " + randomBoxNumber)

    //if computer is side X, fill the box's innerhtml with X
    if (computer.sideX === true){
      makingMove("X", randomBoxNumber)
    }
    //if computer is side O, fill the box's innerhtml with X
    else{
      makingMove("O", randomBoxNumber)
    }
    
    
    //checkWin function 

  });
});




//function for executing the moves of the players
function makingMove(side, moveBoxNumber) {
  //select the box element based on the number passed
  const chosenBox = document.getElementById("box"+moveBoxNumber)

  if (side === "X"){
    //fill the box's innerhtml with X
    chosenBox.innerHTML = "X";

    //record user's move into "boxesOccupiedByX" array
    Gameboard.boxesOccupiedByX.push(moveBoxNumber)
    console.log("X boxes: " + Gameboard.boxesOccupiedByX)
    //remove the box number from "availableBoxes" array
    const index = Gameboard.availableBoxes.indexOf(moveBoxNumber);
    Gameboard.availableBoxes.splice(index,1);
    console.log("Available boxes: " + Gameboard.availableBoxes)
    //increase the move count
    Gameboard.totalMoveCount++
    console.log("Move count: " + Gameboard.totalMoveCount)
  }

  else if (side === "O"){
    //fill the box's innerhtml with O
    chosenBox.innerHTML = "O";

    //record the move into "boxesOccupiedByO" array
    Gameboard.boxesOccupiedByO.push(moveBoxNumber)
    console.log("O boxes: " + Gameboard.boxesOccupiedByO)
    //remove the box number from "availableBoxes" array
    const index = Gameboard.availableBoxes.indexOf(moveBoxNumber);
    Gameboard.availableBoxes.splice(index,1);
    console.log("Available boxes: " + Gameboard.availableBoxes)
    //increase the move count
    Gameboard.totalMoveCount++
    console.log("Move count: " + Gameboard.totalMoveCount)
  }
}
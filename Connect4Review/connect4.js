/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

var WIDTH = 7;
var HEIGHT = 6;

let totalCells = WIDTH * HEIGHT

var currPlayer = 1; // active player: 1 or 2
var board = []; // array of rows, each row is array of cells  (board[y][x])

let currentPlayerDisplay = document.getElementById('currPlayer')
/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for(let y=0; y<HEIGHT; y++) {
    board.push([])
    for(let x=0; x<WIDTH; x++){
      board[y][x] = 0
    }
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  let htmlBoard = document.querySelector('#board')

  // set up top row with listeners to select which column to add piece to
  var top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  for (var x = 0; x < WIDTH; x++) {
    var headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // set up individual ids for each cell in table that correspond to board matrix
  for (var y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (var x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  //find colum and then find first non zero entry in that column
  // if we don't find one - then the HEIGHT-1 will be returned since all cells are empty
  for(let i=0; i<HEIGHT; i++) {
    if(board[i][x] !== 0) {
      if(i-1 === -1) {
        //return null if column is full
        return null
      } else {
        return i-1
      }
    }
  }
  return HEIGHT-1
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // grab appropraite cell
  const cell = document.getElementById(`${y}-${x}`)
  // make a div and insert into correct table cell
  const newPiece = document.createElement('div')
  // append css classes to fill cell
  newPiece.classList.add('piece', `player${currPlayer}`)  
  //update board
  cell.appendChild(newPiece)
}

/** endGame: announce game end */

function endGame(msg) {
  // pop up alert message
  //use a timeout so cell can be filled before announcing end of game
  updateDisplay(`Player ${currPlayer} has won the Game !`)
  setTimeout(() => {
    alert(msg)
  }, 100)
  
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  //prevent any bubbling
  evt.preventDefault();
  
  // get x from ID of clicked cell
  var x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  var y = findSpotForCol(x);
  if (y === null) {
    return;
  } else {
    // place piece in board and add to HTML table
    placeInTable(y, x);
    // and update in-memory board
    board[y][x] = currPlayer
  }
  // check for win
  if (checkForWin()) {
    return endGame(`Player ${currPlayer} won !`);
  } 
  currPlayer === 1 ? currPlayer = 2 : currPlayer = 1
  updateDisplay(`Player ${currPlayer} has the board !`)
  totalCells--

  // check for tie
  if(totalCells === 0) {
    endGame('It is a tie')
    updateDisplay('Nobody won and nobody lost... tie !')
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }


  //we start at the upper left hand corner and look for a 'string' of 4 consecutive player1(1) or player(2) in all directions
  //to do that we take each cell and grab 4 cells in each direciton 
  //we then take this array of 4 cells in each direction and pass them individually (the array of consecutive cells) to _win(array)
  //_win(array) is a helper function that uses the 'every' Array Method to make sure we have 4 consecutive player entries in our 2D board - being careful not to exceed the height and width of the grid
  for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

const updateDisplay = (mssg) => {
  currentPlayerDisplay.innerText = mssg
}

makeBoard();
makeHtmlBoard();
updateDisplay('Player 1 - get it poppin !')

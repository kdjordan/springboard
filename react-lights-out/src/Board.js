import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function resetGame() {
  window.location.reload();
}

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());
  let key = 0
  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for( let i=0; i < nrows; i++) {
      initialBoard.push([])
      for (let j=0; j < ncols; j++) {
        let random_boolean = Math.random() < chanceLightStartsOn
        if(random_boolean) {
          initialBoard[i][j] = true
        } else {
          initialBoard[i][j] = false
        }
      }
    }
    return initialBoard;
  }
  //check the board in state to determine whether the player has won.
  function hasWon() {
    const checkWin = (cell) => {return cell === false }
    
    let won
    for (const row of board) {
      won = row.every(checkWin)
    }
    console.log('return ', won)
    return won
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      //Make a (deep) copy of the oldBoard
      let boardCopy = []
      oldBoard.forEach((row, index) => {
        boardCopy[index] = [...row]
      }) 
  
      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      //In the copy, flip this cell and the cells around it
      flipCell(y,x, boardCopy)
      //check left
      if(x - 1 >= 0) flipCell(y, x - 1, boardCopy)
      //check right
      if(x + 1 < nrows) flipCell(y, x + 1, boardCopy)
      // //check top
      if(y - 1 >= 0) flipCell(y - 1, x, boardCopy)
      // //check bottom
      if(y + 1 < ncols) flipCell(y + 1, x, boardCopy)

      //return the copy
      return boardCopy
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if(hasWon()) {
   return (
    <div>
      <h1>YOU WIN !</h1>
      <button className="Board-button" onClick={resetGame}>NEW GAME</button>
    </div>
   )

  } else {
    return(
      <div className="Board">
        <h1 className="Board-heading">Let's Play KnockOut !</h1>
        <table cellSpacing="15">
          <tbody>
          {board.map((row, indexX) => {
              return (
                <tr>
                {row.map((cell, indexY) => {
                  key++
                    return  (
                      <Cell num={key} flipCellsAroundMe={() => flipCellsAround(`${indexX}-${indexY}`)} isLit={cell} />
                    )
                })}
                </tr>
              )  
          })}
          </tbody>
        </table>
        <button className="Board-button" onClick={resetGame}>NEW GAME</button>
      </div>
    
    )
  }
}

export default Board;

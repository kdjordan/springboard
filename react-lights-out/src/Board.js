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

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for( let i=0; i < nrows; i++) {
      initialBoard.push([])
      for (let j=0; j < ncols; j++) {
        let random_boolean = Math.random() < chanceLightStartsOn
        if(random_boolean) {
          initialBoard[i][j] = '0'
        } else {
          initialBoard[i][j] = '.'
        }
      }
    }
    return initialBoard;
  }

  function hasWon() {
    const checkWin = (cell) => {return cell === '.' }
    // TODO: check the board in state to determine whether the player has won.
    let won
    for (const row of board) {
      won = row.every(checkWin)
    }
    return won
  }

  function flipCellsAround(coord) {
    console.log('checking', coord)
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if(hasWon()) {
   return (
    <div>
      <h1>Won</h1>
    </div>
   )

  } else {
    return(
      <div className="Board">
        <h1 className="Board-heading">Let's Play KnockOut !</h1>
        <table>
          <tbody>
          {board.map((row, indexX) => {
              return (
                <tr>
                {row.map((cell, indexY) => {
                    return  (
                      <td>
                        <Cell flipCellsAroundMe={() => flipCellsAround(`${indexX}-${indexY}`)} isLit={cell === '.' ? false : true} />
                      </td>
                    )
                })}
                </tr>
              )  
          })}
          </tbody>
        </table>
      </div>
    
    )
  }
}

export default Board;

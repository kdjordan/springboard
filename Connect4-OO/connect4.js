class Game {
  constructor(p1, p2, height, width) {
    this.players = [p1, p2]
    this.height = height
    this.width = width
    this.currPlayer = this.players[0].id
    this.board = []
    this.gameLive = false
    this.makeBoard()
    this.makeHtmlBoard()
    this.startGame()
  }

  setPlayerColor() {
    document.querySelector('#p1Color').value = this.players[0].color
    document.querySelector('#p2Color').value = this.players[1].color
  }

  makeBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    this.handleClick = this.handleClick.bind(this)
    top.addEventListener('click', this.handleClick);
  
    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
  
      board.append(row);
    }
   
  }
  resetGame() {
    document.getElementById('board').innerHTML = ''
    this.board = []
    this.makeBoard()
    this.makeHtmlBoard()
    this.gameLive = true
  }
  
  startGame() {
    document.querySelector('h3').innerText = 'LET US RUMBLE !'
    document.querySelector('#p1Name').innerText = `:: ${this.players[0].name}`
    document.querySelector('#p2Name').innerText = `:: ${this.players[1].name}`
    document.querySelector('#p1Name').style.color = `${this.players[0].color}`
    document.querySelector('#p2Name').style.color = `${this.players[1].color}`
    
    //switch display
    let inputs = document.querySelectorAll('input')
    inputs.forEach(el => {
      el.classList.toggle('none')
    })

    let spans = document.querySelectorAll('span')
    spans.forEach(span => {
      span.classList.toggle('none')
    })
    this.gameLive = true
  }

  findSpotForCol(x){
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece', `p${this.currPlayer.id}`);
    piece.style.backgroundColor = `${this.players[this.currPlayer-1].color}`
    piece.style.top = -50 * (y + 2);
    const spot = document.getElementById(`${y}-${x}`);
    spot.appendChild(piece);
  }


  endGame(msg) {
    this.gameLive = false
    setTimeout(() => {
      alert(msg);
      this.resetGame()
    }, 200)
  }

  handleClick(evt) {
    // get x from ID of clicked cell
    if(this.gameLive) {
      const x = +evt.target.id;
      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
      if (y === null) {
        return;
      }
    
      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);
      
      // check for win
      if (this.checkForWin()) {
        return this.endGame(`Player ${this.currPlayer} won!`);
      }
      
      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return endGame('Tie!');
      }
        
      // switch players
      this.currPlayer = this.currPlayer === this.players[0].id ? this.players[1].id : this.players[0].id;
    }
  }

  checkForWin() {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    const _win = (cells) => cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.height &&
        x >= 0 &&
        x < this.width &&
        this.board[y][x] === this.currPlayer
    );
  
  
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
          return true;
        }
      }
    }
  }
}

class Player {
  constructor(id, name, color) {
    this.id = id
    this.name = name
    this.color = color
  }
}

/**GAME RUN*/

let goBtn = document.querySelector('#go-btn')
document.querySelector('#p1Color').value = '#0000FF'
document.querySelector('#p2Color').value ='#FF0000'

goBtn.addEventListener('click', function() {
  let p1Name = document.querySelector('#player1name').value
  let p2Name = document.querySelector('#player2name').value
  let p1Color = document.querySelector('#p1Color').value
  let p2Color = document.querySelector('#p2Color').value
  if(p1Name === '' || p2Name === '') {
    alert("We Need Player Names !")
  } else {
    let player1 = new Player(1, p1Name, p1Color)
    let player2 = new Player(2, p2Name, p2Color)
    new Game(player1, player2, 6, 7)
    document.querySelector('#go-btn').remove()
  }


})

    



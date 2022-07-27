function createBoard() {
    let initialBoard = []
    for(let i=0; i < 5; i++) {
        console.log(initialBoard)
        initialBoard.push([])
      for (let j=0; j < 5; j++) {
        initialBoard[i][j] = '.'
        
        // let random_boolean = Math.random() < chanceLightStartsOn
        // if(random_boolean) {
        //   initialBoard[i][j] = '0'
        // } else {
        //   initialBoard[i][j] = '.'
        // }
      }
    }
    console.log(initialBoard instanceof Array)
  }

  createBoard()
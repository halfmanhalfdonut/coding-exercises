// https://www.codewars.com/kata/connect-four-who-won

let checkOpenSpaces = (board, rows, cols) => {
  let hasOpenSpaces = false;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === '-') {
        hasOpenSpaces = true;
        break;
      }
    }
  }
  
  return hasOpenSpaces;
};

let checkHorizontal = (board, rows, cols) => {
  let winner = null;
  
  for (let i = 0; i < rows; i++) {
    if (winner === null) {
      for (let j = 0, maxCols = cols - 3; j < maxCols; j++) {
        if (board[i][j] === '-') {
          continue;
        } else {
          let color = board[i][j];
          if (board[i][j + 1] === color && board[i][j + 2] === color && board[i][j + 3] === color) {
            winner = color;
            break;
          }
        }
      }
    } else {
      break;
    }
  }
  
  return winner;
};

let checkVertical = (board, rows, cols) => {
  let winner = null;
  
  for (let i = 0, maxRows = rows - 3; i < maxRows; i++) {
    if (winner === null) {
      for (let j = 0; j < cols; j++) {
        if (board[i][j] === '-') {
          continue;
        } else {
          let color = board[i][j];
          if (board[i + 1][j] === color && board[i + 2][j] === color && board[i + 3][j] === color) {
            winner = color;
            break;
          }
        }
      }
    } else {
      break;
    }
  }
  
  return winner;
};

let checkDiagonalAsc = (board, rows, cols) => {
  let winner = null;
  
  for (let i = 3; i < rows; i++) {
    if (winner === null) {
      for (let j = 0, maxCols = cols - 3; j < maxCols; j++) {
        if (board[i][j] === '-') {
          continue;
        } else {
          let color = board[i][j];
          if (board[i - 1][j + 1] === color && board[i - 2][j + 2] === color && board[i - 3][j + 3] === color) {
            winner = color;
            break;
          }
        }
      }
    } else {
      break;
    }
  }
  
  return winner;
};

let checkDiagonalDesc = (board, rows, cols) => {
  let winner = null;
  
  for (let i = 3; i < rows; i++) {
    if (winner === null) {
      for (let j = 3; j < cols; j++) {
        if (board[i][j] === '-') {
          continue;
        } else {
          let color = board[i][j];
          if (board[i - 1][j - 1] === color && board[i - 2][j - 2] === color && board[i - 3][j - 3] === color) {
            winner = color;
            break;
          }
        }
      }
    } else {
      break;
    }
  }
  
  return winner;
};

let connectFour = board => {
  let winner = null;
  let rows = board.length;
  let cols = board[0].length;
  
  winner = checkHorizontal(board, rows, cols);
  
  if (!winner) {
    winner = checkVertical(board, rows, cols);
  }
  
  if (!winner) {
    winner = checkDiagonalAsc(board, rows, cols);
  }
  
  if (!winner) {
    winner = checkDiagonalDesc(board, rows, cols);
  }
  
  if (!winner) {
    winner = checkOpenSpaces(board, rows, cols) ? 'in progress' : 'draw';
  }
  
  return winner;
};
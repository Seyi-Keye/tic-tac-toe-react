export function matchWinningCells(cells, type) {
  const patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [0,3,6],
    [2,5,8]
  ];

  let win = false;

  for(let i = 0; i<patterns.length; i++) {
    const result = patterns[i].filter((item) => {
      return cells[item] !== type;
    });

    if(!result.length) {
      win = true;
      break;
    }
  }
  return win;
}
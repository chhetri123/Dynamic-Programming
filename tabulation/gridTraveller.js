// Say that you are a traveler on 2D grid . You begain in the top_left corner and your goal is to travel to the bottom - right corner . You may only move down or right;

// In how many ways can you travel to a goal on a grid with dimensions m*n ?

//
const gridTraveller = (m, n) => {
  // its time complexity O(n*m)
  // Its space complexity O(n*m)
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      let current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }
  //   console.log(table);
  return table[m][n];
};
console.log(gridTraveller(1000, 50));

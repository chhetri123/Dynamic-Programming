function gridTraveller(n, m) {
  // It has time complexity O(2^(n+m) and space complexity O(n+m))
  if (n === 0 || m === 0) {
    return 0;
  }
  if (n === 1 && m === 1) {
    return 1;
  }

  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
}

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));

const gridTravel = (n, m, memo = {}) => {
  // It has time complexity O(N*M) and space complexity O(n+m)
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  const key = n + "," + m;
  if (key in memo) return memo[key];

  memo[key] = gridTravel(n - 1, m, memo) + gridTravel(n, m - 1, memo);
  return memo[key];
};

console.log(gridTravel(1, 1));
console.log(gridTravel(2, 3));
console.log(gridTravel(3, 2));
console.log(gridTravel(3, 3));
console.log(gridTravel(18, 18));
//  in terms of time complexity method 2 is suitable to use

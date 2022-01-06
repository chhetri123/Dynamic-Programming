function maximumSum(m, a, memo = {}) {
  if (m in memo) return memo[m];
  if (m.length <= 1) return m[0] % a;
  let sum = m.reduce((prev, curr) => prev + curr, 0) % a;
  for (let i = 1; i < m.length; i++) {
    let num = maximumSum(m.slice(i).concat(m.slice(0, i - 1)), a, memo);
    memo[m] = num;
    if (sum < num) {
      sum = num;
    }
  }
  memo[m] = sum;
  return sum;
}

console.log(maximumSum([3, 3, 9, 9, 5], 7));

// Kadane's Algorithm

// that takes parameter in a targetSum and an array of number as possible

// function returns an array containing the shortest combination of numbers thats add up eactly the targetSum

// if there is a tie for the shortest combination ,you may return any one of the shortest combinations
// let combination = [];

const bestSum = (targetSum, numbers) => {
  // it has time complexity O(n^m *m ) where m=number array length and
  // it has space complexity O(m^2)
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombinaion = bestSum(remainder, numbers);
    if (remainderCombinaion !== null) {
      let combination = [...remainderCombinaion, num];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};
// console.log(bestSum(5, [2, 3, 1]));
// console.log(bestSum(100, [1, 2, 5, 25]));

// memol versions

const bestSum1 = (targetSum, numbers, memo = {}) => {
  // it has a time complexity O(n*m^2)
  // it has a space complexity O(m^2)
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];
  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum1(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
console.log(bestSum1(5, [2, 3, 1]));
console.log(bestSum1(100, [1, 2, 5, 25]));

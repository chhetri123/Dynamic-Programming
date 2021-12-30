// How sum takes in  a targetSum and an array of numbers as aruments

// this function should return an array containing any combinatiom of elements that add up to exactly the targetSum. If  there is no combination thats add up to the targetSum ,then return null
function howSum1(targetSum, numbers) {
  // the time complexity of the function is O(n^m* m) where the m is length of the array and the extra m multiplication is because during the worst case of returning the array it would have m length and returns m times so ..)
  // the space complexit of the function is O(m+m)~O(m) in worst case
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult != null) {
      return [...remainderResult, num];
    }
  }
  return null;
}

// console.log(howSum1(5, [8, 6, 4, 1]));
// console.log(howSum1(300, [7, 14]));
const howSum = (targetSum, numbers, memo = {}, result = []) => {
  // the time complexity of this function is O(m^2*n)
  // space complexity O(m^2)
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo, result);
    if (remainderResult != null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum1(5, [3, 4, 1]));
console.log(howSum1(300, [7, 14]));

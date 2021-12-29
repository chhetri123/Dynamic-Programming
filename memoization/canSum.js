const canSum1 = (targetSum, numbers) => {
  //it has time complexity O(n^m) where n=array.length() and m=targetsum value
  // And also it has space complexity O(m) where m=number of levels in the tree
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) return true;
  }
  return false;
};

// console.log(canSum1(7, [2, 4]));
// console.log(canSum1(7, [5, 3, 7, 2, 4]));
// console.log(canSum1(8, [2, 4, 5, 3]));
// console.log(canSum1(300, [7, 14]));

const canSum = (targetSum, numbers, memo = {}) => {
  //  It has time complexity O(m*n) because of the memol object
  //And it has space complexity O(m);
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  if (targetSum in memo) return memo[targetSum];
  for (let num of numbers) {
    let remainder = targetSum - num;

    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 4]));
console.log(canSum(7, [5, 3, 7, 2, 4]));
console.log(canSum(8, [2, 4, 5, 3]));
console.log(canSum(300, [7, 14]));

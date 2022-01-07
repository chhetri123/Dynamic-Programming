// take targetSum and array of numbers as an arguments

// the function should return a boolean indicating whether or not it is possible to generate the targetSum using fron the array

// elements of array can be used as many time

const canSum = (targetSum, numbers) => {
  // its time complexity O(n*m) where m=length of number array  .
  // its space complexity O(n)
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        if (i + num <= targetSum) table[i + num] = true;
      }
    }
  }
  //   console.log(table);
  return table[targetSum];
};
console.log(canSum(7, [5, 3, 4]));
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // tru
console.log(canSum(7, [2, 41])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false

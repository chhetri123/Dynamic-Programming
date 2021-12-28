// method 2

/** It has a time complexity O(2^n)
 *
 * And it has space complexity O(n)
 */
function fibonaaci(n) {
  if ((n) => 2) {
    return 1;
  }
  return fibonaaci(n - 1) + fibonaaci(n - 2);
}
console.log(fibonaaci(50)); // it means it takes  2^50 steps i.e 1.12*10^15 which takes two much time and memory

//Method 2
/** And it has time complexity O(n)
 * And its space complexity O(n)
 */
function fib(n, memo = {}) {
  // memo parameter is the default paramater which creates the object and save the result in it

  if (n <= 2) {
    return 1;
  }
  if (n in memo) {
    //Because of this code block its check the wheather the value of particular key i.e n is present in that object or not if present it stops the further resursive function call and returns the
    return memo[n];
  }
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(2));
console.log(fib(7));
console.log(fib(6));
console.log(fib(50)); //it means it takes 100 steps to solve the problem

// so method 2 is far better than method 1
//And that method 2 called memoization method that memorize the repetated steps and return value without function call

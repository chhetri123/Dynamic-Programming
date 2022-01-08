function pickingNumbers(a) {
  // Write your code here

  // Find the longrst subarray where the absolute difference between any two element is less than or equal to 1
  // It has a time complexity O(n) where n length of array
  // It has sapce complexity O(n*m) where n length of array an frequency length
  a = a.split(" ").map(Number);

  const frequency = Array(101).fill(0);
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    let firstNumber = a[i];
    frequency[firstNumber]++;
  }

  for (let i = 1; i <= 100; i++) {
    result = Math.max(result, frequency[i] + frequency[i - 1]);
  }
  return result;
}
console.log(
  pickingNumbers(
    "14 18 17 10 9 20 4 13 19 19 8 15 15 17 6 5 15 12 18 2 18 7 20 8 2 8 11 2 16 2 12 9 3 6 9 9 13 7 4 6 19 7 2 4 3 4 14 3 4 9 17 9 4 20 10 16 12 1 16 4 15 15 9 13 6 3 8 4 7 14 16 18 20 11 20 14 20 12 15 4 5 10 10 20 11 18 5 20 13 4 18 1 14 3 20 19 14 2 5 13"
  )
);

// Write a function allConstruct(target, wordBank) that accepts a
// target string and an array of strings.

// The function should return a 2D array containing all of the ways
// that the target can be constructed by concatenating elements of
// the `wordBank` array. Each element of the 2D array should represent
// one combination that constructs the `target`.

// You may reuse elements of `wordBank as many times as needed.

function allConstruct(target, wordBank) {
  // its time complexity ~O(n^m,) where m=target.length && m=wordBank.length
  //  space complexity ~O(n^m)
  // Exponential complexity

  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0] = [[]];
  for (let i = 0; i <= table.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombination = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombination);
      }
    }
  }
  return table[target.length];
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// /
// [ 'ab', 'cd', 'ef' 1,
//['ab', 'c', 'def' 1,
// ["abc", "def"], ["abcd", "ef"];
// 1
//
//
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));

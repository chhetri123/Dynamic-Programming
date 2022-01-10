// Write a function `countConstruct(target, wordBank)` that accepts a
// target string and an array of strings.

// The function should return the number of ways that the target can
// be constructed by concatenating elements of the wordBank` array.

function countConstruct(target, wordBank) {
  // its time complexity O(m^2*m)  where m=target && n=wordBank.length
  // its space complexity O(m)
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[word.length + i] += table[i];
      }
    }
  }
  return table[target.length];
}
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeee",
    "eееее",
    "ееееее",
  ])
); // 0

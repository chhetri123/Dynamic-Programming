// function that accepts a target string and an arrays of string

// the function should return the number of ways that the target can be constructed by concating elements of the wordBank array

function countConstruct(targetString, wordBank) {
  // It has time complexity O(n^m*m) where n is wordBank length and m=length of targetString

  // space complexity O(m^2)
  if (targetString === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const numWays = countConstruct(targetString.slice(word.length), wordBank);
      totalCount += numWays;
    }
  }
  return totalCount;
}
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeeee",
    "eeee",
    "eeeeeee",
    "eeeee",
  ])
);

function countConstructMemo(targetString, wordBank, memo = {}) {
  // its time complexity O(n*m^2)
  // Its space complexity O(m^2)
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const numWays = countConstructMemo(
        targetString.slice(word.length),
        wordBank,
        memo
      );
      memo[targetString] = numWays;
      totalCount += numWays;
    }
  }
  memo[targetString] = totalCount;
  return totalCount;
}
console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstructMemo("skateboard", [
    "bo",
    "rd",
    "ate",
    "t",
    "ska",
    "sk",
    "boar",
  ])
);
console.log(
  countConstructMemo("enterapotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ])
);
console.log(
  countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeeee",
    "eeee",
    "eeeeeee",
    "eeeee",
  ])
);

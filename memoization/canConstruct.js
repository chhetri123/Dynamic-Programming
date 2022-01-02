// function that accepts a target string and an array of strings.

// function should return a boolean indicating whether or not the target can be constructed by concatenating elements of the wordbank array

const canConstruct1 = (target, wordBank) => {
  // It has time complexity O(n^m*m) where m=target length ,n=wordBank.length and the extra multiplication of m is because of slice method which copy the word for m times in wrost case .. \
  //  and the space complexity O(m^2)
  if (target === "") return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank)) {
        return true;
      }
    }
  }
  return false;
};
console.log(canConstruct1("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct1("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct1("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstruct1("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeeee",
    "eeee",
    "eeeeeee",
    "eeeee",
  ])
);

// momoize .

const canConstruct = (target, wordBank, memo = {}) => {
  // time complexity of this function O(n*m^2)
  // space complexity of this function O(m^2)
  if (target in memo) return memo[target];
  if (target === "") return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "ee",
    "eee",
    "eeeee",
    "eeee",
    "eeeeeee",
    "eeeee",
  ])
);

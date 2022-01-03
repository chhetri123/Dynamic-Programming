// Function that accepts a target string and array of strings

// / function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array
// Each elements of the 2D array should represent  one combination that construct the target

function allConstruct(targetString, wordBank) {
  // Its time complexity O(n^m )
  // its space complexity O(m);

  if (targetString === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank);
      const targetWays = suffixWays.map((ways) => [word, ...ways]);
      result.push(...targetWays);
    }
  }
  return result;
}
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// L
// ['purp', 'le' ],
// 'p', 'ur', 'p', 'le' ]
// 1
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// /
//['ab', 'cd', 'ef' ],
// ['ab', 'c', 'def' ],
// [ 'abc', 'def' ],
//['abcd ', 'ef' ]
// 1
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);

function allConstructMemo(targetString, wordBank, memo = {}) {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return [[]];
  const result = [];
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      const suffixWays = allConstructMemo(suffix, wordBank, memo);
      const targetWays = suffixWays.map((ways) => [word, ...ways]);
      result.push(...targetWays);
    }
  }
  memo[targetString] = result;
  return result;
}
console.log(allConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));
// L
// ['purp', 'le' ],
// 'p', 'ur', 'p', 'le' ]
// 1
console.log(
  allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
// /
//['ab', 'cd', 'ef' ],
// ['ab', 'c', 'def' ],
// [ 'abc', 'def' ],
//['abcd ', 'ef' ]
// 1
console.log(
  allConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstructMemo("aaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);

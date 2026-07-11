//O(N)
//O(N)
//optimal approach

const stringMatching = (s, p) => {
  if (s.length !== goal.length) return false;
  let doubleStr = s + s;
  if (doubleStr.includes(goal)) return true;
  return false;
};

console.log(stringMatching("abcde", "cdeab"));

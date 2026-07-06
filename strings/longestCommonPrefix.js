const longestCommonPrefix = (str) => {
  let res = "";
  let ptr = 0;
  while (ptr < str[0].length) {
    //O(K)
    for (let i = 1; i < str.length; i++) {
      //O(N)
      if (str[0][ptr] !== str[i][ptr]) {
        return res;
      }
    }
    res = res + str[0][ptr];
    ptr++;
  }
  return res;
};

// Time complexity is O(K*N)
// Space complexity is O(1) if we are not considering it the string that we created for returning

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

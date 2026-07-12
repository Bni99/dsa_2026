//O(N*N) AS STRING CONCATENATION
// O(N)

const reverseWords = (str) => {
  let arr = [];
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word = word + str[i];
    } else if (str[i] === " ") {
      if (word.length > 0) {
        arr.push(word);
        word = "";
      }
    }
  }
  if (word.length > 0) {
    arr.push(word);
  }
  let res = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== 0) res = res + arr[i] + " ";
    if (i == 0) res = res + arr[i];
  }
  return res;
};

// console.log(reverseWords("a good   example"));

// A little efficient than before

//O(N*N)
//O(1) ignoring the space used for returning

const optimalReverseWords = (str) => {
  let i = str.length - 1;
  let res = "";
  while (i >= 0) {
    while (i >= 0 && str[i] === " ") {
      i--;
    }
    if (i < 0) break;
    let end = i;
    while (i >= 0 && str[i] !== " ") {
      i--;
    }
    if (res.length > 0) {
      res = res + " ";
    }
    res = res + str.slice(i + 1, end + 1);

    console.log(res);
  }
  return res;
};
console.log(optimalReverseWords("a good   example"));

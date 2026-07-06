const largestOddNumber = function (str) {
  let end = str.length - 1;
  let start = 0;
  //O(N)
  while (end >= 0) {
    if (str[end] % 2 !== 0) {
      break;
    }
    end--;
  }
  //O(N)
  while (start <= end) {
    if (str[start] === "0") {
      start++;
    } else {
      break;
    }
  }
  //O(N) and since slice will create a new string so space complexity O(N)
  return str.slice(start, end + 1);
};

//space complexity : O(N)
//Time complexity : O(N)

console.log(largestOddNumber("00005347"));

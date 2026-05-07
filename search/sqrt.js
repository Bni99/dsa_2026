//Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// x = 4
// answer = 2

//Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

//O(1)

const bruteSquareRoot = (num) => {
  return Math.floor(num ** 0.5);
};

console.log(bruteSquareRoot(8));

//-------------------------------------

// But assuming we are not allowed this
// O(square root of n)
const linearSquareRoot = (num) => {
  let i = 0;
  if (num === 0) return 0;
  while (i * i <= num) {
    i++;
  }
  return i - 1;
};

console.log(linearSquareRoot(35));

//------------------------------------

//O(logn)
const binarySquareRoot = (num) => {
  if (num < 2) return num;
  let left = 2;
  let right = Math.floor(num / 2);
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (num === middle ** 2) return middle;
    else if (num < middle ** 2) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return right;
};

console.log(binarySquareRoot(35));

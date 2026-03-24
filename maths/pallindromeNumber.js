const reverseNumber = (num) => {
  let reversedNum = 0;
  while (num > 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.trunc(num / 10);
  }
  return reversedNum;
};

const pallindromeNumber = (num) => {
  if (num < 0) return false;
  const reversedNum = reverseNumber(num);
  return num === reversedNum;
};

console.log(pallindromeNumber(121));

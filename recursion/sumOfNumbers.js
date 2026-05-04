//O(N) since the function will be called n times
const sumOfNumbers = (num) => {
  if (num === 1) return 1;
  const sum = num + sumOfNumbers(num - 1);
  return sum;
};

console.log(sumOfNumbers(5));

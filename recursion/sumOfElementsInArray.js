const arr = [5, 3, 2, 0, 1];

const sumOfElements = (len) => {
  if (len === 0) return arr[0];
  const sum = arr[len] + sumOfElements(len - 1);
  return sum;
};

console.log(sumOfElements(4));

// Sum of odd elements

const sumOfOddElements = (n) => {
  const isOdd = arr[n] % 2 !== 0;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  const sum = (isOdd ? arr[n] : 0) + sumOfOddElements(n - 1);
  return sum;
};

console.log(sumOfOddElements(4));

const secondSmallestElement = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] > min) {
      secondMin = arr[i];
    }
  }
  return secondMin;
};

console.log(secondSmallestElement([3, 9, -2, 12, -2, 5]));

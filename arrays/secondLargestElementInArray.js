const findSecondLargest = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};

console.log(findSecondLargest([10, 20, 20]));

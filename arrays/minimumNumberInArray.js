const findMinimum = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

console.log(findMinimum([5, 0, 10, 8, 17, 1, -3, -2]));

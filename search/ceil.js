// The ceiling of x is the smallest element in the array greater than or equal to x

const ceil = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return nums[i];
    if (nums[i] > target) return nums[i];
  }
  return -1;
};

console.log(ceil([10, 20, 30, 40, 50], 51));

//--------------------------------------

const binaryCeil = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let ceil = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      ceil = Math.min(ceil, nums[mid]);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ceil;
};

console.log(binaryCeil([10, 20, 30, 40, 50], 51));

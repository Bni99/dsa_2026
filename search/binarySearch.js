// logN iterations

const binarySearch = (nums, target, left, right) => {
  if (left <= right && left < nums.length && right < nums.length) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      return binarySearch(nums, target, mid + 1, right);
    } else {
      return binarySearch(nums, target, left, mid - 1);
    }
  } else {
    return -1;
  }
};

console.log(binarySearch([0, 1, 2, 4, 9], 0, 0, 4));

/// Normal approach much easier

const binary = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

console.log(binary([0, 1, 2, 4, 9], 9));

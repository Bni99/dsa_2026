// Right Rotate by D places
// [1,2,3,4,5,6,7], k = 3
// [5,6,7,1,2,3,4]

// O(N+D)
// O(D)

const rightRotateByDPlaces = (nums, d) => {
  const n = nums.length;
  const temp = [];
  let i = n - d;
  while (i < n) {
    temp.push(nums[i]);
    i++;
  }
  let j = n - 1;
  let len = temp.length;
  while (j >= 0) {
    if (j > d - 1) {
      nums[j] = nums[j - d];
    } else {
      nums[j] = temp[len - 1];
      len--;
    }
    j--;
  }
  return nums;
};

console.log(rightRotateByDPlaces([1, 2, 3, 4, 5, 6, 7], 3));

//---------------------------------------------------------------

const reverse = (nums, start, end) => {
  while (start <= end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const optimizedRightRotateByDPlaces = (nums, d) => {
  reverse(nums, 0, d);
  reverse(nums, d + 1, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
  return nums;
};

console.log(optimizedRightRotateByDPlaces([1, 2, 3, 4, 5, 6, 7], 3));

// Rotate array by K elements

// [1, 2, 3, 4, 5, 6], k=2,

// [3, 4, 5, 6, 1, 2]

// O(len + d)
// O(d)

const leftRotateByDPlaces = (nums, d) => {
  const temp = [];
  const len = nums.length;
  d = d % len;

  let i = 0;
  while (i < d) {
    temp.push(nums[i]);
    i++;
  }

  let j = 0;
  let k = 0;
  while (j < len) {
    if (j < len - d) {
      nums[j] = nums[j + d];
    } else {
      nums[j] = temp[k];
      k++;
    }
    j++;
  }
  return nums;
};

console.log(leftRotateByDPlaces([1, 2, 3, 4, 5, 6], 3));
//---------------------------------------------------------------------------------

// O(2N)
// O(1)

const reverse = (nums, start, end) => {
  while (start <= end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const optimizedLeftRotateByDPlaces = (nums, d) => {
  reverse(nums, 0, d - 1);
  reverse(nums, d, nums.length - 1);
  reverse(nums, 0, nums.length - 1);
};

console.log(optimizedLeftRotateByDPlaces([1, 2, 3, 4, 5, 6], 3));

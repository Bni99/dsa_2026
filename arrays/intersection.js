// Time Complexity Analaysis
// Convert to hash O(N) +O(M)
// Checking intersection O(N)
// Converting back to array O(T) like suppose i have {2:3,4:2,6:2} so there is a loop as well while value >0 but this total will be below the length of intersection which will be Math.min(N+M)
// O(N+M)

//Space complexity
// O(N)
//O(M)
//O(T)
//O(T
//O(M+N)

const hash = (nums) => {
  let i = 0;
  const obj = {};
  while (i < nums.length) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
    i++;
  }
  return obj;
};

const convertToArray = (obj) => {
  const arr = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      arr.push(key);
    } else {
      let valueCopy = value;
      while (valueCopy > 0) {
        arr.push(key);
        valueCopy--;
      }
    }
  }
  return arr;
};

const intersection = (nums1, nums2) => {
  const obj1 = hash(nums1);
  const obj2 = hash(nums2);
  const obj3 = {};
  for (const [key, value] of Object.entries(obj1)) {
    if (obj2[key]) {
      obj3[key] = Math.min(value, obj2[key]);
    }
  }

  return convertToArray(obj3);
};

console.log(intersection([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));

//---------------------------------------------------------

// O(m)+O(N)
// O(k) where the number of elements are intersection -- O(n)

const optimalIntersection = (nums1, nums2) => {
  const n = nums1.length;
  const m = nums2.length;
  let i = 0;
  let j = 0;
  const res = [];
  while (i < n && j < m) {
    if (nums1[i] < nums2[j]) i++;
    else if (nums1[i] > nums2[j]) j++;
    else if (nums1[i] === nums2[j]) {
      res.push(nums1[i]);
      i++;
      j++;
    }
  }
  return res;
};

console.log(intersection([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7]));

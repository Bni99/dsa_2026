// Time complexity
// O(N)+O(M)+O(K)+O(k)log(k)[Inserting elements to set loop through n and m elements, spreading the set into array which we are assuming k are the number of elements in set and at last sorting the array ]
// By worst k = N+M every elemt is different
// O((N+M)+(N+M)+(N+M)log(N+M))
// O(2(N+M)+(N+M)log(N+M))
// O((N+M)(2+log(N+M)))
// 2 can be removed
// O(N+M)log(N+M)

//Space Complexity
//O(K) --> size of set O(N+M)

const union = (nums1, nums2) => {
  const res = new Set();
  for (let i = 0; i < nums1.length; i++) {
    res.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    res.add(nums2[i]);
  }
  return [...res].sort((a, b) => a - b);
};

console.log(union([1, 2, 3, 4, 5], [0, 2, 3, 6]));

//----------------------------------------------------

// Time Complexity -O(N+M)
// Space Complexity - O(N+M)

const optimalUnion = (nums1, nums2) => {
  const n = nums1.length;
  const m = nums2.length;
  const res = [];
  let i = 0;
  let j = 0;
  if (n === 0) return nums2;
  if (m === 0) return nums1;

  while (i < n && j < m) {
    if (nums1[i] <= nums2[j]) {
      if ((res.length > 0 && res.at(-1) !== nums1[i]) || res.length === 0) {
        res.push(nums1[i]);
      }
      i++;
    } else if (nums1[i] > nums2[j]) {
      if ((res.length > 0 && res.at(-1) !== nums2[j]) || res.length === 0) {
        res.push(nums2[j]);
      }
      j++;
    }
  }
  while (i < n) {
    if (res.length > 0 && res.at(-1) !== nums1[i]) {
      res.push(nums1[i]);
    }
    i++;
  }

  while (j < m) {
    if (res.length > 0 && res.at(-1) !== nums2[j]) {
      res.push(nums2[j]);
    }
    j++;
  }

  return res;
};

console.log(optimalUnion([1, 2, 3, 4, 5], [0, 2, 3, 6]));

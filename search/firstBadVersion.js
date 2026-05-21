const isBadVersion = (m) => {
  if (m > 4) return true;
  return false;
};

const firstBadVersion = (n) => {
  let l = 1;
  let r = n;
  let minIndex = Infinity;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (isBadVersion(m)) {
      minIndex = Math.min(minIndex, m);
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return minIndex;
};

console.log(firstBadVersion(12));

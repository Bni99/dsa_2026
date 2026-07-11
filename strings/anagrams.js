const anagram = (s, t) => {
  let obj1 = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]]) {
      obj1[s[i]] = obj1[s[i]] + 1;
    } else {
      obj1[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!obj1[t[i]]) {
      return false;
    } else if (obj1[t[i]]) {
      if (obj1[t[i]] === 1) {
        delete obj1[t[i]];
      } else {
        obj1[t[i]] = obj1[t[i]] - 1;
      }
    }
  }

  return Object.keys(obj1).length === 0;
};

//O(N)
//O(N)

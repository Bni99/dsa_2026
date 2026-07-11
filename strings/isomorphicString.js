const isomorphicString = (s, p) => {
  const obj1 = {};
  const obj2 = {};
  let res = "";

  if (s.length !== p.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!obj1[s[i]] && !obj2[p[i]]) {
      obj1[s[i]] = p[i];
      obj2[p[i]] = s[i];
      res = res + p[i];
    } else if (obj1[s[i]] && !obj2[p[i]]) {
      return false;
    } else if (!obj1[s[i]] && obj2[p[i]]) {
      return false;
    } else if (obj1[s[i]] === p[i]) {
      res = res + p[i];
    } else return false;
  }
  return res === p;
};

console.log(isomorphicString("paper", "title"));

if (s.length !== t.length) return false;
let obj1 = {};
let obj2 = {};
for (let i = 0; i < s.length; i++) {
  if (!obj1[s[i]]) {
    if (!obj2[t[i]]) {
      obj1[s[i]] = t[i];
      obj2[t[i]] = s[i];
    } else {
      return false;
    }
  } else if (obj1[s[i]]) {
    if (obj1[s[i]] !== t[i]) return false;
  }
}
return true;

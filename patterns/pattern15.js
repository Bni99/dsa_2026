//Pattern15
//
// 6 5 4 3 2 1 0
// 5 4 3 2 1 0
// 4 3 2 1 0
// 3 2 1 0
// 2 1 0
// 1 0
// 0

const pattern = () => {
  let str = "";
  for (let i = 0; i < 8; i++) {
    let k = 6 - i;
    for (let j = 0; j < 8; j++) {
      if (j < 7 - i) {
        str = str + k;
        k--;
      }
      str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

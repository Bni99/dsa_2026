//Pattern 16
//
//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2
//         1

const pattern = () => {
  let str = "";
  let k = 0;
  for (let i = 0; i < 9; i++) {
    let p = 1;
    for (let j = 0; j < 5; j++) {
      if (j >= 4 - k) {
        str = str + p;
        p++;
      } else {
        str = str + " ";
      }
    }
    if (i < 4) {
      k++;
    } else {
      k--;
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

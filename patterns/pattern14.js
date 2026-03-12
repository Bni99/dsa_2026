// Pattern 14
//
//       1
//     2 3 2
//   3 4 5 4 3
// 4 5 6 7 6 5 4

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    let k = i + 1;
    for (let j = 0; j < 7; j++) {
      if (j >= 3 - i && j <= 3 + i) {
        str = str + k;
        j < 3 ? k++ : k--;
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

//Pattern 24
//
//       1
//     2 1 2
//   3 2 1 2 3
// 4 3 2 1 2 3 4

const pattern = () => {
  let str = "";
  let k = 1;
  for (let i = 0; i < 4; i++) {
    let m = 0;
    for (let j = 0; j < 7; j++) {
      if (j >= 3 - i && j <= 3 + i) {
        str = str + (k - m);
        j < 3 ? m++ : m--;
      } else str = str + " ";
    }
    k++;
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

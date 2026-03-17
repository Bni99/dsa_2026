//Pattern20
//
//       1
//     1 2 A
//   1 2 3 A B
// 1 2 3 4 A B C

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    let k = 1;
    let m = 65;
    for (let j = 0; j < 8; j++) {
      if (j >= 3 - i && j <= 3 + i) {
        if (j <= 3) {
          str = str + k;
          k++;
        } else {
          str = str + String.fromCharCode(m);
          m++;
        }
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

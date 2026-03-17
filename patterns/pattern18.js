//Pattern 18
//
//       A 1
//     A B 1 2
//   A B C 1 2 3
// A B C D 1 2 3 4

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    let k = 65;
    let m = 1;
    for (let j = 0; j < 8; j++) {
      if (j >= 3 - i && j <= 4 + i) {
        if (j < 4) {
          str = str + String.fromCharCode(k);
          k++;
        } else {
          str = str + m;
          m++;
        }
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

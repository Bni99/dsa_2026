//Pattern 25
//
// 1
// 3 * 2
// 4 * 5 * 6
//10 * 9 * 8 * 7
//11 * 12 * 13 *14 *15
//

const pattern = () => {
  let str = "";
  let k = 1;
  for (let i = 0; i < 5; i++) {
    let s = k + i;
    for (let j = 0; j < 9; j++) {
      if (j <= 2 * i) {
        if (j % 2 === 0) {
          if (i % 2 === 0) {
            str = str + k;
            k++;
          } else {
            str = str + s--;
            k++;
          }
        } else {
          str = str + "*";
        }
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

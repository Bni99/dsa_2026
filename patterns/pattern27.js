//Pattern28
//    1
//   A B
//  1 2 3
// A B C D

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    let flag = 1;
    let k = 1;
    let m = 65;
    for (let j = 0; j < 7; j++) {
      if (j >= 3 - i && j <= 3 + i) {
        if (flag === 1) {
          if (i % 2 === 0) str = str + k++;
          else str = str + String.fromCharCode(m++);
          flag = 0;
        } else {
          str = str + " ";
          flag = 1;
        }
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

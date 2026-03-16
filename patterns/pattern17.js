// Pattern 17
//
//       A
//     A B A
//   A B C B A
// A B C D C B A

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    let k = 65;
    for (let j = 0; j < 7; j++) {
      if (j >= 3 - i && j <= 3 + i) {
        str = str + String.fromCharCode(k);
        j < 3 ? k++ : k--;
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

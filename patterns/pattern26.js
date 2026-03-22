//Pattern 26
//
//         A
//       C B
//     F E D
//   J I H G
// O N M L K

const pattern = () => {
  let str = "";
  let k = 65;
  for (i = 0; i < 5; i++) {
    let s = k + i;
    for (j = 0; j < 5; j++) {
      if (j >= 4 - i) {
        str = str + String.fromCharCode(s);
        s--;
        k++;
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

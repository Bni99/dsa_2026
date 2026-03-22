// Pattern 29

// ABCDEFG
// ABC EFG
// AB   FG
// A     G

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    let k = 65;
    for (let j = 0; j < 7; j++) {
      if (j <= 3 - i || j >= 3 + i) str = str + String.fromCharCode(k++);
      else {
        str = str + " ";
        k++;
      }
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());

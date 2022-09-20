const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const arr = [];
for (let i = 1; i <= Number(input); i++) {
  if (String(i).length <= 2) {
    arr.push(i);
  } else {
   ( Number(String(i)[1]) - Number(String(i)[0]) ) === ( Number(String(i)[2]) - Number(String(i)[1]) ) ?
   arr.push(i) : undefined
  }
}
console.log(arr.length);

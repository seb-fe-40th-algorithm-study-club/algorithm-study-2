const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath, "utf8")
  .trim()
  .split("\n")
  .map(Number);

let max = Math.max(...input);
console.log(max);

input.forEach((el, i) => {
  if (el === max) {
    console.log(i + 1);
  }
});

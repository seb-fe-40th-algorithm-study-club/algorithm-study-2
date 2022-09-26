const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
//같은 눈이 3개=>10,000+(숫자*1,000)
//같은눈 2개 =>1,000+(숫자*100)
//모두다름 =>가장큰 수 *100
if (a === b && b === c && a === c) {
  console.log(10000 + a * 1000);
} else if (a === b || b === c || a === c) {
  if (a === b || a === c) {
    console.log(1000 + a * 100);
  }
  if (c === b) {
    console.log(1000 + b * 100);
  }
} else if (a !== b && b !== c && a !== c) {
  let biggest = Math.max(a, b, c);
  console.log(biggest * 100);
}

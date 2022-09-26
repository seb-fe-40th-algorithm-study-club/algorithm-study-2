const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs")
  .readFileSync(filePath, "utf8")
  .trim()
  .split("\n")
  .map(Number);

//42로 나눴을 때 나머지가 다른 수들의 개수 출력

let remain = [];

for (let el of input) {
  remain.push(el % 42);
}
console.log(new Set(remain).size);

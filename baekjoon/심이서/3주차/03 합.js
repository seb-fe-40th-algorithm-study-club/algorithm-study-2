const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim();

let sum = 0;
for (let i = 1; i <= Number(input); i++) {
  sum += i;
}
console.log(sum);

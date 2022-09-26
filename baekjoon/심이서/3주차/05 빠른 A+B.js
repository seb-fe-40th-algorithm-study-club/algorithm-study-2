const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");
let sum = 0;
for (let i = 1; i <= Number(input[0]); i++) {
  let num = input[i].split(" ");
  sum += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(sum.slice(1));

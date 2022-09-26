const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

let num = input[1].split(" ").map((el) => Number(el));
num.sort((a, b) => a - b);

console.log(`${num[0]} ${num[num.length - 1]}`);

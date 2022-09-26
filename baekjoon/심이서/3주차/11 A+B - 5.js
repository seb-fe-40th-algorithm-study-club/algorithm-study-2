const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let num = input[i].split(" ");
  if (Number(num[0]) !== 0 && Number(num[1]) !== 0) {
    console.log(Number(num[0]) + Number(num[1]));
  }
}

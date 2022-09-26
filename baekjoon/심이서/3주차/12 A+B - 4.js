const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

input.forEach((item) => {
  let num = item.split(" ");
  console.log(Number(num[0]) + Number(num[1]));
});

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim();

for (let i = 1; i <= input; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  console.log(result);
}

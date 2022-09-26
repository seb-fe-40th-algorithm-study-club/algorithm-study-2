const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim();

let star = "";
for (let i = 1; i <= input; i++) {
  let blank = "";
  star += "*";

  for (let j = 1; j <= input - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
}

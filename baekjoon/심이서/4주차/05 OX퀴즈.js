const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

//0< n < 80
//OOXXOXXOOO -> 1+2+0+0+1+0+0+1+2+3 = 10

for (let i = 1; i <= input[0]; i++) {
  let sum = 0;
  let count = 0;
  for (let j = 0; j < input[i].length; j++) {
    // console.log("input[i][j]:" + input[i][j]);
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim();
// 0 <= n <= 99
// 26 => 2+6=8 => 68 => 6+8=14 => 84 => 8+4=12 => 42 => 4+2=6 =>26

let num = Number(input);
let i = 0;

while (true) {
  //10의자리수, 1의 자리수 구하기
  let sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  i++;
  if (num === Number(input)) {
    break;
  }
}
console.log(i);

const input = require("fs").readFileSync("dev/stdin", "utf8").trim();

//윤년? 1 : 0
//윤년 4의 배수 && 100의 배수가 아님
//400의 배수
let num = parseInt(input);
if (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)) {
  console.log(1);
} else {
  console.log(0);
}

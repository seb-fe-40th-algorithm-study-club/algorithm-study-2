const input = require("fs").readFileSync("/dev/stdin", "utf8").split(" ");

//A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

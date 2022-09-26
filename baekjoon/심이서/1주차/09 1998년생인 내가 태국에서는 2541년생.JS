const input = require("fs").readFileSync("/dev/stdin", "utf8").trim();

//불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램
//서기+544 => 불기
console.log(`${parseInt(input) - 543}`);

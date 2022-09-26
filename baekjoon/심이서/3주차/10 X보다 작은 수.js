const { resourceLimits } = require("worker_threads");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split(/\s+/);

//첫번째 => 숫자개수
//두번째 수 보다 작은수 순서대로 출력
const [i, num, ...arr] = input;
let strToint = Number(num);
let filtered = arr.filter((el) => el < strToint);
let result = "";
for (let i = 0; i < filtered.length; i++) {
  result += filtered[i] + " ";
}
console.log(result);

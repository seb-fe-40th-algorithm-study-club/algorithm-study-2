const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

//평균구하고 평균넘는 학생 비율 소수점 3자리까지
for (let i = 1; i <= input[0]; i++) {
  let count = 0;

  let num = input[i].split(" "); //첫번째 인덱스는 길이

  let sum = num.slice(1).reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
  let avg = sum / num[0]; //평균
  for (let j = 0; j < num.length; j++) {
    if (avg < num.slice(1)[j]) {
      count++;
    }
  }
  let result = `${((count / num[0]) * 100).toFixed(3)}%`;
  console.log(result);
}

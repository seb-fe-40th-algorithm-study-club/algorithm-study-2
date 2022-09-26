//d(n) 33 + 3 + 3 = 39 => 39 + 3 + 9 = 51 => 51 + 5 + 1...
//33 => 39 => 51...
//10000>= 셀프넘버
//만까지 계산 하는데 안나오는 숫자 출력

function cal(num) {
  let sum = 0;
  let splitNum = (num + "").split("");
  // console.log("split:" + splitNum);
  sum = splitNum.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
  //   console.log(sum + num);
  return sum + num;
}

let selfNum = Array(10000).fill(true);

//셀프넘 아닌 것
for (let i = 0; i <= 10000; i++) {
  selfNum[cal(i)] = false;
}

//셀프넘 출력
for (let i = 0; i < 10000; i++) {
  if (selfNum[i]) {
    console.log(i);
  }
}

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let count = 0;
for(let i = 1; i <= Number(input[0]); i++){
    let voca = input[i];
    let prev = voca[0];
    let checker = 1;
    for(let j = 1; j < voca.length; j++){
        if(prev === voca[j]) continue;
        else {
            // 단어가 바뀌는 시점에서 남은 단어에 있는지 확인 -> 없으면 그룹 단어
            if(voca.slice(j).includes(prev)) {
                checker = 0;
                break;
            }
            else prev = voca[j];
        }
    }
    if(checker) count++
}
console.log(count)
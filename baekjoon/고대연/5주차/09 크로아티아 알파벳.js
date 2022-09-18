let input = require('fs').readFileSync('../input.txt').toString().trim();
function solution(input) {
    let data = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        if (data.find(el => el === (input[i] + input[i + 1] + input[i + 2]))) {
            i += 2;
        }
        else if (data.find(el => el === (input[i] + input[i + 1]))) {
            i++;
        }
        sum++;
    }
    console.log(sum)
}

solution(input);
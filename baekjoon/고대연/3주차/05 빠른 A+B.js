let input = require('fs').readFileSync('./input.txt').toString().trim();
function solution(input){
    let answer = "";
    for(let i =1; i<input.length;i++){
        let nums = input[i].split(' ');
        answer += Number(nums[0])+Number(nums[1]) + "\n";
    }
    console.log(answer);
}

solution(input);

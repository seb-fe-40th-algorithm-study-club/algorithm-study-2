let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
function solution(input){
    let answer = "";
    for(let i =1; i<input.length;i++){
        let nums = input[i].split(' ');
        let sum = Number(nums[0])+Number(nums[1]);
        console.log(`Case #${i}: ${nums[0]} + ${nums[1]} = ${sum}`);
    }
}

solution(input);

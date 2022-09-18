let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
function solution(input){
    let answer = "";
    for(let i = 0; i<input.length;i++){
        
        let nums = input[i].split(" ");
        let sum = Number(nums[0]) + Number(nums[1]);
        
        if(sum !== 0){
        answer += sum +"\n";
        }
    }
    console.log(answer);

}

solution(input);

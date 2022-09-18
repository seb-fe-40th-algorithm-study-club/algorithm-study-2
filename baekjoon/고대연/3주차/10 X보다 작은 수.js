let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
function solution(input){
    let [total, compare] = input[0].split(' ');
    input[0] = [1,2];
    let nums = input[1].split(' ');

    for(let i=0;i<Number(total);i++){
        if(Number(compare) > Number(nums[i]))
            console.log(nums[i]);
    }
    
}

solution(input);

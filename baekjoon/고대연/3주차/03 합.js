let input = Number(require('fs').readFileSync('./input.txt').toString().trim());
function solution(num){
    let sum = 0;
    for(let i = 1;i<=num;i++){
        sum +=i;
    }
    console.log(sum);
}

solution(input);

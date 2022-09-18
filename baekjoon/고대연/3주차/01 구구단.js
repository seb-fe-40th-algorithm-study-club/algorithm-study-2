let input = Number(require('fs').readFileSync('./input.txt').toString().trim());
function solution(num){
    for(let i =1; i<= 9 ; i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}

solution(input);

let input = Number(require('fs').readFileSync('./input.txt').toString().trim());
function solution(num) {
    for (let i = 0; i < num; i++) {
        for (let j = i; j < num - 1; j++) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

solution2(input);


function solution2(num){
    for(let i =0 ; i<num;i++){
        for(let j = 0 ;j <i+1 ;j++){
            process.stdout.write("*");
        }
        console.log();
    }
}
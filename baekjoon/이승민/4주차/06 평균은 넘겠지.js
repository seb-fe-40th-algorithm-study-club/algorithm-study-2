const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

for(let i = 1; i <= Number(input[0]); i++){
    let arr = input[i].split(' ').map(Number);
    let student = arr.shift();
    let sum = arr.reduce( (acc, cur) => acc + cur);
    
    /* another method
    let sum = 0;
    for(let j = 0; j < student; j++){
        sum = sum + arr[j]
    }
    */
    let avg = sum/student;
    let overAvg = arr.filter( el => el > avg);
    let rate = (overAvg.length/student*100).toFixed(3);

    console.log(rate+'%')
}


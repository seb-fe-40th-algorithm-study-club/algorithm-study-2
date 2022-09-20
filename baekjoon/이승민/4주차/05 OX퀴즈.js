const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// 이전 요소가 O이면 1+이전요소
for(let i = 1; i <= Number(input[0]); i++){

    let arr = [];
    for( let j = 0; j < input[i].length; j++ ){
        if( input[i][j] === 'O' && input[i][j-1] === 'O') arr.push(1+arr[j-1]);
        else if( input[i][j] === 'O' ) arr.push(1);
        else arr.push(0)
    }

    console.log( arr.reduce((acc, cur) => acc + cur) )

}
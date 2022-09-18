let input = require('fs').readFileSync('../input.txt').toString();
function solution(input){
    let sum = 0;
    let data = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ'];
    for(let i = 0 ; i < input.length; i++){
        for(let j = 0 ; j<data.length;j++){
            if( data[j].includes(input[i])){
                sum+= (j+3);
                break;
            }
        }
    }
    console.log(sum)
}
solution(input);

// let input = require('fs').readFileSync("/dev/stdin").toString().trim()
// const t = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,10,10,10,10];
// let time=0;
// input.split('').map(v => {
//     time+=t[v.charCodeAt(0)-65]
// })
// console.log(time)
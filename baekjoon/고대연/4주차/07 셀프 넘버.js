let arr = [];

const solution = function(n){
    let stringnum= n.toString().split("");


    let sum = 0;
    for(let i =0; i < stringnum.length;i++){
        sum += parseInt(stringnum[i]);
    }

    sum += parseInt(n);
    if(sum <=10000)
        arr[sum] = 1;
}

for(let i =0 ;i <=10000; i ++){
    solution(i);
}

// for(let i =0 ; i<arr.length;i++){
//     if(arr[i] === undefined)
//         console.log(i);
// }

// var arr = new Array(9999);
// //arr.fill(false);

// for (var i = 1; i <= 10000; i++) {
//     var tmp = i;
//     var sum = tmp;
//     while (tmp > 0) {
//         sum += tmp % 10;
//         tmp = parseInt(tmp / 10);
//     }
//     arr[sum] = true;
// }

// for (var j = 1; j <= 10000; j++) {
//     if (!arr[j]) {
//         console.log(j)
//     }
// }
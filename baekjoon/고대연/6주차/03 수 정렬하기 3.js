let [num, ...arr] = require('fs').readFileSync('../input.txt').toString().trim().split('\n').map(el => +el);
//선택정렬
for (let i = 0; i < num; i++) {
    let min = arr[i];
    let index = i;
    for (let j = i; j < num; j++) {
        if (min > arr[j]) {
            min = arr[j];
            index = j;
        }
    }
    arr[index] = arr[i];
    arr[i] = min;
}
console.log(arr.join("\n"));
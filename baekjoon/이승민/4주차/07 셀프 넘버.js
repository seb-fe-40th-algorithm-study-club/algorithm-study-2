// 셀프넘버 아닌 애들 배열
let notSelf = [];
for(let i = 1; i<10000; i++){
    let arr = String(i).split('').map(Number);
    let sum = arr.reduce((acc, cur) => acc + cur, i)
    notSelf.indexOf(sum) === -1 ? notSelf.push(sum) : undefined;
    /*
    let sum = 0;
    for(let j=0; j<arr.length; j++){
        sum = sum + arr[j]
    }

    //1자리수
    if(arr.length === 1){
        notSelf.push(arr[0] + arr[0])
    }
    //2자리수
    else if(arr.length === 2){
        notSelf.indexOf( i + arr[0] + arr[1]) === -1 ? notSelf.push( i + arr[0] + arr[1]) : undefined
    }
    //3자리수
    else if(arr.length === 3) {
        notSelf.indexOf( i + arr[0] + arr[1] + arr[2]) === -1 ? notSelf.push( i + arr[0] + arr[1] + arr[2] ) : undefined
    }
    //4자리수
    else{
        notSelf.indexOf( i + arr[0] + arr[1] + arr[2] + arr[3]) === -1 ? notSelf.push( i + arr[0] + arr[1] + arr[2] + arr[3]) : undefined
    }
    */
}

// 오름차순 정렬
// notSelf.sort((a,b)=> a-b)

for( let j = 1; j < 10000; j++){
    if(notSelf.indexOf(j) === -1){
        console.log(j)
    }
}
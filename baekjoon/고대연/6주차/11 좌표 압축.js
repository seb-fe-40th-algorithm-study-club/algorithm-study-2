let [num,input] = require('fs').readFileSync('../input.txt').toString().trim().split('\n');
let splitinput = input.split(" ")
let set = new Set(splitinput);
let uniq = [...set]
uniq=uniq.sort((a,b) => a-b);

let map = new Map(uniq.map((el,idx) => [el,idx]) );
console.log(splitinput.map(el => map.get(el)).join(" "))



// for(let [key,value] of map){
//     console.log(`${key} ${value}`)
// }

// 중복제거 이후 정렬을 하고 해당인덱스를 map으로 저장해둠
// map으로 해당 키값에 해당하는 순서(답)을 저장해 둠.
// 원본배열을 돌아가면서 key에 해당하는 value를 찾게 함.

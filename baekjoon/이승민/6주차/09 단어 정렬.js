const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
input.shift();

//중복 제거
const arr = Array.from(new Set(input));

// 길이순 정렬
const sortedArr = arr.sort((a, b) => {
    if(a.length !== b.length){
        return a.length - b.length;
    }
});

// 같은 길이만 모아서 정렬해서 새로운 배열에 push
const result = [];
const range = sortedArr[sortedArr.length-1].length;
for(let i = 1; i <= range; i++){
    const temp = sortedArr.filter( el => el.length === i).sort();
    result.push(...temp);
}

for(let el of result){
    console.log(el)
}
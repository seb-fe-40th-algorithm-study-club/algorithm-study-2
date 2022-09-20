const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();

console.log(input.charCodeAt([0]));

/* charCodeAt() 이런 메서드가 있는지 모르고 푼 방법 */
/*
// 숫자는 48번부터
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(String);
// 알파벳 소문자는 97번부터
const lower = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// 알파벳 대문자는 65번부터
const upper = lower.map( el => el.toUpperCase()) ;

if ( number.includes(input) ) console.log(number.indexOf(input) + 48);
if ( lower.includes(input) ) console.log(lower.indexOf(input) + 97);
if ( upper.includes(input) ) console.log(upper.indexOf(input) + 65);
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // Write your code
    const stringB = String(B);
    // 385 => ['3', '8', '5']
    // 문자열 자체를 배열로 볼수있고 index로 각각 원하는 자리를 꺼내쓸수 있음.
    const one = +String(B)[2];
    const ten = +String(B)[1];
    const hun = +String(B)[0];
    console.log(A * one);
    console.log(A * ten);
    console.log(A * hun);
    console.log(A * B);
}
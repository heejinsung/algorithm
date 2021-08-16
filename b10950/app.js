
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

const testCaseArray = [];
for (let i = 1; i <= input[0]; ++i){

		//testCaseArray.push(input[i].split(' ').map((item) => +item));
		//출력 [ [ 1, 1 ], [ 2, 3 ], [ 3, 4 ], [ 9, 8 ], [ 5, 2 ] ]
		// 더 직관적으로 출력하기위해 밑에와 같은 코드로 써줌.

    const tempValue = input[i].split(' ').map((item) => +item)
    testCaseArray.push({A: tempValue[0], B: tempValue[1]});
		//출력 
		// { A: 1, B: 1 },
		// { A: 2, B: 3 },
		// { A: 3, B: 4 },
		// { A: 9, B: 8 },
		// { A: 5, B: 2 }
}
console.log(testCaseArray);
function solution(T, testcaseArray) {
    
}

// 최종 답
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= input[0]; ++i){
    const tempValue = input[i].split(' ').map((item) => +item)
    testCaseArray.push({A: tempValue[0], B: tempValue[1]});
}
solution(+input[0], testCaseArray);

function solution(T, testcaseArray) {
    for (let i = 0; i < T; ++i){
        // const A =  testCaseArray[i].A;
        // const B = testCaseArray[i].B;
        const { A, B } = testCaseArray[i];
        console.log(A + B);
    }
}

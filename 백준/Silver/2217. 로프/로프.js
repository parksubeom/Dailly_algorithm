const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
/* 
로프 

각 로프들에 대한 정보가 주어졌을 때, 
이 로프들을 이용하여 들어올릴 수 있는 물체의 최대 중량을 구해내는 프로그램을 작성하시오.
모든 로프를 사용해야 할 필요는 없으며, 임의로 몇 개의 로프를 골라서 사용해도 된다.

키포인트 
가장 약한 로프를 사용할 경우 최대무게는 약한로프*로프갯수

예시
[ 20, 45 , 55, 100 ]
골고루 4개의 로프를 사용하는 경우 => 80을 넘길 수 없다.
20을 제외하고 45 55 100으로 드는 경우 => 최대 135까지 들 수 있다

낮은순으로 정렬 후 , 맨앞요소를 하나씩 잘라가면서 (요소*로프갯수) 값을 result배열안에 넣는다.
*/
let N = input[0];
let weight = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
let i = 0;
let result = [];

while (result.length !== weight.length) {
  // result.배열이 다 차면,
  result.push(weight[i] * (weight.length - i));
  i++;
}
console.log(Math.max(...result));
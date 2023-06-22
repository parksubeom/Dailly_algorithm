/*
 Hamming Distance란? : 같은 두 DNA가 있을 때, 각 위치의 뉴클오티드 문자가 다른 것의 개수
 문제이해를 못하겠어요 ...
 입출력보고 유추할게요...

 첫번째출력 의사코드
 1.DNA의 행마다 최빈값을 구한다.
 2.최빈값이 여러개라면 사전순으로 가장 앞서는 걸 최빈값으로 정의한다.
 3.첫번째 출력은 각 행마다 최빈값들을 이어붙여서 출력한다.
 
 두번째출력 의사코드
 1.각 행마다 최빈값과 다른 값들의 개수를 카운팅한다.
 2.카운팅한 수를 리턴한다.
 */

function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const [N, M] = input[0].split(" ");
  const DNA = input.slice(1).map((el) => el.trim());
  let result = "";
  let answer = [];
  let cnt = 0;
  while (cnt < M) {
    for (let el of DNA) {
      result += el[cnt];
    }
    answer.push(result);
    result = "";
    cnt++;
  }
  let map = new Map();
  for (let el of answer) {
    for (let x of el) {
      if (map.get(x)) {
        map.set(x, map.get(x) + 1);
      }
      map.set(x, 0);
    }
  }
  console.log(map);
}
solution();

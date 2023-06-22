function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim();
  let roomnumber = input;
  let plasticset = []; //[[0,0],[1,0]...]

  for (let i = 0; i <= 9; i++) {
    plasticset.push(0);
  }
  for (let el of roomnumber) {
    plasticset[el]++;
  }
  if (
    plasticset[9] === Math.max(...plasticset) ||
    plasticset[6] === Math.max(...plasticset)
  ) {
    //6 또는 9가 가장 큰 수 라면
    if (
      [...plasticset].sort((a, b) => a - b)[8] <
      Math.ceil((plasticset[6] + plasticset[9]) / 2)
    ) {
      //2번째로 큰 수가 (6+9)/2 보다 작다면
      return Math.ceil((plasticset[6] + plasticset[9]) / 2); //(6+9)/2를 리턴
    } else {
      return plasticset.sort((a, b) => a - b)[8]; //아니라면 두번째로 큰 수를 리턴
    }
  }
  return Math.max(...plasticset);
}
console.log(solution());
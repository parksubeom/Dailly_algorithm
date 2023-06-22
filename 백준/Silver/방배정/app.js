function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  let k = parseInt(input[0].split(" ")[1]);
  let result = [...input.slice(1)];
  let boys = [];
  let girls = [];
  let cnt = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i][0] === "0") {
      //남자인 경우
      boys.push(result[i][2]);
    } else if (result[i][0] === "1") {
      //여자인 경우
      girls.push(result[i][2]);
    }
  }
  const boyset = new Set(boys.sort((a, b) => a - b));
  const girlset = new Set(girls.sort((a, b) => a - b));
  for (let el of [...boyset]) {
    cnt += Math.ceil(boys.filter((x) => x === el).length / k);
  }
  for (let el of [...girlset]) {
    cnt += Math.ceil(girls.filter((x) => x === el).length / k);
  }
  console.log(cnt.toString());
}
solution();

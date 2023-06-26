const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const DNAs = [];
const nucles = ["A", "C", "G", "T"];
let str = "";
let distance = 0;

for (let i = 1; i <= N; i++) DNAs.push([...input[i].trim()]);

for (let i = 0; i < M; i++) {
  const cnt = [0, 0, 0, 0]; // 사전순 A, C, G, T

  for (const DNA of DNAs) {
    if (DNA[i] === "A") cnt[0] += 1;
    else if (DNA[i] === "C") cnt[1] += 1;
    else if (DNA[i] === "G") cnt[2] += 1;
    else if (DNA[i] === "T") cnt[3] += 1;
  }

  const maxCnt = Math.max(...cnt);
  const index = cnt.indexOf(maxCnt);

  str += nucles[index];
  distance += N - maxCnt;
}

console.log(str);
console.log(distance);
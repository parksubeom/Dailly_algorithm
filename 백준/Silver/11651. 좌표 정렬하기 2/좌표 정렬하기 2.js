function solution() {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  const xy = input.slice(1);
  xy.sort((a, b) => {
    if (a.split(" ")[1] !== b.split(" ")[1]) {
      return a.split(" ")[1] - b.split(" ")[1];
    } else {
      return a.split(" ")[0] - b.split(" ")[0];
    }
  });

  console.log(xy.join("\n"));
}
solution();
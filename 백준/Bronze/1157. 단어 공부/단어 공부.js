const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

let str = input.join("").toUpperCase().split("").sort();
let result = {};
let i = 1;
for (let el = 0; el < str.length; el++) {
  result[str[el]] = i++;
  if (str[el] !== str[el + 1]) {
    i = 1;
  }
}
if (
  Object.entries(result).sort((a, b) => b[1] - a[1]).length > 1 &&
  Object.entries(result).sort((a, b) => b[1] - a[1])[0][1] ===
    Object.entries(result).sort((a, b) => b[1] - a[1])[1][1]
) {
  console.log("?");
} else {
  console.log(Object.entries(result).sort((a, b) => b[1] - a[1])[0][0]);
}

let text = "aaaaaaaa";
let target = "aa";
let cnt = 0;
for (let i = 0; i < text.length; i++) {
  if (text.slice(i, i + target.length) === target) {
    cnt++;
    i += target.length - 1;
  }
}
console.log(cnt);

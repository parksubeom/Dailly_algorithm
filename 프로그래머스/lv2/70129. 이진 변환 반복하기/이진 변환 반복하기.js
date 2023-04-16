function solution(s) {
  let binary = [...s.toString(2)]
    .filter((el) => el === "1")
    .join("")
    .length.toString(2);
  let zero = [...s].filter((el) => el === "0").length;

  function binaryf(s, cnt, zerocnt) {
    if (s === "1") {
      return [cnt, zerocnt];
    }
    zerocnt += [...s].filter((el) => el === "0").length;
    cnt++;
    return binaryf(
      [...s.toString(2)]
        .filter((el) => el === "1")
        .join("")
        .length.toString(2),
      cnt,
      zerocnt
    );
  }
  return binaryf(binary, 1, zero);
}

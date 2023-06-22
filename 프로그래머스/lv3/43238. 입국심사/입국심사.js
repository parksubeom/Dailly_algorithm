function solution(n, times) {
  //최소로 걸릴 수 있는 시간 left, 최대로 걸릴 수 있는 시간 right
  let [left, right] = [7, Math.max(...times) * n];
    // left 가 right를 넘어갔다는 것은 left가 n보다 크거나 같아져서 n명을 수용할 수 최소값이 되있다는 것이다.
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);
    //sum은 mid 시간 동안 처리 할 수 있는 사람의 수
    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (sum < n) {
      left = mid + 1; // mid시간동안 처리가능 한 사람의 수가 줄 서있는 사람보다 많다면 레프트값을 미드 +1로 바꿔준다.
    } else {
      right = mid - 1;// mid시간동안 처리가능 한 사람의 수가 줄 서있는 사람보다 적다면 라이트값을 미드 +1로 바꿔준다.
    }
  }
  return left; // 레프트는 최소한의 시간 
}

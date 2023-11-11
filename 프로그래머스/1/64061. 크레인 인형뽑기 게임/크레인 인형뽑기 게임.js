function solution(board, moves) {
  // borad = 인형이담긴 박스
  //1. 일단 알아보기쉽게 보드를 재구성하자
  //2. 뉴보드에서 빈칸(0)들을 모두 제거해준다
  //3. 무브의 동작대로 result.push(뉴보드[moves[i]].shift())
  //4. result에 푸시한 후 result[moves.length-1] === result[moves.length-2] 을 충족하면, 맨 마지막요소와 그 앞요소를 지워준다. 그리고 cnt++ 해준다.

  let newboard = [];
  let arr = [];
  let result = [];
  let width = board.length;
  let cnt = 0;
  //빈칸을 제거한 뉴보드생성
  for (let i = 0; i < width; i++) {
    for (let y = 0; y < width; y++) {
      if (arr.length === width) {
        newboard.push(arr);
        arr = [];
      }
      arr.push(board[y][i]);
    }
  }
  newboard.push(arr);
  for (let i = 0; i < newboard.length; i++) {
    newboard[i] = newboard[i].filter((el) => el !== 0);
  }

  for (let el of moves) {
    if (newboard[el - 1].length) { // 보드에 인형이 있다면 뽑아서 result에 넣어준다.
      result.push(newboard[el - 1].shift());
    }
    if ( // result에 요소가 있고, 
      result.length>1 &&
      result[result.length - 1] === result[result.length - 2]
    ) {
      result.pop();
      result.pop();
      cnt += 2;
    }
  }

  return cnt;
}
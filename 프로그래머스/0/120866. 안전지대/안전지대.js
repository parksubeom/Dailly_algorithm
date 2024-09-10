


function solution(board) {
const rows = board.length;
const cols = board[0].length;

// 복사본을 만들어서 원본 배열을 변경하지 않도록 합니다.
const updatedBoard = board.map(row => row.slice());

// 방향 배열을 정의합니다 (상하좌우 및 대각선).
const directions = [
  [-1, -1], [-1, 0], [-1, 1], // 위-왼쪽, 위, 위-오른쪽
  [0, -1],           [0, 1],   // 왼쪽, 오른쪽
  [1, -1], [1, 0], [1, 1]      // 아래-왼쪽, 아래, 아래-오른쪽
];

// 1의 위치를 찾아서 그 주변 요소를 업데이트합니다.
board.forEach((row, r) => {
  row.forEach((value, c) => {
    if (value === 1) {
      // 주변 요소를 업데이트합니다.
      directions.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;
        
        // 배열의 범위를 벗어나지 않는지 확인합니다.
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          updatedBoard[nr][nc] = 1;
        }
      });
    }
  });
});

return updatedBoard.flat().filter((el) => el === 0).length
}
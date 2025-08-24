function solution(n, m, section) {
    let count = 0;
    let lastPainted = 0;

    for (const s of section) {
        // 현재 구역이 이전에 칠한 범위 밖에 있다면
        if (s > lastPainted) {
            // 롤러 칠하기 횟수 증가
            count++;
            // 롤러로 칠한 마지막 구역 번호 업데이트
            lastPainted = s + m - 1;
        }
    }

    return count;
}
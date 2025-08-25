function solution(s) {
    let answer = 0;
    let i = 0; // 현재 문자열의 시작 위치를 추적합니다.

    // 문자열의 끝에 도달할 때까지 반복합니다.
    while (i < s.length) {
        // 새로운 분리 작업이 시작될 때마다 개수를 증가시킵니다.
        answer++; 
        
        // 현재 분리할 문자열의 첫 글자를 지정합니다.
        const startChar = s[i];
        let sameCount = 0;
        let diffCount = 0;

        // 현재 시작 위치(i)부터 문자열을 순회하며 카운트를 셉니다.
        for (let j = i; j < s.length; j++) {
            if (s[j] === startChar) {
                sameCount++;
            } else {
                diffCount++;
            }

            // 두 카운트가 같아지면 분리 지점을 찾은 겁니다.
            if (sameCount === diffCount) {
                i = j + 1; // 다음 시작 위치를 업데이트합니다.
                break;     // 안쪽 루프를 종료하고 다음 분리 작업을 시작합니다.
            }
        }
        
        // 만약 for 루프가 끝까지 실행되었는데도 카운트가 같지 않다면,
        // 남은 문자열이 한 덩어리가 되는 경우이므로 루프를 종료합니다.
        if (sameCount !== diffCount) {
            break;
        }
    }

    return answer;
}
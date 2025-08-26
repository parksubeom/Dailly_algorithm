function solution(n) {
    if (n <= 1) return 0;

    let count = 1; // 2는 소수이므로 1개로 시작
    const primes = [2]; // 찾은 소수들을 저장할 배열

    // 3부터 n까지 홀수만 확인
    for (let i = 3; i <= n; i += 2) {
        let isPrime = true;
        
        // 이미 찾은 소수들로만 나누어 소수인지 판별
        // i의 제곱근까지만 확인하면 충분함
        for (const p of primes) {
            if (p * p > i) break; // p의 제곱이 i보다 크면 더 이상 나눌 필요 없음
            if (i % p === 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            count++;
            primes.push(i);
        }
    }
    
    return count;
}

// 예시 실행
// solution(10) -> 4 (2, 3, 5, 7)
// solution(20) -> 8 (2, 3, 5, 7, 11, 13, 17, 19)
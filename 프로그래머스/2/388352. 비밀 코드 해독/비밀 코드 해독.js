function solution(n, q, ans) {
    let count = 0;
    // 1부터 n까지의 정수 배열 생성
    const numbers = Array.from({ length: n }, (_, i) => i + 1);

    // 5개의 정수를 뽑는 모든 조합을 생성하는 재귀 함수
    function combinations(array, length) {
        const results = [];
        if (length === 1) return array.map(value => [value]);

        array.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            const combinationsOfRest = combinations(rest, length - 1);
            const attached = combinationsOfRest.map(combination => [fixed, ...combination]);
            results.push(...attached);
        });

        return results;
    }

    const allCombinations = combinations(numbers, 5);

    // 모든 조합에 대해 조건을 확인
    for (const code of allCombinations) {
        let isPossible = true;
        
        // 각 시도(q)와 시스템 응답(ans)을 비교
        for (let i = 0; i < q.length; i++) {
            const currentGuess = new Set(q[i]);
            const currentCode = new Set(code);
            let intersectionCount = 0;

            // 교집합의 개수를 계산
            for (const value of currentGuess) {
                if (currentCode.has(value)) {
                    intersectionCount++;
                }
            }

            // 교집합의 개수가 응답과 다르면 이 조합은 불가능
            if (intersectionCount !== ans[i]) {
                isPossible = false;
                break;
            }
        }

        // 모든 시도 조건을 만족하면 카운트 증가
        if (isPossible) {
            count++;
        }
    }

    return count;
}
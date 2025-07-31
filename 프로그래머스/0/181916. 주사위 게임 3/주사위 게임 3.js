function solution(a, b, c, d) {
    // 1. 네 주사위 눈을 배열에 담아 오름차순으로 정렬합니다.
    const dice = [a, b, c, d];
    dice.sort((x, y) => x - y); // 예시: [1, 2, 2, 3]

    // 2. 각 숫자의 빈도수를 계산합니다.
    // Map을 사용하여 각 고유 숫자가 몇 번 나왔는지 저장합니다.
    const counts = new Map();
    for (const num of dice) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }
    
    // 3. 고유한 숫자의 개수를 파악합니다.
    const numUnique = counts.size; // 고유한 숫자 개수 (1, 2, 3, 4 중 하나)

    // 4. 고유한 숫자들을 배열로 가져오고 정렬합니다.
    // 이는 각 케이스별 p, q, r 값을 쉽게 찾기 위함입니다.
    const uniqueValues = Array.from(counts.keys()).sort((x, y) => x - y);

    // 5. 규칙에 따라 점수를 계산합니다. (경우의 수를 numUnique로 크게 분류)

    // Rule 1: 네 주사위에서 나온 숫자가 모두 p로 같다면 (p, p, p, p)
    // 고유한 숫자가 1개일 때 이 경우에 해당합니다.
    if (numUnique === 1) {
        const p = uniqueValues[0]; // 모든 숫자가 p임
        return 1111 * p;
    }

    // Rule 2 & 3: 고유한 숫자가 2개일 때 (p, p, p, q) 또는 (p, p, q, q)
    else if (numUnique === 2) {
        const p = uniqueValues[0]; // 더 작은 고유 숫자
        const q = uniqueValues[1]; // 더 큰 고유 숫자

        // Rule 2: 세 주사위에서 나온 숫자가 p로 같고 나머지 하나가 q라면 (p, p, p, q) 또는 (q, p, p, p)
        // counts[p]가 3이거나 counts[q]가 3이라면 세 주사위가 같은 경우입니다.
        if (counts.get(p) === 3 || counts.get(q) === 3) {
            const tripletVal = counts.get(p) === 3 ? p : q; // 3개 나온 숫자 (p)
            const singleVal = counts.get(p) === 3 ? q : p;  // 1개 나온 숫자 (q)
            return (10 * tripletVal + singleVal) ** 2; // (10 × p + q)2 점
        }
        // Rule 3: 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p, p, q, q)
        // 위 Rule 2가 아니면서 고유 숫자가 2개인 경우는 두 개씩 같은 값인 경우밖에 없습니다.
        else { // counts.get(p) === 2 && counts.get(q) === 2
            return (p + q) * Math.abs(p - q); // (p + q) × |p - q|점
        }
    }

    // Rule 4: 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r이라면 (p, p, q, r)
    // 고유한 숫자가 3개일 때 이 경우에 해당합니다. (하나의 페어, 두 개의 싱글)
    else if (numUnique === 3) {
        // 빈도수가 2인 숫자가 p (페어)
        // 빈도수가 1인 숫자 두 개가 q와 r (싱글)
        const singleValues = uniqueValues.filter(val => counts.get(val) === 1);
        const q = singleValues[0];
        const r = singleValues[1];
        return q * r; // q × r점
    }

    // Rule 5: 네 주사위에 적힌 숫자가 모두 다르다면 (p, q, r, s)
    // 고유한 숫자가 4개일 때 이 경우에 해당합니다.
    else { // numUnique === 4
        // uniqueValues 배열은 이미 정렬되어 있으므로, 첫 번째 요소가 가장 작은 숫자입니다.
        return uniqueValues[0]; // 가장 작은 숫자 만큼의 점수
    }
}
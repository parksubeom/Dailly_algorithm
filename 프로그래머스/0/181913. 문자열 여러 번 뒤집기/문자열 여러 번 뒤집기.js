function solution(my_string, queries) {
    let charArray = [...my_string]; // 문자열을 문자 배열로 변환

    queries.forEach((query) => {
        const start = query[0];
        const end = query[1]; 

        // 1. 뒤집을 부분만 잘라내어 배열로 만듭니다.
        let segmentToReverse = charArray.slice(start, end + 1); // end 인덱스 포함

        // 2. 잘라낸 부분을 뒤집습니다.
        segmentToReverse.reverse();

        // 3. 원래 위치에 뒤집힌 부분을 다시 삽입합니다.
        //    splice의 마지막 인수로 배열을 전달할 때, 스프레드 연산자(...)를 사용하여
        //    배열의 '개별 요소들'을 삽입해야 합니다.
        charArray.splice(start, end - start + 1, ...segmentToReverse);
    });

    return charArray.join(""); // 문자 배열을 다시 문자열로 합칩니다.
}
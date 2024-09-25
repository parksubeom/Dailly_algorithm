//A문자열의 마지막 인덱스의 문자를 0번째 인덱스로 바꾸면 오른쪽으로 미는것과 동일하다.

function solution(A, B) {
    let newArr = [...A]
    let answer = 0
    for (let idx = 0; idx < newArr.length; idx++) {
           if (newArr.join("") === B) {
        return answer
    }
    newArr.unshift(newArr[newArr.length - 1]); // 마지막 요소를 배열 맨 앞에 추가
    newArr.pop(); // 마지막 요소 제거
    answer++;

 
}

    return -1
}
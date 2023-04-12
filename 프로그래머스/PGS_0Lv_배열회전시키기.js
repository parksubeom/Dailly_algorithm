/*
문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.


[4, 455, 6, 4, -1, 45, 6]	"left"  =>	[455, 6, 4, -1, 45, 6, 4]
 */
function solution(numbers, direction) {
    // left  => 배열이 왼쪽으로 하나 밀린다
    // right => 배열이 오른쪽으로 하나 밀린다.
    // left라면 팝 하고 팝 값 언쉬프트
    // right라면 쉬프트 후 쉬프트 한 값 푸쉬
    if(direction === "right"){
        let leftend = numbers.pop()
        numbers.unshift(leftend)
    }else{
        let rightend = numbers.shift()
        numbers.push(rightend)
    }
    return numbers
}
/*
 문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array 원소 ≤ 1,000
array에 중복된 숫자는 없습니다.
 */
function solution(array) {
    //배열에서 최대값찾기
    //그 최대값 인덱스 찾기
    //렉스 기릿


    /*1.
    let maxnum = Math.max(...array)
    let maxidx = array.findIndex((el) => el === maxnum)
    return [maxnum,maxidx]
}*/

return [Math.max(...array),array.findIndex((el) => el === Math.max(...array))]
}
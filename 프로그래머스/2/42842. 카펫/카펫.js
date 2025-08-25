/*
1.정사각형이거나 직사각형인데 가로가 더 길어야한다
2.리턴값은 브라운 + 옐로우의 약수 한쌍
3.가로와 세로는 같거나 가로가 더 길어야 하므로 약수를 담은 배열 내림차순으로 정렬
4.옐로우는 가운데에 존재해야하고 브라운은 1겹이므로 무조건 가로길이-2 * 세로길이-2 를 만족하는 약수 한 쌍이 정답이다.
*/

function solution(brown, yellow) {
    function 약수구하기(num) {
    const pairs = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            const pair = [i, num / i].sort((a,b) => b-a);
            pairs.push(pair);
        }
    }
    return pairs;
}
    var answer = 약수구하기(brown+yellow)
    return answer.filter((el) => (el[0]-2) * (el[1]-2) === yellow).flat()
}
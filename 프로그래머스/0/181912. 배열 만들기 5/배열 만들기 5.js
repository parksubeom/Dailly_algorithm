function solution(intStrs, k, s, l) {
    var answer = intStrs.map((el) => el.slice(s,s+l)*1).filter((el) => el > k)
    return answer;
}
function solution(q, r, code) {
    var answer = '';
    return [...code].map((el,i) => i%q === r ? el : "").join("")
}
function solution(myString, pat) {
    return [...myString].map((el) => el === 'A' ? el='B' : 'A').join('').includes(pat) ? 1 : 0
}
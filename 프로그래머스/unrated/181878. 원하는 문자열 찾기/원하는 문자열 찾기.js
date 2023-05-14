function solution(myString, pat) {
   myString = myString.toUpperCase()
    pat = pat.toUpperCase()
    return myString.includes(pat) ? 1 : 0
}
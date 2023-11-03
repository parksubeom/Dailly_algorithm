function solution(numLog) {
    /*
    "w" : 수에 1을 더한다.
    "s" : 수에 1을 뺀다.
    "d" : 수에 10을 더한다.
    "a" : 수에 10을 뺀다.
    */
    return numLog.slice(1).map((el,idx) => el+1 ===numLog[idx] ? "s" :el-1 ===numLog[idx] ? "w" :  el+10 ===numLog[idx] ? "a" :"d").join("")
}
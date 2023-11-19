function solution(score) {
    let result = score.map((el) => el.reduce((acc,cur) => acc+cur),0).sort((a,b) => b-a)
    let arr = score.map((el) => el.reduce((acc,cur) => acc+cur),0)
    return arr.map((el) => result.indexOf(el)+1)
}
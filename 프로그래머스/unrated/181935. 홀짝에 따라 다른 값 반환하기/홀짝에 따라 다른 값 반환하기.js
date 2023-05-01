function solution(n) {
    let result = []
    for(let i = 1; i <= n ; i++){
        result.push(i)
    }
    return n%2 === 1 ? result.filter((el) => el % 2 === 1).reduce((acc,cur) => acc+cur) : result.filter((el) => el % 2 ===0).map((el) => el*el).reduce((acc,cur) => acc+cur)
}
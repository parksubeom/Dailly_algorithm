function solution(n) {
    let result = [...n.toString(3)].reverse().map(Number)

    return parseInt(result.join(""),3)
}



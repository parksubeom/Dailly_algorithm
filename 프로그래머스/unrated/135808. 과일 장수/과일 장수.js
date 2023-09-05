function solution(k, m, score) {
    /**
    //최저점수 * m * box.length = answer
    score = score.sort((a,b) => b - a)
    let boxs = []
    let box = []
    let 박스갯수 = Math.floor(score.length/m)
    let result = 0
    
    for(let i = 0; i < score.length+1; i++){
        if(box.length === m ){
            boxs.push(box)
            box = [score[i]]
        }else if(box.length < m  ){
            box.push(score[i])
        }
        
}   

    return boxs.map(box => {
        return Math.min(...box)*m
    }).reduce((acc,cur) => acc + cur)**/
    score = score.sort((a,b) => b - a)
    let answer = 0
    for(let i = m; i <= score.length; i = i+m){
        answer+= score[i-1]*m
    }
    return answer
}
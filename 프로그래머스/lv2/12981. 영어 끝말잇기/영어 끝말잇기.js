function solution(n, words) {
    let result = []
    let result2 = [words[0]]
    let target = 1
    let targetcnt = 1
    for(let i =1; i < words.length; i++){
        target ++
        result2.push(words[i])
        if(target > n){
            target = 1
            targetcnt ++
        }
        if(result2.filter(el => el === words[i]).length > 1){
            result.push(target,targetcnt)
            return result
        }
        //여기서는 중복된 문자열을 말한 사람과 끝말잇기에 실패한 사람을 찾아야한다
        if(words[i-1].slice(-1) !== words[i].slice(0,1)){ //끝말잇기에 실패한 사람
          result.push(target,targetcnt)
            return result
        }
    }
    return [0,0]
}
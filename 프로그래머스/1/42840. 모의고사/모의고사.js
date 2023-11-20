function solution(answers) {
    // 수포쟈별 문제 찍는 유형을 배열데이터로 저장한다
    // 수포자별 찍는유형과 문제의 답을 순회하며, 매칭되는지 확인하고 매칭카운팅을 한다.
    let one = [1,2,3,4,5]
    let two = [2,1,2,3,2,4,2,5]
    let three = [3,3,1,1,2,2,4,4,5,5]
    let onecnt = [0,1]
    let twocnt = [0,2]
    let threecnt = [0,3]
    let answer = []
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === one[i%one.length]){
            onecnt[0]++
        }
        if(answers[i] === two[i%two.length]){
            twocnt[0]++
        }
        if(answers[i] === three[i%three.length]){
            threecnt[0]++
        }
    }
    let max = Math.max(onecnt[0],twocnt[0],threecnt[0])
    if(max === onecnt[0]){
        answer.push(onecnt[1])
    }
    if(max === twocnt[0]){
        answer.push(twocnt[1])
    }
    if(max === threecnt[0]){
        answer.push(threecnt[1])
    }
    return answer
}
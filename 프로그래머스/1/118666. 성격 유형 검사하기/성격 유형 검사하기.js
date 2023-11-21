function solution(survey, choices) {
    // 점수가 4보다 낮으면 survey[i][0]가 해당 성격유형이고 Math.abs(해당점수 - 4)라는 점수가 할당된다.
    //이러한 성격유형과 할당점수를 score라는 변수에 할당하고, score를 순회하여 mbti.score[i][0] = mbti.score[i][1] 을 할당한다.
    let mbti = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    let arr = [["R","T"],["C","F"],["J","M"],["A","N"]]
    let answer = ''
    
    for(let idx = 0; idx < survey.length; idx++) {
        if(choices[idx] < 4){
           mbti[survey[idx][0]] += Math.abs(choices[idx] - 4)
        }else if(choices[idx] > 4){
           mbti[survey[idx][1]] += Math.abs(choices[idx] - 4)
        }
    }
    
    for(let el of arr){
        if(mbti[el[0]] > mbti[el[1]]){
             answer+= el[0]
        }else if (mbti[el[0]] < mbti[el[1]]){
            answer+=el[1]
        }else{
            answer+=el[0]
        }
       
    }
   
    return answer
}

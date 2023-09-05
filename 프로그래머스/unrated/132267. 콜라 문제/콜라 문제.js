function solution(a, b, n) {
    let 필요빈병 = a
    let 치환되는콜라 = b  
    let 빈병갯수 = n
    let answer = 0
    /** 
    n개의 빈병에 a를 나눈 후 남는 몫을 answer에 더해준다.
    **/
    while(true) {
        if(필요빈병 > 빈병갯수){
            break;
        }
        answer += parseInt(빈병갯수/필요빈병)*치환되는콜라;
        빈병갯수 = parseInt(빈병갯수/필요빈병)*치환되는콜라 + 빈병갯수%필요빈병
    }
    
    return answer
}
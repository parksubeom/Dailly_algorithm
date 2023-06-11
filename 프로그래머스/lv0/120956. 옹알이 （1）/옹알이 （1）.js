/*
1.버블링의 요소들을 순회한다.
2.요소들을 스프레드로 풀어서 해당요소에 발음 가능한 옹알이들로 이루어져 있는지 boolean타입으로 체킹한다.
3.하나의 요소에 대한 검증이 끝났으면 발음가능한지 여부를 result2 배열에 푸쉬한다
4.result2 배열에서 true값만 필터링 한 배열의 길이를 리턴한다. => 발음간으한 버블링 요소의 갯수
*/

function solution(babbling) {
    let answer = 0;
    let ongR = [ "aya", "ye", "woo", "ma"]
    let result = ''
    let result2 = []
    let trigger = false
    
    for(let el of babbling){
        for(let x of [...el]){
            result+=x
            if(ongR.filter(el => el === result).length > 0){
                trigger = true
                result=''
            }else{
                trigger=false
            }    
        }
        result2.push(trigger)
        result = ''
    }       
    return result2.filter(el => el === true).length
}
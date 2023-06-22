function solution(participant, completion) {
    /*
    1.참가자 명단을 해쉬테이블에 참가자이름 : 1 형식으로 기입한다.
    2.완주자 명단을 순회하며 해쉬테이블과 비교한다.
    3.완주자가 해쉬테이블안에 존재한다면 해당 참가자의 value를 -1 한다.(동명이인 걸러내기 위함)
    4.순회를 다 마친후에, value값이 0이 아닌 참가자는 완주를 하지못했단 거니까 해당 참가자를 리턴한다.
    
    */
    
    
    
    let map = new Map()
    let result = []
    
    for(let el of completion.sort((a,b) => a-b)){ 
        if(map.has(el) === false){ 
           map.set(el,1)
        }else {
            map.set(el,map.get(el)+1) 
        }
    }
     for(let x of participant.sort((a,b) => a-b)){ 
         if(map.get(x) === 0){
             return x
         }
         if(map.has(x)){
             map.set(x,map.get(x)-1)
         }else{
             return x
         }
     }
}
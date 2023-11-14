function solution(fees, records) {
/*
차량번호 별 정산요금 공식 =>
기본요금 + [누적주차시간 - 기본시간 / 단위시간] * 단위요금

1. 번호판 종류를 모으자.
2. 누적시간 구하는 공식:  out시간 - in시간 or out시간 없으면 1439 - in시간
3. 번호판을 순회하며, 해당 번호판의 출입시간을 구한다.
4. 출입시간을 내림차순 정렬했을 떄, 홀수면 최대시간 - 첫번째 요소 / 짝수면 짝수요소 - 홀수요소 가 누적주차시간
*/
    let 출입기록 = []
    let 누적주차시간 = []
    let answer = []
    let 최대시간 = 1439
    let 기본시간 = fees[0]
    let 기본요금 = fees[1]
    let 단위시간 = fees[2]
    let 단위요금 = fees[3]
    let newrecords =  records.map((el) => el.split(" ")).sort((a,b) => Number(a[1]) - Number(b[1]))
      let numbers = [...new Set(newrecords.map(el => el[1]))]
    let 출입시간 = newrecords[0]
    let 차번호 = newrecords[1]
    let 출입상태=records[2]
    
    function parseTime(timeStr) {
    const parts = timeStr.split(':');
    if (parts.length === 2) {
        const hours = parseInt(parts[0]);
        const minutes = parseInt(parts[1]);
        return hours * 60 + minutes;
    }
    return NaN;
}
 for(let el of newrecords){
    el[0] = parseTime(el[0])
 }
    for(let i = 0; i < numbers.length; i++){
        let matchlist = newrecords.filter(el => el[1] ===numbers[i])
        for(let el of matchlist){
            출입기록.push(el[0])
        }
       출입기록.sort((a,b) => b -a)
        if(출입기록.length %2 === 1){ // 길이 홀수면 아웃안한거
        
            누적주차시간.push(최대시간-출입기록[0])
            출입기록.shift()
        } if(출입기록.length %2 === 0){ //짝수면 짝수요소 -홀수요소값을 answer에 넣어줘야한다
            while(출입기록.length > 0){
                누적주차시간.push(출입기록[0]-출입기록[1])
                출입기록.shift()
                출입기록.shift()
            }
        }
    if(누적주차시간.reduce((acc,cur) => acc + cur) < 기본시간){
        answer.push(기본요금)
    }else{
        answer.push(
기본요금 + Math.ceil((누적주차시간.reduce((acc,cur) => acc + cur) - 기본시간) / 단위시간) * 단위요금 )
    }   
        누적주차시간 = []
    }
   
    return answer
}
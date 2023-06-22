function solution(people, limit) {
    let cnt = 0
     people.sort((a, b) => a - b);
    let boat = [...people]
   
    
    while(boat.length !== 0){
        if(boat[0] + boat[boat.length-1] <= limit){ //제일 무거운사람과 제일 가벼운사람의 합이 limit을 안넘는경우 둘다 내보낸다
            boat.pop()
            boat.shift()
            cnt++
        }
        if(boat[0] + boat[boat.length-1] > limit){ //제일 무거운사람과 제일 가벼운 사람의 합이 limit을 넘는 경우 제일 무거운사람만 내보낸다.
            boat.pop()
            cnt++
        }
    }
    return cnt
}
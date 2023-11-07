function solution(l, r) {
    //0과 5로만 이루어진 숫자 오름차순으로.
    let answer = [];
    for(let i = l; i < r+1; i++){
        if(i%5 === 0){
            if([...i.toString()].filter((el => el === "0" || el === "5")).length === [...i.toString()].length){
            answer.push(i)
        }
    }    
    }
    
    return answer.length ?answer.sort((a,b) => a-b):[-1];
}
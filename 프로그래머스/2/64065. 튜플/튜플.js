function solution(s) {
    //작은 집합이 첫번째 원소이다.
    //작은집합부터 차례대로 정렬하고, 집합의 순서를 판별한다. ex => 이전원소와 순서가 다르다면 현재원소.filter((el) => el !== 이전원소의 요소).join("") 한 값을 이전원소에 맨뒤에 푸쉬해준다.
    let sortarr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]")).sort((a,b) => a.length - b.length)
    let answer = [sortarr[0][0]];
    
    for(let el of sortarr){
        el.forEach((v) =>{
            if(!answer.includes(v)){
                answer.push(v)
            }
        })
    }
    return answer
}
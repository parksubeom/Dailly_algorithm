function solution(arr) {
    var answer = [...arr];
    const pow = (length,num) => {
        let i = 0
        while(i < length){
            if(2 ** i === length){
                return Math.pow(2,i)
                break
            }
            if(2 ** i > length){
                return Math.pow(2,i)
                break
            }
            i++
        }
        
    }
    for(let i = 0; i < pow(arr.length,2)-arr.length; i++){
        answer.push(0)
    }
    
    return answer
}
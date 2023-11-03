function solution(code) {
    /*mode가 0일 때
     code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
     code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.*/
    
    /*mode가 1일 때
     code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
     code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.*/
    //true =0 false = 1
    
    let mode = true
    let ret = []
    for(let idx = 0; idx <= code.length; idx++){
       if(code[idx] === "1"){
           mode = !mode
       }
        if(mode === true && code[idx] !== "1" && idx%2 === 0){ //모드가 0일때
            ret.push(code[idx])        
            }
        else if(mode === false&&code[idx] !== "1" && idx%2 === 1){ //모드가 1일때
                ret.push(code[idx])     
        }
    }
    if(ret.join('') !== ""){
        return ret.join('')
    }
    return  "EMPTY"
}
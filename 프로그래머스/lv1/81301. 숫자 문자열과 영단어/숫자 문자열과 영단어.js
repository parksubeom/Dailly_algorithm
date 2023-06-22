
function solution(s) {
    let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"] 
    let result = []
    let checkstr = ''
    for(let el of [...s]){
        if(Number(el).toString(2) === "NaN"){ // 문자열이라면
            checkstr += el
            if(arr.indexOf(checkstr) !== -1){
                result.push(arr.indexOf(checkstr))
                checkstr = ''
            }
        }
        if(Number(el).toString(2) !== "NaN"){ //숫자라면
            result.push(Number(el))
        }
        
        
    }
    return Number(result.join(''))
}

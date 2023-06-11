//babbling.length는 1이상 100이하
//babbling[i].length는 1이상 15이하
//문자열은 알파벳 소문자로만 이루어짐

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
function solution(number) {
    
    return [...number].reduce((acc,cur) => Number(acc)+Number(cur))%9
}
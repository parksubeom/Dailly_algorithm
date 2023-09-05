function solution(numbers) {
    numbers.sort((a,b) => a-b)
    let result = []
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j <numbers.length; j++){       
                result.push(numbers[i]+numbers[j])
        }
    }
    let set = new Set(result)
    let setarr = [...set]
    return setarr.sort((a,b) => a-b)
}
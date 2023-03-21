function solution(ingredient) {
    let cnt = 0
    let stack = []
    
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i])
        if(stack.length > 0 && stack.slice(-4).join('') === '1231'){
            stack.spice(-4)
             cnt++     
        }
    }
    return cnt
}

solution([2, 1, 1, 2, 3, 1, 2, 3, 1])
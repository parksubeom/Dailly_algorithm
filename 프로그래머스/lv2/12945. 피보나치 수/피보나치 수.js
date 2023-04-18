function solution(n) {
    let answer = 0;
    answer = fibonacci(n)
    return answer;
}

function fibonacci(n) { //재귀적으로 하면 시간초과
    let fiboArr = new Array(n + 1).fill(0)
    fiboArr[0] = 0
    fiboArr[1] = 1
    for (let i = 2; i <= n; i++) 
        fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567
    return fiboArr[n]
}


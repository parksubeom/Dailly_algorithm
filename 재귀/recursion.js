// for 루프
function forpow(x, n) {
    let result = 1
    // 반복적인 사고를 통한 방법 : for 루프
    for (let i = 0; i < n; i++) {
        result *= x
    }

    return result
}

// 재귀 루프
function recursionpow(x, n) { // => 거듭제곱을 구하는 함수 
    if (n === 1) { // base case => n===1이되면 모든 절차가 간단해진다.
        return x
    } else {
        return x * recursionpow(x, n - 1) // x * 함수가 리턴하는 값.  언제까지? base case를 만족 할 때 까지.
    }
}

console.log(recursionpow(2, 3))

2 * 2 * 2
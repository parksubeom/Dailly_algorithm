function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    // 피보나치 = num-1 + num-2
    return num <= 1 ? num : fibonacci(num-1) + fibonacci(num-2)
  }

  console.log(fibonacci(9))
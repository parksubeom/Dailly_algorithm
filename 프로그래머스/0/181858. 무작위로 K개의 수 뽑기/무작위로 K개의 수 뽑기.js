function solution(arr, k) {
    // 중복을 제거한 새로운 배열을 생성
    let newarr = [...new Set(arr)];
    if (newarr.length >= k) {
        return newarr.slice(0, k);
    }
    while (newarr.length < k) {
        newarr.push(-1);
    }
    return newarr;
}

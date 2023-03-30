const powerSet = function (str) {
  //arr[i]는 알파벳 순서로 정렬되어야 합니다 => 배열정렬(오름차순)
  //집합은 중복된 원소를 허용하지 않습니다. => 중복제거
  //부분집합은 빈 문자열을 포함합니다. => 재귀함수 첫 인자로 빈문자열 주고 result에 삽입
  let sortstr = [...new Set([...str].sort())] // 중복제거 후 알파벳 순서 정렬
  let result = []; // 부분집합 담을 빈배열

   const subset = (idx, el) => { // 부분집합 리턴하는 재귀함수
    // base case
     if (idx === sortstr.length) { // 배열 끝까지 까지 탐색한경우
      result.push(el); // 
      return result
    }
    //idx번째 문자가 포함되지 않는 경우
    subset(idx + 1, el); //  1 '' 2'' 3''
    // idx번째 문자가 포함되는 경우
    subset(idx + 1, el + sortstr[idx]);// 1 a 2 b 3 c
  };
  
  subset(0, "");

  return [...new Set(result)]
};

powerSet('abc')

/*
   const powerSet = function (str) {
    let arr = [...new Set(str)].sort();
    if (arr.length === 1) return [""].concat(arr);
    let last = arr.pop();
    let lastArr = powerSet(arr).map((x) => x + last);
    return powerSet(arr).concat(lastArr).sort();
}

powerSet('abc')


 */
//["",c,b,bc,a,ac,ab,abc]
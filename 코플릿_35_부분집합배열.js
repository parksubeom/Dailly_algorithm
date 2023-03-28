/*
 하나의 집합을 의미하는 문자열을 입력받아
  각 문자를 가지고 만들 수 있는 모든 부분집합을 리턴해야 합니다.
 */

  const powerSet = function (str) {
    //arr[i]는 알파벳 순서로 정렬되어야 합니다 => 배열정렬(오름차순)
    //집합은 중복된 원소를 허용하지 않습니다. => 중복제거
    //부분집합은 빈 문자열을 포함합니다. => 배열 맨 앞에 빈문자열 삽입
    let sortstr = [...new Set(['',...str].sort())]
    let result = [];
  
     const subset = (idx, el) => {
      // base case
      if (idx === sortstr.length) {
        result.push(el);
        return;
      }
      subset(idx + 1, el);
      subset(idx + 1, el + sortstr[idx]);
    };
    
    subset(0, '');
    return [...new Set(result.sort())]
  };
   
  
function solution(s){
    //뭔가 스택 또는 재귀적인 접근이 가능해보인다.
    //연속된 배열요소를 삭제해주고 남은 배열을 다시 재귀로 넘겨준다.
    // 반복하다가 빈문자열이면 1을 리턴한다.
  const stack = []; // 스택을 사용하기 위해 빈 배열을 생성합니다.

  for (let i = 0; i < s.length; i++) { // 문자열 S의 모든 문자를 탐색합니다.
    const char = s[i]; // 현재 문자를 가져옵니다.

    if (stack.length > 0 && stack[stack.length - 1] === char) {
      // 스택이 비어있지 않고, 스택의 가장 마지막에 있는 문자가 현재 문자와 같은 경우
      stack.pop(); // 스택에서 가장 마지막에 있는 문자를 제거합니다.
    } else {
      stack.push(char); // 스택에 현재 문자를 추가합니다.
    }
  }

  return stack.length === 0 ? 1 : 0; // 문자열을 모두 탐색한 후에 스택에 남아있는 문자가 없으면 1을 반환하고, 그렇지 않으면 0을 반환합니다.
}
solution("baabaa")
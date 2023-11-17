function solution(name) {
    //up = "BCDEFGHIJKLMN"
    //down = "ZYXWVUTSRQPO"
    // name을 순회하며 alphabet.indexOf(해당알파벳) 의 결과가 12이하면 그냥 해당인덱스, 12이상이면 26-해당인덱스
    // 커서 위아래는 알파벳을 좌우로 움직이는 것. / 커서 좌우는 알파벳 인덱스를 바꾸는 것
    // name의 현재 인덱스 알파벳이 "A"라면 다른조작없이 넘어가도 된다.
    // 중간에 "AAAAA"가 껴있는 케이스가 관건
    // 비교를 해줘야한다 Math.min(우측이동하다가 A를만나서 되올아오는 경우,정방향으로 가는경우 , "AAAAAAAB"같이 뒤에서 시작해야하는 경우 )
    // 연속된 "A"의 갯수가 이전까지 인덱스보다 크다면, 뒤로돌아가는게 이득
    // 그게 아니라면 정방향 진행이 이득이다.
    
    // CASE1. 이름에"A"가 거의어서 정방향 진행하는경우 : 이름을 만들기위한 알파벳 조작수 + 정방향조작수
    // CASE2. 연속된 "A"를 만나기 전까지 이동횟수가 연속된"A"의 길이보다 짧은경우 : 이름을 만들기위한 알파벳 조작수 + 연속된 "A"를 만                 나기전까지 이동횟수 * 2 + 역방향에서 연속된 "A"가 끝난 부분까지 이동횟수
    let answer = 0;
  let min_move = name.length - 1;

  [...name].map((n, i) => {
    answer += Math.min(n.charCodeAt() - 65, 91 - n.charCodeAt()); // 상하 조작수 계산
    let 에이갯수 = i + 1;

    // 연속되는 A의 개수 count
    while (에이갯수 < name.length && name[에이갯수] === 'A') { //다음 알파벳이 A이면 인덱스에 ++해준다
      에이갯수++;
    }

    min_move = Math.min(
      min_move, // 정방향
      i * 2 + name.length - 에이갯수, // A를 만나기전까지 이동했던 거리 왕복 + (정방향 이동횟수 - 연속된 A갯수) 
      i + 2 * (name.length - 에이갯수), // "AABBBBB"
    );
  });

  return answer + min_move;
}


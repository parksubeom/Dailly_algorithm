function solution(clothes) {
    /*
    간단하게 오늘 입은것과 다르면 된다.
    한 종류의 의상만 입는 경우가 있기때문에 최소 배열의 갯수만큼부터 시작한다.
    의상 별 갯수를 담은 객체를 만든다.
    
    */
   let answer = clothes.length
   let types = {}
   let result = 0
   clothes.forEach((v) => (types[v[1]] = (types[v[1]] || 0) + 1))
    let x = Object.values(types).reduce((acc,cur) => (acc+1) * (cur+1) - 1,0)
  
    return x
}
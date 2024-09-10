


function solution(board) {
    /*
    1. 보드를 순회한다.
    2. 보드의 요소 중 1 을 포함한 요소의 인덱스를 찾는다.
    3. 1을 포함한 요소에서 1이 몇번째 인덱스에 있는지 찾는다.
    4.1이 위치한 인덱스와 앞뒤인덱스 번호를 
    */
    function findOne (element) {
    if(element === 1){
        return true
    }
}
    let x = []
    let y = []
    board.forEach((el,idx) => {
        if(el.find(findOne)){
            y.push(idx-1,idx,idx+1)
            y = [...new Set(y.filter((el) => el>=0 && el < board.length))];
            x.push(el.reduce((acc,cur,idx) => {
                if(cur === 1){
                    acc.push(idx-1,idx,idx+1)
                }
                return  [...new Set(acc.filter((ele) => ele>=0 && ele < el.length))]
            },[])) 
        }
    })
    console.log(y)
    return console.log(x)

}
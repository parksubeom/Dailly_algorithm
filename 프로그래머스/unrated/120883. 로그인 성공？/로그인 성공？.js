function solution(id_pw, db) {
    //입력받은 값 중 0번쨰인덱스와 1번째 인덱스가 db.forEach(el) 에서 el의 요소와 일치하는지 확인한다,
    let [id,pw] = id_pw;
    let status = ''
    for(let el of db){
        if(el[0] === id && el[1] === pw){
            return  'login'
        }else if (!db.flat().includes(id)){
            return "fail"   
        }else if(el[0] === id && el[1] !== pw){
            return  "wrong pw"   
        }
    }

}
function solution(n, lost, reserve) {
    /*
    -전체 학생의 수는 2명 이상 30명 이하입니다.
    -체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
    -여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
    -여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
    -여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에     -다른 학생에게는 체육복을 빌려줄 수 없습니다.

    lost = 잃어버린 애들
    reserve = 여별옷 가져온애들
    n = 2 <= n <= 30
    
    의사코드
    1.reserve 를 순회하며 잃어버린애들이 여벌옷있는애들과 사이즈가 맞는지 판별해야한다.
    2.여벌옷을 가져온 학생도 도난당할 수 있다. 여벌옷 가져왔다 !== 옷이 두벌있다.
    3.여벌옷을 가져온 애들이 도난당한 목록에있다면, 여벌옷도, 빌릴필요도 없기떄문에 둘다 리스트에서 지워준다.
    */
let reallost=lost.filter((l)=>!reserve.includes(l)).sort((a,b) => a-b);
let realreserve=reserve.filter((r)=>!lost.includes(r));
let 체육복있는애들 = n - reallost.length

reallost.forEach((el) =>{
    if(realreserve.length === 0){ //여벌옷을 가진애들이 다 빌려준 경우
        return
    }
    if(realreserve.includes(el-1)){ // 앞에학생 매칭완료
        realreserve=realreserve.filter((r) => r !== el-1)
         체육복있는애들++
    }else if(realreserve.includes(el+1)){
        realreserve=realreserve.filter((r) => r !== el+1)
         체육복있는애들++
    }
})

    return 체육복있는애들
}
function solution(bridge_length, weight, truck_weights) {
    //대기에서 다리를 다 지나는데에 걸리는 시간 3초
   /* let 최대트럭수 = bridge_length
    let 최대하중 = weight
    let 트럭별무게 = truck_weights
    let 차량대수 = 트럭별무게.length
    let 다리위트럭 = []
    let 다리지난트럭 = []
    let cnt = 1
    for(let el of 트럭별무게){
        다리위트럭.push(el)
        if(다리위트럭.reduce((acc,cur) => acc + cur ,0) > 최대하중){
            다리지난트럭.push(다리위트럭)
            cnt++
        }if(다리지난트럭.length === 차량대수){
            return cnt
        }
    }
    if(다리위트럭.reduce((acc,cur) => acc + cur ,0) === 최대하중){
        return 최대트럭수 + 트럭별무게[트럭별무게.length-1]
    }
    return 최대트럭수 + 1*/
    
    //출차가 먼저
    //입차가 그 다음 순서
    //다리를 건너는 차량의 무게 > 다리하중 => 맨 앞의 차량 출차
    //최대 무게를 넘지않을동안 입차시킴
    
    
    //다리를 건너는 트럭의 무게와 위치를저장.
    let bridge = [];
    let total_weight = 0;
    let time = 0;
    
    while(bridge.length > 0 || truck_weights.length > 0) {
        time++
        //birdge[i]][0] = 무게, bridge[i][1] = 시간 + 거리
        for(let i = 0; i < bridge.length; i++){
            bridge[i][1]++
        }
        //출차
        if(bridge[0] && bridge[0][1] >= bridge_length){
            const truck = bridge.shift();
            total_weight -= truck[0]
        }
        
        //입차
        if(truck_weights.length > 0 && total_weight + truck_weights[0] <= weight){
            let truck_weight = truck_weights.shift();
            bridge.push([truck_weight, 0])
            total_weight += truck_weight;
        }
    }
    return time
}
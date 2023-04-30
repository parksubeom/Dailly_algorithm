function solution(num_list) {
    let pair = num_list.filter((el) => el%2 === 0 ).reduce((acc,cur) => String(acc)+String(cur))
    let odd = num_list.filter((el) => el%2 === 1).reduce((acc,cur) => String(acc)+String(cur))
    return Number(odd) + Number(pair)
}
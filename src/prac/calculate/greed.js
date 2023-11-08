function getWords(num,total){
    let str = ''
    for(let i = num;i>=1;--i){
        // --的原因是当前插入值的最小值计算值 按 -1的数量计算
        // 这里 mid 是当前位置理论上可以选择的最小值
        let mid = total - 26*(i -1)
        if(mid >0){
            str += String.fromCharCode(mid+96);
            total -= mid
        }else{
            // 最小值是 a  同时更新total
            str += 'a'
            total -= 1
        }
    }
    return str
}

//console.log(getWords(3,27))

// 分发饼干 前提是均排序完成
function getMax(target,own){
    let tar = 0
    let res = 0
    let ownI = 0
    while(tar <= target.length -1 && ownI <= own.length -1){
        if(own[ownI] >= target[tar]){
            res++
            tar++
            ownI++
        }else{
            tar++
        }
    }
    return res
}

// console.log(getMax([5,4,3,2,2],[4,2,1]))

// 判断回文字符串
function judgeString(str){
    let start = 0
    let end = str.length -1
    let res = true
    while(start <= end){
        if(str[start] !== str[end]){
            return false
        }else{
            start++
            end--
        }
    }
    return res
}

//console.log(judgeString('cabac'))
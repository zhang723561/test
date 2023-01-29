// 判断一个数是否是质数
// 主要思路 偶数不是质数 2 是质数  开更号进行中间值判定  除数的值不需要为偶数 因为偶数已经被过滤了
 function isPrime(num){
    if(num == 2){
        return  true
    }else if(num % 2 == 0){
        return  false
    }else{
        let mid = Math.sqrt(num)
        for(let i= 3;i<mid;i+=2){
            if(num % i == 0){
                return  false
            }
        }
        return true
    }
 }

//  手写防抖 debounce
function debounce(fun,delay=300){
    let timer
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fun.apply(this,args)
        },delay)
    }
}

// 数组对象去重
function reduceArr(arr){
    let obj = {}
    let res = arr.reduce((item, next) => {
        obj[next.title] ? '' : (obj[next.title] = true && item.push(next))
        return item
    }, [])
    return res
}

// 节流 throttle
function throttle(fun,delay=300){
    let flag = true
    return function(...args){
        if(!flag) return
        flag = false
        setTimeout(()=>{
            fun.apply(this,args)
            flag = true
        },delay)
    }
}

// 手动实现instanceof
function confirm(left,right){
    let proto = left.__proto__
    let prototype = right.prototype
    while (true) {
        if (proto === null) return false
        if (proto === prototype) return true
        proto = proto.__proto__
    }
}


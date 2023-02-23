// 对数组对象去重
function reduceArr(arr,props){
    let obj = {}
    let res = arr.reduce((item, next) => {
        obj[next[props]] ? '' : (obj[next[props]] = true && item.push(next))
        return item
    }, [])
    return res

}

// 百分比展示
const numToPercent = (num) => {
    const target = +num
    if (target === 0) {
        return 0
    }
    if (target) {
        return (target * 100).toFixed(2) + '%'
    }
    return ''
}

// 数字千分位
const formatKilobits = value => {
    if (!value) return value
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// 输入框输入值校验
//@change="valueChange($event, text)"
const valueChange = (e, record) => {
    let value = e.target.value
    value = value
        .replace(/[^\d.]/g, '') //将非数字和点以外的字符替换成空
        .replace(/^\./g, '') //验证第一个字符是数字而不是点
        .replace(/\.{2,}/g, '.') //出现多个点时只保留第一个
        .replace('.', '$#$') // 1、将数字的点替换成复杂字符$#$
        .replace(/\./g, '') // 2、将字符串的点直接清掉
        .replace('$#$', '.') // 3、将复杂字符再转换回点
        .replace(/^(\\-)*(\d+)\.(\d\d).*$/, '$1$2.$3') //只能输入1个小数
    if (value.indexOf('.') < 0 && value != '') {
        value = parseInt(value)
    } else if (value.indexOf('.') > 1 && value[0] === '0') {
        value = parseInt(value)
    }
    e.target.value = value
    record.newVal = value
}




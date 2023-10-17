// 拼音模糊搜索匹配
export const searchFilter = (input, option) => {
    const firstRune = input[0].toLocaleLowerCase()
    if (firstRune <= 'z' && firstRune >= 'a') {
        // 匹配连续全拼和首字母
        if(option.pinyin.match(RegExp(input.toLocaleLowerCase())) || option.firstEnUpper.match(RegExp(input.toLocaleLowerCase()))) {
            return true
        }else {
            // 匹配非连续首字母
            let inputArr = input.replace(/\s+/g, "").split("")
            let strArr = option.firstEnUpper
            let flag = true
            let startNum = 0
            for(let i = 0 ; i< inputArr.length; i++) {
                if( !strArr.slice(startNum, strArr.length).includes(inputArr[i]) ) {
                    return flag = false
                }else {
                    startNum = strArr.indexOf(inputArr[i])
                    flag = true
                }
            }
            return flag
        }

    } else {
        // 匹配连续字符
        if (option.label.match(RegExp(input))) {
            return true
        }else {
            if(input.trim()) {
                // console.log('input', input.match(/[\u4e00-\u9fa5]/g))
                // 匹配非连续汉字
                let inputArr = input.match(/[\u4e00-\u9fa5]/g)
                let strArr = option.label
                let flag = true
                let startNum = 0
                for(let i = 0 ; i< inputArr?.length; i++) {
                    if( !strArr.slice(startNum, strArr.length).includes(inputArr[i]) ) {
                        return flag = false
                    }else {
                        startNum = strArr.indexOf(inputArr[i])
                        flag = true
                    }
                }
                return flag
            }
        }
    }
}
// 利用函数式编程实现 找出一句英文中 单词最长的词的长度的功能

const pipe = (...rest) => { // 将函数按按照顺序摆放
    return function(x){
        let y = x
        for(func of rest){
            y = func(y)
        }
        return y
    }
}

const split = s => s.split(' ') // 按照' '分割字符串

const length = w => w.length // 获取字符串长度

const map = f => { // 柯里化map
    return function(arr){
        return arr.map(f)
    }
}

const reduce= f =>{ // 柯里化reduce
    return function(arr){
        return arr.reduce(f)
    }
}

const max = (a, b) => a>b ? a : b // 定义max函数

const replace = (a) => { // 柯里化replace
    return function(b){
        return (x)=>{
            return x.replace(a,b)
        }
    }
} 

const filterSource = replace('.')('') // 定义去掉句子中影响长度的'.'的函数

const getLengthArr = map(length) // 定义将数组元素替换为元素长度的函数

const findBiggestNumber = reduce(max) // 定义寻找最大值的函数

const lengthOfLongestWord = pipe(filterSource,split,getLengthArr,findBiggestNumber) // 定义找出一句英文中单词最长的词的长度的函数

const str = 'Get the length of the longest word from the sentence.' // x

lengthOfLongestWord(str) // y = f(x)

// x = 'Get the length of the longest word from the sentence.'  
// f = 定义找出一句英文中单词最长的词的长度
// y = f(x)
// y = 8

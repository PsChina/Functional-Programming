// 利用函数式编程实现 找出一句英文中 单词最长的词的长度的功能

const pipe = (...rest) => {
    return function(x){
        let y= x
        for(func of rest){
            y = func(y)
        }
        return y
    }
}

const split = s => s.split(' ')

const length = w => w.length

const map = f => {
    return function(arr){
        return arr.map(function(item){
            return f(item)
        })
    }
}

const reduce= f =>{
    return function(arr){
        return arr.reduce(f)
    }
}

const max = (a, b) => a>b ? a : b

const replace = (a,b) => {
    return (x)=>{
        return x.replace(a,b)
    }
} 

const filterSource = replace('.','')

const getLengthArr = map(length)

const findBiggestNumber = reduce(max)

const lengthOfLongestWord = pipe(filterSource,split,getLengthArr,findBiggestNumber)

const str = 'Get the length of the longest word from the sentence.'

lengthOfLongestWord(str)

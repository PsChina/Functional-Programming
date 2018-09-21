# 函数式编程简介

与面向对象编程（Object-oriented programming）和过程式编程（Procedural programming）并列的编程范式。

最主要的特征是，函数是第一等公民。

强调将计算过程分解成可复用的函数，典型例子就是map方法和reduce方法组合而成 MapReduce 算法。

只有纯的、没有副作用的函数，才是合格的函数。

函数式编程 [百度百科](https://baike.baidu.com/item/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B/4035031?fr=aladdin)

什么是 __副作用__ ？

所谓"副作用"（side effect），指的是函数内部与外部互动（最典型的情况，就是修改全局变量的值），产生运算以外的其他结果。

函数式编程强调没有"副作用"，意味着函数要保持独立，所有功能就是返回一个新的值，没有其他行为，尤其是不得修改外部变量的值。


先写一个demo练练手

## map

高阶函数
```js
function map(arr){
    const newArr = arr.concat()
    const {length} = arr
    return function(f){
        for(let i=0; i<length; i++){
            newArr[i] = f(newArr[i])
        }
        return newArr
    }
}
function double(x){
    return 2*x
}

map([1,2,3])(double)

// => [2,4,6]
```
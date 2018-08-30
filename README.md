# 函数式编程简介

与面向对象编程（Object-oriented programming）和过程式编程（Procedural programming）并列的编程范式。

最主要的特征是，函数是第一等公民。

强调将计算过程分解成可复用的函数，典型例子就是map方法和reduce方法组合而成 MapReduce 算法。

只有纯的、没有副作用的函数，才是合格的函数。

详细的说明请看 [阮一峰网络日志](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)

看了阮一峰的网络日志后感觉不是很懂不管了先一个demo练练手

## map

```js
function map(val){
    return function(f){
       return f(val)
    }
}
function double(x){
    return 2*x
}

map(3)(double)
```
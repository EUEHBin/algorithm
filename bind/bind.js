Function.prototype.myBind = function (context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    // 获取参数：arguments为全部参数，第一个为context对象，所以从下标1截取到末尾，是全部的参数
    const args = [...arguments].slice(1)

    // 保存this，防止在不同环境下this一直改变
    const fn = this

    // bind不直接执行，需要返回一个方法
    return function Fn() {
        // 考虑被new的情况,如果 this instanceof Fn 是true，则代表 this所指的方法是new出来的
        let mContext = this instanceof Fn ? new fn(...arguments) : context
        // 后续参数数组需要与arguments进行合并，既rgs.concat(...arguments)
        let mArgs = args.concat(...arguments)
        // apply两个参数（this指向，参数数组）
        return fn.apply(mContext, mArgs);
    }
}


// 测试
let mFun = function (...args) {
    console.log(this,args)
}

let obj = {name: '李四'}
const bindFn = mFun.myBind(obj, 1, 2, 3, 4)
const bindNew = new bindFn()
console.log(bindNew)

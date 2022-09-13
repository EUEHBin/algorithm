// 实现promise
class MyPromise {

    constructor(executor) {
        // 初始化this指向
        this.initBind()
        // 初始化值
        this.initValue()
        // throw的情况
        try {
            // 执行传进来的函数
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    // 初始化this
    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    // 初始化值
    initValue() {
        // promise状态
        this.PromiseState = 'pending'
        this.PromiseReasult = null

        this.onFulfilledCallbacks = [] // 保存成功回调
        this.onRejectedCallbacks = [] // 保存失败回调
    }

    resolve(value) {
        // 状态不是pending，不向下执行（resolve和reject只能响应第一个）
        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'fulfilled'
        this.PromiseReasult = value

        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseReasult)
        }
    }

    reject(reason) {
        // 状态不是pending，不向下执行（resolve和reject只能响应第一个）
        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'rejected'
        this.PromiseReasult = reason

        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseReasult)
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason
        }

        let thenPromise = undefined
        thenPromise = new MyPromise((resolve, reject) => {

            const resolvePromise = cb => {
                try {
                    const x = cb(this.PromiseReasult)
                    if (x === thenPromise) {
                        throw new Error('不能返回自身')
                    }
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    } else {
                        resolve(x)
                    }
                } catch (err) {
                    reject(err)
                    throw new Error(err)
                }
            }

            if (this.PromiseState === 'fulfilled') {
                resolvePromise(onFulfilled)
            } else if (this.PromiseState === 'rejected') {
                resolvePromise(onRejected)
            } else if (this.PromiseState === 'pending') {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this,onFulfilled))
                this.onRejectedCallbacks.push(resolvePromise.bind(this,onRejected))
            }
        })

        return thenPromise
    }
}

const test3 = new MyPromise((resolve, reject) => {
    resolve(100) // 输出 状态：成功 值： 200
    // reject(100) // 输出 状态：成功 值：300
}).then(res=>{
    console.log(res)
    return res * 2
}).then(res=>{
    console.log(res)
    return res * 2
}).then(res=>{
    console.log(res)
})







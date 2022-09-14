class MyPromise {
    constructor(exc) {
        this.initBind()
        this.initValue()

        try {
            exc(this.resolve, this.reject)
        } catch (err) {
            this.reject(err)
        }
    }

    initBind() {
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        this.PromiseState = 'pending'
        this.PromiseReasult = null

        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
    }

    resolve(value) {
        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'fulfilled'
        this.PromiseReasult = value

        while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseReasult)
        }
    }

    reject(err) {
        if (this.PromiseState !== 'pending') return

        this.PromiseState = 'reject'
        this.PromiseReasult = err

        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseReasult)
        }
    }

    then(onFulfilled, onReject) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onReject = typeof onReject === 'function' ? onReject : reason => {
            throw reason
        }

        let thenPromise = null
        thenPromise = new MyPromise((resolve,reject)=>{

            const resolvePromise = cb =>{
                try {
                    const x = cb(this.PromiseReasult)
                    if (x === thenPromise){
                        throw '不能是自身'
                    }
                    if (x instanceof thenPromise){
                        x.then(resolve,reject)
                    }else {
                        resolve(x)
                    }
                }catch (err){
                    reject(err)
                }
            }
            if (this.PromiseState === 'fulfilled') {
                resolvePromise(onFulfilled)
            } else if (this.PromiseState === 'reject') {
                resolvePromise(onReject)
            } else if (this.PromiseState === 'pending') {
                this.onFulfilledCallbacks.push(resolvePromise.bind(this,onFulfilled))
                this.onRejectedCallbacks.push(resolvePromise.bind(this,onReject))
            }

        })
        return thenPromise
    }


    catch(onReject) {
        onReject = typeof onReject === 'function' ? onReject : reason => {
            throw reason
        }
        if (this.PromiseState === 'reject') {
            onReject(this.PromiseReasult)
        }
    }
}

let mPromise = new MyPromise((resolve, reject) => {
    // reject('失败')
    setTimeout(() => {
        resolve('成功')
    }, 2000)
}).then(res => {
    console.log(res)
})
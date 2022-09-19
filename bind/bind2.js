Function.prototype.mBind = function (context){
    if (typeof this !=="function"){
        throw new TypeError('ERROR')
    }

    let args = [...arguments].slice(1)
    let fn = this

    return function Fn(){
        let mContext = this instanceof Fn ? new fn(...arguments) : context
        let mArgs = args.concat(...arguments)

        return fn.apply(mContext,mArgs)
    }
}
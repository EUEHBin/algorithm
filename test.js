let f1 = () =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(1)
        },1000)
    })
}

let f2 = () =>{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(2)
        },1000)
    })
}

let f3 = () =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(3)
        },1000)
    })
}


let f4 = async ()=>{
    try {
        const result1 = await f1()
        console.log(result1)
        console.log('1111111111111111')
        const result2 = await f2()
        console.log(result2)
        console.log('2222222222222222')
        const result3 = await f3()
        console.log(result3)
        console.log('3333333333333333')
    }catch (err){
        console.log('******************')
    }
}

f4()




const curry = (fn) =>{
    return function (x){
        return function (y){
            return fn(x,y)
        }
    }
}

const fn = (x,y) =>{
    console.log(x+y)
}

const mFn = curry(fn)

console.log(mFn(1)(2))



const curry2 = function(fn){
    return function curriedFn(...args){
        if(args.length<fn.length){
            return function(){
                return curriedFn(...args.concat([...arguments]));
            }
        }
        return fn(...args);
    }
}

const fn2 = (x,y,z,a)=>x+y+z+a;

const mFn2 = curry2(fn2)
console.log(mFn2(1)(2)(3)(4))




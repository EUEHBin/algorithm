function throttled2(fn, delay = 2900) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}

function fn(){
    console.log('1111111111111111')
}

let time = throttled2(fn)

setInterval(function (){
    console.log('**************')
    time()
},800)
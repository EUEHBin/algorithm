function throttled1(fn, delay = 2000) {
    let oldtime = Date.now()
    return function (...args) {
        let newtime = Date.now()
        if (newtime - oldtime >= delay) {
            fn.apply(null, args)
            oldtime = Date.now()
        }
    }
}

function fn(){
    console.log('1111111111111111')
}

let time = throttled1(fn)

setInterval(function (){
    console.log('**************')
    time()
},500)
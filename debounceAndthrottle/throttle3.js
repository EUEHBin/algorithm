function throttled3(fn, delay) {
    let timer = null
    let starttime = Date.now()
    return function () {
        let curTime = Date.now() // 当前时间
        let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
        let context = this
        let args = arguments
        clearTimeout(timer)
        if (remaining <= 0) {
            fn.apply(context, args)
            starttime = Date.now()
        } else {
            timer = setTimeout(fn, remaining);
        }
    }
}

function fn(){
    console.log('1111111111111111')
}

let time = throttled3(fn,3000)

time()
time()
time()
time()
time()
time()
// setInterval(function (){
//     console.log('**************')
//     time()
// },1000)
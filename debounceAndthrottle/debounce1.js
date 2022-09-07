// 防抖
function debounce1(fn, wait){
    let timer = null
    return function (){
        let context = this
        let args = arguments

        clearTimeout(timer)
        timer = setTimeout(function (){
            fn.apply(context,args)
        },wait)
    }
}

function fn (){
    console.log('111111111111111111')
}

let test = debounce1(fn,300)
let  i =0

let timer = setInterval(()=>{
    console.log('************************')
    test()
    i++
    if (i>6){
        clearInterval(timer)
    }
},100)
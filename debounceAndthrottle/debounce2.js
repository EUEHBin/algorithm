/**
 *  防抖
 * 立即执行：即多次触发事件，第一次会立即执行函数，之后在设定wait事件内触犯的事件无效，不会执行。
 * 非立即执行函数： 多次触发事件，只会在最后一次触发事件后等待设定的wait时间结束时执行一次。
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout); // timeout 不为null
        if (immediate) {
            let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) {
                func.apply(context, args)
            }
        }
        else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
    }
}

function fn() {
    console.log('111111111111111111')
}

let test = debounce(fn, 300, true)
let i = 0
test()
let timer = setInterval(() => {
    console.log('************************')
    test()
    i++
    if (i === 5) {
        test = debounce(fn, 300)
    } else if (i > 10) {
        clearInterval(timer)
    }
}, 100)
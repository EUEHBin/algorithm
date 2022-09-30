// pow(2, 4) = 2 * pow(2, 3)
// pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2

function pow(num, n) {
    if (n === 1) {
        return num
    } else {
        return num * pow(num, n - 1)
    }
}

console.log(pow(2, 3))

// 递归实现阶乘
function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))

// 尾递归实现阶乘
function factorialEnd(n, total) {
    if (n === 1) return total
    return factorialEnd(n - 1, n * total)
}

console.log(factorialEnd(5, 1))


// 尾递归数组求和
function mSum(arr, total) {
    if (arr.length === 0) return total
    return mSum(arr, total + arr.pop())
}

console.log(mSum([9, 2, 5], 0))

// 数组扁平化
let arrFlat = [1, 2, 3, [4, 5, [6, 7], [8, 9]], [10, 11], 12, [13, 14]]

function flat(arr = [], result = []) {
    arr.forEach(item => {
        if (Array.isArray(item)){
            result = result.concat(flat(item,[]))
        }else {
            result.push(item)
        }
    })
    return result
}

console.log(flat(arrFlat))


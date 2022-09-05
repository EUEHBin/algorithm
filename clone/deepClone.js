/**
 * @Description: 深拷贝
 * @author Bin Gu
 * @date 2022/9/5
 */
// 深拷贝
function deepClone(data,map = new WeakMap()){
    if (data === null) return null
    if (data instanceof Date) return new Date(data)
    if (data instanceof RegExp) return new RegExp(data)
    if (typeof data !== 'object') return data
    // 循环引用
    if (map.get(data)) return map.get(data)

    // 相当于 cloneData = {},用来存储拷贝数据
    let cloneData = new data.constructor()
    // 存储引用，可以解决循环引用问题
    map.set(data,cloneData)

    for (let key in data){
        if (data.hasOwnProperty(key)){
            cloneData[key] = deepClone(data[key],map)
        }
    }
    return cloneData
}

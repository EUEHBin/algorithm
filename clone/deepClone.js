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
    if (map.get(data)) return map.get(data)

    // 相当于 cloneData = {}
    let cloneData = new data.constructor()
    map.set(data,cloneData)

    for (let key in data){
        if (data.hasOwnProperty(key)){
            cloneData[key] = deepClone(data[key],map)
        }
    }
    return cloneData
}

const deepClone = (obj,map = new WeakMap) =>{
    if (obj === null) return null
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
    if (typeof obj !== 'object') return obj
    if (map.get(obj)) return map.get(obj)

    let cloneObj = new obj.constructor()
    map.set(obj,cloneObj)

    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            cloneObj[key] = deepClone(obj[key],map)
        }
    }
    return cloneObj
}
let set = new Set()

let data_proxy = new Proxy(data,{
    get(target,key){
        set.add(effect)
        return target[key]
    }
})
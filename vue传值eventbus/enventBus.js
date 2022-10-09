class Bus {
    constructor() {
        this.callBacks = {}
    }

    $on(name,fn){
        this.callBacks[name] = this.callBacks[name] || []
        this.callBacks[name].push(fn)
    }

    $emit(name,args){
        if (this.callBacks[name]){
            this.callBacks[name].forEach(callback=>{
                callback(args)
            })
        }
    }
}
const bus = new Bus()

bus.$on('change',(args)=>{
    console.log(args)
})

bus.$emit('change',10086)



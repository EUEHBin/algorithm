// 原型式继承
function createObject(obj){
    function Fun(){}
    Fun.prototype = obj
    return new Fun()
}

let person = {
    name:'tom',
    age:18,
    showName(){
        console.log(this.name)
    }
}

let children = createObject(person)
children.name = 'lucy'

console.log(children.name)
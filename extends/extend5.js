// 寄生式继承
function objectCopy(obj){
    function Fun(){}
    Fun.prototype = obj
    return new Fun()
}

function createAnother(obj){
    let clone = objectCopy(obj)
    clone.showName = function (){
        console.log(this.name)
    }
    return clone
}

let person = {
    name:'tom',
    age:18,
    hobby:['jump']
}

let child = createAnother(person)
child.hobby.push('run')

console.log(child.hobby)
// 原型式继承
let person = {
    name: 'tom',
    age: 18
}

let child = Object.create(person)
child.sex = '小伙子'

console.log(child.name, child.age, child.sex)
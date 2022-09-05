// ES6
class Person{
    constructor(name) {
        this.name = name ||'tom'
        this.age = 18
        this.hobby = ['jump']
    }
}

class Child extends Person{
    constructor(name) {
        super(name);
        this.sex = '男娃子'
        this.hobby.push('run')
    }
}

let child = new Child('lucy')
console.log(child)
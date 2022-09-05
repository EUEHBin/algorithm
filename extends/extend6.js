// 寄生组合式继承
function objectCopy(obj) {
    function Fun() {}
    Fun.prototype = obj
    return new Fun()
}

function inheritPrototype(child, parent) {
    let prototype = objectCopy(parent.prototype)
    prototype.constructor = child
    Child.prototype = prototype
}

function Parent(name) {
    this.name = name
    this.hoby = ['唱', '跳']
}

Parent.prototype.showName = function () {
    console.log('my name is：', this.name)
}

function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}

inheritPrototype(Child, Parent);
Child.prototype.showAge = function () {
    console.log('my age is：', this.age)
}

let child1 = new Child("mjy", 18)
child1.showAge() // 18
child1.showName() // mjy
child1.hoby.push("rap")
console.log(child1.hoby) // ['唱', '跳', 'rap']

let child2 = new Child("yl", 18)
child2.showAge() // 18
child2.showName() // yl
console.log(child2.hoby) // ['唱', '跳']
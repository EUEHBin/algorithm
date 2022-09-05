// 借用构造函数继承
function Parent(gender){
    this.info = {
        name:'tom',
        age:18,
        gender
    }
}

function Child(gender){
    // 在子类构造函数内部调用父类构造函数
    Parent.call(this,gender)
}

const child = new Child('男')
console.log(child.info)
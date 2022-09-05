// 原型链继承
function Parent() {
    this.isShow = true
    this.info = {
        name: 'tom',
        age: 18
    }
}
Parent.prototype.getInfo = function (){
    console.log(this.info)
    console.log(this.isShow)
}

function Children(){}
// 将子的prototype指向父对象实例
Children.prototype = new Parent()
let children = new Children()
children.getInfo()

// 组合式继承
function Parent(gender){
    this.info = {
        name:'tom',
        age:18,
        gender
    }
}

Parent.prototype.getInfo = function (){
    console.log(this.info)
}

function Children(gender){
    Parent.call(this,gender)
}

Children.prototype = new Parent('男')
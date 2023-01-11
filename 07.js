/* let obj = {};
// alert(obj)
console.log(obj.toString());

console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString() === obj.__proto__.toString());
console.log(obj.toString() === Object.prototype.toString());

console.dir([1, 2, 3]); */

// __proto__的值必然是对象或者null
// __proto__的值是对象时，它的值必然是Object.prototype或者其它对象

// 写入不使用原型，原型仅用于读取属性
// 读取时，如果对象本身没有该属性，就会使用原型的属性
// 读取时，如果对象本身没有该属性，也没有原型的属性，就会返回undefined
/* let animal = {
    eats: true,
    walk() {
        console.log('Animal walk');
    },
};
let rabbit = {
    __proto__: animal,
};
rabbit.walk = function () {
    console.log('Rabbit walk');
};
rabbit.walk(); */

// 访问器属性是例外，赋值操作由setter函数处理，写入时，如果对象本身没有该属性，就会使用原型的属性
/* let user = {
    name: 'John',
    surname: 'Smith',

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true,
};
console.log(admin.fullName);
admin.fullName = 'Alice Cooper';
console.log(admin.fullName);
console.log(admin.name);
console.log(user.fullName); */

// this的值取决于调用的上下文，始终是"."左边的对象
// admin.fullName实际上是admin做this
// 这是一件非常重要的事儿，因为我们可能有一个带有很多方法的大对象，并且还有从其继承的对象。当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。
// 所以，方法是共享的，但是对象状态不是

// for in 循环会迭代继承的属性
// 只想迭代自己的属性时，可以用obj.hasOwnProperty(key)来做判断，这个方法是从原型继承来的，是不可枚举的

// 2.F-prototype

// Rabbit.prototype = animal
// it means when construct a new Rabbit, set its [[Prototype]] to animal

// Rabbit class' prototype = animal === Rabbit class' instance's [[Prototype]] = animal
// default: a function's prototype = itself

// to ensure the correct constructor, we can add/delete attribute to default constructor, instead of to substitute to entire constructor.
function Rabbit() {}
Rabbit.prototype = {
    eats: true,
};

let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;
delete Rabbit.prototype.eats;

console.log(rabbit.eats); // true

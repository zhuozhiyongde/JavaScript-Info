// 对象属性配置
// 属性标志和属性描述符
// let descriptor = Object.getOwnPropertyDescriptor(obj, 'a');

let user = {
    name: 'John',
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

// Property Attributes
// writable: true
// enumerable: true
// configurable: true

// 让属性只读
Object.defineProperty(user, 'name', {
    writable: false,
});
user.name = 'Pete';
console.log(user.name);
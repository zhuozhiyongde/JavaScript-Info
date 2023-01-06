// 对象属性配置
// 属性标志和属性描述符
// let descriptor = Object.getOwnPropertyDescriptor(obj, 'a');
'use strict';
if (false) {
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
    user.name = 'Pete'; // Will be ignored if strict mode is disabled
    console.log(user.name);
    // 让属性不可枚举
    let user2 = {
        name: 'John',
        toString() {
            return this.name;
        },
    };
    for (let key in user2) {
        console.log(key);
    }
    // name;
    // toString;

    Object.defineProperty(user2, 'toString', {
        enumerable: false,
    });
    for (let key in user2) {
        console.log(key);
    }
    // name;
    console.log(Object.keys(user2));
    // [ 'name' ]

    // 让属性不可配置
    let user3 = {};
    Object.defineProperty(user3, 'name', {
        value: 'John',
        configurable: false,
    });
    delete user3.name; // TypeError: Cannot delete property 'name' of #<Object>
}

// defineProperties
let user4 = {};
Object.defineProperties(user4, {
    name: {
        value: 'John',
        writable: false,
    },
    surname: {
        value: 'Smith',
        writable: false,
    },
});
console.log(user4.name);

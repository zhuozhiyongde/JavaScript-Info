'use strict';

/* function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
} */

/* console.log(pow(2, 3));

function pow(x, n) {
    return n === 1 ? x : x * pow(x, n - 1);
} */

// 递归求和
let company = {
    // 是同一个对象，简洁起见被压缩了
    sales: [
        { name: 'John', salary: 1000 },
        { name: 'Alice', salary: 1600 },
    ],
    development: {
        sites: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 },
        ],
        internals: [{ name: 'Jack', salary: 1300 }],
    },
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current) => prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep);
        }
        return sum;
    }
}
// console.log(sumSalaries(company));

// 递归反向输出链表
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

function printReverseLinkedList (list) {
    if (list.next) {
        printReverseLinkedList(list.next);
    }
    console.log(list.value);
}

// printReverseLinkedList(list);

// 循环输出链表
function printReverseLinkedList2 (list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
// console.log('循环输出链表');
// printReverseLinkedList2(list);

// Rest 参数 & Spread 语法
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr_copy = [...arr]
console.log(arr_copy);
console.log(arr === arr_copy);
console.log(JSON.stringify(arr));
console.log(JSON.stringify(arr_copy));
console.log(JSON.stringify(arr) === JSON.stringify(arr_copy));

let obj = {
    a: 1,
    b: 2,
    c: 3,
}
let obj_copy = { ...obj }
console.log(obj_copy);
console.log(obj === obj_copy);
console.log(JSON.stringify(obj)); */

// 变量作用域，闭包
{
    let message = 'window';
    console.log(message);
}
// console.log(message); // ReferenceError: message is not defined

//  for 构造在这里很特殊：在其中声明的变量被视为块的一部分。

// 嵌套函数
/* function sayHiBye(firstName, lastName) {
    // helper nested function to use below
    function getFullName() {
        return firstName + ' ' + lastName;
    }

    console.log('Hello, ' + getFullName());
    console.log('Bye, ' + getFullName());
}
sayHiBye('John', 'Smith'); */
function makeCounter() {
    let count = 0;

    return function () {
        console.log(count);
        return count++;
    };
}
let counter = makeCounter();
counter()
counter()
counter()

// 闭包开发优化
function f() {
    let value = Math.random();

    function g() {
        debugger; // 在 Console 中：输入 alert(value); No such variable!
    }

    return g;
}

let g = f();
g();
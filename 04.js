// Interesting compare

/* let a = {
    value: 1,
};

a[Symbol.toPrimitive] = function (hint) {
    console.log(hint);
    return this.value++;
};

console.log(a == 1 && a == 2 && a == 3);
 */

// WeakMap
let visitCountMap = new WeakMap();

function counterUser(user) {
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let john = { name: 'John' };
counterUser(john);

console.log(visitCountMap.get(john));

john = null;

console.log(visitCountMap.get(john));
/* Output
→ node 04.js
1
undefined
 */

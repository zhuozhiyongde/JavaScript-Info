// Interesting compare

let a = {
    value: 1,
};

a[Symbol.toPrimitive] = function (hint) {
    console.log(hint);
    return this.value++;
};

console.log(a == 1 && a == 2 && a == 3);

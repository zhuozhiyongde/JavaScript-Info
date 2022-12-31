let obj = {}
// alert(obj)
console.log(obj.toString());

console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString() === obj.__proto__.toString());
console.log(obj.toString() === Object.prototype.toString());

console.dir([1,2,3])
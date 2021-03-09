// var a = new String("abc")
// var b = new Number(111)
// var c = new Object({
//   key:123,
// })
// console.log(a);
// console.log(a.__proto__===String.prototype);
// console.log(b);
// console.log(b.__proto__===Number.prototype);
// console.log(c);

// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function(){
//   alert("Hi, my name is "+this.name+", I am "+this.age+" years old!")
// }
// var person = new Person("garfield",18);
// person.greet();
// console.log(person.__proto__ === Person.prototype);



// function Foo(){
//   console.log("这是Foo函数");
// }
// Foo.prototype = { /* */ }

// // 修复丢失的constructor属性
// Object.defineProperty(Foo.prototype, "constructor", {
//   enumerable: false,
//   writable: true,
//   configurable: true,
//   value: Foo    // 让constructor指向Foo
// })

// var a = new Foo();
// console.log(a.constructor === Foo);   // true
// console.log(a.constructor === Object);    // false


// function Supermarket(){}
// Supermarket.prototype.product = "mask";

// // Shop.__proto__ === Supermarket.prototype
// function Shop(){}
// Shop.prototype = new Supermarket();

// // person.__proto__ === Shop.prototype
// var person = new Shop();
// console.log(person.product);      // mask


// var arr = ["我","不","想","开","","学"];
// console.log(arr instanceof Object);
// console.log(arr);

var F = function(){};

Object.prototype.a = function(){};
// Function.prototype.b = function(){};
F.prototype.b = function(){};
var f = new F();
console.log(f.a);
console.log(f.b);
// class Person{
//   name: string = "garfield";
//   static age: number = 18;
//   readonly sex: number = 1;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   sayHello(){
//     console.log("hello, my name is "+this.name);
//   }
// }
// const per = new Person();
// console.log(Person.age);    // 18
// console.log(per.name);      // garfield
// per.sayHello()              // hello, my name is garfield
// 构造函数
// class Dog{
//   name: string;
//   age: number;
//   // 构造函数
//   constructor(name: string, age: number){
//     this.name = name;
//     this.age = age;
//   }
//   bark(){
//     alert("wang wang wang!!!")
//   }
// }
// const dog = new Dog("zhangsan", 2);
// const dog2 = new Dog("lisi", 4);
// console.log(dog);
// console.log(dog2);
// 类的继承
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.sayHello = function () {
        console.log("hahaha");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sayHello = function () {
        console.log("wang wang wang!!!");
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHello = function () {
        console.log("miao~~~~~");
    };
    return Cat;
}(Animal));
var dog = new Dog("rango", 2);
var cat = new Cat("Rach", 4);
dog.sayHello();
console.log(dog);
cat.sayHello();
console.log(cat);

var a = new String("abc")
var b = new Number(111)
var c = new Object({
  key:123,
})
console.log(a);
console.log(a.__proto__===String.prototype);
console.log(b);
console.log(b.__proto__===Number.prototype);
console.log(c);

function Person(name,age){
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function(){
  alert("Hi, my name is "+this.name+", I am "+this.age+" years old!")
}
var person = new Person("garfield",18);
person.greet();
console.log(person.__proto__ === Person.prototype);

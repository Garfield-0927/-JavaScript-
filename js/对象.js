// 可计算属性名
// var prefix = "foo";
// var myObj = {
//   [prefix + "bar"]: "hello",
//   [prefix + "baz"]: "object"
// }
// console.log(myObj.foobar);    // hello
// console.log(myObj.foobaz);    // object

// 浅拷贝深拷贝
// var obj1 = {
//   a : 2
// }
// var obj2 = obj1;
// obj1.a = 3;
// console.log(obj2);    // {a:3}

// var a = 2;
// var b = a;
// a = 3
// console.log(b);       // 2


// 深拷贝1
// var obj1 = {
//   a : 2,
//   person:{
//     name:"zhangsan"
//   }
// }
// var obj2 = JSON.parse(JSON.stringify(obj1));
// obj1.a = 3;
// obj1.person.name = "lisi"
// console.log(obj2.a);    // 2
// console.log(obj2.person.name);    // zhangsan

// 深拷贝2
var obj1 = {
  a : 2,
  person:{
    name:"zhangsan"
  }
}
var obj2 = {};
Object.assign(obj2, obj1)
obj1.a = 3;
obj1.person.name = "lisi"
console.log(obj2.a);    // 2
console.log(obj2.person.name);    // lisi
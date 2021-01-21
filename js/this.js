// function baz() {
//   // 当前调用栈是：baz
//   // 因此，当前调用位置是全局作用域
//   console.log("baz");
//   bar(); // <-- bar 的调用位置
// }

// function bar() {
//   // 当前调用栈是 baz -> bar
//   // 因此，当前调用位置在 baz 中
//   console.log("bar");
//   foo(); // <-- foo 的调用位置
// }

// function foo() {
//   // 当前调用栈是 baz -> bar -> foo
//   // 因此，当前调用位置在 bar 中
//   console.log("foo");
// }
// baz(); // <-- baz 的调用位置


// 默认绑定
// function foo(){
//   console.log(this.a);
// }

// var a = 2;
// foo();     // 2


// 隐式绑定
// function foo(){
//   console.log(this.a);
// }
// var obj = {
//   a : 2,
//   foo: foo
// }
// obj.foo()   // 2

// 隐式丢失
// function foo(){
//   console.log(this.a);
// }
// var obj = {
//   a:2,
//   foo:foo
// }
// var a = 3;
// var baz = obj.foo;
// baz()   // 3

// call 
// function foo(){
//   console.log(this.a);
// }
// var obj = {
//   a:2,
// }
// foo.call(obj)   // 2

// var obj = {
//   a:2,
//   foo: function (){
//     console.log(this.a);
//   }
// }
// obj.foo()

// function foo(a) {
//   this.a = a;
// }
// var bar = new foo(2);
// console.log(bar.a); // 2


function foo(){
  return () => {
    // this 继承自foo()
    console.log(this.a);
  }
}

var obj1 = {
  a:2
}
var obj2 = {
  a:3
}
var bar = foo.call(obj1)
bar.call(obj2)
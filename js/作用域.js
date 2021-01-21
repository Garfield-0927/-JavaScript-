// 函数作用域
// var a = 2;
// (function foo(){
//   var a = 3;
//   console.log(a+" 这里是foo函数中的a");
// })();
// console.log(a+" 这里是全局作用域下中的a");
// /*
// foo()
// 在全局作用域下不能执行foo函数，是因为foo函数的访问权限被限制了
// 会导致foo is not defined的错
// */


// for (var i = 0; i < 10; i++){
//   console.log(i + "这里是for循环中的i");
// }

// console.log(i + "这里是全局作用域下的i");

// for (let i = 0; i < 10; i++){
//   console.log(i + "这里是for循环中的i");
// }

// console.log(i + "这里是全局作用域下的i");


// var foo = true;

// if(foo){
//   var a = 2;
//   const b = 3;
//   console.log("这里是var声明的a："+a);
//   console.log("这里是const声明的b："+b);
//   a = 3;
//   b = 4;    //TypeError: Assignment to constant variable.
// }

// console.log(a);   // 3
// console.log(b);   // ReferenceError!


// a = 2;
// var a ;
// console.log(a);    // 2


// console.log(a);
// var a = 2;

// foo();
// var foo = function bar(){
//   var a =2 ;
//   console.log(a);
// }

foo();
var foo;
function foo(){
    console.log(1);
}
foo = function(){
    console.log(2);
}

foo()
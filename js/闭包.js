// function foo(){
//   var a = 2;
  
//   function bar(){
//       console.log(a);
//   }
//   return bar;
// }
// var baz = foo();
// baz()

// function wait(message){
//   setTimeout(()=>{
//     console.log(message);
//   },1000)
// }

// wait("this is closure bot")

function debounce (func, delay){
  let timer = null;
  return function(...args){
    if(timer)
      clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

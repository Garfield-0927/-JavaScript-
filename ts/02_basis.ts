let a: number;
a = 2;
a = 3;
// a = "hello'

let b = false;
// b = 123

function sum(a: number, b: number){
  return a + b;
}
sum(123,456);
// sum(123,"456");
// sum(123,456,789)

let c: any;
c = 2;
c = false


let beauty : {
  name: string,
  age: number
} = {
  name: "Rachel",
  age: 18
}

let beauties : string [] = ["Rachel","Lily","Lucy"]

class Person{}
let rachel : Person = new Person()

let greeting :()=>string = ()=>{return "how are you doing --Joey"}
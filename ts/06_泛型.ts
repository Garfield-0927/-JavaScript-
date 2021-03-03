function fn<T>(a:T){
  return a;
}
let res = fn<string>("garfield")  // 指定泛型为string
let res2 = fn<number>(123456)   // 指定泛型为number


function fn2<T, K>(a:T, b:K):T{
  console.log(b);
  return a;
}

let res3 = fn2<number, string>(18, "garfield")

interface Inter{
  length: number;
}

function fn3<T extends Inter>(a:T):number{
  return a.length
}
let res4 = fn3("garfield")
// console.log(res4);    //  8

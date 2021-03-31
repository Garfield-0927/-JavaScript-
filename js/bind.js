// call
function person(a,b,c,d){
  console.log(this.name);
  console.log(a,b,c,d);
}

var per = {
  name:"garfield"
}

Function.prototype.newCall = function(obj){
  obj.p = this;
  var newArgs = [];
  for (const arg of arguments) {
    if (arg === arguments[0]) {
      
    }else {
      newArgs.push(arg)
    }
  }
  const res = obj.p(...newArgs);
  delete obj.p;
  return res;
}
const p = person.newCall(per,1,2,3,4,5)
console.log(p);

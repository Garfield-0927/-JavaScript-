# 原生js实现call，bind，apply

### 1、call

#### 1.1 call定义

```javascript
function person(){
  console.log(this.name);
}
var per = {
  name:"garfield"
}
person.call(per);	// garfield
```

​		_call_方法实现了将this指针绑定在了特定位置，在上述例子中，函数person中是没有name属性的，但是通过_call_方法，我们强行将this指针绑定在了per这个对象上，这就是this中的call绑定。



#### 1.2 call实现

​		首先我们先要问自己，这个call方法到底是在哪？实际上，call方法时内置在`Function.prototype`中的，因此如果我们要手动实现call方法，需要在`Function.prototype`重写call方法。


## 0. this是什么

>  		this 是在**运行时进行绑定的**，并不是在编写时绑定，它的**上下文**取决于**函数调用时**的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（**调用栈**）、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。





## 1. this的调用位置

#### 1.1 调用栈

```javascript
function baz() {
  // 当前调用栈是：baz
  // 因此，当前调用位置是全局作用域
  console.log("baz");
  bar(); // <-- bar 的调用位置
}

function bar() {
  // 当前调用栈是 baz -> bar
  // 因此，当前调用位置在 baz 中
  console.log("bar");
  foo(); // <-- foo 的调用位置
}

function foo() {
  // 当前调用栈是 baz -> bar -> foo
  // 因此，当前调用位置在 bar 中
  console.log("foo");
}
baz(); // <-- baz 的调用位置
```

​		其实函数的调用栈和数据结构中的栈不能说相似，只能说是一模一样。画个图就一目了然。

| foo() |
| :---: |
| bar() |
| baz() |

​		每执行一个函数，就把该函数压入栈中，当函数运行完毕，运行完的函数出栈。这就是函数栈。



## 2. 绑定规则

##### 2.1 默认绑定

```javascript
function foo(){
  console.log(this.a);
}

var a = 2;
foo();     // 2
```

我们可以看到 foo 函数中的this.a被解析成了全局作用域下的a，这是因为foo函数并没有在任何其他函数的装饰下运行（外层没有其他函数栈），因此this被绑定到了全局作用域。这就是默认绑定。

但是值得注意的是，如果在严格模式下，输出结果是TypeError，因为this被绑定到了undefined。

```javascript
function foo() {
"use strict";
  console.log( this.a );
}
var a = 2;
foo(); // TypeError: this is undefined
```



##### 2.2 隐式绑定

```javascript
// 隐式绑定
function foo(){
  console.log(this.a);
}
var obj = {
  a : 2,
  foo: foo
}
obj.foo()   // 2
```

​		这段代码中，obj对象中引用了foo函数，那么可以通俗地理解为obj对象“拥有”或者“包含” foo 函数，但是严格上来说这个函数不属于obj对象，因为obj对象只是引用了它。

​		当 foo() 被调用时，它的落脚点确实指向 obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象（在本例中就是obj对象）。因为调用 foo() 时 this 被绑定到 obj，因此 this.a 和 obj.a 是一样的。

##### 隐式丢失

```javascript
// 隐式丢失
function foo(){
  console.log(this.a);
}
var obj = {
  a:2,
  foo:foo
}
var a = 3;
var baz = obj.foo;
baz()   // 3
```

​		bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。



##### 2.3 显示绑定

```javascript
function foo(){
  console.log(this.a);
}
var obj = {
  a:2,
}
foo.call(obj)   // 2
```

通过 foo.call(..)，我们可以在调用 foo 时强制把它的 this 绑定到 obj 上。

也就是说上面这段代码可以理解为如下代码：

```javascript
var obj = {
  a:2,
  foo: function (){
    console.log(this.a);
  }
}
obj.foo()
```

call,apply,bind都是显性绑定的方法，都是JavaScript函数原型中自带的方法。



##### 2.4 new绑定

```javascript
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2
```

使用 new 来调用 foo(..) 时，我们会构造一个新对象并把它绑定到 foo(..) 调用中的 this 上。new 是最后一种可以影响函数调用时 this 绑定行为的方法，我们称之为 new 绑定。



## 3. this与箭头函数

```javascript
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
bar.call(obj2)		// 2
```

​		foo() 内部创建的箭头函数会捕获调用时 foo() 的 this。由于 foo() 的 this 绑定到 obj1， bar（引用箭头函数）的 this 也会绑定到 obj1，箭头函数的绑定无法被修改。（new 也不行！）



## 4. 小结

​		如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后 就可以顺序应用下面这四条规则来判断 this 的绑定对象。 

1. 由 new 调用？绑定到新创建的对象。
2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。
## 1、Promise的含义

​		promise是es6中新出来的对象，在异步编程中有着重要作用。

> 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点：

- 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态。

  - pending（进行中）
  - fulfilled（已成功）
  - rejected（已失败）

  只有异步操作的结果才能改变当前的状态。

- 一旦状态改变，状态就不会再发生变化。状态变化只有两种情况。
  - 从pending到fulfilled
  - 从pending到rejected

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的api，使得控制异步操作更加容易。



## 2、Promise基本用法

#### 2.1 生成一个Promise实例

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

​		和实例化对象一样，用new关键词来生成Promise实例。Promise的constructor接受一个函数作为参数，而这个函数又有两个参数，这两个参数是函数（注意这两个参数不用自己定义，JavaScript引擎已经帮我们定义好了），这两个参数分别是resolve和reject。当然你可以自己定义参数的名称。为了统一，这里就假设我定义的两个参数名是resolve和reject。

- resolve函数的作用是将Promise的状态从pending变成fulfilled，在异步操作成功时，将所携带的参数传递出去。

- reject函数的作用是将Promise的状态从pending变成rejected，在异步操作失败时，将所携带的参数传递出去。

  

#### 2.2 then

​		then方法可以接受两个回调函数作为参数，第一个回调函数在Promise对象状态变为fulfilled时调用，第二个回调函数在Promise对象状态变为rejected时调用。

上代码！！

```javascript
function timeout(ms){
  let a = "i will be shown when promise is resolved";
  let b = "i will be shown when promise is rejected";
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (ms>100) {
        resolve(a);     // 改变状态为fulfilled
      } else{
        reject(b)       // 改变状态为rejected
      }
    }, ms)
  })
}

timeout(100).then(res=>{
  console.log(res);
}, err=>{
  console.log(err);		// i will be shown when promise is rejected
})

timeout(200).then(res=>{
  console.log(res);
}, err=>{
  console.log(err);		// i will be shown when promise is resolved
})
```

​		这里我们用setTimeout函数来模拟真实开发中的异步操作，当参数ms>100时，将Promise的状态从pending改变成fulfilled，反之，将Promise的状态从pending改变成rejected。每当状态发生改变，就会触发then方法中的相应函数。

​		在调用该函数时，如果Promise的最终状态是fulfilled，那么将会执行then中的第一个回调函数，而如果最终状态时rejected，则会执行then中的第二个回调函数。



#### 2.3 catch

​		出了then之外，Promise的原型上还有catch方法，catch用于指定发生错误时的回调函数。来看一个例子：

```javascript
function timeout(ms){
  let a = "i will be shown when promise is resolved";
  let b = "i will be shown when promise is rejected";
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (ms>100) {
        resolve(a);     // 改变状态为fulfilled
      } else{
        reject(b)       // 改变状态为rejected
      }
    }, ms)
  })
}
const p = timeout(300);
p.then((val) => console.log('fulfilled:', val))		// fulfilled
 .catch((err) => console.log('rejected', err));
```

​		上面这个例子中，p是Promise的一个实例。这里我们发现then中只传了一个函数，那么另外一个函数在哪里呢？实际上就是由catch来处理了。当p的状态变成fulfilled，那么就会调用then中的函数；如果p的状态变成rejected，则会调用catch中的方法处理这个错误。那和在then中直接写好两个函数有什么区别呢？区别在于，使用catch过程中，如果then中的方法在运行时抛出错误，也会被catch中的方法捕获。

```javascript
const q = timeout(100);
q.then((val) => console.log('fulfilled:', val))
  .catch((err) => console.log('rejected', err));    // rejected

const a = timeout(100);
a.then((val) => {throw new Error("error")})
  .catch((err) => console.log('rejected', err));    // rejected
```

​		**一般来说，不要在`then()`方法里面定义 Reject 状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。**



#### 2.4 finally

​		`finally()`方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

​		`finally()`的作用是无论Promise的最终状态如何，里面的代码始终会被执行。finally有以下两个特点：

- 不接受任何参数。
- 与Promise状态无关，即不依赖于Promise的运行结果。

用法如下:

```javascript
const q = timeout(100);
q.then((val) => {throw new Error("error")})
  .catch((err) => console.log('rejected', err))		// rejected
  .finally(()=>{
    console.log("whatever the status of Promise is, i will always be executed!");		// whatever the status of Promise is, i will always be executed!
  });
```



#### 2.5 all

​		`Promise.all()`方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。`Promise.all()`方法接受一个数组作为参数，数组中的元素都是Promise实例。

使用如下：

```javascript
const a = timeout(1);
const b = timeout(50);
const c = timeout(100);
const p = Promise.all([a,b,c])
```

​		由于all方法的返回值也是一个Promise对象，因此p也会有状态，而p的状态由a，b，c三者决定，分成两中情况。

- 只有`a`、`b`、`c`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`a`、`b`、`c`的返回值组成一个数组，传递给`p`的回调函数。

- 只要`a`、`b`、`c`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。



## 3、Promise封装axios

​		在vue开发中，axios是开发者常用的开发插件，用于跟后台交互。如果项目中每发一次请求，就用axios原生来写，那么如果axios不维护了，代码改变的地方就很多，因此通常在进行开发的时候，在使用第三方框架时，开发人员会进行一次封装，减少对第三方插件的依赖，也便于后期的维护。这里就用axios举例。



```javascript
import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'/api',
    withCredentials: true,
    // baseURL: 'http://localhost:5000/api',
    timeout: 5000,

  })
  // 发送网络请求
  return instance(config);
}
```

```javascript
// 获取评论的api
export function getComment(){
  return request({
    url:'/comment/get'
  })
}
```

```javascript
getComment().then(res=>{
    console.log(res);
}, err=>{
    console.log(err);
})
```

